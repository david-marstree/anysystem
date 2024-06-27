import { useEffect as fe, useMemo as ue, createContext as le, useContext as de, forwardRef as me, createElement as pe } from "react";
var ye = process.env.NODE_ENV === "production";
function C(r, a) {
  if (!ye) {
    var i = "Warning: " + a;
    typeof console < "u" && console.warn(i);
    try {
      throw Error(i);
    } catch {
    }
  }
}
var g = { exports: {} }, o = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ve() {
  if (I) return o;
  I = 1;
  var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, f = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, m = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, v = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, P = r ? Symbol.for("react.suspense_list") : 60120, _ = r ? Symbol.for("react.memo") : 60115, S = r ? Symbol.for("react.lazy") : 60116, x = r ? Symbol.for("react.block") : 60121, $ = r ? Symbol.for("react.fundamental") : 60117, F = r ? Symbol.for("react.responder") : 60118, A = r ? Symbol.for("react.scope") : 60119;
  function d(e) {
    if (typeof e == "object" && e !== null) {
      var b = e.$$typeof;
      switch (b) {
        case a:
          switch (e = e.type, e) {
            case v:
            case u:
            case s:
            case c:
            case f:
            case E:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case p:
                case y:
                case S:
                case _:
                case m:
                  return e;
                default:
                  return b;
              }
          }
        case i:
          return b;
      }
    }
  }
  function l(e) {
    return d(e) === u;
  }
  return o.AsyncMode = v, o.ConcurrentMode = u, o.ContextConsumer = p, o.ContextProvider = m, o.Element = a, o.ForwardRef = y, o.Fragment = s, o.Lazy = S, o.Memo = _, o.Portal = i, o.Profiler = c, o.StrictMode = f, o.Suspense = E, o.isAsyncMode = function(e) {
    return l(e) || d(e) === v;
  }, o.isConcurrentMode = l, o.isContextConsumer = function(e) {
    return d(e) === p;
  }, o.isContextProvider = function(e) {
    return d(e) === m;
  }, o.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === a;
  }, o.isForwardRef = function(e) {
    return d(e) === y;
  }, o.isFragment = function(e) {
    return d(e) === s;
  }, o.isLazy = function(e) {
    return d(e) === S;
  }, o.isMemo = function(e) {
    return d(e) === _;
  }, o.isPortal = function(e) {
    return d(e) === i;
  }, o.isProfiler = function(e) {
    return d(e) === c;
  }, o.isStrictMode = function(e) {
    return d(e) === f;
  }, o.isSuspense = function(e) {
    return d(e) === E;
  }, o.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === s || e === u || e === c || e === f || e === E || e === P || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === _ || e.$$typeof === m || e.$$typeof === p || e.$$typeof === y || e.$$typeof === $ || e.$$typeof === F || e.$$typeof === A || e.$$typeof === x);
  }, o.typeOf = d, o;
}
var n = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function Ee() {
  return Y || (Y = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, s = r ? Symbol.for("react.fragment") : 60107, f = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, m = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, v = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, y = r ? Symbol.for("react.forward_ref") : 60112, E = r ? Symbol.for("react.suspense") : 60113, P = r ? Symbol.for("react.suspense_list") : 60120, _ = r ? Symbol.for("react.memo") : 60115, S = r ? Symbol.for("react.lazy") : 60116, x = r ? Symbol.for("react.block") : 60121, $ = r ? Symbol.for("react.fundamental") : 60117, F = r ? Symbol.for("react.responder") : 60118, A = r ? Symbol.for("react.scope") : 60119;
    function d(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === s || t === u || t === c || t === f || t === E || t === P || typeof t == "object" && t !== null && (t.$$typeof === S || t.$$typeof === _ || t.$$typeof === m || t.$$typeof === p || t.$$typeof === y || t.$$typeof === $ || t.$$typeof === F || t.$$typeof === A || t.$$typeof === x);
    }
    function l(t) {
      if (typeof t == "object" && t !== null) {
        var M = t.$$typeof;
        switch (M) {
          case a:
            var T = t.type;
            switch (T) {
              case v:
              case u:
              case s:
              case c:
              case f:
              case E:
                return T;
              default:
                var w = T && T.$$typeof;
                switch (w) {
                  case p:
                  case y:
                  case S:
                  case _:
                  case m:
                    return w;
                  default:
                    return M;
                }
            }
          case i:
            return M;
        }
      }
    }
    var e = v, b = u, V = p, z = m, j = a, q = y, U = s, W = S, H = _, K = i, B = c, G = f, X = E, O = !1;
    function Z(t) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(t) || l(t) === v;
    }
    function N(t) {
      return l(t) === u;
    }
    function J(t) {
      return l(t) === p;
    }
    function Q(t) {
      return l(t) === m;
    }
    function ee(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function re(t) {
      return l(t) === y;
    }
    function te(t) {
      return l(t) === s;
    }
    function oe(t) {
      return l(t) === S;
    }
    function ne(t) {
      return l(t) === _;
    }
    function ae(t) {
      return l(t) === i;
    }
    function ie(t) {
      return l(t) === c;
    }
    function se(t) {
      return l(t) === f;
    }
    function ce(t) {
      return l(t) === E;
    }
    n.AsyncMode = e, n.ConcurrentMode = b, n.ContextConsumer = V, n.ContextProvider = z, n.Element = j, n.ForwardRef = q, n.Fragment = U, n.Lazy = W, n.Memo = H, n.Portal = K, n.Profiler = B, n.StrictMode = G, n.Suspense = X, n.isAsyncMode = Z, n.isConcurrentMode = N, n.isContextConsumer = J, n.isContextProvider = Q, n.isElement = ee, n.isForwardRef = re, n.isFragment = te, n.isLazy = oe, n.isMemo = ne, n.isPortal = ae, n.isProfiler = ie, n.isStrictMode = se, n.isSuspense = ce, n.isValidElementType = d, n.typeOf = l;
  }()), n;
}
process.env.NODE_ENV === "production" ? g.exports = ve() : g.exports = Ee();
var _e = g.exports, D = _e, Se = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ce = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, k = {};
k[D.ForwardRef] = Se;
k[D.Memo] = Ce;
function h() {
  return h = Object.assign || function(r) {
    for (var a = 1; a < arguments.length; a++) {
      var i = arguments[a];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }
    return r;
  }, h.apply(this, arguments);
}
function be(r, a) {
  if (r == null) return {};
  var i = {}, s = Object.keys(r), f, c;
  for (c = 0; c < s.length; c++)
    f = s[c], !(a.indexOf(f) >= 0) && (i[f] = r[f]);
  return i;
}
var R = /* @__PURE__ */ le(void 0);
R.displayName = "FormikContext";
R.Provider;
R.Consumer;
function L() {
  var r = de(R);
  return r || (process.env.NODE_ENV !== "production" ? C(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : C()), r;
}
var Te = function(a) {
  return a !== null && typeof a == "object";
};
function xe(r) {
  var a = L(), i = a.getFieldProps, s = a.getFieldMeta, f = a.getFieldHelpers, c = a.registerField, m = a.unregisterField, p = Te(r), v = p ? r : {
    name: r
  }, u = v.name, y = v.validate;
  fe(function() {
    return u && c(u, {
      validate: y
    }), function() {
      u && m(u);
    };
  }, [c, m, u, y]), process.env.NODE_ENV !== "production" && (a || (process.env.NODE_ENV !== "production" ? C(!1, "useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component") : C())), u || (process.env.NODE_ENV !== "production" ? C(!1, "Invalid field name. Either pass `useField` a string or an object containing a `name` key.") : C());
  var E = ue(function() {
    return f(u);
  }, [f, u]);
  return [i(v), s(u), E];
}
var Re = /* @__PURE__ */ me(function(r, a) {
  var i = r.action, s = be(r, ["action"]), f = i ?? "#", c = L(), m = c.handleReset, p = c.handleSubmit;
  return pe("form", h({
    onSubmit: p,
    ref: a,
    onReset: m,
    action: f
  }, s));
});
Re.displayName = "Form";
export {
  xe as u
};
