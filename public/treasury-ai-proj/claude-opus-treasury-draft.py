"""
US Treasury note/bond analytics.

Implements the standard between-coupon dirty-price formula with actual/actual
day count and (1 + y/2)^(i + z/x) discounting.  Falls back to simple-interest
discounting when only one coupon period remains.

All rates (coupon and yield) are quoted in percent; prices are percent of par.
"""

from datetime import datetime, timedelta


class USTreasurySecurity:
    # ------------------------------------------------------------------ #
    # construction                                                       #
    # ------------------------------------------------------------------ #
    def __init__(self, quoteString, N, a, tradeDate, prevCouponDate,
                 nextCouponDate, holidayCalendar):
        self._N = int(N)
        self._a = float(a)                         # annual coupon, percent
        self._c = self._a / 2.0                    # per-period coupon, percent

        self._cleanPrice = self._parseQuote(quoteString)

        self._tradeDate      = self._parseDate(tradeDate)
        self._prevCouponDate = self._parseDate(prevCouponDate)
        self._nextCouponDate = self._parseDate(nextCouponDate)

        self._holidays = self._loadHolidays(holidayCalendar)
        self._settleDate = self._nextBusinessDay(self._tradeDate)

        # actual/actual day fractions
        self._x = (self._nextCouponDate - self._prevCouponDate).days  # period
        self._z = (self._nextCouponDate - self._settleDate).days      # to next
        if self._x <= 0:
            raise ValueError("nextCouponDate must follow prevCouponDate")
        if not (0 <= self._z <= self._x):
            raise ValueError("settlement is outside the current coupon period")

        # accrued interest = coupon * (period elapsed)/period
        self._accrued = self._c * (self._x - self._z) / self._x
        self._dirtyPrice = self._cleanPrice + self._accrued

        # cache
        self._ytm = None

    # ------------------------------------------------------------------ #
    # public API                                                         #
    # ------------------------------------------------------------------ #
    def getCleanPrice(self):
        return float(self._cleanPrice)

    def getDirtyPrice(self):
        return float(self._dirtyPrice)

    def getYTM(self):
        if self._ytm is None:
            self._ytm = self._solveYTM()
        return float(self._ytm)

    def getPV01(self):
        """Magnitude of dirty-price change for a +1 bp move in annual yield."""
        y = self.getYTM() / 100.0                  # decimal annual yield
        dPdy = self._dPdy(y)                       # derivative wrt decimal y
        # 1 bp = 1e-4 in decimal terms; report as a positive number.
        return float(-dPdy * 1.0e-4)

    def getModDur(self):
        y = self.getYTM() / 100.0
        dPdy = self._dPdy(y)
        return float(-dPdy / self._dirtyPrice)

    def getMacaulayDur(self):
        y = self.getYTM() / 100.0
        return float(self.getModDur() * (1.0 + y / 2.0))

    def getConvexity(self):
        y = self.getYTM() / 100.0
        d2Pdy2 = self._d2Pdy2(y)
        return float(d2Pdy2 / self._dirtyPrice)

    # ------------------------------------------------------------------ #
    # quote / date helpers                                               #
    # ------------------------------------------------------------------ #
    @staticmethod
    def _parseQuote(s):
        """
        "100-24"     -> 100 + 24/32
        "100-24+"    -> 100 + 24/32 + 1/64
        "100-24++"   -> 100 + 24/32 + 1/128
        "99-12.25"   -> 99  + 12.25/32
        """
        s = s.strip()
        if "-" not in s:
            raise ValueError("quote must contain '-' separator: " + s)
        whole_str, frac_str = s.split("-", 1)
        whole = float(whole_str)

        plus_extra = 0.0
        if frac_str.endswith("++"):
            plus_extra = 1.0 / 128.0
            frac_str = frac_str[:-2]
        elif frac_str.endswith("+"):
            plus_extra = 1.0 / 64.0
            frac_str = frac_str[:-1]

        thirty_seconds = float(frac_str)           # may be e.g. 12.25
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
        nd = d + timedelta(days=1)
        while nd.weekday() >= 5 or nd in self._holidays:
            nd += timedelta(days=1)
        return nd

    # ------------------------------------------------------------------ #
    # core pricing                                                       #
    # ------------------------------------------------------------------ #
    def _priceFromYield(self, y):
        """
        Dirty price as a function of annual yield y (decimal).
        N >= 2 : compounded discounting  (1 + y/2)^(i + z/x), i = 0..N-1
        N == 1 : simple-interest discounting  (1 + (y/2)*(z/x))
        """
        c = self._c
        N = self._N
        v = self._z / self._x                      # fraction of period left
        r = y / 2.0                                # per-period yield (decimal)

        if N == 1:
            return (100.0 + c) / (1.0 + r * v)

        P = 0.0
        for i in range(N):
            cf = c + 100.0 if i == N - 1 else c
            P += cf / (1.0 + r) ** (i + v)
        return P

    # First derivative wrt annual yield y (decimal).
    def _dPdy(self, y):
        c = self._c
        N = self._N
        v = self._z / self._x
        r = y / 2.0

        if N == 1:
            num = 100.0 + c
            den = 1.0 + r * v
            # dP/dr = -num * v / den^2 ; dP/dy = (1/2) dP/dr
            return -0.5 * num * v / (den * den)

        # P = sum cf * (1+r)^-(i+v),  dP/dr = -sum (i+v) cf (1+r)^-(i+v+1)
        dPdr = 0.0
        for i in range(N):
            cf = c + 100.0 if i == N - 1 else c
            t = i + v
            dPdr -= t * cf / (1.0 + r) ** (t + 1.0)
        return 0.5 * dPdr

    # Second derivative wrt annual yield y (decimal).
    def _d2Pdy2(self, y):
        c = self._c
        N = self._N
        v = self._z / self._x
        r = y / 2.0

        if N == 1:
            num = 100.0 + c
            den = 1.0 + r * v
            # d2P/dr2 = 2 num v^2 / den^3 ; d2P/dy2 = (1/4) d2P/dr2
            return 0.25 * 2.0 * num * v * v / (den ** 3)

        d2Pdr2 = 0.0
        for i in range(N):
            cf = c + 100.0 if i == N - 1 else c
            t = i + v
            d2Pdr2 += t * (t + 1.0) * cf / (1.0 + r) ** (t + 2.0)
        return 0.25 * d2Pdr2

    # ------------------------------------------------------------------ #
    # Newton solver for YTM                                              #
    # ------------------------------------------------------------------ #
    def _solveYTM(self):
        """Solve P(y) = dirtyPrice with Newton's method, tol 1e-14."""
        target = self._dirtyPrice
        # Start with current yield as an initial guess (in decimal).
        y = (self._a / self._cleanPrice) if self._cleanPrice > 0 else 0.05
        y = max(min(y, 1.0), -0.5)                 # keep guess sane

        tol = 1.0e-14
        for _ in range(200):
            f  = self._priceFromYield(y) - target
            fp = self._dPdy(y)
            if fp == 0.0:
                break
            step = f / fp
            y_new = y - step
            # guard: per-period rate must stay > -1
            if y_new <= -1.99:
                y_new = (y - 1.99) / 2.0
            if abs(y_new - y) < tol and abs(f) < tol:
                y = y_new
                break
            y = y_new
        return y * 100.0                           # return as percent
