import { jsx as ee } from "react/jsx-runtime";
import * as c from "react";
import be from "react";
import "../index-DsprzSCj.js";
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
function O() {
  return O = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, O.apply(this, arguments);
}
var R;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(R || (R = {}));
const te = "popstate";
function Ne(e) {
  e === void 0 && (e = {});
  function t(a, n) {
    let {
      pathname: o,
      search: i,
      hash: l
    } = a.location;
    return G(
      "",
      {
        pathname: o,
        search: i,
        hash: l
      },
      // state defaults to `null` because `window.history.state` does
      n.state && n.state.usr || null,
      n.state && n.state.key || "default"
    );
  }
  function r(a, n) {
    return typeof n == "string" ? n : D(n);
  }
  return Ce(t, r, null, e);
}
function v(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function P(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function xe() {
  return Math.random().toString(36).substr(2, 8);
}
function ne(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function G(e, t, r, a) {
  return r === void 0 && (r = null), O({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? M(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || a || xe()
  });
}
function D(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: a = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), a && a !== "#" && (t += a.charAt(0) === "#" ? a : "#" + a), t;
}
function M(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e);
  }
  return t;
}
function Ce(e, t, r, a) {
  a === void 0 && (a = {});
  let {
    window: n = document.defaultView,
    v5Compat: o = !1
  } = a, i = n.history, l = R.Pop, s = null, u = f();
  u == null && (u = 0, i.replaceState(O({}, i.state, {
    idx: u
  }), ""));
  function f() {
    return (i.state || {
      idx: null
    }).idx;
  }
  function d() {
    l = R.Pop;
    let h = f(), b = h == null ? null : h - u;
    u = h, s && s({
      action: l,
      location: y.location,
      delta: b
    });
  }
  function m(h, b) {
    l = R.Push;
    let p = G(y.location, h, b);
    u = f() + 1;
    let E = ne(p, u), g = y.createHref(p);
    try {
      i.pushState(E, "", g);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError")
        throw C;
      n.location.assign(g);
    }
    o && s && s({
      action: l,
      location: y.location,
      delta: 1
    });
  }
  function N(h, b) {
    l = R.Replace;
    let p = G(y.location, h, b);
    u = f();
    let E = ne(p, u), g = y.createHref(p);
    i.replaceState(E, "", g), o && s && s({
      action: l,
      location: y.location,
      delta: 0
    });
  }
  function w(h) {
    let b = n.location.origin !== "null" ? n.location.origin : n.location.href, p = typeof h == "string" ? h : D(h);
    return p = p.replace(/ $/, "%20"), v(b, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, b);
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(n, i);
    },
    listen(h) {
      if (s)
        throw new Error("A history only accepts one active listener");
      return n.addEventListener(te, d), s = h, () => {
        n.removeEventListener(te, d), s = null;
      };
    },
    createHref(h) {
      return t(n, h);
    },
    createURL: w,
    encodeLocation(h) {
      let b = w(h);
      return {
        pathname: b.pathname,
        search: b.search,
        hash: b.hash
      };
    },
    push: m,
    replace: N,
    go(h) {
      return i.go(h);
    }
  };
  return y;
}
var re;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(re || (re = {}));
function ae(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, a] = Re(e.path, e.caseSensitive, e.end), n = t.match(r);
  if (!n) return null;
  let o = n[0], i = o.replace(/(.)\/+$/, "$1"), l = n.slice(1);
  return {
    params: a.reduce((u, f, d) => {
      let {
        paramName: m,
        isOptional: N
      } = f;
      if (m === "*") {
        let y = l[d] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const w = l[d];
      return N && !w ? u[m] = void 0 : u[m] = (w || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function Re(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), P(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let a = [], n = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (i, l, s) => (a.push({
    paramName: l,
    isOptional: s != null
  }), s ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (a.push({
    paramName: "*"
  }), n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? n += "\\/*$" : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"), [new RegExp(n, t ? void 0 : "i"), a];
}
function S(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(r);
  return a && a !== "/" ? null : e.slice(r) || "/";
}
function Se(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: a = "",
    hash: n = ""
  } = typeof e == "string" ? M(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : _e(r, t) : t,
    search: Le(a),
    hash: Oe(n)
  };
}
function _e(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((n) => {
    n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
  }), r.length > 1 ? r.join("/") : "/";
}
function Y(e, t, r, a) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Pe(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function le(e, t) {
  let r = Pe(e);
  return t ? r.map((a, n) => n === e.length - 1 ? a.pathname : a.pathnameBase) : r.map((a) => a.pathnameBase);
}
function se(e, t, r, a) {
  a === void 0 && (a = !1);
  let n;
  typeof e == "string" ? n = M(e) : (n = O({}, e), v(!n.pathname || !n.pathname.includes("?"), Y("?", "pathname", "search", n)), v(!n.pathname || !n.pathname.includes("#"), Y("#", "pathname", "hash", n)), v(!n.search || !n.search.includes("#"), Y("#", "search", "hash", n)));
  let o = e === "" || n.pathname === "", i = o ? "/" : n.pathname, l;
  if (i == null)
    l = r;
  else {
    let d = t.length - 1;
    if (!a && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; )
        m.shift(), d -= 1;
      n.pathname = m.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let s = Se(n, l), u = i && i !== "/" && i.endsWith("/"), f = (o || i === ".") && r.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const X = (e) => e.join("/").replace(/\/\/+/g, "/"), Le = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Oe = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ue = ["post", "put", "patch", "delete"];
new Set(ue);
const De = ["get", ...ue];
new Set(De);
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
function I() {
  return I = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, I.apply(this, arguments);
}
const W = /* @__PURE__ */ c.createContext(null);
process.env.NODE_ENV !== "production" && (W.displayName = "DataRouter");
const ce = /* @__PURE__ */ c.createContext(null);
process.env.NODE_ENV !== "production" && (ce.displayName = "DataRouterState");
const Te = /* @__PURE__ */ c.createContext(null);
process.env.NODE_ENV !== "production" && (Te.displayName = "Await");
const x = /* @__PURE__ */ c.createContext(null);
process.env.NODE_ENV !== "production" && (x.displayName = "Navigation");
const k = /* @__PURE__ */ c.createContext(null);
process.env.NODE_ENV !== "production" && (k.displayName = "Location");
const L = /* @__PURE__ */ c.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (L.displayName = "Route");
const Ue = /* @__PURE__ */ c.createContext(null);
process.env.NODE_ENV !== "production" && (Ue.displayName = "RouteError");
function Ve(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  B() || (process.env.NODE_ENV !== "production" ? v(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : v(!1));
  let {
    basename: a,
    navigator: n
  } = c.useContext(x), {
    hash: o,
    pathname: i,
    search: l
  } = U(e, {
    relative: r
  }), s = i;
  return a !== "/" && (s = i === "/" ? a : X([a, i])), n.createHref({
    pathname: s,
    search: l,
    hash: o
  });
}
function B() {
  return c.useContext(k) != null;
}
function T() {
  return B() || (process.env.NODE_ENV !== "production" ? v(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : v(!1)), c.useContext(k).location;
}
const fe = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function de(e) {
  c.useContext(x).static || c.useLayoutEffect(e);
}
function Ae() {
  let {
    isDataRoute: e
  } = c.useContext(L);
  return e ? We() : Fe();
}
function Fe() {
  B() || (process.env.NODE_ENV !== "production" ? v(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : v(!1));
  let e = c.useContext(W), {
    basename: t,
    future: r,
    navigator: a
  } = c.useContext(x), {
    matches: n
  } = c.useContext(L), {
    pathname: o
  } = T(), i = JSON.stringify(le(n, r.v7_relativeSplatPath)), l = c.useRef(!1);
  return de(() => {
    l.current = !0;
  }), c.useCallback(function(u, f) {
    if (f === void 0 && (f = {}), process.env.NODE_ENV !== "production" && P(l.current, fe), !l.current) return;
    if (typeof u == "number") {
      a.go(u);
      return;
    }
    let d = se(u, JSON.parse(i), o, f.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : X([t, d.pathname])), (f.replace ? a.replace : a.push)(d, f.state, f);
  }, [t, a, i, o, e]);
}
function U(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: a
  } = c.useContext(x), {
    matches: n
  } = c.useContext(L), {
    pathname: o
  } = T(), i = JSON.stringify(le(n, a.v7_relativeSplatPath));
  return c.useMemo(() => se(e, JSON.parse(i), o, r === "path"), [e, i, o, r]);
}
var he = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(he || {}), Q = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Q || {});
function pe(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Ie(e) {
  let t = c.useContext(W);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, pe(e)) : v(!1)), t;
}
function $e(e) {
  let t = c.useContext(L);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, pe(e)) : v(!1)), t;
}
function me(e) {
  let t = $e(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? v(!1, e + ' can only be used on routes that contain a unique "id"') : v(!1)), r.route.id;
}
function Me() {
  return me(Q.UseRouteId);
}
function We() {
  let {
    router: e
  } = Ie(he.UseNavigateStable), t = me(Q.UseNavigateStable), r = c.useRef(!1);
  return de(() => {
    r.current = !0;
  }), c.useCallback(function(n, o) {
    o === void 0 && (o = {}), process.env.NODE_ENV !== "production" && P(r.current, fe), r.current && (typeof n == "number" ? e.navigate(n) : e.navigate(n, I({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
function ke(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: a,
    navigationType: n = R.Pop,
    navigator: o,
    static: i = !1,
    future: l
  } = e;
  B() && (process.env.NODE_ENV !== "production" ? v(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : v(!1));
  let s = t.replace(/^\/*/, "/"), u = c.useMemo(() => ({
    basename: s,
    navigator: o,
    static: i,
    future: I({
      v7_relativeSplatPath: !1
    }, l)
  }), [s, l, o, i]);
  typeof a == "string" && (a = M(a));
  let {
    pathname: f = "/",
    search: d = "",
    hash: m = "",
    state: N = null,
    key: w = "default"
  } = a, y = c.useMemo(() => {
    let h = S(f, s);
    return h == null ? null : {
      location: {
        pathname: h,
        search: d,
        hash: m,
        state: N,
        key: w
      },
      navigationType: n
    };
  }, [s, f, d, m, N, w, n]);
  return process.env.NODE_ENV !== "production" && P(y != null, '<Router basename="' + s + '"> is not able to match the URL ' + ('"' + f + d + m + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), y == null ? null : /* @__PURE__ */ c.createElement(x.Provider, {
    value: u
  }, /* @__PURE__ */ c.createElement(k.Provider, {
    children: r,
    value: y
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
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _.apply(this, arguments);
}
function Z(e, t) {
  if (e == null) return {};
  var r = {}, a = Object.keys(e), n, o;
  for (o = 0; o < a.length; o++)
    n = a[o], !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
const A = "get", F = "application/x-www-form-urlencoded";
function j(e) {
  return e != null && typeof e.tagName == "string";
}
function Be(e) {
  return j(e) && e.tagName.toLowerCase() === "button";
}
function je(e) {
  return j(e) && e.tagName.toLowerCase() === "form";
}
function Ke(e) {
  return j(e) && e.tagName.toLowerCase() === "input";
}
function Je(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ze(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Je(e);
}
let V = null;
function Ye() {
  if (V === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), V = !1;
    } catch {
      V = !0;
    }
  return V;
}
const qe = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function q(e) {
  return e != null && !qe.has(e) ? (process.env.NODE_ENV !== "production" && P(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + F + '"')), null) : e;
}
function Ge(e, t) {
  let r, a, n, o, i;
  if (je(e)) {
    let l = e.getAttribute("action");
    a = l ? S(l, t) : null, r = e.getAttribute("method") || A, n = q(e.getAttribute("enctype")) || F, o = new FormData(e);
  } else if (Be(e) || Ke(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = e.getAttribute("formaction") || l.getAttribute("action");
    if (a = s ? S(s, t) : null, r = e.getAttribute("formmethod") || l.getAttribute("method") || A, n = q(e.getAttribute("formenctype")) || q(l.getAttribute("enctype")) || F, o = new FormData(l, e), !Ye()) {
      let {
        name: u,
        type: f,
        value: d
      } = e;
      if (f === "image") {
        let m = u ? u + "." : "";
        o.append(m + "x", "0"), o.append(m + "y", "0");
      } else u && o.append(u, d);
    }
  } else {
    if (j(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = A, a = null, n = F, i = e;
  }
  return o && n === "text/plain" && (i = o, o = void 0), {
    action: a,
    method: r.toLowerCase(),
    encType: n,
    formData: o,
    body: i
  };
}
const Xe = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Qe = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], Ze = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], He = "6";
try {
  window.__reactRouterVersion = He;
} catch {
}
const ve = /* @__PURE__ */ c.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (ve.displayName = "ViewTransition");
const et = /* @__PURE__ */ c.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (et.displayName = "Fetchers");
const tt = "startTransition", ie = c[tt];
function nt(e) {
  let {
    basename: t,
    children: r,
    future: a,
    window: n
  } = e, o = c.useRef();
  o.current == null && (o.current = Ne({
    window: n,
    v5Compat: !0
  }));
  let i = o.current, [l, s] = c.useState({
    action: i.action,
    location: i.location
  }), {
    v7_startTransition: u
  } = a || {}, f = c.useCallback((d) => {
    u && ie ? ie(() => s(d)) : s(d);
  }, [s, u]);
  return c.useLayoutEffect(() => i.listen(f), [i, f]), /* @__PURE__ */ c.createElement(ke, {
    basename: t,
    children: r,
    location: l.location,
    navigationType: l.action,
    navigator: i,
    future: a
  });
}
process.env.NODE_ENV;
const rt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", at = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ge = /* @__PURE__ */ c.forwardRef(function(t, r) {
  let {
    onClick: a,
    relative: n,
    reloadDocument: o,
    replace: i,
    state: l,
    target: s,
    to: u,
    preventScrollReset: f,
    unstable_viewTransition: d
  } = t, m = Z(t, Xe), {
    basename: N
  } = c.useContext(x), w, y = !1;
  if (typeof u == "string" && at.test(u) && (w = u, rt))
    try {
      let E = new URL(window.location.href), g = u.startsWith("//") ? new URL(E.protocol + u) : new URL(u), C = S(g.pathname, N);
      g.origin === E.origin && C != null ? u = C + g.search + g.hash : y = !0;
    } catch {
      process.env.NODE_ENV !== "production" && P(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let h = Ve(u, {
    relative: n
  }), b = st(u, {
    replace: i,
    state: l,
    target: s,
    preventScrollReset: f,
    relative: n,
    unstable_viewTransition: d
  });
  function p(E) {
    a && a(E), E.defaultPrevented || b(E);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ c.createElement("a", _({}, m, {
      href: w || h,
      onClick: y || o ? a : p,
      ref: r,
      target: s
    }))
  );
});
process.env.NODE_ENV !== "production" && (ge.displayName = "Link");
const it = /* @__PURE__ */ c.forwardRef(function(t, r) {
  let {
    "aria-current": a = "page",
    caseSensitive: n = !1,
    className: o = "",
    end: i = !1,
    style: l,
    to: s,
    unstable_viewTransition: u,
    children: f
  } = t, d = Z(t, Qe), m = U(s, {
    relative: d.relative
  }), N = T(), w = c.useContext(ce), {
    navigator: y,
    basename: h
  } = c.useContext(x), b = w != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  pt(m) && u === !0, p = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname, E = N.pathname, g = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
  n || (E = E.toLowerCase(), g = g ? g.toLowerCase() : null, p = p.toLowerCase()), g && h && (g = S(g, h) || g);
  const C = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
  let K = E === p || !i && E.startsWith(p) && E.charAt(C) === "/", H = g != null && (g === p || !i && g.startsWith(p) && g.charAt(p.length) === "/"), J = {
    isActive: K,
    isPending: H,
    isTransitioning: b
  }, Ee = K ? a : void 0, z;
  typeof o == "function" ? z = o(J) : z = [o, K ? "active" : null, H ? "pending" : null, b ? "transitioning" : null].filter(Boolean).join(" ");
  let we = typeof l == "function" ? l(J) : l;
  return /* @__PURE__ */ c.createElement(ge, _({}, d, {
    "aria-current": Ee,
    className: z,
    ref: r,
    style: we,
    to: s,
    unstable_viewTransition: u
  }), typeof f == "function" ? f(J) : f);
});
process.env.NODE_ENV !== "production" && (it.displayName = "NavLink");
const ot = /* @__PURE__ */ c.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: a,
    reloadDocument: n,
    replace: o,
    state: i,
    method: l = A,
    action: s,
    onSubmit: u,
    relative: f,
    preventScrollReset: d,
    unstable_viewTransition: m
  } = e, N = Z(e, Ze), w = dt(), y = ht(s, {
    relative: f
  }), h = l.toLowerCase() === "get" ? "get" : "post", b = (p) => {
    if (u && u(p), p.defaultPrevented) return;
    p.preventDefault();
    let E = p.nativeEvent.submitter, g = (E == null ? void 0 : E.getAttribute("formmethod")) || l;
    w(E || p.currentTarget, {
      fetcherKey: r,
      method: g,
      navigate: a,
      replace: o,
      state: i,
      relative: f,
      preventScrollReset: d,
      unstable_viewTransition: m
    });
  };
  return /* @__PURE__ */ c.createElement("form", _({
    ref: t,
    method: h,
    action: y,
    onSubmit: n ? u : b
  }, N));
});
process.env.NODE_ENV !== "production" && (ot.displayName = "Form");
process.env.NODE_ENV;
var $;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})($ || ($ = {}));
var oe;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(oe || (oe = {}));
function lt(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ye(e) {
  let t = c.useContext(W);
  return t || (process.env.NODE_ENV !== "production" ? v(!1, lt(e)) : v(!1)), t;
}
function st(e, t) {
  let {
    target: r,
    replace: a,
    state: n,
    preventScrollReset: o,
    relative: i,
    unstable_viewTransition: l
  } = t === void 0 ? {} : t, s = Ae(), u = T(), f = U(e, {
    relative: i
  });
  return c.useCallback((d) => {
    if (ze(d, r)) {
      d.preventDefault();
      let m = a !== void 0 ? a : D(u) === D(f);
      s(e, {
        replace: m,
        state: n,
        preventScrollReset: o,
        relative: i,
        unstable_viewTransition: l
      });
    }
  }, [u, s, f, a, n, r, e, o, i, l]);
}
function ut() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let ct = 0, ft = () => "__" + String(++ct) + "__";
function dt() {
  let {
    router: e
  } = ye($.UseSubmit), {
    basename: t
  } = c.useContext(x), r = Me();
  return c.useCallback(function(a, n) {
    n === void 0 && (n = {}), ut();
    let {
      action: o,
      method: i,
      encType: l,
      formData: s,
      body: u
    } = Ge(a, t);
    if (n.navigate === !1) {
      let f = n.fetcherKey || ft();
      e.fetch(f, r, n.action || o, {
        preventScrollReset: n.preventScrollReset,
        formData: s,
        body: u,
        formMethod: n.method || i,
        formEncType: n.encType || l,
        unstable_flushSync: n.unstable_flushSync
      });
    } else
      e.navigate(n.action || o, {
        preventScrollReset: n.preventScrollReset,
        formData: s,
        body: u,
        formMethod: n.method || i,
        formEncType: n.encType || l,
        replace: n.replace,
        state: n.state,
        fromRouteId: r,
        unstable_flushSync: n.unstable_flushSync,
        unstable_viewTransition: n.unstable_viewTransition
      });
  }, [e, t, r]);
}
function ht(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: a
  } = c.useContext(x), n = c.useContext(L);
  n || (process.env.NODE_ENV !== "production" ? v(!1, "useFormAction must be used inside a RouteContext") : v(!1));
  let [o] = n.matches.slice(-1), i = _({}, U(e || ".", {
    relative: r
  })), l = T();
  if (e == null) {
    i.search = l.search;
    let s = new URLSearchParams(i.search);
    s.has("index") && s.get("index") === "" && (s.delete("index"), i.search = s.toString() ? "?" + s.toString() : "");
  }
  return (!e || e === ".") && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (i.pathname = i.pathname === "/" ? a : X([a, i.pathname])), D(i);
}
function pt(e, t) {
  t === void 0 && (t = {});
  let r = c.useContext(ve);
  r == null && (process.env.NODE_ENV !== "production" ? v(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : v(!1));
  let {
    basename: a
  } = ye($.useViewTransitionState), n = U(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let o = S(r.currentLocation.pathname, a) || r.currentLocation.pathname, i = S(r.nextLocation.pathname, a) || r.nextLocation.pathname;
  return ae(n.pathname, i) != null || ae(n.pathname, o) != null;
}
const mt = be.createContext({}), Et = ({ children: e }) => /* @__PURE__ */ ee(mt.Provider, { value: {}, children: /* @__PURE__ */ ee(nt, { children: e }) });
export {
  Et as AppProvider
};
