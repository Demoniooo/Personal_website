from datetime import datetime, timedelta
from typing import Set


class USTreasurySecurity:
    """
    US Treasury note/bond analytics using Treasury 32nds quotes, actual/actual
    between-coupon accrual, next-business-day settlement, and semiannual coupons.

    All rates are percentages. All prices are percentages of par.
    """

    def __init__(
        self,
        quoteString,
        N,
        a,
        tradeDate,
        prevCouponDate,
        nextCouponDate,
        holidayCalendar,
    ):
        self.quoteString = quoteString
        self.N = int(N)
        self.a = float(a)

        self.tradeDate = self._parse_date(tradeDate)
        self.prevCouponDate = self._parse_date(prevCouponDate)
        self.nextCouponDate = self._parse_date(nextCouponDate)

        self.holidays = self._load_holidays(holidayCalendar)
        self.settlementDate = self._next_business_day(self.tradeDate)

        self.cleanPrice = self._parse_treasury_quote(quoteString)
        self.couponPerPeriod = self.a / 2.0

        self.x = float((self.nextCouponDate - self.prevCouponDate).days)
        self.z = float((self.nextCouponDate - self.settlementDate).days)

        if self.N <= 0:
            raise ValueError("N must be a positive integer.")
        if self.x <= 0:
            raise ValueError("nextCouponDate must be after prevCouponDate.")
        if self.z < 0:
            raise ValueError("settlement date cannot be after nextCouponDate.")

        self.w = self.z / self.x

    @staticmethod
    def _parse_date(date_string):
        return datetime.strptime(date_string, "%d-%m-%Y").date()

    def _load_holidays(self, holiday_calendar) -> Set[datetime.date]:
        holidays = set()
        with open(holiday_calendar, "r") as f:
            for line in f:
                s = line.strip()
                if s:
                    holidays.add(self._parse_date(s))
        return holidays

    def _is_business_day(self, date_value):
        return date_value.weekday() < 5 and date_value not in self.holidays

    def _next_business_day(self, date_value):
        d = date_value + timedelta(days=1)
        while not self._is_business_day(d):
            d += timedelta(days=1)
        return d

    @staticmethod
    def _parse_treasury_quote(quote_string):
        s = str(quote_string).strip()
        if "-" not in s:
            raise ValueError("Treasury quote must contain '-'.")

        whole_part, frac_part = s.split("-", 1)
        whole = float(whole_part)

        plus_count = 0
        while frac_part.endswith("+"):
            plus_count += 1
            frac_part = frac_part[:-1]

        if plus_count > 2:
            raise ValueError("Treasury quote supports at most two trailing plus signs.")

        if frac_part == "":
            thirty_seconds = 0.0
        else:
            thirty_seconds = float(frac_part)

        price = whole + thirty_seconds / 32.0

        if plus_count == 1:
            price += 1.0 / 64.0
        elif plus_count == 2:
            price += 1.0 / 128.0

        return price

    def getCleanPrice(self):
        return float(self.cleanPrice)

    def getDirtyPrice(self):
        accrued_interest = self.couponPerPeriod * (1.0 - self.w)
        return float(self.cleanPrice + accrued_interest)

    def _model_price_from_annual_yield_decimal(self, annual_yield):
        r = annual_yield / 2.0
        c = self.couponPerPeriod

        if self.N == 1:
            return (100.0 + c) / (1.0 + r * self.w)

        q = 1.0 + r
        price = 0.0

        for i in range(self.N):
            exponent = i + self.w
            cash_flow = c
            if i == self.N - 1:
                cash_flow += 100.0
            price += cash_flow / (q ** exponent)

        return price

    def _first_derivative_price_wrt_annual_yield_decimal(self, annual_yield):
        r = annual_yield / 2.0
        c = self.couponPerPeriod

        if self.N == 1:
            denominator = 1.0 + r * self.w
            return -(100.0 + c) * self.w / (2.0 * denominator ** 2)

        q = 1.0 + r
        derivative = 0.0

        for i in range(self.N):
            exponent = i + self.w
            cash_flow = c
            if i == self.N - 1:
                cash_flow += 100.0
            derivative += -0.5 * exponent * cash_flow / (q ** (exponent + 1.0))

        return derivative

    def _second_derivative_price_wrt_annual_yield_decimal(self, annual_yield):
        r = annual_yield / 2.0
        c = self.couponPerPeriod

        if self.N == 1:
            denominator = 1.0 + r * self.w
            return (100.0 + c) * (self.w ** 2) / (2.0 * denominator ** 3)

        q = 1.0 + r
        second_derivative = 0.0

        for i in range(self.N):
            exponent = i + self.w
            cash_flow = c
            if i == self.N - 1:
                cash_flow += 100.0
            second_derivative += (
                0.25
                * exponent
                * (exponent + 1.0)
                * cash_flow
                / (q ** (exponent + 2.0))
            )

        return second_derivative

    def getYTM(self):
        target_price = self.getDirtyPrice()

        y = self.a / 100.0
        if y <= -1.5:
            y = 0.04

        tolerance = 1e-14
        max_iterations = 200

        for _ in range(max_iterations):
            price = self._model_price_from_annual_yield_decimal(y)
            diff = price - target_price

            if abs(diff) < tolerance:
                return float(y * 100.0)

            derivative = self._first_derivative_price_wrt_annual_yield_decimal(y)
            if derivative == 0.0:
                break

            y_new = y - diff / derivative

            if y_new <= -1.999999999999:
                y_new = (y - 1.999999999999) / 2.0

            if abs(y_new - y) < tolerance:
                y = y_new
                return float(y * 100.0)

            y = y_new

        return float(y * 100.0)

    def getPV01(self):
        y = self.getYTM() / 100.0
        derivative = self._first_derivative_price_wrt_annual_yield_decimal(y)

        # One basis point is 0.0001 in annualized yield decimal units.
        return float(abs(derivative) * 0.0001)

    def getModDur(self):
        y = self.getYTM() / 100.0
        price = self.getDirtyPrice()
        derivative = self._first_derivative_price_wrt_annual_yield_decimal(y)

        return float(-derivative / price)

    def getMacaulayDur(self):
        y = self.getYTM() / 100.0
        r = y / 2.0
        c = self.couponPerPeriod

        if self.N == 1:
            return float(self.w / 2.0)

        q = 1.0 + r
        price = self.getDirtyPrice()
        weighted_sum = 0.0

        for i in range(self.N):
            exponent = i + self.w
            time_years = exponent / 2.0
            cash_flow = c
            if i == self.N - 1:
                cash_flow += 100.0
            weighted_sum += time_years * cash_flow / (q ** exponent)

        return float(weighted_sum / price)

    def getConvexity(self):
        y = self.getYTM() / 100.0
        price = self.getDirtyPrice()
        second_derivative = self._second_derivative_price_wrt_annual_yield_decimal(y)

        return float(second_derivative / price)
