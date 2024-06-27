import { jsx as vT } from "react/jsx-runtime";
import * as be from "react";
import _0 from "react";
var Xr = {}, Am = { exports: {} }, x0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hT;
function kk() {
  return hT || (hT = 1, function(g) {
    function b(Z, _e) {
      var oe = Z.length;
      Z.push(_e);
      e: for (; 0 < oe; ) {
        var rt = oe - 1 >>> 1, ot = Z[rt];
        if (0 < U(ot, _e)) Z[rt] = _e, Z[oe] = ot, oe = rt;
        else break e;
      }
    }
    function C(Z) {
      return Z.length === 0 ? null : Z[0];
    }
    function F(Z) {
      if (Z.length === 0) return null;
      var _e = Z[0], oe = Z.pop();
      if (oe !== _e) {
        Z[0] = oe;
        e: for (var rt = 0, ot = Z.length, $n = ot >>> 1; rt < $n; ) {
          var or = 2 * (rt + 1) - 1, li = Z[or], Nn = or + 1, ui = Z[Nn];
          if (0 > U(li, oe)) Nn < ot && 0 > U(ui, li) ? (Z[rt] = ui, Z[Nn] = oe, rt = Nn) : (Z[rt] = li, Z[or] = oe, rt = or);
          else if (Nn < ot && 0 > U(ui, oe)) Z[rt] = ui, Z[Nn] = oe, rt = Nn;
          else break e;
        }
      }
      return _e;
    }
    function U(Z, _e) {
      var oe = Z.sortIndex - _e.sortIndex;
      return oe !== 0 ? oe : Z.id - _e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var I = performance;
      g.unstable_now = function() {
        return I.now();
      };
    } else {
      var y = Date, ne = y.now();
      g.unstable_now = function() {
        return y.now() - ne;
      };
    }
    var $ = [], V = [], Ee = 1, W = null, q = 3, re = !1, ge = !1, ke = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, Je = typeof clearTimeout == "function" ? clearTimeout : null, Ue = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ye(Z) {
      for (var _e = C(V); _e !== null; ) {
        if (_e.callback === null) F(V);
        else if (_e.startTime <= Z) F(V), _e.sortIndex = _e.expirationTime, b($, _e);
        else break;
        _e = C(V);
      }
    }
    function Ne(Z) {
      if (ke = !1, ye(Z), !ge) if (C($) !== null) ge = !0, bt(He);
      else {
        var _e = C(V);
        _e !== null && Rr(Ne, _e.startTime - Z);
      }
    }
    function He(Z, _e) {
      ge = !1, ke && (ke = !1, Je(Wt), Wt = -1), re = !0;
      var oe = q;
      try {
        for (ye(_e), W = C($); W !== null && (!(W.expirationTime > _e) || Z && !lt()); ) {
          var rt = W.callback;
          if (typeof rt == "function") {
            W.callback = null, q = W.priorityLevel;
            var ot = rt(W.expirationTime <= _e);
            _e = g.unstable_now(), typeof ot == "function" ? W.callback = ot : W === C($) && F($), ye(_e);
          } else F($);
          W = C($);
        }
        if (W !== null) var $n = !0;
        else {
          var or = C(V);
          or !== null && Rr(Ne, or.startTime - _e), $n = !1;
        }
        return $n;
      } finally {
        W = null, q = oe, re = !1;
      }
    }
    var dt = !1, Be = null, Wt = -1, _n = 5, Et = -1;
    function lt() {
      return !(g.unstable_now() - Et < _n);
    }
    function Pn() {
      if (Be !== null) {
        var Z = g.unstable_now();
        Et = Z;
        var _e = !0;
        try {
          _e = Be(!0, Z);
        } finally {
          _e ? We() : (dt = !1, Be = null);
        }
      } else dt = !1;
    }
    var We;
    if (typeof Ue == "function") We = function() {
      Ue(Pn);
    };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), Tr = ut.port2;
      ut.port1.onmessage = Pn, We = function() {
        Tr.postMessage(null);
      };
    } else We = function() {
      Ce(Pn, 0);
    };
    function bt(Z) {
      Be = Z, dt || (dt = !0, We());
    }
    function Rr(Z, _e) {
      Wt = Ce(function() {
        Z(g.unstable_now());
      }, _e);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(Z) {
      Z.callback = null;
    }, g.unstable_continueExecution = function() {
      ge || re || (ge = !0, bt(He));
    }, g.unstable_forceFrameRate = function(Z) {
      0 > Z || 125 < Z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _n = 0 < Z ? Math.floor(1e3 / Z) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, g.unstable_getFirstCallbackNode = function() {
      return C($);
    }, g.unstable_next = function(Z) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var _e = 3;
          break;
        default:
          _e = q;
      }
      var oe = q;
      q = _e;
      try {
        return Z();
      } finally {
        q = oe;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(Z, _e) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Z = 3;
      }
      var oe = q;
      q = Z;
      try {
        return _e();
      } finally {
        q = oe;
      }
    }, g.unstable_scheduleCallback = function(Z, _e, oe) {
      var rt = g.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? rt + oe : rt) : oe = rt, Z) {
        case 1:
          var ot = -1;
          break;
        case 2:
          ot = 250;
          break;
        case 5:
          ot = 1073741823;
          break;
        case 4:
          ot = 1e4;
          break;
        default:
          ot = 5e3;
      }
      return ot = oe + ot, Z = { id: Ee++, callback: _e, priorityLevel: Z, startTime: oe, expirationTime: ot, sortIndex: -1 }, oe > rt ? (Z.sortIndex = oe, b(V, Z), C($) === null && Z === C(V) && (ke ? (Je(Wt), Wt = -1) : ke = !0, Rr(Ne, oe - rt))) : (Z.sortIndex = ot, b($, Z), ge || re || (ge = !0, bt(He))), Z;
    }, g.unstable_shouldYield = lt, g.unstable_wrapCallback = function(Z) {
      var _e = q;
      return function() {
        var oe = q;
        q = _e;
        try {
          return Z.apply(this, arguments);
        } finally {
          q = oe;
        }
      };
    };
  }(x0)), x0;
}
var w0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mT;
function _k() {
  return mT || (mT = 1, function(g) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var b = !1, C = !1, F = 5;
      function U(ee, xe) {
        var $e = ee.length;
        ee.push(xe), ne(ee, xe, $e);
      }
      function I(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function y(ee) {
        if (ee.length === 0)
          return null;
        var xe = ee[0], $e = ee.pop();
        return $e !== xe && (ee[0] = $e, $(ee, $e, 0)), xe;
      }
      function ne(ee, xe, $e) {
        for (var pt = $e; pt > 0; ) {
          var At = pt - 1 >>> 1, Tn = ee[At];
          if (V(Tn, xe) > 0)
            ee[At] = xe, ee[pt] = Tn, pt = At;
          else
            return;
        }
      }
      function $(ee, xe, $e) {
        for (var pt = $e, At = ee.length, Tn = At >>> 1; pt < Tn; ) {
          var Gt = (pt + 1) * 2 - 1, Dr = ee[Gt], kt = Gt + 1, va = ee[kt];
          if (V(Dr, xe) < 0)
            kt < At && V(va, Dr) < 0 ? (ee[pt] = va, ee[kt] = xe, pt = kt) : (ee[pt] = Dr, ee[Gt] = xe, pt = Gt);
          else if (kt < At && V(va, xe) < 0)
            ee[pt] = va, ee[kt] = xe, pt = kt;
          else
            return;
        }
      }
      function V(ee, xe) {
        var $e = ee.sortIndex - xe.sortIndex;
        return $e !== 0 ? $e : ee.id - xe.id;
      }
      var Ee = 1, W = 2, q = 3, re = 4, ge = 5;
      function ke(ee, xe) {
      }
      var Ce = typeof performance == "object" && typeof performance.now == "function";
      if (Ce) {
        var Je = performance;
        g.unstable_now = function() {
          return Je.now();
        };
      } else {
        var Ue = Date, ye = Ue.now();
        g.unstable_now = function() {
          return Ue.now() - ye;
        };
      }
      var Ne = 1073741823, He = -1, dt = 250, Be = 5e3, Wt = 1e4, _n = Ne, Et = [], lt = [], Pn = 1, We = null, ut = q, Tr = !1, bt = !1, Rr = !1, Z = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function rt(ee) {
        for (var xe = I(lt); xe !== null; ) {
          if (xe.callback === null)
            y(lt);
          else if (xe.startTime <= ee)
            y(lt), xe.sortIndex = xe.expirationTime, U(Et, xe);
          else
            return;
          xe = I(lt);
        }
      }
      function ot(ee) {
        if (Rr = !1, rt(ee), !bt)
          if (I(Et) !== null)
            bt = !0, ci($n);
          else {
            var xe = I(lt);
            xe !== null && Qn(ot, xe.startTime - ee);
          }
      }
      function $n(ee, xe) {
        bt = !1, Rr && (Rr = !1, ea()), Tr = !0;
        var $e = ut;
        try {
          var pt;
          if (!C) return or(ee, xe);
        } finally {
          We = null, ut = $e, Tr = !1;
        }
      }
      function or(ee, xe) {
        var $e = xe;
        for (rt($e), We = I(Et); We !== null && !b && !(We.expirationTime > $e && (!ee || Nl())); ) {
          var pt = We.callback;
          if (typeof pt == "function") {
            We.callback = null, ut = We.priorityLevel;
            var At = We.expirationTime <= $e, Tn = pt(At);
            $e = g.unstable_now(), typeof Tn == "function" ? We.callback = Tn : We === I(Et) && y(Et), rt($e);
          } else
            y(Et);
          We = I(Et);
        }
        if (We !== null)
          return !0;
        var Gt = I(lt);
        return Gt !== null && Qn(ot, Gt.startTime - $e), !1;
      }
      function li(ee, xe) {
        switch (ee) {
          case Ee:
          case W:
          case q:
          case re:
          case ge:
            break;
          default:
            ee = q;
        }
        var $e = ut;
        ut = ee;
        try {
          return xe();
        } finally {
          ut = $e;
        }
      }
      function Nn(ee) {
        var xe;
        switch (ut) {
          case Ee:
          case W:
          case q:
            xe = q;
            break;
          default:
            xe = ut;
            break;
        }
        var $e = ut;
        ut = xe;
        try {
          return ee();
        } finally {
          ut = $e;
        }
      }
      function ui(ee) {
        var xe = ut;
        return function() {
          var $e = ut;
          ut = xe;
          try {
            return ee.apply(this, arguments);
          } finally {
            ut = $e;
          }
        };
      }
      function qr(ee, xe, $e) {
        var pt = g.unstable_now(), At;
        if (typeof $e == "object" && $e !== null) {
          var Tn = $e.delay;
          typeof Tn == "number" && Tn > 0 ? At = pt + Tn : At = pt;
        } else
          At = pt;
        var Gt;
        switch (ee) {
          case Ee:
            Gt = He;
            break;
          case W:
            Gt = dt;
            break;
          case ge:
            Gt = _n;
            break;
          case re:
            Gt = Wt;
            break;
          case q:
          default:
            Gt = Be;
            break;
        }
        var Dr = At + Gt, kt = {
          id: Pn++,
          callback: xe,
          priorityLevel: ee,
          startTime: At,
          expirationTime: Dr,
          sortIndex: -1
        };
        return At > pt ? (kt.sortIndex = At, U(lt, kt), I(Et) === null && kt === I(lt) && (Rr ? ea() : Rr = !0, Qn(ot, At - pt))) : (kt.sortIndex = Dr, U(Et, kt), !bt && !Tr && (bt = !0, ci($n))), kt;
      }
      function da() {
      }
      function ju() {
        !bt && !Tr && (bt = !0, ci($n));
      }
      function xr() {
        return I(Et);
      }
      function Na(ee) {
        ee.callback = null;
      }
      function Cn() {
        return ut;
      }
      var Yn = !1, wr = null, Zr = -1, sr = F, La = -1;
      function Nl() {
        var ee = g.unstable_now() - La;
        return !(ee < sr);
      }
      function Pi() {
      }
      function oi(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? sr = Math.floor(1e3 / ee) : sr = F;
      }
      var $i = function() {
        if (wr !== null) {
          var ee = g.unstable_now();
          La = ee;
          var xe = !0, $e = !0;
          try {
            $e = wr(xe, ee);
          } finally {
            $e ? Jr() : (Yn = !1, wr = null);
          }
        } else
          Yn = !1;
      }, Jr;
      if (typeof oe == "function")
        Jr = function() {
          oe($i);
        };
      else if (typeof MessageChannel < "u") {
        var si = new MessageChannel(), pa = si.port2;
        si.port1.onmessage = $i, Jr = function() {
          pa.postMessage(null);
        };
      } else
        Jr = function() {
          Z($i, 0);
        };
      function ci(ee) {
        wr = ee, Yn || (Yn = !0, Jr());
      }
      function Qn(ee, xe) {
        Zr = Z(function() {
          ee(g.unstable_now());
        }, xe);
      }
      function ea() {
        _e(Zr), Zr = -1;
      }
      var Bu = Pi, fi = null;
      g.unstable_IdlePriority = ge, g.unstable_ImmediatePriority = Ee, g.unstable_LowPriority = re, g.unstable_NormalPriority = q, g.unstable_Profiling = fi, g.unstable_UserBlockingPriority = W, g.unstable_cancelCallback = Na, g.unstable_continueExecution = ju, g.unstable_forceFrameRate = oi, g.unstable_getCurrentPriorityLevel = Cn, g.unstable_getFirstCallbackNode = xr, g.unstable_next = Nn, g.unstable_pauseExecution = da, g.unstable_requestPaint = Bu, g.unstable_runWithPriority = li, g.unstable_scheduleCallback = qr, g.unstable_shouldYield = Nl, g.unstable_wrapCallback = ui, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(w0)), w0;
}
var yT;
function DT() {
  return yT || (yT = 1, process.env.NODE_ENV === "production" ? Am.exports = kk() : Am.exports = _k()), Am.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gT;
function Nk() {
  if (gT) return Xr;
  gT = 1;
  var g = _0, b = DT();
  function C(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var F = /* @__PURE__ */ new Set(), U = {};
  function I(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (U[n] = r, n = 0; n < r.length; n++) F.add(r[n]);
  }
  var ne = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $ = Object.prototype.hasOwnProperty, V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ee = {}, W = {};
  function q(n) {
    return $.call(W, n) ? !0 : $.call(Ee, n) ? !1 : V.test(n) ? W[n] = !0 : (Ee[n] = !0, !1);
  }
  function re(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ge(n, r, l, o) {
    if (r === null || typeof r > "u" || re(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ke(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var Ce = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ce[n] = new ke(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ce[r] = new ke(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ce[n] = new ke(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ce[n] = new ke(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ce[n] = new ke(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ce[n] = new ke(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ce[n] = new ke(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ce[n] = new ke(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ce[n] = new ke(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Je = /[\-:]([a-z])/g;
  function Ue(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Je,
      Ue
    );
    Ce[r] = new ke(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Je, Ue);
    Ce[r] = new ke(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Je, Ue);
    Ce[r] = new ke(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ce[n] = new ke(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ce.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ce[n] = new ke(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ye(n, r, l, o) {
    var c = Ce.hasOwnProperty(r) ? Ce[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ge(r, l, c, o) && (l = null), o || c === null ? q(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ne = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, He = Symbol.for("react.element"), dt = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), Wt = Symbol.for("react.strict_mode"), _n = Symbol.for("react.profiler"), Et = Symbol.for("react.provider"), lt = Symbol.for("react.context"), Pn = Symbol.for("react.forward_ref"), We = Symbol.for("react.suspense"), ut = Symbol.for("react.suspense_list"), Tr = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), Rr = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = Z && n[Z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Object.assign, rt;
  function ot(n) {
    if (rt === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      rt = r && r[1] || "";
    }
    return `
` + rt + n;
  }
  var $n = !1;
  function or(n, r) {
    if (!n || $n) return "";
    $n = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (O) {
          var o = O;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (O) {
          o = O;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (O) {
          o = O;
        }
        n();
      }
    } catch (O) {
      if (O && o && typeof O.stack == "string") {
        for (var c = O.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, E = d.length - 1; 1 <= h && 0 <= E && c[h] !== d[E]; ) E--;
        for (; 1 <= h && 0 <= E; h--, E--) if (c[h] !== d[E]) {
          if (h !== 1 || E !== 1)
            do
              if (h--, E--, 0 > E || c[h] !== d[E]) {
                var T = `
` + c[h].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= h && 0 <= E);
          break;
        }
      }
    } finally {
      $n = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ot(n) : "";
  }
  function li(n) {
    switch (n.tag) {
      case 5:
        return ot(n.type);
      case 16:
        return ot("Lazy");
      case 13:
        return ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = or(n.type, !1), n;
      case 11:
        return n = or(n.type.render, !1), n;
      case 1:
        return n = or(n.type, !0), n;
      default:
        return "";
    }
  }
  function Nn(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Be:
        return "Fragment";
      case dt:
        return "Portal";
      case _n:
        return "Profiler";
      case Wt:
        return "StrictMode";
      case We:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case lt:
        return (n.displayName || "Context") + ".Consumer";
      case Et:
        return (n._context.displayName || "Context") + ".Provider";
      case Pn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Tr:
        return r = n.displayName || null, r !== null ? r : Nn(n.type) || "Memo";
      case bt:
        r = n._payload, n = n._init;
        try {
          return Nn(n(r));
        } catch {
        }
    }
    return null;
  }
  function ui(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Nn(r);
      case 8:
        return r === Wt ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function qr(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function da(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ju(n) {
    var r = da(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function xr(n) {
    n._valueTracker || (n._valueTracker = ju(n));
  }
  function Na(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = da(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Cn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Yn(n, r) {
    var l = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function wr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = qr(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Zr(n, r) {
    r = r.checked, r != null && ye(n, "checked", r, !1);
  }
  function sr(n, r) {
    Zr(n, r);
    var l = qr(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Nl(n, r.type, l) : r.hasOwnProperty("defaultValue") && Nl(n, r.type, qr(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function La(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Nl(n, r, l) {
    (r !== "number" || Cn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Pi = Array.isArray;
  function oi(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + qr(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function $i(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(C(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Jr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(C(92));
        if (Pi(l)) {
          if (1 < l.length) throw Error(C(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: qr(l) };
  }
  function si(n, r) {
    var l = qr(r.value), o = qr(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function pa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ci(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ci(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ea, Bu = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (ea = ea || document.createElement("div"), ea.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ea.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function fi(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(n) {
    xe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ee[r] = ee[n];
    });
  });
  function $e(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ee.hasOwnProperty(n) && ee[n] ? ("" + r).trim() : r + "px";
  }
  function pt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = $e(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var At = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Tn(n, r) {
    if (r) {
      if (At[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(C(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(C(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(C(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(C(62));
    }
  }
  function Gt(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dr = null;
  function kt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var va = null, Bt = null, _t = null;
  function bp(n) {
    if (n = po(n)) {
      if (typeof va != "function") throw Error(C(280));
      var r = n.stateNode;
      r && (r = Te(r), va(n.stateNode, n.type, r));
    }
  }
  function as(n) {
    Bt ? _t ? _t.push(n) : _t = [n] : Bt = n;
  }
  function is() {
    if (Bt) {
      var n = Bt, r = _t;
      if (_t = Bt = null, bp(n), r) for (n = 0; n < r.length; n++) bp(r[n]);
    }
  }
  function kp(n, r) {
    return n(r);
  }
  function _p() {
  }
  var ls = !1;
  function of(n, r, l) {
    if (ls) return n(r, l);
    ls = !0;
    try {
      return kp(n, r, l);
    } finally {
      ls = !1, (Bt !== null || _t !== null) && (_p(), is());
    }
  }
  function Pu(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Te(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(C(231, r, typeof l));
    return l;
  }
  var us = !1;
  if (ne) try {
    var Yi = {};
    Object.defineProperty(Yi, "passive", { get: function() {
      us = !0;
    } }), window.addEventListener("test", Yi, Yi), window.removeEventListener("test", Yi, Yi);
  } catch {
    us = !1;
  }
  function Ll(n, r, l, o, c, d, h, E, T) {
    var O = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, O);
    } catch (P) {
      this.onError(P);
    }
  }
  var ta = !1, Oa = null, Ol = !1, $u = null, sf = { onError: function(n) {
    ta = !0, Oa = n;
  } };
  function cf(n, r, l, o, c, d, h, E, T) {
    ta = !1, Oa = null, Ll.apply(sf, arguments);
  }
  function Ml(n, r, l, o, c, d, h, E, T) {
    if (cf.apply(this, arguments), ta) {
      if (ta) {
        var O = Oa;
        ta = !1, Oa = null;
      } else throw Error(C(198));
      Ol || (Ol = !0, $u = O);
    }
  }
  function ha(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Yu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ul(n) {
    if (ha(n) !== n) throw Error(C(188));
  }
  function Ln(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ha(n), r === null) throw Error(C(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Ul(c), n;
          if (d === o) return Ul(c), r;
          d = d.sibling;
        }
        throw Error(C(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var h = !1, E = c.child; E; ) {
          if (E === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            h = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!h) {
          for (E = d.child; E; ) {
            if (E === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              h = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!h) throw Error(C(189));
        }
      }
      if (l.alternate !== o) throw Error(C(190));
    }
    if (l.tag !== 3) throw Error(C(188));
    return l.stateNode.current === l ? n : r;
  }
  function Np(n) {
    return n = Ln(n), n !== null ? Lp(n) : null;
  }
  function Lp(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Lp(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var ff = b.unstable_scheduleCallback, Op = b.unstable_cancelCallback, Wm = b.unstable_shouldYield, Gm = b.unstable_requestPaint, Nt = b.unstable_now, Xm = b.unstable_getCurrentPriorityLevel, Ma = b.unstable_ImmediatePriority, Ye = b.unstable_UserBlockingPriority, di = b.unstable_NormalPriority, Mp = b.unstable_LowPriority, df = b.unstable_IdlePriority, Qu = null, na = null;
  function Up(n) {
    if (na && typeof na.onCommitFiberRoot == "function") try {
      na.onCommitFiberRoot(Qu, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var br = Math.clz32 ? Math.clz32 : Km, zp = Math.log, Ap = Math.LN2;
  function Km(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (zp(n) / Ap | 0) | 0;
  }
  var os = 64, zl = 4194304;
  function Qi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ra(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var E = h & ~c;
      E !== 0 ? o = Qi(E) : (d &= h, d !== 0 && (o = Qi(d)));
    } else h = l & ~c, h !== 0 ? o = Qi(h) : d !== 0 && (o = Qi(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - br(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function pf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ss(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - br(d), E = 1 << h, T = c[h];
      T === -1 ? (!(E & l) || E & o) && (c[h] = pf(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function vf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function cs() {
    var n = os;
    return os <<= 1, !(os & 4194240) && (os = 64), n;
  }
  function hf(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Ii(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - br(r), n[r] = l;
  }
  function qm(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - br(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Iu(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - br(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var at = 0;
  function mf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hp, fs, it, Fp, yf, Fe = !1, Wu = [], Pt = null, kr = null, _r = null, Gu = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), st = [], Zm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function aa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Pt = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        _r = null;
        break;
      case "pointerover":
      case "pointerout":
        Gu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xt.delete(r.pointerId);
    }
  }
  function Rn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = po(r), r !== null && fs(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function pi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Pt = Rn(Pt, n, r, l, o, c), !0;
      case "dragenter":
        return kr = Rn(kr, n, r, l, o, c), !0;
      case "mouseover":
        return _r = Rn(_r, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Gu.set(d, Rn(Gu.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Xt.set(d, Rn(Xt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Vp(n) {
    var r = Lr(n.target);
    if (r !== null) {
      var l = ha(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Yu(l), r !== null) {
            n.blockedOn = r, yf(n.priority, function() {
              it(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Al(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = vs(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Dr = o, l.target.dispatchEvent(o), Dr = null;
      } else return r = po(l), r !== null && fs(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function gf(n, r, l) {
    Al(n) && l.delete(r);
  }
  function jp() {
    Fe = !1, Pt !== null && Al(Pt) && (Pt = null), kr !== null && Al(kr) && (kr = null), _r !== null && Al(_r) && (_r = null), Gu.forEach(gf), Xt.forEach(gf);
  }
  function Xu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Fe || (Fe = !0, b.unstable_scheduleCallback(b.unstable_NormalPriority, jp)));
  }
  function Ku(n) {
    function r(c) {
      return Xu(c, n);
    }
    if (0 < Wu.length) {
      Xu(Wu[0], n);
      for (var l = 1; l < Wu.length; l++) {
        var o = Wu[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Pt !== null && Xu(Pt, n), kr !== null && Xu(kr, n), _r !== null && Xu(_r, n), Gu.forEach(r), Xt.forEach(r), l = 0; l < st.length; l++) o = st[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < st.length && (l = st[0], l.blockedOn === null); ) Vp(l), l.blockedOn === null && st.shift();
  }
  var Hl = Ne.ReactCurrentBatchConfig, Wi = !0;
  function Bp(n, r, l, o) {
    var c = at, d = Hl.transition;
    Hl.transition = null;
    try {
      at = 1, ps(n, r, l, o);
    } finally {
      at = c, Hl.transition = d;
    }
  }
  function ds(n, r, l, o) {
    var c = at, d = Hl.transition;
    Hl.transition = null;
    try {
      at = 4, ps(n, r, l, o);
    } finally {
      at = c, Hl.transition = d;
    }
  }
  function ps(n, r, l, o) {
    if (Wi) {
      var c = vs(n, r, l, o);
      if (c === null) Ds(n, r, o, qu, l), aa(n, o);
      else if (pi(c, n, r, l, o)) o.stopPropagation();
      else if (aa(n, o), r & 4 && -1 < Zm.indexOf(n)) {
        for (; c !== null; ) {
          var d = po(c);
          if (d !== null && Hp(d), d = vs(n, r, l, o), d === null && Ds(n, r, o, qu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Ds(n, r, o, null, l);
    }
  }
  var qu = null;
  function vs(n, r, l, o) {
    if (qu = null, n = kt(o), n = Lr(n), n !== null) if (r = ha(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Yu(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return qu = n, null;
  }
  function Sf(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xm()) {
          case Ma:
            return 1;
          case Ye:
            return 4;
          case di:
          case Mp:
            return 16;
          case df:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ua = null, Zu = null, Ju = null;
  function Ef() {
    if (Ju) return Ju;
    var n, r = Zu, l = r.length, o, c = "value" in Ua ? Ua.value : Ua.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++) ;
    return Ju = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Fl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function eo() {
    return !0;
  }
  function Pp() {
    return !1;
  }
  function cr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? eo : Pp, this.isPropagationStopped = Pp, this;
    }
    return oe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = eo);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = eo);
    }, persist: function() {
    }, isPersistent: eo }), r;
  }
  var vi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, hs = cr(vi), Vl = oe({}, vi, { view: 0, detail: 0 }), $p = cr(Vl), ms, Cf, to, nn = oe({}, Vl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== to && (to && n.type === "mousemove" ? (ms = n.screenX - to.screenX, Cf = n.screenY - to.screenY) : Cf = ms = 0, to = n), ms);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Cf;
  } }), ys = cr(nn), Yp = oe({}, nn, { dataTransfer: 0 }), Qp = cr(Yp), Jm = oe({}, Vl, { relatedTarget: 0 }), hi = cr(Jm), Tf = oe({}, vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ip = cr(Tf), ey = oe({}, vi, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ty = cr(ey), ny = oe({}, vi, { data: 0 }), Rf = cr(ny), xf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Wp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Gp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Gp[n]) ? !!r[n] : !1;
  }
  function wf() {
    return Xp;
  }
  var za = oe({}, Vl, { key: function(n) {
    if (n.key) {
      var r = xf[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Fl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Wp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wf, charCode: function(n) {
    return n.type === "keypress" ? Fl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Fl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ry = cr(za), Df = oe({}, nn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gs = cr(Df), bf = oe({}, Vl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wf }), ay = cr(bf), Ss = oe({}, vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kp = cr(Ss), In = oe({}, nn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Aa = cr(In), $t = [9, 13, 27, 32], ia = ne && "CompositionEvent" in window, Gi = null;
  ne && "documentMode" in document && (Gi = document.documentMode);
  var Es = ne && "TextEvent" in window && !Gi, qp = ne && (!ia || Gi && 8 < Gi && 11 >= Gi), jl = " ", Zp = !1;
  function Jp(n, r) {
    switch (n) {
      case "keyup":
        return $t.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Cs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Bl = !1;
  function iy(n, r) {
    switch (n) {
      case "compositionend":
        return Cs(r);
      case "keypress":
        return r.which !== 32 ? null : (Zp = !0, jl);
      case "textInput":
        return n = r.data, n === jl && Zp ? null : n;
      default:
        return null;
    }
  }
  function ly(n, r) {
    if (Bl) return n === "compositionend" || !ia && Jp(n, r) ? (n = Ef(), Ju = Zu = Ua = null, Bl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return qp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ev = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function tv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ev[n.type] : r === "textarea";
  }
  function nv(n, r, l, o) {
    as(o), r = so(r, "onChange"), 0 < r.length && (l = new hs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var no = null, Pl = null;
  function $l(n) {
    ws(n, 0);
  }
  function Yl(n) {
    var r = Il(n);
    if (Na(r)) return n;
  }
  function rv(n, r) {
    if (n === "change") return r;
  }
  var kf = !1;
  if (ne) {
    var _f;
    if (ne) {
      var Nf = "oninput" in document;
      if (!Nf) {
        var av = document.createElement("div");
        av.setAttribute("oninput", "return;"), Nf = typeof av.oninput == "function";
      }
      _f = Nf;
    } else _f = !1;
    kf = _f && (!document.documentMode || 9 < document.documentMode);
  }
  function iv() {
    no && (no.detachEvent("onpropertychange", lv), Pl = no = null);
  }
  function lv(n) {
    if (n.propertyName === "value" && Yl(Pl)) {
      var r = [];
      nv(r, Pl, n, kt(n)), of($l, r);
    }
  }
  function uy(n, r, l) {
    n === "focusin" ? (iv(), no = r, Pl = l, no.attachEvent("onpropertychange", lv)) : n === "focusout" && iv();
  }
  function oy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Yl(Pl);
  }
  function sy(n, r) {
    if (n === "click") return Yl(r);
  }
  function uv(n, r) {
    if (n === "input" || n === "change") return Yl(r);
  }
  function cy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Nr = typeof Object.is == "function" ? Object.is : cy;
  function ro(n, r) {
    if (Nr(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!$.call(r, c) || !Nr(n[c], r[c])) return !1;
    }
    return !0;
  }
  function ov(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function sv(n, r) {
    var l = ov(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ov(l);
    }
  }
  function cv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? cv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ts() {
    for (var n = window, r = Cn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Cn(n.document);
    }
    return r;
  }
  function Ha(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Rs(n) {
    var r = Ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && cv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ha(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = sv(l, d);
          var h = sv(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var fv = ne && "documentMode" in document && 11 >= document.documentMode, la = null, Lf = null, ao = null, Of = !1;
  function dv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Of || la == null || la !== Cn(o) || (o = la, "selectionStart" in o && Ha(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ao && ro(ao, o) || (ao = o, o = so(Lf, "onSelect"), 0 < o.length && (r = new hs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = la)));
  }
  function xs(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Xi = { animationend: xs("Animation", "AnimationEnd"), animationiteration: xs("Animation", "AnimationIteration"), animationstart: xs("Animation", "AnimationStart"), transitionend: xs("Transition", "TransitionEnd") }, Mf = {}, Uf = {};
  ne && (Uf = document.createElement("div").style, "AnimationEvent" in window || (delete Xi.animationend.animation, delete Xi.animationiteration.animation, delete Xi.animationstart.animation), "TransitionEvent" in window || delete Xi.transitionend.transition);
  function rn(n) {
    if (Mf[n]) return Mf[n];
    if (!Xi[n]) return n;
    var r = Xi[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Uf) return Mf[n] = r[l];
    return n;
  }
  var zf = rn("animationend"), pv = rn("animationiteration"), vv = rn("animationstart"), hv = rn("transitionend"), mv = /* @__PURE__ */ new Map(), yv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fa(n, r) {
    mv.set(n, r), I(r, [n]);
  }
  for (var io = 0; io < yv.length; io++) {
    var Ki = yv[io], fy = Ki.toLowerCase(), lo = Ki[0].toUpperCase() + Ki.slice(1);
    Fa(fy, "on" + lo);
  }
  Fa(zf, "onAnimationEnd"), Fa(pv, "onAnimationIteration"), Fa(vv, "onAnimationStart"), Fa("dblclick", "onDoubleClick"), Fa("focusin", "onFocus"), Fa("focusout", "onBlur"), Fa(hv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), I("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), I("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), I("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), I("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var uo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dy = new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));
  function gv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Ml(o, r, void 0, n), n.currentTarget = null;
  }
  function ws(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var E = o[h], T = E.instance, O = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          gv(c, E, O), d = T;
        }
        else for (h = 0; h < o.length; h++) {
          if (E = o[h], T = E.instance, O = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          gv(c, E, O), d = T;
        }
      }
    }
    if (Ol) throw n = $u, Ol = !1, $u = null, n;
  }
  function vt(n, r) {
    var l = r[Pf];
    l === void 0 && (l = r[Pf] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Sv(r, n, 2, !1), l.add(o));
  }
  function mi(n, r, l) {
    var o = 0;
    r && (o |= 4), Sv(l, n, o, r);
  }
  var Va = "_reactListening" + Math.random().toString(36).slice(2);
  function Ql(n) {
    if (!n[Va]) {
      n[Va] = !0, F.forEach(function(l) {
        l !== "selectionchange" && (dy.has(l) || mi(l, !1, n), mi(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Va] || (r[Va] = !0, mi("selectionchange", !1, r));
    }
  }
  function Sv(n, r, l, o) {
    switch (Sf(r)) {
      case 1:
        var c = Bp;
        break;
      case 4:
        c = ds;
        break;
      default:
        c = ps;
    }
    l = c.bind(null, r, l, n), c = void 0, !us || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ds(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var h = o.tag;
      if (h === 3 || h === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (h === 4) for (h = o.return; h !== null; ) {
          var T = h.tag;
          if ((T === 3 || T === 4) && (T = h.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          h = h.return;
        }
        for (; E !== null; ) {
          if (h = Lr(E), h === null) return;
          if (T = h.tag, T === 5 || T === 6) {
            o = d = h;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    of(function() {
      var O = d, P = kt(l), Y = [];
      e: {
        var B = mv.get(n);
        if (B !== void 0) {
          var ae = hs, se = n;
          switch (n) {
            case "keypress":
              if (Fl(l) === 0) break e;
            case "keydown":
            case "keyup":
              ae = ry;
              break;
            case "focusin":
              se = "focus", ae = hi;
              break;
            case "focusout":
              se = "blur", ae = hi;
              break;
            case "beforeblur":
            case "afterblur":
              ae = hi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ae = ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ae = Qp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ae = ay;
              break;
            case zf:
            case pv:
            case vv:
              ae = Ip;
              break;
            case hv:
              ae = Kp;
              break;
            case "scroll":
              ae = $p;
              break;
            case "wheel":
              ae = Aa;
              break;
            case "copy":
            case "cut":
            case "paste":
              ae = ty;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ae = gs;
          }
          var de = (r & 4) !== 0, Vt = !de && n === "scroll", D = de ? B !== null ? B + "Capture" : null : B;
          de = [];
          for (var x = O, N; x !== null; ) {
            N = x;
            var G = N.stateNode;
            if (N.tag === 5 && G !== null && (N = G, D !== null && (G = Pu(x, D), G != null && de.push(oo(x, G, N)))), Vt) break;
            x = x.return;
          }
          0 < de.length && (B = new ae(B, se, null, l, P), Y.push({ event: B, listeners: de }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (B = n === "mouseover" || n === "pointerover", ae = n === "mouseout" || n === "pointerout", B && l !== Dr && (se = l.relatedTarget || l.fromElement) && (Lr(se) || se[ja])) break e;
          if ((ae || B) && (B = P.window === P ? P : (B = P.ownerDocument) ? B.defaultView || B.parentWindow : window, ae ? (se = l.relatedTarget || l.toElement, ae = O, se = se ? Lr(se) : null, se !== null && (Vt = ha(se), se !== Vt || se.tag !== 5 && se.tag !== 6) && (se = null)) : (ae = null, se = O), ae !== se)) {
            if (de = ys, G = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (de = gs, G = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Vt = ae == null ? B : Il(ae), N = se == null ? B : Il(se), B = new de(G, x + "leave", ae, l, P), B.target = Vt, B.relatedTarget = N, G = null, Lr(P) === O && (de = new de(D, x + "enter", se, l, P), de.target = N, de.relatedTarget = Vt, G = de), Vt = G, ae && se) t: {
              for (de = ae, D = se, x = 0, N = de; N; N = qi(N)) x++;
              for (N = 0, G = D; G; G = qi(G)) N++;
              for (; 0 < x - N; ) de = qi(de), x--;
              for (; 0 < N - x; ) D = qi(D), N--;
              for (; x--; ) {
                if (de === D || D !== null && de === D.alternate) break t;
                de = qi(de), D = qi(D);
              }
              de = null;
            }
            else de = null;
            ae !== null && Af(Y, B, ae, de, !1), se !== null && Vt !== null && Af(Y, Vt, se, de, !0);
          }
        }
        e: {
          if (B = O ? Il(O) : window, ae = B.nodeName && B.nodeName.toLowerCase(), ae === "select" || ae === "input" && B.type === "file") var ve = rv;
          else if (tv(B)) if (kf) ve = uv;
          else {
            ve = oy;
            var we = uy;
          }
          else (ae = B.nodeName) && ae.toLowerCase() === "input" && (B.type === "checkbox" || B.type === "radio") && (ve = sy);
          if (ve && (ve = ve(n, O))) {
            nv(Y, ve, l, P);
            break e;
          }
          we && we(n, B, O), n === "focusout" && (we = B._wrapperState) && we.controlled && B.type === "number" && Nl(B, "number", B.value);
        }
        switch (we = O ? Il(O) : window, n) {
          case "focusin":
            (tv(we) || we.contentEditable === "true") && (la = we, Lf = O, ao = null);
            break;
          case "focusout":
            ao = Lf = la = null;
            break;
          case "mousedown":
            Of = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Of = !1, dv(Y, l, P);
            break;
          case "selectionchange":
            if (fv) break;
          case "keydown":
          case "keyup":
            dv(Y, l, P);
        }
        var ce;
        if (ia) e: {
          switch (n) {
            case "compositionstart":
              var De = "onCompositionStart";
              break e;
            case "compositionend":
              De = "onCompositionEnd";
              break e;
            case "compositionupdate":
              De = "onCompositionUpdate";
              break e;
          }
          De = void 0;
        }
        else Bl ? Jp(n, l) && (De = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (De = "onCompositionStart");
        De && (qp && l.locale !== "ko" && (Bl || De !== "onCompositionStart" ? De === "onCompositionEnd" && Bl && (ce = Ef()) : (Ua = P, Zu = "value" in Ua ? Ua.value : Ua.textContent, Bl = !0)), we = so(O, De), 0 < we.length && (De = new Rf(De, n, null, l, P), Y.push({ event: De, listeners: we }), ce ? De.data = ce : (ce = Cs(l), ce !== null && (De.data = ce)))), (ce = Es ? iy(n, l) : ly(n, l)) && (O = so(O, "onBeforeInput"), 0 < O.length && (P = new Rf("onBeforeInput", "beforeinput", null, l, P), Y.push({ event: P, listeners: O }), P.data = ce));
      }
      ws(Y, r);
    });
  }
  function oo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function so(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Pu(n, l), d != null && o.unshift(oo(n, d, c)), d = Pu(n, r), d != null && o.push(oo(n, d, c))), n = n.return;
    }
    return o;
  }
  function qi(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Af(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, O = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && O !== null && (E = O, c ? (T = Pu(l, d), T != null && h.unshift(oo(l, T, E))) : c || (T = Pu(l, d), T != null && h.push(oo(l, T, E)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Hf = /\r\n?/g, py = /\u0000|\uFFFD/g;
  function Ff(n) {
    return (typeof n == "string" ? n : "" + n).replace(Hf, `
`).replace(py, "");
  }
  function bs(n, r, l) {
    if (r = Ff(r), Ff(n) !== r && l) throw Error(C(425));
  }
  function ks() {
  }
  var Vf = null, Zi = null;
  function co(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ji = typeof setTimeout == "function" ? setTimeout : void 0, Ev = typeof clearTimeout == "function" ? clearTimeout : void 0, jf = typeof Promise == "function" ? Promise : void 0, Bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof jf < "u" ? function(n) {
    return jf.resolve(null).then(n).catch(vy);
  } : Ji;
  function vy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function yi(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Ku(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Ku(r);
  }
  function ua(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function fo(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var gi = Math.random().toString(36).slice(2), ma = "__reactFiber$" + gi, el = "__reactProps$" + gi, ja = "__reactContainer$" + gi, Pf = "__reactEvents$" + gi, hy = "__reactListeners$" + gi, $f = "__reactHandles$" + gi;
  function Lr(n) {
    var r = n[ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ja] || l[ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = fo(n); n !== null; ) {
          if (l = n[ma]) return l;
          n = fo(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function po(n) {
    return n = n[ma] || n[ja], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Il(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(C(33));
  }
  function Te(n) {
    return n[el] || null;
  }
  var Si = [], mt = -1;
  function je(n) {
    return { current: n };
  }
  function et(n) {
    0 > mt || (n.current = Si[mt], Si[mt] = null, mt--);
  }
  function tt(n, r) {
    mt++, Si[mt] = n.current, n.current = r;
  }
  var ya = {}, Oe = je(ya), Lt = je(!1), Wn = ya;
  function Or(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ya;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Ct(n) {
    return n = n.childContextTypes, n != null;
  }
  function Mr() {
    et(Lt), et(Oe);
  }
  function Ei(n, r, l) {
    if (Oe.current !== ya) throw Error(C(168));
    tt(Oe, r), tt(Lt, l);
  }
  function vo(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(C(108, ui(n) || "Unknown", c));
    return oe({}, l, o);
  }
  function _s(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ya, Wn = Oe.current, tt(Oe, n), tt(Lt, Lt.current), !0;
  }
  function Cv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(C(169));
    l ? (n = vo(n, r, Wn), o.__reactInternalMemoizedMergedChildContext = n, et(Lt), et(Oe), tt(Oe, n)) : et(Lt), tt(Lt, l);
  }
  var fr = null, an = !1, ho = !1;
  function Yf(n) {
    fr === null ? fr = [n] : fr.push(n);
  }
  function Qf(n) {
    an = !0, Yf(n);
  }
  function Gn() {
    if (!ho && fr !== null) {
      ho = !0;
      var n = 0, r = at;
      try {
        var l = fr;
        for (at = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        fr = null, an = !1;
      } catch (c) {
        throw fr !== null && (fr = fr.slice(n + 1)), ff(Ma, Gn), c;
      } finally {
        at = r, ho = !1;
      }
    }
    return null;
  }
  var Ci = [], Xn = 0, tl = null, Wl = 0, Kn = [], xn = 0, Ur = null, cn = 1, Ba = "";
  function dr(n, r) {
    Ci[Xn++] = Wl, Ci[Xn++] = tl, tl = n, Wl = r;
  }
  function If(n, r, l) {
    Kn[xn++] = cn, Kn[xn++] = Ba, Kn[xn++] = Ur, Ur = n;
    var o = cn;
    n = Ba;
    var c = 32 - br(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - br(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, cn = 1 << 32 - br(r) + c | l << c | o, Ba = d + n;
    } else cn = 1 << d | l << c | o, Ba = n;
  }
  function Ns(n) {
    n.return !== null && (dr(n, 1), If(n, 1, 0));
  }
  function Wf(n) {
    for (; n === tl; ) tl = Ci[--Xn], Ci[Xn] = null, Wl = Ci[--Xn], Ci[Xn] = null;
    for (; n === Ur; ) Ur = Kn[--xn], Kn[xn] = null, Ba = Kn[--xn], Kn[xn] = null, cn = Kn[--xn], Kn[xn] = null;
  }
  var pr = null, qn = null, yt = !1, zr = null;
  function Gf(n, r) {
    var l = $r(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Tv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, pr = n, qn = ua(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, pr = n, qn = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ur !== null ? { id: cn, overflow: Ba } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = $r(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, pr = n, qn = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ls(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Os(n) {
    if (yt) {
      var r = qn;
      if (r) {
        var l = r;
        if (!Tv(n, r)) {
          if (Ls(n)) throw Error(C(418));
          r = ua(l.nextSibling);
          var o = pr;
          r && Tv(n, r) ? Gf(o, l) : (n.flags = n.flags & -4097 | 2, yt = !1, pr = n);
        }
      } else {
        if (Ls(n)) throw Error(C(418));
        n.flags = n.flags & -4097 | 2, yt = !1, pr = n;
      }
    }
  }
  function Rv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    pr = n;
  }
  function Ms(n) {
    if (n !== pr) return !1;
    if (!yt) return Rv(n), yt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !co(n.type, n.memoizedProps)), r && (r = qn)) {
      if (Ls(n)) throw xv(), Error(C(418));
      for (; r; ) Gf(n, r), r = ua(r.nextSibling);
    }
    if (Rv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(C(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                qn = ua(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        qn = null;
      }
    } else qn = pr ? ua(n.stateNode.nextSibling) : null;
    return !0;
  }
  function xv() {
    for (var n = qn; n; ) n = ua(n.nextSibling);
  }
  function xt() {
    qn = pr = null, yt = !1;
  }
  function Xf(n) {
    zr === null ? zr = [n] : zr.push(n);
  }
  var Us = Ne.ReactCurrentBatchConfig;
  function nl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(C(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(C(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var E = c.refs;
          h === null ? delete E[d] : E[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(C(284));
      if (!l._owner) throw Error(C(290, n));
    }
    return n;
  }
  function ga(n, r) {
    throw n = Object.prototype.toString.call(r), Error(C(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function wv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zs(n) {
    function r(D, x) {
      if (n) {
        var N = D.deletions;
        N === null ? (D.deletions = [x], D.flags |= 16) : N.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = _i(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, N) {
      return D.index = N, n ? (N = D.alternate, N !== null ? (N = N.index, N < x ? (D.flags |= 2, x) : N) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function h(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, N, G) {
      return x === null || x.tag !== 6 ? (x = Tc(N, D.mode, G), x.return = D, x) : (x = c(x, N), x.return = D, x);
    }
    function T(D, x, N, G) {
      var ve = N.type;
      return ve === Be ? P(D, x, N.props.children, G, N.key) : x !== null && (x.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === bt && wv(ve) === x.type) ? (G = c(x, N.props), G.ref = nl(D, x, N), G.return = D, G) : (G = Ec(N.type, N.key, N.props, null, D.mode, G), G.ref = nl(D, x, N), G.return = D, G);
    }
    function O(D, x, N, G) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = Mo(N, D.mode, G), x.return = D, x) : (x = c(x, N.children || []), x.return = D, x);
    }
    function P(D, x, N, G, ve) {
      return x === null || x.tag !== 7 ? (x = yl(N, D.mode, G, ve), x.return = D, x) : (x = c(x, N), x.return = D, x);
    }
    function Y(D, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Tc("" + x, D.mode, N), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case He:
            return N = Ec(x.type, x.key, x.props, null, D.mode, N), N.ref = nl(D, null, x), N.return = D, N;
          case dt:
            return x = Mo(x, D.mode, N), x.return = D, x;
          case bt:
            var G = x._init;
            return Y(D, G(x._payload), N);
        }
        if (Pi(x) || _e(x)) return x = yl(x, D.mode, N, null), x.return = D, x;
        ga(D, x);
      }
      return null;
    }
    function B(D, x, N, G) {
      var ve = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return ve !== null ? null : E(D, x, "" + N, G);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case He:
            return N.key === ve ? T(D, x, N, G) : null;
          case dt:
            return N.key === ve ? O(D, x, N, G) : null;
          case bt:
            return ve = N._init, B(
              D,
              x,
              ve(N._payload),
              G
            );
        }
        if (Pi(N) || _e(N)) return ve !== null ? null : P(D, x, N, G, null);
        ga(D, N);
      }
      return null;
    }
    function ae(D, x, N, G, ve) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return D = D.get(N) || null, E(x, D, "" + G, ve);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case He:
            return D = D.get(G.key === null ? N : G.key) || null, T(x, D, G, ve);
          case dt:
            return D = D.get(G.key === null ? N : G.key) || null, O(x, D, G, ve);
          case bt:
            var we = G._init;
            return ae(D, x, N, we(G._payload), ve);
        }
        if (Pi(G) || _e(G)) return D = D.get(N) || null, P(x, D, G, ve, null);
        ga(x, G);
      }
      return null;
    }
    function se(D, x, N, G) {
      for (var ve = null, we = null, ce = x, De = x = 0, en = null; ce !== null && De < N.length; De++) {
        ce.index > De ? (en = ce, ce = null) : en = ce.sibling;
        var Ke = B(D, ce, N[De], G);
        if (Ke === null) {
          ce === null && (ce = en);
          break;
        }
        n && ce && Ke.alternate === null && r(D, ce), x = d(Ke, x, De), we === null ? ve = Ke : we.sibling = Ke, we = Ke, ce = en;
      }
      if (De === N.length) return l(D, ce), yt && dr(D, De), ve;
      if (ce === null) {
        for (; De < N.length; De++) ce = Y(D, N[De], G), ce !== null && (x = d(ce, x, De), we === null ? ve = ce : we.sibling = ce, we = ce);
        return yt && dr(D, De), ve;
      }
      for (ce = o(D, ce); De < N.length; De++) en = ae(ce, D, De, N[De], G), en !== null && (n && en.alternate !== null && ce.delete(en.key === null ? De : en.key), x = d(en, x, De), we === null ? ve = en : we.sibling = en, we = en);
      return n && ce.forEach(function(Ga) {
        return r(D, Ga);
      }), yt && dr(D, De), ve;
    }
    function de(D, x, N, G) {
      var ve = _e(N);
      if (typeof ve != "function") throw Error(C(150));
      if (N = ve.call(N), N == null) throw Error(C(151));
      for (var we = ve = null, ce = x, De = x = 0, en = null, Ke = N.next(); ce !== null && !Ke.done; De++, Ke = N.next()) {
        ce.index > De ? (en = ce, ce = null) : en = ce.sibling;
        var Ga = B(D, ce, Ke.value, G);
        if (Ga === null) {
          ce === null && (ce = en);
          break;
        }
        n && ce && Ga.alternate === null && r(D, ce), x = d(Ga, x, De), we === null ? ve = Ga : we.sibling = Ga, we = Ga, ce = en;
      }
      if (Ke.done) return l(
        D,
        ce
      ), yt && dr(D, De), ve;
      if (ce === null) {
        for (; !Ke.done; De++, Ke = N.next()) Ke = Y(D, Ke.value, G), Ke !== null && (x = d(Ke, x, De), we === null ? ve = Ke : we.sibling = Ke, we = Ke);
        return yt && dr(D, De), ve;
      }
      for (ce = o(D, ce); !Ke.done; De++, Ke = N.next()) Ke = ae(ce, D, De, Ke.value, G), Ke !== null && (n && Ke.alternate !== null && ce.delete(Ke.key === null ? De : Ke.key), x = d(Ke, x, De), we === null ? ve = Ke : we.sibling = Ke, we = Ke);
      return n && ce.forEach(function(My) {
        return r(D, My);
      }), yt && dr(D, De), ve;
    }
    function Vt(D, x, N, G) {
      if (typeof N == "object" && N !== null && N.type === Be && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case He:
            e: {
              for (var ve = N.key, we = x; we !== null; ) {
                if (we.key === ve) {
                  if (ve = N.type, ve === Be) {
                    if (we.tag === 7) {
                      l(D, we.sibling), x = c(we, N.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (we.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === bt && wv(ve) === we.type) {
                    l(D, we.sibling), x = c(we, N.props), x.ref = nl(D, we, N), x.return = D, D = x;
                    break e;
                  }
                  l(D, we);
                  break;
                } else r(D, we);
                we = we.sibling;
              }
              N.type === Be ? (x = yl(N.props.children, D.mode, G, N.key), x.return = D, D = x) : (G = Ec(N.type, N.key, N.props, null, D.mode, G), G.ref = nl(D, x, N), G.return = D, D = G);
            }
            return h(D);
          case dt:
            e: {
              for (we = N.key; x !== null; ) {
                if (x.key === we) if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                  l(D, x.sibling), x = c(x, N.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Mo(N, D.mode, G), x.return = D, D = x;
            }
            return h(D);
          case bt:
            return we = N._init, Vt(D, x, we(N._payload), G);
        }
        if (Pi(N)) return se(D, x, N, G);
        if (_e(N)) return de(D, x, N, G);
        ga(D, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, N), x.return = D, D = x) : (l(D, x), x = Tc(N, D.mode, G), x.return = D, D = x), h(D)) : l(D, x);
    }
    return Vt;
  }
  var Gl = zs(!0), Dv = zs(!1), Pa = je(null), Kt = null, X = null, Ar = null;
  function vr() {
    Ar = X = Kt = null;
  }
  function Kf(n) {
    var r = Pa.current;
    et(Pa), n._currentValue = r;
  }
  function qf(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Xl(n, r) {
    Kt = n, Ar = X = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (er = !0), n.firstContext = null);
  }
  function Hr(n) {
    var r = n._currentValue;
    if (Ar !== n) if (n = { context: n, memoizedValue: r, next: null }, X === null) {
      if (Kt === null) throw Error(C(308));
      X = n, Kt.dependencies = { lanes: 0, firstContext: n };
    } else X = X.next = n;
    return r;
  }
  var rl = null;
  function Yt(n) {
    rl === null ? rl = [n] : rl.push(n);
  }
  function bv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Yt(r)) : (l.next = c.next, c.next = l), r.interleaved = l, $a(n, o);
  }
  function $a(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ti = !1;
  function As(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Kl(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zn(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ri(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Qe & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, $a(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Yt(o)) : (r.next = c.next, c.next = r), o.interleaved = r, $a(n, l);
  }
  function Hs(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  function kv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Fs(n, r, l, o) {
    var c = n.updateQueue;
    Ti = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, O = T.next;
      T.next = null, h === null ? d = O : h.next = O, h = T;
      var P = n.alternate;
      P !== null && (P = P.updateQueue, E = P.lastBaseUpdate, E !== h && (E === null ? P.firstBaseUpdate = O : E.next = O, P.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Y = c.baseState;
      h = 0, P = O = T = null, E = d;
      do {
        var B = E.lane, ae = E.eventTime;
        if ((o & B) === B) {
          P !== null && (P = P.next = {
            eventTime: ae,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var se = n, de = E;
            switch (B = r, ae = l, de.tag) {
              case 1:
                if (se = de.payload, typeof se == "function") {
                  Y = se.call(ae, Y, B);
                  break e;
                }
                Y = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = de.payload, B = typeof se == "function" ? se.call(ae, Y, B) : se, B == null) break e;
                Y = oe({}, Y, B);
                break e;
              case 2:
                Ti = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, B = c.effects, B === null ? c.effects = [E] : B.push(E));
        } else ae = { eventTime: ae, lane: B, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, P === null ? (O = P = ae, T = Y) : P = P.next = ae, h |= B;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          B = E, E = B.next, B.next = null, c.lastBaseUpdate = B, c.shared.pending = null;
        }
      } while (!0);
      if (P === null && (T = Y), c.baseState = T, c.firstBaseUpdate = O, c.lastBaseUpdate = P, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      pl |= h, n.lanes = h, n.memoizedState = Y;
    }
  }
  function _v(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(C(191, c));
        c.call(o);
      }
    }
  }
  var mo = {}, oa = je(mo), ql = je(mo), yo = je(mo);
  function al(n) {
    if (n === mo) throw Error(C(174));
    return n;
  }
  function Zf(n, r) {
    switch (tt(yo, r), tt(ql, n), tt(oa, mo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Qn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Qn(r, n);
    }
    et(oa), tt(oa, r);
  }
  function Zl() {
    et(oa), et(ql), et(yo);
  }
  function Nv(n) {
    al(yo.current);
    var r = al(oa.current), l = Qn(r, n.type);
    r !== l && (tt(ql, n), tt(oa, l));
  }
  function Jf(n) {
    ql.current === n && (et(oa), et(ql));
  }
  var Tt = je(0);
  function Vs(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var js = [];
  function ed() {
    for (var n = 0; n < js.length; n++) js[n]._workInProgressVersionPrimary = null;
    js.length = 0;
  }
  var Bs = Ne.ReactCurrentDispatcher, go = Ne.ReactCurrentBatchConfig, pe = 0, he = null, Me = null, Pe = null, hr = !1, Jl = !1, So = 0, my = 0;
  function wn() {
    throw Error(C(321));
  }
  function Eo(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Nr(n[l], r[l])) return !1;
    return !0;
  }
  function j(n, r, l, o, c, d) {
    if (pe = d, he = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Bs.current = n === null || n.memoizedState === null ? yy : ht, n = l(o, c), Jl) {
      d = 0;
      do {
        if (Jl = !1, So = 0, 25 <= d) throw Error(C(301));
        d += 1, Pe = Me = null, r.updateQueue = null, Bs.current = nc, n = l(o, c);
      } while (Jl);
    }
    if (Bs.current = Dn, r = Me !== null && Me.next !== null, pe = 0, Pe = Me = he = null, hr = !1, r) throw Error(C(300));
    return n;
  }
  function Qt() {
    var n = So !== 0;
    return So = 0, n;
  }
  function Se() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Pe === null ? he.memoizedState = Pe = n : Pe = Pe.next = n, Pe;
  }
  function fn() {
    if (Me === null) {
      var n = he.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Me.next;
    var r = Pe === null ? he.memoizedState : Pe.next;
    if (r !== null) Pe = r, Me = n;
    else {
      if (n === null) throw Error(C(310));
      Me = n, n = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, Pe === null ? he.memoizedState = Pe = n : Pe = Pe.next = n;
    }
    return Pe;
  }
  function mr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ya(n) {
    var r = fn(), l = r.queue;
    if (l === null) throw Error(C(311));
    l.lastRenderedReducer = n;
    var o = Me, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = h = null, T = null, O = d;
      do {
        var P = O.lane;
        if ((pe & P) === P) T !== null && (T = T.next = { lane: 0, action: O.action, hasEagerState: O.hasEagerState, eagerState: O.eagerState, next: null }), o = O.hasEagerState ? O.eagerState : n(o, O.action);
        else {
          var Y = {
            lane: P,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          };
          T === null ? (E = T = Y, h = o) : T = T.next = Y, he.lanes |= P, pl |= P;
        }
        O = O.next;
      } while (O !== null && O !== d);
      T === null ? h = o : T.next = E, Nr(o, r.memoizedState) || (er = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, he.lanes |= d, pl |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Fr(n) {
    var r = fn(), l = r.queue;
    if (l === null) throw Error(C(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Nr(d, r.memoizedState) || (er = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function eu() {
  }
  function il(n, r) {
    var l = he, o = fn(), c = r(), d = !Nr(o.memoizedState, c);
    if (d && (o.memoizedState = c, er = !0), o = o.queue, Co($s.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Pe !== null && Pe.memoizedState.tag & 1) {
      if (l.flags |= 2048, ll(9, Ps.bind(null, l, o, c, r), void 0, null), Mt === null) throw Error(C(349));
      pe & 30 || tu(l, r, c);
    }
    return c;
  }
  function tu(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = he.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, he.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Ps(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Ys(r) && Qs(n);
  }
  function $s(n, r, l) {
    return l(function() {
      Ys(r) && Qs(n);
    });
  }
  function Ys(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Nr(n, l);
    } catch {
      return !0;
    }
  }
  function Qs(n) {
    var r = $a(n, 1);
    r !== null && wt(r, n, 1, -1);
  }
  function Is(n) {
    var r = Se();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: mr, lastRenderedState: n }, r.queue = n, n = n.dispatch = To.bind(null, he, n), [r.memoizedState, n];
  }
  function ll(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = he.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, he.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ws() {
    return fn().memoizedState;
  }
  function nu(n, r, l, o) {
    var c = Se();
    he.flags |= n, c.memoizedState = ll(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function ru(n, r, l, o) {
    var c = fn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Me !== null) {
      var h = Me.memoizedState;
      if (d = h.destroy, o !== null && Eo(o, h.deps)) {
        c.memoizedState = ll(r, l, d, o);
        return;
      }
    }
    he.flags |= n, c.memoizedState = ll(1 | r, l, d, o);
  }
  function Gs(n, r) {
    return nu(8390656, 8, n, r);
  }
  function Co(n, r) {
    return ru(2048, 8, n, r);
  }
  function Xs(n, r) {
    return ru(4, 2, n, r);
  }
  function Ks(n, r) {
    return ru(4, 4, n, r);
  }
  function qs(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Zs(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ru(4, 4, qs.bind(null, r, n), l);
  }
  function au() {
  }
  function ul(n, r) {
    var l = fn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Eo(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Js(n, r) {
    var l = fn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Eo(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function ec(n, r, l) {
    return pe & 21 ? (Nr(l, r) || (l = cs(), he.lanes |= l, pl |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, er = !0), n.memoizedState = l);
  }
  function td(n, r) {
    var l = at;
    at = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = go.transition;
    go.transition = {};
    try {
      n(!1), r();
    } finally {
      at = l, go.transition = o;
    }
  }
  function tc() {
    return fn().memoizedState;
  }
  function Lv(n, r, l) {
    var o = Wa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, nd(n)) iu(r, l);
    else if (l = bv(n, r, l, o), l !== null) {
      var c = on();
      wt(l, n, o, c), xi(l, r, o);
    }
  }
  function To(n, r, l) {
    var o = Wa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (nd(n)) iu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, E = d(h, l);
        if (c.hasEagerState = !0, c.eagerState = E, Nr(E, h)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Yt(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = bv(n, r, c, o), l !== null && (c = on(), wt(l, n, o, c), xi(l, r, o));
    }
  }
  function nd(n) {
    var r = n.alternate;
    return n === he || r !== null && r === he;
  }
  function iu(n, r) {
    Jl = hr = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function xi(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Iu(n, l);
    }
  }
  var Dn = { readContext: Hr, useCallback: wn, useContext: wn, useEffect: wn, useImperativeHandle: wn, useInsertionEffect: wn, useLayoutEffect: wn, useMemo: wn, useReducer: wn, useRef: wn, useState: wn, useDebugValue: wn, useDeferredValue: wn, useTransition: wn, useMutableSource: wn, useSyncExternalStore: wn, useId: wn, unstable_isNewReconciler: !1 }, yy = { readContext: Hr, useCallback: function(n, r) {
    return Se().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Hr, useEffect: Gs, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, nu(
      4194308,
      4,
      qs.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return nu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return nu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Se();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Se();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Lv.bind(null, he, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Se();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Is, useDebugValue: au, useDeferredValue: function(n) {
    return Se().memoizedState = n;
  }, useTransition: function() {
    var n = Is(!1), r = n[0];
    return n = td.bind(null, n[1]), Se().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = he, c = Se();
    if (yt) {
      if (l === void 0) throw Error(C(407));
      l = l();
    } else {
      if (l = r(), Mt === null) throw Error(C(349));
      pe & 30 || tu(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Gs($s.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, ll(9, Ps.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Se(), r = Mt.identifierPrefix;
    if (yt) {
      var l = Ba, o = cn;
      l = (o & ~(1 << 32 - br(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = So++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = my++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ht = {
    readContext: Hr,
    useCallback: ul,
    useContext: Hr,
    useEffect: Co,
    useImperativeHandle: Zs,
    useInsertionEffect: Xs,
    useLayoutEffect: Ks,
    useMemo: Js,
    useReducer: Ya,
    useRef: Ws,
    useState: function() {
      return Ya(mr);
    },
    useDebugValue: au,
    useDeferredValue: function(n) {
      var r = fn();
      return ec(r, Me.memoizedState, n);
    },
    useTransition: function() {
      var n = Ya(mr)[0], r = fn().memoizedState;
      return [n, r];
    },
    useMutableSource: eu,
    useSyncExternalStore: il,
    useId: tc,
    unstable_isNewReconciler: !1
  }, nc = { readContext: Hr, useCallback: ul, useContext: Hr, useEffect: Co, useImperativeHandle: Zs, useInsertionEffect: Xs, useLayoutEffect: Ks, useMemo: Js, useReducer: Fr, useRef: Ws, useState: function() {
    return Fr(mr);
  }, useDebugValue: au, useDeferredValue: function(n) {
    var r = fn();
    return Me === null ? r.memoizedState = n : ec(r, Me.memoizedState, n);
  }, useTransition: function() {
    var n = Fr(mr)[0], r = fn().memoizedState;
    return [n, r];
  }, useMutableSource: eu, useSyncExternalStore: il, useId: tc, unstable_isNewReconciler: !1 };
  function Jn(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function ol(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : oe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var sl = { isMounted: function(n) {
    return (n = n._reactInternals) ? ha(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = on(), c = Wa(n), d = Zn(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (wt(r, n, c, o), Hs(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = on(), c = Wa(n), d = Zn(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ri(n, d, c), r !== null && (wt(r, n, c, o), Hs(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = on(), o = Wa(n), c = Zn(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ri(n, c, o), r !== null && (wt(r, n, o, l), Hs(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !ro(l, o) || !ro(c, d) : !0;
  }
  function Mv(n, r, l) {
    var o = !1, c = ya, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Hr(d) : (c = Ct(r) ? Wn : Oe.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : ya), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = sl, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Uv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && sl.enqueueReplaceState(r, r.state, null);
  }
  function rd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, As(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Hr(d) : (d = Ct(r) ? Wn : Oe.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (ol(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && sl.enqueueReplaceState(c, c.state, null), Fs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function wi(n, r) {
    try {
      var l = "", o = r;
      do
        l += li(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function ad(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ro(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var zv = typeof WeakMap == "function" ? WeakMap : Map;
  function Av(n, r, l) {
    l = Zn(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      vc || (vc = !0, pd = o), Ro(n, r);
    }, l;
  }
  function Hv(n, r, l) {
    l = Zn(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ro(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ro(n, r), typeof o != "function" && (Br === null ? Br = /* @__PURE__ */ new Set([this]) : Br.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function xo(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new zv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = by.bind(null, n, r, l), r.then(n, n));
  }
  function Fv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function id(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Zn(-1, 1), r.tag = 2, Ri(l, r, 1))), l.lanes |= 1), n);
  }
  var Vv = Ne.ReactCurrentOwner, er = !1;
  function Ht(n, r, l, o) {
    r.child = n === null ? Dv(r, null, l, o) : Gl(r, n.child, l, o);
  }
  function lu(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Xl(r, c), o = j(n, r, l, o, d, c), l = Qt(), n !== null && !er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ft(n, r, c)) : (yt && l && Ns(r), r.flags |= 1, Ht(n, r, o, c), r.child);
  }
  function Di(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !gd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, rc(n, r, d, o, c)) : (n = Ec(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ro, l(h, o) && n.ref === r.ref) return Ft(n, r, c);
    }
    return r.flags |= 1, n = _i(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function rc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ro(d, o) && n.ref === r.ref) if (er = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (er = !0);
      else return r.lanes = n.lanes, Ft(n, r, c);
    }
    return Ve(n, r, l, o, c);
  }
  function tr(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(mu, nr), nr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tt(mu, nr), nr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, tt(mu, nr), nr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, tt(mu, nr), nr |= o;
    return Ht(n, r, c, l), r.child;
  }
  function cl(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ve(n, r, l, o, c) {
    var d = Ct(l) ? Wn : Oe.current;
    return d = Or(r, d), Xl(r, c), l = j(n, r, l, o, d, c), o = Qt(), n !== null && !er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ft(n, r, c)) : (yt && o && Ns(r), r.flags |= 1, Ht(n, r, l, c), r.child);
  }
  function wo(n, r, l, o, c) {
    if (Ct(l)) {
      var d = !0;
      _s(r);
    } else d = !1;
    if (Xl(r, c), r.stateNode === null) bo(n, r), Mv(r, l, o), rd(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, E = r.memoizedProps;
      h.props = E;
      var T = h.context, O = l.contextType;
      typeof O == "object" && O !== null ? O = Hr(O) : (O = Ct(l) ? Wn : Oe.current, O = Or(r, O));
      var P = l.getDerivedStateFromProps, Y = typeof P == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      Y || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (E !== o || T !== O) && Uv(r, h, o, O), Ti = !1;
      var B = r.memoizedState;
      h.state = B, Fs(r, o, h, c), T = r.memoizedState, E !== o || B !== T || Lt.current || Ti ? (typeof P == "function" && (ol(r, l, P, o), T = r.memoizedState), (E = Ti || Ov(r, l, E, o, B, T, O)) ? (Y || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), h.props = o, h.state = T, h.context = O, o = E) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, Kl(n, r), E = r.memoizedProps, O = r.type === r.elementType ? E : Jn(r.type, E), h.props = O, Y = r.pendingProps, B = h.context, T = l.contextType, typeof T == "object" && T !== null ? T = Hr(T) : (T = Ct(l) ? Wn : Oe.current, T = Or(r, T));
      var ae = l.getDerivedStateFromProps;
      (P = typeof ae == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (E !== Y || B !== T) && Uv(r, h, o, T), Ti = !1, B = r.memoizedState, h.state = B, Fs(r, o, h, c);
      var se = r.memoizedState;
      E !== Y || B !== se || Lt.current || Ti ? (typeof ae == "function" && (ol(r, l, ae, o), se = r.memoizedState), (O = Ti || Ov(r, l, O, o, B, se, T) || !1) ? (P || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, se, T), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, se, T)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || E === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = se), h.props = o, h.state = se, h.context = T, o = O) : (typeof h.componentDidUpdate != "function" || E === n.memoizedProps && B === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && B === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ac(n, r, l, o, d, c);
  }
  function ac(n, r, l, o, c, d) {
    cl(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && Cv(r, l, !1), Ft(n, r, d);
    o = r.stateNode, Vv.current = r;
    var E = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = Gl(r, n.child, null, d), r.child = Gl(r, null, E, d)) : Ht(n, r, E, d), r.memoizedState = o.state, c && Cv(r, l, !0), r.child;
  }
  function gy(n) {
    var r = n.stateNode;
    r.pendingContext ? Ei(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Ei(n, r.context, !1), Zf(n, r.containerInfo);
  }
  function jv(n, r, l, o, c) {
    return xt(), Xf(c), r.flags |= 256, Ht(n, r, l, o), r.child;
  }
  var Do = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fl(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Bv(n, r, l) {
    var o = r.pendingProps, c = Tt.current, d = !1, h = (r.flags & 128) !== 0, E;
    if ((E = h) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), tt(Tt, c & 1), n === null)
      return Os(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = Cc(h, o, 0, null), n = yl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = fl(l), r.memoizedState = Do, n) : ic(r, h));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return ld(n, r, h, o, E, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = _i(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = _i(E, d) : (d = yl(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? fl(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Do, o;
    }
    return d = n.child, n = d.sibling, o = _i(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function ic(n, r) {
    return r = Cc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function lc(n, r, l, o) {
    return o !== null && Xf(o), Gl(r, n.child, null, l), n = ic(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ld(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = ad(Error(C(422))), lc(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Cc({ mode: "visible", children: o.children }, c, 0, null), d = yl(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Gl(r, n.child, null, h), r.child.memoizedState = fl(h), r.memoizedState = Do, d);
    if (!(r.mode & 1)) return lc(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(C(419)), o = ad(d, o, void 0), lc(n, r, h, o);
    }
    if (E = (h & n.childLanes) !== 0, er || E) {
      if (o = Mt, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, $a(n, c), wt(o, n, c, -1));
      }
      return Oo(), o = ad(Error(C(421))), lc(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, qn = ua(c.nextSibling), pr = r, yt = !0, zr = null, n !== null && (Kn[xn++] = cn, Kn[xn++] = Ba, Kn[xn++] = Ur, cn = n.id, Ba = n.overflow, Ur = r), r = ic(r, o.children), r.flags |= 4096, r);
  }
  function Pv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), qf(n.return, r, l);
  }
  function uc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ud(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Ht(n, r, o.children, l), o = Tt.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Pv(n, l, r);
        else if (n.tag === 19) Pv(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (tt(Tt, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Vs(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), uc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Vs(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        uc(r, !0, l, null, d);
        break;
      case "together":
        uc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function bo(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ft(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), pl |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(C(153));
    if (r.child !== null) {
      for (n = r.child, l = _i(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = _i(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qa(n, r, l) {
    switch (r.tag) {
      case 3:
        gy(r), xt();
        break;
      case 5:
        Nv(r);
        break;
      case 1:
        Ct(r.type) && _s(r);
        break;
      case 4:
        Zf(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        tt(Pa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (tt(Tt, Tt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Bv(n, r, l) : (tt(Tt, Tt.current & 1), n = Ft(n, r, l), n !== null ? n.sibling : null);
        tt(Tt, Tt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ud(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), tt(Tt, Tt.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, tr(n, r, l);
    }
    return Ft(n, r, l);
  }
  var Sa, uu, ou, Vr;
  Sa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, uu = function() {
  }, ou = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, al(oa.current);
      var d = null;
      switch (l) {
        case "input":
          c = Yn(n, c), o = Yn(n, o), d = [];
          break;
        case "select":
          c = oe({}, c, { value: void 0 }), o = oe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = $i(n, c), o = $i(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = ks);
      }
      Tn(l, o);
      var h;
      l = null;
      for (O in c) if (!o.hasOwnProperty(O) && c.hasOwnProperty(O) && c[O] != null) if (O === "style") {
        var E = c[O];
        for (h in E) E.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (U.hasOwnProperty(O) ? d || (d = []) : (d = d || []).push(O, null));
      for (O in o) {
        var T = o[O];
        if (E = c != null ? c[O] : void 0, o.hasOwnProperty(O) && T !== E && (T != null || E != null)) if (O === "style") if (E) {
          for (h in E) !E.hasOwnProperty(h) || T && T.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in T) T.hasOwnProperty(h) && E[h] !== T[h] && (l || (l = {}), l[h] = T[h]);
        } else l || (d || (d = []), d.push(
          O,
          l
        )), l = T;
        else O === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(O, T)) : O === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(O, "" + T) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (U.hasOwnProperty(O) ? (T != null && O === "onScroll" && vt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(O, T));
      }
      l && (d = d || []).push("style", l);
      var O = d;
      (r.updateQueue = O) && (r.flags |= 4);
    }
  }, Vr = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ot(n, r) {
    if (!yt) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function bn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Sy(n, r, l) {
    var o = r.pendingProps;
    switch (Wf(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bn(r), null;
      case 1:
        return Ct(r.type) && Mr(), bn(r), null;
      case 3:
        return o = r.stateNode, Zl(), et(Lt), et(Oe), ed(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Ms(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, zr !== null && (vd(zr), zr = null))), uu(n, r), bn(r), null;
      case 5:
        Jf(r);
        var c = al(yo.current);
        if (l = r.type, n !== null && r.stateNode != null) ou(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(C(166));
            return bn(r), null;
          }
          if (n = al(oa.current), Ms(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[ma] = r, o[el] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                vt("cancel", o), vt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                vt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < uo.length; c++) vt(uo[c], o);
                break;
              case "source":
                vt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                vt(
                  "error",
                  o
                ), vt("load", o);
                break;
              case "details":
                vt("toggle", o);
                break;
              case "input":
                wr(o, d), vt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, vt("invalid", o);
                break;
              case "textarea":
                Jr(o, d), vt("invalid", o);
            }
            Tn(l, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var E = d[h];
              h === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && bs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && bs(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : U.hasOwnProperty(h) && E != null && h === "onScroll" && vt("scroll", o);
            }
            switch (l) {
              case "input":
                xr(o), La(o, d, !0);
                break;
              case "textarea":
                xr(o), pa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = ks);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ci(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[ma] = r, n[el] = o, Sa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Gt(l, o), l) {
                case "dialog":
                  vt("cancel", n), vt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  vt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < uo.length; c++) vt(uo[c], n);
                  c = o;
                  break;
                case "source":
                  vt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  vt(
                    "error",
                    n
                  ), vt("load", n), c = o;
                  break;
                case "details":
                  vt("toggle", n), c = o;
                  break;
                case "input":
                  wr(n, o), c = Yn(n, o), vt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = oe({}, o, { value: void 0 }), vt("invalid", n);
                  break;
                case "textarea":
                  Jr(n, o), c = $i(n, o), vt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Tn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? pt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Bu(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fi(n, T) : typeof T == "number" && fi(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (U.hasOwnProperty(d) ? T != null && d === "onScroll" && vt("scroll", n) : T != null && ye(n, d, T, h));
              }
              switch (l) {
                case "input":
                  xr(n), La(n, o, !1);
                  break;
                case "textarea":
                  xr(n), pa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + qr(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? oi(n, !!o.multiple, d, !1) : o.defaultValue != null && oi(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = ks);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return bn(r), null;
      case 6:
        if (n && r.stateNode != null) Vr(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(C(166));
          if (l = al(yo.current), al(oa.current), Ms(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[ma] = r, (d = o.nodeValue !== l) && (n = pr, n !== null)) switch (n.tag) {
              case 3:
                bs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && bs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[ma] = r, r.stateNode = o;
        }
        return bn(r), null;
      case 13:
        if (et(Tt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yt && qn !== null && r.mode & 1 && !(r.flags & 128)) xv(), xt(), r.flags |= 98560, d = !1;
          else if (d = Ms(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(C(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(C(317));
              d[ma] = r;
            } else xt(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            bn(r), d = !1;
          } else zr !== null && (vd(zr), zr = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Tt.current & 1 ? Zt === 0 && (Zt = 3) : Oo())), r.updateQueue !== null && (r.flags |= 4), bn(r), null);
      case 4:
        return Zl(), uu(n, r), n === null && Ql(r.stateNode.containerInfo), bn(r), null;
      case 10:
        return Kf(r.type._context), bn(r), null;
      case 17:
        return Ct(r.type) && Mr(), bn(r), null;
      case 19:
        if (et(Tt), d = r.memoizedState, d === null) return bn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) Ot(d, !1);
        else {
          if (Zt !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (h = Vs(n), h !== null) {
              for (r.flags |= 128, Ot(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return tt(Tt, Tt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Nt() > gu && (r.flags |= 128, o = !0, Ot(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Vs(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ot(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !yt) return bn(r), null;
          } else 2 * Nt() - d.renderingStartTime > gu && l !== 1073741824 && (r.flags |= 128, o = !0, Ot(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Nt(), r.sibling = null, l = Tt.current, tt(Tt, o ? l & 1 | 2 : l & 1), r) : (bn(r), null);
      case 22:
      case 23:
        return gc(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? nr & 1073741824 && (bn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : bn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(C(156, r.tag));
  }
  function Ey(n, r) {
    switch (Wf(r), r.tag) {
      case 1:
        return Ct(r.type) && Mr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Zl(), et(Lt), et(Oe), ed(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Jf(r), null;
      case 13:
        if (et(Tt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(C(340));
          xt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return et(Tt), null;
      case 4:
        return Zl(), null;
      case 10:
        return Kf(r.type._context), null;
      case 22:
      case 23:
        return gc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var su = !1, dn = !1, oc = typeof WeakSet == "function" ? WeakSet : Set, ue = null;
  function cu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Ut(n, r, o);
    }
    else l.current = null;
  }
  function od(n, r, l) {
    try {
      l();
    } catch (o) {
      Ut(n, r, o);
    }
  }
  var sc = !1;
  function Cy(n, r) {
    if (Vf = Wi, n = Ts(), Ha(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var h = 0, E = -1, T = -1, O = 0, P = 0, Y = n, B = null;
          t: for (; ; ) {
            for (var ae; Y !== l || c !== 0 && Y.nodeType !== 3 || (E = h + c), Y !== d || o !== 0 && Y.nodeType !== 3 || (T = h + o), Y.nodeType === 3 && (h += Y.nodeValue.length), (ae = Y.firstChild) !== null; )
              B = Y, Y = ae;
            for (; ; ) {
              if (Y === n) break t;
              if (B === l && ++O === c && (E = h), B === d && ++P === o && (T = h), (ae = Y.nextSibling) !== null) break;
              Y = B, B = Y.parentNode;
            }
            Y = ae;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Zi = { focusedElem: n, selectionRange: l }, Wi = !1, ue = r; ue !== null; ) if (r = ue, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ue = n;
    else for (; ue !== null; ) {
      r = ue;
      try {
        var se = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (se !== null) {
              var de = se.memoizedProps, Vt = se.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? de : Jn(r.type, de), Vt);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(C(163));
        }
      } catch (G) {
        Ut(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ue = n;
        break;
      }
      ue = r.return;
    }
    return se = sc, sc = !1, se;
  }
  function fu(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && od(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function cc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function $v(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, $v(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ma], delete r[el], delete r[Pf], delete r[hy], delete r[$f])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function sd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Yv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || sd(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ko(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = ks));
    else if (o !== 4 && (n = n.child, n !== null)) for (ko(n, r, l), n = n.sibling; n !== null; ) ko(n, r, l), n = n.sibling;
  }
  function du(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (du(n, r, l), n = n.sibling; n !== null; ) du(n, r, l), n = n.sibling;
  }
  var Rt = null, ln = !1;
  function On(n, r, l) {
    for (l = l.child; l !== null; ) pu(n, r, l), l = l.sibling;
  }
  function pu(n, r, l) {
    if (na && typeof na.onCommitFiberUnmount == "function") try {
      na.onCommitFiberUnmount(Qu, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        dn || cu(l, r);
      case 6:
        var o = Rt, c = ln;
        Rt = null, On(n, r, l), Rt = o, ln = c, Rt !== null && (ln ? (n = Rt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Rt.removeChild(l.stateNode));
        break;
      case 18:
        Rt !== null && (ln ? (n = Rt, l = l.stateNode, n.nodeType === 8 ? yi(n.parentNode, l) : n.nodeType === 1 && yi(n, l), Ku(n)) : yi(Rt, l.stateNode));
        break;
      case 4:
        o = Rt, c = ln, Rt = l.stateNode.containerInfo, ln = !0, On(n, r, l), Rt = o, ln = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && od(l, r, h), c = c.next;
          } while (c !== o);
        }
        On(n, r, l);
        break;
      case 1:
        if (!dn && (cu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Ut(l, r, E);
        }
        On(n, r, l);
        break;
      case 21:
        On(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (dn = (o = dn) || l.memoizedState !== null, On(n, r, l), dn = o) : On(n, r, l);
        break;
      default:
        On(n, r, l);
    }
  }
  function vu(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new oc()), r.forEach(function(o) {
        var c = ky.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function un(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, h = r, E = h;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Rt = E.stateNode, ln = !1;
              break e;
            case 3:
              Rt = E.stateNode.containerInfo, ln = !0;
              break e;
            case 4:
              Rt = E.stateNode.containerInfo, ln = !0;
              break e;
          }
          E = E.return;
        }
        if (Rt === null) throw Error(C(160));
        pu(d, h, c), Rt = null, ln = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (O) {
        Ut(c, r, O);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Qv(r, n), r = r.sibling;
  }
  function Qv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(r, n), Ea(n), o & 4) {
          try {
            fu(3, n, n.return), cc(3, n);
          } catch (de) {
            Ut(n, n.return, de);
          }
          try {
            fu(5, n, n.return);
          } catch (de) {
            Ut(n, n.return, de);
          }
        }
        break;
      case 1:
        un(r, n), Ea(n), o & 512 && l !== null && cu(l, l.return);
        break;
      case 5:
        if (un(r, n), Ea(n), o & 512 && l !== null && cu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fi(c, "");
          } catch (de) {
            Ut(n, n.return, de);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Zr(c, d), Gt(E, h);
            var O = Gt(E, d);
            for (h = 0; h < T.length; h += 2) {
              var P = T[h], Y = T[h + 1];
              P === "style" ? pt(c, Y) : P === "dangerouslySetInnerHTML" ? Bu(c, Y) : P === "children" ? fi(c, Y) : ye(c, P, Y, O);
            }
            switch (E) {
              case "input":
                sr(c, d);
                break;
              case "textarea":
                si(c, d);
                break;
              case "select":
                var B = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ae = d.value;
                ae != null ? oi(c, !!d.multiple, ae, !1) : B !== !!d.multiple && (d.defaultValue != null ? oi(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : oi(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[el] = d;
          } catch (de) {
            Ut(n, n.return, de);
          }
        }
        break;
      case 6:
        if (un(r, n), Ea(n), o & 4) {
          if (n.stateNode === null) throw Error(C(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (de) {
            Ut(n, n.return, de);
          }
        }
        break;
      case 3:
        if (un(r, n), Ea(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Ku(r.containerInfo);
        } catch (de) {
          Ut(n, n.return, de);
        }
        break;
      case 4:
        un(r, n), Ea(n);
        break;
      case 13:
        un(r, n), Ea(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (pc = Nt())), o & 4 && vu(n);
        break;
      case 22:
        if (P = l !== null && l.memoizedState !== null, n.mode & 1 ? (dn = (O = dn) || P, un(r, n), dn = O) : un(r, n), Ea(n), o & 8192) {
          if (O = n.memoizedState !== null, (n.stateNode.isHidden = O) && !P && n.mode & 1) for (ue = n, P = n.child; P !== null; ) {
            for (Y = ue = P; ue !== null; ) {
              switch (B = ue, ae = B.child, B.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fu(4, B, B.return);
                  break;
                case 1:
                  cu(B, B.return);
                  var se = B.stateNode;
                  if (typeof se.componentWillUnmount == "function") {
                    o = B, l = B.return;
                    try {
                      r = o, se.props = r.memoizedProps, se.state = r.memoizedState, se.componentWillUnmount();
                    } catch (de) {
                      Ut(o, l, de);
                    }
                  }
                  break;
                case 5:
                  cu(B, B.return);
                  break;
                case 22:
                  if (B.memoizedState !== null) {
                    Iv(Y);
                    continue;
                  }
              }
              ae !== null ? (ae.return = B, ue = ae) : Iv(Y);
            }
            P = P.sibling;
          }
          e: for (P = null, Y = n; ; ) {
            if (Y.tag === 5) {
              if (P === null) {
                P = Y;
                try {
                  c = Y.stateNode, O ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Y.stateNode, T = Y.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = $e("display", h));
                } catch (de) {
                  Ut(n, n.return, de);
                }
              }
            } else if (Y.tag === 6) {
              if (P === null) try {
                Y.stateNode.nodeValue = O ? "" : Y.memoizedProps;
              } catch (de) {
                Ut(n, n.return, de);
              }
            } else if ((Y.tag !== 22 && Y.tag !== 23 || Y.memoizedState === null || Y === n) && Y.child !== null) {
              Y.child.return = Y, Y = Y.child;
              continue;
            }
            if (Y === n) break e;
            for (; Y.sibling === null; ) {
              if (Y.return === null || Y.return === n) break e;
              P === Y && (P = null), Y = Y.return;
            }
            P === Y && (P = null), Y.sibling.return = Y.return, Y = Y.sibling;
          }
        }
        break;
      case 19:
        un(r, n), Ea(n), o & 4 && vu(n);
        break;
      case 21:
        break;
      default:
        un(
          r,
          n
        ), Ea(n);
    }
  }
  function Ea(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (sd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(C(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fi(c, ""), o.flags &= -33);
            var d = Yv(n);
            du(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, E = Yv(n);
            ko(n, E, h);
            break;
          default:
            throw Error(C(161));
        }
      } catch (T) {
        Ut(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ty(n, r, l) {
    ue = n, cd(n);
  }
  function cd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ue !== null; ) {
      var c = ue, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || su;
        if (!h) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || dn;
          E = su;
          var O = dn;
          if (su = h, (dn = T) && !O) for (ue = c; ue !== null; ) h = ue, T = h.child, h.tag === 22 && h.memoizedState !== null ? fd(c) : T !== null ? (T.return = h, ue = T) : fd(c);
          for (; d !== null; ) ue = d, cd(d), d = d.sibling;
          ue = c, su = E, dn = O;
        }
        hu(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ue = d) : hu(n);
    }
  }
  function hu(n) {
    for (; ue !== null; ) {
      var r = ue;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              dn || cc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !dn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Jn(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && _v(r, d, o);
              break;
            case 3:
              var h = r.updateQueue;
              if (h !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                _v(r, h, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var O = r.alternate;
                if (O !== null) {
                  var P = O.memoizedState;
                  if (P !== null) {
                    var Y = P.dehydrated;
                    Y !== null && Ku(Y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
          dn || r.flags & 512 && fc(r);
        } catch (B) {
          Ut(r, r.return, B);
        }
      }
      if (r === n) {
        ue = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ue = l;
        break;
      }
      ue = r.return;
    }
  }
  function Iv(n) {
    for (; ue !== null; ) {
      var r = ue;
      if (r === n) {
        ue = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ue = l;
        break;
      }
      ue = r.return;
    }
  }
  function fd(n) {
    for (; ue !== null; ) {
      var r = ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              cc(4, r);
            } catch (T) {
              Ut(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Ut(r, c, T);
              }
            }
            var d = r.return;
            try {
              fc(r);
            } catch (T) {
              Ut(r, d, T);
            }
            break;
          case 5:
            var h = r.return;
            try {
              fc(r);
            } catch (T) {
              Ut(r, h, T);
            }
        }
      } catch (T) {
        Ut(r, r.return, T);
      }
      if (r === n) {
        ue = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ue = E;
        break;
      }
      ue = r.return;
    }
  }
  var Ry = Math.ceil, dl = Ne.ReactCurrentDispatcher, dc = Ne.ReactCurrentOwner, jr = Ne.ReactCurrentBatchConfig, Qe = 0, Mt = null, gt = null, qt = 0, nr = 0, mu = je(0), Zt = 0, _o = null, pl = 0, yu = 0, dd = 0, bi = null, kn = null, pc = 0, gu = 1 / 0, Ia = null, vc = !1, pd = null, Br = null, Su = !1, Pr = null, hc = 0, No = 0, mc = null, Lo = -1, vl = 0;
  function on() {
    return Qe & 6 ? Nt() : Lo !== -1 ? Lo : Lo = Nt();
  }
  function Wa(n) {
    return n.mode & 1 ? Qe & 2 && qt !== 0 ? qt & -qt : Us.transition !== null ? (vl === 0 && (vl = cs()), vl) : (n = at, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Sf(n.type)), n) : 1;
  }
  function wt(n, r, l, o) {
    if (50 < No) throw No = 0, mc = null, Error(C(185));
    Ii(n, l, o), (!(Qe & 2) || n !== Mt) && (n === Mt && (!(Qe & 2) && (yu |= l), Zt === 4 && Ca(n, qt)), Jt(n, o), l === 1 && Qe === 0 && !(r.mode & 1) && (gu = Nt() + 500, an && Gn()));
  }
  function Jt(n, r) {
    var l = n.callbackNode;
    ss(n, r);
    var o = ra(n, n === Mt ? qt : 0);
    if (o === 0) l !== null && Op(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Op(l), r === 1) n.tag === 0 ? Qf(Eu.bind(null, n)) : Yf(Eu.bind(null, n)), Bf(function() {
        !(Qe & 6) && Gn();
      }), l = null;
      else {
        switch (mf(o)) {
          case 1:
            l = Ma;
            break;
          case 4:
            l = Ye;
            break;
          case 16:
            l = di;
            break;
          case 536870912:
            l = df;
            break;
          default:
            l = di;
        }
        l = eh(l, yc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function yc(n, r) {
    if (Lo = -1, vl = 0, Qe & 6) throw Error(C(327));
    var l = n.callbackNode;
    if (Cu() && n.callbackNode !== l) return null;
    var o = ra(n, n === Mt ? qt : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Sc(n, o);
    else {
      r = o;
      var c = Qe;
      Qe |= 2;
      var d = Gv();
      (Mt !== n || qt !== r) && (Ia = null, gu = Nt() + 500, ml(n, r));
      do
        try {
          wy();
          break;
        } catch (E) {
          Wv(n, E);
        }
      while (!0);
      vr(), dl.current = d, Qe = c, gt !== null ? r = 0 : (Mt = null, qt = 0, r = Zt);
    }
    if (r !== 0) {
      if (r === 2 && (c = vf(n), c !== 0 && (o = c, r = hl(n, c))), r === 1) throw l = _o, ml(n, 0), Ca(n, o), Jt(n, Nt()), l;
      if (r === 6) Ca(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !hd(c) && (r = Sc(n, o), r === 2 && (d = vf(n), d !== 0 && (o = d, r = hl(n, d))), r === 1)) throw l = _o, ml(n, 0), Ca(n, o), Jt(n, Nt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(C(345));
          case 2:
            ki(n, kn, Ia);
            break;
          case 3:
            if (Ca(n, o), (o & 130023424) === o && (r = pc + 500 - Nt(), 10 < r)) {
              if (ra(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                on(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ji(ki.bind(null, n, kn, Ia), r);
              break;
            }
            ki(n, kn, Ia);
            break;
          case 4:
            if (Ca(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - br(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = Nt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ry(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ji(ki.bind(null, n, kn, Ia), o);
              break;
            }
            ki(n, kn, Ia);
            break;
          case 5:
            ki(n, kn, Ia);
            break;
          default:
            throw Error(C(329));
        }
      }
    }
    return Jt(n, Nt()), n.callbackNode === l ? yc.bind(null, n) : null;
  }
  function hl(n, r) {
    var l = bi;
    return n.current.memoizedState.isDehydrated && (ml(n, r).flags |= 256), n = Sc(n, r), n !== 2 && (r = kn, kn = l, r !== null && vd(r)), n;
  }
  function vd(n) {
    kn === null ? kn = n : kn.push.apply(kn, n);
  }
  function hd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Nr(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ca(n, r) {
    for (r &= ~dd, r &= ~yu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - br(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Eu(n) {
    if (Qe & 6) throw Error(C(327));
    Cu();
    var r = ra(n, 0);
    if (!(r & 1)) return Jt(n, Nt()), null;
    var l = Sc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = vf(n);
      o !== 0 && (r = o, l = hl(n, o));
    }
    if (l === 1) throw l = _o, ml(n, 0), Ca(n, r), Jt(n, Nt()), l;
    if (l === 6) throw Error(C(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, ki(n, kn, Ia), Jt(n, Nt()), null;
  }
  function md(n, r) {
    var l = Qe;
    Qe |= 1;
    try {
      return n(r);
    } finally {
      Qe = l, Qe === 0 && (gu = Nt() + 500, an && Gn());
    }
  }
  function Ta(n) {
    Pr !== null && Pr.tag === 0 && !(Qe & 6) && Cu();
    var r = Qe;
    Qe |= 1;
    var l = jr.transition, o = at;
    try {
      if (jr.transition = null, at = 1, n) return n();
    } finally {
      at = o, jr.transition = l, Qe = r, !(Qe & 6) && Gn();
    }
  }
  function gc() {
    nr = mu.current, et(mu);
  }
  function ml(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ev(l)), gt !== null) for (l = gt.return; l !== null; ) {
      var o = l;
      switch (Wf(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Mr();
          break;
        case 3:
          Zl(), et(Lt), et(Oe), ed();
          break;
        case 5:
          Jf(o);
          break;
        case 4:
          Zl();
          break;
        case 13:
          et(Tt);
          break;
        case 19:
          et(Tt);
          break;
        case 10:
          Kf(o.type._context);
          break;
        case 22:
        case 23:
          gc();
      }
      l = l.return;
    }
    if (Mt = n, gt = n = _i(n.current, null), qt = nr = r, Zt = 0, _o = null, dd = yu = pl = 0, kn = bi = null, rl !== null) {
      for (r = 0; r < rl.length; r++) if (l = rl[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, o.next = h;
        }
        l.pending = o;
      }
      rl = null;
    }
    return n;
  }
  function Wv(n, r) {
    do {
      var l = gt;
      try {
        if (vr(), Bs.current = Dn, hr) {
          for (var o = he.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          hr = !1;
        }
        if (pe = 0, Pe = Me = he = null, Jl = !1, So = 0, dc.current = null, l === null || l.return === null) {
          Zt = 1, _o = r, gt = null;
          break;
        }
        e: {
          var d = n, h = l.return, E = l, T = r;
          if (r = qt, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var O = T, P = E, Y = P.tag;
            if (!(P.mode & 1) && (Y === 0 || Y === 11 || Y === 15)) {
              var B = P.alternate;
              B ? (P.updateQueue = B.updateQueue, P.memoizedState = B.memoizedState, P.lanes = B.lanes) : (P.updateQueue = null, P.memoizedState = null);
            }
            var ae = Fv(h);
            if (ae !== null) {
              ae.flags &= -257, id(ae, h, E, d, r), ae.mode & 1 && xo(d, O, r), r = ae, T = O;
              var se = r.updateQueue;
              if (se === null) {
                var de = /* @__PURE__ */ new Set();
                de.add(T), r.updateQueue = de;
              } else se.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                xo(d, O, r), Oo();
                break e;
              }
              T = Error(C(426));
            }
          } else if (yt && E.mode & 1) {
            var Vt = Fv(h);
            if (Vt !== null) {
              !(Vt.flags & 65536) && (Vt.flags |= 256), id(Vt, h, E, d, r), Xf(wi(T, E));
              break e;
            }
          }
          d = T = wi(T, E), Zt !== 4 && (Zt = 2), bi === null ? bi = [d] : bi.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Av(d, T, r);
                kv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Br === null || !Br.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Hv(d, E, r);
                  kv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Kv(l);
      } catch (ve) {
        r = ve, gt === l && l !== null && (gt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gv() {
    var n = dl.current;
    return dl.current = Dn, n === null ? Dn : n;
  }
  function Oo() {
    (Zt === 0 || Zt === 3 || Zt === 2) && (Zt = 4), Mt === null || !(pl & 268435455) && !(yu & 268435455) || Ca(Mt, qt);
  }
  function Sc(n, r) {
    var l = Qe;
    Qe |= 2;
    var o = Gv();
    (Mt !== n || qt !== r) && (Ia = null, ml(n, r));
    do
      try {
        xy();
        break;
      } catch (c) {
        Wv(n, c);
      }
    while (!0);
    if (vr(), Qe = l, dl.current = o, gt !== null) throw Error(C(261));
    return Mt = null, qt = 0, Zt;
  }
  function xy() {
    for (; gt !== null; ) Xv(gt);
  }
  function wy() {
    for (; gt !== null && !Wm(); ) Xv(gt);
  }
  function Xv(n) {
    var r = Jv(n.alternate, n, nr);
    n.memoizedProps = n.pendingProps, r === null ? Kv(n) : gt = r, dc.current = null;
  }
  function Kv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Ey(l, r), l !== null) {
          l.flags &= 32767, gt = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Zt = 6, gt = null;
          return;
        }
      } else if (l = Sy(l, r, nr), l !== null) {
        gt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        gt = r;
        return;
      }
      gt = r = n;
    } while (r !== null);
    Zt === 0 && (Zt = 5);
  }
  function ki(n, r, l) {
    var o = at, c = jr.transition;
    try {
      jr.transition = null, at = 1, Dy(n, r, l, o);
    } finally {
      jr.transition = c, at = o;
    }
    return null;
  }
  function Dy(n, r, l, o) {
    do
      Cu();
    while (Pr !== null);
    if (Qe & 6) throw Error(C(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(C(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (qm(n, d), n === Mt && (gt = Mt = null, qt = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Su || (Su = !0, eh(di, function() {
      return Cu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = jr.transition, jr.transition = null;
      var h = at;
      at = 1;
      var E = Qe;
      Qe |= 4, dc.current = null, Cy(n, l), Qv(l, n), Rs(Zi), Wi = !!Vf, Zi = Vf = null, n.current = l, Ty(l), Gm(), Qe = E, at = h, jr.transition = d;
    } else n.current = l;
    if (Su && (Su = !1, Pr = n, hc = c), d = n.pendingLanes, d === 0 && (Br = null), Up(l.stateNode), Jt(n, Nt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (vc) throw vc = !1, n = pd, pd = null, n;
    return hc & 1 && n.tag !== 0 && Cu(), d = n.pendingLanes, d & 1 ? n === mc ? No++ : (No = 0, mc = n) : No = 0, Gn(), null;
  }
  function Cu() {
    if (Pr !== null) {
      var n = mf(hc), r = jr.transition, l = at;
      try {
        if (jr.transition = null, at = 16 > n ? 16 : n, Pr === null) var o = !1;
        else {
          if (n = Pr, Pr = null, hc = 0, Qe & 6) throw Error(C(331));
          var c = Qe;
          for (Qe |= 4, ue = n.current; ue !== null; ) {
            var d = ue, h = d.child;
            if (ue.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var O = E[T];
                  for (ue = O; ue !== null; ) {
                    var P = ue;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fu(8, P, d);
                    }
                    var Y = P.child;
                    if (Y !== null) Y.return = P, ue = Y;
                    else for (; ue !== null; ) {
                      P = ue;
                      var B = P.sibling, ae = P.return;
                      if ($v(P), P === O) {
                        ue = null;
                        break;
                      }
                      if (B !== null) {
                        B.return = ae, ue = B;
                        break;
                      }
                      ue = ae;
                    }
                  }
                }
                var se = d.alternate;
                if (se !== null) {
                  var de = se.child;
                  if (de !== null) {
                    se.child = null;
                    do {
                      var Vt = de.sibling;
                      de.sibling = null, de = Vt;
                    } while (de !== null);
                  }
                }
                ue = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) h.return = d, ue = h;
            else e: for (; ue !== null; ) {
              if (d = ue, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  fu(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ue = D;
                break e;
              }
              ue = d.return;
            }
          }
          var x = n.current;
          for (ue = x; ue !== null; ) {
            h = ue;
            var N = h.child;
            if (h.subtreeFlags & 2064 && N !== null) N.return = h, ue = N;
            else e: for (h = x; ue !== null; ) {
              if (E = ue, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    cc(9, E);
                }
              } catch (ve) {
                Ut(E, E.return, ve);
              }
              if (E === h) {
                ue = null;
                break e;
              }
              var G = E.sibling;
              if (G !== null) {
                G.return = E.return, ue = G;
                break e;
              }
              ue = E.return;
            }
          }
          if (Qe = c, Gn(), na && typeof na.onPostCommitFiberRoot == "function") try {
            na.onPostCommitFiberRoot(Qu, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        at = l, jr.transition = r;
      }
    }
    return !1;
  }
  function qv(n, r, l) {
    r = wi(l, r), r = Av(n, r, 1), n = Ri(n, r, 1), r = on(), n !== null && (Ii(n, 1, r), Jt(n, r));
  }
  function Ut(n, r, l) {
    if (n.tag === 3) qv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        qv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Br === null || !Br.has(o))) {
          n = wi(l, n), n = Hv(r, n, 1), r = Ri(r, n, 1), n = on(), r !== null && (Ii(r, 1, n), Jt(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function by(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = on(), n.pingedLanes |= n.suspendedLanes & l, Mt === n && (qt & l) === l && (Zt === 4 || Zt === 3 && (qt & 130023424) === qt && 500 > Nt() - pc ? ml(n, 0) : dd |= l), Jt(n, r);
  }
  function Zv(n, r) {
    r === 0 && (n.mode & 1 ? (r = zl, zl <<= 1, !(zl & 130023424) && (zl = 4194304)) : r = 1);
    var l = on();
    n = $a(n, r), n !== null && (Ii(n, r, l), Jt(n, l));
  }
  function yd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Zv(n, l);
  }
  function ky(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(C(314));
    }
    o !== null && o.delete(r), Zv(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Lt.current) er = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return er = !1, Qa(n, r, l);
      er = !!(n.flags & 131072);
    }
    else er = !1, yt && r.flags & 1048576 && If(r, Wl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        bo(n, r), n = r.pendingProps;
        var c = Or(r, Oe.current);
        Xl(r, l), c = j(null, r, o, n, c, l);
        var d = Qt();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Ct(o) ? (d = !0, _s(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, As(r), c.updater = sl, r.stateNode = c, c._reactInternals = r, rd(r, o, n, l), r = ac(null, r, o, !0, d, l)) : (r.tag = 0, yt && d && Ns(r), Ht(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (bo(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = _y(o), n = Jn(o, n), c) {
            case 0:
              r = Ve(null, r, o, n, l);
              break e;
            case 1:
              r = wo(null, r, o, n, l);
              break e;
            case 11:
              r = lu(null, r, o, n, l);
              break e;
            case 14:
              r = Di(null, r, o, Jn(o.type, n), l);
              break e;
          }
          throw Error(C(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jn(o, c), Ve(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jn(o, c), wo(n, r, o, c, l);
      case 3:
        e: {
          if (gy(r), n === null) throw Error(C(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Kl(n, r), Fs(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = wi(Error(C(423)), r), r = jv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = wi(Error(C(424)), r), r = jv(n, r, o, l, c);
            break e;
          } else for (qn = ua(r.stateNode.containerInfo.firstChild), pr = r, yt = !0, zr = null, l = Dv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (xt(), o === c) {
              r = Ft(n, r, l);
              break e;
            }
            Ht(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Nv(r), n === null && Os(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, co(o, c) ? h = null : d !== null && co(o, d) && (r.flags |= 32), cl(n, r), Ht(n, r, h, l), r.child;
      case 6:
        return n === null && Os(r), null;
      case 13:
        return Bv(n, r, l);
      case 4:
        return Zf(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Gl(r, null, o, l) : Ht(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jn(o, c), lu(n, r, o, c, l);
      case 7:
        return Ht(n, r, r.pendingProps, l), r.child;
      case 8:
        return Ht(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Ht(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, tt(Pa, o._currentValue), o._currentValue = h, d !== null) if (Nr(d.value, h)) {
            if (d.children === c.children && !Lt.current) {
              r = Ft(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              h = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Zn(-1, l & -l), T.tag = 2;
                    var O = d.updateQueue;
                    if (O !== null) {
                      O = O.shared;
                      var P = O.pending;
                      P === null ? T.next = T : (T.next = P.next, P.next = T), O.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), qf(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) h = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (h = d.return, h === null) throw Error(C(341));
              h.lanes |= l, E = h.alternate, E !== null && (E.lanes |= l), qf(h, l, r), h = d.sibling;
            } else h = d.child;
            if (h !== null) h.return = d;
            else for (h = d; h !== null; ) {
              if (h === r) {
                h = null;
                break;
              }
              if (d = h.sibling, d !== null) {
                d.return = h.return, h = d;
                break;
              }
              h = h.return;
            }
            d = h;
          }
          Ht(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Xl(r, l), c = Hr(c), o = o(c), r.flags |= 1, Ht(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Jn(o, r.pendingProps), c = Jn(o.type, c), Di(n, r, o, c, l);
      case 15:
        return rc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jn(o, c), bo(n, r), r.tag = 1, Ct(o) ? (n = !0, _s(r)) : n = !1, Xl(r, l), Mv(r, o, c), rd(r, o, c, l), ac(null, r, o, !0, n, l);
      case 19:
        return ud(n, r, l);
      case 22:
        return tr(n, r, l);
    }
    throw Error(C(156, r.tag));
  };
  function eh(n, r) {
    return ff(n, r);
  }
  function th(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $r(n, r, l, o) {
    return new th(n, r, l, o);
  }
  function gd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function _y(n) {
    if (typeof n == "function") return gd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Pn) return 11;
      if (n === Tr) return 14;
    }
    return 2;
  }
  function _i(n, r) {
    var l = n.alternate;
    return l === null ? (l = $r(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Ec(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") gd(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case Be:
        return yl(l.children, c, d, r);
      case Wt:
        h = 8, c |= 8;
        break;
      case _n:
        return n = $r(12, l, r, c | 2), n.elementType = _n, n.lanes = d, n;
      case We:
        return n = $r(13, l, r, c), n.elementType = We, n.lanes = d, n;
      case ut:
        return n = $r(19, l, r, c), n.elementType = ut, n.lanes = d, n;
      case Rr:
        return Cc(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Et:
            h = 10;
            break e;
          case lt:
            h = 9;
            break e;
          case Pn:
            h = 11;
            break e;
          case Tr:
            h = 14;
            break e;
          case bt:
            h = 16, o = null;
            break e;
        }
        throw Error(C(130, n == null ? n : typeof n, ""));
    }
    return r = $r(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function yl(n, r, l, o) {
    return n = $r(7, n, o, r), n.lanes = l, n;
  }
  function Cc(n, r, l, o) {
    return n = $r(22, n, o, r), n.elementType = Rr, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Tc(n, r, l) {
    return n = $r(6, n, null, r), n.lanes = l, n;
  }
  function Mo(n, r, l) {
    return r = $r(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Uo(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hf(0), this.expirationTimes = hf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Sd(n, r, l, o, c, d, h, E, T) {
    return n = new Uo(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = $r(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, As(d), n;
  }
  function nh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: dt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Ed(n) {
    if (!n) return ya;
    n = n._reactInternals;
    e: {
      if (ha(n) !== n || n.tag !== 1) throw Error(C(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Ct(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(C(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Ct(l)) return vo(n, l, r);
    }
    return r;
  }
  function Cd(n, r, l, o, c, d, h, E, T) {
    return n = Sd(l, o, !0, n, c, d, h, E, T), n.context = Ed(null), l = n.current, o = on(), c = Wa(l), d = Zn(o, c), d.callback = r ?? null, Ri(l, d, c), n.current.lanes = c, Ii(n, c, o), Jt(n, o), n;
  }
  function Rc(n, r, l, o) {
    var c = r.current, d = on(), h = Wa(c);
    return l = Ed(l), r.context === null ? r.context = l : r.pendingContext = l, r = Zn(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ri(c, r, h), n !== null && (wt(n, c, h, d), Hs(n, c, h)), h;
  }
  function zo(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function rh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Td(n, r) {
    rh(n, r), (n = n.alternate) && rh(n, r);
  }
  function Ny() {
    return null;
  }
  var Rd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function xc(n) {
    this._internalRoot = n;
  }
  Ao.prototype.render = xc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(C(409));
    Rc(n, r, null, null);
  }, Ao.prototype.unmount = xc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ta(function() {
        Rc(null, n, null, null);
      }), r[ja] = null;
    }
  };
  function Ao(n) {
    this._internalRoot = n;
  }
  Ao.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Fp();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < st.length && r !== 0 && r < st[l].priority; l++) ;
      st.splice(l, 0, n), l === 0 && Vp(n);
    }
  };
  function Ni(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function wc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ah() {
  }
  function Ly(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var O = zo(h);
          d.call(O);
        };
      }
      var h = Cd(r, o, n, 0, null, !1, !1, "", ah);
      return n._reactRootContainer = h, n[ja] = h.current, Ql(n.nodeType === 8 ? n.parentNode : n), Ta(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var O = zo(T);
        E.call(O);
      };
    }
    var T = Sd(n, 0, !1, null, null, !1, !1, "", ah);
    return n._reactRootContainer = T, n[ja] = T.current, Ql(n.nodeType === 8 ? n.parentNode : n), Ta(function() {
      Rc(r, T, l, o);
    }), T;
  }
  function Dc(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = zo(h);
          E.call(T);
        };
      }
      Rc(r, h, n, c);
    } else h = Ly(l, r, n, c, o);
    return zo(h);
  }
  Hp = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Qi(r.pendingLanes);
          l !== 0 && (Iu(r, l | 1), Jt(r, Nt()), !(Qe & 6) && (gu = Nt() + 500, Gn()));
        }
        break;
      case 13:
        Ta(function() {
          var o = $a(n, 1);
          if (o !== null) {
            var c = on();
            wt(o, n, 1, c);
          }
        }), Td(n, 1);
    }
  }, fs = function(n) {
    if (n.tag === 13) {
      var r = $a(n, 134217728);
      if (r !== null) {
        var l = on();
        wt(r, n, 134217728, l);
      }
      Td(n, 134217728);
    }
  }, it = function(n) {
    if (n.tag === 13) {
      var r = Wa(n), l = $a(n, r);
      if (l !== null) {
        var o = on();
        wt(l, n, r, o);
      }
      Td(n, r);
    }
  }, Fp = function() {
    return at;
  }, yf = function(n, r) {
    var l = at;
    try {
      return at = n, r();
    } finally {
      at = l;
    }
  }, va = function(n, r, l) {
    switch (r) {
      case "input":
        if (sr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Te(o);
              if (!c) throw Error(C(90));
              Na(o), sr(o, c);
            }
          }
        }
        break;
      case "textarea":
        si(n, l);
        break;
      case "select":
        r = l.value, r != null && oi(n, !!l.multiple, r, !1);
    }
  }, kp = md, _p = Ta;
  var Oy = { usingClientEntryPoint: !1, Events: [po, Il, Te, as, is, md] }, Ho = { findFiberByHostInstance: Lr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ih = { bundleType: Ho.bundleType, version: Ho.version, rendererPackageName: Ho.rendererPackageName, rendererConfig: Ho.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Np(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ho.findFiberByHostInstance || Ny, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bc.isDisabled && bc.supportsFiber) try {
      Qu = bc.inject(ih), na = bc;
    } catch {
    }
  }
  return Xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy, Xr.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ni(r)) throw Error(C(200));
    return nh(n, r, null, l);
  }, Xr.createRoot = function(n, r) {
    if (!Ni(n)) throw Error(C(299));
    var l = !1, o = "", c = Rd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Sd(n, 1, !1, null, null, l, !1, o, c), n[ja] = r.current, Ql(n.nodeType === 8 ? n.parentNode : n), new xc(r);
  }, Xr.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(C(188)) : (n = Object.keys(n).join(","), Error(C(268, n)));
    return n = Np(r), n = n === null ? null : n.stateNode, n;
  }, Xr.flushSync = function(n) {
    return Ta(n);
  }, Xr.hydrate = function(n, r, l) {
    if (!wc(r)) throw Error(C(200));
    return Dc(null, n, r, !0, l);
  }, Xr.hydrateRoot = function(n, r, l) {
    if (!Ni(n)) throw Error(C(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Rd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = Cd(r, null, n, 1, l ?? null, c, !1, d, h), n[ja] = r.current, Ql(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Ao(r);
  }, Xr.render = function(n, r, l) {
    if (!wc(r)) throw Error(C(200));
    return Dc(null, n, r, !1, l);
  }, Xr.unmountComponentAtNode = function(n) {
    if (!wc(n)) throw Error(C(40));
    return n._reactRootContainer ? (Ta(function() {
      Dc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ja] = null;
      });
    }), !0) : !1;
  }, Xr.unstable_batchedUpdates = md, Xr.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!wc(l)) throw Error(C(200));
    if (n == null || n._reactInternals === void 0) throw Error(C(38));
    return Dc(n, r, l, !1, o);
  }, Xr.version = "18.3.1-next-f1338f8080-20240426", Xr;
}
var Kr = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ST;
function Lk() {
  return ST || (ST = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var g = _0, b = DT(), C = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, F = !1;
    function U(e) {
      F = e;
    }
    function I(e) {
      if (!F) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ne("warn", e, a);
      }
    }
    function y(e) {
      if (!F) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ne("error", e, a);
      }
    }
    function ne(e, t, a) {
      {
        var i = C.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $ = 0, V = 1, Ee = 2, W = 3, q = 4, re = 5, ge = 6, ke = 7, Ce = 8, Je = 9, Ue = 10, ye = 11, Ne = 12, He = 13, dt = 14, Be = 15, Wt = 16, _n = 17, Et = 18, lt = 19, Pn = 21, We = 22, ut = 23, Tr = 24, bt = 25, Rr = !0, Z = !1, _e = !1, oe = !1, rt = !1, ot = !0, $n = !1, or = !0, li = !0, Nn = !0, ui = !0, qr = /* @__PURE__ */ new Set(), da = {}, ju = {};
    function xr(e, t) {
      Na(e, t), Na(e + "Capture", t);
    }
    function Na(e, t) {
      da[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), da[e] = t;
      {
        var a = e.toLowerCase();
        ju[a] = e, e === "onDoubleClick" && (ju.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        qr.add(t[i]);
    }
    var Cn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Yn = Object.prototype.hasOwnProperty;
    function wr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Zr(e) {
      try {
        return sr(e), !1;
      } catch {
        return !0;
      }
    }
    function sr(e) {
      return "" + e;
    }
    function La(e, t) {
      if (Zr(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wr(e)), sr(e);
    }
    function Nl(e) {
      if (Zr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(e)), sr(e);
    }
    function Pi(e, t) {
      if (Zr(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wr(e)), sr(e);
    }
    function oi(e, t) {
      if (Zr(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, wr(e)), sr(e);
    }
    function $i(e) {
      if (Zr(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", wr(e)), sr(e);
    }
    function Jr(e) {
      if (Zr(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", wr(e)), sr(e);
    }
    var si = 0, pa = 1, ci = 2, Qn = 3, ea = 4, Bu = 5, fi = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", $e = new RegExp("^[" + ee + "][" + xe + "]*$"), pt = {}, At = {};
    function Tn(e) {
      return Yn.call(At, e) ? !0 : Yn.call(pt, e) ? !1 : $e.test(e) ? (At[e] = !0, !0) : (pt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Gt(e, t, a) {
      return t !== null ? t.type === si : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Dr(e, t, a, i) {
      if (a !== null && a.type === si)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function kt(e, t, a, i) {
      if (t === null || typeof t > "u" || Dr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Qn:
            return !t;
          case ea:
            return t === !1;
          case Bu:
            return isNaN(t);
          case fi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function va(e) {
      return _t.hasOwnProperty(e) ? _t[e] : null;
    }
    function Bt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ci || t === Qn || t === ea, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var _t = {}, bp = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    bp.forEach(function(e) {
      _t[e] = new Bt(
        e,
        si,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      _t[t] = new Bt(
        t,
        pa,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      _t[e] = new Bt(
        e,
        ci,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      _t[e] = new Bt(
        e,
        ci,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      _t[e] = new Bt(
        e,
        Qn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      _t[e] = new Bt(
        e,
        Qn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      _t[e] = new Bt(
        e,
        ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      _t[e] = new Bt(
        e,
        fi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      _t[e] = new Bt(
        e,
        Bu,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var as = /[\-\:]([a-z])/g, is = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(as, is);
      _t[t] = new Bt(
        t,
        pa,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(as, is);
      _t[t] = new Bt(
        t,
        pa,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(as, is);
      _t[t] = new Bt(
        t,
        pa,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      _t[e] = new Bt(
        e,
        pa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var kp = "xlinkHref";
    _t[kp] = new Bt(
      "xlinkHref",
      pa,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      _t[e] = new Bt(
        e,
        pa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var _p = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ls = !1;
    function of(e) {
      !ls && _p.test(e) && (ls = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Pu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        La(a, t), i.sanitizeURL && of("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ea) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : kt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (kt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Qn)
            return a;
          f = e.getAttribute(s);
        }
        return kt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function us(e, t, a, i) {
      {
        if (!Tn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return La(a, t), u === "" + a ? a : u;
      }
    }
    function Yi(e, t, a, i) {
      var u = va(t);
      if (!Gt(t, u, i)) {
        if (kt(t, a, u, i) && (a = null), i || u === null) {
          if (Tn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (La(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Qn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, S = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var w = u.type, R;
          w === Qn || w === ea && a === !0 ? R = "" : (La(a, m), R = "" + a, u.sanitizeURL && of(R.toString())), S ? e.setAttributeNS(S, m, R) : e.setAttribute(m, R);
        }
      }
    }
    var Ll = Symbol.for("react.element"), ta = Symbol.for("react.portal"), Oa = Symbol.for("react.fragment"), Ol = Symbol.for("react.strict_mode"), $u = Symbol.for("react.profiler"), sf = Symbol.for("react.provider"), cf = Symbol.for("react.context"), Ml = Symbol.for("react.forward_ref"), ha = Symbol.for("react.suspense"), Yu = Symbol.for("react.suspense_list"), Ul = Symbol.for("react.memo"), Ln = Symbol.for("react.lazy"), Np = Symbol.for("react.scope"), Lp = Symbol.for("react.debug_trace_mode"), ff = Symbol.for("react.offscreen"), Op = Symbol.for("react.legacy_hidden"), Wm = Symbol.for("react.cache"), Gm = Symbol.for("react.tracing_marker"), Nt = Symbol.iterator, Xm = "@@iterator";
    function Ma(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Nt && e[Nt] || e[Xm];
      return typeof t == "function" ? t : null;
    }
    var Ye = Object.assign, di = 0, Mp, df, Qu, na, Up, br, zp;
    function Ap() {
    }
    Ap.__reactDisabledLog = !0;
    function Km() {
      {
        if (di === 0) {
          Mp = console.log, df = console.info, Qu = console.warn, na = console.error, Up = console.group, br = console.groupCollapsed, zp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ap,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function os() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ye({}, e, {
              value: Mp
            }),
            info: Ye({}, e, {
              value: df
            }),
            warn: Ye({}, e, {
              value: Qu
            }),
            error: Ye({}, e, {
              value: na
            }),
            group: Ye({}, e, {
              value: Up
            }),
            groupCollapsed: Ye({}, e, {
              value: br
            }),
            groupEnd: Ye({}, e, {
              value: zp
            })
          });
        }
        di < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zl = C.ReactCurrentDispatcher, Qi;
    function ra(e, t, a) {
      {
        if (Qi === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Qi = i && i[1] || "";
          }
        return `
` + Qi + e;
      }
    }
    var pf = !1, ss;
    {
      var vf = typeof WeakMap == "function" ? WeakMap : Map;
      ss = new vf();
    }
    function cs(e, t) {
      if (!e || pf)
        return "";
      {
        var a = ss.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pf = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = zl.current, zl.current = null, Km();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (M) {
              i = M;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (M) {
              i = M;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            i = M;
          }
          e();
        }
      } catch (M) {
        if (M && i && typeof M.stack == "string") {
          for (var p = M.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, S = v.length - 1; m >= 1 && S >= 0 && p[m] !== v[S]; )
            S--;
          for (; m >= 1 && S >= 0; m--, S--)
            if (p[m] !== v[S]) {
              if (m !== 1 || S !== 1)
                do
                  if (m--, S--, S < 0 || p[m] !== v[S]) {
                    var w = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && ss.set(e, w), w;
                  }
                while (m >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        pf = !1, zl.current = s, os(), Error.prepareStackTrace = u;
      }
      var R = e ? e.displayName || e.name : "", L = R ? ra(R) : "";
      return typeof e == "function" && ss.set(e, L), L;
    }
    function hf(e, t, a) {
      return cs(e, !0);
    }
    function Ii(e, t, a) {
      return cs(e, !1);
    }
    function qm(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Iu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return cs(e, qm(e));
      if (typeof e == "string")
        return ra(e);
      switch (e) {
        case ha:
          return ra("Suspense");
        case Yu:
          return ra("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ml:
            return Ii(e.render);
          case Ul:
            return Iu(e.type, t, a);
          case Ln: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Iu(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function at(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case re:
          return ra(e.type);
        case Wt:
          return ra("Lazy");
        case He:
          return ra("Suspense");
        case lt:
          return ra("SuspenseList");
        case $:
        case Ee:
        case Be:
          return Ii(e.type);
        case ye:
          return Ii(e.type.render);
        case V:
          return hf(e.type);
        default:
          return "";
      }
    }
    function mf(e) {
      try {
        var t = "", a = e;
        do
          t += at(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Hp(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function fs(e) {
      return e.displayName || "Context";
    }
    function it(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Oa:
          return "Fragment";
        case ta:
          return "Portal";
        case $u:
          return "Profiler";
        case Ol:
          return "StrictMode";
        case ha:
          return "Suspense";
        case Yu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case cf:
            var t = e;
            return fs(t) + ".Consumer";
          case sf:
            var a = e;
            return fs(a._context) + ".Provider";
          case Ml:
            return Hp(e, e.render, "ForwardRef");
          case Ul:
            var i = e.displayName || null;
            return i !== null ? i : it(e.type) || "Memo";
          case Ln: {
            var u = e, s = u._payload, f = u._init;
            try {
              return it(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Fp(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function yf(e) {
      return e.displayName || "Context";
    }
    function Fe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Tr:
          return "Cache";
        case Je:
          var i = a;
          return yf(i) + ".Consumer";
        case Ue:
          var u = a;
          return yf(u._context) + ".Provider";
        case Et:
          return "DehydratedFragment";
        case ye:
          return Fp(a, a.render, "ForwardRef");
        case ke:
          return "Fragment";
        case re:
          return a;
        case q:
          return "Portal";
        case W:
          return "Root";
        case ge:
          return "Text";
        case Wt:
          return it(a);
        case Ce:
          return a === Ol ? "StrictMode" : "Mode";
        case We:
          return "Offscreen";
        case Ne:
          return "Profiler";
        case Pn:
          return "Scope";
        case He:
          return "Suspense";
        case lt:
          return "SuspenseList";
        case bt:
          return "TracingMarker";
        case V:
        case $:
        case _n:
        case Ee:
        case dt:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Wu = C.ReactDebugCurrentFrame, Pt = null, kr = !1;
    function _r() {
      {
        if (Pt === null)
          return null;
        var e = Pt._debugOwner;
        if (e !== null && typeof e < "u")
          return Fe(e);
      }
      return null;
    }
    function Gu() {
      return Pt === null ? "" : mf(Pt);
    }
    function Xt() {
      Wu.getCurrentStack = null, Pt = null, kr = !1;
    }
    function st(e) {
      Wu.getCurrentStack = e === null ? null : Gu, Pt = e, kr = !1;
    }
    function Zm() {
      return Pt;
    }
    function aa(e) {
      kr = e;
    }
    function Rn(e) {
      return "" + e;
    }
    function pi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Jr(e), e;
        default:
          return "";
      }
    }
    var Vp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Al(e, t) {
      Vp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function gf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function jp(e) {
      return e._valueTracker;
    }
    function Xu(e) {
      e._valueTracker = null;
    }
    function Ku(e) {
      var t = "";
      return e && (gf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Hl(e) {
      var t = gf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Jr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Jr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Jr(p), i = "" + p;
          },
          stopTracking: function() {
            Xu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Wi(e) {
      jp(e) || (e._valueTracker = Hl(e));
    }
    function Bp(e) {
      if (!e)
        return !1;
      var t = jp(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ku(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ds(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ps = !1, qu = !1, vs = !1, Sf = !1;
    function Ua(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Zu(e, t) {
      var a = e, i = t.checked, u = Ye({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Ju(e, t) {
      Al("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !qu && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component", t.type), qu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ps && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component", t.type), ps = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: pi(t.value != null ? t.value : i),
        controlled: Ua(t)
      };
    }
    function Ef(e, t) {
      var a = e, i = t.checked;
      i != null && Yi(a, "checked", i, !1);
    }
    function Fl(e, t) {
      var a = e;
      {
        var i = Ua(t);
        !a._wrapperState.controlled && i && !Sf && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Sf = !0), a._wrapperState.controlled && !i && !vs && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vs = !0);
      }
      Ef(e, t);
      var u = pi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Rn(u)) : a.value !== Rn(u) && (a.value = Rn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? vi(a, t.type, u) : t.hasOwnProperty("defaultValue") && vi(a, t.type, pi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function eo(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Rn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Pp(e, t) {
      var a = e;
      Fl(a, t), cr(a, t);
    }
    function cr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        La(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Th(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Bp(f), Fl(f, p);
          }
        }
      }
    }
    function vi(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ds(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Rn(e._wrapperState.initialValue) : e.defaultValue !== Rn(a) && (e.defaultValue = Rn(a)));
    }
    var hs = !1, Vl = !1, $p = !1;
    function ms(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? g.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Vl || (Vl = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && ($p || ($p = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !hs && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), hs = !0);
    }
    function Cf(e, t) {
      t.value != null && e.setAttribute("value", Rn(pi(t.value)));
    }
    var to = Array.isArray;
    function nn(e) {
      return to(e);
    }
    var ys;
    ys = !1;
    function Yp() {
      var e = _r();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Qp = ["value", "defaultValue"];
    function Jm(e) {
      {
        Al("select", e);
        for (var t = 0; t < Qp.length; t++) {
          var a = Qp[t];
          if (e[a] != null) {
            var i = nn(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Yp()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Yp());
          }
        }
      }
    }
    function hi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var S = Rn(pi(a)), w = null, R = 0; R < u.length; R++) {
          if (u[R].value === S) {
            u[R].selected = !0, i && (u[R].defaultSelected = !0);
            return;
          }
          w === null && !u[R].disabled && (w = u[R]);
        }
        w !== null && (w.selected = !0);
      }
    }
    function Tf(e, t) {
      return Ye({}, t, {
        value: void 0
      });
    }
    function Ip(e, t) {
      var a = e;
      Jm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ys && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ys = !0);
    }
    function ey(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? hi(a, !!t.multiple, i, !1) : t.defaultValue != null && hi(a, !!t.multiple, t.defaultValue, !0);
    }
    function ty(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? hi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? hi(a, !!t.multiple, t.defaultValue, !0) : hi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ny(e, t) {
      var a = e, i = t.value;
      i != null && hi(a, !!t.multiple, i, !1);
    }
    var Rf = !1;
    function xf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ye({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Rn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Wp(e, t) {
      var a = e;
      Al("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Rf && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", _r() || "A component"), Rf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (nn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: pi(i)
      };
    }
    function Gp(e, t) {
      var a = e, i = pi(t.value), u = pi(t.defaultValue);
      if (i != null) {
        var s = Rn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Rn(u));
    }
    function Xp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function wf(e, t) {
      Gp(e, t);
    }
    var za = "http://www.w3.org/1999/xhtml", ry = "http://www.w3.org/1998/Math/MathML", Df = "http://www.w3.org/2000/svg";
    function gs(e) {
      switch (e) {
        case "svg":
          return Df;
        case "math":
          return ry;
        default:
          return za;
      }
    }
    function bf(e, t) {
      return e == null || e === za ? gs(t) : e === Df && t === "foreignObject" ? za : e;
    }
    var ay = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Ss, Kp = ay(function(e, t) {
      if (e.namespaceURI === Df && !("innerHTML" in e)) {
        Ss = Ss || document.createElement("div"), Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ss.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), In = 1, Aa = 3, $t = 8, ia = 9, Gi = 11, Es = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Aa) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, jl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Zp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Jp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(jl).forEach(function(e) {
      Jp.forEach(function(t) {
        jl[Zp(t, e)] = jl[e];
      });
    });
    function Cs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(jl.hasOwnProperty(e) && jl[e]) ? t + "px" : (oi(t, e), ("" + t).trim());
    }
    var Bl = /([A-Z])/g, iy = /^ms-/;
    function ly(e) {
      return e.replace(Bl, "-$1").toLowerCase().replace(iy, "-ms-");
    }
    var ev = function() {
    };
    {
      var tv = /^(?:webkit|moz|o)[A-Z]/, nv = /^-ms-/, no = /-(.)/g, Pl = /;\s*$/, $l = {}, Yl = {}, rv = !1, kf = !1, _f = function(e) {
        return e.replace(no, function(t, a) {
          return a.toUpperCase();
        });
      }, Nf = function(e) {
        $l.hasOwnProperty(e) && $l[e] || ($l[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          _f(e.replace(nv, "ms-"))
        ));
      }, av = function(e) {
        $l.hasOwnProperty(e) && $l[e] || ($l[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, iv = function(e, t) {
        Yl.hasOwnProperty(t) && Yl[t] || (Yl[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Pl, "")));
      }, lv = function(e, t) {
        rv || (rv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, uy = function(e, t) {
        kf || (kf = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ev = function(e, t) {
        e.indexOf("-") > -1 ? Nf(e) : tv.test(e) ? av(e) : Pl.test(t) && iv(e, t), typeof t == "number" && (isNaN(t) ? lv(e, t) : isFinite(t) || uy(e, t));
      };
    }
    var oy = ev;
    function sy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : ly(i)) + ":", t += Cs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function uv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || oy(i, t[i]);
          var s = Cs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function cy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Nr(e) {
      var t = {};
      for (var a in e)
        for (var i = qp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ro(e, t) {
      {
        if (!t)
          return;
        var a = Nr(e), i = Nr(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", cy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ov = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, sv = Ye({
      menuitem: !0
    }, ov), cv = "__html";
    function Ts(e, t) {
      if (t) {
        if (sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(cv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ha(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Rs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, fv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, la = {}, Lf = new RegExp("^(aria)-[" + xe + "]*$"), ao = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function Of(e, t) {
      {
        if (Yn.call(la, t) && la[t])
          return !0;
        if (ao.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = fv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), la[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), la[t] = !0, !0;
        }
        if (Lf.test(t)) {
          var u = t.toLowerCase(), s = fv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return la[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), la[t] = !0, !0;
        }
      }
      return !0;
    }
    function dv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Of(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function xs(e, t) {
      Ha(e, t) || dv(e, t);
    }
    var Xi = !1;
    function Mf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xi && (Xi = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Uf = function() {
    };
    {
      var rn = {}, zf = /^on./, pv = /^on[^A-Z]/, vv = new RegExp("^(aria)-[" + xe + "]*$"), hv = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      Uf = function(e, t, a, i) {
        if (Yn.call(rn, t) && rn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), rn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), rn[t] = !0, !0;
          if (zf.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), rn[t] = !0, !0;
        } else if (zf.test(t))
          return pv.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), rn[t] = !0, !0;
        if (vv.test(t) || hv.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), rn[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), rn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), rn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), rn[t] = !0, !0;
        var v = va(t), m = v !== null && v.type === si;
        if (Rs.hasOwnProperty(u)) {
          var S = Rs[u];
          if (S !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, S), rn[t] = !0, !0;
        } else if (!m && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), rn[t] = !0, !0;
        return typeof a == "boolean" && Dr(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), rn[t] = !0, !0) : m ? !0 : Dr(t, a, v, !1) ? (rn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Qn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), rn[t] = !0), !0);
      };
    }
    var mv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Uf(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function yv(e, t, a) {
      Ha(e, t) || mv(e, t, a);
    }
    var Fa = 1, io = 2, Ki = 4, fy = Fa | io | Ki, lo = null;
    function uo(e) {
      lo !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), lo = e;
    }
    function dy() {
      lo === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), lo = null;
    }
    function gv(e) {
      return e === lo;
    }
    function ws(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Aa ? t.parentNode : t;
    }
    var vt = null, mi = null, Va = null;
    function Ql(e) {
      var t = xu(e);
      if (t) {
        if (typeof vt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          vt(t.stateNode, t.type, i);
        }
      }
    }
    function Sv(e) {
      vt = e;
    }
    function Ds(e) {
      mi ? Va ? Va.push(e) : Va = [e] : mi = e;
    }
    function oo() {
      return mi !== null || Va !== null;
    }
    function so() {
      if (mi) {
        var e = mi, t = Va;
        if (mi = null, Va = null, Ql(e), t)
          for (var a = 0; a < t.length; a++)
            Ql(t[a]);
      }
    }
    var qi = function(e, t) {
      return e(t);
    }, Af = function() {
    }, Hf = !1;
    function py() {
      var e = oo();
      e && (Af(), so());
    }
    function Ff(e, t, a) {
      if (Hf)
        return e(t, a);
      Hf = !0;
      try {
        return qi(e, t, a);
      } finally {
        Hf = !1, py();
      }
    }
    function bs(e, t, a) {
      qi = e, Af = a;
    }
    function ks(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Vf(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && ks(t));
        default:
          return !1;
      }
    }
    function Zi(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Vf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var co = !1;
    if (Cn)
      try {
        var Ji = {};
        Object.defineProperty(Ji, "passive", {
          get: function() {
            co = !0;
          }
        }), window.addEventListener("test", Ji, Ji), window.removeEventListener("test", Ji, Ji);
      } catch {
        co = !1;
      }
    function Ev(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (S) {
        this.onError(S);
      }
    }
    var jf = Ev;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Bf = document.createElement("react");
      jf = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), w = !1, R = !0, L = window.event, M = Object.getOwnPropertyDescriptor(window, "event");
        function z() {
          Bf.removeEventListener(A, Re, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var J = Array.prototype.slice.call(arguments, 3);
        function Re() {
          w = !0, z(), a.apply(i, J), R = !1;
        }
        var me, Xe = !1, Ie = !1;
        function k(_) {
          if (me = _.error, Xe = !0, me === null && _.colno === 0 && _.lineno === 0 && (Ie = !0), _.defaultPrevented && me != null && typeof me == "object")
            try {
              me._suppressLogging = !0;
            } catch {
            }
        }
        var A = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Bf.addEventListener(A, Re, !1), S.initEvent(A, !1, !1), Bf.dispatchEvent(S), M && Object.defineProperty(window, "event", M), w && R && (Xe ? Ie && (me = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : me = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(me)), window.removeEventListener("error", k), !w)
          return z(), Ev.apply(this, arguments);
      };
    }
    var vy = jf, yi = !1, ua = null, fo = !1, gi = null, ma = {
      onError: function(e) {
        yi = !0, ua = e;
      }
    };
    function el(e, t, a, i, u, s, f, p, v) {
      yi = !1, ua = null, vy.apply(ma, arguments);
    }
    function ja(e, t, a, i, u, s, f, p, v) {
      if (el.apply(this, arguments), yi) {
        var m = $f();
        fo || (fo = !0, gi = m);
      }
    }
    function Pf() {
      if (fo) {
        var e = gi;
        throw fo = !1, gi = null, e;
      }
    }
    function hy() {
      return yi;
    }
    function $f() {
      if (yi) {
        var e = ua;
        return yi = !1, ua = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lr(e) {
      return e._reactInternals;
    }
    function po(e) {
      return e._reactInternals !== void 0;
    }
    function Il(e, t) {
      e._reactInternals = t;
    }
    var Te = (
      /*                      */
      0
    ), Si = (
      /*                */
      1
    ), mt = (
      /*                    */
      2
    ), je = (
      /*                       */
      4
    ), et = (
      /*                */
      16
    ), tt = (
      /*                 */
      32
    ), ya = (
      /*                     */
      64
    ), Oe = (
      /*                   */
      128
    ), Lt = (
      /*            */
      256
    ), Wn = (
      /*                          */
      512
    ), Or = (
      /*                     */
      1024
    ), Ct = (
      /*                      */
      2048
    ), Mr = (
      /*                    */
      4096
    ), Ei = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), _s = Ct | je | ya | Wn | Or | vo, Cv = (
      /*               */
      32767
    ), fr = (
      /*                   */
      32768
    ), an = (
      /*                */
      65536
    ), ho = (
      /* */
      131072
    ), Yf = (
      /*                       */
      1048576
    ), Qf = (
      /*                    */
      2097152
    ), Gn = (
      /*                 */
      4194304
    ), Ci = (
      /*                */
      8388608
    ), Xn = (
      /*               */
      16777216
    ), tl = (
      /*              */
      33554432
    ), Wl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      je | Or | 0
    ), Kn = mt | je | et | tt | Wn | Mr | Ei, xn = je | ya | Wn | Ei, Ur = Ct | et, cn = Gn | Ci | Qf, Ba = C.ReactCurrentOwner;
    function dr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (mt | Mr)) !== Te && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === W ? a : null;
    }
    function If(e) {
      if (e.tag === He) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ns(e) {
      return e.tag === W ? e.stateNode.containerInfo : null;
    }
    function Wf(e) {
      return dr(e) === e;
    }
    function pr(e) {
      {
        var t = Ba.current;
        if (t !== null && t.tag === V) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Fe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Lr(e);
      return u ? dr(u) === u : !1;
    }
    function qn(e) {
      if (dr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function yt(e) {
      var t = e.alternate;
      if (!t) {
        var a = dr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return qn(s), e;
            if (v === u)
              return qn(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, S = s.child; S; ) {
            if (S === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (S === u) {
              m = !0, u = s, i = f;
              break;
            }
            S = S.sibling;
          }
          if (!m) {
            for (S = f.child; S; ) {
              if (S === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (S === u) {
                m = !0, u = f, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== W)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function zr(e) {
      var t = yt(e);
      return t !== null ? Gf(t) : null;
    }
    function Gf(e) {
      if (e.tag === re || e.tag === ge)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Gf(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Tv(e) {
      var t = yt(e);
      return t !== null ? Ls(t) : null;
    }
    function Ls(e) {
      if (e.tag === re || e.tag === ge)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== q) {
          var a = Ls(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Os = b.unstable_scheduleCallback, Rv = b.unstable_cancelCallback, Ms = b.unstable_shouldYield, xv = b.unstable_requestPaint, xt = b.unstable_now, Xf = b.unstable_getCurrentPriorityLevel, Us = b.unstable_ImmediatePriority, nl = b.unstable_UserBlockingPriority, ga = b.unstable_NormalPriority, wv = b.unstable_LowPriority, zs = b.unstable_IdlePriority, Gl = b.unstable_yieldValue, Dv = b.unstable_setDisableYieldValue, Pa = null, Kt = null, X = null, Ar = !1, vr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Kf(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        li && (e = Ye({}, e, {
          getLaneLabelMap: $a,
          injectProfilingHooks: bv
        })), Pa = t.inject(e), Kt = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function qf(e, t) {
      if (Kt && typeof Kt.onScheduleFiberRoot == "function")
        try {
          Kt.onScheduleFiberRoot(Pa, e, t);
        } catch (a) {
          Ar || (Ar = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Xl(e, t) {
      if (Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Oe) === Oe;
          if (Nn) {
            var i;
            switch (t) {
              case Ft:
                i = Us;
                break;
              case Qa:
                i = nl;
                break;
              case Sa:
                i = ga;
                break;
              case uu:
                i = zs;
                break;
              default:
                i = ga;
                break;
            }
            Kt.onCommitFiberRoot(Pa, e, i, a);
          }
        } catch (u) {
          Ar || (Ar = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Hr(e) {
      if (Kt && typeof Kt.onPostCommitFiberRoot == "function")
        try {
          Kt.onPostCommitFiberRoot(Pa, e);
        } catch (t) {
          Ar || (Ar = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function rl(e) {
      if (Kt && typeof Kt.onCommitFiberUnmount == "function")
        try {
          Kt.onCommitFiberUnmount(Pa, e);
        } catch (t) {
          Ar || (Ar = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Yt(e) {
      if (typeof Gl == "function" && (Dv(e), U(e)), Kt && typeof Kt.setStrictMode == "function")
        try {
          Kt.setStrictMode(Pa, e);
        } catch (t) {
          Ar || (Ar = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function bv(e) {
      X = e;
    }
    function $a() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Eo; a++) {
          var i = yy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Ti(e) {
      X !== null && typeof X.markCommitStarted == "function" && X.markCommitStarted(e);
    }
    function As() {
      X !== null && typeof X.markCommitStopped == "function" && X.markCommitStopped();
    }
    function Kl(e) {
      X !== null && typeof X.markComponentRenderStarted == "function" && X.markComponentRenderStarted(e);
    }
    function Zn() {
      X !== null && typeof X.markComponentRenderStopped == "function" && X.markComponentRenderStopped();
    }
    function Ri(e) {
      X !== null && typeof X.markComponentPassiveEffectMountStarted == "function" && X.markComponentPassiveEffectMountStarted(e);
    }
    function Hs() {
      X !== null && typeof X.markComponentPassiveEffectMountStopped == "function" && X.markComponentPassiveEffectMountStopped();
    }
    function kv(e) {
      X !== null && typeof X.markComponentPassiveEffectUnmountStarted == "function" && X.markComponentPassiveEffectUnmountStarted(e);
    }
    function Fs() {
      X !== null && typeof X.markComponentPassiveEffectUnmountStopped == "function" && X.markComponentPassiveEffectUnmountStopped();
    }
    function _v(e) {
      X !== null && typeof X.markComponentLayoutEffectMountStarted == "function" && X.markComponentLayoutEffectMountStarted(e);
    }
    function mo() {
      X !== null && typeof X.markComponentLayoutEffectMountStopped == "function" && X.markComponentLayoutEffectMountStopped();
    }
    function oa(e) {
      X !== null && typeof X.markComponentLayoutEffectUnmountStarted == "function" && X.markComponentLayoutEffectUnmountStarted(e);
    }
    function ql() {
      X !== null && typeof X.markComponentLayoutEffectUnmountStopped == "function" && X.markComponentLayoutEffectUnmountStopped();
    }
    function yo(e, t, a) {
      X !== null && typeof X.markComponentErrored == "function" && X.markComponentErrored(e, t, a);
    }
    function al(e, t, a) {
      X !== null && typeof X.markComponentSuspended == "function" && X.markComponentSuspended(e, t, a);
    }
    function Zf(e) {
      X !== null && typeof X.markLayoutEffectsStarted == "function" && X.markLayoutEffectsStarted(e);
    }
    function Zl() {
      X !== null && typeof X.markLayoutEffectsStopped == "function" && X.markLayoutEffectsStopped();
    }
    function Nv(e) {
      X !== null && typeof X.markPassiveEffectsStarted == "function" && X.markPassiveEffectsStarted(e);
    }
    function Jf() {
      X !== null && typeof X.markPassiveEffectsStopped == "function" && X.markPassiveEffectsStopped();
    }
    function Tt(e) {
      X !== null && typeof X.markRenderStarted == "function" && X.markRenderStarted(e);
    }
    function Vs() {
      X !== null && typeof X.markRenderYielded == "function" && X.markRenderYielded();
    }
    function js() {
      X !== null && typeof X.markRenderStopped == "function" && X.markRenderStopped();
    }
    function ed(e) {
      X !== null && typeof X.markRenderScheduled == "function" && X.markRenderScheduled(e);
    }
    function Bs(e, t) {
      X !== null && typeof X.markForceUpdateScheduled == "function" && X.markForceUpdateScheduled(e, t);
    }
    function go(e, t) {
      X !== null && typeof X.markStateUpdateScheduled == "function" && X.markStateUpdateScheduled(e, t);
    }
    var pe = (
      /*                         */
      0
    ), he = (
      /*                 */
      1
    ), Me = (
      /*                    */
      2
    ), Pe = (
      /*               */
      8
    ), hr = (
      /*              */
      16
    ), Jl = Math.clz32 ? Math.clz32 : wn, So = Math.log, my = Math.LN2;
    function wn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (So(t) / my | 0) | 0;
    }
    var Eo = 31, j = (
      /*                        */
      0
    ), Qt = (
      /*                          */
      0
    ), Se = (
      /*                        */
      1
    ), fn = (
      /*    */
      2
    ), mr = (
      /*             */
      4
    ), Ya = (
      /*            */
      8
    ), Fr = (
      /*                     */
      16
    ), eu = (
      /*                */
      32
    ), il = (
      /*                       */
      4194240
    ), tu = (
      /*                        */
      64
    ), Ps = (
      /*                        */
      128
    ), $s = (
      /*                        */
      256
    ), Ys = (
      /*                        */
      512
    ), Qs = (
      /*                        */
      1024
    ), Is = (
      /*                        */
      2048
    ), ll = (
      /*                        */
      4096
    ), Ws = (
      /*                        */
      8192
    ), nu = (
      /*                        */
      16384
    ), ru = (
      /*                       */
      32768
    ), Gs = (
      /*                       */
      65536
    ), Co = (
      /*                       */
      131072
    ), Xs = (
      /*                       */
      262144
    ), Ks = (
      /*                       */
      524288
    ), qs = (
      /*                       */
      1048576
    ), Zs = (
      /*                       */
      2097152
    ), au = (
      /*                            */
      130023424
    ), ul = (
      /*                             */
      4194304
    ), Js = (
      /*                             */
      8388608
    ), ec = (
      /*                             */
      16777216
    ), td = (
      /*                             */
      33554432
    ), tc = (
      /*                             */
      67108864
    ), Lv = ul, To = (
      /*          */
      134217728
    ), nd = (
      /*                          */
      268435455
    ), iu = (
      /*               */
      268435456
    ), xi = (
      /*                        */
      536870912
    ), Dn = (
      /*                   */
      1073741824
    );
    function yy(e) {
      {
        if (e & Se)
          return "Sync";
        if (e & fn)
          return "InputContinuousHydration";
        if (e & mr)
          return "InputContinuous";
        if (e & Ya)
          return "DefaultHydration";
        if (e & Fr)
          return "Default";
        if (e & eu)
          return "TransitionHydration";
        if (e & il)
          return "Transition";
        if (e & au)
          return "Retry";
        if (e & To)
          return "SelectiveHydration";
        if (e & iu)
          return "IdleHydration";
        if (e & xi)
          return "Idle";
        if (e & Dn)
          return "Offscreen";
      }
    }
    var ht = -1, nc = tu, Jn = ul;
    function ol(e) {
      switch (Ht(e)) {
        case Se:
          return Se;
        case fn:
          return fn;
        case mr:
          return mr;
        case Ya:
          return Ya;
        case Fr:
          return Fr;
        case eu:
          return eu;
        case tu:
        case Ps:
        case $s:
        case Ys:
        case Qs:
        case Is:
        case ll:
        case Ws:
        case nu:
        case ru:
        case Gs:
        case Co:
        case Xs:
        case Ks:
        case qs:
        case Zs:
          return e & il;
        case ul:
        case Js:
        case ec:
        case td:
        case tc:
          return e & au;
        case To:
          return To;
        case iu:
          return iu;
        case xi:
          return xi;
        case Dn:
          return Dn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function sl(e, t) {
      var a = e.pendingLanes;
      if (a === j)
        return j;
      var i = j, u = e.suspendedLanes, s = e.pingedLanes, f = a & nd;
      if (f !== j) {
        var p = f & ~u;
        if (p !== j)
          i = ol(p);
        else {
          var v = f & s;
          v !== j && (i = ol(v));
        }
      } else {
        var m = a & ~u;
        m !== j ? i = ol(m) : s !== j && (i = ol(s));
      }
      if (i === j)
        return j;
      if (t !== j && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === j) {
        var S = Ht(i), w = Ht(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          S >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          S === Fr && (w & il) !== j
        )
          return t;
      }
      (i & mr) !== j && (i |= a & Fr);
      var R = e.entangledLanes;
      if (R !== j)
        for (var L = e.entanglements, M = i & R; M > 0; ) {
          var z = Di(M), J = 1 << z;
          i |= L[z], M &= ~J;
        }
      return i;
    }
    function Ov(e, t) {
      for (var a = e.eventTimes, i = ht; t > 0; ) {
        var u = Di(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Mv(e, t) {
      switch (e) {
        case Se:
        case fn:
        case mr:
          return t + 250;
        case Ya:
        case Fr:
        case eu:
        case tu:
        case Ps:
        case $s:
        case Ys:
        case Qs:
        case Is:
        case ll:
        case Ws:
        case nu:
        case ru:
        case Gs:
        case Co:
        case Xs:
        case Ks:
        case qs:
        case Zs:
          return t + 5e3;
        case ul:
        case Js:
        case ec:
        case td:
        case tc:
          return ht;
        case To:
        case iu:
        case xi:
        case Dn:
          return ht;
        default:
          return y("Should have found matching lanes. This is a bug in React."), ht;
      }
    }
    function Uv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Di(f), v = 1 << p, m = s[p];
        m === ht ? ((v & i) === j || (v & u) !== j) && (s[p] = Mv(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function rd(e) {
      return ol(e.pendingLanes);
    }
    function wi(e) {
      var t = e.pendingLanes & ~Dn;
      return t !== j ? t : t & Dn ? Dn : j;
    }
    function ad(e) {
      return (e & Se) !== j;
    }
    function Ro(e) {
      return (e & nd) !== j;
    }
    function zv(e) {
      return (e & au) === e;
    }
    function Av(e) {
      var t = Se | mr | Fr;
      return (e & t) === j;
    }
    function Hv(e) {
      return (e & il) === e;
    }
    function xo(e, t) {
      var a = fn | mr | Ya | Fr;
      return (t & a) !== j;
    }
    function Fv(e, t) {
      return (t & e.expiredLanes) !== j;
    }
    function id(e) {
      return (e & il) !== j;
    }
    function Vv() {
      var e = nc;
      return nc <<= 1, (nc & il) === j && (nc = tu), e;
    }
    function er() {
      var e = Jn;
      return Jn <<= 1, (Jn & au) === j && (Jn = ul), e;
    }
    function Ht(e) {
      return e & -e;
    }
    function lu(e) {
      return Ht(e);
    }
    function Di(e) {
      return 31 - Jl(e);
    }
    function rc(e) {
      return Di(e);
    }
    function tr(e, t) {
      return (e & t) !== j;
    }
    function cl(e, t) {
      return (e & t) === t;
    }
    function Ve(e, t) {
      return e | t;
    }
    function wo(e, t) {
      return e & ~t;
    }
    function ac(e, t) {
      return e & t;
    }
    function gy(e) {
      return e;
    }
    function jv(e, t) {
      return e !== Qt && e < t ? e : t;
    }
    function Do(e) {
      for (var t = [], a = 0; a < Eo; a++)
        t.push(e);
      return t;
    }
    function fl(e, t, a) {
      e.pendingLanes |= t, t !== xi && (e.suspendedLanes = j, e.pingedLanes = j);
      var i = e.eventTimes, u = rc(t);
      i[u] = a;
    }
    function Bv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Di(i), s = 1 << u;
        a[u] = ht, i &= ~s;
      }
    }
    function ic(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function lc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = j, e.pingedLanes = j, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Di(f), v = 1 << p;
        i[p] = j, u[p] = ht, s[p] = ht, f &= ~v;
      }
    }
    function ld(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Di(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Pv(e, t) {
      var a = Ht(t), i;
      switch (a) {
        case mr:
          i = fn;
          break;
        case Fr:
          i = Ya;
          break;
        case tu:
        case Ps:
        case $s:
        case Ys:
        case Qs:
        case Is:
        case ll:
        case Ws:
        case nu:
        case ru:
        case Gs:
        case Co:
        case Xs:
        case Ks:
        case qs:
        case Zs:
        case ul:
        case Js:
        case ec:
        case td:
        case tc:
          i = eu;
          break;
        case xi:
          i = iu;
          break;
        default:
          i = Qt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Qt ? Qt : i;
    }
    function uc(e, t, a) {
      if (vr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = rc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function ud(e, t) {
      if (vr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = rc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function bo(e, t) {
      return null;
    }
    var Ft = Se, Qa = mr, Sa = Fr, uu = xi, ou = Qt;
    function Vr() {
      return ou;
    }
    function Ot(e) {
      ou = e;
    }
    function bn(e, t) {
      var a = ou;
      try {
        return ou = e, t();
      } finally {
        ou = a;
      }
    }
    function Sy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ey(e, t) {
      return e > t ? e : t;
    }
    function su(e, t) {
      return e !== 0 && e < t;
    }
    function dn(e) {
      var t = Ht(e);
      return su(Ft, t) ? su(Qa, t) ? Ro(t) ? Sa : uu : Qa : Ft;
    }
    function oc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ue;
    function cu(e) {
      ue = e;
    }
    function od(e) {
      ue(e);
    }
    var sc;
    function Cy(e) {
      sc = e;
    }
    var fu;
    function cc(e) {
      fu = e;
    }
    var fc;
    function $v(e) {
      fc = e;
    }
    var sd;
    function Yv(e) {
      sd = e;
    }
    var ko = !1, du = [], Rt = null, ln = null, On = null, pu = /* @__PURE__ */ new Map(), vu = /* @__PURE__ */ new Map(), un = [], Qv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ea(e) {
      return Qv.indexOf(e) > -1;
    }
    function Ty(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function cd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Rt = null;
          break;
        case "dragenter":
        case "dragleave":
          ln = null;
          break;
        case "mouseover":
        case "mouseout":
          On = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          pu.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          vu.delete(i);
          break;
        }
      }
    }
    function hu(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Ty(t, a, i, u, s);
        if (t !== null) {
          var p = xu(t);
          p !== null && sc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Iv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Rt = hu(Rt, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ln = hu(ln, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return On = hu(On, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return pu.set(m, hu(pu.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = u, w = S.pointerId;
          return vu.set(w, hu(vu.get(w) || null, e, t, a, i, S)), !0;
        }
      }
      return !1;
    }
    function fd(e) {
      var t = jo(e.target);
      if (t !== null) {
        var a = dr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === He) {
            var u = If(a);
            if (u !== null) {
              e.blockedOn = u, sd(e.priority, function() {
                fu(a);
              });
              return;
            }
          } else if (i === W) {
            var s = a.stateNode;
            if (oc(s)) {
              e.blockedOn = Ns(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Ry(e) {
      for (var t = fc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < un.length && su(t, un[i].priority); i++)
        ;
      un.splice(i, 0, a), i === 0 && fd(a);
    }
    function dl(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = kn(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          uo(s), u.target.dispatchEvent(s), dy();
        } else {
          var f = xu(i);
          return f !== null && sc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function dc(e, t, a) {
      dl(e) && a.delete(t);
    }
    function jr() {
      ko = !1, Rt !== null && dl(Rt) && (Rt = null), ln !== null && dl(ln) && (ln = null), On !== null && dl(On) && (On = null), pu.forEach(dc), vu.forEach(dc);
    }
    function Qe(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ko || (ko = !0, b.unstable_scheduleCallback(b.unstable_NormalPriority, jr)));
    }
    function Mt(e) {
      if (du.length > 0) {
        Qe(du[0], e);
        for (var t = 1; t < du.length; t++) {
          var a = du[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Rt !== null && Qe(Rt, e), ln !== null && Qe(ln, e), On !== null && Qe(On, e);
      var i = function(p) {
        return Qe(p, e);
      };
      pu.forEach(i), vu.forEach(i);
      for (var u = 0; u < un.length; u++) {
        var s = un[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; un.length > 0; ) {
        var f = un[0];
        if (f.blockedOn !== null)
          break;
        fd(f), f.blockedOn === null && un.shift();
      }
    }
    var gt = C.ReactCurrentBatchConfig, qt = !0;
    function nr(e) {
      qt = !!e;
    }
    function mu() {
      return qt;
    }
    function Zt(e, t, a) {
      var i = pc(t), u;
      switch (i) {
        case Ft:
          u = _o;
          break;
        case Qa:
          u = pl;
          break;
        case Sa:
        default:
          u = yu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function _o(e, t, a, i) {
      var u = Vr(), s = gt.transition;
      gt.transition = null;
      try {
        Ot(Ft), yu(e, t, a, i);
      } finally {
        Ot(u), gt.transition = s;
      }
    }
    function pl(e, t, a, i) {
      var u = Vr(), s = gt.transition;
      gt.transition = null;
      try {
        Ot(Qa), yu(e, t, a, i);
      } finally {
        Ot(u), gt.transition = s;
      }
    }
    function yu(e, t, a, i) {
      qt && dd(e, t, a, i);
    }
    function dd(e, t, a, i) {
      var u = kn(e, t, a, i);
      if (u === null) {
        jy(e, t, i, bi, a), cd(e, i);
        return;
      }
      if (Iv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (cd(e, i), t & Ki && Ea(e)) {
        for (; u !== null; ) {
          var s = xu(u);
          s !== null && od(s);
          var f = kn(e, t, a, i);
          if (f === null && jy(e, t, i, bi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      jy(e, t, i, null, a);
    }
    var bi = null;
    function kn(e, t, a, i) {
      bi = null;
      var u = ws(i), s = jo(u);
      if (s !== null) {
        var f = dr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === He) {
            var v = If(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === W) {
            var m = f.stateNode;
            if (oc(m))
              return Ns(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return bi = s, null;
    }
    function pc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Ft;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Qa;
        case "message": {
          var t = Xf();
          switch (t) {
            case Us:
              return Ft;
            case nl:
              return Qa;
            case ga:
            case wv:
              return Sa;
            case zs:
              return uu;
            default:
              return Sa;
          }
        }
        default:
          return Sa;
      }
    }
    function gu(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ia(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function vc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function pd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Br = null, Su = null, Pr = null;
    function hc(e) {
      return Br = e, Su = Lo(), !0;
    }
    function No() {
      Br = null, Su = null, Pr = null;
    }
    function mc() {
      if (Pr)
        return Pr;
      var e, t = Su, a = t.length, i, u = Lo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Pr = u.slice(e, p), Pr;
    }
    function Lo() {
      return "value" in Br ? Br.value : Br.textContent;
    }
    function vl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function on() {
      return !0;
    }
    function Wa() {
      return !1;
    }
    function wt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = on : this.isDefaultPrevented = Wa, this.isPropagationStopped = Wa, this;
      }
      return Ye(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = on);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = on);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: on
      }), t;
    }
    var Jt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, yc = wt(Jt), hl = Ye({}, Jt, {
      view: 0,
      detail: 0
    }), vd = wt(hl), hd, Ca, Eu;
    function md(e) {
      e !== Eu && (Eu && e.type === "mousemove" ? (hd = e.screenX - Eu.screenX, Ca = e.screenY - Eu.screenY) : (hd = 0, Ca = 0), Eu = e);
    }
    var Ta = Ye({}, hl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: yd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (md(e), hd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ca;
      }
    }), gc = wt(Ta), ml = Ye({}, Ta, {
      dataTransfer: 0
    }), Wv = wt(ml), Gv = Ye({}, hl, {
      relatedTarget: 0
    }), Oo = wt(Gv), Sc = Ye({}, Jt, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), xy = wt(Sc), wy = Ye({}, Jt, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Xv = wt(wy), Kv = Ye({}, Jt, {
      data: 0
    }), ki = wt(Kv), Dy = ki, Cu = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, qv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Ut(e) {
      if (e.key) {
        var t = Cu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = vl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? qv[e.keyCode] || "Unidentified" : "";
    }
    var by = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Zv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = by[e];
      return i ? !!a[i] : !1;
    }
    function yd(e) {
      return Zv;
    }
    var ky = Ye({}, hl, {
      key: Ut,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? vl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Jv = wt(ky), eh = Ye({}, Ta, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), th = wt(eh), $r = Ye({}, hl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yd
    }), gd = wt($r), _y = Ye({}, Jt, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _i = wt(_y), Ec = Ye({}, Ta, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), yl = wt(Ec), Cc = [9, 13, 27, 32], Tc = 229, Mo = Cn && "CompositionEvent" in window, Uo = null;
    Cn && "documentMode" in document && (Uo = document.documentMode);
    var Sd = Cn && "TextEvent" in window && !Uo, nh = Cn && (!Mo || Uo && Uo > 8 && Uo <= 11), Ed = 32, Cd = String.fromCharCode(Ed);
    function Rc() {
      xr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), xr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), xr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), xr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var zo = !1;
    function rh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Td(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Ny(e, t) {
      return e === "keydown" && t.keyCode === Tc;
    }
    function Rd(e, t) {
      switch (e) {
        case "keyup":
          return Cc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Tc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function xc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ao(e) {
      return e.locale === "ko";
    }
    var Ni = !1;
    function wc(e, t, a, i, u) {
      var s, f;
      if (Mo ? s = Td(t) : Ni ? Rd(t, i) && (s = "onCompositionEnd") : Ny(t, i) && (s = "onCompositionStart"), !s)
        return null;
      nh && !Ao(i) && (!Ni && s === "onCompositionStart" ? Ni = hc(u) : s === "onCompositionEnd" && Ni && (f = mc()));
      var p = sh(a, s);
      if (p.length > 0) {
        var v = new ki(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = xc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function ah(e, t) {
      switch (e) {
        case "compositionend":
          return xc(t);
        case "keypress":
          var a = t.which;
          return a !== Ed ? null : (zo = !0, Cd);
        case "textInput":
          var i = t.data;
          return i === Cd && zo ? null : i;
        default:
          return null;
      }
    }
    function Ly(e, t) {
      if (Ni) {
        if (e === "compositionend" || !Mo && Rd(e, t)) {
          var a = mc();
          return No(), Ni = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!rh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return nh && !Ao(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Dc(e, t, a, i, u) {
      var s;
      if (Sd ? s = ah(t, i) : s = Ly(t, i), !s)
        return null;
      var f = sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Dy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Oy(e, t, a, i, u, s, f) {
      wc(e, t, a, i, u), Dc(e, t, a, i, u);
    }
    var Ho = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function ih(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ho[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function bc(e) {
      if (!Cn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      xr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Ds(i);
      var u = sh(t, "onChange");
      if (u.length > 0) {
        var s = new yc("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, ws(e)), Ff(h, t);
    }
    function h(e) {
      Q0(e, 0);
    }
    function E(e) {
      var t = Mc(e);
      if (Bp(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var O = !1;
    Cn && (O = bc("input") && (!document.documentMode || document.documentMode > 9));
    function P(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", B);
    }
    function Y() {
      l && (l.detachEvent("onpropertychange", B), l = null, o = null);
    }
    function B(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function ae(e, t, a) {
      e === "focusin" ? (Y(), P(t, a)) : e === "focusout" && Y();
    }
    function se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function de(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Vt(e, t) {
      if (e === "click")
        return E(t);
    }
    function D(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || vi(e, "number", e.value);
    }
    function N(e, t, a, i, u, s, f) {
      var p = a ? Mc(a) : window, v, m;
      if (c(p) ? v = T : ih(p) ? O ? v = D : (v = se, m = ae) : de(p) && (v = Vt), v) {
        var S = v(t, a);
        if (S) {
          r(e, S, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && x(p);
    }
    function G() {
      Na("onMouseEnter", ["mouseout", "mouseover"]), Na("onMouseLeave", ["mouseout", "mouseover"]), Na("onPointerEnter", ["pointerout", "pointerover"]), Na("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ve(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !gv(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (jo(m) || Hd(m)))
          return;
      }
      if (!(!v && !p)) {
        var S;
        if (u.window === u)
          S = u;
        else {
          var w = u.ownerDocument;
          w ? S = w.defaultView || w.parentWindow : S = window;
        }
        var R, L;
        if (v) {
          var M = i.relatedTarget || i.toElement;
          if (R = a, L = M ? jo(M) : null, L !== null) {
            var z = dr(L);
            (L !== z || L.tag !== re && L.tag !== ge) && (L = null);
          }
        } else
          R = null, L = a;
        if (R !== L) {
          var J = gc, Re = "onMouseLeave", me = "onMouseEnter", Xe = "mouse";
          (t === "pointerout" || t === "pointerover") && (J = th, Re = "onPointerLeave", me = "onPointerEnter", Xe = "pointer");
          var Ie = R == null ? S : Mc(R), k = L == null ? S : Mc(L), A = new J(Re, Xe + "leave", R, i, u);
          A.target = Ie, A.relatedTarget = k;
          var _ = null, Q = jo(u);
          if (Q === a) {
            var le = new J(me, Xe + "enter", L, i, u);
            le.target = k, le.relatedTarget = Ie, _ = le;
          }
          lR(e, A, _, R, L);
        }
      }
    }
    function we(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ce = typeof Object.is == "function" ? Object.is : we;
    function De(e, t) {
      if (ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Yn.call(t, s) || !ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function en(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ke(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ga(e, t) {
      for (var a = en(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Aa) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = en(Ke(a));
      }
    }
    function My(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return jT(e, u, s, f, p);
    }
    function jT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, S = e, w = null;
      e: for (; ; ) {
        for (var R = null; S === t && (a === 0 || S.nodeType === Aa) && (f = s + a), S === i && (u === 0 || S.nodeType === Aa) && (p = s + u), S.nodeType === Aa && (s += S.nodeValue.length), (R = S.firstChild) !== null; )
          w = S, S = R;
        for (; ; ) {
          if (S === e)
            break e;
          if (w === t && ++v === a && (f = s), w === i && ++m === u && (p = s), (R = S.nextSibling) !== null)
            break;
          S = w, w = S.parentNode;
        }
        S = R;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function BT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Ga(e, f), S = Ga(e, p);
        if (m && S) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === S.node && u.focusOffset === S.offset)
            return;
          var w = a.createRange();
          w.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(w), u.extend(S.node, S.offset)) : (w.setEnd(S.node, S.offset), u.addRange(w));
        }
      }
    }
    function M0(e) {
      return e && e.nodeType === Aa;
    }
    function U0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : M0(e) ? !1 : M0(t) ? U0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function PT(e) {
      return e && e.ownerDocument && U0(e.ownerDocument.documentElement, e);
    }
    function $T(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function z0() {
      for (var e = window, t = ds(); t instanceof e.HTMLIFrameElement; ) {
        if ($T(t))
          e = t.contentWindow;
        else
          return t;
        t = ds(e.document);
      }
      return t;
    }
    function Uy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function YT() {
      var e = z0();
      return {
        focusedElem: e,
        selectionRange: Uy(e) ? IT(e) : null
      };
    }
    function QT(e) {
      var t = z0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && PT(a)) {
        i !== null && Uy(a) && WT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === In && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function IT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = My(e), t || {
        start: 0,
        end: 0
      };
    }
    function WT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : BT(e, t);
    }
    var GT = Cn && "documentMode" in document && document.documentMode <= 11;
    function XT() {
      xr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var kc = null, zy = null, xd = null, Ay = !1;
    function KT(e) {
      if ("selectionStart" in e && Uy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function qT(e) {
      return e.window === e ? e.document : e.nodeType === ia ? e : e.ownerDocument;
    }
    function A0(e, t, a) {
      var i = qT(a);
      if (!(Ay || kc == null || kc !== ds(i))) {
        var u = KT(kc);
        if (!xd || !De(xd, u)) {
          xd = u;
          var s = sh(zy, "onSelect");
          if (s.length > 0) {
            var f = new yc("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = kc;
          }
        }
      }
    }
    function ZT(e, t, a, i, u, s, f) {
      var p = a ? Mc(a) : window;
      switch (t) {
        case "focusin":
          (ih(p) || p.contentEditable === "true") && (kc = p, zy = a, xd = null);
          break;
        case "focusout":
          kc = null, zy = null, xd = null;
          break;
        case "mousedown":
          Ay = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ay = !1, A0(e, i, u);
          break;
        case "selectionchange":
          if (GT)
            break;
        case "keydown":
        case "keyup":
          A0(e, i, u);
      }
    }
    function lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var _c = {
      animationend: lh("Animation", "AnimationEnd"),
      animationiteration: lh("Animation", "AnimationIteration"),
      animationstart: lh("Animation", "AnimationStart"),
      transitionend: lh("Transition", "TransitionEnd")
    }, Hy = {}, H0 = {};
    Cn && (H0 = document.createElement("div").style, "AnimationEvent" in window || (delete _c.animationend.animation, delete _c.animationiteration.animation, delete _c.animationstart.animation), "TransitionEvent" in window || delete _c.transitionend.transition);
    function uh(e) {
      if (Hy[e])
        return Hy[e];
      if (!_c[e])
        return e;
      var t = _c[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in H0)
          return Hy[e] = t[a];
      return e;
    }
    var F0 = uh("animationend"), V0 = uh("animationiteration"), j0 = uh("animationstart"), B0 = uh("transitionend"), P0 = /* @__PURE__ */ new Map(), $0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Tu(e, t) {
      P0.set(e, t), xr(t, [e]);
    }
    function JT() {
      for (var e = 0; e < $0.length; e++) {
        var t = $0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Tu(a, "on" + i);
      }
      Tu(F0, "onAnimationEnd"), Tu(V0, "onAnimationIteration"), Tu(j0, "onAnimationStart"), Tu("dblclick", "onDoubleClick"), Tu("focusin", "onFocus"), Tu("focusout", "onBlur"), Tu(B0, "onTransitionEnd");
    }
    function eR(e, t, a, i, u, s, f) {
      var p = P0.get(t);
      if (p !== void 0) {
        var v = yc, m = t;
        switch (t) {
          case "keypress":
            if (vl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Jv;
            break;
          case "focusin":
            m = "focus", v = Oo;
            break;
          case "focusout":
            m = "blur", v = Oo;
            break;
          case "beforeblur":
          case "afterblur":
            v = Oo;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = gc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Wv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = gd;
            break;
          case F0:
          case V0:
          case j0:
            v = xy;
            break;
          case B0:
            v = _i;
            break;
          case "scroll":
            v = vd;
            break;
          case "wheel":
            v = yl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Xv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = th;
            break;
        }
        var S = (s & Ki) !== 0;
        {
          var w = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", R = aR(a, p, i.type, S, w);
          if (R.length > 0) {
            var L = new v(p, m, null, i, u);
            e.push({
              event: L,
              listeners: R
            });
          }
        }
      }
    }
    JT(), G(), n(), XT(), Rc();
    function tR(e, t, a, i, u, s, f) {
      eR(e, t, a, i, u, s);
      var p = (s & fy) === 0;
      p && (ve(e, t, a, i, u), N(e, t, a, i, u), ZT(e, t, a, i, u), Oy(e, t, a, i, u));
    }
    var wd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Fy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(wd));
    function Y0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ja(i, t, void 0, e), e.currentTarget = null;
    }
    function nR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          Y0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var S = t[m], w = S.instance, R = S.currentTarget, L = S.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          Y0(e, L, R), i = w;
        }
    }
    function Q0(e, t) {
      for (var a = (t & Ki) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        nR(s, f, a);
      }
      Pf();
    }
    function rR(e, t, a, i, u) {
      var s = ws(a), f = [];
      tR(f, e, i, a, s, t), Q0(f, t);
    }
    function Dt(e, t) {
      Fy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Mx(t), u = uR(e);
      i.has(u) || (I0(t, e, io, a), i.add(u));
    }
    function Vy(e, t, a) {
      Fy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ki), I0(a, e, i, t);
    }
    var oh = "_reactListening" + Math.random().toString(36).slice(2);
    function Dd(e) {
      if (!e[oh]) {
        e[oh] = !0, qr.forEach(function(a) {
          a !== "selectionchange" && (Fy.has(a) || Vy(a, !1, e), Vy(a, !0, e));
        });
        var t = e.nodeType === ia ? e : e.ownerDocument;
        t !== null && (t[oh] || (t[oh] = !0, Vy("selectionchange", !1, t)));
      }
    }
    function I0(e, t, a, i, u) {
      var s = Zt(e, t, a), f = void 0;
      co && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? vc(e, t, s, f) : Ia(e, t, s) : f !== void 0 ? pd(e, t, s, f) : gu(e, t, s);
    }
    function W0(e, t) {
      return e === t || e.nodeType === $t && e.parentNode === t;
    }
    function jy(e, t, a, i, u) {
      var s = i;
      if (!(t & Fa) && !(t & io)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === W || v === q) {
              var m = p.stateNode.containerInfo;
              if (W0(m, f))
                break;
              if (v === q)
                for (var S = p.return; S !== null; ) {
                  var w = S.tag;
                  if (w === W || w === q) {
                    var R = S.stateNode.containerInfo;
                    if (W0(R, f))
                      return;
                  }
                  S = S.return;
                }
              for (; m !== null; ) {
                var L = jo(m);
                if (L === null)
                  return;
                var M = L.tag;
                if (M === re || M === ge) {
                  p = s = L;
                  continue e;
                }
                m = m.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Ff(function() {
        return rR(e, t, a, s);
      });
    }
    function bd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function aR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, S = null; m !== null; ) {
        var w = m, R = w.stateNode, L = w.tag;
        if (L === re && R !== null && (S = R, p !== null)) {
          var M = Zi(m, p);
          M != null && v.push(bd(m, M, S));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === re && f !== null) {
          var v = f, m = Zi(u, a);
          m != null && i.unshift(bd(u, m, v));
          var S = Zi(u, t);
          S != null && i.push(bd(u, S, v));
        }
        u = u.return;
      }
      return i;
    }
    function Nc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== re);
      return e || null;
    }
    function iR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Nc(s))
        u++;
      for (var f = 0, p = i; p; p = Nc(p))
        f++;
      for (; u - f > 0; )
        a = Nc(a), u--;
      for (; f - u > 0; )
        i = Nc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Nc(a), i = Nc(i);
      }
      return null;
    }
    function G0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, S = v.stateNode, w = v.tag;
        if (m !== null && m === i)
          break;
        if (w === re && S !== null) {
          var R = S;
          if (u) {
            var L = Zi(p, s);
            L != null && f.unshift(bd(p, L, R));
          } else if (!u) {
            var M = Zi(p, s);
            M != null && f.push(bd(p, M, R));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function lR(e, t, a, i, u) {
      var s = i && u ? iR(i, u) : null;
      i !== null && G0(e, t, i, s, !1), u !== null && a !== null && G0(e, a, u, s, !0);
    }
    function uR(e, t) {
      return e + "__bubble";
    }
    var Yr = !1, kd = "dangerouslySetInnerHTML", ch = "suppressContentEditableWarning", Ru = "suppressHydrationWarning", X0 = "autoFocus", Fo = "children", Vo = "style", fh = "__html", By, dh, _d, K0, ph, q0, Z0;
    By = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, dh = function(e, t) {
      xs(e, t), Mf(e, t), yv(e, t, {
        registrationNameDependencies: da,
        possibleRegistrationNames: ju
      });
    }, q0 = Cn && !document.documentMode, _d = function(e, t, a) {
      if (!Yr) {
        var i = vh(a), u = vh(t);
        u !== i && (Yr = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, K0 = function(e) {
      if (!Yr) {
        Yr = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, ph = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, Z0 = function(e, t) {
      var a = e.namespaceURI === za ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var oR = /\r\n?/g, sR = /\u0000|\uFFFD/g;
    function vh(e) {
      $i(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(oR, `
`).replace(sR, "");
    }
    function hh(e, t, a, i) {
      var u = vh(t), s = vh(e);
      if (s !== u && (i && (Yr || (Yr = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Rr))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function J0(e) {
      return e.nodeType === ia ? e : e.ownerDocument;
    }
    function cR() {
    }
    function mh(e) {
      e.onclick = cR;
    }
    function fR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vo)
            f && Object.freeze(f), uv(t, f);
          else if (s === kd) {
            var p = f ? f[fh] : void 0;
            p != null && Kp(t, p);
          } else if (s === Fo)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Es(t, f);
            } else typeof f == "number" && Es(t, "" + f);
          else s === ch || s === Ru || s === X0 || (da.hasOwnProperty(s) ? f != null && (typeof f != "function" && ph(s, f), s === "onScroll" && Dt("scroll", t)) : f != null && Yi(t, s, f, u));
        }
    }
    function dR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vo ? uv(e, f) : s === kd ? Kp(e, f) : s === Fo ? Es(e, f) : Yi(e, s, f, i);
      }
    }
    function pR(e, t, a, i) {
      var u, s = J0(a), f, p = i;
      if (p === za && (p = gs(e)), p === za) {
        if (u = Ha(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var S = f;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === za && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Yn.call(By, e) && (By[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function vR(e, t) {
      return J0(t).createTextNode(e);
    }
    function hR(e, t, a, i) {
      var u = Ha(t, a);
      dh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Dt("cancel", e), Dt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Dt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < wd.length; f++)
            Dt(wd[f], e);
          s = a;
          break;
        case "source":
          Dt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Dt("error", e), Dt("load", e), s = a;
          break;
        case "details":
          Dt("toggle", e), s = a;
          break;
        case "input":
          Ju(e, a), s = Zu(e, a), Dt("invalid", e);
          break;
        case "option":
          ms(e, a), s = a;
          break;
        case "select":
          Ip(e, a), s = Tf(e, a), Dt("invalid", e);
          break;
        case "textarea":
          Wp(e, a), s = xf(e, a), Dt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Ts(t, s), fR(t, e, i, s, u), t) {
        case "input":
          Wi(e), eo(e, a, !1);
          break;
        case "textarea":
          Wi(e), Xp(e);
          break;
        case "option":
          Cf(e, a);
          break;
        case "select":
          ey(e, a);
          break;
        default:
          typeof s.onClick == "function" && mh(e);
          break;
      }
    }
    function mR(e, t, a, i, u) {
      dh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Zu(e, a), p = Zu(e, i), s = [];
          break;
        case "select":
          f = Tf(e, a), p = Tf(e, i), s = [];
          break;
        case "textarea":
          f = xf(e, a), p = xf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && mh(e);
          break;
      }
      Ts(t, p);
      var v, m, S = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vo) {
            var w = f[v];
            for (m in w)
              w.hasOwnProperty(m) && (S || (S = {}), S[m] = "");
          } else v === kd || v === Fo || v === ch || v === Ru || v === X0 || (da.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var R = p[v], L = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || R === L || R == null && L == null))
          if (v === Vo)
            if (R && Object.freeze(R), L) {
              for (m in L)
                L.hasOwnProperty(m) && (!R || !R.hasOwnProperty(m)) && (S || (S = {}), S[m] = "");
              for (m in R)
                R.hasOwnProperty(m) && L[m] !== R[m] && (S || (S = {}), S[m] = R[m]);
            } else
              S || (s || (s = []), s.push(v, S)), S = R;
          else if (v === kd) {
            var M = R ? R[fh] : void 0, z = L ? L[fh] : void 0;
            M != null && z !== M && (s = s || []).push(v, M);
          } else v === Fo ? (typeof R == "string" || typeof R == "number") && (s = s || []).push(v, "" + R) : v === ch || v === Ru || (da.hasOwnProperty(v) ? (R != null && (typeof R != "function" && ph(v, R), v === "onScroll" && Dt("scroll", e)), !s && L !== R && (s = [])) : (s = s || []).push(v, R));
      }
      return S && (ro(S, p[Vo]), (s = s || []).push(Vo, S)), s;
    }
    function yR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Ef(e, u);
      var s = Ha(a, i), f = Ha(a, u);
      switch (dR(e, t, s, f), a) {
        case "input":
          Fl(e, u);
          break;
        case "textarea":
          Gp(e, u);
          break;
        case "select":
          ty(e, u);
          break;
      }
    }
    function gR(e) {
      {
        var t = e.toLowerCase();
        return Rs.hasOwnProperty(t) && Rs[t] || null;
      }
    }
    function SR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Ha(t, a), dh(t, a), t) {
        case "dialog":
          Dt("cancel", e), Dt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Dt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < wd.length; m++)
            Dt(wd[m], e);
          break;
        case "source":
          Dt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Dt("error", e), Dt("load", e);
          break;
        case "details":
          Dt("toggle", e);
          break;
        case "input":
          Ju(e, a), Dt("invalid", e);
          break;
        case "option":
          ms(e, a);
          break;
        case "select":
          Ip(e, a), Dt("invalid", e);
          break;
        case "textarea":
          Wp(e, a), Dt("invalid", e);
          break;
      }
      Ts(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var S = e.attributes, w = 0; w < S.length; w++) {
          var R = S[w].name.toLowerCase();
          switch (R) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(S[w].name);
          }
        }
      }
      var L = null;
      for (var M in a)
        if (a.hasOwnProperty(M)) {
          var z = a[M];
          if (M === Fo)
            typeof z == "string" ? e.textContent !== z && (a[Ru] !== !0 && hh(e.textContent, z, s, f), L = [Fo, z]) : typeof z == "number" && e.textContent !== "" + z && (a[Ru] !== !0 && hh(e.textContent, z, s, f), L = [Fo, "" + z]);
          else if (da.hasOwnProperty(M))
            z != null && (typeof z != "function" && ph(M, z), M === "onScroll" && Dt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var J = void 0, Re = p && $n ? null : va(M);
            if (a[Ru] !== !0) {
              if (!(M === ch || M === Ru || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === kd) {
                  var me = e.innerHTML, Xe = z ? z[fh] : void 0;
                  if (Xe != null) {
                    var Ie = Z0(e, Xe);
                    Ie !== me && _d(M, me, Ie);
                  }
                } else if (M === Vo) {
                  if (v.delete(M), q0) {
                    var k = sy(z);
                    J = e.getAttribute("style"), k !== J && _d(M, J, k);
                  }
                } else if (p && !$n)
                  v.delete(M.toLowerCase()), J = us(e, M, z), z !== J && _d(M, J, z);
                else if (!Gt(M, Re, p) && !kt(M, z, Re, p)) {
                  var A = !1;
                  if (Re !== null)
                    v.delete(Re.attributeName), J = Pu(e, M, z, Re);
                  else {
                    var _ = i;
                    if (_ === za && (_ = gs(t)), _ === za)
                      v.delete(M.toLowerCase());
                    else {
                      var Q = gR(M);
                      Q !== null && Q !== M && (A = !0, v.delete(Q)), v.delete(M);
                    }
                    J = us(e, M, z);
                  }
                  var le = $n;
                  !le && z !== J && !A && _d(M, J, z);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Ru] !== !0 && K0(v), t) {
        case "input":
          Wi(e), eo(e, a, !0);
          break;
        case "textarea":
          Wi(e), Xp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && mh(e);
          break;
      }
      return L;
    }
    function ER(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Py(e, t) {
      {
        if (Yr)
          return;
        Yr = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function $y(e, t) {
      {
        if (Yr)
          return;
        Yr = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Yy(e, t, a) {
      {
        if (Yr)
          return;
        Yr = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Qy(e, t) {
      {
        if (t === "" || Yr)
          return;
        Yr = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function CR(e, t, a) {
      switch (t) {
        case "input":
          Pp(e, a);
          return;
        case "textarea":
          wf(e, a);
          return;
        case "select":
          ny(e, a);
          return;
      }
    }
    var Nd = function() {
    }, Ld = function() {
    };
    {
      var TR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], eE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], RR = eE.concat(["button"]), xR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], tE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Ld = function(e, t) {
        var a = Ye({}, e || tE), i = {
          tag: t
        };
        return eE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), RR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), TR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var wR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return xR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, DR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, nE = {};
      Nd = function(e, t, a) {
        a = a || tE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = wR(e, u) ? null : i, f = s ? null : DR(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!nE[m]) {
            nE[m] = !0;
            var S = e, w = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", w = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var R = "";
              v === "table" && e === "tr" && (R += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, w, R);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var yh = "suppressHydrationWarning", gh = "$", Sh = "/$", Od = "$?", Md = "$!", bR = "style", Iy = null, Wy = null;
    function kR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ia:
        case Gi: {
          t = i === ia ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : bf(null, "");
          break;
        }
        default: {
          var s = i === $t ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = bf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Ld(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function _R(e, t, a) {
      {
        var i = e, u = bf(i.namespace, t), s = Ld(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function D_(e) {
      return e;
    }
    function NR(e) {
      Iy = mu(), Wy = YT();
      var t = null;
      return nr(!1), t;
    }
    function LR(e) {
      QT(Wy), nr(Iy), Iy = null, Wy = null;
    }
    function OR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Nd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Ld(f.ancestorInfo, e);
          Nd(null, p, v);
        }
        s = f.namespace;
      }
      var m = pR(e, t, a, s);
      return Ad(u, m), tg(m, t), m;
    }
    function MR(e, t) {
      e.appendChild(t);
    }
    function UR(e, t, a, i, u) {
      switch (hR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function zR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Ld(f.ancestorInfo, t);
          Nd(null, p, v);
        }
      }
      return mR(e, t, a, i);
    }
    function Gy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function AR(e, t, a, i) {
      {
        var u = a;
        Nd(null, e, u.ancestorInfo);
      }
      var s = vR(e, t);
      return Ad(i, s), s;
    }
    function HR() {
      var e = window.event;
      return e === void 0 ? Sa : pc(e.type);
    }
    var Xy = typeof setTimeout == "function" ? setTimeout : void 0, FR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ky = -1, rE = typeof Promise == "function" ? Promise : void 0, VR = typeof queueMicrotask == "function" ? queueMicrotask : typeof rE < "u" ? function(e) {
      return rE.resolve(null).then(e).catch(jR);
    } : Xy;
    function jR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function BR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function PR(e, t, a, i, u, s) {
      yR(e, t, a, i, u), tg(e, u);
    }
    function aE(e) {
      Es(e, "");
    }
    function $R(e, t, a) {
      e.nodeValue = a;
    }
    function YR(e, t) {
      e.appendChild(t);
    }
    function QR(e, t) {
      var a;
      e.nodeType === $t ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && mh(a);
    }
    function IR(e, t, a) {
      e.insertBefore(t, a);
    }
    function WR(e, t, a) {
      e.nodeType === $t ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function GR(e, t) {
      e.removeChild(t);
    }
    function XR(e, t) {
      e.nodeType === $t ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function qy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === $t) {
          var s = u.data;
          if (s === Sh)
            if (i === 0) {
              e.removeChild(u), Mt(t);
              return;
            } else
              i--;
          else (s === gh || s === Od || s === Md) && i++;
        }
        a = u;
      } while (a);
      Mt(t);
    }
    function KR(e, t) {
      e.nodeType === $t ? qy(e.parentNode, t) : e.nodeType === In && qy(e, t), Mt(e);
    }
    function qR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ZR(e) {
      e.nodeValue = "";
    }
    function JR(e, t) {
      e = e;
      var a = t[bR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Cs("display", i);
    }
    function ex(e, t) {
      e.nodeValue = t;
    }
    function tx(e) {
      e.nodeType === In ? e.textContent = "" : e.nodeType === ia && e.documentElement && e.removeChild(e.documentElement);
    }
    function nx(e, t, a) {
      return e.nodeType !== In || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function rx(e, t) {
      return t === "" || e.nodeType !== Aa ? null : e;
    }
    function ax(e) {
      return e.nodeType !== $t ? null : e;
    }
    function iE(e) {
      return e.data === Od;
    }
    function Zy(e) {
      return e.data === Md;
    }
    function ix(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function lx(e, t) {
      e._reactRetry = t;
    }
    function Eh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === In || t === Aa)
          break;
        if (t === $t) {
          var a = e.data;
          if (a === gh || a === Md || a === Od)
            break;
          if (a === Sh)
            return null;
        }
      }
      return e;
    }
    function Ud(e) {
      return Eh(e.nextSibling);
    }
    function ux(e) {
      return Eh(e.firstChild);
    }
    function ox(e) {
      return Eh(e.firstChild);
    }
    function sx(e) {
      return Eh(e.nextSibling);
    }
    function cx(e, t, a, i, u, s, f) {
      Ad(s, e), tg(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & he) !== pe;
      return SR(e, t, a, p, i, m, f);
    }
    function fx(e, t, a, i) {
      return Ad(a, e), a.mode & he, ER(e, t);
    }
    function dx(e, t) {
      Ad(t, e);
    }
    function px(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $t) {
          var i = t.data;
          if (i === Sh) {
            if (a === 0)
              return Ud(t);
            a--;
          } else (i === gh || i === Md || i === Od) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function lE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $t) {
          var i = t.data;
          if (i === gh || i === Md || i === Od) {
            if (a === 0)
              return t;
            a--;
          } else i === Sh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function vx(e) {
      Mt(e);
    }
    function hx(e) {
      Mt(e);
    }
    function mx(e) {
      return e !== "head" && e !== "body";
    }
    function yx(e, t, a, i) {
      var u = !0;
      hh(t.nodeValue, a, i, u);
    }
    function gx(e, t, a, i, u, s) {
      if (t[yh] !== !0) {
        var f = !0;
        hh(i.nodeValue, u, s, f);
      }
    }
    function Sx(e, t) {
      t.nodeType === In ? Py(e, t) : t.nodeType === $t || $y(e, t);
    }
    function Ex(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === In ? Py(a, t) : t.nodeType === $t || $y(a, t));
      }
    }
    function Cx(e, t, a, i, u) {
      (u || t[yh] !== !0) && (i.nodeType === In ? Py(a, i) : i.nodeType === $t || $y(a, i));
    }
    function Tx(e, t, a) {
      Yy(e, t);
    }
    function Rx(e, t) {
      Qy(e, t);
    }
    function xx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Yy(i, t);
      }
    }
    function wx(e, t) {
      {
        var a = e.parentNode;
        a !== null && Qy(a, t);
      }
    }
    function Dx(e, t, a, i, u, s) {
      (s || t[yh] !== !0) && Yy(a, i);
    }
    function bx(e, t, a, i, u) {
      (u || t[yh] !== !0) && Qy(a, i);
    }
    function kx(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function _x(e) {
      Dd(e);
    }
    var Lc = Math.random().toString(36).slice(2), Oc = "__reactFiber$" + Lc, Jy = "__reactProps$" + Lc, zd = "__reactContainer$" + Lc, eg = "__reactEvents$" + Lc, Nx = "__reactListeners$" + Lc, Lx = "__reactHandles$" + Lc;
    function Ox(e) {
      delete e[Oc], delete e[Jy], delete e[eg], delete e[Nx], delete e[Lx];
    }
    function Ad(e, t) {
      t[Oc] = e;
    }
    function Ch(e, t) {
      t[zd] = e;
    }
    function uE(e) {
      e[zd] = null;
    }
    function Hd(e) {
      return !!e[zd];
    }
    function jo(e) {
      var t = e[Oc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[zd] || a[Oc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = lE(e); u !== null; ) {
              var s = u[Oc];
              if (s)
                return s;
              u = lE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xu(e) {
      var t = e[Oc] || e[zd];
      return t && (t.tag === re || t.tag === ge || t.tag === He || t.tag === W) ? t : null;
    }
    function Mc(e) {
      if (e.tag === re || e.tag === ge)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[Jy] || null;
    }
    function tg(e, t) {
      e[Jy] = t;
    }
    function Mx(e) {
      var t = e[eg];
      return t === void 0 && (t = e[eg] = /* @__PURE__ */ new Set()), t;
    }
    var oE = {}, sE = C.ReactDebugCurrentFrame;
    function Rh(e) {
      if (e) {
        var t = e._owner, a = Iu(e.type, e._source, t ? t.type : null);
        sE.setExtraStackFrame(a);
      } else
        sE.setExtraStackFrame(null);
    }
    function Xa(e, t, a, i, u) {
      {
        var s = Function.call.bind(Yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (Rh(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Rh(null)), p instanceof Error && !(p.message in oE) && (oE[p.message] = !0, Rh(u), y("Failed %s type: %s", a, p.message), Rh(null));
          }
      }
    }
    var ng = [], xh;
    xh = [];
    var gl = -1;
    function wu(e) {
      return {
        current: e
      };
    }
    function rr(e, t) {
      if (gl < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== xh[gl] && y("Unexpected Fiber popped."), e.current = ng[gl], ng[gl] = null, xh[gl] = null, gl--;
    }
    function ar(e, t, a) {
      gl++, ng[gl] = e.current, xh[gl] = a, e.current = t;
    }
    var rg;
    rg = {};
    var sa = {};
    Object.freeze(sa);
    var Sl = wu(sa), Li = wu(!1), ag = sa;
    function Uc(e, t, a) {
      return a && Oi(t) ? ag : Sl.current;
    }
    function cE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function zc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return sa;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Fe(e) || "Unknown";
          Xa(i, s, "context", p);
        }
        return u && cE(e, t, s), s;
      }
    }
    function wh() {
      return Li.current;
    }
    function Oi(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Dh(e) {
      rr(Li, e), rr(Sl, e);
    }
    function ig(e) {
      rr(Li, e), rr(Sl, e);
    }
    function fE(e, t, a) {
      {
        if (Sl.current !== sa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ar(Sl, t, e), ar(Li, a, e);
      }
    }
    function dE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Fe(e) || "Unknown";
            rg[s] || (rg[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Fe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Fe(e) || "Unknown";
          Xa(u, f, "child context", v);
        }
        return Ye({}, a, f);
      }
    }
    function bh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || sa;
        return ag = Sl.current, ar(Sl, a, e), ar(Li, Li.current, e), !0;
      }
    }
    function pE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = dE(e, t, ag);
          i.__reactInternalMemoizedMergedChildContext = u, rr(Li, e), rr(Sl, e), ar(Sl, u, e), ar(Li, a, e);
        } else
          rr(Li, e), ar(Li, a, e);
      }
    }
    function Ux(e) {
      {
        if (!Wf(e) || e.tag !== V)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case W:
              return t.stateNode.context;
            case V: {
              var a = t.type;
              if (Oi(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Du = 0, kh = 1, El = null, lg = !1, ug = !1;
    function vE(e) {
      El === null ? El = [e] : El.push(e);
    }
    function zx(e) {
      lg = !0, vE(e);
    }
    function hE() {
      lg && bu();
    }
    function bu() {
      if (!ug && El !== null) {
        ug = !0;
        var e = 0, t = Vr();
        try {
          var a = !0, i = El;
          for (Ot(Ft); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          El = null, lg = !1;
        } catch (s) {
          throw El !== null && (El = El.slice(e + 1)), Os(Us, bu), s;
        } finally {
          Ot(t), ug = !1;
        }
      }
      return null;
    }
    var Ac = [], Hc = 0, _h = null, Nh = 0, Ra = [], xa = 0, Bo = null, Cl = 1, Tl = "";
    function Ax(e) {
      return $o(), (e.flags & Yf) !== Te;
    }
    function Hx(e) {
      return $o(), Nh;
    }
    function Fx() {
      var e = Tl, t = Cl, a = t & ~Vx(t);
      return a.toString(32) + e;
    }
    function Po(e, t) {
      $o(), Ac[Hc++] = Nh, Ac[Hc++] = _h, _h = e, Nh = t;
    }
    function mE(e, t, a) {
      $o(), Ra[xa++] = Cl, Ra[xa++] = Tl, Ra[xa++] = Bo, Bo = e;
      var i = Cl, u = Tl, s = Lh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Lh(t) + s;
      if (v > 30) {
        var m = s - s % 5, S = (1 << m) - 1, w = (f & S).toString(32), R = f >> m, L = s - m, M = Lh(t) + L, z = p << L, J = z | R, Re = w + u;
        Cl = 1 << M | J, Tl = Re;
      } else {
        var me = p << s, Xe = me | f, Ie = u;
        Cl = 1 << v | Xe, Tl = Ie;
      }
    }
    function og(e) {
      $o();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Po(e, a), mE(e, a, i);
      }
    }
    function Lh(e) {
      return 32 - Jl(e);
    }
    function Vx(e) {
      return 1 << Lh(e) - 1;
    }
    function sg(e) {
      for (; e === _h; )
        _h = Ac[--Hc], Ac[Hc] = null, Nh = Ac[--Hc], Ac[Hc] = null;
      for (; e === Bo; )
        Bo = Ra[--xa], Ra[xa] = null, Tl = Ra[--xa], Ra[xa] = null, Cl = Ra[--xa], Ra[xa] = null;
    }
    function jx() {
      return $o(), Bo !== null ? {
        id: Cl,
        overflow: Tl
      } : null;
    }
    function Bx(e, t) {
      $o(), Ra[xa++] = Cl, Ra[xa++] = Tl, Ra[xa++] = Bo, Cl = t.id, Tl = t.overflow, Bo = e;
    }
    function $o() {
      Un() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Mn = null, wa = null, Ka = !1, Yo = !1, ku = null;
    function Px() {
      Ka && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function yE() {
      Yo = !0;
    }
    function $x() {
      return Yo;
    }
    function Yx(e) {
      var t = e.stateNode.containerInfo;
      return wa = ox(t), Mn = e, Ka = !0, ku = null, Yo = !1, !0;
    }
    function Qx(e, t, a) {
      return wa = sx(t), Mn = e, Ka = !0, ku = null, Yo = !1, a !== null && Bx(e, a), !0;
    }
    function gE(e, t) {
      switch (e.tag) {
        case W: {
          Sx(e.stateNode.containerInfo, t);
          break;
        }
        case re: {
          var a = (e.mode & he) !== pe;
          Cx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case He: {
          var i = e.memoizedState;
          i.dehydrated !== null && Ex(i.dehydrated, t);
          break;
        }
      }
    }
    function SE(e, t) {
      gE(e, t);
      var a = Xb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= et) : i.push(a);
    }
    function cg(e, t) {
      {
        if (Yo)
          return;
        switch (e.tag) {
          case W: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case re:
                var i = t.type;
                t.pendingProps, Tx(a, i);
                break;
              case ge:
                var u = t.pendingProps;
                Rx(a, u);
                break;
            }
            break;
          }
          case re: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case re: {
                var v = t.type, m = t.pendingProps, S = (e.mode & he) !== pe;
                Dx(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  S
                );
                break;
              }
              case ge: {
                var w = t.pendingProps, R = (e.mode & he) !== pe;
                bx(
                  s,
                  f,
                  p,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
            }
            break;
          }
          case He: {
            var L = e.memoizedState, M = L.dehydrated;
            if (M !== null) switch (t.tag) {
              case re:
                var z = t.type;
                t.pendingProps, xx(M, z);
                break;
              case ge:
                var J = t.pendingProps;
                wx(M, J);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function EE(e, t) {
      t.flags = t.flags & ~Mr | mt, cg(e, t);
    }
    function CE(e, t) {
      switch (e.tag) {
        case re: {
          var a = e.type;
          e.pendingProps;
          var i = nx(t, a);
          return i !== null ? (e.stateNode = i, Mn = e, wa = ux(i), !0) : !1;
        }
        case ge: {
          var u = e.pendingProps, s = rx(t, u);
          return s !== null ? (e.stateNode = s, Mn = e, wa = null, !0) : !1;
        }
        case He: {
          var f = ax(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: jx(),
              retryLane: Dn
            };
            e.memoizedState = p;
            var v = Kb(f);
            return v.return = e, e.child = v, Mn = e, wa = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function fg(e) {
      return (e.mode & he) !== pe && (e.flags & Oe) === Te;
    }
    function dg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function pg(e) {
      if (Ka) {
        var t = wa;
        if (!t) {
          fg(e) && (cg(Mn, e), dg()), EE(Mn, e), Ka = !1, Mn = e;
          return;
        }
        var a = t;
        if (!CE(e, t)) {
          fg(e) && (cg(Mn, e), dg()), t = Ud(a);
          var i = Mn;
          if (!t || !CE(e, t)) {
            EE(Mn, e), Ka = !1, Mn = e;
            return;
          }
          SE(i, a);
        }
      }
    }
    function Ix(e, t, a) {
      var i = e.stateNode, u = !Yo, s = cx(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Wx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = fx(t, a, e);
      if (i) {
        var u = Mn;
        if (u !== null)
          switch (u.tag) {
            case W: {
              var s = u.stateNode.containerInfo, f = (u.mode & he) !== pe;
              yx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case re: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, S = (u.mode & he) !== pe;
              gx(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                S
              );
              break;
            }
          }
      }
      return i;
    }
    function Gx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      dx(a, e);
    }
    function Xx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return px(a);
    }
    function TE(e) {
      for (var t = e.return; t !== null && t.tag !== re && t.tag !== W && t.tag !== He; )
        t = t.return;
      Mn = t;
    }
    function Oh(e) {
      if (e !== Mn)
        return !1;
      if (!Ka)
        return TE(e), Ka = !0, !1;
      if (e.tag !== W && (e.tag !== re || mx(e.type) && !Gy(e.type, e.memoizedProps))) {
        var t = wa;
        if (t)
          if (fg(e))
            RE(e), dg();
          else
            for (; t; )
              SE(e, t), t = Ud(t);
      }
      return TE(e), e.tag === He ? wa = Xx(e) : wa = Mn ? Ud(e.stateNode) : null, !0;
    }
    function Kx() {
      return Ka && wa !== null;
    }
    function RE(e) {
      for (var t = wa; t; )
        gE(e, t), t = Ud(t);
    }
    function Fc() {
      Mn = null, wa = null, Ka = !1, Yo = !1;
    }
    function xE() {
      ku !== null && (y1(ku), ku = null);
    }
    function Un() {
      return Ka;
    }
    function vg(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    var qx = C.ReactCurrentBatchConfig, Zx = null;
    function Jx() {
      return qx.transition;
    }
    var qa = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var ew = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Pe && (t = a), a = a.return;
        return t;
      }, Qo = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Fd = [], Vd = [], jd = [], Bd = [], Pd = [], $d = [], Io = /* @__PURE__ */ new Set();
      qa.recordUnsafeLifecycleWarnings = function(e, t) {
        Io.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Fd.push(e), e.mode & Pe && typeof t.UNSAFE_componentWillMount == "function" && Vd.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && jd.push(e), e.mode & Pe && typeof t.UNSAFE_componentWillReceiveProps == "function" && Bd.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Pd.push(e), e.mode & Pe && typeof t.UNSAFE_componentWillUpdate == "function" && $d.push(e));
      }, qa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Fd.length > 0 && (Fd.forEach(function(R) {
          e.add(Fe(R) || "Component"), Io.add(R.type);
        }), Fd = []);
        var t = /* @__PURE__ */ new Set();
        Vd.length > 0 && (Vd.forEach(function(R) {
          t.add(Fe(R) || "Component"), Io.add(R.type);
        }), Vd = []);
        var a = /* @__PURE__ */ new Set();
        jd.length > 0 && (jd.forEach(function(R) {
          a.add(Fe(R) || "Component"), Io.add(R.type);
        }), jd = []);
        var i = /* @__PURE__ */ new Set();
        Bd.length > 0 && (Bd.forEach(function(R) {
          i.add(Fe(R) || "Component"), Io.add(R.type);
        }), Bd = []);
        var u = /* @__PURE__ */ new Set();
        Pd.length > 0 && (Pd.forEach(function(R) {
          u.add(Fe(R) || "Component"), Io.add(R.type);
        }), Pd = []);
        var s = /* @__PURE__ */ new Set();
        if ($d.length > 0 && ($d.forEach(function(R) {
          s.add(Fe(R) || "Component"), Io.add(R.type);
        }), $d = []), t.size > 0) {
          var f = Qo(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Qo(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Qo(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = Qo(e);
          I(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var S = Qo(a);
          I(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (u.size > 0) {
          var w = Qo(u);
          I(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Mh = /* @__PURE__ */ new Map(), wE = /* @__PURE__ */ new Set();
      qa.recordLegacyContextWarning = function(e, t) {
        var a = ew(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!wE.has(e.type)) {
          var i = Mh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Mh.set(a, i)), i.push(e));
        }
      }, qa.flushLegacyContextWarning = function() {
        Mh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Fe(s) || "Component"), wE.add(s.type);
            });
            var u = Qo(i);
            try {
              st(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Xt();
            }
          }
        });
      }, qa.discardPendingWarnings = function() {
        Fd = [], Vd = [], jd = [], Bd = [], Pd = [], $d = [], Mh = /* @__PURE__ */ new Map();
      };
    }
    var hg, mg, yg, gg, Sg, DE = function(e, t) {
    };
    hg = !1, mg = !1, yg = {}, gg = {}, Sg = {}, DE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Fe(t) || "Component";
        gg[a] || (gg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function tw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Yd(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Pe || or) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== V) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !tw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Fe(e) || "Component";
          yg[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), yg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== V)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Pi(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var S = function(w) {
            var R = v.refs;
            w === null ? delete R[m] : R[m] = w;
          };
          return S._stringRef = m, S;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Uh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function zh(e) {
      {
        var t = Fe(e) || "Component";
        if (Sg[t])
          return;
        Sg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function bE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function kE(e) {
      function t(k, A) {
        if (e) {
          var _ = k.deletions;
          _ === null ? (k.deletions = [A], k.flags |= et) : _.push(A);
        }
      }
      function a(k, A) {
        if (!e)
          return null;
        for (var _ = A; _ !== null; )
          t(k, _), _ = _.sibling;
        return null;
      }
      function i(k, A) {
        for (var _ = /* @__PURE__ */ new Map(), Q = A; Q !== null; )
          Q.key !== null ? _.set(Q.key, Q) : _.set(Q.index, Q), Q = Q.sibling;
        return _;
      }
      function u(k, A) {
        var _ = ts(k, A);
        return _.index = 0, _.sibling = null, _;
      }
      function s(k, A, _) {
        if (k.index = _, !e)
          return k.flags |= Yf, A;
        var Q = k.alternate;
        if (Q !== null) {
          var le = Q.index;
          return le < A ? (k.flags |= mt, A) : le;
        } else
          return k.flags |= mt, A;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= mt), k;
      }
      function p(k, A, _, Q) {
        if (A === null || A.tag !== ge) {
          var le = v0(_, k.mode, Q);
          return le.return = k, le;
        } else {
          var te = u(A, _);
          return te.return = k, te;
        }
      }
      function v(k, A, _, Q) {
        var le = _.type;
        if (le === Oa)
          return S(k, A, _.props.children, Q, _.key);
        if (A !== null && (A.elementType === le || // Keep this check inline so it only runs on the false path:
        M1(A, _) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof le == "object" && le !== null && le.$$typeof === Ln && bE(le) === A.type)) {
          var te = u(A, _.props);
          return te.ref = Yd(k, A, _), te.return = k, te._debugSource = _._source, te._debugOwner = _._owner, te;
        }
        var Le = p0(_, k.mode, Q);
        return Le.ref = Yd(k, A, _), Le.return = k, Le;
      }
      function m(k, A, _, Q) {
        if (A === null || A.tag !== q || A.stateNode.containerInfo !== _.containerInfo || A.stateNode.implementation !== _.implementation) {
          var le = h0(_, k.mode, Q);
          return le.return = k, le;
        } else {
          var te = u(A, _.children || []);
          return te.return = k, te;
        }
      }
      function S(k, A, _, Q, le) {
        if (A === null || A.tag !== ke) {
          var te = Vu(_, k.mode, Q, le);
          return te.return = k, te;
        } else {
          var Le = u(A, _);
          return Le.return = k, Le;
        }
      }
      function w(k, A, _) {
        if (typeof A == "string" && A !== "" || typeof A == "number") {
          var Q = v0("" + A, k.mode, _);
          return Q.return = k, Q;
        }
        if (typeof A == "object" && A !== null) {
          switch (A.$$typeof) {
            case Ll: {
              var le = p0(A, k.mode, _);
              return le.ref = Yd(k, null, A), le.return = k, le;
            }
            case ta: {
              var te = h0(A, k.mode, _);
              return te.return = k, te;
            }
            case Ln: {
              var Le = A._payload, Ae = A._init;
              return w(k, Ae(Le), _);
            }
          }
          if (nn(A) || Ma(A)) {
            var ft = Vu(A, k.mode, _, null);
            return ft.return = k, ft;
          }
          Uh(k, A);
        }
        return typeof A == "function" && zh(k), null;
      }
      function R(k, A, _, Q) {
        var le = A !== null ? A.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
          return le !== null ? null : p(k, A, "" + _, Q);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Ll:
              return _.key === le ? v(k, A, _, Q) : null;
            case ta:
              return _.key === le ? m(k, A, _, Q) : null;
            case Ln: {
              var te = _._payload, Le = _._init;
              return R(k, A, Le(te), Q);
            }
          }
          if (nn(_) || Ma(_))
            return le !== null ? null : S(k, A, _, Q, null);
          Uh(k, _);
        }
        return typeof _ == "function" && zh(k), null;
      }
      function L(k, A, _, Q, le) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var te = k.get(_) || null;
          return p(A, te, "" + Q, le);
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Ll: {
              var Le = k.get(Q.key === null ? _ : Q.key) || null;
              return v(A, Le, Q, le);
            }
            case ta: {
              var Ae = k.get(Q.key === null ? _ : Q.key) || null;
              return m(A, Ae, Q, le);
            }
            case Ln:
              var ft = Q._payload, qe = Q._init;
              return L(k, A, _, qe(ft), le);
          }
          if (nn(Q) || Ma(Q)) {
            var tn = k.get(_) || null;
            return S(A, tn, Q, le, null);
          }
          Uh(A, Q);
        }
        return typeof Q == "function" && zh(A), null;
      }
      function M(k, A, _) {
        {
          if (typeof k != "object" || k === null)
            return A;
          switch (k.$$typeof) {
            case Ll:
            case ta:
              DE(k, _);
              var Q = k.key;
              if (typeof Q != "string")
                break;
              if (A === null) {
                A = /* @__PURE__ */ new Set(), A.add(Q);
                break;
              }
              if (!A.has(Q)) {
                A.add(Q);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Q);
              break;
            case Ln:
              var le = k._payload, te = k._init;
              M(te(le), A, _);
              break;
          }
        }
        return A;
      }
      function z(k, A, _, Q) {
        for (var le = null, te = 0; te < _.length; te++) {
          var Le = _[te];
          le = M(Le, le, k);
        }
        for (var Ae = null, ft = null, qe = A, tn = 0, Ze = 0, It = null; qe !== null && Ze < _.length; Ze++) {
          qe.index > Ze ? (It = qe, qe = null) : It = qe.sibling;
          var lr = R(k, qe, _[Ze], Q);
          if (lr === null) {
            qe === null && (qe = It);
            break;
          }
          e && qe && lr.alternate === null && t(k, qe), tn = s(lr, tn, Ze), ft === null ? Ae = lr : ft.sibling = lr, ft = lr, qe = It;
        }
        if (Ze === _.length) {
          if (a(k, qe), Un()) {
            var Bn = Ze;
            Po(k, Bn);
          }
          return Ae;
        }
        if (qe === null) {
          for (; Ze < _.length; Ze++) {
            var fa = w(k, _[Ze], Q);
            fa !== null && (tn = s(fa, tn, Ze), ft === null ? Ae = fa : ft.sibling = fa, ft = fa);
          }
          if (Un()) {
            var Er = Ze;
            Po(k, Er);
          }
          return Ae;
        }
        for (var Cr = i(k, qe); Ze < _.length; Ze++) {
          var ur = L(Cr, k, Ze, _[Ze], Q);
          ur !== null && (e && ur.alternate !== null && Cr.delete(ur.key === null ? Ze : ur.key), tn = s(ur, tn, Ze), ft === null ? Ae = ur : ft.sibling = ur, ft = ur);
        }
        if (e && Cr.forEach(function(rf) {
          return t(k, rf);
        }), Un()) {
          var _l = Ze;
          Po(k, _l);
        }
        return Ae;
      }
      function J(k, A, _, Q) {
        var le = Ma(_);
        if (typeof le != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          _[Symbol.toStringTag] === "Generator" && (mg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), mg = !0), _.entries === le && (hg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), hg = !0);
          var te = le.call(_);
          if (te)
            for (var Le = null, Ae = te.next(); !Ae.done; Ae = te.next()) {
              var ft = Ae.value;
              Le = M(ft, Le, k);
            }
        }
        var qe = le.call(_);
        if (qe == null)
          throw new Error("An iterable object provided no iterator.");
        for (var tn = null, Ze = null, It = A, lr = 0, Bn = 0, fa = null, Er = qe.next(); It !== null && !Er.done; Bn++, Er = qe.next()) {
          It.index > Bn ? (fa = It, It = null) : fa = It.sibling;
          var Cr = R(k, It, Er.value, Q);
          if (Cr === null) {
            It === null && (It = fa);
            break;
          }
          e && It && Cr.alternate === null && t(k, It), lr = s(Cr, lr, Bn), Ze === null ? tn = Cr : Ze.sibling = Cr, Ze = Cr, It = fa;
        }
        if (Er.done) {
          if (a(k, It), Un()) {
            var ur = Bn;
            Po(k, ur);
          }
          return tn;
        }
        if (It === null) {
          for (; !Er.done; Bn++, Er = qe.next()) {
            var _l = w(k, Er.value, Q);
            _l !== null && (lr = s(_l, lr, Bn), Ze === null ? tn = _l : Ze.sibling = _l, Ze = _l);
          }
          if (Un()) {
            var rf = Bn;
            Po(k, rf);
          }
          return tn;
        }
        for (var Tp = i(k, It); !Er.done; Bn++, Er = qe.next()) {
          var ji = L(Tp, k, Bn, Er.value, Q);
          ji !== null && (e && ji.alternate !== null && Tp.delete(ji.key === null ? Bn : ji.key), lr = s(ji, lr, Bn), Ze === null ? tn = ji : Ze.sibling = ji, Ze = ji);
        }
        if (e && Tp.forEach(function(bk) {
          return t(k, bk);
        }), Un()) {
          var Dk = Bn;
          Po(k, Dk);
        }
        return tn;
      }
      function Re(k, A, _, Q) {
        if (A !== null && A.tag === ge) {
          a(k, A.sibling);
          var le = u(A, _);
          return le.return = k, le;
        }
        a(k, A);
        var te = v0(_, k.mode, Q);
        return te.return = k, te;
      }
      function me(k, A, _, Q) {
        for (var le = _.key, te = A; te !== null; ) {
          if (te.key === le) {
            var Le = _.type;
            if (Le === Oa) {
              if (te.tag === ke) {
                a(k, te.sibling);
                var Ae = u(te, _.props.children);
                return Ae.return = k, Ae._debugSource = _._source, Ae._debugOwner = _._owner, Ae;
              }
            } else if (te.elementType === Le || // Keep this check inline so it only runs on the false path:
            M1(te, _) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Le == "object" && Le !== null && Le.$$typeof === Ln && bE(Le) === te.type) {
              a(k, te.sibling);
              var ft = u(te, _.props);
              return ft.ref = Yd(k, te, _), ft.return = k, ft._debugSource = _._source, ft._debugOwner = _._owner, ft;
            }
            a(k, te);
            break;
          } else
            t(k, te);
          te = te.sibling;
        }
        if (_.type === Oa) {
          var qe = Vu(_.props.children, k.mode, Q, _.key);
          return qe.return = k, qe;
        } else {
          var tn = p0(_, k.mode, Q);
          return tn.ref = Yd(k, A, _), tn.return = k, tn;
        }
      }
      function Xe(k, A, _, Q) {
        for (var le = _.key, te = A; te !== null; ) {
          if (te.key === le)
            if (te.tag === q && te.stateNode.containerInfo === _.containerInfo && te.stateNode.implementation === _.implementation) {
              a(k, te.sibling);
              var Le = u(te, _.children || []);
              return Le.return = k, Le;
            } else {
              a(k, te);
              break;
            }
          else
            t(k, te);
          te = te.sibling;
        }
        var Ae = h0(_, k.mode, Q);
        return Ae.return = k, Ae;
      }
      function Ie(k, A, _, Q) {
        var le = typeof _ == "object" && _ !== null && _.type === Oa && _.key === null;
        if (le && (_ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Ll:
              return f(me(k, A, _, Q));
            case ta:
              return f(Xe(k, A, _, Q));
            case Ln:
              var te = _._payload, Le = _._init;
              return Ie(k, A, Le(te), Q);
          }
          if (nn(_))
            return z(k, A, _, Q);
          if (Ma(_))
            return J(k, A, _, Q);
          Uh(k, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" ? f(Re(k, A, "" + _, Q)) : (typeof _ == "function" && zh(k), a(k, A));
      }
      return Ie;
    }
    var Vc = kE(!0), _E = kE(!1);
    function nw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ts(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ts(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function rw(e, t) {
      for (var a = e.child; a !== null; )
        Yb(a, t), a = a.sibling;
    }
    var Eg = wu(null), Cg;
    Cg = {};
    var Ah = null, jc = null, Tg = null, Hh = !1;
    function Fh() {
      Ah = null, jc = null, Tg = null, Hh = !1;
    }
    function NE() {
      Hh = !0;
    }
    function LE() {
      Hh = !1;
    }
    function OE(e, t, a) {
      ar(Eg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Cg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Cg;
    }
    function Rg(e, t) {
      var a = Eg.current;
      rr(Eg, t), e._currentValue = a;
    }
    function xg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (cl(i.childLanes, t) ? u !== null && !cl(u.childLanes, t) && (u.childLanes = Ve(u.childLanes, t)) : (i.childLanes = Ve(i.childLanes, t), u !== null && (u.childLanes = Ve(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function aw(e, t, a) {
      iw(e, t, a);
    }
    function iw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === V) {
                var p = lu(a), v = Rl(ht, p);
                v.tag = jh;
                var m = i.updateQueue;
                if (m !== null) {
                  var S = m.shared, w = S.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), S.pending = v;
                }
              }
              i.lanes = Ve(i.lanes, a);
              var R = i.alternate;
              R !== null && (R.lanes = Ve(R.lanes, a)), xg(i.return, a, e), s.lanes = Ve(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ue)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Et) {
          var L = i.return;
          if (L === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          L.lanes = Ve(L.lanes, a);
          var M = L.alternate;
          M !== null && (M.lanes = Ve(M.lanes, a)), xg(L, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var z = u.sibling;
            if (z !== null) {
              z.return = u.return, u = z;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Bc(e, t) {
      Ah = e, jc = null, Tg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (tr(a.lanes, t) && ip(), a.firstContext = null);
      }
    }
    function sn(e) {
      Hh && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Tg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (jc === null) {
          if (Ah === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          jc = a, Ah.dependencies = {
            lanes: j,
            firstContext: a
          };
        } else
          jc = jc.next = a;
      }
      return t;
    }
    var Wo = null;
    function wg(e) {
      Wo === null ? Wo = [e] : Wo.push(e);
    }
    function lw() {
      if (Wo !== null) {
        for (var e = 0; e < Wo.length; e++) {
          var t = Wo[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Wo = null;
      }
    }
    function ME(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function uw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function Qr(e, t) {
      return Vh(e, t);
    }
    var sw = Vh;
    function Vh(e, t) {
      e.lanes = Ve(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ve(a.lanes, t)), a === null && (e.flags & (mt | Mr)) !== Te && _1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ve(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ve(a.childLanes, t) : (u.flags & (mt | Mr)) !== Te && _1(e), i = u, u = u.return;
      if (i.tag === W) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var UE = 0, zE = 1, jh = 2, Dg = 3, Bh = !1, bg, Ph;
    bg = !1, Ph = null;
    function kg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: j
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function AE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Rl(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: UE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function _u(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ph === u && !bg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), bg = !0), ub()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, sw(e, a);
      } else
        return ow(e, u, t, a);
    }
    function $h(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (id(a)) {
          var s = u.lanes;
          s = ac(s, e.pendingLanes);
          var f = Ve(s, a);
          u.lanes = f, ld(e, f);
        }
      }
    }
    function _g(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var S = a.lastBaseUpdate;
      S === null ? a.firstBaseUpdate = t : S.next = t, a.lastBaseUpdate = t;
    }
    function cw(e, t, a, i, u, s) {
      switch (a.tag) {
        case zE: {
          var f = a.payload;
          if (typeof f == "function") {
            NE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Pe) {
                Yt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Yt(!1);
                }
              }
              LE();
            }
            return p;
          }
          return f;
        }
        case Dg:
          e.flags = e.flags & ~an | Oe;
        case UE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            NE(), m = v.call(s, i, u);
            {
              if (e.mode & Pe) {
                Yt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Yt(!1);
                }
              }
              LE();
            }
          } else
            m = v;
          return m == null ? i : Ye({}, i, m);
        }
        case jh:
          return Bh = !0, i;
      }
      return i;
    }
    function Yh(e, t, a, i) {
      var u = e.updateQueue;
      Bh = !1, Ph = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var S = e.alternate;
        if (S !== null) {
          var w = S.updateQueue, R = w.lastBaseUpdate;
          R !== f && (R === null ? w.firstBaseUpdate = m : R.next = m, w.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, M = j, z = null, J = null, Re = null, me = s;
        do {
          var Xe = me.lane, Ie = me.eventTime;
          if (cl(i, Xe)) {
            if (Re !== null) {
              var A = {
                eventTime: Ie,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Qt,
                tag: me.tag,
                payload: me.payload,
                callback: me.callback,
                next: null
              };
              Re = Re.next = A;
            }
            L = cw(e, u, me, L, t, a);
            var _ = me.callback;
            if (_ !== null && // If the update was already committed, we should not queue its
            // callback again.
            me.lane !== Qt) {
              e.flags |= ya;
              var Q = u.effects;
              Q === null ? u.effects = [me] : Q.push(me);
            }
          } else {
            var k = {
              eventTime: Ie,
              lane: Xe,
              tag: me.tag,
              payload: me.payload,
              callback: me.callback,
              next: null
            };
            Re === null ? (J = Re = k, z = L) : Re = Re.next = k, M = Ve(M, Xe);
          }
          if (me = me.next, me === null) {
            if (p = u.shared.pending, p === null)
              break;
            var le = p, te = le.next;
            le.next = null, me = te, u.lastBaseUpdate = le, u.shared.pending = null;
          }
        } while (!0);
        Re === null && (z = L), u.baseState = z, u.firstBaseUpdate = J, u.lastBaseUpdate = Re;
        var Le = u.shared.interleaved;
        if (Le !== null) {
          var Ae = Le;
          do
            M = Ve(M, Ae.lane), Ae = Ae.next;
          while (Ae !== Le);
        } else s === null && (u.shared.lanes = j);
        yp(M), e.lanes = M, e.memoizedState = L;
      }
      Ph = null;
    }
    function fw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function HE() {
      Bh = !1;
    }
    function Qh() {
      return Bh;
    }
    function FE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, fw(f, a));
        }
    }
    var Qd = {}, Nu = wu(Qd), Id = wu(Qd), Ih = wu(Qd);
    function Wh(e) {
      if (e === Qd)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function VE() {
      var e = Wh(Ih.current);
      return e;
    }
    function Ng(e, t) {
      ar(Ih, t, e), ar(Id, e, e), ar(Nu, Qd, e);
      var a = kR(t);
      rr(Nu, e), ar(Nu, a, e);
    }
    function Pc(e) {
      rr(Nu, e), rr(Id, e), rr(Ih, e);
    }
    function Lg() {
      var e = Wh(Nu.current);
      return e;
    }
    function jE(e) {
      Wh(Ih.current);
      var t = Wh(Nu.current), a = _R(t, e.type);
      t !== a && (ar(Id, e, e), ar(Nu, a, e));
    }
    function Og(e) {
      Id.current === e && (rr(Nu, e), rr(Id, e));
    }
    var dw = 0, BE = 1, PE = 1, Wd = 2, Za = wu(dw);
    function Mg(e, t) {
      return (e & t) !== 0;
    }
    function $c(e) {
      return e & BE;
    }
    function Ug(e, t) {
      return e & BE | t;
    }
    function pw(e, t) {
      return e | t;
    }
    function Lu(e, t) {
      ar(Za, t, e);
    }
    function Yc(e) {
      rr(Za, e);
    }
    function vw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === He) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || iE(i) || Zy(i))
              return t;
          }
        } else if (t.tag === lt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Oe) !== Te;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ir = (
      /*   */
      0
    ), pn = (
      /* */
      1
    ), Mi = (
      /*  */
      2
    ), vn = (
      /*    */
      4
    ), zn = (
      /*   */
      8
    ), zg = [];
    function Ag() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e];
        t._workInProgressVersionPrimary = null;
      }
      zg.length = 0;
    }
    function hw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ie = C.ReactCurrentDispatcher, Gd = C.ReactCurrentBatchConfig, Hg, Qc;
    Hg = /* @__PURE__ */ new Set();
    var Go = j, ct = null, hn = null, mn = null, Xh = !1, Xd = !1, Kd = 0, mw = 0, yw = 25, H = null, Da = null, Ou = -1, Fg = !1;
    function nt() {
      {
        var e = H;
        Da === null ? Da = [e] : Da.push(e);
      }
    }
    function K() {
      {
        var e = H;
        Da !== null && (Ou++, Da[Ou] !== e && gw(e));
      }
    }
    function Ic(e) {
      e != null && !nn(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", H, typeof e);
    }
    function gw(e) {
      {
        var t = Fe(ct);
        if (!Hg.has(t) && (Hg.add(t), Da !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ou; u++) {
            for (var s = Da[u], f = u === Ou ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ir() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Vg(e, t) {
      if (Fg)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", H), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, H, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Wc(e, t, a, i, u, s) {
      Go = s, ct = t, Da = e !== null ? e._debugHookTypes : null, Ou = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = j, e !== null && e.memoizedState !== null ? ie.current = cC : Da !== null ? ie.current = sC : ie.current = oC;
      var f = a(i, u);
      if (Xd) {
        var p = 0;
        do {
          if (Xd = !1, Kd = 0, p >= yw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, hn = null, mn = null, t.updateQueue = null, Ou = -1, ie.current = fC, f = a(i, u);
        } while (Xd);
      }
      ie.current = om, t._debugHookTypes = Da;
      var v = hn !== null && hn.next !== null;
      if (Go = j, ct = null, hn = null, mn = null, H = null, Da = null, Ou = -1, e !== null && (e.flags & cn) !== (t.flags & cn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & he) !== pe && y("Internal React error: Expected static flag was missing. Please notify the React team."), Xh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Gc() {
      var e = Kd !== 0;
      return Kd = 0, e;
    }
    function $E(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & hr) !== pe ? t.flags &= ~(tl | Xn | Ct | je) : t.flags &= ~(Ct | je), e.lanes = wo(e.lanes, a);
    }
    function YE() {
      if (ie.current = om, Xh) {
        for (var e = ct.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xh = !1;
      }
      Go = j, ct = null, hn = null, mn = null, Da = null, Ou = -1, H = null, rC = !1, Xd = !1, Kd = 0;
    }
    function Ui() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mn === null ? ct.memoizedState = mn = e : mn = mn.next = e, mn;
    }
    function ba() {
      var e;
      if (hn === null) {
        var t = ct.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hn.next;
      var a;
      if (mn === null ? a = ct.memoizedState : a = mn.next, a !== null)
        mn = a, a = mn.next, hn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hn = e;
        var i = {
          memoizedState: hn.memoizedState,
          baseState: hn.baseState,
          baseQueue: hn.baseQueue,
          queue: hn.queue,
          next: null
        };
        mn === null ? ct.memoizedState = mn = i : mn = mn.next = i;
      }
      return mn;
    }
    function QE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function jg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Bg(e, t, a) {
      var i = Ui(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Tw.bind(null, ct, s);
      return [i.memoizedState, f];
    }
    function Pg(e, t, a) {
      var i = ba(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var S = f.next, w = s.baseState, R = null, L = null, M = null, z = S;
        do {
          var J = z.lane;
          if (cl(Go, J)) {
            if (M !== null) {
              var me = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Qt,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null
              };
              M = M.next = me;
            }
            if (z.hasEagerState)
              w = z.eagerState;
            else {
              var Xe = z.action;
              w = e(w, Xe);
            }
          } else {
            var Re = {
              lane: J,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            };
            M === null ? (L = M = Re, R = w) : M = M.next = Re, ct.lanes = Ve(ct.lanes, J), yp(J);
          }
          z = z.next;
        } while (z !== null && z !== S);
        M === null ? R = w : M.next = L, ce(w, i.memoizedState) || ip(), i.memoizedState = w, i.baseState = R, i.baseQueue = M, u.lastRenderedState = w;
      }
      var Ie = u.interleaved;
      if (Ie !== null) {
        var k = Ie;
        do {
          var A = k.lane;
          ct.lanes = Ve(ct.lanes, A), yp(A), k = k.next;
        } while (k !== Ie);
      } else f === null && (u.lanes = j);
      var _ = u.dispatch;
      return [i.memoizedState, _];
    }
    function $g(e, t, a) {
      var i = ba(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var S = m.action;
          p = e(p, S), m = m.next;
        } while (m !== v);
        ce(p, i.memoizedState) || ip(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function b_(e, t, a) {
    }
    function k_(e, t, a) {
    }
    function Yg(e, t, a) {
      var i = ct, u = Ui(), s, f = Un();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Qc || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Qc = !0);
      } else {
        if (s = t(), !Qc) {
          var p = t();
          ce(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Qc = !0);
        }
        var v = bm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(v, Go) || IE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, em(GE.bind(null, i, m, e), [e]), i.flags |= Ct, qd(pn | zn, WE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Kh(e, t, a) {
      var i = ct, u = ba(), s = t();
      if (!Qc) {
        var f = t();
        ce(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Qc = !0);
      }
      var p = u.memoizedState, v = !ce(p, s);
      v && (u.memoizedState = s, ip());
      var m = u.queue;
      if (Jd(GE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mn !== null && mn.memoizedState.tag & pn) {
        i.flags |= Ct, qd(pn | zn, WE.bind(null, i, m, s, t), void 0, null);
        var S = bm();
        if (S === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xo(S, Go) || IE(i, t, s);
      }
      return s;
    }
    function IE(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = ct.updateQueue;
      if (u === null)
        u = QE(), ct.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function WE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, XE(t) && KE(e);
    }
    function GE(e, t, a) {
      var i = function() {
        XE(t) && KE(e);
      };
      return a(i);
    }
    function XE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ce(a, i);
      } catch {
        return !0;
      }
    }
    function KE(e) {
      var t = Qr(e, Se);
      t !== null && En(t, e, Se, ht);
    }
    function qh(e) {
      var t = Ui();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: jg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Rw.bind(null, ct, a);
      return [t.memoizedState, i];
    }
    function Qg(e) {
      return Pg(jg);
    }
    function Ig(e) {
      return $g(jg);
    }
    function qd(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = ct.updateQueue;
      if (s === null)
        s = QE(), ct.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Wg(e) {
      var t = Ui();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Zh(e) {
      var t = ba();
      return t.memoizedState;
    }
    function Zd(e, t, a, i) {
      var u = Ui(), s = i === void 0 ? null : i;
      ct.flags |= e, u.memoizedState = qd(pn | t, a, void 0, s);
    }
    function Jh(e, t, a, i) {
      var u = ba(), s = i === void 0 ? null : i, f = void 0;
      if (hn !== null) {
        var p = hn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Vg(s, v)) {
            u.memoizedState = qd(t, a, f, s);
            return;
          }
        }
      }
      ct.flags |= e, u.memoizedState = qd(pn | t, a, f, s);
    }
    function em(e, t) {
      return (ct.mode & hr) !== pe ? Zd(tl | Ct | Ci, zn, e, t) : Zd(Ct | Ci, zn, e, t);
    }
    function Jd(e, t) {
      return Jh(Ct, zn, e, t);
    }
    function Gg(e, t) {
      return Zd(je, Mi, e, t);
    }
    function tm(e, t) {
      return Jh(je, Mi, e, t);
    }
    function Xg(e, t) {
      var a = je;
      return a |= Gn, (ct.mode & hr) !== pe && (a |= Xn), Zd(a, vn, e, t);
    }
    function nm(e, t) {
      return Jh(je, vn, e, t);
    }
    function qE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Kg(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = je;
      return u |= Gn, (ct.mode & hr) !== pe && (u |= Xn), Zd(u, vn, qE.bind(null, t, e), i);
    }
    function rm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Jh(je, vn, qE.bind(null, t, e), i);
    }
    function Sw(e, t) {
    }
    var am = Sw;
    function qg(e, t) {
      var a = Ui(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function im(e, t) {
      var a = ba(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Zg(e, t) {
      var a = Ui(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function lm(e, t) {
      var a = ba(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Vg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Jg(e) {
      var t = Ui();
      return t.memoizedState = e, e;
    }
    function ZE(e) {
      var t = ba(), a = hn, i = a.memoizedState;
      return eC(t, i, e);
    }
    function JE(e) {
      var t = ba();
      if (hn === null)
        return t.memoizedState = e, e;
      var a = hn.memoizedState;
      return eC(t, a, e);
    }
    function eC(e, t, a) {
      var i = !Av(Go);
      if (i) {
        if (!ce(a, t)) {
          var u = Vv();
          ct.lanes = Ve(ct.lanes, u), yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, ip()), e.memoizedState = a, a;
    }
    function Ew(e, t, a) {
      var i = Vr();
      Ot(Sy(i, Qa)), e(!0);
      var u = Gd.transition;
      Gd.transition = {};
      var s = Gd.transition;
      Gd.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Ot(i), Gd.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && I("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function eS() {
      var e = qh(!1), t = e[0], a = e[1], i = Ew.bind(null, a), u = Ui();
      return u.memoizedState = i, [t, i];
    }
    function tC() {
      var e = Qg(), t = e[0], a = ba(), i = a.memoizedState;
      return [t, i];
    }
    function nC() {
      var e = Ig(), t = e[0], a = ba(), i = a.memoizedState;
      return [t, i];
    }
    var rC = !1;
    function Cw() {
      return rC;
    }
    function tS() {
      var e = Ui(), t = bm(), a = t.identifierPrefix, i;
      if (Un()) {
        var u = Fx();
        i = ":" + a + "R" + u;
        var s = Kd++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = mw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function um() {
      var e = ba(), t = e.memoizedState;
      return t;
    }
    function Tw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (aC(e))
        iC(t, u);
      else {
        var s = ME(e, t, u, i);
        if (s !== null) {
          var f = Sr();
          En(s, e, i, f), lC(s, t, i);
        }
      }
      uC(e, i);
    }
    function Rw(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (aC(e))
        iC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === j && (s === null || s.lanes === j)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ie.current, ie.current = Ja;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, ce(m, v)) {
                uw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ie.current = p;
            }
          }
        }
        var S = ME(e, t, u, i);
        if (S !== null) {
          var w = Sr();
          En(S, e, i, w), lC(S, t, i);
        }
      }
      uC(e, i);
    }
    function aC(e) {
      var t = e.alternate;
      return e === ct || t !== null && t === ct;
    }
    function iC(e, t) {
      Xd = Xh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function lC(e, t, a) {
      if (id(a)) {
        var i = t.lanes;
        i = ac(i, e.pendingLanes);
        var u = Ve(i, a);
        t.lanes = u, ld(e, u);
      }
    }
    function uC(e, t, a) {
      go(e, t);
    }
    var om = {
      readContext: sn,
      useCallback: ir,
      useContext: ir,
      useEffect: ir,
      useImperativeHandle: ir,
      useInsertionEffect: ir,
      useLayoutEffect: ir,
      useMemo: ir,
      useReducer: ir,
      useRef: ir,
      useState: ir,
      useDebugValue: ir,
      useDeferredValue: ir,
      useTransition: ir,
      useMutableSource: ir,
      useSyncExternalStore: ir,
      useId: ir,
      unstable_isNewReconciler: Z
    }, oC = null, sC = null, cC = null, fC = null, zi = null, Ja = null, sm = null;
    {
      var nS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ze = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      oC = {
        readContext: function(e) {
          return sn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", nt(), Ic(t), qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", nt(), sn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", nt(), Ic(t), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", nt(), Ic(a), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", nt(), Ic(t), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", nt(), Ic(t), Xg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", nt(), Ic(t);
          var a = ie.current;
          ie.current = zi;
          try {
            return Zg(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", nt();
          var i = ie.current;
          ie.current = zi;
          try {
            return Bg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", nt(), Wg(e);
        },
        useState: function(e) {
          H = "useState", nt();
          var t = ie.current;
          ie.current = zi;
          try {
            return qh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", nt(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", nt(), Jg(e);
        },
        useTransition: function() {
          return H = "useTransition", nt(), eS();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", nt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", nt(), Yg(e, t, a);
        },
        useId: function() {
          return H = "useId", nt(), tS();
        },
        unstable_isNewReconciler: Z
      }, sC = {
        readContext: function(e) {
          return sn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", K(), qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", K(), sn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", K(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", K(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", K(), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", K(), Xg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", K();
          var a = ie.current;
          ie.current = zi;
          try {
            return Zg(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", K();
          var i = ie.current;
          ie.current = zi;
          try {
            return Bg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", K(), Wg(e);
        },
        useState: function(e) {
          H = "useState", K();
          var t = ie.current;
          ie.current = zi;
          try {
            return qh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", K(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", K(), Jg(e);
        },
        useTransition: function() {
          return H = "useTransition", K(), eS();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", K(), Yg(e, t, a);
        },
        useId: function() {
          return H = "useId", K(), tS();
        },
        unstable_isNewReconciler: Z
      }, cC = {
        readContext: function(e) {
          return sn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", K(), im(e, t);
        },
        useContext: function(e) {
          return H = "useContext", K(), sn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", K(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", K(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", K(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", K(), nm(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", K();
          var a = ie.current;
          ie.current = Ja;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", K();
          var i = ie.current;
          ie.current = Ja;
          try {
            return Pg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", K(), Zh();
        },
        useState: function(e) {
          H = "useState", K();
          var t = ie.current;
          ie.current = Ja;
          try {
            return Qg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", K(), am();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", K(), ZE(e);
        },
        useTransition: function() {
          return H = "useTransition", K(), tC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", K(), Kh(e, t);
        },
        useId: function() {
          return H = "useId", K(), um();
        },
        unstable_isNewReconciler: Z
      }, fC = {
        readContext: function(e) {
          return sn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", K(), im(e, t);
        },
        useContext: function(e) {
          return H = "useContext", K(), sn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", K(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", K(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", K(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", K(), nm(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", K();
          var a = ie.current;
          ie.current = sm;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", K();
          var i = ie.current;
          ie.current = sm;
          try {
            return $g(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", K(), Zh();
        },
        useState: function(e) {
          H = "useState", K();
          var t = ie.current;
          ie.current = sm;
          try {
            return Ig(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", K(), am();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", K(), JE(e);
        },
        useTransition: function() {
          return H = "useTransition", K(), nC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", K(), Kh(e, t);
        },
        useId: function() {
          return H = "useId", K(), um();
        },
        unstable_isNewReconciler: Z
      }, zi = {
        readContext: function(e) {
          return nS(), sn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", ze(), nt(), qg(e, t);
        },
        useContext: function(e) {
          return H = "useContext", ze(), nt(), sn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", ze(), nt(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", ze(), nt(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", ze(), nt(), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", ze(), nt(), Xg(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", ze(), nt();
          var a = ie.current;
          ie.current = zi;
          try {
            return Zg(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", ze(), nt();
          var i = ie.current;
          ie.current = zi;
          try {
            return Bg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", ze(), nt(), Wg(e);
        },
        useState: function(e) {
          H = "useState", ze(), nt();
          var t = ie.current;
          ie.current = zi;
          try {
            return qh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", ze(), nt(), void 0;
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", ze(), nt(), Jg(e);
        },
        useTransition: function() {
          return H = "useTransition", ze(), nt(), eS();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", ze(), nt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", ze(), nt(), Yg(e, t, a);
        },
        useId: function() {
          return H = "useId", ze(), nt(), tS();
        },
        unstable_isNewReconciler: Z
      }, Ja = {
        readContext: function(e) {
          return nS(), sn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", ze(), K(), im(e, t);
        },
        useContext: function(e) {
          return H = "useContext", ze(), K(), sn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", ze(), K(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", ze(), K(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", ze(), K(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", ze(), K(), nm(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", ze(), K();
          var a = ie.current;
          ie.current = Ja;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", ze(), K();
          var i = ie.current;
          ie.current = Ja;
          try {
            return Pg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", ze(), K(), Zh();
        },
        useState: function(e) {
          H = "useState", ze(), K();
          var t = ie.current;
          ie.current = Ja;
          try {
            return Qg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", ze(), K(), am();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", ze(), K(), ZE(e);
        },
        useTransition: function() {
          return H = "useTransition", ze(), K(), tC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", ze(), K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", ze(), K(), Kh(e, t);
        },
        useId: function() {
          return H = "useId", ze(), K(), um();
        },
        unstable_isNewReconciler: Z
      }, sm = {
        readContext: function(e) {
          return nS(), sn(e);
        },
        useCallback: function(e, t) {
          return H = "useCallback", ze(), K(), im(e, t);
        },
        useContext: function(e) {
          return H = "useContext", ze(), K(), sn(e);
        },
        useEffect: function(e, t) {
          return H = "useEffect", ze(), K(), Jd(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return H = "useImperativeHandle", ze(), K(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return H = "useInsertionEffect", ze(), K(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return H = "useLayoutEffect", ze(), K(), nm(e, t);
        },
        useMemo: function(e, t) {
          H = "useMemo", ze(), K();
          var a = ie.current;
          ie.current = Ja;
          try {
            return lm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          H = "useReducer", ze(), K();
          var i = ie.current;
          ie.current = Ja;
          try {
            return $g(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return H = "useRef", ze(), K(), Zh();
        },
        useState: function(e) {
          H = "useState", ze(), K();
          var t = ie.current;
          ie.current = Ja;
          try {
            return Ig(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return H = "useDebugValue", ze(), K(), am();
        },
        useDeferredValue: function(e) {
          return H = "useDeferredValue", ze(), K(), JE(e);
        },
        useTransition: function() {
          return H = "useTransition", ze(), K(), nC();
        },
        useMutableSource: function(e, t, a) {
          return H = "useMutableSource", ze(), K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return H = "useSyncExternalStore", ze(), K(), Kh(e, t);
        },
        useId: function() {
          return H = "useId", ze(), K(), um();
        },
        unstable_isNewReconciler: Z
      };
    }
    var Mu = b.unstable_now, dC = 0, cm = -1, ep = -1, fm = -1, rS = !1, dm = !1;
    function pC() {
      return rS;
    }
    function xw() {
      dm = !0;
    }
    function ww() {
      rS = !1, dm = !1;
    }
    function Dw() {
      rS = dm, dm = !1;
    }
    function vC() {
      return dC;
    }
    function hC() {
      dC = Mu();
    }
    function aS(e) {
      ep = Mu(), e.actualStartTime < 0 && (e.actualStartTime = Mu());
    }
    function mC(e) {
      ep = -1;
    }
    function pm(e, t) {
      if (ep >= 0) {
        var a = Mu() - ep;
        e.actualDuration += a, t && (e.selfBaseDuration = a), ep = -1;
      }
    }
    function Ai(e) {
      if (cm >= 0) {
        var t = Mu() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ne:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function iS(e) {
      if (fm >= 0) {
        var t = Mu() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ne:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Hi() {
      cm = Mu();
    }
    function lS() {
      fm = Mu();
    }
    function uS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ei(e, t) {
      if (e && e.defaultProps) {
        var a = Ye({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var oS = {}, sS, cS, fS, dS, pS, yC, vm, vS, hS, mS, tp;
    {
      sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), tp = /* @__PURE__ */ new Set();
      var gC = /* @__PURE__ */ new Set();
      vm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          gC.has(a) || (gC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, yC = function(e, t) {
        if (t === void 0) {
          var a = it(e) || "Component";
          pS.has(a) || (pS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(oS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(oS);
    }
    function yS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Pe) {
          Yt(!0);
          try {
            s = a(i, u);
          } finally {
            Yt(!1);
          }
        }
        yC(t, s);
      }
      var f = s == null ? u : Ye({}, u, s);
      if (e.memoizedState = f, e.lanes === j) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var gS = {
      isMounted: pr,
      enqueueSetState: function(e, t, a) {
        var i = Lr(e), u = Sr(), s = Hu(i), f = Rl(u, s);
        f.payload = t, a != null && (vm(a, "setState"), f.callback = a);
        var p = _u(i, f, s);
        p !== null && (En(p, i, s, u), $h(p, i, s)), go(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Lr(e), u = Sr(), s = Hu(i), f = Rl(u, s);
        f.tag = zE, f.payload = t, a != null && (vm(a, "replaceState"), f.callback = a);
        var p = _u(i, f, s);
        p !== null && (En(p, i, s, u), $h(p, i, s)), go(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Lr(e), i = Sr(), u = Hu(a), s = Rl(i, u);
        s.tag = jh, t != null && (vm(t, "forceUpdate"), s.callback = t);
        var f = _u(a, s, u);
        f !== null && (En(f, a, u, i), $h(f, a, u)), Bs(a, u);
      }
    };
    function SC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Pe) {
            Yt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Yt(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", it(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !De(a, i) || !De(u, s) : !0;
    }
    function bw(e, t, a) {
      var i = e.stateNode;
      {
        var u = it(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !tp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Pe) === pe && (tp.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !tp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Pe) === pe && (tp.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !hS.has(t) && (hS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", it(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !fS.has(t) && (fS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", it(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || nn(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function EC(e, t) {
      t.updater = gS, e.stateNode = t, Il(t, e), t._reactInternalInstance = oS;
    }
    function CC(e, t, a) {
      var i = !1, u = sa, s = sa, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === cf && f._context === void 0
        );
        if (!p && !mS.has(t)) {
          mS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === sf ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", it(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = sn(f);
      else {
        u = Uc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? zc(e, u) : sa;
      }
      var S = new t(a, s);
      if (e.mode & Pe) {
        Yt(!0);
        try {
          S = new t(a, s);
        } finally {
          Yt(!1);
        }
      }
      var w = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      EC(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var R = it(t) || "Component";
          cS.has(R) || (cS.add(R), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", R, S.state === null ? "null" : "undefined", R));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var L = null, M = null, z = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? z = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (z = "UNSAFE_componentWillUpdate"), L !== null || M !== null || z !== null) {
            var J = it(t) || "Component", Re = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            dS.has(J) || (dS.add(J), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, J, Re, L !== null ? `
  ` + L : "", M !== null ? `
  ` + M : "", z !== null ? `
  ` + z : ""));
          }
        }
      }
      return i && cE(e, u, s), S;
    }
    function kw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Fe(e) || "Component"), gS.enqueueReplaceState(t, t.state, null));
    }
    function TC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Fe(e) || "Component";
          sS.has(s) || (sS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        gS.enqueueReplaceState(t, t.state, null);
      }
    }
    function SS(e, t, a, i) {
      bw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, kg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = sn(s);
      else {
        var f = Uc(e, t, !0);
        u.context = zc(e, f);
      }
      {
        if (u.state === a) {
          var p = it(t) || "Component";
          vS.has(p) || (vS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Pe && qa.recordLegacyContextWarning(e, u), qa.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (yS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (kw(e, u), Yh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = je;
        m |= Gn, (e.mode & hr) !== pe && (m |= Xn), e.flags |= m;
      }
    }
    function _w(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = sa;
      if (typeof p == "object" && p !== null)
        v = sn(p);
      else {
        var m = Uc(e, t, !0);
        v = zc(e, m);
      }
      var S = t.getDerivedStateFromProps, w = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && TC(e, u, a, v), HE();
      var R = e.memoizedState, L = u.state = R;
      if (Yh(e, a, u, i), L = e.memoizedState, s === a && R === L && !wh() && !Qh()) {
        if (typeof u.componentDidMount == "function") {
          var M = je;
          M |= Gn, (e.mode & hr) !== pe && (M |= Xn), e.flags |= M;
        }
        return !1;
      }
      typeof S == "function" && (yS(e, t, S, a), L = e.memoizedState);
      var z = Qh() || SC(e, t, s, a, R, L, v);
      if (z) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var J = je;
          J |= Gn, (e.mode & hr) !== pe && (J |= Xn), e.flags |= J;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Re = je;
          Re |= Gn, (e.mode & hr) !== pe && (Re |= Xn), e.flags |= Re;
        }
        e.memoizedProps = a, e.memoizedState = L;
      }
      return u.props = a, u.state = L, u.context = v, z;
    }
    function Nw(e, t, a, i, u) {
      var s = t.stateNode;
      AE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ei(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, S = a.contextType, w = sa;
      if (typeof S == "object" && S !== null)
        w = sn(S);
      else {
        var R = Uc(t, a, !0);
        w = zc(t, R);
      }
      var L = a.getDerivedStateFromProps, M = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== w) && TC(t, s, i, w), HE();
      var z = t.memoizedState, J = s.state = z;
      if (Yh(t, i, s, u), J = t.memoizedState, f === v && z === J && !wh() && !Qh() && !_e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= Or), !1;
      typeof L == "function" && (yS(t, a, L, i), J = t.memoizedState);
      var Re = Qh() || SC(t, a, p, i, z, J, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      _e;
      return Re ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, J, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, J, w)), typeof s.componentDidUpdate == "function" && (t.flags |= je), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Or)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= je), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= Or), t.memoizedProps = i, t.memoizedState = J), s.props = i, s.state = J, s.context = w, Re;
    }
    function Xo(e, t) {
      return {
        value: e,
        source: t,
        stack: mf(t),
        digest: null
      };
    }
    function ES(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Lw(e, t) {
      return !0;
    }
    function CS(e, t) {
      try {
        var a = Lw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === V)
            return;
          console.error(i);
        }
        var p = u ? Fe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === W)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var S = Fe(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".");
        }
        var w = v + `
` + f + `

` + ("" + m);
        console.error(w);
      } catch (R) {
        setTimeout(function() {
          throw R;
        });
      }
    }
    var Ow = typeof WeakMap == "function" ? WeakMap : Map;
    function RC(e, t, a) {
      var i = Rl(ht, a);
      i.tag = Dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        xb(u), CS(e, t);
      }, i;
    }
    function TS(e, t, a) {
      var i = Rl(ht, a);
      i.tag = Dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          U1(e), CS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        U1(e), CS(e, t), typeof u != "function" && Tb(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (tr(e.lanes, Se) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Fe(e) || "Unknown"));
      }), i;
    }
    function xC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Ow(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = wb.bind(null, e, t, a);
        vr && gp(e, a), t.then(s, s);
      }
    }
    function Mw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Uw(e, t) {
      var a = e.tag;
      if ((e.mode & he) === pe && (a === $ || a === ye || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function wC(e) {
      var t = e;
      do {
        if (t.tag === He && vw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function DC(e, t, a, i, u) {
      if ((e.mode & he) === pe) {
        if (e === t)
          e.flags |= an;
        else {
          if (e.flags |= Oe, a.flags |= ho, a.flags &= ~(_s | fr), a.tag === V) {
            var s = a.alternate;
            if (s === null)
              a.tag = _n;
            else {
              var f = Rl(ht, Se);
              f.tag = jh, _u(a, f, Se);
            }
          }
          a.lanes = Ve(a.lanes, Se);
        }
        return e;
      }
      return e.flags |= an, e.lanes = u, e;
    }
    function zw(e, t, a, i, u) {
      if (a.flags |= fr, vr && gp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Uw(a), Un() && a.mode & he && yE();
        var f = wC(t);
        if (f !== null) {
          f.flags &= ~Lt, DC(f, t, a, e, u), f.mode & he && xC(e, s, u), Mw(f, e, s);
          return;
        } else {
          if (!ad(u)) {
            xC(e, s, u), t0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Un() && a.mode & he) {
        yE();
        var v = wC(t);
        if (v !== null) {
          (v.flags & an) === Te && (v.flags |= Lt), DC(v, t, a, e, u), vg(Xo(i, a));
          return;
        }
      }
      i = Xo(i, a), vb(i);
      var m = t;
      do {
        switch (m.tag) {
          case W: {
            var S = i;
            m.flags |= an;
            var w = lu(u);
            m.lanes = Ve(m.lanes, w);
            var R = RC(m, S, w);
            _g(m, R);
            return;
          }
          case V:
            var L = i, M = m.type, z = m.stateNode;
            if ((m.flags & Oe) === Te && (typeof M.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && !w1(z))) {
              m.flags |= an;
              var J = lu(u);
              m.lanes = Ve(m.lanes, J);
              var Re = TS(m, L, J);
              _g(m, Re);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function Aw() {
      return null;
    }
    var np = C.ReactCurrentOwner, ti = !1, RS, rp, xS, wS, DS, Ko, bS, hm, ap;
    RS = {}, rp = {}, xS = {}, wS = {}, DS = {}, Ko = !1, bS = {}, hm = {}, ap = {};
    function yr(e, t, a, i) {
      e === null ? t.child = _E(t, null, a, i) : t.child = Vc(t, e.child, a, i);
    }
    function Hw(e, t, a, i) {
      t.child = Vc(t, e.child, null, i), t.child = Vc(t, null, a, i);
    }
    function bC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          it(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      Bc(t, u), Kl(t);
      {
        if (np.current = t, aa(!0), v = Wc(e, t, f, i, p, u), m = Gc(), t.mode & Pe) {
          Yt(!0);
          try {
            v = Wc(e, t, f, i, p, u), m = Gc();
          } finally {
            Yt(!1);
          }
        }
        aa(!1);
      }
      return Zn(), e !== null && !ti ? ($E(e, t, u), xl(e, t, u)) : (Un() && m && og(t), t.flags |= Si, yr(e, t, v, u), t.child);
    }
    function kC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (Pb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = nf(s), t.tag = Be, t.type = f, NS(t, s), _C(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xa(
            p,
            i,
            // Resolved props
            "prop",
            it(s)
          ), a.defaultProps !== void 0) {
            var v = it(s) || "Unknown";
            ap[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), ap[v] = !0);
          }
        }
        var m = d0(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var S = a.type, w = S.propTypes;
        w && Xa(
          w,
          i,
          // Resolved props
          "prop",
          it(S)
        );
      }
      var R = e.child, L = AS(e, u);
      if (!L) {
        var M = R.memoizedProps, z = a.compare;
        if (z = z !== null ? z : De, z(M, i) && e.ref === t.ref)
          return xl(e, t, u);
      }
      t.flags |= Si;
      var J = ts(R, i);
      return J.ref = t.ref, J.return = t, t.child = J, J;
    }
    function _C(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ln) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Xa(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            it(s)
          );
        }
      }
      if (e !== null) {
        var S = e.memoizedProps;
        if (De(S, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ti = !1, t.pendingProps = i = S, AS(e, u))
            (e.flags & ho) !== Te && (ti = !0);
          else return t.lanes = e.lanes, xl(e, t, u);
      }
      return kS(e, t, a, i, u);
    }
    function NC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || oe)
        if ((t.mode & he) === pe) {
          var f = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, km(t, a);
        } else if (tr(a, Dn)) {
          var w = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var R = s !== null ? s.baseLanes : a;
          km(t, R);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Ve(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Dn;
          var S = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = S, t.updateQueue = null, km(t, v), null;
        }
      else {
        var L;
        s !== null ? (L = Ve(s.baseLanes, a), t.memoizedState = null) : L = a, km(t, L);
      }
      return yr(e, t, u, a), t.child;
    }
    function Fw(e, t, a) {
      var i = t.pendingProps;
      return yr(e, t, i, a), t.child;
    }
    function Vw(e, t, a) {
      var i = t.pendingProps.children;
      return yr(e, t, i, a), t.child;
    }
    function jw(e, t, a) {
      {
        t.flags |= je;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return yr(e, t, s, a), t.child;
    }
    function LC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Wn, t.flags |= Qf);
    }
    function kS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xa(
          s,
          i,
          // Resolved props
          "prop",
          it(a)
        );
      }
      var f;
      {
        var p = Uc(t, a, !0);
        f = zc(t, p);
      }
      var v, m;
      Bc(t, u), Kl(t);
      {
        if (np.current = t, aa(!0), v = Wc(e, t, a, i, f, u), m = Gc(), t.mode & Pe) {
          Yt(!0);
          try {
            v = Wc(e, t, a, i, f, u), m = Gc();
          } finally {
            Yt(!1);
          }
        }
        aa(!1);
      }
      return Zn(), e !== null && !ti ? ($E(e, t, u), xl(e, t, u)) : (Un() && m && og(t), t.flags |= Si, yr(e, t, v, u), t.child);
    }
    function OC(e, t, a, i, u) {
      {
        switch (rk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Oe, t.flags |= an;
            var m = new Error("Simulated error coming from DevTools"), S = lu(u);
            t.lanes = Ve(t.lanes, S);
            var w = TS(t, Xo(m, t), S);
            _g(t, w);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var R = a.propTypes;
          R && Xa(
            R,
            i,
            // Resolved props
            "prop",
            it(a)
          );
        }
      }
      var L;
      Oi(a) ? (L = !0, bh(t)) : L = !1, Bc(t, u);
      var M = t.stateNode, z;
      M === null ? (ym(e, t), CC(t, a, i), SS(t, a, i, u), z = !0) : e === null ? z = _w(t, a, i, u) : z = Nw(e, t, a, i, u);
      var J = _S(e, t, a, z, L, u);
      {
        var Re = t.stateNode;
        z && Re.props !== i && (Ko || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Fe(t) || "a component"), Ko = !0);
      }
      return J;
    }
    function _S(e, t, a, i, u, s) {
      LC(e, t);
      var f = (t.flags & Oe) !== Te;
      if (!i && !f)
        return u && pE(t, a, !1), xl(e, t, s);
      var p = t.stateNode;
      np.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, mC();
      else {
        Kl(t);
        {
          if (aa(!0), v = p.render(), t.mode & Pe) {
            Yt(!0);
            try {
              p.render();
            } finally {
              Yt(!1);
            }
          }
          aa(!1);
        }
        Zn();
      }
      return t.flags |= Si, e !== null && f ? Hw(e, t, v, s) : yr(e, t, v, s), t.memoizedState = p.state, u && pE(t, a, !0), t.child;
    }
    function MC(e) {
      var t = e.stateNode;
      t.pendingContext ? fE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fE(e, t.context, !1), Ng(e, t.containerInfo);
    }
    function Bw(e, t, a) {
      if (MC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      AE(e, t), Yh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & Lt) {
          var S = Xo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return UC(e, t, p, a, S);
        } else if (p !== s) {
          var w = Xo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return UC(e, t, p, a, w);
        } else {
          Yx(t);
          var R = _E(t, null, p, a);
          t.child = R;
          for (var L = R; L; )
            L.flags = L.flags & ~mt | Mr, L = L.sibling;
        }
      } else {
        if (Fc(), p === s)
          return xl(e, t, a);
        yr(e, t, p, a);
      }
      return t.child;
    }
    function UC(e, t, a, i, u) {
      return Fc(), vg(u), t.flags |= Lt, yr(e, t, a, i), t.child;
    }
    function Pw(e, t, a) {
      jE(t), e === null && pg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Gy(i, u);
      return p ? f = null : s !== null && Gy(i, s) && (t.flags |= tt), LC(e, t), yr(e, t, f, a), t.child;
    }
    function $w(e, t) {
      return e === null && pg(t), null;
    }
    function Yw(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = $b(v), S = ei(v, u), w;
      switch (m) {
        case $:
          return NS(t, v), t.type = v = nf(v), w = kS(null, t, v, S, i), w;
        case V:
          return t.type = v = l0(v), w = OC(null, t, v, S, i), w;
        case ye:
          return t.type = v = u0(v), w = bC(null, t, v, S, i), w;
        case dt: {
          if (t.type !== t.elementType) {
            var R = v.propTypes;
            R && Xa(
              R,
              S,
              // Resolved for outer only
              "prop",
              it(v)
            );
          }
          return w = kC(
            null,
            t,
            v,
            ei(v.type, S),
            // The inner type can have defaults too
            i
          ), w;
        }
      }
      var L = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ln && (L = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + L));
    }
    function Qw(e, t, a, i, u) {
      ym(e, t), t.tag = V;
      var s;
      return Oi(a) ? (s = !0, bh(t)) : s = !1, Bc(t, u), CC(t, a, i), SS(t, a, i, u), _S(null, t, a, !0, s, u);
    }
    function Iw(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s;
      {
        var f = Uc(t, a, !1);
        s = zc(t, f);
      }
      Bc(t, i);
      var p, v;
      Kl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = it(a) || "Unknown";
          RS[m] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), RS[m] = !0);
        }
        t.mode & Pe && qa.recordLegacyContextWarning(t, null), aa(!0), np.current = t, p = Wc(null, t, a, u, s, i), v = Gc(), aa(!1);
      }
      if (Zn(), t.flags |= Si, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var S = it(a) || "Unknown";
        rp[S] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), rp[S] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = it(a) || "Unknown";
          rp[w] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), rp[w] = !0);
        }
        t.tag = V, t.memoizedState = null, t.updateQueue = null;
        var R = !1;
        return Oi(a) ? (R = !0, bh(t)) : R = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, kg(t), EC(t, p), SS(t, a, u, i), _S(null, t, a, !0, R, i);
      } else {
        if (t.tag = $, t.mode & Pe) {
          Yt(!0);
          try {
            p = Wc(null, t, a, u, s, i), v = Gc();
          } finally {
            Yt(!1);
          }
        }
        return Un() && v && og(t), yr(null, t, p, i), NS(t, a), t.child;
      }
    }
    function NS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = _r();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), DS[u] || (DS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = it(t) || "Unknown";
          ap[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), ap[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = it(t) || "Unknown";
          wS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), wS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = it(t) || "Unknown";
          xS[v] || (y("%s: Function components do not support contextType.", v), xS[v] = !0);
        }
      }
    }
    var LS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Qt
    };
    function OS(e) {
      return {
        baseLanes: e,
        cachePool: Aw(),
        transitions: null
      };
    }
    function Ww(e, t) {
      var a = null;
      return {
        baseLanes: Ve(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Gw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Mg(e, Wd);
    }
    function Xw(e, t) {
      return wo(e.childLanes, t);
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      ak(t) && (t.flags |= Oe);
      var u = Za.current, s = !1, f = (t.flags & Oe) !== Te;
      if (f || Gw(u, e) ? (s = !0, t.flags &= ~Oe) : (e === null || e.memoizedState !== null) && (u = pw(u, PE)), u = $c(u), Lu(t, u), e === null) {
        pg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return eD(t, v);
        }
        var m = i.children, S = i.fallback;
        if (s) {
          var w = Kw(t, m, S, a), R = t.child;
          return R.memoizedState = OS(a), t.memoizedState = LS, w;
        } else
          return MS(t, m);
      } else {
        var L = e.memoizedState;
        if (L !== null) {
          var M = L.dehydrated;
          if (M !== null)
            return tD(e, t, f, i, M, L, a);
        }
        if (s) {
          var z = i.fallback, J = i.children, Re = Zw(e, t, J, z, a), me = t.child, Xe = e.child.memoizedState;
          return me.memoizedState = Xe === null ? OS(a) : Ww(Xe, a), me.childLanes = Xw(e, a), t.memoizedState = LS, Re;
        } else {
          var Ie = i.children, k = qw(e, t, Ie, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function MS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = US(u, i);
      return s.return = e, e.child = s, s;
    }
    function Kw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & he) === pe && s !== null ? (p = s, p.childLanes = j, p.pendingProps = f, e.mode & Me && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Vu(a, u, i, null)) : (p = US(f, u), v = Vu(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function US(e, t, a) {
      return A1(e, t, j, null);
    }
    function AC(e, t) {
      return ts(e, t);
    }
    function qw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = AC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & he) === pe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= et) : p.push(s);
      }
      return t.child = f, f;
    }
    function Zw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & he) === pe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var S = t.child;
        m = S, m.childLanes = j, m.pendingProps = v, t.mode & Me && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = AC(f, v), m.subtreeFlags = f.subtreeFlags & cn;
      var w;
      return p !== null ? w = ts(p, i) : (w = Vu(i, s, u, null), w.flags |= mt), w.return = t, m.return = t, m.sibling = w, t.child = m, w;
    }
    function mm(e, t, a, i) {
      i !== null && vg(i), Vc(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = MS(t, s);
      return f.flags |= mt, t.memoizedState = null, f;
    }
    function Jw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = US(f, s), v = Vu(i, s, u, null);
      return v.flags |= mt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & he) !== pe && Vc(t, e.child, null, u), v;
    }
    function eD(e, t, a) {
      return (e.mode & he) === pe ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Se) : Zy(t) ? e.lanes = Ya : e.lanes = Dn, null;
    }
    function tD(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Lt) {
          t.flags &= ~Lt;
          var k = ES(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return mm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Oe, null;
          var A = i.children, _ = i.fallback, Q = Jw(e, t, A, _, f), le = t.child;
          return le.memoizedState = OS(f), t.memoizedState = LS, Q;
        }
      else {
        if (Px(), (t.mode & he) === pe)
          return mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Zy(u)) {
          var p, v, m;
          {
            var S = ix(u);
            p = S.digest, v = S.message, m = S.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var R = ES(w, p, m);
          return mm(e, t, f, R);
        }
        var L = tr(f, e.childLanes);
        if (ti || L) {
          var M = bm();
          if (M !== null) {
            var z = Pv(M, f);
            if (z !== Qt && z !== s.retryLane) {
              s.retryLane = z;
              var J = ht;
              Qr(e, z), En(M, e, z, J);
            }
          }
          t0();
          var Re = ES(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return mm(e, t, f, Re);
        } else if (iE(u)) {
          t.flags |= Oe, t.child = e.child;
          var me = Db.bind(null, e);
          return lx(u, me), null;
        } else {
          Qx(t, u, s.treeContext);
          var Xe = i.children, Ie = MS(t, Xe);
          return Ie.flags |= Mr, Ie;
        }
      }
    }
    function HC(e, t, a) {
      e.lanes = Ve(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ve(i.lanes, t)), xg(e.return, t, a);
    }
    function nD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === He) {
          var u = i.memoizedState;
          u !== null && HC(i, a, e);
        } else if (i.tag === lt)
          HC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function rD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Gh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function aD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !bS[e])
        if (bS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function iD(e, t) {
      e !== void 0 && !hm[e] && (e !== "collapsed" && e !== "hidden" ? (hm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (hm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function FC(e, t) {
      {
        var a = nn(e), i = !a && typeof Ma(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function lD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (nn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!FC(e[a], a))
              return;
        } else {
          var i = Ma(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!FC(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function zS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function VC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      aD(u), iD(s, u), lD(f, u), yr(e, t, f, a);
      var p = Za.current, v = Mg(p, Wd);
      if (v)
        p = Ug(p, Wd), t.flags |= Oe;
      else {
        var m = e !== null && (e.flags & Oe) !== Te;
        m && nD(t, t.child, a), p = $c(p);
      }
      if (Lu(t, p), (t.mode & he) === pe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var S = rD(t.child), w;
            S === null ? (w = t.child, t.child = null) : (w = S.sibling, S.sibling = null), zS(
              t,
              !1,
              // isBackwards
              w,
              S,
              s
            );
            break;
          }
          case "backwards": {
            var R = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var M = L.alternate;
              if (M !== null && Gh(M) === null) {
                t.child = L;
                break;
              }
              var z = L.sibling;
              L.sibling = R, R = L, L = z;
            }
            zS(
              t,
              !0,
              // isBackwards
              R,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            zS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function uD(e, t, a) {
      Ng(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Vc(t, null, i, a) : yr(e, t, i, a), t.child;
    }
    var jC = !1;
    function oD(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || jC || (jC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xa(v, s, "prop", "Context.Provider");
      }
      if (OE(t, u, p), f !== null) {
        var m = f.value;
        if (ce(m, p)) {
          if (f.children === s.children && !wh())
            return xl(e, t, a);
        } else
          aw(t, u, a);
      }
      var S = s.children;
      return yr(e, t, S, a), t.child;
    }
    var BC = !1;
    function sD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (BC || (BC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bc(t, a);
      var f = sn(i);
      Kl(t);
      var p;
      return np.current = t, aa(!0), p = s(f), aa(!1), Zn(), t.flags |= Si, yr(e, t, p, a), t.child;
    }
    function ip() {
      ti = !0;
    }
    function ym(e, t) {
      (t.mode & he) === pe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= mt);
    }
    function xl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), mC(), yp(t.lanes), tr(a, t.childLanes) ? (nw(e, t), t.child) : null;
    }
    function cD(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= et) : s.push(e), a.flags |= mt, a;
      }
    }
    function AS(e, t) {
      var a = e.lanes;
      return !!tr(a, t);
    }
    function fD(e, t, a) {
      switch (t.tag) {
        case W:
          MC(t), t.stateNode, Fc();
          break;
        case re:
          jE(t);
          break;
        case V: {
          var i = t.type;
          Oi(i) && bh(t);
          break;
        }
        case q:
          Ng(t, t.stateNode.containerInfo);
          break;
        case Ue: {
          var u = t.memoizedProps.value, s = t.type._context;
          OE(t, s, u);
          break;
        }
        case Ne:
          {
            var f = tr(a, t.childLanes);
            f && (t.flags |= je);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case He: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Lu(t, $c(Za.current)), t.flags |= Oe, null;
            var m = t.child, S = m.childLanes;
            if (tr(a, S))
              return zC(e, t, a);
            Lu(t, $c(Za.current));
            var w = xl(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Lu(t, $c(Za.current));
          break;
        }
        case lt: {
          var R = (e.flags & Oe) !== Te, L = tr(a, t.childLanes);
          if (R) {
            if (L)
              return VC(e, t, a);
            t.flags |= Oe;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), Lu(t, Za.current), L)
            break;
          return null;
        }
        case We:
        case ut:
          return t.lanes = j, NC(e, t, a);
      }
      return xl(e, t, a);
    }
    function PC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return cD(e, t, d0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || wh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ti = !0;
        else {
          var s = AS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Oe) === Te)
            return ti = !1, fD(e, t, a);
          (e.flags & ho) !== Te ? ti = !0 : ti = !1;
        }
      } else if (ti = !1, Un() && Ax(t)) {
        var f = t.index, p = Hx();
        mE(t, p, f);
      }
      switch (t.lanes = j, t.tag) {
        case Ee:
          return Iw(e, t, t.type, a);
        case Wt: {
          var v = t.elementType;
          return Yw(e, t, v, a);
        }
        case $: {
          var m = t.type, S = t.pendingProps, w = t.elementType === m ? S : ei(m, S);
          return kS(e, t, m, w, a);
        }
        case V: {
          var R = t.type, L = t.pendingProps, M = t.elementType === R ? L : ei(R, L);
          return OC(e, t, R, M, a);
        }
        case W:
          return Bw(e, t, a);
        case re:
          return Pw(e, t, a);
        case ge:
          return $w(e, t);
        case He:
          return zC(e, t, a);
        case q:
          return uD(e, t, a);
        case ye: {
          var z = t.type, J = t.pendingProps, Re = t.elementType === z ? J : ei(z, J);
          return bC(e, t, z, Re, a);
        }
        case ke:
          return Fw(e, t, a);
        case Ce:
          return Vw(e, t, a);
        case Ne:
          return jw(e, t, a);
        case Ue:
          return oD(e, t, a);
        case Je:
          return sD(e, t, a);
        case dt: {
          var me = t.type, Xe = t.pendingProps, Ie = ei(me, Xe);
          if (t.type !== t.elementType) {
            var k = me.propTypes;
            k && Xa(
              k,
              Ie,
              // Resolved for outer only
              "prop",
              it(me)
            );
          }
          return Ie = ei(me.type, Ie), kC(e, t, me, Ie, a);
        }
        case Be:
          return _C(e, t, t.type, t.pendingProps, a);
        case _n: {
          var A = t.type, _ = t.pendingProps, Q = t.elementType === A ? _ : ei(A, _);
          return Qw(e, t, A, Q, a);
        }
        case lt:
          return VC(e, t, a);
        case Pn:
          break;
        case We:
          return NC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xc(e) {
      e.flags |= je;
    }
    function $C(e) {
      e.flags |= Wn, e.flags |= Qf;
    }
    var YC, HS, QC, IC;
    YC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === re || u.tag === ge)
          MR(e, u.stateNode);
        else if (u.tag !== q) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, HS = function(e, t) {
    }, QC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Lg(), v = zR(f, a, s, i, u, p);
        t.updateQueue = v, v && Xc(t);
      }
    }, IC = function(e, t, a, i) {
      a !== i && Xc(t);
    };
    function lp(e, t) {
      if (!Un())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function An(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = j, i = Te;
      if (t) {
        if ((e.mode & Me) !== pe) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ve(a, Ve(m.lanes, m.childLanes)), i |= m.subtreeFlags & cn, i |= m.flags & cn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var S = e.child; S !== null; )
            a = Ve(a, Ve(S.lanes, S.childLanes)), i |= S.subtreeFlags & cn, i |= S.flags & cn, S.return = e, S = S.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Me) !== pe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ve(a, Ve(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ve(a, Ve(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function dD(e, t, a) {
      if (Kx() && (t.mode & he) !== pe && (t.flags & Oe) === Te)
        return RE(t), Fc(), t.flags |= Lt | fr | an, !1;
      var i = Oh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Gx(t), An(t), (t.mode & Me) !== pe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Fc(), (t.flags & Oe) === Te && (t.memoizedState = null), t.flags |= je, An(t), (t.mode & Me) !== pe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return xE(), !0;
    }
    function WC(e, t, a) {
      var i = t.pendingProps;
      switch (sg(t), t.tag) {
        case Ee:
        case Wt:
        case Be:
        case $:
        case ye:
        case ke:
        case Ce:
        case Ne:
        case Je:
        case dt:
          return An(t), null;
        case V: {
          var u = t.type;
          return Oi(u) && Dh(t), An(t), null;
        }
        case W: {
          var s = t.stateNode;
          if (Pc(t), ig(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Oh(t);
            if (f)
              Xc(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Lt) !== Te) && (t.flags |= Or, xE());
            }
          }
          return HS(e, t), An(t), null;
        }
        case re: {
          Og(t);
          var v = VE(), m = t.type;
          if (e !== null && t.stateNode != null)
            QC(e, t, m, i, v), e.ref !== t.ref && $C(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return An(t), null;
            }
            var S = Lg(), w = Oh(t);
            if (w)
              Ix(t, v, S) && Xc(t);
            else {
              var R = OR(m, i, v, S, t);
              YC(R, t, !1, !1), t.stateNode = R, UR(R, m, i, v) && Xc(t);
            }
            t.ref !== null && $C(t);
          }
          return An(t), null;
        }
        case ge: {
          var L = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            IC(e, t, M, L);
          } else {
            if (typeof L != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var z = VE(), J = Lg(), Re = Oh(t);
            Re ? Wx(t) && Xc(t) : t.stateNode = AR(L, z, J, t);
          }
          return An(t), null;
        }
        case He: {
          Yc(t);
          var me = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Xe = dD(e, t, me);
            if (!Xe)
              return t.flags & an ? t : null;
          }
          if ((t.flags & Oe) !== Te)
            return t.lanes = a, (t.mode & Me) !== pe && uS(t), t;
          var Ie = me !== null, k = e !== null && e.memoizedState !== null;
          if (Ie !== k && Ie) {
            var A = t.child;
            if (A.flags |= Ei, (t.mode & he) !== pe) {
              var _ = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !rt);
              _ || Mg(Za.current, PE) ? pb() : t0();
            }
          }
          var Q = t.updateQueue;
          if (Q !== null && (t.flags |= je), An(t), (t.mode & Me) !== pe && Ie) {
            var le = t.child;
            le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
          }
          return null;
        }
        case q:
          return Pc(t), HS(e, t), e === null && _x(t.stateNode.containerInfo), An(t), null;
        case Ue:
          var te = t.type._context;
          return Rg(te, t), An(t), null;
        case _n: {
          var Le = t.type;
          return Oi(Le) && Dh(t), An(t), null;
        }
        case lt: {
          Yc(t);
          var Ae = t.memoizedState;
          if (Ae === null)
            return An(t), null;
          var ft = (t.flags & Oe) !== Te, qe = Ae.rendering;
          if (qe === null)
            if (ft)
              lp(Ae, !1);
            else {
              var tn = hb() && (e === null || (e.flags & Oe) === Te);
              if (!tn)
                for (var Ze = t.child; Ze !== null; ) {
                  var It = Gh(Ze);
                  if (It !== null) {
                    ft = !0, t.flags |= Oe, lp(Ae, !1);
                    var lr = It.updateQueue;
                    return lr !== null && (t.updateQueue = lr, t.flags |= je), t.subtreeFlags = Te, rw(t, a), Lu(t, Ug(Za.current, Wd)), t.child;
                  }
                  Ze = Ze.sibling;
                }
              Ae.tail !== null && xt() > v1() && (t.flags |= Oe, ft = !0, lp(Ae, !1), t.lanes = Lv);
            }
          else {
            if (!ft) {
              var Bn = Gh(qe);
              if (Bn !== null) {
                t.flags |= Oe, ft = !0;
                var fa = Bn.updateQueue;
                if (fa !== null && (t.updateQueue = fa, t.flags |= je), lp(Ae, !0), Ae.tail === null && Ae.tailMode === "hidden" && !qe.alternate && !Un())
                  return An(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              xt() * 2 - Ae.renderingStartTime > v1() && a !== Dn && (t.flags |= Oe, ft = !0, lp(Ae, !1), t.lanes = Lv);
            }
            if (Ae.isBackwards)
              qe.sibling = t.child, t.child = qe;
            else {
              var Er = Ae.last;
              Er !== null ? Er.sibling = qe : t.child = qe, Ae.last = qe;
            }
          }
          if (Ae.tail !== null) {
            var Cr = Ae.tail;
            Ae.rendering = Cr, Ae.tail = Cr.sibling, Ae.renderingStartTime = xt(), Cr.sibling = null;
            var ur = Za.current;
            return ft ? ur = Ug(ur, Wd) : ur = $c(ur), Lu(t, ur), Cr;
          }
          return An(t), null;
        }
        case Pn:
          break;
        case We:
        case ut: {
          e0(t);
          var _l = t.memoizedState, rf = _l !== null;
          if (e !== null) {
            var Tp = e.memoizedState, ji = Tp !== null;
            ji !== rf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !oe && (t.flags |= Ei);
          }
          return !rf || (t.mode & he) === pe ? An(t) : tr(Vi, Dn) && (An(t), t.subtreeFlags & (mt | je) && (t.flags |= Ei)), null;
        }
        case Tr:
          return null;
        case bt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function pD(e, t, a) {
      switch (sg(t), t.tag) {
        case V: {
          var i = t.type;
          Oi(i) && Dh(t);
          var u = t.flags;
          return u & an ? (t.flags = u & ~an | Oe, (t.mode & Me) !== pe && uS(t), t) : null;
        }
        case W: {
          t.stateNode, Pc(t), ig(t), Ag();
          var s = t.flags;
          return (s & an) !== Te && (s & Oe) === Te ? (t.flags = s & ~an | Oe, t) : null;
        }
        case re:
          return Og(t), null;
        case He: {
          Yc(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Fc();
          }
          var p = t.flags;
          return p & an ? (t.flags = p & ~an | Oe, (t.mode & Me) !== pe && uS(t), t) : null;
        }
        case lt:
          return Yc(t), null;
        case q:
          return Pc(t), null;
        case Ue:
          var v = t.type._context;
          return Rg(v, t), null;
        case We:
        case ut:
          return e0(t), null;
        case Tr:
          return null;
        default:
          return null;
      }
    }
    function GC(e, t, a) {
      switch (sg(t), t.tag) {
        case V: {
          var i = t.type.childContextTypes;
          i != null && Dh(t);
          break;
        }
        case W: {
          t.stateNode, Pc(t), ig(t), Ag();
          break;
        }
        case re: {
          Og(t);
          break;
        }
        case q:
          Pc(t);
          break;
        case He:
          Yc(t);
          break;
        case lt:
          Yc(t);
          break;
        case Ue:
          var u = t.type._context;
          Rg(u, t);
          break;
        case We:
        case ut:
          e0(t);
          break;
      }
    }
    var XC = null;
    XC = /* @__PURE__ */ new Set();
    var gm = !1, Hn = !1, vD = typeof WeakSet == "function" ? WeakSet : Set, fe = null, Kc = null, qc = null;
    function hD(e) {
      el(null, function() {
        throw e;
      }), $f();
    }
    var mD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Me)
        try {
          Hi(), t.componentWillUnmount();
        } finally {
          Ai(e);
        }
      else
        t.componentWillUnmount();
    };
    function KC(e, t) {
      try {
        Uu(vn, e);
      } catch (a) {
        St(e, t, a);
      }
    }
    function FS(e, t, a) {
      try {
        mD(e, a);
      } catch (i) {
        St(e, t, i);
      }
    }
    function yD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        St(e, t, i);
      }
    }
    function qC(e, t) {
      try {
        JC(e);
      } catch (a) {
        St(e, t, a);
      }
    }
    function Zc(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Nn && ui && e.mode & Me)
              try {
                Hi(), i = a(null);
              } finally {
                Ai(e);
              }
            else
              i = a(null);
          } catch (u) {
            St(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Fe(e));
        } else
          a.current = null;
    }
    function Sm(e, t, a) {
      try {
        a();
      } catch (i) {
        St(e, t, i);
      }
    }
    var ZC = !1;
    function gD(e, t) {
      NR(e.containerInfo), fe = t, SD();
      var a = ZC;
      return ZC = !1, a;
    }
    function SD() {
      for (; fe !== null; ) {
        var e = fe, t = e.child;
        (e.subtreeFlags & Wl) !== Te && t !== null ? (t.return = e, fe = t) : ED();
      }
    }
    function ED() {
      for (; fe !== null; ) {
        var e = fe;
        st(e);
        try {
          CD(e);
        } catch (a) {
          St(e, e.return, a);
        }
        Xt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, fe = t;
          return;
        }
        fe = e.return;
      }
    }
    function CD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Or) !== Te) {
        switch (st(e), e.tag) {
          case $:
          case ye:
          case Be:
            break;
          case V: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ko && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ei(e.type, i), u);
              {
                var p = XC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Fe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case W: {
            {
              var v = e.stateNode;
              tx(v.containerInfo);
            }
            break;
          }
          case re:
          case ge:
          case q:
          case _n:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Xt();
      }
    }
    function ni(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & zn) !== Ir ? kv(t) : (e & vn) !== Ir && oa(t), (e & Mi) !== Ir && Sp(!0), Sm(t, a, p), (e & Mi) !== Ir && Sp(!1), (e & zn) !== Ir ? Fs() : (e & vn) !== Ir && ql());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Uu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & zn) !== Ir ? Ri(t) : (e & vn) !== Ir && _v(t);
            var f = s.create;
            (e & Mi) !== Ir && Sp(!0), s.destroy = f(), (e & Mi) !== Ir && Sp(!1), (e & zn) !== Ir ? Hs() : (e & vn) !== Ir && mo();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & vn) !== Te ? v = "useLayoutEffect" : (s.tag & Mi) !== Te ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function TD(e, t) {
      if ((t.flags & je) !== Te)
        switch (t.tag) {
          case Ne: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = vC(), p = t.alternate === null ? "mount" : "update";
            pC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case W:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case Ne:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function RD(e, t, a, i) {
      if ((a.flags & xn) !== Te)
        switch (a.tag) {
          case $:
          case ye:
          case Be: {
            if (!Hn)
              if (a.mode & Me)
                try {
                  Hi(), Uu(vn | pn, a);
                } finally {
                  Ai(a);
                }
              else
                Uu(vn | pn, a);
            break;
          }
          case V: {
            var u = a.stateNode;
            if (a.flags & je && !Hn)
              if (t === null)
                if (a.type === a.elementType && !Ko && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(a) || "instance")), a.mode & Me)
                  try {
                    Hi(), u.componentDidMount();
                  } finally {
                    Ai(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ei(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ko && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(a) || "instance")), a.mode & Me)
                  try {
                    Hi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ai(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ko && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Fe(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Fe(a) || "instance")), FE(a, p, u));
            break;
          }
          case W: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case re:
                    m = a.child.stateNode;
                    break;
                  case V:
                    m = a.child.stateNode;
                    break;
                }
              FE(a, v, m);
            }
            break;
          }
          case re: {
            var S = a.stateNode;
            if (t === null && a.flags & je) {
              var w = a.type, R = a.memoizedProps;
              BR(S, w, R);
            }
            break;
          }
          case ge:
            break;
          case q:
            break;
          case Ne: {
            {
              var L = a.memoizedProps, M = L.onCommit, z = L.onRender, J = a.stateNode.effectDuration, Re = vC(), me = t === null ? "mount" : "update";
              pC() && (me = "nested-update"), typeof z == "function" && z(a.memoizedProps.id, me, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Re);
              {
                typeof M == "function" && M(a.memoizedProps.id, me, J, Re), Eb(a);
                var Xe = a.return;
                e: for (; Xe !== null; ) {
                  switch (Xe.tag) {
                    case W:
                      var Ie = Xe.stateNode;
                      Ie.effectDuration += J;
                      break e;
                    case Ne:
                      var k = Xe.stateNode;
                      k.effectDuration += J;
                      break e;
                  }
                  Xe = Xe.return;
                }
              }
            }
            break;
          }
          case He: {
            LD(e, a);
            break;
          }
          case lt:
          case _n:
          case Pn:
          case We:
          case ut:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hn || a.flags & Wn && JC(a);
    }
    function xD(e) {
      switch (e.tag) {
        case $:
        case ye:
        case Be: {
          if (e.mode & Me)
            try {
              Hi(), KC(e, e.return);
            } finally {
              Ai(e);
            }
          else
            KC(e, e.return);
          break;
        }
        case V: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && yD(e, e.return, t), qC(e, e.return);
          break;
        }
        case re: {
          qC(e, e.return);
          break;
        }
      }
    }
    function wD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === re) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? qR(u) : JR(i.stateNode, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
          }
        } else if (i.tag === ge) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ZR(s) : ex(s, i.memoizedProps);
            } catch (f) {
              St(e, e.return, f);
            }
        } else if (!((i.tag === We || i.tag === ut) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function JC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case re:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Me)
            try {
              Hi(), u = t(i);
            } finally {
              Ai(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Fe(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Fe(e)), t.current = i;
      }
    }
    function DD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function e1(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, e1(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === re) {
          var a = e.stateNode;
          a !== null && Ox(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function bD(e) {
      for (var t = e.return; t !== null; ) {
        if (t1(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function t1(e) {
      return e.tag === re || e.tag === W || e.tag === q;
    }
    function n1(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || t1(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== re && t.tag !== ge && t.tag !== Et; ) {
          if (t.flags & mt || t.child === null || t.tag === q)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & mt))
          return t.stateNode;
      }
    }
    function kD(e) {
      var t = bD(e);
      switch (t.tag) {
        case re: {
          var a = t.stateNode;
          t.flags & tt && (aE(a), t.flags &= ~tt);
          var i = n1(e);
          jS(e, i, a);
          break;
        }
        case W:
        case q: {
          var u = t.stateNode.containerInfo, s = n1(e);
          VS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function VS(e, t, a) {
      var i = e.tag, u = i === re || i === ge;
      if (u) {
        var s = e.stateNode;
        t ? WR(a, s, t) : QR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          VS(f, t, a);
          for (var p = f.sibling; p !== null; )
            VS(p, t, a), p = p.sibling;
        }
      }
    }
    function jS(e, t, a) {
      var i = e.tag, u = i === re || i === ge;
      if (u) {
        var s = e.stateNode;
        t ? IR(a, s, t) : YR(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          jS(f, t, a);
          for (var p = f.sibling; p !== null; )
            jS(p, t, a), p = p.sibling;
        }
      }
    }
    var Fn = null, ri = !1;
    function _D(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case re: {
              Fn = i.stateNode, ri = !1;
              break e;
            }
            case W: {
              Fn = i.stateNode.containerInfo, ri = !0;
              break e;
            }
            case q: {
              Fn = i.stateNode.containerInfo, ri = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Fn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        r1(e, t, a), Fn = null, ri = !1;
      }
      DD(a);
    }
    function zu(e, t, a) {
      for (var i = a.child; i !== null; )
        r1(e, t, i), i = i.sibling;
    }
    function r1(e, t, a) {
      switch (rl(a), a.tag) {
        case re:
          Hn || Zc(a, t);
        case ge: {
          {
            var i = Fn, u = ri;
            Fn = null, zu(e, t, a), Fn = i, ri = u, Fn !== null && (ri ? XR(Fn, a.stateNode) : GR(Fn, a.stateNode));
          }
          return;
        }
        case Et: {
          Fn !== null && (ri ? KR(Fn, a.stateNode) : qy(Fn, a.stateNode));
          return;
        }
        case q: {
          {
            var s = Fn, f = ri;
            Fn = a.stateNode.containerInfo, ri = !0, zu(e, t, a), Fn = s, ri = f;
          }
          return;
        }
        case $:
        case ye:
        case dt:
        case Be: {
          if (!Hn) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, S = m;
                do {
                  var w = S, R = w.destroy, L = w.tag;
                  R !== void 0 && ((L & Mi) !== Ir ? Sm(a, t, R) : (L & vn) !== Ir && (oa(a), a.mode & Me ? (Hi(), Sm(a, t, R), Ai(a)) : Sm(a, t, R), ql())), S = S.next;
                } while (S !== m);
              }
            }
          }
          zu(e, t, a);
          return;
        }
        case V: {
          if (!Hn) {
            Zc(a, t);
            var M = a.stateNode;
            typeof M.componentWillUnmount == "function" && FS(a, t, M);
          }
          zu(e, t, a);
          return;
        }
        case Pn: {
          zu(e, t, a);
          return;
        }
        case We: {
          if (
            // TODO: Remove this dead flag
            a.mode & he
          ) {
            var z = Hn;
            Hn = z || a.memoizedState !== null, zu(e, t, a), Hn = z;
          } else
            zu(e, t, a);
          break;
        }
        default: {
          zu(e, t, a);
          return;
        }
      }
    }
    function ND(e) {
      e.memoizedState;
    }
    function LD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && hx(s);
          }
        }
      }
    }
    function a1(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new vD()), t.forEach(function(i) {
          var u = bb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), vr)
              if (Kc !== null && qc !== null)
                gp(qc, Kc);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function OD(e, t, a) {
      Kc = a, qc = e, st(t), i1(t, e), st(t), Kc = null, qc = null;
    }
    function ai(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            _D(e, t, s);
          } catch (v) {
            St(s, t, v);
          }
        }
      var f = Zm();
      if (t.subtreeFlags & Kn)
        for (var p = t.child; p !== null; )
          st(p), i1(p, e), p = p.sibling;
      st(f);
    }
    function i1(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case $:
        case ye:
        case dt:
        case Be: {
          if (ai(t, e), Fi(e), u & je) {
            try {
              ni(Mi | pn, e, e.return), Uu(Mi | pn, e);
            } catch (Le) {
              St(e, e.return, Le);
            }
            if (e.mode & Me) {
              try {
                Hi(), ni(vn | pn, e, e.return);
              } catch (Le) {
                St(e, e.return, Le);
              }
              Ai(e);
            } else
              try {
                ni(vn | pn, e, e.return);
              } catch (Le) {
                St(e, e.return, Le);
              }
          }
          return;
        }
        case V: {
          ai(t, e), Fi(e), u & Wn && i !== null && Zc(i, i.return);
          return;
        }
        case re: {
          ai(t, e), Fi(e), u & Wn && i !== null && Zc(i, i.return);
          {
            if (e.flags & tt) {
              var s = e.stateNode;
              try {
                aE(s);
              } catch (Le) {
                St(e, e.return, Le);
              }
            }
            if (u & je) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, S = e.updateQueue;
                if (e.updateQueue = null, S !== null)
                  try {
                    PR(f, S, m, v, p, e);
                  } catch (Le) {
                    St(e, e.return, Le);
                  }
              }
            }
          }
          return;
        }
        case ge: {
          if (ai(t, e), Fi(e), u & je) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, R = e.memoizedProps, L = i !== null ? i.memoizedProps : R;
            try {
              $R(w, L, R);
            } catch (Le) {
              St(e, e.return, Le);
            }
          }
          return;
        }
        case W: {
          if (ai(t, e), Fi(e), u & je && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                vx(t.containerInfo);
              } catch (Le) {
                St(e, e.return, Le);
              }
          }
          return;
        }
        case q: {
          ai(t, e), Fi(e);
          return;
        }
        case He: {
          ai(t, e), Fi(e);
          var z = e.child;
          if (z.flags & Ei) {
            var J = z.stateNode, Re = z.memoizedState, me = Re !== null;
            if (J.isHidden = me, me) {
              var Xe = z.alternate !== null && z.alternate.memoizedState !== null;
              Xe || db();
            }
          }
          if (u & je) {
            try {
              ND(e);
            } catch (Le) {
              St(e, e.return, Le);
            }
            a1(e);
          }
          return;
        }
        case We: {
          var Ie = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & he
          ) {
            var k = Hn;
            Hn = k || Ie, ai(t, e), Hn = k;
          } else
            ai(t, e);
          if (Fi(e), u & Ei) {
            var A = e.stateNode, _ = e.memoizedState, Q = _ !== null, le = e;
            if (A.isHidden = Q, Q && !Ie && (le.mode & he) !== pe) {
              fe = le;
              for (var te = le.child; te !== null; )
                fe = te, UD(te), te = te.sibling;
            }
            wD(le, Q);
          }
          return;
        }
        case lt: {
          ai(t, e), Fi(e), u & je && a1(e);
          return;
        }
        case Pn:
          return;
        default: {
          ai(t, e), Fi(e);
          return;
        }
      }
    }
    function Fi(e) {
      var t = e.flags;
      if (t & mt) {
        try {
          kD(e);
        } catch (a) {
          St(e, e.return, a);
        }
        e.flags &= ~mt;
      }
      t & Mr && (e.flags &= ~Mr);
    }
    function MD(e, t, a) {
      Kc = a, qc = t, fe = e, l1(e, t, a), Kc = null, qc = null;
    }
    function l1(e, t, a) {
      for (var i = (e.mode & he) !== pe; fe !== null; ) {
        var u = fe, s = u.child;
        if (u.tag === We && i) {
          var f = u.memoizedState !== null, p = f || gm;
          if (p) {
            BS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, S = m || Hn, w = gm, R = Hn;
            gm = p, Hn = S, Hn && !R && (fe = u, zD(u));
            for (var L = s; L !== null; )
              fe = L, l1(
                L,
                // New root; bubble back up to here and stop.
                t,
                a
              ), L = L.sibling;
            fe = u, gm = w, Hn = R, BS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & xn) !== Te && s !== null ? (s.return = u, fe = s) : BS(e, t, a);
      }
    }
    function BS(e, t, a) {
      for (; fe !== null; ) {
        var i = fe;
        if ((i.flags & xn) !== Te) {
          var u = i.alternate;
          st(i);
          try {
            RD(t, u, i, a);
          } catch (f) {
            St(i, i.return, f);
          }
          Xt();
        }
        if (i === e) {
          fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, fe = s;
          return;
        }
        fe = i.return;
      }
    }
    function UD(e) {
      for (; fe !== null; ) {
        var t = fe, a = t.child;
        switch (t.tag) {
          case $:
          case ye:
          case dt:
          case Be: {
            if (t.mode & Me)
              try {
                Hi(), ni(vn, t, t.return);
              } finally {
                Ai(t);
              }
            else
              ni(vn, t, t.return);
            break;
          }
          case V: {
            Zc(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && FS(t, t.return, i);
            break;
          }
          case re: {
            Zc(t, t.return);
            break;
          }
          case We: {
            var u = t.memoizedState !== null;
            if (u) {
              u1(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, fe = a) : u1(e);
      }
    }
    function u1(e) {
      for (; fe !== null; ) {
        var t = fe;
        if (t === e) {
          fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, fe = a;
          return;
        }
        fe = t.return;
      }
    }
    function zD(e) {
      for (; fe !== null; ) {
        var t = fe, a = t.child;
        if (t.tag === We) {
          var i = t.memoizedState !== null;
          if (i) {
            o1(e);
            continue;
          }
        }
        a !== null ? (a.return = t, fe = a) : o1(e);
      }
    }
    function o1(e) {
      for (; fe !== null; ) {
        var t = fe;
        st(t);
        try {
          xD(t);
        } catch (i) {
          St(t, t.return, i);
        }
        if (Xt(), t === e) {
          fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, fe = a;
          return;
        }
        fe = t.return;
      }
    }
    function AD(e, t, a, i) {
      fe = t, HD(t, e, a, i);
    }
    function HD(e, t, a, i) {
      for (; fe !== null; ) {
        var u = fe, s = u.child;
        (u.subtreeFlags & Ur) !== Te && s !== null ? (s.return = u, fe = s) : FD(e, t, a, i);
      }
    }
    function FD(e, t, a, i) {
      for (; fe !== null; ) {
        var u = fe;
        if ((u.flags & Ct) !== Te) {
          st(u);
          try {
            VD(t, u, a, i);
          } catch (f) {
            St(u, u.return, f);
          }
          Xt();
        }
        if (u === e) {
          fe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, fe = s;
          return;
        }
        fe = u.return;
      }
    }
    function VD(e, t, a, i) {
      switch (t.tag) {
        case $:
        case ye:
        case Be: {
          if (t.mode & Me) {
            lS();
            try {
              Uu(zn | pn, t);
            } finally {
              iS(t);
            }
          } else
            Uu(zn | pn, t);
          break;
        }
      }
    }
    function jD(e) {
      fe = e, BD();
    }
    function BD() {
      for (; fe !== null; ) {
        var e = fe, t = e.child;
        if ((fe.flags & et) !== Te) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              fe = u, YD(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            fe = e;
          }
        }
        (e.subtreeFlags & Ur) !== Te && t !== null ? (t.return = e, fe = t) : PD();
      }
    }
    function PD() {
      for (; fe !== null; ) {
        var e = fe;
        (e.flags & Ct) !== Te && (st(e), $D(e), Xt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, fe = t;
          return;
        }
        fe = e.return;
      }
    }
    function $D(e) {
      switch (e.tag) {
        case $:
        case ye:
        case Be: {
          e.mode & Me ? (lS(), ni(zn | pn, e, e.return), iS(e)) : ni(zn | pn, e, e.return);
          break;
        }
      }
    }
    function YD(e, t) {
      for (; fe !== null; ) {
        var a = fe;
        st(a), ID(a, t), Xt();
        var i = a.child;
        i !== null ? (i.return = a, fe = i) : QD(e);
      }
    }
    function QD(e) {
      for (; fe !== null; ) {
        var t = fe, a = t.sibling, i = t.return;
        if (e1(t), t === e) {
          fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, fe = a;
          return;
        }
        fe = i;
      }
    }
    function ID(e, t) {
      switch (e.tag) {
        case $:
        case ye:
        case Be: {
          e.mode & Me ? (lS(), ni(zn, e, t), iS(e)) : ni(zn, e, t);
          break;
        }
      }
    }
    function WD(e) {
      switch (e.tag) {
        case $:
        case ye:
        case Be: {
          try {
            Uu(vn | pn, e);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case V: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
      }
    }
    function GD(e) {
      switch (e.tag) {
        case $:
        case ye:
        case Be: {
          try {
            Uu(zn | pn, e);
          } catch (t) {
            St(e, e.return, t);
          }
          break;
        }
      }
    }
    function XD(e) {
      switch (e.tag) {
        case $:
        case ye:
        case Be: {
          try {
            ni(vn | pn, e, e.return);
          } catch (a) {
            St(e, e.return, a);
          }
          break;
        }
        case V: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && FS(e, e.return, t);
          break;
        }
      }
    }
    function KD(e) {
      switch (e.tag) {
        case $:
        case ye:
        case Be:
          try {
            ni(zn | pn, e, e.return);
          } catch (t) {
            St(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var up = Symbol.for;
      up("selector.component"), up("selector.has_pseudo_class"), up("selector.role"), up("selector.test_id"), up("selector.text");
    }
    var qD = [];
    function ZD() {
      qD.forEach(function(e) {
        return e();
      });
    }
    var JD = C.ReactCurrentActQueue;
    function eb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function s1() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && JD.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var tb = Math.ceil, PS = C.ReactCurrentDispatcher, $S = C.ReactCurrentOwner, Vn = C.ReactCurrentBatchConfig, ii = C.ReactCurrentActQueue, yn = (
      /*             */
      0
    ), c1 = (
      /*               */
      1
    ), jn = (
      /*                */
      2
    ), ka = (
      /*                */
      4
    ), wl = 0, op = 1, qo = 2, Em = 3, sp = 4, f1 = 5, YS = 6, Ge = yn, gr = null, jt = null, gn = j, Vi = j, QS = wu(j), Sn = wl, cp = null, Cm = j, fp = j, Tm = j, dp = null, Wr = null, IS = 0, d1 = 500, p1 = 1 / 0, nb = 500, Dl = null;
    function pp() {
      p1 = xt() + nb;
    }
    function v1() {
      return p1;
    }
    var Rm = !1, WS = null, Jc = null, Zo = !1, Au = null, vp = j, GS = [], XS = null, rb = 50, hp = 0, KS = null, qS = !1, xm = !1, ab = 50, ef = 0, wm = null, mp = ht, Dm = j, h1 = !1;
    function bm() {
      return gr;
    }
    function Sr() {
      return (Ge & (jn | ka)) !== yn ? xt() : (mp !== ht || (mp = xt()), mp);
    }
    function Hu(e) {
      var t = e.mode;
      if ((t & he) === pe)
        return Se;
      if ((Ge & jn) !== yn && gn !== j)
        return lu(gn);
      var a = Jx() !== Zx;
      if (a) {
        if (Vn.transition !== null) {
          var i = Vn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Dm === Qt && (Dm = Vv()), Dm;
      }
      var u = Vr();
      if (u !== Qt)
        return u;
      var s = HR();
      return s;
    }
    function ib(e) {
      var t = e.mode;
      return (t & he) === pe ? Se : er();
    }
    function En(e, t, a, i) {
      _b(), h1 && y("useInsertionEffect must not schedule updates."), qS && (xm = !0), fl(e, a, i), (Ge & jn) !== j && e === gr ? Ob(t) : (vr && uc(e, t, a), Mb(t), e === gr && ((Ge & jn) === yn && (fp = Ve(fp, a)), Sn === sp && Fu(e, gn)), Gr(e, i), a === Se && Ge === yn && (t.mode & he) === pe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ii.isBatchingLegacy && (pp(), hE()));
    }
    function lb(e, t, a) {
      var i = e.current;
      i.lanes = t, fl(e, t, a), Gr(e, a);
    }
    function ub(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ge & jn) !== yn
      );
    }
    function Gr(e, t) {
      var a = e.callbackNode;
      Uv(e, t);
      var i = sl(e, e === gr ? gn : j);
      if (i === j) {
        a !== null && L1(a), e.callbackNode = null, e.callbackPriority = Qt;
        return;
      }
      var u = Ht(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ii.current !== null && a !== a0)) {
        a == null && s !== Se && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && L1(a);
      var f;
      if (u === Se)
        e.tag === Du ? (ii.isBatchingLegacy !== null && (ii.didScheduleLegacyUpdate = !0), zx(g1.bind(null, e))) : vE(g1.bind(null, e)), ii.current !== null ? ii.current.push(bu) : VR(function() {
          (Ge & (jn | ka)) === yn && bu();
        }), f = null;
      else {
        var p;
        switch (dn(i)) {
          case Ft:
            p = Us;
            break;
          case Qa:
            p = nl;
            break;
          case Sa:
            p = ga;
            break;
          case uu:
            p = zs;
            break;
          default:
            p = ga;
            break;
        }
        f = i0(p, m1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function m1(e, t) {
      if (ww(), mp = ht, Dm = j, (Ge & (jn | ka)) !== yn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = kl();
      if (i && e.callbackNode !== a)
        return null;
      var u = sl(e, e === gr ? gn : j);
      if (u === j)
        return null;
      var s = !xo(e, u) && !Fv(e, u) && !t, f = s ? yb(e, u) : _m(e, u);
      if (f !== wl) {
        if (f === qo) {
          var p = wi(e);
          p !== j && (u = p, f = ZS(e, p));
        }
        if (f === op) {
          var v = cp;
          throw Jo(e, j), Fu(e, u), Gr(e, xt()), v;
        }
        if (f === YS)
          Fu(e, u);
        else {
          var m = !xo(e, u), S = e.current.alternate;
          if (m && !sb(S)) {
            if (f = _m(e, u), f === qo) {
              var w = wi(e);
              w !== j && (u = w, f = ZS(e, w));
            }
            if (f === op) {
              var R = cp;
              throw Jo(e, j), Fu(e, u), Gr(e, xt()), R;
            }
          }
          e.finishedWork = S, e.finishedLanes = u, ob(e, f, u);
        }
      }
      return Gr(e, xt()), e.callbackNode === a ? m1.bind(null, e) : null;
    }
    function ZS(e, t) {
      var a = dp;
      if (oc(e)) {
        var i = Jo(e, t);
        i.flags |= Lt, kx(e.containerInfo);
      }
      var u = _m(e, t);
      if (u !== qo) {
        var s = Wr;
        Wr = a, s !== null && y1(s);
      }
      return u;
    }
    function y1(e) {
      Wr === null ? Wr = e : Wr.push.apply(Wr, e);
    }
    function ob(e, t, a) {
      switch (t) {
        case wl:
        case op:
          throw new Error("Root did not complete. This is a bug in React.");
        case qo: {
          es(e, Wr, Dl);
          break;
        }
        case Em: {
          if (Fu(e, a), zv(a) && // do not delay if we're inside an act() scope
          !O1()) {
            var i = IS + d1 - xt();
            if (i > 10) {
              var u = sl(e, j);
              if (u !== j)
                break;
              var s = e.suspendedLanes;
              if (!cl(s, a)) {
                Sr(), ic(e, s);
                break;
              }
              e.timeoutHandle = Xy(es.bind(null, e, Wr, Dl), i);
              break;
            }
          }
          es(e, Wr, Dl);
          break;
        }
        case sp: {
          if (Fu(e, a), Hv(a))
            break;
          if (!O1()) {
            var f = Ov(e, a), p = f, v = xt() - p, m = kb(v) - v;
            if (m > 10) {
              e.timeoutHandle = Xy(es.bind(null, e, Wr, Dl), m);
              break;
            }
          }
          es(e, Wr, Dl);
          break;
        }
        case f1: {
          es(e, Wr, Dl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function sb(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Fu(e, t) {
      t = wo(t, Tm), t = wo(t, fp), Bv(e, t);
    }
    function g1(e) {
      if (Dw(), (Ge & (jn | ka)) !== yn)
        throw new Error("Should not already be working.");
      kl();
      var t = sl(e, j);
      if (!tr(t, Se))
        return Gr(e, xt()), null;
      var a = _m(e, t);
      if (e.tag !== Du && a === qo) {
        var i = wi(e);
        i !== j && (t = i, a = ZS(e, i));
      }
      if (a === op) {
        var u = cp;
        throw Jo(e, j), Fu(e, t), Gr(e, xt()), u;
      }
      if (a === YS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, es(e, Wr, Dl), Gr(e, xt()), null;
    }
    function cb(e, t) {
      t !== j && (ld(e, Ve(t, Se)), Gr(e, xt()), (Ge & (jn | ka)) === yn && (pp(), bu()));
    }
    function JS(e, t) {
      var a = Ge;
      Ge |= c1;
      try {
        return e(t);
      } finally {
        Ge = a, Ge === yn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ii.isBatchingLegacy && (pp(), hE());
      }
    }
    function fb(e, t, a, i, u) {
      var s = Vr(), f = Vn.transition;
      try {
        return Vn.transition = null, Ot(Ft), e(t, a, i, u);
      } finally {
        Ot(s), Vn.transition = f, Ge === yn && pp();
      }
    }
    function bl(e) {
      Au !== null && Au.tag === Du && (Ge & (jn | ka)) === yn && kl();
      var t = Ge;
      Ge |= c1;
      var a = Vn.transition, i = Vr();
      try {
        return Vn.transition = null, Ot(Ft), e ? e() : void 0;
      } finally {
        Ot(i), Vn.transition = a, Ge = t, (Ge & (jn | ka)) === yn && bu();
      }
    }
    function S1() {
      return (Ge & (jn | ka)) !== yn;
    }
    function km(e, t) {
      ar(QS, Vi, e), Vi = Ve(Vi, t);
    }
    function e0(e) {
      Vi = QS.current, rr(QS, e);
    }
    function Jo(e, t) {
      e.finishedWork = null, e.finishedLanes = j;
      var a = e.timeoutHandle;
      if (a !== Ky && (e.timeoutHandle = Ky, FR(a)), jt !== null)
        for (var i = jt.return; i !== null; ) {
          var u = i.alternate;
          GC(u, i), i = i.return;
        }
      gr = e;
      var s = ts(e.current, null);
      return jt = s, gn = Vi = t, Sn = wl, cp = null, Cm = j, fp = j, Tm = j, dp = null, Wr = null, lw(), qa.discardPendingWarnings(), s;
    }
    function E1(e, t) {
      do {
        var a = jt;
        try {
          if (Fh(), YE(), Xt(), $S.current = null, a === null || a.return === null) {
            Sn = op, cp = t, jt = null;
            return;
          }
          if (Nn && a.mode & Me && pm(a, !0), li)
            if (Zn(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              al(a, i, gn);
            } else
              yo(a, t, gn);
          zw(e, a.return, a, t, gn), x1(a);
        } catch (u) {
          t = u, jt === a && a !== null ? (a = a.return, jt = a) : a = jt;
          continue;
        }
        return;
      } while (!0);
    }
    function C1() {
      var e = PS.current;
      return PS.current = om, e === null ? om : e;
    }
    function T1(e) {
      PS.current = e;
    }
    function db() {
      IS = xt();
    }
    function yp(e) {
      Cm = Ve(e, Cm);
    }
    function pb() {
      Sn === wl && (Sn = Em);
    }
    function t0() {
      (Sn === wl || Sn === Em || Sn === qo) && (Sn = sp), gr !== null && (Ro(Cm) || Ro(fp)) && Fu(gr, gn);
    }
    function vb(e) {
      Sn !== sp && (Sn = qo), dp === null ? dp = [e] : dp.push(e);
    }
    function hb() {
      return Sn === wl;
    }
    function _m(e, t) {
      var a = Ge;
      Ge |= jn;
      var i = C1();
      if (gr !== e || gn !== t) {
        if (vr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (gp(e, gn), u.clear()), ud(e, t);
        }
        Dl = bo(), Jo(e, t);
      }
      Tt(t);
      do
        try {
          mb();
          break;
        } catch (s) {
          E1(e, s);
        }
      while (!0);
      if (Fh(), Ge = a, T1(i), jt !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return js(), gr = null, gn = j, Sn;
    }
    function mb() {
      for (; jt !== null; )
        R1(jt);
    }
    function yb(e, t) {
      var a = Ge;
      Ge |= jn;
      var i = C1();
      if (gr !== e || gn !== t) {
        if (vr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (gp(e, gn), u.clear()), ud(e, t);
        }
        Dl = bo(), pp(), Jo(e, t);
      }
      Tt(t);
      do
        try {
          gb();
          break;
        } catch (s) {
          E1(e, s);
        }
      while (!0);
      return Fh(), T1(i), Ge = a, jt !== null ? (Vs(), wl) : (js(), gr = null, gn = j, Sn);
    }
    function gb() {
      for (; jt !== null && !Ms(); )
        R1(jt);
    }
    function R1(e) {
      var t = e.alternate;
      st(e);
      var a;
      (e.mode & Me) !== pe ? (aS(e), a = n0(t, e, Vi), pm(e, !0)) : a = n0(t, e, Vi), Xt(), e.memoizedProps = e.pendingProps, a === null ? x1(e) : jt = a, $S.current = null;
    }
    function x1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & fr) === Te) {
          st(t);
          var u = void 0;
          if ((t.mode & Me) === pe ? u = WC(a, t, Vi) : (aS(t), u = WC(a, t, Vi), pm(t, !1)), Xt(), u !== null) {
            jt = u;
            return;
          }
        } else {
          var s = pD(a, t);
          if (s !== null) {
            s.flags &= Cv, jt = s;
            return;
          }
          if ((t.mode & Me) !== pe) {
            pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= fr, i.subtreeFlags = Te, i.deletions = null;
          else {
            Sn = YS, jt = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          jt = v;
          return;
        }
        t = i, jt = t;
      } while (t !== null);
      Sn === wl && (Sn = f1);
    }
    function es(e, t, a) {
      var i = Vr(), u = Vn.transition;
      try {
        Vn.transition = null, Ot(Ft), Sb(e, t, a, i);
      } finally {
        Vn.transition = u, Ot(i);
      }
      return null;
    }
    function Sb(e, t, a, i) {
      do
        kl();
      while (Au !== null);
      if (Nb(), (Ge & (jn | ka)) !== yn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Ti(s), u === null)
        return As(), null;
      if (s === j && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = j, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Qt;
      var f = Ve(u.lanes, u.childLanes);
      lc(e, f), e === gr && (gr = null, jt = null, gn = j), ((u.subtreeFlags & Ur) !== Te || (u.flags & Ur) !== Te) && (Zo || (Zo = !0, XS = a, i0(ga, function() {
        return kl(), null;
      })));
      var p = (u.subtreeFlags & (Wl | Kn | xn | Ur)) !== Te, v = (u.flags & (Wl | Kn | xn | Ur)) !== Te;
      if (p || v) {
        var m = Vn.transition;
        Vn.transition = null;
        var S = Vr();
        Ot(Ft);
        var w = Ge;
        Ge |= ka, $S.current = null, gD(e, u), hC(), OD(e, u, s), LR(e.containerInfo), e.current = u, Zf(s), MD(u, e, s), Zl(), xv(), Ge = w, Ot(S), Vn.transition = m;
      } else
        e.current = u, hC();
      var R = Zo;
      if (Zo ? (Zo = !1, Au = e, vp = s) : (ef = 0, wm = null), f = e.pendingLanes, f === j && (Jc = null), R || k1(e.current, !1), Xl(u.stateNode, i), vr && e.memoizedUpdaters.clear(), ZD(), Gr(e, xt()), t !== null)
        for (var L = e.onRecoverableError, M = 0; M < t.length; M++) {
          var z = t[M], J = z.stack, Re = z.digest;
          L(z.value, {
            componentStack: J,
            digest: Re
          });
        }
      if (Rm) {
        Rm = !1;
        var me = WS;
        throw WS = null, me;
      }
      return tr(vp, Se) && e.tag !== Du && kl(), f = e.pendingLanes, tr(f, Se) ? (xw(), e === KS ? hp++ : (hp = 0, KS = e)) : hp = 0, bu(), As(), null;
    }
    function kl() {
      if (Au !== null) {
        var e = dn(vp), t = Ey(Sa, e), a = Vn.transition, i = Vr();
        try {
          return Vn.transition = null, Ot(t), Cb();
        } finally {
          Ot(i), Vn.transition = a;
        }
      }
      return !1;
    }
    function Eb(e) {
      GS.push(e), Zo || (Zo = !0, i0(ga, function() {
        return kl(), null;
      }));
    }
    function Cb() {
      if (Au === null)
        return !1;
      var e = XS;
      XS = null;
      var t = Au, a = vp;
      if (Au = null, vp = j, (Ge & (jn | ka)) !== yn)
        throw new Error("Cannot flush passive effects while already rendering.");
      qS = !0, xm = !1, Nv(a);
      var i = Ge;
      Ge |= ka, jD(t.current), AD(t, t.current, a, e);
      {
        var u = GS;
        GS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          TD(t, f);
        }
      }
      Jf(), k1(t.current, !0), Ge = i, bu(), xm ? t === wm ? ef++ : (ef = 0, wm = t) : ef = 0, qS = !1, xm = !1, Hr(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function w1(e) {
      return Jc !== null && Jc.has(e);
    }
    function Tb(e) {
      Jc === null ? Jc = /* @__PURE__ */ new Set([e]) : Jc.add(e);
    }
    function Rb(e) {
      Rm || (Rm = !0, WS = e);
    }
    var xb = Rb;
    function D1(e, t, a) {
      var i = Xo(a, t), u = RC(e, i, Se), s = _u(e, u, Se), f = Sr();
      s !== null && (fl(s, Se, f), Gr(s, f));
    }
    function St(e, t, a) {
      if (hD(a), Sp(!1), e.tag === W) {
        D1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === W) {
          D1(i, e, a);
          return;
        } else if (i.tag === V) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !w1(s)) {
            var f = Xo(a, e), p = TS(i, f, Se), v = _u(i, p, Se), m = Sr();
            v !== null && (fl(v, Se, m), Gr(v, m));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function wb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Sr();
      ic(e, a), Ub(e), gr === e && cl(gn, a) && (Sn === sp || Sn === Em && zv(gn) && xt() - IS < d1 ? Jo(e, j) : Tm = Ve(Tm, a)), Gr(e, u);
    }
    function b1(e, t) {
      t === Qt && (t = ib(e));
      var a = Sr(), i = Qr(e, t);
      i !== null && (fl(i, t, a), Gr(i, a));
    }
    function Db(e) {
      var t = e.memoizedState, a = Qt;
      t !== null && (a = t.retryLane), b1(e, a);
    }
    function bb(e, t) {
      var a = Qt, i;
      switch (e.tag) {
        case He:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case lt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), b1(e, a);
    }
    function kb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : tb(e / 1960) * 1960;
    }
    function _b() {
      if (hp > rb)
        throw hp = 0, KS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ef > ab && (ef = 0, wm = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Nb() {
      qa.flushLegacyContextWarning(), qa.flushPendingUnsafeLifecycleWarnings();
    }
    function k1(e, t) {
      st(e), Nm(e, Xn, XD), t && Nm(e, tl, KD), Nm(e, Xn, WD), t && Nm(e, tl, GD), Xt();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Te ? i = i.child : ((i.flags & t) !== Te && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Lm = null;
    function _1(e) {
      {
        if ((Ge & jn) !== yn || !(e.mode & he))
          return;
        var t = e.tag;
        if (t !== Ee && t !== W && t !== V && t !== $ && t !== ye && t !== dt && t !== Be)
          return;
        var a = Fe(e) || "ReactComponent";
        if (Lm !== null) {
          if (Lm.has(a))
            return;
          Lm.add(a);
        } else
          Lm = /* @__PURE__ */ new Set([a]);
        var i = Pt;
        try {
          st(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? st(e) : Xt();
        }
      }
    }
    var n0;
    {
      var Lb = null;
      n0 = function(e, t, a) {
        var i = H1(Lb, t);
        try {
          return PC(e, t, a);
        } catch (s) {
          if ($x() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Fh(), YE(), GC(e, t), H1(t, i), t.mode & Me && aS(t), el(null, PC, null, e, t, a), hy()) {
            var u = $f();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var N1 = !1, r0;
    r0 = /* @__PURE__ */ new Set();
    function Ob(e) {
      if (kr && !Cw())
        switch (e.tag) {
          case $:
          case ye:
          case Be: {
            var t = jt && Fe(jt) || "Unknown", a = t;
            if (!r0.has(a)) {
              r0.add(a);
              var i = Fe(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case V: {
            N1 || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), N1 = !0);
            break;
          }
        }
    }
    function gp(e, t) {
      if (vr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          uc(e, i, t);
        });
      }
    }
    var a0 = {};
    function i0(e, t) {
      {
        var a = ii.current;
        return a !== null ? (a.push(t), a0) : Os(e, t);
      }
    }
    function L1(e) {
      if (e !== a0)
        return Rv(e);
    }
    function O1() {
      return ii.current !== null;
    }
    function Mb(e) {
      {
        if (e.mode & he) {
          if (!s1())
            return;
        } else if (!eb() || Ge !== yn || e.tag !== $ && e.tag !== ye && e.tag !== Be)
          return;
        if (ii.current === null) {
          var t = Pt;
          try {
            st(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Fe(e));
          } finally {
            t ? st(e) : Xt();
          }
        }
      }
    }
    function Ub(e) {
      e.tag !== Du && s1() && ii.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Sp(e) {
      h1 = e;
    }
    var _a = null, tf = null, zb = function(e) {
      _a = e;
    };
    function nf(e) {
      {
        if (_a === null)
          return e;
        var t = _a(e);
        return t === void 0 ? e : t.current;
      }
    }
    function l0(e) {
      return nf(e);
    }
    function u0(e) {
      {
        if (_a === null)
          return e;
        var t = _a(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = nf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ml,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function M1(e, t) {
      {
        if (_a === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case V: {
            typeof i == "function" && (u = !0);
            break;
          }
          case $: {
            (typeof i == "function" || s === Ln) && (u = !0);
            break;
          }
          case ye: {
            (s === Ml || s === Ln) && (u = !0);
            break;
          }
          case dt:
          case Be: {
            (s === Ul || s === Ln) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = _a(a);
          if (f !== void 0 && f === _a(i))
            return !0;
        }
        return !1;
      }
    }
    function U1(e) {
      {
        if (_a === null || typeof WeakSet != "function")
          return;
        tf === null && (tf = /* @__PURE__ */ new WeakSet()), tf.add(e);
      }
    }
    var Ab = function(e, t) {
      {
        if (_a === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        kl(), bl(function() {
          o0(e.current, i, a);
        });
      }
    }, Hb = function(e, t) {
      {
        if (e.context !== sa)
          return;
        kl(), bl(function() {
          Ep(t, e, null, null);
        });
      }
    };
    function o0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case $:
          case Be:
          case V:
            v = p;
            break;
          case ye:
            v = p.render;
            break;
        }
        if (_a === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, S = !1;
        if (v !== null) {
          var w = _a(v);
          w !== void 0 && (a.has(w) ? S = !0 : t.has(w) && (f === V ? S = !0 : m = !0));
        }
        if (tf !== null && (tf.has(e) || i !== null && tf.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), S || m) {
          var R = Qr(e, Se);
          R !== null && En(R, e, Se, ht);
        }
        u !== null && !S && o0(u, t, a), s !== null && o0(s, t, a);
      }
    }
    var Fb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return s0(e.current, i, a), a;
      }
    };
    function s0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case $:
          case Be:
          case V:
            p = f;
            break;
          case ye:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Vb(e, a) : i !== null && s0(i, t, a), u !== null && s0(u, t, a);
      }
    }
    function Vb(e, t) {
      {
        var a = jb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case re:
              t.add(i.stateNode);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function jb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === re)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var c0;
    {
      c0 = !1;
      try {
        var z1 = Object.preventExtensions({});
      } catch {
        c0 = !0;
      }
    }
    function Bb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Te, this.subtreeFlags = Te, this.deletions = null, this.lanes = j, this.childLanes = j, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !c0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ca = function(e, t, a, i) {
      return new Bb(e, t, a, i);
    };
    function f0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pb(e) {
      return typeof e == "function" && !f0(e) && e.defaultProps === void 0;
    }
    function $b(e) {
      if (typeof e == "function")
        return f0(e) ? V : $;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ml)
          return ye;
        if (t === Ul)
          return dt;
      }
      return Ee;
    }
    function ts(e, t) {
      var a = e.alternate;
      a === null ? (a = ca(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Te, a.subtreeFlags = Te, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & cn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ee:
        case $:
        case Be:
          a.type = nf(e.type);
          break;
        case V:
          a.type = l0(e.type);
          break;
        case ye:
          a.type = u0(e.type);
          break;
      }
      return a;
    }
    function Yb(e, t) {
      e.flags &= cn | mt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = j, e.lanes = t, e.child = null, e.subtreeFlags = Te, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Te, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Qb(e, t, a) {
      var i;
      return e === kh ? (i = he, t === !0 && (i |= Pe, i |= hr)) : i = pe, vr && (i |= Me), ca(W, null, null, i);
    }
    function d0(e, t, a, i, u, s) {
      var f = Ee, p = e;
      if (typeof e == "function")
        f0(e) ? (f = V, p = l0(p)) : p = nf(p);
      else if (typeof e == "string")
        f = re;
      else
        e: switch (e) {
          case Oa:
            return Vu(a.children, u, s, t);
          case Ol:
            f = Ce, u |= Pe, (u & he) !== pe && (u |= hr);
            break;
          case $u:
            return Ib(a, u, s, t);
          case ha:
            return Wb(a, u, s, t);
          case Yu:
            return Gb(a, u, s, t);
          case ff:
            return A1(a, u, s, t);
          case Op:
          case Np:
          case Wm:
          case Gm:
          case Lp:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case sf:
                  f = Ue;
                  break e;
                case cf:
                  f = Je;
                  break e;
                case Ml:
                  f = ye, p = u0(p);
                  break e;
                case Ul:
                  f = dt;
                  break e;
                case Ln:
                  f = Wt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? Fe(i) : null;
              m && (v += `

Check the render method of \`` + m + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var S = ca(f, a, t, u);
      return S.elementType = e, S.type = p, S.lanes = s, S._debugOwner = i, S;
    }
    function p0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = d0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Vu(e, t, a, i) {
      var u = ca(ke, e, i, t);
      return u.lanes = a, u;
    }
    function Ib(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ca(Ne, e, i, t | Me);
      return u.elementType = $u, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Wb(e, t, a, i) {
      var u = ca(He, e, i, t);
      return u.elementType = ha, u.lanes = a, u;
    }
    function Gb(e, t, a, i) {
      var u = ca(lt, e, i, t);
      return u.elementType = Yu, u.lanes = a, u;
    }
    function A1(e, t, a, i) {
      var u = ca(We, e, i, t);
      u.elementType = ff, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function v0(e, t, a) {
      var i = ca(ge, e, null, t);
      return i.lanes = a, i;
    }
    function Xb() {
      var e = ca(re, null, null, pe);
      return e.elementType = "DELETED", e;
    }
    function Kb(e) {
      var t = ca(Et, null, null, pe);
      return t.stateNode = e, t;
    }
    function h0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ca(q, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function H1(e, t) {
      return e === null && (e = ca(Ee, null, null, pe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function qb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ky, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Qt, this.eventTimes = Do(j), this.expirationTimes = Do(ht), this.pendingLanes = j, this.suspendedLanes = j, this.pingedLanes = j, this.expiredLanes = j, this.mutableReadLanes = j, this.finishedLanes = j, this.entangledLanes = j, this.entanglements = Do(j), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Eo; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Du:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function F1(e, t, a, i, u, s, f, p, v, m) {
      var S = new qb(e, t, a, p, v), w = Qb(t, s);
      S.current = w, w.stateNode = S;
      {
        var R = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        w.memoizedState = R;
      }
      return kg(w), S;
    }
    var m0 = "18.3.1";
    function Zb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Nl(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ta,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var y0, g0;
    y0 = !1, g0 = {};
    function V1(e) {
      if (!e)
        return sa;
      var t = Lr(e), a = Ux(t);
      if (t.tag === V) {
        var i = t.type;
        if (Oi(i))
          return dE(t, i, a);
      }
      return a;
    }
    function Jb(e, t) {
      {
        var a = Lr(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = zr(a);
        if (u === null)
          return null;
        if (u.mode & Pe) {
          var s = Fe(a) || "Component";
          if (!g0[s]) {
            g0[s] = !0;
            var f = Pt;
            try {
              st(u), a.mode & Pe ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? st(f) : Xt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function j1(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return F1(e, t, v, m, a, i, u, s, f);
    }
    function B1(e, t, a, i, u, s, f, p, v, m) {
      var S = !0, w = F1(a, i, S, e, u, s, f, p, v);
      w.context = V1(null);
      var R = w.current, L = Sr(), M = Hu(R), z = Rl(L, M);
      return z.callback = t ?? null, _u(R, z, M), lb(w, M, L), w;
    }
    function Ep(e, t, a, i) {
      qf(t, e);
      var u = t.current, s = Sr(), f = Hu(u);
      ed(f);
      var p = V1(a);
      t.context === null ? t.context = p : t.pendingContext = p, kr && Pt !== null && !y0 && (y0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Fe(Pt) || "Unknown"));
      var v = Rl(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = _u(u, v, f);
      return m !== null && (En(m, u, f, s), $h(m, u, f)), f;
    }
    function Om(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case re:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ek(e) {
      switch (e.tag) {
        case W: {
          var t = e.stateNode;
          if (oc(t)) {
            var a = rd(t);
            cb(t, a);
          }
          break;
        }
        case He: {
          bl(function() {
            var u = Qr(e, Se);
            if (u !== null) {
              var s = Sr();
              En(u, e, Se, s);
            }
          });
          var i = Se;
          S0(e, i);
          break;
        }
      }
    }
    function P1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = jv(a.retryLane, t));
    }
    function S0(e, t) {
      P1(e, t);
      var a = e.alternate;
      a && P1(a, t);
    }
    function tk(e) {
      if (e.tag === He) {
        var t = To, a = Qr(e, t);
        if (a !== null) {
          var i = Sr();
          En(a, e, t, i);
        }
        S0(e, t);
      }
    }
    function nk(e) {
      if (e.tag === He) {
        var t = Hu(e), a = Qr(e, t);
        if (a !== null) {
          var i = Sr();
          En(a, e, t, i);
        }
        S0(e, t);
      }
    }
    function $1(e) {
      var t = Tv(e);
      return t === null ? null : t.stateNode;
    }
    var Y1 = function(e) {
      return null;
    };
    function rk(e) {
      return Y1(e);
    }
    var Q1 = function(e) {
      return !1;
    };
    function ak(e) {
      return Q1(e);
    }
    var I1 = null, W1 = null, G1 = null, X1 = null, K1 = null, q1 = null, Z1 = null, J1 = null, eT = null;
    {
      var tT = function(e, t, a) {
        var i = t[a], u = nn(e) ? e.slice() : Ye({}, e);
        return a + 1 === t.length ? (nn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = tT(e[i], t, a + 1), u);
      }, nT = function(e, t) {
        return tT(e, t, 0);
      }, rT = function(e, t, a, i) {
        var u = t[i], s = nn(e) ? e.slice() : Ye({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], nn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = rT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, aT = function(e, t, a) {
        if (t.length !== a.length) {
          I("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              I("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return rT(e, t, a, 0);
      }, iT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = nn(e) ? e.slice() : Ye({}, e);
        return s[u] = iT(e[u], t, a + 1, i), s;
      }, lT = function(e, t, a) {
        return iT(e, t, 0, a);
      }, E0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      I1 = function(e, t, a, i) {
        var u = E0(e, t);
        if (u !== null) {
          var s = lT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ye({}, e.memoizedProps);
          var f = Qr(e, Se);
          f !== null && En(f, e, Se, ht);
        }
      }, W1 = function(e, t, a) {
        var i = E0(e, t);
        if (i !== null) {
          var u = nT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ye({}, e.memoizedProps);
          var s = Qr(e, Se);
          s !== null && En(s, e, Se, ht);
        }
      }, G1 = function(e, t, a, i) {
        var u = E0(e, t);
        if (u !== null) {
          var s = aT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ye({}, e.memoizedProps);
          var f = Qr(e, Se);
          f !== null && En(f, e, Se, ht);
        }
      }, X1 = function(e, t, a) {
        e.pendingProps = lT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qr(e, Se);
        i !== null && En(i, e, Se, ht);
      }, K1 = function(e, t) {
        e.pendingProps = nT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Qr(e, Se);
        a !== null && En(a, e, Se, ht);
      }, q1 = function(e, t, a) {
        e.pendingProps = aT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Qr(e, Se);
        i !== null && En(i, e, Se, ht);
      }, Z1 = function(e) {
        var t = Qr(e, Se);
        t !== null && En(t, e, Se, ht);
      }, J1 = function(e) {
        Y1 = e;
      }, eT = function(e) {
        Q1 = e;
      };
    }
    function ik(e) {
      var t = zr(e);
      return t === null ? null : t.stateNode;
    }
    function lk(e) {
      return null;
    }
    function uk() {
      return Pt;
    }
    function ok(e) {
      var t = e.findFiberByHostInstance, a = C.ReactCurrentDispatcher;
      return Kf({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: I1,
        overrideHookStateDeletePath: W1,
        overrideHookStateRenamePath: G1,
        overrideProps: X1,
        overridePropsDeletePath: K1,
        overridePropsRenamePath: q1,
        setErrorHandler: J1,
        setSuspenseHandler: eT,
        scheduleUpdate: Z1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ik,
        findFiberByHostInstance: t || lk,
        // React Refresh
        findHostInstancesForRefresh: Fb,
        scheduleRefresh: Ab,
        scheduleRoot: Hb,
        setRefreshHandler: zb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: uk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: m0
      });
    }
    var uT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function C0(e) {
      this._internalRoot = e;
    }
    Mm.prototype.render = C0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== $t) {
          var i = $1(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ep(e, t, null, null);
    }, Mm.prototype.unmount = C0.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        S1() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), bl(function() {
          Ep(null, e, null, null);
        }), uE(t);
      }
    };
    function sk(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      oT(e);
      var a = !1, i = !1, u = "", s = uT;
      t != null && (t.hydrate ? I("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ll && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = j1(e, kh, null, a, i, u, s);
      Ch(f.current, e);
      var p = e.nodeType === $t ? e.parentNode : e;
      return Dd(p), new C0(f);
    }
    function Mm(e) {
      this._internalRoot = e;
    }
    function ck(e) {
      e && Ry(e);
    }
    Mm.prototype.unstable_scheduleHydration = ck;
    function fk(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      oT(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = uT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = B1(t, null, e, kh, i, s, f, p, v);
      if (Ch(m.current, e), Dd(e), u)
        for (var S = 0; S < u.length; S++) {
          var w = u[S];
          hw(m, w);
        }
      return new Mm(m);
    }
    function Um(e) {
      return !!(e && (e.nodeType === In || e.nodeType === ia || e.nodeType === Gi || !ot));
    }
    function Cp(e) {
      return !!(e && (e.nodeType === In || e.nodeType === ia || e.nodeType === Gi || e.nodeType === $t && e.nodeValue === " react-mount-point-unstable "));
    }
    function oT(e) {
      e.nodeType === In && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Hd(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var dk = C.ReactCurrentOwner, sT;
    sT = function(e) {
      if (e._reactRootContainer && e.nodeType !== $t) {
        var t = $1(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = T0(e), u = !!(i && xu(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === In && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function T0(e) {
      return e ? e.nodeType === ia ? e.documentElement : e.firstChild : null;
    }
    function cT() {
    }
    function pk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var R = Om(f);
            s.call(R);
          };
        }
        var f = B1(
          t,
          i,
          e,
          Du,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          cT
        );
        e._reactRootContainer = f, Ch(f.current, e);
        var p = e.nodeType === $t ? e.parentNode : e;
        return Dd(p), bl(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var R = Om(S);
            m.call(R);
          };
        }
        var S = j1(
          e,
          Du,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          cT
        );
        e._reactRootContainer = S, Ch(S.current, e);
        var w = e.nodeType === $t ? e.parentNode : e;
        return Dd(w), bl(function() {
          Ep(t, S, a, i);
        }), S;
      }
    }
    function vk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function zm(e, t, a, i, u) {
      sT(a), vk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = pk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Om(f);
            p.call(v);
          };
        }
        Ep(t, f, e, u);
      }
      return Om(f);
    }
    var fT = !1;
    function hk(e) {
      {
        fT || (fT = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = dk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", it(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === In ? e : Jb(e, "findDOMNode");
    }
    function mk(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Cp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return zm(null, e, t, !0, a);
    }
    function yk(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Cp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Hd(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return zm(null, e, t, !1, a);
    }
    function gk(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Cp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !po(e))
        throw new Error("parentComponent must be a valid React Component");
      return zm(e, t, a, !1, i);
    }
    var dT = !1;
    function Sk(e) {
      if (dT || (dT = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Cp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Hd(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = T0(e), i = a && !xu(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return bl(function() {
          zm(null, null, e, !1, function() {
            e._reactRootContainer = null, uE(e);
          });
        }), !0;
      } else {
        {
          var u = T0(e), s = !!(u && xu(u)), f = e.nodeType === In && Cp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    cu(ek), Cy(tk), cc(nk), $v(Vr), Yv(bn), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Sv(CR), bs(JS, fb, bl);
    function Ek(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return Zb(e, t, null, a);
    }
    function Ck(e, t, a, i) {
      return gk(e, t, a, i);
    }
    var R0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xu, Mc, Th, Ds, so, JS]
    };
    function Tk(e, t) {
      return R0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), sk(e, t);
    }
    function Rk(e, t, a) {
      return R0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), fk(e, t, a);
    }
    function xk(e) {
      return S1() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), bl(e);
    }
    var wk = ok({
      findFiberByHostInstance: jo,
      bundleType: 1,
      version: m0,
      rendererPackageName: "react-dom"
    });
    if (!wk && Cn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var pT = window.location.protocol;
      /^(https?|file):$/.test(pT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (pT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0, Kr.createPortal = Ek, Kr.createRoot = Tk, Kr.findDOMNode = hk, Kr.flushSync = xk, Kr.hydrate = mk, Kr.hydrateRoot = Rk, Kr.render = yk, Kr.unmountComponentAtNode = Sk, Kr.unstable_batchedUpdates = JS, Kr.unstable_renderSubtreeIntoContainer = Ck, Kr.version = m0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Kr;
}
function bT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bT);
    } catch (g) {
      console.error(g);
    }
  }
}
process.env.NODE_ENV === "production" ? (bT(), Nk()) : Lk();
/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rp() {
  return Rp = Object.assign ? Object.assign.bind() : function(g) {
    for (var b = 1; b < arguments.length; b++) {
      var C = arguments[b];
      for (var F in C)
        Object.prototype.hasOwnProperty.call(C, F) && (g[F] = C[F]);
    }
    return g;
  }, Rp.apply(this, arguments);
}
var ns;
(function(g) {
  g.Pop = "POP", g.Push = "PUSH", g.Replace = "REPLACE";
})(ns || (ns = {}));
const ET = "popstate";
function Ok(g) {
  g === void 0 && (g = {});
  function b(F, U) {
    let {
      pathname: I,
      search: y,
      hash: ne
    } = F.location;
    return k0(
      "",
      {
        pathname: I,
        search: y,
        hash: ne
      },
      // state defaults to `null` because `window.history.state` does
      U.state && U.state.usr || null,
      U.state && U.state.key || "default"
    );
  }
  function C(F, U) {
    return typeof U == "string" ? U : xp(U);
  }
  return Uk(b, C, null, g);
}
function zt(g, b) {
  if (g === !1 || g === null || typeof g > "u")
    throw new Error(b);
}
function lf(g, b) {
  if (!g) {
    typeof console < "u" && console.warn(b);
    try {
      throw new Error(b);
    } catch {
    }
  }
}
function Mk() {
  return Math.random().toString(36).substr(2, 8);
}
function CT(g, b) {
  return {
    usr: g.state,
    key: g.key,
    idx: b
  };
}
function k0(g, b, C, F) {
  return C === void 0 && (C = null), Rp({
    pathname: typeof g == "string" ? g : g.pathname,
    search: "",
    hash: ""
  }, typeof b == "string" ? Pm(b) : b, {
    state: C,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: b && b.key || F || Mk()
  });
}
function xp(g) {
  let {
    pathname: b = "/",
    search: C = "",
    hash: F = ""
  } = g;
  return C && C !== "?" && (b += C.charAt(0) === "?" ? C : "?" + C), F && F !== "#" && (b += F.charAt(0) === "#" ? F : "#" + F), b;
}
function Pm(g) {
  let b = {};
  if (g) {
    let C = g.indexOf("#");
    C >= 0 && (b.hash = g.substr(C), g = g.substr(0, C));
    let F = g.indexOf("?");
    F >= 0 && (b.search = g.substr(F), g = g.substr(0, F)), g && (b.pathname = g);
  }
  return b;
}
function Uk(g, b, C, F) {
  F === void 0 && (F = {});
  let {
    window: U = document.defaultView,
    v5Compat: I = !1
  } = F, y = U.history, ne = ns.Pop, $ = null, V = Ee();
  V == null && (V = 0, y.replaceState(Rp({}, y.state, {
    idx: V
  }), ""));
  function Ee() {
    return (y.state || {
      idx: null
    }).idx;
  }
  function W() {
    ne = ns.Pop;
    let Ce = Ee(), Je = Ce == null ? null : Ce - V;
    V = Ce, $ && $({
      action: ne,
      location: ke.location,
      delta: Je
    });
  }
  function q(Ce, Je) {
    ne = ns.Push;
    let Ue = k0(ke.location, Ce, Je);
    V = Ee() + 1;
    let ye = CT(Ue, V), Ne = ke.createHref(Ue);
    try {
      y.pushState(ye, "", Ne);
    } catch (He) {
      if (He instanceof DOMException && He.name === "DataCloneError")
        throw He;
      U.location.assign(Ne);
    }
    I && $ && $({
      action: ne,
      location: ke.location,
      delta: 1
    });
  }
  function re(Ce, Je) {
    ne = ns.Replace;
    let Ue = k0(ke.location, Ce, Je);
    V = Ee();
    let ye = CT(Ue, V), Ne = ke.createHref(Ue);
    y.replaceState(ye, "", Ne), I && $ && $({
      action: ne,
      location: ke.location,
      delta: 0
    });
  }
  function ge(Ce) {
    let Je = U.location.origin !== "null" ? U.location.origin : U.location.href, Ue = typeof Ce == "string" ? Ce : xp(Ce);
    return Ue = Ue.replace(/ $/, "%20"), zt(Je, "No window.location.(origin|href) available to create URL for href: " + Ue), new URL(Ue, Je);
  }
  let ke = {
    get action() {
      return ne;
    },
    get location() {
      return g(U, y);
    },
    listen(Ce) {
      if ($)
        throw new Error("A history only accepts one active listener");
      return U.addEventListener(ET, W), $ = Ce, () => {
        U.removeEventListener(ET, W), $ = null;
      };
    },
    createHref(Ce) {
      return b(U, Ce);
    },
    createURL: ge,
    encodeLocation(Ce) {
      let Je = ge(Ce);
      return {
        pathname: Je.pathname,
        search: Je.search,
        hash: Je.hash
      };
    },
    push: q,
    replace: re,
    go(Ce) {
      return y.go(Ce);
    }
  };
  return ke;
}
var TT;
(function(g) {
  g.data = "data", g.deferred = "deferred", g.redirect = "redirect", g.error = "error";
})(TT || (TT = {}));
function RT(g, b) {
  typeof g == "string" && (g = {
    path: g,
    caseSensitive: !1,
    end: !0
  });
  let [C, F] = zk(g.path, g.caseSensitive, g.end), U = b.match(C);
  if (!U) return null;
  let I = U[0], y = I.replace(/(.)\/+$/, "$1"), ne = U.slice(1);
  return {
    params: F.reduce((V, Ee, W) => {
      let {
        paramName: q,
        isOptional: re
      } = Ee;
      if (q === "*") {
        let ke = ne[W] || "";
        y = I.slice(0, I.length - ke.length).replace(/(.)\/+$/, "$1");
      }
      const ge = ne[W];
      return re && !ge ? V[q] = void 0 : V[q] = (ge || "").replace(/%2F/g, "/"), V;
    }, {}),
    pathname: I,
    pathnameBase: y,
    pattern: g
  };
}
function zk(g, b, C) {
  b === void 0 && (b = !1), C === void 0 && (C = !0), lf(g === "*" || !g.endsWith("*") || g.endsWith("/*"), 'Route path "' + g + '" will be treated as if it were ' + ('"' + g.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + g.replace(/\*$/, "/*") + '".'));
  let F = [], U = "^" + g.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (y, ne, $) => (F.push({
    paramName: ne,
    isOptional: $ != null
  }), $ ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return g.endsWith("*") ? (F.push({
    paramName: "*"
  }), U += g === "*" || g === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : C ? U += "\\/*$" : g !== "" && g !== "/" && (U += "(?:(?=\\/|$))"), [new RegExp(U, b ? void 0 : "i"), F];
}
function rs(g, b) {
  if (b === "/") return g;
  if (!g.toLowerCase().startsWith(b.toLowerCase()))
    return null;
  let C = b.endsWith("/") ? b.length - 1 : b.length, F = g.charAt(C);
  return F && F !== "/" ? null : g.slice(C) || "/";
}
function Ak(g, b) {
  b === void 0 && (b = "/");
  let {
    pathname: C,
    search: F = "",
    hash: U = ""
  } = typeof g == "string" ? Pm(g) : g;
  return {
    pathname: C ? C.startsWith("/") ? C : Hk(C, b) : b,
    search: Vk(F),
    hash: jk(U)
  };
}
function Hk(g, b) {
  let C = b.replace(/\/+$/, "").split("/");
  return g.split("/").forEach((U) => {
    U === ".." ? C.length > 1 && C.pop() : U !== "." && C.push(U);
  }), C.length > 1 ? C.join("/") : "/";
}
function D0(g, b, C, F) {
  return "Cannot include a '" + g + "' character in a manually specified " + ("`to." + b + "` field [" + JSON.stringify(F) + "].  Please separate it out to the ") + ("`to." + C + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Fk(g) {
  return g.filter((b, C) => C === 0 || b.route.path && b.route.path.length > 0);
}
function kT(g, b) {
  let C = Fk(g);
  return b ? C.map((F, U) => U === g.length - 1 ? F.pathname : F.pathnameBase) : C.map((F) => F.pathnameBase);
}
function _T(g, b, C, F) {
  F === void 0 && (F = !1);
  let U;
  typeof g == "string" ? U = Pm(g) : (U = Rp({}, g), zt(!U.pathname || !U.pathname.includes("?"), D0("?", "pathname", "search", U)), zt(!U.pathname || !U.pathname.includes("#"), D0("#", "pathname", "hash", U)), zt(!U.search || !U.search.includes("#"), D0("#", "search", "hash", U)));
  let I = g === "" || U.pathname === "", y = I ? "/" : U.pathname, ne;
  if (y == null)
    ne = C;
  else {
    let W = b.length - 1;
    if (!F && y.startsWith("..")) {
      let q = y.split("/");
      for (; q[0] === ".."; )
        q.shift(), W -= 1;
      U.pathname = q.join("/");
    }
    ne = W >= 0 ? b[W] : "/";
  }
  let $ = Ak(U, ne), V = y && y !== "/" && y.endsWith("/"), Ee = (I || y === ".") && C.endsWith("/");
  return !$.pathname.endsWith("/") && (V || Ee) && ($.pathname += "/"), $;
}
const N0 = (g) => g.join("/").replace(/\/\/+/g, "/"), Vk = (g) => !g || g === "?" ? "" : g.startsWith("?") ? g : "?" + g, jk = (g) => !g || g === "#" ? "" : g.startsWith("#") ? g : "#" + g, NT = ["post", "put", "patch", "delete"];
new Set(NT);
const Bk = ["get", ...NT];
new Set(Bk);
/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function jm() {
  return jm = Object.assign ? Object.assign.bind() : function(g) {
    for (var b = 1; b < arguments.length; b++) {
      var C = arguments[b];
      for (var F in C)
        Object.prototype.hasOwnProperty.call(C, F) && (g[F] = C[F]);
    }
    return g;
  }, jm.apply(this, arguments);
}
const $m = /* @__PURE__ */ be.createContext(null);
process.env.NODE_ENV !== "production" && ($m.displayName = "DataRouter");
const LT = /* @__PURE__ */ be.createContext(null);
process.env.NODE_ENV !== "production" && (LT.displayName = "DataRouterState");
const Pk = /* @__PURE__ */ be.createContext(null);
process.env.NODE_ENV !== "production" && (Pk.displayName = "Await");
const Bi = /* @__PURE__ */ be.createContext(null);
process.env.NODE_ENV !== "production" && (Bi.displayName = "Navigation");
const Ym = /* @__PURE__ */ be.createContext(null);
process.env.NODE_ENV !== "production" && (Ym.displayName = "Location");
const uf = /* @__PURE__ */ be.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (uf.displayName = "Route");
const $k = /* @__PURE__ */ be.createContext(null);
process.env.NODE_ENV !== "production" && ($k.displayName = "RouteError");
function Yk(g, b) {
  let {
    relative: C
  } = b === void 0 ? {} : b;
  Qm() || (process.env.NODE_ENV !== "production" ? zt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : zt(!1));
  let {
    basename: F,
    navigator: U
  } = be.useContext(Bi), {
    hash: I,
    pathname: y,
    search: ne
  } = Dp(g, {
    relative: C
  }), $ = y;
  return F !== "/" && ($ = y === "/" ? F : N0([F, y])), U.createHref({
    pathname: $,
    search: ne,
    hash: I
  });
}
function Qm() {
  return be.useContext(Ym) != null;
}
function wp() {
  return Qm() || (process.env.NODE_ENV !== "production" ? zt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : zt(!1)), be.useContext(Ym).location;
}
const OT = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function MT(g) {
  be.useContext(Bi).static || be.useLayoutEffect(g);
}
function Qk() {
  let {
    isDataRoute: g
  } = be.useContext(uf);
  return g ? Kk() : Ik();
}
function Ik() {
  Qm() || (process.env.NODE_ENV !== "production" ? zt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : zt(!1));
  let g = be.useContext($m), {
    basename: b,
    future: C,
    navigator: F
  } = be.useContext(Bi), {
    matches: U
  } = be.useContext(uf), {
    pathname: I
  } = wp(), y = JSON.stringify(kT(U, C.v7_relativeSplatPath)), ne = be.useRef(!1);
  return MT(() => {
    ne.current = !0;
  }), be.useCallback(function(V, Ee) {
    if (Ee === void 0 && (Ee = {}), process.env.NODE_ENV !== "production" && lf(ne.current, OT), !ne.current) return;
    if (typeof V == "number") {
      F.go(V);
      return;
    }
    let W = _T(V, JSON.parse(y), I, Ee.relative === "path");
    g == null && b !== "/" && (W.pathname = W.pathname === "/" ? b : N0([b, W.pathname])), (Ee.replace ? F.replace : F.push)(W, Ee.state, Ee);
  }, [b, F, y, I, g]);
}
function Dp(g, b) {
  let {
    relative: C
  } = b === void 0 ? {} : b, {
    future: F
  } = be.useContext(Bi), {
    matches: U
  } = be.useContext(uf), {
    pathname: I
  } = wp(), y = JSON.stringify(kT(U, F.v7_relativeSplatPath));
  return be.useMemo(() => _T(g, JSON.parse(y), I, C === "path"), [g, y, I, C]);
}
var UT = /* @__PURE__ */ function(g) {
  return g.UseBlocker = "useBlocker", g.UseRevalidator = "useRevalidator", g.UseNavigateStable = "useNavigate", g;
}(UT || {}), L0 = /* @__PURE__ */ function(g) {
  return g.UseBlocker = "useBlocker", g.UseLoaderData = "useLoaderData", g.UseActionData = "useActionData", g.UseRouteError = "useRouteError", g.UseNavigation = "useNavigation", g.UseRouteLoaderData = "useRouteLoaderData", g.UseMatches = "useMatches", g.UseRevalidator = "useRevalidator", g.UseNavigateStable = "useNavigate", g.UseRouteId = "useRouteId", g;
}(L0 || {});
function zT(g) {
  return g + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Wk(g) {
  let b = be.useContext($m);
  return b || (process.env.NODE_ENV !== "production" ? zt(!1, zT(g)) : zt(!1)), b;
}
function Gk(g) {
  let b = be.useContext(uf);
  return b || (process.env.NODE_ENV !== "production" ? zt(!1, zT(g)) : zt(!1)), b;
}
function AT(g) {
  let b = Gk(g), C = b.matches[b.matches.length - 1];
  return C.route.id || (process.env.NODE_ENV !== "production" ? zt(!1, g + ' can only be used on routes that contain a unique "id"') : zt(!1)), C.route.id;
}
function Xk() {
  return AT(L0.UseRouteId);
}
function Kk() {
  let {
    router: g
  } = Wk(UT.UseNavigateStable), b = AT(L0.UseNavigateStable), C = be.useRef(!1);
  return MT(() => {
    C.current = !0;
  }), be.useCallback(function(U, I) {
    I === void 0 && (I = {}), process.env.NODE_ENV !== "production" && lf(C.current, OT), C.current && (typeof U == "number" ? g.navigate(U) : g.navigate(U, jm({
      fromRouteId: b
    }, I)));
  }, [g, b]);
}
function qk(g) {
  let {
    basename: b = "/",
    children: C = null,
    location: F,
    navigationType: U = ns.Pop,
    navigator: I,
    static: y = !1,
    future: ne
  } = g;
  Qm() && (process.env.NODE_ENV !== "production" ? zt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : zt(!1));
  let $ = b.replace(/^\/*/, "/"), V = be.useMemo(() => ({
    basename: $,
    navigator: I,
    static: y,
    future: jm({
      v7_relativeSplatPath: !1
    }, ne)
  }), [$, ne, I, y]);
  typeof F == "string" && (F = Pm(F));
  let {
    pathname: Ee = "/",
    search: W = "",
    hash: q = "",
    state: re = null,
    key: ge = "default"
  } = F, ke = be.useMemo(() => {
    let Ce = rs(Ee, $);
    return Ce == null ? null : {
      location: {
        pathname: Ce,
        search: W,
        hash: q,
        state: re,
        key: ge
      },
      navigationType: U
    };
  }, [$, Ee, W, q, re, ge, U]);
  return process.env.NODE_ENV !== "production" && lf(ke != null, '<Router basename="' + $ + '"> is not able to match the URL ' + ('"' + Ee + W + q + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), ke == null ? null : /* @__PURE__ */ be.createElement(Bi.Provider, {
    value: V
  }, /* @__PURE__ */ be.createElement(Ym.Provider, {
    children: C,
    value: ke
  }));
}
new Promise(() => {
});
/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function af() {
  return af = Object.assign ? Object.assign.bind() : function(g) {
    for (var b = 1; b < arguments.length; b++) {
      var C = arguments[b];
      for (var F in C)
        Object.prototype.hasOwnProperty.call(C, F) && (g[F] = C[F]);
    }
    return g;
  }, af.apply(this, arguments);
}
function O0(g, b) {
  if (g == null) return {};
  var C = {}, F = Object.keys(g), U, I;
  for (I = 0; I < F.length; I++)
    U = F[I], !(b.indexOf(U) >= 0) && (C[U] = g[U]);
  return C;
}
const Fm = "get", Vm = "application/x-www-form-urlencoded";
function Im(g) {
  return g != null && typeof g.tagName == "string";
}
function Zk(g) {
  return Im(g) && g.tagName.toLowerCase() === "button";
}
function Jk(g) {
  return Im(g) && g.tagName.toLowerCase() === "form";
}
function e_(g) {
  return Im(g) && g.tagName.toLowerCase() === "input";
}
function t_(g) {
  return !!(g.metaKey || g.altKey || g.ctrlKey || g.shiftKey);
}
function n_(g, b) {
  return g.button === 0 && // Ignore everything but left clicks
  (!b || b === "_self") && // Let browser handle "target=_blank" etc.
  !t_(g);
}
let Hm = null;
function r_() {
  if (Hm === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Hm = !1;
    } catch {
      Hm = !0;
    }
  return Hm;
}
const a_ = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function b0(g) {
  return g != null && !a_.has(g) ? (process.env.NODE_ENV !== "production" && lf(!1, '"' + g + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Vm + '"')), null) : g;
}
function i_(g, b) {
  let C, F, U, I, y;
  if (Jk(g)) {
    let ne = g.getAttribute("action");
    F = ne ? rs(ne, b) : null, C = g.getAttribute("method") || Fm, U = b0(g.getAttribute("enctype")) || Vm, I = new FormData(g);
  } else if (Zk(g) || e_(g) && (g.type === "submit" || g.type === "image")) {
    let ne = g.form;
    if (ne == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let $ = g.getAttribute("formaction") || ne.getAttribute("action");
    if (F = $ ? rs($, b) : null, C = g.getAttribute("formmethod") || ne.getAttribute("method") || Fm, U = b0(g.getAttribute("formenctype")) || b0(ne.getAttribute("enctype")) || Vm, I = new FormData(ne, g), !r_()) {
      let {
        name: V,
        type: Ee,
        value: W
      } = g;
      if (Ee === "image") {
        let q = V ? V + "." : "";
        I.append(q + "x", "0"), I.append(q + "y", "0");
      } else V && I.append(V, W);
    }
  } else {
    if (Im(g))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    C = Fm, F = null, U = Vm, y = g;
  }
  return I && U === "text/plain" && (y = I, I = void 0), {
    action: F,
    method: C.toLowerCase(),
    encType: U,
    formData: I,
    body: y
  };
}
const l_ = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], u_ = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], o_ = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], s_ = "6";
try {
  window.__reactRouterVersion = s_;
} catch {
}
const HT = /* @__PURE__ */ be.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (HT.displayName = "ViewTransition");
const c_ = /* @__PURE__ */ be.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (c_.displayName = "Fetchers");
const f_ = "startTransition", xT = be[f_];
function d_(g) {
  let {
    basename: b,
    children: C,
    future: F,
    window: U
  } = g, I = be.useRef();
  I.current == null && (I.current = Ok({
    window: U,
    v5Compat: !0
  }));
  let y = I.current, [ne, $] = be.useState({
    action: y.action,
    location: y.location
  }), {
    v7_startTransition: V
  } = F || {}, Ee = be.useCallback((W) => {
    V && xT ? xT(() => $(W)) : $(W);
  }, [$, V]);
  return be.useLayoutEffect(() => y.listen(Ee), [y, Ee]), /* @__PURE__ */ be.createElement(qk, {
    basename: b,
    children: C,
    location: ne.location,
    navigationType: ne.action,
    navigator: y,
    future: F
  });
}
process.env.NODE_ENV;
const p_ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, FT = /* @__PURE__ */ be.forwardRef(function(b, C) {
  let {
    onClick: F,
    relative: U,
    reloadDocument: I,
    replace: y,
    state: ne,
    target: $,
    to: V,
    preventScrollReset: Ee,
    unstable_viewTransition: W
  } = b, q = O0(b, l_), {
    basename: re
  } = be.useContext(Bi), ge, ke = !1;
  if (typeof V == "string" && v_.test(V) && (ge = V, p_))
    try {
      let ye = new URL(window.location.href), Ne = V.startsWith("//") ? new URL(ye.protocol + V) : new URL(V), He = rs(Ne.pathname, re);
      Ne.origin === ye.origin && He != null ? V = He + Ne.search + Ne.hash : ke = !0;
    } catch {
      process.env.NODE_ENV !== "production" && lf(!1, '<Link to="' + V + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let Ce = Yk(V, {
    relative: U
  }), Je = g_(V, {
    replace: y,
    state: ne,
    target: $,
    preventScrollReset: Ee,
    relative: U,
    unstable_viewTransition: W
  });
  function Ue(ye) {
    F && F(ye), ye.defaultPrevented || Je(ye);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ be.createElement("a", af({}, q, {
      href: ge || Ce,
      onClick: ke || I ? F : Ue,
      ref: C,
      target: $
    }))
  );
});
process.env.NODE_ENV !== "production" && (FT.displayName = "Link");
const h_ = /* @__PURE__ */ be.forwardRef(function(b, C) {
  let {
    "aria-current": F = "page",
    caseSensitive: U = !1,
    className: I = "",
    end: y = !1,
    style: ne,
    to: $,
    unstable_viewTransition: V,
    children: Ee
  } = b, W = O0(b, u_), q = Dp($, {
    relative: W.relative
  }), re = wp(), ge = be.useContext(LT), {
    navigator: ke,
    basename: Ce
  } = be.useContext(Bi), Je = ge != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  x_(q) && V === !0, Ue = ke.encodeLocation ? ke.encodeLocation(q).pathname : q.pathname, ye = re.pathname, Ne = ge && ge.navigation && ge.navigation.location ? ge.navigation.location.pathname : null;
  U || (ye = ye.toLowerCase(), Ne = Ne ? Ne.toLowerCase() : null, Ue = Ue.toLowerCase()), Ne && Ce && (Ne = rs(Ne, Ce) || Ne);
  const He = Ue !== "/" && Ue.endsWith("/") ? Ue.length - 1 : Ue.length;
  let dt = ye === Ue || !y && ye.startsWith(Ue) && ye.charAt(He) === "/", Be = Ne != null && (Ne === Ue || !y && Ne.startsWith(Ue) && Ne.charAt(Ue.length) === "/"), Wt = {
    isActive: dt,
    isPending: Be,
    isTransitioning: Je
  }, _n = dt ? F : void 0, Et;
  typeof I == "function" ? Et = I(Wt) : Et = [I, dt ? "active" : null, Be ? "pending" : null, Je ? "transitioning" : null].filter(Boolean).join(" ");
  let lt = typeof ne == "function" ? ne(Wt) : ne;
  return /* @__PURE__ */ be.createElement(FT, af({}, W, {
    "aria-current": _n,
    className: Et,
    ref: C,
    style: lt,
    to: $,
    unstable_viewTransition: V
  }), typeof Ee == "function" ? Ee(Wt) : Ee);
});
process.env.NODE_ENV !== "production" && (h_.displayName = "NavLink");
const m_ = /* @__PURE__ */ be.forwardRef((g, b) => {
  let {
    fetcherKey: C,
    navigate: F,
    reloadDocument: U,
    replace: I,
    state: y,
    method: ne = Fm,
    action: $,
    onSubmit: V,
    relative: Ee,
    preventScrollReset: W,
    unstable_viewTransition: q
  } = g, re = O0(g, o_), ge = T_(), ke = R_($, {
    relative: Ee
  }), Ce = ne.toLowerCase() === "get" ? "get" : "post", Je = (Ue) => {
    if (V && V(Ue), Ue.defaultPrevented) return;
    Ue.preventDefault();
    let ye = Ue.nativeEvent.submitter, Ne = (ye == null ? void 0 : ye.getAttribute("formmethod")) || ne;
    ge(ye || Ue.currentTarget, {
      fetcherKey: C,
      method: Ne,
      navigate: F,
      replace: I,
      state: y,
      relative: Ee,
      preventScrollReset: W,
      unstable_viewTransition: q
    });
  };
  return /* @__PURE__ */ be.createElement("form", af({
    ref: b,
    method: Ce,
    action: ke,
    onSubmit: U ? V : Je
  }, re));
});
process.env.NODE_ENV !== "production" && (m_.displayName = "Form");
process.env.NODE_ENV;
var Bm;
(function(g) {
  g.UseScrollRestoration = "useScrollRestoration", g.UseSubmit = "useSubmit", g.UseSubmitFetcher = "useSubmitFetcher", g.UseFetcher = "useFetcher", g.useViewTransitionState = "useViewTransitionState";
})(Bm || (Bm = {}));
var wT;
(function(g) {
  g.UseFetcher = "useFetcher", g.UseFetchers = "useFetchers", g.UseScrollRestoration = "useScrollRestoration";
})(wT || (wT = {}));
function y_(g) {
  return g + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function VT(g) {
  let b = be.useContext($m);
  return b || (process.env.NODE_ENV !== "production" ? zt(!1, y_(g)) : zt(!1)), b;
}
function g_(g, b) {
  let {
    target: C,
    replace: F,
    state: U,
    preventScrollReset: I,
    relative: y,
    unstable_viewTransition: ne
  } = b === void 0 ? {} : b, $ = Qk(), V = wp(), Ee = Dp(g, {
    relative: y
  });
  return be.useCallback((W) => {
    if (n_(W, C)) {
      W.preventDefault();
      let q = F !== void 0 ? F : xp(V) === xp(Ee);
      $(g, {
        replace: q,
        state: U,
        preventScrollReset: I,
        relative: y,
        unstable_viewTransition: ne
      });
    }
  }, [V, $, Ee, F, U, C, g, I, y, ne]);
}
function S_() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let E_ = 0, C_ = () => "__" + String(++E_) + "__";
function T_() {
  let {
    router: g
  } = VT(Bm.UseSubmit), {
    basename: b
  } = be.useContext(Bi), C = Xk();
  return be.useCallback(function(F, U) {
    U === void 0 && (U = {}), S_();
    let {
      action: I,
      method: y,
      encType: ne,
      formData: $,
      body: V
    } = i_(F, b);
    if (U.navigate === !1) {
      let Ee = U.fetcherKey || C_();
      g.fetch(Ee, C, U.action || I, {
        preventScrollReset: U.preventScrollReset,
        formData: $,
        body: V,
        formMethod: U.method || y,
        formEncType: U.encType || ne,
        unstable_flushSync: U.unstable_flushSync
      });
    } else
      g.navigate(U.action || I, {
        preventScrollReset: U.preventScrollReset,
        formData: $,
        body: V,
        formMethod: U.method || y,
        formEncType: U.encType || ne,
        replace: U.replace,
        state: U.state,
        fromRouteId: C,
        unstable_flushSync: U.unstable_flushSync,
        unstable_viewTransition: U.unstable_viewTransition
      });
  }, [g, b, C]);
}
function R_(g, b) {
  let {
    relative: C
  } = b === void 0 ? {} : b, {
    basename: F
  } = be.useContext(Bi), U = be.useContext(uf);
  U || (process.env.NODE_ENV !== "production" ? zt(!1, "useFormAction must be used inside a RouteContext") : zt(!1));
  let [I] = U.matches.slice(-1), y = af({}, Dp(g || ".", {
    relative: C
  })), ne = wp();
  if (g == null) {
    y.search = ne.search;
    let $ = new URLSearchParams(y.search);
    $.has("index") && $.get("index") === "" && ($.delete("index"), y.search = $.toString() ? "?" + $.toString() : "");
  }
  return (!g || g === ".") && I.route.index && (y.search = y.search ? y.search.replace(/^\?/, "?index&") : "?index"), F !== "/" && (y.pathname = y.pathname === "/" ? F : N0([F, y.pathname])), xp(y);
}
function x_(g, b) {
  b === void 0 && (b = {});
  let C = be.useContext(HT);
  C == null && (process.env.NODE_ENV !== "production" ? zt(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : zt(!1));
  let {
    basename: F
  } = VT(Bm.useViewTransitionState), U = Dp(g, {
    relative: b.relative
  });
  if (!C.isTransitioning)
    return !1;
  let I = rs(C.currentLocation.pathname, F) || C.currentLocation.pathname, y = rs(C.nextLocation.pathname, F) || C.nextLocation.pathname;
  return RT(U.pathname, y) != null || RT(U.pathname, I) != null;
}
const w_ = _0.createContext({}), L_ = ({ children: g }) => /* @__PURE__ */ vT(w_.Provider, { value: {}, children: /* @__PURE__ */ vT(d_, { children: g }) });
export {
  L_ as AppProvider
};
