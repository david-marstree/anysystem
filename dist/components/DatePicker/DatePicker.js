import { jsx as j, jsxs as Ne, Fragment as ct } from "react/jsx-runtime";
import { t as We } from "../../bundle-mjs-SHnj3fHy.js";
import { b as Hn, c as In } from "../../index-C197ia6B.js";
import Ln, { createContext as wa, forwardRef as pa, useRef as Qe, useReducer as An, useEffect as Fe, Fragment as ga, isValidElement as jn, cloneElement as Gn, createElement as qn, useContext as Dt, useId as $n, useMemo as br, useState as _a, useCallback as Vn, useLayoutEffect as ba } from "react";
import { u as Qn, a as Bn, o as zn, f as Zn, s as Xn } from "../../floating-ui.react-dom-xElE0hWP.js";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ka;
function f() {
  return ka.apply(null, arguments);
}
function Jn(e) {
  ka = e;
}
function he(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Ve(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function x(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function kr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (x(e, t))
      return !1;
  return !0;
}
function ae(e) {
  return e === void 0;
}
function Ye(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Tt(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Da(e, t) {
  var r = [], a, n = e.length;
  for (a = 0; a < n; ++a)
    r.push(t(e[a], a));
  return r;
}
function Ee(e, t) {
  for (var r in t)
    x(t, r) && (e[r] = t[r]);
  return x(t, "toString") && (e.toString = t.toString), x(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function _e(e, t, r, a) {
  return Va(e, t, r, a, !0).utc();
}
function Kn() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function _(e) {
  return e._pf == null && (e._pf = Kn()), e._pf;
}
var fr;
Array.prototype.some ? fr = Array.prototype.some : fr = function(e) {
  var t = Object(this), r = t.length >>> 0, a;
  for (a = 0; a < r; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function Dr(e) {
  var t = null, r = !1, a = e._d && !isNaN(e._d.getTime());
  if (a && (t = _(e), r = fr.call(t.parsedDateParts, function(n) {
    return n != null;
  }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = a;
  else
    return a;
  return e._isValid;
}
function Qt(e) {
  var t = _e(NaN);
  return e != null ? Ee(_(t), e) : _(t).userInvalidated = !0, t;
}
var ta = f.momentProperties = [], or = !1;
function Tr(e, t) {
  var r, a, n, i = ta.length;
  if (ae(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ae(t._i) || (e._i = t._i), ae(t._f) || (e._f = t._f), ae(t._l) || (e._l = t._l), ae(t._strict) || (e._strict = t._strict), ae(t._tzm) || (e._tzm = t._tzm), ae(t._isUTC) || (e._isUTC = t._isUTC), ae(t._offset) || (e._offset = t._offset), ae(t._pf) || (e._pf = _(t)), ae(t._locale) || (e._locale = t._locale), i > 0)
    for (r = 0; r < i; r++)
      a = ta[r], n = t[a], ae(n) || (e[a] = n);
  return e;
}
function Mt(e) {
  Tr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), or === !1 && (or = !0, f.updateOffset(this), or = !1);
}
function me(e) {
  return e instanceof Mt || e != null && e._isAMomentObject != null;
}
function Ta(e) {
  f.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function le(e, t) {
  var r = !0;
  return Ee(function() {
    if (f.deprecationHandler != null && f.deprecationHandler(null, e), r) {
      var a = [], n, i, s, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (n = "", typeof arguments[i] == "object") {
          n += `
[` + i + "] ";
          for (s in arguments[0])
            x(arguments[0], s) && (n += s + ": " + arguments[0][s] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[i];
        a.push(n);
      }
      Ta(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ra = {};
function Ma(e, t) {
  f.deprecationHandler != null && f.deprecationHandler(e, t), ra[e] || (Ta(t), ra[e] = !0);
}
f.suppressDeprecationWarnings = !1;
f.deprecationHandler = null;
function be(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function ei(e) {
  var t, r;
  for (r in e)
    x(e, r) && (t = e[r], be(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function hr(e, t) {
  var r = Ee({}, e), a;
  for (a in t)
    x(t, a) && (Ve(e[a]) && Ve(t[a]) ? (r[a] = {}, Ee(r[a], e[a]), Ee(r[a], t[a])) : t[a] != null ? r[a] = t[a] : delete r[a]);
  for (a in e)
    x(e, a) && !x(t, a) && Ve(e[a]) && (r[a] = Ee({}, r[a]));
  return r;
}
function Mr(e) {
  e != null && this.set(e);
}
var mr;
Object.keys ? mr = Object.keys : mr = function(e) {
  var t, r = [];
  for (t in e)
    x(e, t) && r.push(t);
  return r;
};
var ti = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function ri(e, t, r) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return be(a) ? a.call(t, r) : a;
}
function ge(e, t, r) {
  var a = "" + Math.abs(e), n = t - a.length, i = e >= 0;
  return (i ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + a;
}
var Or = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Wt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ur = {}, et = {};
function w(e, t, r, a) {
  var n = a;
  typeof a == "string" && (n = function() {
    return this[a]();
  }), e && (et[e] = n), t && (et[t[0]] = function() {
    return ge(n.apply(this, arguments), t[1], t[2]);
  }), r && (et[r] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function ai(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function ni(e) {
  var t = e.match(Or), r, a;
  for (r = 0, a = t.length; r < a; r++)
    et[t[r]] ? t[r] = et[t[r]] : t[r] = ai(t[r]);
  return function(n) {
    var i = "", s;
    for (s = 0; s < a; s++)
      i += be(t[s]) ? t[s].call(n, e) : t[s];
    return i;
  };
}
function Et(e, t) {
  return e.isValid() ? (t = Oa(t, e.localeData()), ur[t] = ur[t] || ni(t), ur[t](e)) : e.localeData().invalidDate();
}
function Oa(e, t) {
  var r = 5;
  function a(n) {
    return t.longDateFormat(n) || n;
  }
  for (Wt.lastIndex = 0; r >= 0 && Wt.test(e); )
    e = e.replace(
      Wt,
      a
    ), Wt.lastIndex = 0, r -= 1;
  return e;
}
var ii = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function si(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(Or).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var oi = "Invalid date";
function ui() {
  return this._invalidDate;
}
var li = "%d", ci = /\d{1,2}/;
function di(e) {
  return this._ordinal.replace("%d", e);
}
var fi = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function hi(e, t, r, a) {
  var n = this._relativeTime[r];
  return be(n) ? n(e, t, r, a) : n.replace(/%d/i, e);
}
function mi(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return be(r) ? r(t) : r.replace(/%s/i, t);
}
var aa = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function ce(e) {
  return typeof e == "string" ? aa[e] || aa[e.toLowerCase()] : void 0;
}
function xr(e) {
  var t = {}, r, a;
  for (a in e)
    x(e, a) && (r = ce(a), r && (t[r] = e[a]));
  return t;
}
var vi = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function yi(e) {
  var t = [], r;
  for (r in e)
    x(e, r) && t.push({ unit: r, priority: vi[r] });
  return t.sort(function(a, n) {
    return a.priority - n.priority;
  }), t;
}
var xa = /\d/, ie = /\d\d/, Ya = /\d{3}/, Yr = /\d{4}/, Bt = /[+-]?\d{6}/, I = /\d\d?/, Pa = /\d\d\d\d?/, Sa = /\d\d\d\d\d\d?/, zt = /\d{1,3}/, Pr = /\d{1,4}/, Zt = /[+-]?\d{1,6}/, nt = /\d+/, Xt = /[+-]?\d+/, wi = /Z|[+-]\d\d:?\d\d/gi, Jt = /Z|[+-]\d\d(?::?\d\d)?/gi, pi = /[+-]?\d+(\.\d{1,3})?/, Ot = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, it = /^[1-9]\d?/, Sr = /^([1-9]\d|\d)/, It;
It = {};
function v(e, t, r) {
  It[e] = be(t) ? t : function(a, n) {
    return a && r ? r : t;
  };
}
function gi(e, t) {
  return x(It, e) ? It[e](t._strict, t._locale) : new RegExp(_i(e));
}
function _i(e) {
  return Oe(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, a, n, i) {
        return r || a || n || i;
      }
    )
  );
}
function Oe(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function ue(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function b(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = ue(t)), r;
}
var vr = {};
function N(e, t) {
  var r, a = t, n;
  for (typeof e == "string" && (e = [e]), Ye(t) && (a = function(i, s) {
    s[t] = b(i);
  }), n = e.length, r = 0; r < n; r++)
    vr[e[r]] = a;
}
function xt(e, t) {
  N(e, function(r, a, n, i) {
    n._w = n._w || {}, t(r, n._w, n, i);
  });
}
function bi(e, t, r) {
  t != null && x(vr, e) && vr[e](t, r._a, r, e);
}
function Kt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var te = 0, Te = 1, ye = 2, Z = 3, fe = 4, Me = 5, $e = 6, ki = 7, Di = 8;
w("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? ge(e, 4) : "+" + e;
});
w(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
w(0, ["YYYY", 4], 0, "year");
w(0, ["YYYYY", 5], 0, "year");
w(0, ["YYYYYY", 6, !0], 0, "year");
v("Y", Xt);
v("YY", I, ie);
v("YYYY", Pr, Yr);
v("YYYYY", Zt, Bt);
v("YYYYYY", Zt, Bt);
N(["YYYYY", "YYYYYY"], te);
N("YYYY", function(e, t) {
  t[te] = e.length === 2 ? f.parseTwoDigitYear(e) : b(e);
});
N("YY", function(e, t) {
  t[te] = f.parseTwoDigitYear(e);
});
N("Y", function(e, t) {
  t[te] = parseInt(e, 10);
});
function wt(e) {
  return Kt(e) ? 366 : 365;
}
f.parseTwoDigitYear = function(e) {
  return b(e) + (b(e) > 68 ? 1900 : 2e3);
};
var Ca = st("FullYear", !0);
function Ti() {
  return Kt(this.year());
}
function st(e, t) {
  return function(r) {
    return r != null ? (Na(this, e, r), f.updateOffset(this, t), this) : pt(this, e);
  };
}
function pt(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, a = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return a ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return a ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return a ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return a ? r.getUTCHours() : r.getHours();
    case "Date":
      return a ? r.getUTCDate() : r.getDate();
    case "Day":
      return a ? r.getUTCDay() : r.getDay();
    case "Month":
      return a ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return a ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function Na(e, t, r) {
  var a, n, i, s, o;
  if (!(!e.isValid() || isNaN(r))) {
    switch (a = e._d, n = e._isUTC, t) {
      case "Milliseconds":
        return void (n ? a.setUTCMilliseconds(r) : a.setMilliseconds(r));
      case "Seconds":
        return void (n ? a.setUTCSeconds(r) : a.setSeconds(r));
      case "Minutes":
        return void (n ? a.setUTCMinutes(r) : a.setMinutes(r));
      case "Hours":
        return void (n ? a.setUTCHours(r) : a.setHours(r));
      case "Date":
        return void (n ? a.setUTCDate(r) : a.setDate(r));
      case "FullYear":
        break;
      default:
        return;
    }
    i = r, s = e.month(), o = e.date(), o = o === 29 && s === 1 && !Kt(i) ? 28 : o, n ? a.setUTCFullYear(i, s, o) : a.setFullYear(i, s, o);
  }
}
function Mi(e) {
  return e = ce(e), be(this[e]) ? this[e]() : this;
}
function Oi(e, t) {
  if (typeof e == "object") {
    e = xr(e);
    var r = yi(e), a, n = r.length;
    for (a = 0; a < n; a++)
      this[r[a].unit](e[r[a].unit]);
  } else if (e = ce(e), be(this[e]))
    return this[e](t);
  return this;
}
function xi(e, t) {
  return (e % t + t) % t;
}
var $;
Array.prototype.indexOf ? $ = Array.prototype.indexOf : $ = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Cr(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = xi(t, 12);
  return e += (t - r) / 12, r === 1 ? Kt(e) ? 29 : 28 : 31 - r % 7 % 2;
}
w("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
w("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
w("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
v("M", I, it);
v("MM", I, ie);
v("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
v("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
N(["M", "MM"], function(e, t) {
  t[Te] = b(e) - 1;
});
N(["MMM", "MMMM"], function(e, t, r, a) {
  var n = r._locale.monthsParse(e, a, r._strict);
  n != null ? t[Te] = n : _(r).invalidMonth = e;
});
var Yi = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Wa = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ua = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Pi = Ot, Si = Ot;
function Ci(e, t) {
  return e ? he(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ua).test(t) ? "format" : "standalone"][e.month()] : he(this._months) ? this._months : this._months.standalone;
}
function Ni(e, t) {
  return e ? he(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ua.test(t) ? "format" : "standalone"][e.month()] : he(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Wi(e, t, r) {
  var a, n, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      i = _e([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (n = $.call(this._shortMonthsParse, s), n !== -1 ? n : null) : (n = $.call(this._longMonthsParse, s), n !== -1 ? n : null) : t === "MMM" ? (n = $.call(this._shortMonthsParse, s), n !== -1 ? n : (n = $.call(this._longMonthsParse, s), n !== -1 ? n : null)) : (n = $.call(this._longMonthsParse, s), n !== -1 ? n : (n = $.call(this._shortMonthsParse, s), n !== -1 ? n : null));
}
function Ui(e, t, r) {
  var a, n, i;
  if (this._monthsParseExact)
    return Wi.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (n = _e([2e3, a]), r && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[a] && (i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (r && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!r && this._monthsParse[a].test(e))
      return a;
  }
}
function Ea(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = b(t);
    else if (t = e.localeData().monthsParse(t), !Ye(t))
      return e;
  }
  var r = t, a = e.date();
  return a = a < 29 ? a : Math.min(a, Cr(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, a) : e._d.setMonth(r, a), e;
}
function Ra(e) {
  return e != null ? (Ea(this, e), f.updateOffset(this, !0), this) : pt(this, "Month");
}
function Ei() {
  return Cr(this.year(), this.month());
}
function Ri(e) {
  return this._monthsParseExact ? (x(this, "_monthsRegex") || Fa.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (x(this, "_monthsShortRegex") || (this._monthsShortRegex = Pi), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Fi(e) {
  return this._monthsParseExact ? (x(this, "_monthsRegex") || Fa.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (x(this, "_monthsRegex") || (this._monthsRegex = Si), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Fa() {
  function e(u, l) {
    return l.length - u.length;
  }
  var t = [], r = [], a = [], n, i, s, o;
  for (n = 0; n < 12; n++)
    i = _e([2e3, n]), s = Oe(this.monthsShort(i, "")), o = Oe(this.months(i, "")), t.push(s), r.push(o), a.push(o), a.push(s);
  t.sort(e), r.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Hi(e, t, r, a, n, i, s) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, a, n, i, s), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, a, n, i, s), o;
}
function gt(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Lt(e, t, r) {
  var a = 7 + t - r, n = (7 + gt(e, 0, a).getUTCDay() - t) % 7;
  return -n + a - 1;
}
function Ha(e, t, r, a, n) {
  var i = (7 + r - a) % 7, s = Lt(e, a, n), o = 1 + 7 * (t - 1) + i + s, u, l;
  return o <= 0 ? (u = e - 1, l = wt(u) + o) : o > wt(e) ? (u = e + 1, l = o - wt(e)) : (u = e, l = o), {
    year: u,
    dayOfYear: l
  };
}
function _t(e, t, r) {
  var a = Lt(e.year(), t, r), n = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, i, s;
  return n < 1 ? (s = e.year() - 1, i = n + xe(s, t, r)) : n > xe(e.year(), t, r) ? (i = n - xe(e.year(), t, r), s = e.year() + 1) : (s = e.year(), i = n), {
    week: i,
    year: s
  };
}
function xe(e, t, r) {
  var a = Lt(e, t, r), n = Lt(e + 1, t, r);
  return (wt(e) - a + n) / 7;
}
w("w", ["ww", 2], "wo", "week");
w("W", ["WW", 2], "Wo", "isoWeek");
v("w", I, it);
v("ww", I, ie);
v("W", I, it);
v("WW", I, ie);
xt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, a) {
    t[a.substr(0, 1)] = b(e);
  }
);
function Ii(e) {
  return _t(e, this._week.dow, this._week.doy).week;
}
var Li = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ai() {
  return this._week.dow;
}
function ji() {
  return this._week.doy;
}
function Gi(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function qi(e) {
  var t = _t(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
w("d", 0, "do", "day");
w("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
w("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
w("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
w("e", 0, 0, "weekday");
w("E", 0, 0, "isoWeekday");
v("d", I);
v("e", I);
v("E", I);
v("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
v("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
v("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
xt(["dd", "ddd", "dddd"], function(e, t, r, a) {
  var n = r._locale.weekdaysParse(e, a, r._strict);
  n != null ? t.d = n : _(r).invalidWeekday = e;
});
xt(["d", "e", "E"], function(e, t, r, a) {
  t[a] = b(e);
});
function $i(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Vi(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Nr(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Qi = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ia = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Bi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), zi = Ot, Zi = Ot, Xi = Ot;
function Ji(e, t) {
  var r = he(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Nr(r, this._week.dow) : e ? r[e.day()] : r;
}
function Ki(e) {
  return e === !0 ? Nr(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function es(e) {
  return e === !0 ? Nr(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function ts(e, t, r) {
  var a, n, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      i = _e([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (n = $.call(this._weekdaysParse, s), n !== -1 ? n : null) : t === "ddd" ? (n = $.call(this._shortWeekdaysParse, s), n !== -1 ? n : null) : (n = $.call(this._minWeekdaysParse, s), n !== -1 ? n : null) : t === "dddd" ? (n = $.call(this._weekdaysParse, s), n !== -1 || (n = $.call(this._shortWeekdaysParse, s), n !== -1) ? n : (n = $.call(this._minWeekdaysParse, s), n !== -1 ? n : null)) : t === "ddd" ? (n = $.call(this._shortWeekdaysParse, s), n !== -1 || (n = $.call(this._weekdaysParse, s), n !== -1) ? n : (n = $.call(this._minWeekdaysParse, s), n !== -1 ? n : null)) : (n = $.call(this._minWeekdaysParse, s), n !== -1 || (n = $.call(this._weekdaysParse, s), n !== -1) ? n : (n = $.call(this._shortWeekdaysParse, s), n !== -1 ? n : null));
}
function rs(e, t, r) {
  var a, n, i;
  if (this._weekdaysParseExact)
    return ts.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (n = _e([2e3, 1]).day(a), r && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (r && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (r && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!r && this._weekdaysParse[a].test(e))
      return a;
  }
}
function as(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = pt(this, "Day");
  return e != null ? (e = $i(e, this.localeData()), this.add(e - t, "d")) : t;
}
function ns(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function is(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Vi(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function ss(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Wr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (x(this, "_weekdaysRegex") || (this._weekdaysRegex = zi), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function os(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Wr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (x(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Zi), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function us(e) {
  return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Wr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (x(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xi), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Wr() {
  function e(c, y) {
    return y.length - c.length;
  }
  var t = [], r = [], a = [], n = [], i, s, o, u, l;
  for (i = 0; i < 7; i++)
    s = _e([2e3, 1]).day(i), o = Oe(this.weekdaysMin(s, "")), u = Oe(this.weekdaysShort(s, "")), l = Oe(this.weekdays(s, "")), t.push(o), r.push(u), a.push(l), n.push(o), n.push(u), n.push(l);
  t.sort(e), r.sort(e), a.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ur() {
  return this.hours() % 12 || 12;
}
function ls() {
  return this.hours() || 24;
}
w("H", ["HH", 2], 0, "hour");
w("h", ["hh", 2], 0, Ur);
w("k", ["kk", 2], 0, ls);
w("hmm", 0, 0, function() {
  return "" + Ur.apply(this) + ge(this.minutes(), 2);
});
w("hmmss", 0, 0, function() {
  return "" + Ur.apply(this) + ge(this.minutes(), 2) + ge(this.seconds(), 2);
});
w("Hmm", 0, 0, function() {
  return "" + this.hours() + ge(this.minutes(), 2);
});
w("Hmmss", 0, 0, function() {
  return "" + this.hours() + ge(this.minutes(), 2) + ge(this.seconds(), 2);
});
function La(e, t) {
  w(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
La("a", !0);
La("A", !1);
function Aa(e, t) {
  return t._meridiemParse;
}
v("a", Aa);
v("A", Aa);
v("H", I, Sr);
v("h", I, it);
v("k", I, it);
v("HH", I, ie);
v("hh", I, ie);
v("kk", I, ie);
v("hmm", Pa);
v("hmmss", Sa);
v("Hmm", Pa);
v("Hmmss", Sa);
N(["H", "HH"], Z);
N(["k", "kk"], function(e, t, r) {
  var a = b(e);
  t[Z] = a === 24 ? 0 : a;
});
N(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
N(["h", "hh"], function(e, t, r) {
  t[Z] = b(e), _(r).bigHour = !0;
});
N("hmm", function(e, t, r) {
  var a = e.length - 2;
  t[Z] = b(e.substr(0, a)), t[fe] = b(e.substr(a)), _(r).bigHour = !0;
});
N("hmmss", function(e, t, r) {
  var a = e.length - 4, n = e.length - 2;
  t[Z] = b(e.substr(0, a)), t[fe] = b(e.substr(a, 2)), t[Me] = b(e.substr(n)), _(r).bigHour = !0;
});
N("Hmm", function(e, t, r) {
  var a = e.length - 2;
  t[Z] = b(e.substr(0, a)), t[fe] = b(e.substr(a));
});
N("Hmmss", function(e, t, r) {
  var a = e.length - 4, n = e.length - 2;
  t[Z] = b(e.substr(0, a)), t[fe] = b(e.substr(a, 2)), t[Me] = b(e.substr(n));
});
function cs(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var ds = /[ap]\.?m?\.?/i, fs = st("Hours", !0);
function hs(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var ja = {
  calendar: ti,
  longDateFormat: ii,
  invalidDate: oi,
  ordinal: li,
  dayOfMonthOrdinalParse: ci,
  relativeTime: fi,
  months: Yi,
  monthsShort: Wa,
  week: Li,
  weekdays: Qi,
  weekdaysMin: Bi,
  weekdaysShort: Ia,
  meridiemParse: ds
}, L = {}, dt = {}, bt;
function ms(e, t) {
  var r, a = Math.min(e.length, t.length);
  for (r = 0; r < a; r += 1)
    if (e[r] !== t[r])
      return r;
  return a;
}
function na(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function vs(e) {
  for (var t = 0, r, a, n, i; t < e.length; ) {
    for (i = na(e[t]).split("-"), r = i.length, a = na(e[t + 1]), a = a ? a.split("-") : null; r > 0; ) {
      if (n = er(i.slice(0, r).join("-")), n)
        return n;
      if (a && a.length >= r && ms(i, a) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return bt;
}
function ys(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function er(e) {
  var t = null, r;
  if (L[e] === void 0 && typeof module < "u" && module && module.exports && ys(e))
    try {
      t = bt._abbr, r = require, r("./locale/" + e), He(t);
    } catch {
      L[e] = null;
    }
  return L[e];
}
function He(e, t) {
  var r;
  return e && (ae(t) ? r = Se(e) : r = Er(e, t), r ? bt = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), bt._abbr;
}
function Er(e, t) {
  if (t !== null) {
    var r, a = ja;
    if (t.abbr = e, L[e] != null)
      Ma(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = L[e]._config;
    else if (t.parentLocale != null)
      if (L[t.parentLocale] != null)
        a = L[t.parentLocale]._config;
      else if (r = er(t.parentLocale), r != null)
        a = r._config;
      else
        return dt[t.parentLocale] || (dt[t.parentLocale] = []), dt[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return L[e] = new Mr(hr(a, t)), dt[e] && dt[e].forEach(function(n) {
      Er(n.name, n.config);
    }), He(e), L[e];
  } else
    return delete L[e], null;
}
function ws(e, t) {
  if (t != null) {
    var r, a, n = ja;
    L[e] != null && L[e].parentLocale != null ? L[e].set(hr(L[e]._config, t)) : (a = er(e), a != null && (n = a._config), t = hr(n, t), a == null && (t.abbr = e), r = new Mr(t), r.parentLocale = L[e], L[e] = r), He(e);
  } else
    L[e] != null && (L[e].parentLocale != null ? (L[e] = L[e].parentLocale, e === He() && He(e)) : L[e] != null && delete L[e]);
  return L[e];
}
function Se(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return bt;
  if (!he(e)) {
    if (t = er(e), t)
      return t;
    e = [e];
  }
  return vs(e);
}
function ps() {
  return mr(L);
}
function Rr(e) {
  var t, r = e._a;
  return r && _(e).overflow === -2 && (t = r[Te] < 0 || r[Te] > 11 ? Te : r[ye] < 1 || r[ye] > Cr(r[te], r[Te]) ? ye : r[Z] < 0 || r[Z] > 24 || r[Z] === 24 && (r[fe] !== 0 || r[Me] !== 0 || r[$e] !== 0) ? Z : r[fe] < 0 || r[fe] > 59 ? fe : r[Me] < 0 || r[Me] > 59 ? Me : r[$e] < 0 || r[$e] > 999 ? $e : -1, _(e)._overflowDayOfYear && (t < te || t > ye) && (t = ye), _(e)._overflowWeeks && t === -1 && (t = ki), _(e)._overflowWeekday && t === -1 && (t = Di), _(e).overflow = t), e;
}
var gs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, _s = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, bs = /Z|[+-]\d\d(?::?\d\d)?/, Ut = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], lr = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ks = /^\/?Date\((-?\d+)/i, Ds = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ts = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Ga(e) {
  var t, r, a = e._i, n = gs.exec(a) || _s.exec(a), i, s, o, u, l = Ut.length, c = lr.length;
  if (n) {
    for (_(e).iso = !0, t = 0, r = l; t < r; t++)
      if (Ut[t][1].exec(n[1])) {
        s = Ut[t][0], i = Ut[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, r = c; t < r; t++)
        if (lr[t][1].exec(n[3])) {
          o = (n[2] || " ") + lr[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && o != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (bs.exec(n[4]))
        u = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (o || "") + (u || ""), Hr(e);
  } else
    e._isValid = !1;
}
function Ms(e, t, r, a, n, i) {
  var s = [
    Os(e),
    Wa.indexOf(t),
    parseInt(r, 10),
    parseInt(a, 10),
    parseInt(n, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function Os(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function xs(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Ys(e, t, r) {
  if (e) {
    var a = Ia.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== n)
      return _(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Ps(e, t, r) {
  if (e)
    return Ts[e];
  if (t)
    return 0;
  var a = parseInt(r, 10), n = a % 100, i = (a - n) / 100;
  return i * 60 + n;
}
function qa(e) {
  var t = Ds.exec(xs(e._i)), r;
  if (t) {
    if (r = Ms(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Ys(t[1], r, e))
      return;
    e._a = r, e._tzm = Ps(t[8], t[9], t[10]), e._d = gt.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), _(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Ss(e) {
  var t = ks.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ga(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (qa(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : f.createFromInputFallback(e);
}
f.createFromInputFallback = le(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Je(e, t, r) {
  return e ?? t ?? r;
}
function Cs(e) {
  var t = new Date(f.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Fr(e) {
  var t, r, a = [], n, i, s;
  if (!e._d) {
    for (n = Cs(e), e._w && e._a[ye] == null && e._a[Te] == null && Ns(e), e._dayOfYear != null && (s = Je(e._a[te], n[te]), (e._dayOfYear > wt(s) || e._dayOfYear === 0) && (_(e)._overflowDayOfYear = !0), r = gt(s, 0, e._dayOfYear), e._a[Te] = r.getUTCMonth(), e._a[ye] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Z] === 24 && e._a[fe] === 0 && e._a[Me] === 0 && e._a[$e] === 0 && (e._nextDay = !0, e._a[Z] = 0), e._d = (e._useUTC ? gt : Hi).apply(
      null,
      a
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Z] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (_(e).weekdayMismatch = !0);
  }
}
function Ns(e) {
  var t, r, a, n, i, s, o, u, l;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, r = Je(
    t.GG,
    e._a[te],
    _t(H(), 1, 4).year
  ), a = Je(t.W, 1), n = Je(t.E, 1), (n < 1 || n > 7) && (u = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, l = _t(H(), i, s), r = Je(t.gg, e._a[te], l.year), a = Je(t.w, l.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (u = !0)) : t.e != null ? (n = t.e + i, (t.e < 0 || t.e > 6) && (u = !0)) : n = i), a < 1 || a > xe(r, i, s) ? _(e)._overflowWeeks = !0 : u != null ? _(e)._overflowWeekday = !0 : (o = Ha(r, a, n, i, s), e._a[te] = o.year, e._dayOfYear = o.dayOfYear);
}
f.ISO_8601 = function() {
};
f.RFC_2822 = function() {
};
function Hr(e) {
  if (e._f === f.ISO_8601) {
    Ga(e);
    return;
  }
  if (e._f === f.RFC_2822) {
    qa(e);
    return;
  }
  e._a = [], _(e).empty = !0;
  var t = "" + e._i, r, a, n, i, s, o = t.length, u = 0, l, c;
  for (n = Oa(e._f, e._locale).match(Or) || [], c = n.length, r = 0; r < c; r++)
    i = n[r], a = (t.match(gi(i, e)) || [])[0], a && (s = t.substr(0, t.indexOf(a)), s.length > 0 && _(e).unusedInput.push(s), t = t.slice(
      t.indexOf(a) + a.length
    ), u += a.length), et[i] ? (a ? _(e).empty = !1 : _(e).unusedTokens.push(i), bi(i, a, e)) : e._strict && !a && _(e).unusedTokens.push(i);
  _(e).charsLeftOver = o - u, t.length > 0 && _(e).unusedInput.push(t), e._a[Z] <= 12 && _(e).bigHour === !0 && e._a[Z] > 0 && (_(e).bigHour = void 0), _(e).parsedDateParts = e._a.slice(0), _(e).meridiem = e._meridiem, e._a[Z] = Ws(
    e._locale,
    e._a[Z],
    e._meridiem
  ), l = _(e).era, l !== null && (e._a[te] = e._locale.erasConvertYear(l, e._a[te])), Fr(e), Rr(e);
}
function Ws(e, t, r) {
  var a;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (a = e.isPM(r), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function Us(e) {
  var t, r, a, n, i, s, o = !1, u = e._f.length;
  if (u === 0) {
    _(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (n = 0; n < u; n++)
    i = 0, s = !1, t = Tr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], Hr(t), Dr(t) && (s = !0), i += _(t).charsLeftOver, i += _(t).unusedTokens.length * 10, _(t).score = i, o ? i < a && (a = i, r = t) : (a == null || i < a || s) && (a = i, r = t, s && (o = !0));
  Ee(e, r || t);
}
function Es(e) {
  if (!e._d) {
    var t = xr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = Da(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), Fr(e);
  }
}
function Rs(e) {
  var t = new Mt(Rr($a(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function $a(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || Se(e._l), t === null || r === void 0 && t === "" ? Qt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), me(t) ? new Mt(Rr(t)) : (Tt(t) ? e._d = t : he(r) ? Us(e) : r ? Hr(e) : Fs(e), Dr(e) || (e._d = null), e));
}
function Fs(e) {
  var t = e._i;
  ae(t) ? e._d = new Date(f.now()) : Tt(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Ss(e) : he(t) ? (e._a = Da(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Fr(e)) : Ve(t) ? Es(e) : Ye(t) ? e._d = new Date(t) : f.createFromInputFallback(e);
}
function Va(e, t, r, a, n) {
  var i = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (r === !0 || r === !1) && (a = r, r = void 0), (Ve(e) && kr(e) || he(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = n, i._l = r, i._i = e, i._f = t, i._strict = a, Rs(i);
}
function H(e, t, r, a) {
  return Va(e, t, r, a, !1);
}
var Hs = le(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Qt();
  }
), Is = le(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Qt();
  }
);
function Qa(e, t) {
  var r, a;
  if (t.length === 1 && he(t[0]) && (t = t[0]), !t.length)
    return H();
  for (r = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](r)) && (r = t[a]);
  return r;
}
function Ls() {
  var e = [].slice.call(arguments, 0);
  return Qa("isBefore", e);
}
function As() {
  var e = [].slice.call(arguments, 0);
  return Qa("isAfter", e);
}
var js = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ft = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Gs(e) {
  var t, r = !1, a, n = ft.length;
  for (t in e)
    if (x(e, t) && !($.call(ft, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < n; ++a)
    if (e[ft[a]]) {
      if (r)
        return !1;
      parseFloat(e[ft[a]]) !== b(e[ft[a]]) && (r = !0);
    }
  return !0;
}
function qs() {
  return this._isValid;
}
function $s() {
  return ve(NaN);
}
function tr(e) {
  var t = xr(e), r = t.year || 0, a = t.quarter || 0, n = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, o = t.hour || 0, u = t.minute || 0, l = t.second || 0, c = t.millisecond || 0;
  this._isValid = Gs(t), this._milliseconds = +c + l * 1e3 + // 1000
  u * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +n + a * 3 + r * 12, this._data = {}, this._locale = Se(), this._bubble();
}
function Rt(e) {
  return e instanceof tr;
}
function yr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Vs(e, t, r) {
  var a = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), i = 0, s;
  for (s = 0; s < a; s++)
    b(e[s]) !== b(t[s]) && i++;
  return i + n;
}
function Ba(e, t) {
  w(e, 0, 0, function() {
    var r = this.utcOffset(), a = "+";
    return r < 0 && (r = -r, a = "-"), a + ge(~~(r / 60), 2) + t + ge(~~r % 60, 2);
  });
}
Ba("Z", ":");
Ba("ZZ", "");
v("Z", Jt);
v("ZZ", Jt);
N(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Ir(Jt, e);
});
var Qs = /([\+\-]|\d\d)/gi;
function Ir(e, t) {
  var r = (t || "").match(e), a, n, i;
  return r === null ? null : (a = r[r.length - 1] || [], n = (a + "").match(Qs) || ["-", 0, 0], i = +(n[1] * 60) + b(n[2]), i === 0 ? 0 : n[0] === "+" ? i : -i);
}
function Lr(e, t) {
  var r, a;
  return t._isUTC ? (r = t.clone(), a = (me(e) || Tt(e) ? e.valueOf() : H(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + a), f.updateOffset(r, !1), r) : H(e).local();
}
function wr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
f.updateOffset = function() {
};
function Bs(e, t, r) {
  var a = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ir(Jt, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (n = wr(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), a !== e && (!t || this._changeInProgress ? Xa(
      this,
      ve(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, f.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : wr(this);
}
function zs(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Zs(e) {
  return this.utcOffset(0, e);
}
function Xs(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(wr(this), "m")), this;
}
function Js() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ir(wi, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ks(e) {
  return this.isValid() ? (e = e ? H(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function eo() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function to() {
  if (!ae(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Tr(e, this), e = $a(e), e._a ? (t = e._isUTC ? _e(e._a) : H(e._a), this._isDSTShifted = this.isValid() && Vs(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ro() {
  return this.isValid() ? !this._isUTC : !1;
}
function ao() {
  return this.isValid() ? this._isUTC : !1;
}
function za() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var no = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, io = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function ve(e, t) {
  var r = e, a = null, n, i, s;
  return Rt(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Ye(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (a = no.exec(e)) ? (n = a[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: b(a[ye]) * n,
    h: b(a[Z]) * n,
    m: b(a[fe]) * n,
    s: b(a[Me]) * n,
    ms: b(yr(a[$e] * 1e3)) * n
    // the millisecond decimal point is included in the match
  }) : (a = io.exec(e)) ? (n = a[1] === "-" ? -1 : 1, r = {
    y: Ge(a[2], n),
    M: Ge(a[3], n),
    w: Ge(a[4], n),
    d: Ge(a[5], n),
    h: Ge(a[6], n),
    m: Ge(a[7], n),
    s: Ge(a[8], n)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (s = so(
    H(r.from),
    H(r.to)
  ), r = {}, r.ms = s.milliseconds, r.M = s.months), i = new tr(r), Rt(e) && x(e, "_locale") && (i._locale = e._locale), Rt(e) && x(e, "_isValid") && (i._isValid = e._isValid), i;
}
ve.fn = tr.prototype;
ve.invalid = $s;
function Ge(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function ia(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function so(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Lr(t, e), e.isBefore(t) ? r = ia(e, t) : (r = ia(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function Za(e, t) {
  return function(r, a) {
    var n, i;
    return a !== null && !isNaN(+a) && (Ma(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = r, r = a, a = i), n = ve(r, a), Xa(this, n, e), this;
  };
}
function Xa(e, t, r, a) {
  var n = t._milliseconds, i = yr(t._days), s = yr(t._months);
  e.isValid() && (a = a ?? !0, s && Ea(e, pt(e, "Month") + s * r), i && Na(e, "Date", pt(e, "Date") + i * r), n && e._d.setTime(e._d.valueOf() + n * r), a && f.updateOffset(e, i || s));
}
var oo = Za(1, "add"), uo = Za(-1, "subtract");
function Ja(e) {
  return typeof e == "string" || e instanceof String;
}
function lo(e) {
  return me(e) || Tt(e) || Ja(e) || Ye(e) || fo(e) || co(e) || e === null || e === void 0;
}
function co(e) {
  var t = Ve(e) && !kr(e), r = !1, a = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], n, i, s = a.length;
  for (n = 0; n < s; n += 1)
    i = a[n], r = r || x(e, i);
  return t && r;
}
function fo(e) {
  var t = he(e), r = !1;
  return t && (r = e.filter(function(a) {
    return !Ye(a) && Ja(e);
  }).length === 0), t && r;
}
function ho(e) {
  var t = Ve(e) && !kr(e), r = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, i;
  for (n = 0; n < a.length; n += 1)
    i = a[n], r = r || x(e, i);
  return t && r;
}
function mo(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function vo(e, t) {
  arguments.length === 1 && (arguments[0] ? lo(arguments[0]) ? (e = arguments[0], t = void 0) : ho(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || H(), a = Lr(r, this).startOf("day"), n = f.calendarFormat(this, a) || "sameElse", i = t && (be(t[n]) ? t[n].call(this, r) : t[n]);
  return this.format(
    i || this.localeData().calendar(n, this, H(r))
  );
}
function yo() {
  return new Mt(this);
}
function wo(e, t) {
  var r = me(e) ? e : H(e);
  return this.isValid() && r.isValid() ? (t = ce(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function po(e, t) {
  var r = me(e) ? e : H(e);
  return this.isValid() && r.isValid() ? (t = ce(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function go(e, t, r, a) {
  var n = me(e) ? e : H(e), i = me(t) ? t : H(t);
  return this.isValid() && n.isValid() && i.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(n, r) : !this.isBefore(n, r)) && (a[1] === ")" ? this.isBefore(i, r) : !this.isAfter(i, r))) : !1;
}
function _o(e, t) {
  var r = me(e) ? e : H(e), a;
  return this.isValid() && r.isValid() ? (t = ce(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (a = r.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function bo(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function ko(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Do(e, t, r) {
  var a, n, i;
  if (!this.isValid())
    return NaN;
  if (a = Lr(e, this), !a.isValid())
    return NaN;
  switch (n = (a.utcOffset() - this.utcOffset()) * 6e4, t = ce(t), t) {
    case "year":
      i = Ft(this, a) / 12;
      break;
    case "month":
      i = Ft(this, a);
      break;
    case "quarter":
      i = Ft(this, a) / 3;
      break;
    case "second":
      i = (this - a) / 1e3;
      break;
    case "minute":
      i = (this - a) / 6e4;
      break;
    case "hour":
      i = (this - a) / 36e5;
      break;
    case "day":
      i = (this - a - n) / 864e5;
      break;
    case "week":
      i = (this - a - n) / 6048e5;
      break;
    default:
      i = this - a;
  }
  return r ? i : ue(i);
}
function Ft(e, t) {
  if (e.date() < t.date())
    return -Ft(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(r, "months"), n, i;
  return t - a < 0 ? (n = e.clone().add(r - 1, "months"), i = (t - a) / (a - n)) : (n = e.clone().add(r + 1, "months"), i = (t - a) / (n - a)), -(r + i) || 0;
}
f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function To() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Mo(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? Et(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : be(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Et(r, "Z")) : Et(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Oo() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, a, n, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(r + a + n + i);
}
function xo(e) {
  e || (e = this.isUtc() ? f.defaultFormatUtc : f.defaultFormat);
  var t = Et(this, e);
  return this.localeData().postformat(t);
}
function Yo(e, t) {
  return this.isValid() && (me(e) && e.isValid() || H(e).isValid()) ? ve({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Po(e) {
  return this.from(H(), e);
}
function So(e, t) {
  return this.isValid() && (me(e) && e.isValid() || H(e).isValid()) ? ve({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Co(e) {
  return this.to(H(), e);
}
function Ka(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Se(e), t != null && (this._locale = t), this);
}
var en = le(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function tn() {
  return this._locale;
}
var At = 1e3, tt = 60 * At, jt = 60 * tt, rn = (365 * 400 + 97) * 24 * jt;
function rt(e, t) {
  return (e % t + t) % t;
}
function an(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - rn : new Date(e, t, r).valueOf();
}
function nn(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - rn : Date.UTC(e, t, r);
}
function No(e) {
  var t, r;
  if (e = ce(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? nn : an, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= rt(
        t + (this._isUTC ? 0 : this.utcOffset() * tt),
        jt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= rt(t, tt);
      break;
    case "second":
      t = this._d.valueOf(), t -= rt(t, At);
      break;
  }
  return this._d.setTime(t), f.updateOffset(this, !0), this;
}
function Wo(e) {
  var t, r;
  if (e = ce(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? nn : an, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += jt - rt(
        t + (this._isUTC ? 0 : this.utcOffset() * tt),
        jt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += tt - rt(t, tt) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += At - rt(t, At) - 1;
      break;
  }
  return this._d.setTime(t), f.updateOffset(this, !0), this;
}
function Uo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Eo() {
  return Math.floor(this.valueOf() / 1e3);
}
function Ro() {
  return new Date(this.valueOf());
}
function Fo() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Ho() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Io() {
  return this.isValid() ? this.toISOString() : null;
}
function Lo() {
  return Dr(this);
}
function Ao() {
  return Ee({}, _(this));
}
function jo() {
  return _(this).overflow;
}
function Go() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
w("N", 0, 0, "eraAbbr");
w("NN", 0, 0, "eraAbbr");
w("NNN", 0, 0, "eraAbbr");
w("NNNN", 0, 0, "eraName");
w("NNNNN", 0, 0, "eraNarrow");
w("y", ["y", 1], "yo", "eraYear");
w("y", ["yy", 2], 0, "eraYear");
w("y", ["yyy", 3], 0, "eraYear");
w("y", ["yyyy", 4], 0, "eraYear");
v("N", Ar);
v("NN", Ar);
v("NNN", Ar);
v("NNNN", eu);
v("NNNNN", tu);
N(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, a) {
    var n = r._locale.erasParse(e, a, r._strict);
    n ? _(r).era = n : _(r).invalidEra = e;
  }
);
v("y", nt);
v("yy", nt);
v("yyy", nt);
v("yyyy", nt);
v("yo", ru);
N(["y", "yy", "yyy", "yyyy"], te);
N(["yo"], function(e, t, r, a) {
  var n;
  r._locale._eraYearOrdinalRegex && (n = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[te] = r._locale.eraYearOrdinalParse(e, n) : t[te] = parseInt(e, 10);
});
function qo(e, t) {
  var r, a, n, i = this._eras || Se("en")._eras;
  for (r = 0, a = i.length; r < a; ++r) {
    switch (typeof i[r].since) {
      case "string":
        n = f(i[r].since).startOf("day"), i[r].since = n.valueOf();
        break;
    }
    switch (typeof i[r].until) {
      case "undefined":
        i[r].until = 1 / 0;
        break;
      case "string":
        n = f(i[r].until).startOf("day").valueOf(), i[r].until = n.valueOf();
        break;
    }
  }
  return i;
}
function $o(e, t, r) {
  var a, n, i = this.eras(), s, o, u;
  for (e = e.toUpperCase(), a = 0, n = i.length; a < n; ++a)
    if (s = i[a].name.toUpperCase(), o = i[a].abbr.toUpperCase(), u = i[a].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[a];
          break;
        case "NNNN":
          if (s === e)
            return i[a];
          break;
        case "NNNNN":
          if (u === e)
            return i[a];
          break;
      }
    else if ([s, o, u].indexOf(e) >= 0)
      return i[a];
}
function Vo(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? f(e.since).year() : f(e.since).year() + (t - e.offset) * r;
}
function Qo() {
  var e, t, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return a[e].name;
  return "";
}
function Bo() {
  var e, t, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return a[e].narrow;
  return "";
}
function zo() {
  var e, t, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return a[e].abbr;
  return "";
}
function Zo() {
  var e, t, r, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = n[e].since <= n[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return (this.year() - f(n[e].since).year()) * r + n[e].offset;
  return this.year();
}
function Xo(e) {
  return x(this, "_erasNameRegex") || jr.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Jo(e) {
  return x(this, "_erasAbbrRegex") || jr.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Ko(e) {
  return x(this, "_erasNarrowRegex") || jr.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Ar(e, t) {
  return t.erasAbbrRegex(e);
}
function eu(e, t) {
  return t.erasNameRegex(e);
}
function tu(e, t) {
  return t.erasNarrowRegex(e);
}
function ru(e, t) {
  return t._eraYearOrdinalRegex || nt;
}
function jr() {
  var e = [], t = [], r = [], a = [], n, i, s, o, u, l = this.eras();
  for (n = 0, i = l.length; n < i; ++n)
    s = Oe(l[n].name), o = Oe(l[n].abbr), u = Oe(l[n].narrow), t.push(s), e.push(o), r.push(u), a.push(s), a.push(o), a.push(u);
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
w(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
w(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function rr(e, t) {
  w(0, [e, e.length], 0, t);
}
rr("gggg", "weekYear");
rr("ggggg", "weekYear");
rr("GGGG", "isoWeekYear");
rr("GGGGG", "isoWeekYear");
v("G", Xt);
v("g", Xt);
v("GG", I, ie);
v("gg", I, ie);
v("GGGG", Pr, Yr);
v("gggg", Pr, Yr);
v("GGGGG", Zt, Bt);
v("ggggg", Zt, Bt);
xt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, a) {
    t[a.substr(0, 2)] = b(e);
  }
);
xt(["gg", "GG"], function(e, t, r, a) {
  t[a] = f.parseTwoDigitYear(e);
});
function au(e) {
  return sn.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function nu(e) {
  return sn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function iu() {
  return xe(this.year(), 1, 4);
}
function su() {
  return xe(this.isoWeekYear(), 1, 4);
}
function ou() {
  var e = this.localeData()._week;
  return xe(this.year(), e.dow, e.doy);
}
function uu() {
  var e = this.localeData()._week;
  return xe(this.weekYear(), e.dow, e.doy);
}
function sn(e, t, r, a, n) {
  var i;
  return e == null ? _t(this, a, n).year : (i = xe(e, a, n), t > i && (t = i), lu.call(this, e, t, r, a, n));
}
function lu(e, t, r, a, n) {
  var i = Ha(e, t, r, a, n), s = gt(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
w("Q", 0, "Qo", "quarter");
v("Q", xa);
N("Q", function(e, t) {
  t[Te] = (b(e) - 1) * 3;
});
function cu(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
w("D", ["DD", 2], "Do", "date");
v("D", I, it);
v("DD", I, ie);
v("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
N(["D", "DD"], ye);
N("Do", function(e, t) {
  t[ye] = b(e.match(I)[0]);
});
var on = st("Date", !0);
w("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
v("DDD", zt);
v("DDDD", Ya);
N(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = b(e);
});
function du(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
w("m", ["mm", 2], 0, "minute");
v("m", I, Sr);
v("mm", I, ie);
N(["m", "mm"], fe);
var fu = st("Minutes", !1);
w("s", ["ss", 2], 0, "second");
v("s", I, Sr);
v("ss", I, ie);
N(["s", "ss"], Me);
var hu = st("Seconds", !1);
w("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
w(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
w(0, ["SSS", 3], 0, "millisecond");
w(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
w(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
w(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
w(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
w(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
w(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
v("S", zt, xa);
v("SS", zt, ie);
v("SSS", zt, Ya);
var Re, un;
for (Re = "SSSS"; Re.length <= 9; Re += "S")
  v(Re, nt);
function mu(e, t) {
  t[$e] = b(("0." + e) * 1e3);
}
for (Re = "S"; Re.length <= 9; Re += "S")
  N(Re, mu);
un = st("Milliseconds", !1);
w("z", 0, 0, "zoneAbbr");
w("zz", 0, 0, "zoneName");
function vu() {
  return this._isUTC ? "UTC" : "";
}
function yu() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var d = Mt.prototype;
d.add = oo;
d.calendar = vo;
d.clone = yo;
d.diff = Do;
d.endOf = Wo;
d.format = xo;
d.from = Yo;
d.fromNow = Po;
d.to = So;
d.toNow = Co;
d.get = Mi;
d.invalidAt = jo;
d.isAfter = wo;
d.isBefore = po;
d.isBetween = go;
d.isSame = _o;
d.isSameOrAfter = bo;
d.isSameOrBefore = ko;
d.isValid = Lo;
d.lang = en;
d.locale = Ka;
d.localeData = tn;
d.max = Is;
d.min = Hs;
d.parsingFlags = Ao;
d.set = Oi;
d.startOf = No;
d.subtract = uo;
d.toArray = Fo;
d.toObject = Ho;
d.toDate = Ro;
d.toISOString = Mo;
d.inspect = Oo;
typeof Symbol < "u" && Symbol.for != null && (d[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
d.toJSON = Io;
d.toString = To;
d.unix = Eo;
d.valueOf = Uo;
d.creationData = Go;
d.eraName = Qo;
d.eraNarrow = Bo;
d.eraAbbr = zo;
d.eraYear = Zo;
d.year = Ca;
d.isLeapYear = Ti;
d.weekYear = au;
d.isoWeekYear = nu;
d.quarter = d.quarters = cu;
d.month = Ra;
d.daysInMonth = Ei;
d.week = d.weeks = Gi;
d.isoWeek = d.isoWeeks = qi;
d.weeksInYear = ou;
d.weeksInWeekYear = uu;
d.isoWeeksInYear = iu;
d.isoWeeksInISOWeekYear = su;
d.date = on;
d.day = d.days = as;
d.weekday = ns;
d.isoWeekday = is;
d.dayOfYear = du;
d.hour = d.hours = fs;
d.minute = d.minutes = fu;
d.second = d.seconds = hu;
d.millisecond = d.milliseconds = un;
d.utcOffset = Bs;
d.utc = Zs;
d.local = Xs;
d.parseZone = Js;
d.hasAlignedHourOffset = Ks;
d.isDST = eo;
d.isLocal = ro;
d.isUtcOffset = ao;
d.isUtc = za;
d.isUTC = za;
d.zoneAbbr = vu;
d.zoneName = yu;
d.dates = le(
  "dates accessor is deprecated. Use date instead.",
  on
);
d.months = le(
  "months accessor is deprecated. Use month instead",
  Ra
);
d.years = le(
  "years accessor is deprecated. Use year instead",
  Ca
);
d.zone = le(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  zs
);
d.isDSTShifted = le(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  to
);
function wu(e) {
  return H(e * 1e3);
}
function pu() {
  return H.apply(null, arguments).parseZone();
}
function ln(e) {
  return e;
}
var Y = Mr.prototype;
Y.calendar = ri;
Y.longDateFormat = si;
Y.invalidDate = ui;
Y.ordinal = di;
Y.preparse = ln;
Y.postformat = ln;
Y.relativeTime = hi;
Y.pastFuture = mi;
Y.set = ei;
Y.eras = qo;
Y.erasParse = $o;
Y.erasConvertYear = Vo;
Y.erasAbbrRegex = Jo;
Y.erasNameRegex = Xo;
Y.erasNarrowRegex = Ko;
Y.months = Ci;
Y.monthsShort = Ni;
Y.monthsParse = Ui;
Y.monthsRegex = Fi;
Y.monthsShortRegex = Ri;
Y.week = Ii;
Y.firstDayOfYear = ji;
Y.firstDayOfWeek = Ai;
Y.weekdays = Ji;
Y.weekdaysMin = es;
Y.weekdaysShort = Ki;
Y.weekdaysParse = rs;
Y.weekdaysRegex = ss;
Y.weekdaysShortRegex = os;
Y.weekdaysMinRegex = us;
Y.isPM = cs;
Y.meridiem = hs;
function Gt(e, t, r, a) {
  var n = Se(), i = _e().set(a, t);
  return n[r](i, e);
}
function cn(e, t, r) {
  if (Ye(e) && (t = e, e = void 0), e = e || "", t != null)
    return Gt(e, t, r, "month");
  var a, n = [];
  for (a = 0; a < 12; a++)
    n[a] = Gt(e, a, r, "month");
  return n;
}
function Gr(e, t, r, a) {
  typeof e == "boolean" ? (Ye(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, Ye(t) && (r = t, t = void 0), t = t || "");
  var n = Se(), i = e ? n._week.dow : 0, s, o = [];
  if (r != null)
    return Gt(t, (r + i) % 7, a, "day");
  for (s = 0; s < 7; s++)
    o[s] = Gt(t, (s + i) % 7, a, "day");
  return o;
}
function gu(e, t) {
  return cn(e, t, "months");
}
function _u(e, t) {
  return cn(e, t, "monthsShort");
}
function bu(e, t, r) {
  return Gr(e, t, r, "weekdays");
}
function ku(e, t, r) {
  return Gr(e, t, r, "weekdaysShort");
}
function Du(e, t, r) {
  return Gr(e, t, r, "weekdaysMin");
}
He("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = b(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
f.lang = le(
  "moment.lang is deprecated. Use moment.locale instead.",
  He
);
f.langData = le(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Se
);
var ke = Math.abs;
function Tu() {
  var e = this._data;
  return this._milliseconds = ke(this._milliseconds), this._days = ke(this._days), this._months = ke(this._months), e.milliseconds = ke(e.milliseconds), e.seconds = ke(e.seconds), e.minutes = ke(e.minutes), e.hours = ke(e.hours), e.months = ke(e.months), e.years = ke(e.years), this;
}
function dn(e, t, r, a) {
  var n = ve(t, r);
  return e._milliseconds += a * n._milliseconds, e._days += a * n._days, e._months += a * n._months, e._bubble();
}
function Mu(e, t) {
  return dn(this, e, t, 1);
}
function Ou(e, t) {
  return dn(this, e, t, -1);
}
function sa(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function xu() {
  var e = this._milliseconds, t = this._days, r = this._months, a = this._data, n, i, s, o, u;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += sa(pr(r) + t) * 864e5, t = 0, r = 0), a.milliseconds = e % 1e3, n = ue(e / 1e3), a.seconds = n % 60, i = ue(n / 60), a.minutes = i % 60, s = ue(i / 60), a.hours = s % 24, t += ue(s / 24), u = ue(fn(t)), r += u, t -= sa(pr(u)), o = ue(r / 12), r %= 12, a.days = t, a.months = r, a.years = o, this;
}
function fn(e) {
  return e * 4800 / 146097;
}
function pr(e) {
  return e * 146097 / 4800;
}
function Yu(e) {
  if (!this.isValid())
    return NaN;
  var t, r, a = this._milliseconds;
  if (e = ce(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, r = this._months + fn(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(pr(this._months)), e) {
      case "week":
        return t / 7 + a / 6048e5;
      case "day":
        return t + a / 864e5;
      case "hour":
        return t * 24 + a / 36e5;
      case "minute":
        return t * 1440 + a / 6e4;
      case "second":
        return t * 86400 + a / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + a;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ce(e) {
  return function() {
    return this.as(e);
  };
}
var hn = Ce("ms"), Pu = Ce("s"), Su = Ce("m"), Cu = Ce("h"), Nu = Ce("d"), Wu = Ce("w"), Uu = Ce("M"), Eu = Ce("Q"), Ru = Ce("y"), Fu = hn;
function Hu() {
  return ve(this);
}
function Iu(e) {
  return e = ce(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ze(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Lu = ze("milliseconds"), Au = ze("seconds"), ju = ze("minutes"), Gu = ze("hours"), qu = ze("days"), $u = ze("months"), Vu = ze("years");
function Qu() {
  return ue(this.days() / 7);
}
var De = Math.round, Ke = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Bu(e, t, r, a, n) {
  return n.relativeTime(t || 1, !!r, e, a);
}
function zu(e, t, r, a) {
  var n = ve(e).abs(), i = De(n.as("s")), s = De(n.as("m")), o = De(n.as("h")), u = De(n.as("d")), l = De(n.as("M")), c = De(n.as("w")), y = De(n.as("y")), g = i <= r.ss && ["s", i] || i < r.s && ["ss", i] || s <= 1 && ["m"] || s < r.m && ["mm", s] || o <= 1 && ["h"] || o < r.h && ["hh", o] || u <= 1 && ["d"] || u < r.d && ["dd", u];
  return r.w != null && (g = g || c <= 1 && ["w"] || c < r.w && ["ww", c]), g = g || l <= 1 && ["M"] || l < r.M && ["MM", l] || y <= 1 && ["y"] || ["yy", y], g[2] = t, g[3] = +e > 0, g[4] = a, Bu.apply(null, g);
}
function Zu(e) {
  return e === void 0 ? De : typeof e == "function" ? (De = e, !0) : !1;
}
function Xu(e, t) {
  return Ke[e] === void 0 ? !1 : t === void 0 ? Ke[e] : (Ke[e] = t, e === "s" && (Ke.ss = t - 1), !0);
}
function Ju(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, a = Ke, n, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (a = Object.assign({}, Ke, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), n = this.localeData(), i = zu(this, !r, a, n), r && (i = n.pastFuture(+this, i)), n.postformat(i);
}
var cr = Math.abs;
function Ze(e) {
  return (e > 0) - (e < 0) || +e;
}
function ar() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = cr(this._milliseconds) / 1e3, t = cr(this._days), r = cr(this._months), a, n, i, s, o = this.asSeconds(), u, l, c, y;
  return o ? (a = ue(e / 60), n = ue(a / 60), e %= 60, a %= 60, i = ue(r / 12), r %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", u = o < 0 ? "-" : "", l = Ze(this._months) !== Ze(o) ? "-" : "", c = Ze(this._days) !== Ze(o) ? "-" : "", y = Ze(this._milliseconds) !== Ze(o) ? "-" : "", u + "P" + (i ? l + i + "Y" : "") + (r ? l + r + "M" : "") + (t ? c + t + "D" : "") + (n || a || e ? "T" : "") + (n ? y + n + "H" : "") + (a ? y + a + "M" : "") + (e ? y + s + "S" : "")) : "P0D";
}
var T = tr.prototype;
T.isValid = qs;
T.abs = Tu;
T.add = Mu;
T.subtract = Ou;
T.as = Yu;
T.asMilliseconds = hn;
T.asSeconds = Pu;
T.asMinutes = Su;
T.asHours = Cu;
T.asDays = Nu;
T.asWeeks = Wu;
T.asMonths = Uu;
T.asQuarters = Eu;
T.asYears = Ru;
T.valueOf = Fu;
T._bubble = xu;
T.clone = Hu;
T.get = Iu;
T.milliseconds = Lu;
T.seconds = Au;
T.minutes = ju;
T.hours = Gu;
T.days = qu;
T.weeks = Qu;
T.months = $u;
T.years = Vu;
T.humanize = Ju;
T.toISOString = ar;
T.toString = ar;
T.toJSON = ar;
T.locale = Ka;
T.localeData = tn;
T.toIsoString = le(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ar
);
T.lang = en;
w("X", 0, 0, "unix");
w("x", 0, 0, "valueOf");
v("x", Xt);
v("X", pi);
N("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
N("x", function(e, t, r) {
  r._d = new Date(b(e));
});
//! moment.js
f.version = "2.30.1";
Jn(H);
f.fn = d;
f.min = Ls;
f.max = As;
f.now = js;
f.utc = _e;
f.unix = wu;
f.months = gu;
f.isDate = Tt;
f.locale = He;
f.invalid = Qt;
f.duration = ve;
f.isMoment = me;
f.weekdays = bu;
f.parseZone = pu;
f.localeData = Se;
f.isDuration = Rt;
f.monthsShort = _u;
f.weekdaysMin = Du;
f.defineLocale = Er;
f.updateLocale = ws;
f.locales = ps;
f.weekdaysShort = ku;
f.normalizeUnits = ce;
f.relativeTimeRounding = Zu;
f.relativeTimeThreshold = Xu;
f.calendarFormat = mo;
f.prototype = d;
f.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
function Pe(e) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pe(e);
}
function re(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function R(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function F(e) {
  R(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Pe(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function oa(e, t) {
  R(2, arguments);
  var r = F(e), a = re(t);
  return isNaN(a) ? /* @__PURE__ */ new Date(NaN) : (a && r.setDate(r.getDate() + a), r);
}
function Ku(e, t) {
  R(2, arguments);
  var r = F(e).getTime(), a = re(t);
  return new Date(r + a);
}
var el = {};
function ot() {
  return el;
}
function mn(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function vn(e) {
  R(1, arguments);
  var t = F(e);
  return t.setHours(0, 0, 0, 0), t;
}
var tl = 6e4, rl = 36e5, al = 1e3;
function nl(e) {
  return R(1, arguments), e instanceof Date || Pe(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function yn(e) {
  if (R(1, arguments), !nl(e) && typeof e != "number")
    return !1;
  var t = F(e);
  return !isNaN(Number(t));
}
function il(e) {
  R(1, arguments);
  var t = F(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function sl(e, t) {
  var r;
  R(1, arguments);
  var a = e || {}, n = F(a.start), i = F(a.end), s = i.getTime();
  if (!(n.getTime() <= s))
    throw new RangeError("Invalid interval");
  var o = [], u = n;
  u.setHours(0, 0, 0, 0);
  var l = Number((r = void 0) !== null && r !== void 0 ? r : 1);
  if (l < 1 || isNaN(l)) throw new RangeError("`options.step` must be a number greater than 1");
  for (; u.getTime() <= s; )
    o.push(F(u)), u.setDate(u.getDate() + l), u.setHours(0, 0, 0, 0);
  return o;
}
function ol(e) {
  R(1, arguments);
  var t = F(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function wn(e, t) {
  R(2, arguments);
  var r = re(t);
  return Ku(e, -r);
}
var ul = 864e5;
function ll(e) {
  R(1, arguments);
  var t = F(e), r = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var a = t.getTime(), n = r - a;
  return Math.floor(n / ul) + 1;
}
function at(e) {
  R(1, arguments);
  var t = 1, r = F(e), a = r.getUTCDay(), n = (a < t ? 7 : 0) + a - t;
  return r.setUTCDate(r.getUTCDate() - n), r.setUTCHours(0, 0, 0, 0), r;
}
function pn(e) {
  R(1, arguments);
  var t = F(e), r = t.getUTCFullYear(), a = /* @__PURE__ */ new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var n = at(a), i = /* @__PURE__ */ new Date(0);
  i.setUTCFullYear(r, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var s = at(i);
  return t.getTime() >= n.getTime() ? r + 1 : t.getTime() >= s.getTime() ? r : r - 1;
}
function cl(e) {
  R(1, arguments);
  var t = pn(e), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = at(r);
  return a;
}
var dl = 6048e5;
function gn(e) {
  R(1, arguments);
  var t = F(e), r = at(t).getTime() - cl(t).getTime();
  return Math.round(r / dl) + 1;
}
function Be(e, t) {
  var r, a, n, i, s, o, u, l;
  R(1, arguments);
  var c = ot(), y = re((r = (a = (n = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.weekStartsOn) !== null && n !== void 0 ? n : c.weekStartsOn) !== null && a !== void 0 ? a : (u = c.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = F(e), p = g.getUTCDay(), W = (p < y ? 7 : 0) + p - y;
  return g.setUTCDate(g.getUTCDate() - W), g.setUTCHours(0, 0, 0, 0), g;
}
function qr(e, t) {
  var r, a, n, i, s, o, u, l;
  R(1, arguments);
  var c = F(e), y = c.getUTCFullYear(), g = ot(), p = re((r = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && n !== void 0 ? n : g.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = g.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(p >= 1 && p <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var W = /* @__PURE__ */ new Date(0);
  W.setUTCFullYear(y + 1, 0, p), W.setUTCHours(0, 0, 0, 0);
  var S = Be(W, t), A = /* @__PURE__ */ new Date(0);
  A.setUTCFullYear(y, 0, p), A.setUTCHours(0, 0, 0, 0);
  var K = Be(A, t);
  return c.getTime() >= S.getTime() ? y + 1 : c.getTime() >= K.getTime() ? y : y - 1;
}
function fl(e, t) {
  var r, a, n, i, s, o, u, l;
  R(1, arguments);
  var c = ot(), y = re((r = (a = (n = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (s = t.locale) === null || s === void 0 || (o = s.options) === null || o === void 0 ? void 0 : o.firstWeekContainsDate) !== null && n !== void 0 ? n : c.firstWeekContainsDate) !== null && a !== void 0 ? a : (u = c.locale) === null || u === void 0 || (l = u.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), g = qr(e, t), p = /* @__PURE__ */ new Date(0);
  p.setUTCFullYear(g, 0, y), p.setUTCHours(0, 0, 0, 0);
  var W = Be(p, t);
  return W;
}
var hl = 6048e5;
function _n(e, t) {
  R(1, arguments);
  var r = F(e), a = Be(r, t).getTime() - fl(r, t).getTime();
  return Math.round(a / hl) + 1;
}
function C(e, t) {
  for (var r = e < 0 ? "-" : "", a = Math.abs(e).toString(); a.length < t; )
    a = "0" + a;
  return r + a;
}
var Ue = {
  // Year
  y: function(t, r) {
    var a = t.getUTCFullYear(), n = a > 0 ? a : 1 - a;
    return C(r === "yy" ? n % 100 : n, r.length);
  },
  // Month
  M: function(t, r) {
    var a = t.getUTCMonth();
    return r === "M" ? String(a + 1) : C(a + 1, 2);
  },
  // Day of the month
  d: function(t, r) {
    return C(t.getUTCDate(), r.length);
  },
  // AM or PM
  a: function(t, r) {
    var a = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, r) {
    return C(t.getUTCHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H: function(t, r) {
    return C(t.getUTCHours(), r.length);
  },
  // Minute
  m: function(t, r) {
    return C(t.getUTCMinutes(), r.length);
  },
  // Second
  s: function(t, r) {
    return C(t.getUTCSeconds(), r.length);
  },
  // Fraction of second
  S: function(t, r) {
    var a = r.length, n = t.getUTCMilliseconds(), i = Math.floor(n * Math.pow(10, a - 3));
    return C(i, r.length);
  }
}, Xe = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ml = {
  // Era
  G: function(t, r, a) {
    var n = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(n, {
          width: "abbreviated"
        });
      case "GGGGG":
        return a.era(n, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return a.era(n, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, r, a) {
    if (r === "yo") {
      var n = t.getUTCFullYear(), i = n > 0 ? n : 1 - n;
      return a.ordinalNumber(i, {
        unit: "year"
      });
    }
    return Ue.y(t, r);
  },
  // Local week-numbering year
  Y: function(t, r, a, n) {
    var i = qr(t, n), s = i > 0 ? i : 1 - i;
    if (r === "YY") {
      var o = s % 100;
      return C(o, 2);
    }
    return r === "Yo" ? a.ordinalNumber(s, {
      unit: "year"
    }) : C(s, r.length);
  },
  // ISO week-numbering year
  R: function(t, r) {
    var a = pn(t);
    return C(a, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, r) {
    var a = t.getUTCFullYear();
    return C(a, r.length);
  },
  // Quarter
  Q: function(t, r, a) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(n);
      case "QQ":
        return C(n, 2);
      case "Qo":
        return a.ordinalNumber(n, {
          unit: "quarter"
        });
      case "QQQ":
        return a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, r, a) {
    var n = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(n);
      case "qq":
        return C(n, 2);
      case "qo":
        return a.ordinalNumber(n, {
          unit: "quarter"
        });
      case "qqq":
        return a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, r, a) {
    var n = t.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return Ue.M(t, r);
      case "Mo":
        return a.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "MMM":
        return a.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, r, a) {
    var n = t.getUTCMonth();
    switch (r) {
      case "L":
        return String(n + 1);
      case "LL":
        return C(n + 1, 2);
      case "Lo":
        return a.ordinalNumber(n + 1, {
          unit: "month"
        });
      case "LLL":
        return a.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, r, a, n) {
    var i = _n(t, n);
    return r === "wo" ? a.ordinalNumber(i, {
      unit: "week"
    }) : C(i, r.length);
  },
  // ISO week of year
  I: function(t, r, a) {
    var n = gn(t);
    return r === "Io" ? a.ordinalNumber(n, {
      unit: "week"
    }) : C(n, r.length);
  },
  // Day of the month
  d: function(t, r, a) {
    return r === "do" ? a.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Ue.d(t, r);
  },
  // Day of year
  D: function(t, r, a) {
    var n = ll(t);
    return r === "Do" ? a.ordinalNumber(n, {
      unit: "dayOfYear"
    }) : C(n, r.length);
  },
  // Day of week
  E: function(t, r, a) {
    var n = t.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, r, a, n) {
    var i = t.getUTCDay(), s = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(s);
      case "ee":
        return C(s, 2);
      case "eo":
        return a.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return a.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, r, a, n) {
    var i = t.getUTCDay(), s = (i - n.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(s);
      case "cc":
        return C(s, r.length);
      case "co":
        return a.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return a.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, r, a) {
    var n = t.getUTCDay(), i = n === 0 ? 7 : n;
    switch (r) {
      case "i":
        return String(i);
      case "ii":
        return C(i, r.length);
      case "io":
        return a.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, r, a) {
    var n = t.getUTCHours(), i = n / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, r, a) {
    var n = t.getUTCHours(), i;
    switch (n === 12 ? i = Xe.noon : n === 0 ? i = Xe.midnight : i = n / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, r, a) {
    var n = t.getUTCHours(), i;
    switch (n >= 17 ? i = Xe.evening : n >= 12 ? i = Xe.afternoon : n >= 4 ? i = Xe.morning : i = Xe.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, r, a) {
    if (r === "ho") {
      var n = t.getUTCHours() % 12;
      return n === 0 && (n = 12), a.ordinalNumber(n, {
        unit: "hour"
      });
    }
    return Ue.h(t, r);
  },
  // Hour [0-23]
  H: function(t, r, a) {
    return r === "Ho" ? a.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Ue.H(t, r);
  },
  // Hour [0-11]
  K: function(t, r, a) {
    var n = t.getUTCHours() % 12;
    return r === "Ko" ? a.ordinalNumber(n, {
      unit: "hour"
    }) : C(n, r.length);
  },
  // Hour [1-24]
  k: function(t, r, a) {
    var n = t.getUTCHours();
    return n === 0 && (n = 24), r === "ko" ? a.ordinalNumber(n, {
      unit: "hour"
    }) : C(n, r.length);
  },
  // Minute
  m: function(t, r, a) {
    return r === "mo" ? a.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Ue.m(t, r);
  },
  // Second
  s: function(t, r, a) {
    return r === "so" ? a.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Ue.s(t, r);
  },
  // Fraction of second
  S: function(t, r) {
    return Ue.S(t, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, r, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (r) {
      case "X":
        return la(s);
      case "XXXX":
      case "XX":
        return qe(s);
      case "XXXXX":
      case "XXX":
      default:
        return qe(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, r, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    switch (r) {
      case "x":
        return la(s);
      case "xxxx":
      case "xx":
        return qe(s);
      case "xxxxx":
      case "xxx":
      default:
        return qe(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, r, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ua(s, ":");
      case "OOOO":
      default:
        return "GMT" + qe(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, r, a, n) {
    var i = n._originalDate || t, s = i.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ua(s, ":");
      case "zzzz":
      default:
        return "GMT" + qe(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, r, a, n) {
    var i = n._originalDate || t, s = Math.floor(i.getTime() / 1e3);
    return C(s, r.length);
  },
  // Milliseconds timestamp
  T: function(t, r, a, n) {
    var i = n._originalDate || t, s = i.getTime();
    return C(s, r.length);
  }
};
function ua(e, t) {
  var r = e > 0 ? "-" : "+", a = Math.abs(e), n = Math.floor(a / 60), i = a % 60;
  if (i === 0)
    return r + String(n);
  var s = t;
  return r + String(n) + s + C(i, 2);
}
function la(e, t) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + C(Math.abs(e) / 60, 2);
  }
  return qe(e, t);
}
function qe(e, t) {
  var r = t || "", a = e > 0 ? "-" : "+", n = Math.abs(e), i = C(Math.floor(n / 60), 2), s = C(n % 60, 2);
  return a + i + r + s;
}
var ca = function(t, r) {
  switch (t) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, bn = function(t, r) {
  switch (t) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, vl = function(t, r) {
  var a = t.match(/(P+)(p+)?/) || [], n = a[1], i = a[2];
  if (!i)
    return ca(t, r);
  var s;
  switch (n) {
    case "P":
      s = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      s = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      s = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      s = r.dateTime({
        width: "full"
      });
      break;
  }
  return s.replace("{{date}}", ca(n, r)).replace("{{time}}", bn(i, r));
}, gr = {
  p: bn,
  P: vl
}, yl = ["D", "DD"], wl = ["YY", "YYYY"];
function kn(e) {
  return yl.indexOf(e) !== -1;
}
function Dn(e) {
  return wl.indexOf(e) !== -1;
}
function qt(e, t, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var pl = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, gl = function(t, r, a) {
  var n, i = pl[t];
  return typeof i == "string" ? n = i : r === 1 ? n = i.one : n = i.other.replace("{{count}}", r.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + n : n + " ago" : n;
};
function dr(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.width ? String(t.width) : e.defaultWidth, a = e.formats[r] || e.formats[e.defaultWidth];
    return a;
  };
}
var _l = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, bl = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, kl = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Dl = {
  date: dr({
    formats: _l,
    defaultWidth: "full"
  }),
  time: dr({
    formats: bl,
    defaultWidth: "full"
  }),
  dateTime: dr({
    formats: kl,
    defaultWidth: "full"
  })
}, Tl = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ml = function(t, r, a, n) {
  return Tl[t];
};
function ht(e) {
  return function(t, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", n;
    if (a === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : i;
      n = e.formattingValues[s] || e.formattingValues[i];
    } else {
      var o = e.defaultWidth, u = r != null && r.width ? String(r.width) : e.defaultWidth;
      n = e.values[u] || e.values[o];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return n[l];
  };
}
var Ol = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, xl = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Yl = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Pl = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Sl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Cl = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Nl = function(t, r) {
  var a = Number(t), n = a % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, Wl = {
  ordinalNumber: Nl,
  era: ht({
    values: Ol,
    defaultWidth: "wide"
  }),
  quarter: ht({
    values: xl,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ht({
    values: Yl,
    defaultWidth: "wide"
  }),
  day: ht({
    values: Pl,
    defaultWidth: "wide"
  }),
  dayPeriod: ht({
    values: Sl,
    defaultWidth: "wide",
    formattingValues: Cl,
    defaultFormattingWidth: "wide"
  })
};
function mt(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, n = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    var s = i[0], o = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(o) ? El(o, function(y) {
      return y.test(s);
    }) : Ul(o, function(y) {
      return y.test(s);
    }), l;
    l = e.valueCallback ? e.valueCallback(u) : u, l = r.valueCallback ? r.valueCallback(l) : l;
    var c = t.slice(s.length);
    return {
      value: l,
      rest: c
    };
  };
}
function Ul(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r]))
      return r;
}
function El(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Rl(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.match(e.matchPattern);
    if (!a) return null;
    var n = a[0], i = t.match(e.parsePattern);
    if (!i) return null;
    var s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = r.valueCallback ? r.valueCallback(s) : s;
    var o = t.slice(n.length);
    return {
      value: s,
      rest: o
    };
  };
}
var Fl = /^(\d+)(th|st|nd|rd)?/i, Hl = /\d+/i, Il = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ll = {
  any: [/^b/i, /^(a|c)/i]
}, Al = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, jl = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gl = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ql = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, $l = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Vl = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ql = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Bl = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, zl = {
  ordinalNumber: Rl({
    matchPattern: Fl,
    parsePattern: Hl,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: mt({
    matchPatterns: Il,
    defaultMatchWidth: "wide",
    parsePatterns: Ll,
    defaultParseWidth: "any"
  }),
  quarter: mt({
    matchPatterns: Al,
    defaultMatchWidth: "wide",
    parsePatterns: jl,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: mt({
    matchPatterns: Gl,
    defaultMatchWidth: "wide",
    parsePatterns: ql,
    defaultParseWidth: "any"
  }),
  day: mt({
    matchPatterns: $l,
    defaultMatchWidth: "wide",
    parsePatterns: Vl,
    defaultParseWidth: "any"
  }),
  dayPeriod: mt({
    matchPatterns: Ql,
    defaultMatchWidth: "any",
    parsePatterns: Bl,
    defaultParseWidth: "any"
  })
}, Tn = {
  code: "en-US",
  formatDistance: gl,
  formatLong: Dl,
  formatRelative: Ml,
  localize: Wl,
  match: zl,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Zl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Xl = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Jl = /^'([^]*?)'?$/, Kl = /''/g, ec = /[a-zA-Z]/;
function tc(e, t, r) {
  var a, n, i, s, o, u, l, c, y, g, p, W, S, A;
  R(2, arguments);
  var K = String(t), B = ot(), U = (a = (n = void 0) !== null && n !== void 0 ? n : B.locale) !== null && a !== void 0 ? a : Tn, z = re((i = (s = (o = (u = void 0) !== null && u !== void 0 ? u : void 0) !== null && o !== void 0 ? o : B.firstWeekContainsDate) !== null && s !== void 0 ? s : (l = B.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var de = re((y = (g = (p = (W = void 0) !== null && W !== void 0 ? W : void 0) !== null && p !== void 0 ? p : B.weekStartsOn) !== null && g !== void 0 ? g : (S = B.locale) === null || S === void 0 || (A = S.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && y !== void 0 ? y : 0);
  if (!(de >= 0 && de <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!U.localize)
    throw new RangeError("locale must contain localize property");
  if (!U.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var se = F(e);
  if (!yn(se))
    throw new RangeError("Invalid time value");
  var Ie = mn(se), Le = wn(se, Ie), Ae = {
    firstWeekContainsDate: z,
    weekStartsOn: de,
    locale: U,
    _originalDate: se
  }, nr = K.match(Xl).map(function(J) {
    var ne = J[0];
    if (ne === "p" || ne === "P") {
      var je = gr[ne];
      return je(J, U.formatLong);
    }
    return J;
  }).join("").match(Zl).map(function(J) {
    if (J === "''")
      return "'";
    var ne = J[0];
    if (ne === "'")
      return rc(J);
    var je = ml[ne];
    if (je)
      return Dn(J) && qt(J, t, String(e)), kn(J) && qt(J, t, String(e)), je(Le, J, U.localize, Ae);
    if (ne.match(ec))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ne + "`");
    return J;
  }).join("");
  return nr;
}
function rc(e) {
  var t = e.match(Jl);
  return t ? t[1].replace(Kl, "'") : e;
}
function ac(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e;
}
function nc(e, t) {
  R(2, arguments);
  var r = F(e), a = F(t);
  return r.getTime() === a.getTime();
}
function da(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function ic(e, t) {
  if (e) {
    if (typeof e == "string") return da(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? da(e, t) : void 0;
  }
}
function fa(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = ic(e)) || t) {
      r && (e = r);
      var a = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return a >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[a++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, s = !0, o = !1;
  return {
    s: function() {
      r = r.call(e);
    },
    n: function() {
      var l = r.next();
      return s = l.done, l;
    },
    e: function(l) {
      o = !0, i = l;
    },
    f: function() {
      try {
        s || r.return == null || r.return();
      } finally {
        if (o) throw i;
      }
    }
  };
}
function m(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _r(e, t) {
  return _r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, _r(e, t);
}
function M(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && _r(e, t);
}
function $t(e) {
  return $t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, $t(e);
}
function Mn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Mn = function() {
    return !!e;
  })();
}
function sc(e, t) {
  if (t && (Pe(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return m(e);
}
function O(e) {
  var t = Mn();
  return function() {
    var r, a = $t(e);
    if (t) {
      var n = $t(this).constructor;
      r = Reflect.construct(a, arguments, n);
    } else r = a.apply(this, arguments);
    return sc(this, r);
  };
}
function k(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function oc(e, t) {
  if (Pe(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t || "default");
    if (Pe(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function On(e) {
  var t = oc(e, "string");
  return Pe(t) == "symbol" ? t : t + "";
}
function uc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, On(a.key), a);
  }
}
function D(e, t, r) {
  return t && uc(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function h(e, t, r) {
  return (t = On(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var lc = 10, xn = /* @__PURE__ */ function() {
  function e() {
    k(this, e), h(this, "priority", void 0), h(this, "subPriority", 0);
  }
  return D(e, [{
    key: "validate",
    value: function(r, a) {
      return !0;
    }
  }]), e;
}(), cc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r(a, n, i, s, o) {
    var u;
    return k(this, r), u = t.call(this), u.value = a, u.validateValue = n, u.setValue = i, u.priority = s, o && (u.subPriority = o), u;
  }
  return D(r, [{
    key: "validate",
    value: function(n, i) {
      return this.validateValue(n, this.value, i);
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return this.setValue(n, i, this.value, s);
    }
  }]), r;
}(xn), dc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", lc), h(m(a), "subPriority", -1), a;
  }
  return D(r, [{
    key: "set",
    value: function(n, i) {
      if (i.timestampIsSet)
        return n;
      var s = /* @__PURE__ */ new Date(0);
      return s.setFullYear(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()), s.setHours(n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.getUTCMilliseconds()), s;
    }
  }]), r;
}(xn), P = /* @__PURE__ */ function() {
  function e() {
    k(this, e), h(this, "incompatibleTokens", void 0), h(this, "priority", void 0), h(this, "subPriority", void 0);
  }
  return D(e, [{
    key: "run",
    value: function(r, a, n, i) {
      var s = this.parse(r, a, n, i);
      return s ? {
        setter: new cc(s.value, this.validate, this.set, this.priority, this.subPriority),
        rest: s.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(r, a, n) {
      return !0;
    }
  }]), e;
}(), fc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 140), h(m(a), "incompatibleTokens", ["R", "u", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "G":
        case "GG":
        case "GGG":
          return s.era(n, {
            width: "abbreviated"
          }) || s.era(n, {
            width: "narrow"
          });
        case "GGGGG":
          return s.era(n, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return s.era(n, {
            width: "wide"
          }) || s.era(n, {
            width: "abbreviated"
          }) || s.era(n, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return i.era = s, n.setUTCFullYear(s, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), V = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, we = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Q(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function G(e, t) {
  var r = t.match(e);
  return r ? {
    value: parseInt(r[0], 10),
    rest: t.slice(r[0].length)
  } : null;
}
function pe(e, t) {
  var r = t.match(e);
  if (!r)
    return null;
  if (r[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var a = r[1] === "+" ? 1 : -1, n = r[2] ? parseInt(r[2], 10) : 0, i = r[3] ? parseInt(r[3], 10) : 0, s = r[5] ? parseInt(r[5], 10) : 0;
  return {
    value: a * (n * rl + i * tl + s * al),
    rest: t.slice(r[0].length)
  };
}
function Yn(e) {
  return G(V.anyDigitsSigned, e);
}
function q(e, t) {
  switch (e) {
    case 1:
      return G(V.singleDigit, t);
    case 2:
      return G(V.twoDigits, t);
    case 3:
      return G(V.threeDigits, t);
    case 4:
      return G(V.fourDigits, t);
    default:
      return G(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function Vt(e, t) {
  switch (e) {
    case 1:
      return G(V.singleDigitSigned, t);
    case 2:
      return G(V.twoDigitsSigned, t);
    case 3:
      return G(V.threeDigitsSigned, t);
    case 4:
      return G(V.fourDigitsSigned, t);
    default:
      return G(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function $r(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Pn(e, t) {
  var r = t > 0, a = r ? t : 1 - t, n;
  if (a <= 50)
    n = e || 100;
  else {
    var i = a + 50, s = Math.floor(i / 100) * 100, o = e >= i % 100;
    n = e + s - (o ? 100 : 0);
  }
  return r ? n : 1 - n;
}
function Sn(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
var hc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 130), h(m(a), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      var o = function(l) {
        return {
          year: l,
          isTwoDigitYear: i === "yy"
        };
      };
      switch (i) {
        case "y":
          return Q(q(4, n), o);
        case "yo":
          return Q(s.ordinalNumber(n, {
            unit: "year"
          }), o);
        default:
          return Q(q(i.length, n), o);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      var o = n.getUTCFullYear();
      if (s.isTwoDigitYear) {
        var u = Pn(s.year, o);
        return n.setUTCFullYear(u, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
      }
      var l = !("era" in i) || i.era === 1 ? s.year : 1 - s.year;
      return n.setUTCFullYear(l, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), mc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 130), h(m(a), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      var o = function(l) {
        return {
          year: l,
          isTwoDigitYear: i === "YY"
        };
      };
      switch (i) {
        case "Y":
          return Q(q(4, n), o);
        case "Yo":
          return Q(s.ordinalNumber(n, {
            unit: "year"
          }), o);
        default:
          return Q(q(i.length, n), o);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(n, i, s, o) {
      var u = qr(n, o);
      if (s.isTwoDigitYear) {
        var l = Pn(s.year, u);
        return n.setUTCFullYear(l, 0, o.firstWeekContainsDate), n.setUTCHours(0, 0, 0, 0), Be(n, o);
      }
      var c = !("era" in i) || i.era === 1 ? s.year : 1 - s.year;
      return n.setUTCFullYear(c, 0, o.firstWeekContainsDate), n.setUTCHours(0, 0, 0, 0), Be(n, o);
    }
  }]), r;
}(P), vc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 130), h(m(a), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i) {
      return Vt(i === "R" ? 4 : i.length, n);
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      var o = /* @__PURE__ */ new Date(0);
      return o.setUTCFullYear(s, 0, 4), o.setUTCHours(0, 0, 0, 0), at(o);
    }
  }]), r;
}(P), yc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 130), h(m(a), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i) {
      return Vt(i === "u" ? 4 : i.length, n);
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCFullYear(s, 0, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), wc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 120), h(m(a), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "Q":
        case "QQ":
          return q(i.length, n);
        case "Qo":
          return s.ordinalNumber(n, {
            unit: "quarter"
          });
        case "QQQ":
          return s.quarter(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.quarter(n, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return s.quarter(n, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return s.quarter(n, {
            width: "wide",
            context: "formatting"
          }) || s.quarter(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.quarter(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCMonth((s - 1) * 3, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), pc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 120), h(m(a), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "q":
        case "qq":
          return q(i.length, n);
        case "qo":
          return s.ordinalNumber(n, {
            unit: "quarter"
          });
        case "qqq":
          return s.quarter(n, {
            width: "abbreviated",
            context: "standalone"
          }) || s.quarter(n, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return s.quarter(n, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return s.quarter(n, {
            width: "wide",
            context: "standalone"
          }) || s.quarter(n, {
            width: "abbreviated",
            context: "standalone"
          }) || s.quarter(n, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCMonth((s - 1) * 3, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), gc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), h(m(a), "priority", 110), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      var o = function(l) {
        return l - 1;
      };
      switch (i) {
        case "M":
          return Q(G(V.month, n), o);
        case "MM":
          return Q(q(2, n), o);
        case "Mo":
          return Q(s.ordinalNumber(n, {
            unit: "month"
          }), o);
        case "MMM":
          return s.month(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.month(n, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return s.month(n, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return s.month(n, {
            width: "wide",
            context: "formatting"
          }) || s.month(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.month(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCMonth(s, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), _c = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 110), h(m(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      var o = function(l) {
        return l - 1;
      };
      switch (i) {
        case "L":
          return Q(G(V.month, n), o);
        case "LL":
          return Q(q(2, n), o);
        case "Lo":
          return Q(s.ordinalNumber(n, {
            unit: "month"
          }), o);
        case "LLL":
          return s.month(n, {
            width: "abbreviated",
            context: "standalone"
          }) || s.month(n, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return s.month(n, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return s.month(n, {
            width: "wide",
            context: "standalone"
          }) || s.month(n, {
            width: "abbreviated",
            context: "standalone"
          }) || s.month(n, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCMonth(s, 1), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P);
function bc(e, t, r) {
  R(2, arguments);
  var a = F(e), n = re(t), i = _n(a, r) - n;
  return a.setUTCDate(a.getUTCDate() - i * 7), a;
}
var kc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 100), h(m(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "w":
          return G(V.week, n);
        case "wo":
          return s.ordinalNumber(n, {
            unit: "week"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(n, i, s, o) {
      return Be(bc(n, s, o), o);
    }
  }]), r;
}(P);
function Dc(e, t) {
  R(2, arguments);
  var r = F(e), a = re(t), n = gn(r) - a;
  return r.setUTCDate(r.getUTCDate() - n * 7), r;
}
var Tc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 100), h(m(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "I":
          return G(V.week, n);
        case "Io":
          return s.ordinalNumber(n, {
            unit: "week"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return at(Dc(n, s));
    }
  }]), r;
}(P), Mc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Oc = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], xc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 90), h(m(a), "subPriority", 1), h(m(a), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "d":
          return G(V.date, n);
        case "do":
          return s.ordinalNumber(n, {
            unit: "date"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      var s = n.getUTCFullYear(), o = Sn(s), u = n.getUTCMonth();
      return o ? i >= 1 && i <= Oc[u] : i >= 1 && i <= Mc[u];
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCDate(s), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), Yc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 90), h(m(a), "subpriority", 1), h(m(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "D":
        case "DD":
          return G(V.dayOfYear, n);
        case "Do":
          return s.ordinalNumber(n, {
            unit: "date"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      var s = n.getUTCFullYear(), o = Sn(s);
      return o ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCMonth(0, s), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P);
function Vr(e, t, r) {
  var a, n, i, s, o, u, l, c;
  R(2, arguments);
  var y = ot(), g = re((a = (n = (i = (s = r == null ? void 0 : r.weekStartsOn) !== null && s !== void 0 ? s : r == null || (o = r.locale) === null || o === void 0 || (u = o.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && i !== void 0 ? i : y.weekStartsOn) !== null && n !== void 0 ? n : (l = y.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var p = F(e), W = re(t), S = p.getUTCDay(), A = W % 7, K = (A + 7) % 7, B = (K < g ? 7 : 0) + W - S;
  return p.setUTCDate(p.getUTCDate() + B), p;
}
var Pc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 90), h(m(a), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "E":
        case "EE":
        case "EEE":
          return s.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return s.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return s.day(n, {
            width: "wide",
            context: "formatting"
          }) || s.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(n, i, s, o) {
      return n = Vr(n, s, o), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), Sc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 90), h(m(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s, o) {
      var u = function(c) {
        var y = Math.floor((c - 1) / 7) * 7;
        return (c + o.weekStartsOn + 6) % 7 + y;
      };
      switch (i) {
        case "e":
        case "ee":
          return Q(q(i.length, n), u);
        case "eo":
          return Q(s.ordinalNumber(n, {
            unit: "day"
          }), u);
        case "eee":
          return s.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return s.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return s.day(n, {
            width: "wide",
            context: "formatting"
          }) || s.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(n, i, s, o) {
      return n = Vr(n, s, o), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), Cc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 90), h(m(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s, o) {
      var u = function(c) {
        var y = Math.floor((c - 1) / 7) * 7;
        return (c + o.weekStartsOn + 6) % 7 + y;
      };
      switch (i) {
        case "c":
        case "cc":
          return Q(q(i.length, n), u);
        case "co":
          return Q(s.ordinalNumber(n, {
            unit: "day"
          }), u);
        case "ccc":
          return s.day(n, {
            width: "abbreviated",
            context: "standalone"
          }) || s.day(n, {
            width: "short",
            context: "standalone"
          }) || s.day(n, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return s.day(n, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return s.day(n, {
            width: "short",
            context: "standalone"
          }) || s.day(n, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return s.day(n, {
            width: "wide",
            context: "standalone"
          }) || s.day(n, {
            width: "abbreviated",
            context: "standalone"
          }) || s.day(n, {
            width: "short",
            context: "standalone"
          }) || s.day(n, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(n, i, s, o) {
      return n = Vr(n, s, o), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P);
function Nc(e, t) {
  R(2, arguments);
  var r = re(t);
  r % 7 === 0 && (r = r - 7);
  var a = 1, n = F(e), i = n.getUTCDay(), s = r % 7, o = (s + 7) % 7, u = (o < a ? 7 : 0) + r - i;
  return n.setUTCDate(n.getUTCDate() + u), n;
}
var Wc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 90), h(m(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      var o = function(l) {
        return l === 0 ? 7 : l;
      };
      switch (i) {
        case "i":
        case "ii":
          return q(i.length, n);
        case "io":
          return s.ordinalNumber(n, {
            unit: "day"
          });
        case "iii":
          return Q(s.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          }), o);
        case "iiiii":
          return Q(s.day(n, {
            width: "narrow",
            context: "formatting"
          }), o);
        case "iiiiii":
          return Q(s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          }), o);
        case "iiii":
        default:
          return Q(s.day(n, {
            width: "wide",
            context: "formatting"
          }) || s.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.day(n, {
            width: "short",
            context: "formatting"
          }) || s.day(n, {
            width: "narrow",
            context: "formatting"
          }), o);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 1 && i <= 7;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n = Nc(n, s), n.setUTCHours(0, 0, 0, 0), n;
    }
  }]), r;
}(P), Uc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 80), h(m(a), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "a":
        case "aa":
        case "aaa":
          return s.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return s.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCHours($r(s), 0, 0, 0), n;
    }
  }]), r;
}(P), Ec = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 80), h(m(a), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "b":
        case "bb":
        case "bbb":
          return s.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return s.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCHours($r(s), 0, 0, 0), n;
    }
  }]), r;
}(P), Rc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 80), h(m(a), "incompatibleTokens", ["a", "b", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "B":
        case "BB":
        case "BBB":
          return s.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return s.dayPeriod(n, {
            width: "wide",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "abbreviated",
            context: "formatting"
          }) || s.dayPeriod(n, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCHours($r(s), 0, 0, 0), n;
    }
  }]), r;
}(P), Fc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 70), h(m(a), "incompatibleTokens", ["H", "K", "k", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "h":
          return G(V.hour12h, n);
        case "ho":
          return s.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 1 && i <= 12;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      var o = n.getUTCHours() >= 12;
      return o && s < 12 ? n.setUTCHours(s + 12, 0, 0, 0) : !o && s === 12 ? n.setUTCHours(0, 0, 0, 0) : n.setUTCHours(s, 0, 0, 0), n;
    }
  }]), r;
}(P), Hc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 70), h(m(a), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "H":
          return G(V.hour23h, n);
        case "Ho":
          return s.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 23;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCHours(s, 0, 0, 0), n;
    }
  }]), r;
}(P), Ic = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 70), h(m(a), "incompatibleTokens", ["h", "H", "k", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "K":
          return G(V.hour11h, n);
        case "Ko":
          return s.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      var o = n.getUTCHours() >= 12;
      return o && s < 12 ? n.setUTCHours(s + 12, 0, 0, 0) : n.setUTCHours(s, 0, 0, 0), n;
    }
  }]), r;
}(P), Lc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 70), h(m(a), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "k":
          return G(V.hour24h, n);
        case "ko":
          return s.ordinalNumber(n, {
            unit: "hour"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 1 && i <= 24;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      var o = s <= 24 ? s % 24 : s;
      return n.setUTCHours(o, 0, 0, 0), n;
    }
  }]), r;
}(P), Ac = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 60), h(m(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "m":
          return G(V.minute, n);
        case "mo":
          return s.ordinalNumber(n, {
            unit: "minute"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCMinutes(s, 0, 0), n;
    }
  }]), r;
}(P), jc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 50), h(m(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i, s) {
      switch (i) {
        case "s":
          return G(V.second, n);
        case "so":
          return s.ordinalNumber(n, {
            unit: "second"
          });
        default:
          return q(i.length, n);
      }
    }
  }, {
    key: "validate",
    value: function(n, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCSeconds(s, 0), n;
    }
  }]), r;
}(P), Gc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 30), h(m(a), "incompatibleTokens", ["t", "T"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i) {
      var s = function(u) {
        return Math.floor(u * Math.pow(10, -i.length + 3));
      };
      return Q(q(i.length, n), s);
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return n.setUTCMilliseconds(s), n;
    }
  }]), r;
}(P), qc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 10), h(m(a), "incompatibleTokens", ["t", "T", "x"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i) {
      switch (i) {
        case "X":
          return pe(we.basicOptionalMinutes, n);
        case "XX":
          return pe(we.basic, n);
        case "XXXX":
          return pe(we.basicOptionalSeconds, n);
        case "XXXXX":
          return pe(we.extendedOptionalSeconds, n);
        case "XXX":
        default:
          return pe(we.extended, n);
      }
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return i.timestampIsSet ? n : new Date(n.getTime() - s);
    }
  }]), r;
}(P), $c = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 10), h(m(a), "incompatibleTokens", ["t", "T", "X"]), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n, i) {
      switch (i) {
        case "x":
          return pe(we.basicOptionalMinutes, n);
        case "xx":
          return pe(we.basic, n);
        case "xxxx":
          return pe(we.basicOptionalSeconds, n);
        case "xxxxx":
          return pe(we.extendedOptionalSeconds, n);
        case "xxx":
        default:
          return pe(we.extended, n);
      }
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return i.timestampIsSet ? n : new Date(n.getTime() - s);
    }
  }]), r;
}(P), Vc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 40), h(m(a), "incompatibleTokens", "*"), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n) {
      return Yn(n);
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return [new Date(s * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(P), Qc = /* @__PURE__ */ function(e) {
  M(r, e);
  var t = O(r);
  function r() {
    var a;
    k(this, r);
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return a = t.call.apply(t, [this].concat(i)), h(m(a), "priority", 20), h(m(a), "incompatibleTokens", "*"), a;
  }
  return D(r, [{
    key: "parse",
    value: function(n) {
      return Yn(n);
    }
  }, {
    key: "set",
    value: function(n, i, s) {
      return [new Date(s), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(P), Bc = {
  G: new fc(),
  y: new hc(),
  Y: new mc(),
  R: new vc(),
  u: new yc(),
  Q: new wc(),
  q: new pc(),
  M: new gc(),
  L: new _c(),
  w: new kc(),
  I: new Tc(),
  d: new xc(),
  D: new Yc(),
  E: new Pc(),
  e: new Sc(),
  c: new Cc(),
  i: new Wc(),
  a: new Uc(),
  b: new Ec(),
  B: new Rc(),
  h: new Fc(),
  H: new Hc(),
  K: new Ic(),
  k: new Lc(),
  m: new Ac(),
  s: new jc(),
  S: new Gc(),
  X: new qc(),
  x: new $c(),
  t: new Vc(),
  T: new Qc()
}, zc = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Zc = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xc = /^'([^]*?)'?$/, Jc = /''/g, Kc = /\S/, ed = /[a-zA-Z]/;
function td(e, t, r, a) {
  var n, i, s, o, u, l, c, y, g, p, W, S, A, K;
  R(3, arguments);
  var B = String(e), U = String(t), z = ot(), de = (n = (i = void 0) !== null && i !== void 0 ? i : z.locale) !== null && n !== void 0 ? n : Tn;
  if (!de.match)
    throw new RangeError("locale must contain match property");
  var se = re((s = (o = (u = (l = void 0) !== null && l !== void 0 ? l : void 0) !== null && u !== void 0 ? u : z.firstWeekContainsDate) !== null && o !== void 0 ? o : (c = z.locale) === null || c === void 0 || (y = c.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && s !== void 0 ? s : 1);
  if (!(se >= 1 && se <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Ie = re((g = (p = (W = (S = void 0) !== null && S !== void 0 ? S : void 0) !== null && W !== void 0 ? W : z.weekStartsOn) !== null && p !== void 0 ? p : (A = z.locale) === null || A === void 0 || (K = A.options) === null || K === void 0 ? void 0 : K.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!(Ie >= 0 && Ie <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (U === "")
    return B === "" ? F(r) : /* @__PURE__ */ new Date(NaN);
  var Le = {
    firstWeekContainsDate: se,
    weekStartsOn: Ie,
    locale: de
  }, Ae = [new dc()], nr = U.match(Zc).map(function(X) {
    var E = X[0];
    if (E in gr) {
      var oe = gr[E];
      return oe(X, de.formatLong);
    }
    return X;
  }).join("").match(zc), J = [], ne = fa(nr), je;
  try {
    var Rn = function() {
      var E = je.value;
      !(a != null && a.useAdditionalWeekYearTokens) && Dn(E) && qt(E, U, e), !(a != null && a.useAdditionalDayOfYearTokens) && kn(E) && qt(E, U, e);
      var oe = E[0], Nt = Bc[oe];
      if (Nt) {
        var Jr = Nt.incompatibleTokens;
        if (Array.isArray(Jr)) {
          var Kr = J.find(function(ea) {
            return Jr.includes(ea.token) || ea.token === oe;
          });
          if (Kr)
            throw new RangeError("The format string mustn't contain `".concat(Kr.fullToken, "` and `").concat(E, "` at the same time"));
        } else if (Nt.incompatibleTokens === "*" && J.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(E, "` and any other token at the same time"));
        J.push({
          token: oe,
          fullToken: E
        });
        var sr = Nt.run(B, E, de.match, Le);
        if (!sr)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        Ae.push(sr.setter), B = sr.rest;
      } else {
        if (oe.match(ed))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + oe + "`");
        if (E === "''" ? E = "'" : oe === "'" && (E = rd(E)), B.indexOf(E) === 0)
          B = B.slice(E.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (ne.s(); !(je = ne.n()).done; ) {
      var Br = Rn();
      if (Pe(Br) === "object") return Br.v;
    }
  } catch (X) {
    ne.e(X);
  } finally {
    ne.f();
  }
  if (B.length > 0 && Kc.test(B))
    return /* @__PURE__ */ new Date(NaN);
  var Fn = Ae.map(function(X) {
    return X.priority;
  }).sort(function(X, E) {
    return E - X;
  }).filter(function(X, E, oe) {
    return oe.indexOf(X) === E;
  }).map(function(X) {
    return Ae.filter(function(E) {
      return E.priority === X;
    }).sort(function(E, oe) {
      return oe.subPriority - E.subPriority;
    });
  }).map(function(X) {
    return X[0];
  }), ir = F(r);
  if (isNaN(ir.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var lt = wn(ir, mn(ir)), zr = {}, St = fa(Fn), Zr;
  try {
    for (St.s(); !(Zr = St.n()).done; ) {
      var Xr = Zr.value;
      if (!Xr.validate(lt, Le))
        return /* @__PURE__ */ new Date(NaN);
      var Ct = Xr.set(lt, zr, Le);
      Array.isArray(Ct) ? (lt = Ct[0], ac(zr, Ct[1])) : lt = Ct;
    }
  } catch (X) {
    St.e(X);
  } finally {
    St.f();
  }
  return lt;
}
function rd(e) {
  return e.match(Xc)[1].replace(Jc, "'");
}
function ad() {
  return vn(Date.now());
}
function ha(e, t) {
  if (e in t) {
    const r = t[e];
    return typeof r == "function" ? r(e) : r;
  }
  throw new Error("Invalid match value");
}
function vt(e, t) {
  return (e % t + t) % t;
}
const nd = (e, { type: t, payload: r }) => {
  switch (t) {
    case "action":
      return ma(e, r);
    case "registerPicker":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [r.id]: {
            nestedLevel: r.nestedLevel,
            defaultType: r.defaultType,
            type: r.defaultType,
            attach: void 0,
            isOpen: r.defaultOpen,
            alwaysOpen: r.alwaysOpen
          }
        }
      };
    case "unregisterPicker": {
      const { [r]: a, ...n } = e.pickers;
      return { ...e, pickers: n };
    }
    case "select": {
      const a = r.action ? ma(e, {
        action: r.action,
        pickerId: r.pickerId
      }) : { ...e };
      let n = null;
      switch (r.item.type) {
        case "day": {
          n = new Date(r.item.value), n.setHours(e.hour, e.minute);
          break;
        }
        case "month": {
          a.month = r.item.value;
          break;
        }
        case "year": {
          a.year = r.item.value;
          break;
        }
        case "hour": {
          n = e.valueRef.current ? new Date(e.valueRef.current) : /* @__PURE__ */ new Date(), n.setHours(r.item.value), a.hour = r.item.value;
          break;
        }
        case "minute": {
          n = e.valueRef.current ? new Date(e.valueRef.current) : /* @__PURE__ */ new Date(), n.setMinutes(r.item.value), a.minute = r.item.value;
          break;
        }
        default:
          return e;
      }
      return n && a.onChange(n), a;
    }
    case "defaultChanged":
      return {
        ...e,
        ...r
      };
    case "externalValueChanged": {
      const a = e.config.toDateParts(r);
      return {
        ...e,
        year: a.year,
        month: a.month,
        hour: r.getHours(),
        minute: r.getMinutes()
      };
    }
    default:
      throw new Error("Invalid action " + t);
  }
};
function ma(e, t) {
  let r = t.action, a = "";
  const n = t.action.match(
    /^(open|close|next|prev|showYear|showMonth|showDay|toggleYear|toggleMonth|toggleDay|toggle)(.*)$/
  );
  if (n && (r = n[1], a = n[2], a === "" && (a = t.pickerId || Object.keys(e.pickers).reverse()[0], a === void 0)))
    throw new Error("There is no Picker in the current Provider");
  switch (r) {
    case "open":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            attach: t.ref,
            isOpen: !0
          }
        }
      };
    case "close":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            isOpen: !1,
            type: e.pickers[a].defaultType
          }
        }
      };
    case "toggle":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            attach: t.ref,
            isOpen: !e.pickers[a].isOpen,
            type: e.pickers[a].defaultType
          }
        }
      };
    case "next": {
      if (!e.pickers[a].type)
        return e;
      const { month: i, year: s } = e;
      return ha(e.pickers[a].type, {
        hour: () => e,
        minute: () => e,
        day: () => ({
          ...e,
          year: i === 12 ? s + 1 : s,
          month: i % 12 + 1
        }),
        month: () => ({
          ...e,
          year: s + 1,
          month: i
        }),
        year: () => ({
          ...e,
          year: s + 1,
          month: i
        })
      });
    }
    case "prev": {
      if (!e.pickers[a].type)
        return e;
      const { month: i, year: s } = e;
      return ha(e.pickers[a].type, {
        hour: () => e,
        minute: () => e,
        day: () => ({
          ...e,
          year: i === 1 ? s - 1 : s,
          month: vt(i - 2, 12) + 1
        }),
        month: () => ({
          ...e,
          year: s - 1,
          month: i
        }),
        year: () => ({
          ...e,
          year: s - 1,
          month: i
        })
      });
    }
    case "showYear":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            type: "year"
          }
        }
      };
    case "toggleYear":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            type: e.pickers[a].type === "year" ? e.pickers[a].defaultType : "year"
          }
        }
      };
    case "showMonth":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            type: "month"
          }
        }
      };
    case "toggleMonth":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            type: e.pickers[a].type === "month" ? e.pickers[a].defaultType : "month"
          }
        }
      };
    case "showDay":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            type: "day"
          }
        }
      };
    case "toggleDay":
      return {
        ...e,
        pickers: {
          ...e.pickers,
          [a]: {
            ...e.pickers[a],
            type: e.pickers[a].type === "day" ? e.pickers[a].defaultType : "day"
          }
        }
      };
    case "today": {
      const i = /* @__PURE__ */ new Date();
      i.setHours(e.hour, e.minute), e.onChange(i);
      const s = e.config.toDateParts(i);
      return {
        ...e,
        year: s.year,
        month: s.month
      };
    }
    case "todayHour": {
      const i = /* @__PURE__ */ new Date();
      e.onChange(i);
      const s = e.config.toDateParts(i);
      return {
        ...e,
        year: s.year,
        month: s.month
      };
    }
    default:
      throw new Error("Invalid action " + t.action);
  }
}
const Cn = wa(null);
function id() {
  const e = Dt(Cn);
  if (!e)
    throw new Error("You need to use component inside Datepicker");
  return e;
}
function Yt() {
  const e = id();
  return {
    ...e,
    slot: Nn(e.state)
  };
}
function Nn(e) {
  return {
    pickers: e.pickers,
    disabled: e.disabled,
    value: e.valueRef.current,
    month: e.month,
    monthName: e.config.monthNames[e.month - 1],
    year: e.year,
    hour: e.hour,
    minute: e.minute
  };
}
const Qr = (e, t) => {
  Fe(() => {
    t && (typeof t == "function" ? t(e.current) : t.current = e.current);
  });
};
function va(...e) {
  return e.filter(Boolean).join(" ");
}
function ut(e, t, r = {}, a, n, i = {}) {
  if ((i == null ? void 0 : i.visible) === !1 && i.hideOnClose !== !0)
    return null;
  const { as: s, children: o, ...u } = ya(t, e), l = s || a, c = typeof o == "function" ? o(r) : o;
  if (typeof u.className == "function" && (u.className = u.className(r)), l === ga && Object.keys(u).length > 0) {
    if (!jn(c) || Array.isArray(c) && c.length > 1)
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          'The current component is rendering a "Fragment".',
          "However we need to passthrough the following props:",
          Object.keys(u).map((S) => `  - ${S}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element."
          ].map((S) => `  - ${S}`).join(`
`)
        ].join(`
`)
      );
    const { childClassName: y, ...g } = c.props, p = typeof y == "function" ? (...S) => va(y(...S), u.className) : va(y, u.className), W = p ? { className: p, ref: n } : { ref: n };
    return Gn(
      c,
      Object.assign(
        {},
        // Filter out undefined values so that they don't override the existing values
        ya(g, u),
        W
      )
    );
  }
  return qn(l, { ...u, ref: n }, c);
}
function ya(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  const t = {}, r = {};
  for (const a of e)
    for (const n in a)
      n.startsWith("on") && typeof a[n] == "function" ? (r[n] ?? (r[n] = []), r[n].push(a[n])) : t[n] = a[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      // Set all event listeners that we collected to `undefined`. This is
      // important because of the `cloneElement` from above, which merges the
      // existing and new props, they don't just override therefore we have to
      // explicitly nullify them.
      Object.fromEntries(
        Object.keys(r).map((a) => [a, void 0])
      )
    );
  for (const a in r)
    Object.assign(t, {
      [a](n, ...i) {
        const s = r[a];
        for (const o of s) {
          if ((n instanceof Event || (n == null ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented)
            return;
          o(n, ...i);
        }
      }
    });
  return t;
}
function Pt(e) {
  return pa(e);
}
const Wn = typeof window < "u" ? ba : Fe;
function sd(e, t, r, a) {
  const n = Qe(t);
  Wn(() => {
    n.current = t;
  }, [t]), Fe(() => {
    const i = window;
    if (!(i && i.addEventListener))
      return;
    const s = (o) => n.current(o);
    return i.addEventListener(e, s, a), () => {
      i.removeEventListener(e, s, a);
    };
  }, [e, r, a]);
}
function od(e, t) {
  sd("mousedown", (r) => {
    (Array.isArray(e) ? e : [e]).some((a) => {
      if (a === void 0)
        return !1;
      const n = a == null ? void 0 : a.current;
      if (!n || n.contains(r.target))
        return !0;
    }) || t(r);
  });
}
const ud = "div", ld = [
  zn(10),
  Zn({ fallbackAxisSideDirection: "end", crossAxis: !1 }),
  Xn()
], kt = wa({ nestedLevel: 0 }), cd = Pt(
  ({
    alwaysOpen: e,
    hideOnClose: t,
    middleware: r = ld,
    attachTo: a,
    style: n,
    defaultType: i,
    defaultOpen: s = !1,
    disableClickOutside: o = !1,
    id: u,
    ...l
  }, c) => {
    const { nestedLevel: y } = Dt(kt), g = $n(), p = u || g, { state: W, slot: S, dispatch: A } = Yt(), K = Qe(i), B = Qe(s);
    Fe(() => (A({
      type: "registerPicker",
      payload: {
        id: p,
        nestedLevel: y + 1,
        defaultType: K.current,
        defaultOpen: B.current,
        alwaysOpen: e
      }
    }), () => A({ type: "unregisterPicker", payload: p })), [A, p, y, e]);
    const U = W.pickers[p], z = a === !1 ? void 0 : a !== void 0 ? a : e || U == null ? void 0 : U.attach, de = e || (U == null ? void 0 : U.isOpen) || !1, { refs: se, floatingStyles: Ie } = Qn({
      open: de,
      elements: {
        reference: z ? z.current : null
      },
      middleware: r,
      whileElementsMounted: Bn
    });
    Qr(se.floating, c);
    const Le = () => {
      o !== !0 && U != null && U.isOpen && A({
        type: "action",
        payload: { action: `close${p}` }
      });
    };
    od([se.floating, z], Le);
    const Ae = {
      style: {
        ...n,
        ...z != null && z.current ? Ie : {}
      }
    };
    return /* @__PURE__ */ j(
      kt.Provider,
      {
        value: br(
          () => ({
            nestedLevel: y + 1,
            id: p,
            defaultType: K.current
          }),
          [y, p]
        ),
        children: ut(Ae, l, S, ud, se.setFloating, {
          visible: de,
          hideOnClose: t
        })
      }
    );
  }
), dd = "button", fd = Pt(
  ({ action: e, ...t }, r) => {
    const { id: a } = Dt(kt), n = Qe(null);
    Qr(n, r);
    const { slot: i, dispatch: s } = Yt();
    return ut({
      onClick: () => s({
        type: "action",
        payload: { action: e, ref: n, pickerId: a }
      })
    }, t, i, dd, n);
  }
);
function Un() {
  const [e] = _a(hd);
  return Fe(() => () => e.dispose(), [e]), e;
}
function hd() {
  const e = [], t = {
    addEventListener(r, a, n, i) {
      return r.addEventListener(a, n, i), t.add(
        () => r.removeEventListener(a, n, i)
      );
    },
    requestAnimationFrame(...r) {
      const a = requestAnimationFrame(...r);
      return t.add(() => cancelAnimationFrame(a));
    },
    nextFrame(...r) {
      return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
    },
    add(r) {
      return e.push(r), () => {
        const a = e.indexOf(r);
        if (a >= 0)
          for (const n of e.splice(a, 1))
            n();
      };
    },
    dispose() {
      for (const r of e.splice(0))
        r();
    }
  };
  return t;
}
const Ht = function(e) {
  const t = Qe(e);
  return Wn(() => {
    t.current = e;
  }, [e]), Ln.useCallback((...r) => t.current(...r), [t]);
}, md = "input", vd = Pt(
  ({
    format: e = "yyyy/MM/dd",
    parse: t,
    type: r,
    ...a
  }, n) => {
    const i = Qe(null);
    Qr(i, n);
    const { state: s, slot: o, dispatch: u } = Yt(), l = Vn(
      (U) => typeof e == "function" ? e(U) : s.config.format(U, e),
      [e, s.config]
    ), [c, y] = _a(
      void 0
    ), g = br(
      () => l(o.value),
      [o.value, l]
    ), p = Un(), W = Ht(
      () => p.nextFrame(
        () => u({
          type: "action",
          payload: { action: "open", ref: i }
        })
      )
    ), S = Ht((U) => y(U.target.value)), A = Ht((U) => {
      let z = null;
      if (U.target.value)
        try {
          z = typeof e == "function" ? t(U.target.value, o.value) : s.config.parse(U.target.value, e, o.value);
        } catch {
        }
      z !== null && yn(z) && s.onChange(z), p.nextFrame(() => y(void 0));
    }), K = typeof e == "function" && typeof t != "function", B = {
      type: r || "text",
      readOnly: K,
      disabled: s.disabled,
      value: c !== void 0 ? c : g,
      onFocus: W,
      onChange: K ? void 0 : S,
      onBlur: K ? void 0 : A
    };
    return ut(B, a, o, md, i);
  }
), yd = "button", En = "data-calendar-item-id", wd = Pt(
  ({ item: e, action: t, ...r }, a) => {
    const { id: n } = Dt(kt), { state: i, slot: s, dispatch: o } = Yt(), u = {
      [En]: e.type + "-" + e.text,
      onClick: "isHeader" in e && e.isHeader || i.disabled ? void 0 : () => {
        o({
          type: "select",
          payload: { item: e, pickerId: n, action: t }
        });
      }
    };
    return ut(u, r, s, yd, a);
  }
);
function pd(e, t, r) {
  ba(() => {
    if (e && r && t) {
      const a = document.querySelector(
        `[${En}="${t}-${r}"]`
      );
      a && a.scrollIntoView({ block: "nearest" });
    }
  }, [t, r, e]);
}
const gd = "div", _d = Pt(
  ({
    type: e,
    disableAutoScroll: t,
    ...r
  }, a) => {
    const { id: n, defaultType: i } = Dt(kt), { state: s } = Yt(), o = n ? s.pickers[n] : void 0, u = e || (o == null ? void 0 : o.type) || i;
    if (u === void 0)
      throw new Error(
        "No type provided, You need either need set the type to Items or set the defaultType to Picker component"
      );
    const l = s.valueRef.current, c = br(
      () => u === "hour" || u === "minute" ? s.config[u + "s"]({
        type: u,
        hour: s.hour,
        minute: s.minute
      }) : s.config[u + "s"]({
        type: u,
        year: s.year,
        month: s.month,
        value: l,
        startOfWeek: s.startOfWeek
      }),
      [
        u,
        l,
        s.config,
        s.month,
        s.year,
        s.hour,
        s.minute,
        s.startOfWeek
      ]
    );
    return pd(
      t !== !0 && o !== void 0 && (o.alwaysOpen === !0 || o.isOpen) && ["year", "hour", "minute"].includes(u),
      u,
      u !== "day" ? s[u] : void 0
    ), ut(
      {},
      r,
      {
        items: c,
        type: u,
        ...s
      },
      gd,
      a
    );
  }
), yt = {
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  format: (e, t) => e ? tc(e, t) : "",
  parse: (e, t, r) => td(e, t, r || /* @__PURE__ */ new Date()),
  toDateParts: (e) => new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).formatToParts(e).reduce((t, r) => (r.type !== "literal" && (t[r.type] = +r.value), t), {}),
  years: ({ type: e, year: t }) => {
    const r = (/* @__PURE__ */ new Date()).getFullYear();
    return [...Array(200).keys()].map((a) => ({
      type: e,
      key: e + a,
      isToday: r === a + 1900,
      isSelected: t === a + 1900,
      isHeader: !1,
      disabled: !1,
      value: a + 1900,
      text: a + 1900 + ""
    }));
  },
  months: ({ type: e, month: t }) => {
    const r = (/* @__PURE__ */ new Date()).getMonth();
    return [...yt.monthNames.keys()].map((a) => ({
      type: e,
      key: e + a,
      isToday: r === a,
      isSelected: t === a + 1,
      isHeader: !1,
      disabled: !1,
      value: a + 1,
      text: yt.monthNames[a]
    }));
  },
  days: ({ type: e, month: t, startOfWeek: r, year: a, value: n }) => {
    const i = new Date(a, t - 1, 1), s = ol(i), o = il(i), u = vt(r - 1, 7), l = ad().getTime(), c = n ? vn(n).getTime() : 0;
    return yt.dayNames.map((y, g) => {
      const p = vt(r + g, 7);
      return {
        type: e,
        key: "weekday" + p,
        isToday: !1,
        isSelected: !1,
        isHeader: !0,
        disabled: !1,
        value: g,
        text: yt.dayNames[p]
      };
    }).concat(
      sl({
        start: oa(s, -vt(s.getDay() - r, 7)),
        end: oa(o, vt(u - o.getDay(), 7))
      }).map((y) => ({
        type: e,
        key: y.toString(),
        isToday: l === y.getTime(),
        isSelected: c === y.getTime(),
        isHeader: !1,
        disabled: y < s || y > o,
        value: y,
        text: y.getDate() + ""
      }))
    );
  },
  hours: ({ type: e, hour: t }) => [...Array(24).keys()].map((r) => ({
    type: e,
    key: r,
    value: r,
    text: r + "",
    isToday: !1,
    isSelected: t === r,
    isHeader: !1,
    disabled: !1
  })),
  minutes: ({ type: e, minute: t }) => [...Array(60).keys()].map((r) => ({
    type: e,
    key: r,
    value: r,
    text: r + "",
    isToday: !1,
    isSelected: t === r,
    isHeader: !1,
    disabled: !1
  }))
}, bd = ga, kd = pa(
  ({
    defaultValue: e,
    value: t,
    onChange: r,
    disabledKeyboardNavigation: a,
    disabled: n = !1,
    config: i = yt,
    startOfWeek: s = 0,
    ...o
  }, u) => {
    const l = Qe(t || e || null), c = Un(), y = Ht((S) => {
      Dd(l.current, S) || c.nextFrame(() => {
        l.current = S, r == null || r(l.current), p({
          type: "externalValueChanged",
          payload: S || /* @__PURE__ */ new Date()
        });
      });
    }), [g, p] = An(nd, null, () => {
      const S = l.current || /* @__PURE__ */ new Date(), A = i.toDateParts(S);
      return {
        config: i,
        disabled: n,
        year: A.year,
        month: A.month,
        hour: S.getHours(),
        minute: S.getMinutes(),
        calendarOpen: !1,
        hourOpen: !1,
        valueRef: l,
        startOfWeek: s,
        onChange: y,
        pickers: {}
      };
    });
    Fe(() => {
      y(t || null);
    }, [t, y]), Fe(() => {
      p({ type: "defaultChanged", payload: { startOfWeek: s } });
    }, [s]), Fe(() => {
      p({ type: "defaultChanged", payload: { disabled: n } });
    }, [n]);
    const W = {};
    return /* @__PURE__ */ j(Cn.Provider, { value: { state: g, dispatch: p }, children: ut(W, o, Nn(g), bd, u) });
  }
);
function Dd(e, t) {
  return e === t || e !== null && t !== null && nc(e, t);
}
const ee = Object.assign(kd, {
  Picker: cd,
  Input: vd,
  Button: fd,
  Items: _d,
  Item: wd
}), Pd = ({
  name: e,
  value: t,
  showTime: r,
  onChange: a,
  readOnly: n
}) => /* @__PURE__ */ Ne(ct, { children: [
  /* @__PURE__ */ j(
    "input",
    {
      className: We(
        "w-full bg-white ",
        r === !0 ? "!hidden" : "md:hidden"
      ),
      type: r === !0 ? "datetime-local" : "date",
      value: f(new Date(t * 1e3)).format(
        r === !0 ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD"
      ),
      onChange: (i) => a(Math.round(new Date(i.target.value).getTime() / 1e3))
    }
  ),
  /* @__PURE__ */ j("div", { className: We(r === !0 ? "" : "hidden md:flex"), children: /* @__PURE__ */ Ne(
    ee,
    {
      disabledKeyboardNavigation: !0,
      value: t ? new Date(t * 1e3) : /* @__PURE__ */ new Date(),
      onChange: (i) => a(Math.round(i.getTime() / 1e3)),
      children: [
        /* @__PURE__ */ j(
          ee.Input,
          {
            name: e,
            value: new Date(t * 1e3).getTime() / 1e3 || "",
            format: r === !0 ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd",
            id: e
          }
        ),
        /* @__PURE__ */ j(
          ee.Picker,
          {
            id: "Picker-Date",
            defaultType: "day",
            className: "xs:max-w-[320px] z-50 rounded-md border border-gray-300 bg-white p-2 md:p-4 shadow-2xl",
            children: ({ year: i, monthName: s, hour: o, minute: u }) => /* @__PURE__ */ Ne("div", { className: "flex w-[320px] flex-col gap-2", children: [
              /* @__PURE__ */ Ne("div", { className: "flex w-full justify-between", children: [
                /* @__PURE__ */ Ne("div", { className: "flex gap-1 text-2xl font-bold text-black", children: [
                  /* @__PURE__ */ j(ee.Button, { action: "toggleMonth", children: s }),
                  /* @__PURE__ */ j(ee.Button, { action: "toggleYear", children: i })
                ] }),
                /* @__PURE__ */ Ne("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ j(
                    ee.Button,
                    {
                      className: "rounded-md bg-gray-300 p-3 hover:bg-gray-400",
                      action: "prev",
                      children: /* @__PURE__ */ j(Hn, { size: 20 })
                    }
                  ),
                  /* @__PURE__ */ j(
                    ee.Button,
                    {
                      className: "rounded-md bg-gray-300 p-3 hover:bg-gray-400",
                      action: "next",
                      children: /* @__PURE__ */ j(In, { size: 20 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ j(
                ee.Items,
                {
                  className: ({ type: l }) => We(
                    "grid auto-rows-max gap-1 overflow-y-auto scroll-smooth",
                    l === "day" && "grid-cols-7",
                    l === "month" && "grid-cols-3",
                    l === "year" && "max-h-[300px] grid-cols-5",
                    l === "hour" && "grid-cols-2"
                  ),
                  children: ({ items: l }) => l.map((c) => /* @__PURE__ */ Ne(
                    ee.Item,
                    {
                      item: c,
                      disabled: c.isHeader || c.disabled || n === !0,
                      className: We(
                        "rounded-md p-2 ",
                        c.isToday && "border border-gray-800",
                        c.isSelected && "bg-blue-600 text-white",
                        !c.isHeader && !c.isSelected && "hover:bg-indigo-50"
                      ),
                      ...c.type === "day" && r === !1 && { action: "close" },
                      ...c.type === "minute" && r === !0 && { action: "close" },
                      ...c.type === "month" || c.type === "year" ? { action: "showDay" } : void 0,
                      children: [
                        c.type === "day" && /* @__PURE__ */ j(ct, { children: c.isHeader ? c.text.substring(0, 3) : c.text }),
                        c.type === "month" && /* @__PURE__ */ j(ct, { children: c.text.substring(0, 3) }),
                        c.type === "year" && /* @__PURE__ */ j(ct, { children: c.text }),
                        c.type === "hour" && /* @__PURE__ */ j(ct, { children: c.text })
                      ]
                    },
                    c.key
                  ))
                }
              ),
              /* @__PURE__ */ j(
                ee.Button,
                {
                  className: We(
                    "w-full rounded bg-blue-600 p-2 text-white relative",
                    "after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:rounded-l after:bg-gray-400 after:opacity-0",
                    //after:
                    "hover:after:w-full hover:after:transform hover:after:opacity-20 hover:after:transition-all hover:after:duration-300"
                    //hover:
                  ),
                  action: "todayHour",
                  children: "Today"
                }
              ),
              /* @__PURE__ */ j(
                ee.Button,
                {
                  action: "toggleHourPicker",
                  className: We(
                    "rounded-md p-1 text-2xl hover:bg-indigo-100",
                    r === !0 ? "" : "hidden"
                  ),
                  children: ("0" + o).slice(-2) + ":" + ("0" + u).slice(-2)
                }
              ),
              /* @__PURE__ */ Ne(
                ee.Picker,
                {
                  className: "flex max-h-56 rounded-md border border-gray-300 bg-white py-2 shadow-md",
                  id: "HourPicker",
                  children: [
                    /* @__PURE__ */ j(
                      ee.Items,
                      {
                        type: "hour",
                        className: "overflow-y-auto scroll-smooth px-4",
                        disableAutoScroll: !0,
                        children: ({ items: l }) => l.map((c) => /* @__PURE__ */ j(
                          ee.Item,
                          {
                            item: c,
                            action: "next",
                            className: We(
                              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ",
                              c.isSelected ? "bg-blue-600 text-white" : " hover:bg-indigo-50 "
                            ),
                            children: ("0" + c.text).slice(-2)
                          },
                          c.key
                        ))
                      }
                    ),
                    /* @__PURE__ */ j(
                      ee.Items,
                      {
                        type: "minute",
                        className: "overflow-y-auto scroll-smooth px-4",
                        disableAutoScroll: !0,
                        children: ({ items: l }) => l.map((c) => /* @__PURE__ */ j(
                          ee.Item,
                          {
                            item: c,
                            action: "closePicker-Date",
                            className: We(
                              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ",
                              c.isSelected ? "bg-gray-900 text-white" : " hover:bg-indigo-50 "
                            ),
                            children: ("0" + c.text).slice(-2)
                          },
                          c.key
                        ))
                      }
                    )
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  ) })
] });
export {
  Pd as default
};
