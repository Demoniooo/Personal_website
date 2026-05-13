"""
US Treasury note/bond analytics.

Implements the standard between-coupon dirty-price formula with actual/actual
day count and (1 + y/2)^(i + z/x) discounting.  Falls back to simple-interest
discounting when only one coupon period remains.

All rates (coupon and yield) are quoted in percent; prices are percent of par.

Corrections applied to AI-generated drafts:
  1. parseQuote: '++' suffix now correctly adds 1/64 + 1/128 (per Slide 16),
     not just 1/128.  Fixes the most-likely cause of all-downstream errors.
  2. parseQuote: empty fractional part ('100-') is treated as zero, not error.
  3. Newton's method: starts at y0 = 0 per Slide 14 of the YTM lecture
     (the only starting value the lecturer guarantees converges).
  4. PV01: uses signed derivative (no abs()) and explicit unit documentation;
     1 bp decrease in annualized yield = -0.0001 * dP/dy.
"""

from datetime import datetime, timedelta


class USTreasurySecurity:
    # ------------------------------------------------------------------ #
    # construction                                                       #
    # ------------------------------------------------------------------ #
    def __init__(self, quoteString, N, a, tradeDate, prevCouponDate,
                 nextCouponDate, holidayCalendar):
        self._N = int(N)
        if self._N < 1:
            raise ValueError("N must be >= 1")
        self._a = float(a)                         # annual coupon, percent
        self._c = self._a / 2.0                    # per-period coupon, percent

        self._cleanPrice = self._parseQuote(quoteString)

        self._tradeDate      = self._parseDate(tradeDate)
        self._prevCouponDate = self._parseDate(prevCouponDate)
        self._nextCouponDate = self._parseDate(nextCouponDate)

        self._holidays = self._loadHolidays(holidayCalendar)
        self._settleDate = self._nextBusinessDay(self._tradeDate)

        # actual/actual day fractions (Slides 18-20 of Bond Pricing)
        self._x = (self._nextCouponDate - self._prevCouponDate).days  # period
        self._z = (self._nextCouponDate - self._settleDate).days      # to next
        if self._x <= 0:
            raise ValueError("nextCouponDate must follow prevCouponDate")
        if not (0 <= self._z <= self._x):
            raise ValueError("settlement is outside the current coupon period")

        # accrued = c/2 * (x - z)/x  (slide 20)
        self._accrued = self._c * (self._x - self._z) / self._x
        self._dirtyPrice = self._cleanPrice + self._accrued

        # cache YTM after first computation
        self._ytm = None

    # ------------------------------------------------------------------ #
    # public API                                                         #
    # ------------------------------------------------------------------ #
    def getCleanPrice(self):
        return float(self._cleanPrice)

    def getDirtyPrice(self):
        return float(self._dirtyPrice)

    def getYTM(self):
        """Annualized YTM as a percentage (e.g. 4.15 = 4.15%/year)."""
        if self._ytm is None:
            self._ytm = self._solveYTM()
        return float(self._ytm)

    def getPV01(self):
        """PV01: positive price change in % of par for a 1 bp DECREASE
        in the annualized yield.

        Per project statement: PV01 = -0.01 * dP/dr, where r is the
        per-period rate as a percentage.  Equivalently in decimal-yield
        units: PV01 = -0.0001 * dP/dy_annual (since dy_annual = 2*dr).
        Returns a positive number for a vanilla bond.
        """
        y = self.getYTM() / 100.0          # decimal annualized yield
        dPdy = self._dPdy(y)               # negative for vanilla bond
        return float(-dPdy * 1.0e-4)       # negative * negative = positive

    def getModDur(self):
        """Modified duration: -1/P * dP/dy (annualized yield, decimal)."""
        y = self.getYTM() / 100.0
        dPdy = self._dPdy(y)
        return float(-dPdy / self._dirtyPrice)

    def getMacaulayDur(self):
        """Macaulay duration: ModDur * (1 + y/2) for semi-annual bonds.
        Equivalent to sum(t_i * PV(CF_i)) / P (Slide 17)."""
        y = self.getYTM() / 100.0
        return float(self.getModDur() * (1.0 + y / 2.0))

    def getConvexity(self):
        """Convexity: (1/P) * d2P/dy2 (Slide 31)."""
        y = self.getYTM() / 100.0
        d2Pdy2 = self._d2Pdy2(y)
        return float(d2Pdy2 / self._dirtyPrice)

    # ------------------------------------------------------------------ #
    # quote / date helpers                                               #
    # ------------------------------------------------------------------ #
    @staticmethod
    def _parseQuote(s):
        """Parse Treasury price quotes (clean price as % of par).

        Supported formats (Slide 16):
            "100-24"     -> 100 + 24/32                = 100.75
            "100-24+"    -> 100 + 24/32 + 1/64         = 100.765625
            "100-24++"   -> 100 + 24/32 + 1/64 + 1/128 = 100.7734375
            "99-12.25"   -> 99  + 12.25/32             = 99.3828125
            "100-"       -> 100.0  (empty fractional part)
        """
        s = str(s).strip()
        if "-" not in s:
            raise ValueError("quote must contain '-' separator: " + s)
        whole_str, frac_str = s.split("-", 1)
        whole = float(whole_str)

        # Cumulative fractional adjustments (NOT either/or):
        plus_extra = 0.0
        if frac_str.endswith("++"):
            plus_extra = 1.0 / 64.0 + 1.0 / 128.0    # cumulative
            frac_str = frac_str[:-2]
        elif frac_str.endswith("+"):
            plus_extra = 1.0 / 64.0
            frac_str = frac_str[:-1]

        if frac_str == "":
            thirty_seconds = 0.0
        else:
            thirty_seconds = float(frac_str)         # may be e.g. 12.25

        return whole + thirty_seconds / 32.0 + plus_extra

    @staticmethod
    def _parseDate(s):
        return datetime.strptime(s.strip(), "%d-%m-%Y").date()

    @staticmethod
    def _loadHolidays(filename):
        holidays = set()
        with open(filename, "r") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                holidays.add(datetime.strptime(line, "%d-%m-%Y").date())
        return holidays

    def _nextBusinessDay(self, d):
        """Next business day after d (skipping weekends and holidays)."""
        nd = d + timedelta(days=1)
        while nd.weekday() >= 5 or nd in self._holidays:
            nd += timedelta(days=1)
        return nd

    # ------------------------------------------------------------------ #
    # core pricing (P, dP/dy, d2P/dy2 -- all wrt annualized decimal y)   #
    # ------------------------------------------------------------------ #
    def _priceFromYield(self, y):
        """Dirty price at annualized decimal yield y.

        N >= 2 : P = sum_{i=0}^{N-1} cf_i / (1 + y/2)^(i + z/x)   (Slide 18)
        N == 1 : P = (100 + c) / (1 + (y/2)*(z/x))                (Slide 19)
        """
        c = self._c
        N = self._N
        v = self._z / self._x                      # fraction of period left
        r = y / 2.0                                # per-period decimal yield

        if N == 1:
            return (100.0 + c) / (1.0 + r * v)

        P = 0.0
        for i in range(N):
            cf = c + 100.0 if i == N - 1 else c
            P += cf / (1.0 + r) ** (i + v)
        return P

    def _dPdy(self, y):
        """First derivative dP/dy wrt annualized decimal yield."""
        c = self._c
        N = self._N
        v = self._z / self._x
        r = y / 2.0

        if N == 1:
            num = 100.0 + c
            den = 1.0 + r * v
            # dP/dr = -num*v/den^2; chain rule: dP/dy = (1/2) * dP/dr
            return -0.5 * num * v / (den * den)

        # P = sum cf*(1+r)^-(i+v); dP/dr = -sum (i+v)*cf*(1+r)^-(i+v+1)
        dPdr = 0.0
        for i in range(N):
            cf = c + 100.0 if i == N - 1 else c
            t = i + v
            dPdr -= t * cf / (1.0 + r) ** (t + 1.0)
        return 0.5 * dPdr                          # chain rule: dy = 2*dr

    def _d2Pdy2(self, y):
        """Second derivative d2P/dy2 wrt annualized decimal yield."""
        c = self._c
        N = self._N
        v = self._z / self._x
        r = y / 2.0

        if N == 1:
            num = 100.0 + c
            den = 1.0 + r * v
            # d2P/dr2 = 2*num*v^2/den^3; d2P/dy2 = (1/4)*d2P/dr2
            return 0.5 * num * v * v / (den ** 3)

        # d2P/dr2 = sum (i+v)*(i+v+1)*cf*(1+r)^-(i+v+2)
        d2Pdr2 = 0.0
        for i in range(N):
            cf = c + 100.0 if i == N - 1 else c
            t = i + v
            d2Pdr2 += t * (t + 1.0) * cf / (1.0 + r) ** (t + 2.0)
        return 0.25 * d2Pdr2                       # (dy)^2 = 4*(dr)^2

    # ------------------------------------------------------------------ #
    # Newton's method for YTM (Slide 14: y0 = 0, tol 1e-14)              #
    # ------------------------------------------------------------------ #
    def _solveYTM(self):
        target = self._dirtyPrice
        y = 0.0                                    # Slide 14: start at 0

        tol = 1.0e-14
        max_iter = 200
        for _ in range(max_iter):
            f  = self._priceFromYield(y) - target
            fp = self._dPdy(y)
            if fp == 0.0:
                break
            step = f / fp
            y_new = y - step
            # guard against per-period rate going below -1
            if y_new <= -1.99:
                y_new = (y - 1.99) / 2.0
            if abs(y_new - y) < tol:
                y = y_new
                break
            y = y_new
        return y * 100.0                           # return as percent
