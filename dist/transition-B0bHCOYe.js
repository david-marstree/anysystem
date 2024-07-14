import * as g from "react";
import B, { useRef as A, useState as U, useReducer as $t, useMemo as z, useSyncExternalStore as Lt, useId as Ot, useEffect as Q, useCallback as ee, useLayoutEffect as St, createContext as Z, useContext as q, Fragment as se } from "react";
import { m as Re, o as X, f as Ne, n as H, q as ae, s as be, A as Ft, t as Dt, B as At, C as ge, W as ce, y as we, E as Ht, b as ye, M as It, O as te, J as Nt, L as kt, e as ct } from "./index-DsW4uhBe.js";
import { i as _t, b as ke, c as W, g as Te, u as Wt, d as Bt, e as Xe, h as Vt, j as Yt, k as Kt, o as ft, l as Me, s as Ut, f as jt, m as Xt, a as qt } from "./floating-ui.react-dom-xElE0hWP.js";
import { r as ve } from "./index-DsprzSCj.js";
function Gt(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Jt(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function yr({ disabled: e = !1 } = {}) {
  let t = A(null), [n, r] = U(!1), o = Re(), l = X(() => {
    t.current = null, r(!1), o.dispose();
  }), i = X((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let u = Ne(s.currentTarget);
        o.addEventListener(u, "pointerup", l, !1), o.addEventListener(u, "pointermove", (f) => {
          if (t.current) {
            let c = Gt(f);
            r(Jt(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(u, "pointercancel", l, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: i, onPointerUp: l, onClick: l } };
}
function zt(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Rr(e, t = !1) {
  let n = e === null ? null : "current" in e ? e.current : e, [r, o] = $t(() => ({}), {}), l = z(() => zt(n), [n, r]);
  return H(() => {
    if (!n) return;
    let i = new ResizeObserver(o);
    return i.observe(n), () => {
      i.disconnect();
    };
  }, [n]), t ? { width: `${l.width}px`, height: `${l.height}px` } : l;
}
let Qt = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function dt(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...l) {
    let i = t[o].call(n, ...l);
    i && (n = i, r.forEach((s) => s()));
  } };
}
function mt(e) {
  return Lt(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Zt = new Qt(() => dt(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function _e(e, t) {
  let n = Zt.get(t), r = Ot(), o = mt(n);
  if (H(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let l = o.indexOf(r), i = o.length;
  return l === -1 && (l = i, i += 1), l === i - 1;
}
let Ae = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map();
function qe(e) {
  var t;
  let n = (t = pe.get(e)) != null ? t : 0;
  return pe.set(e, n + 1), n !== 0 ? () => Ge(e) : (Ae.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Ge(e));
}
function Ge(e) {
  var t;
  let n = (t = pe.get(e)) != null ? t : 1;
  if (n === 1 ? pe.delete(e) : pe.set(e, n - 1), n !== 1) return;
  let r = Ae.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Ae.delete(e));
}
function xr(e, { allowed: t, disallowed: n } = {}) {
  let r = _e(e, "inert-others");
  H(() => {
    var o, l;
    if (!r) return;
    let i = ae();
    for (let u of (o = n == null ? void 0 : n()) != null ? o : []) u && i.add(qe(u));
    let s = (l = t == null ? void 0 : t()) != null ? l : [];
    for (let u of s) {
      if (!u) continue;
      let f = Ne(u);
      if (!f) continue;
      let c = u.parentElement;
      for (; c && c !== f.body; ) {
        for (let v of c.children) s.some((h) => v.contains(h)) || i.add(qe(v));
        c = c.parentElement;
      }
    }
    return i.dispose;
  }, [r, t, n]);
}
function en(e, t, n) {
  let r = be((o) => {
    let l = o.getBoundingClientRect();
    l.x === 0 && l.y === 0 && l.width === 0 && l.height === 0 && n();
  });
  Q(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let l = ae();
    if (typeof ResizeObserver < "u") {
      let i = new ResizeObserver(() => r.current(o));
      i.observe(o), l.add(() => i.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let i = new IntersectionObserver(() => r.current(o));
      i.observe(o), l.add(() => i.disconnect());
    }
    return () => l.dispose();
  }, [t, r, e]);
}
function gt() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function tn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function nn() {
  return gt() || tn();
}
function me(e, t, n, r) {
  let o = be(n);
  Q(() => {
    if (!e) return;
    function l(i) {
      o.current(i);
    }
    return document.addEventListener(t, l, r), () => document.removeEventListener(t, l, r);
  }, [e, t, r]);
}
function rn(e, t, n, r) {
  let o = be(n);
  Q(() => {
    if (!e) return;
    function l(i) {
      o.current(i);
    }
    return window.addEventListener(t, l, r), () => window.removeEventListener(t, l, r);
  }, [e, t, r]);
}
const Je = 30;
function Pr(e, t, n) {
  let r = _e(e, "outside-click"), o = be(n), l = ee(function(u, f) {
    if (u.defaultPrevented) return;
    let c = f(u);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let v = function h(a) {
      return typeof a == "function" ? h(a()) : Array.isArray(a) || a instanceof Set ? a : [a];
    }(t);
    for (let h of v) {
      if (h === null) continue;
      let a = h instanceof HTMLElement ? h : h.current;
      if (a != null && a.contains(c) || u.composed && u.composedPath().includes(a)) return;
    }
    return !Ft(c, Dt.Loose) && c.tabIndex !== -1 && u.preventDefault(), o.current(u, c);
  }, [o]), i = A(null);
  me(r, "pointerdown", (u) => {
    var f, c;
    i.current = ((c = (f = u.composedPath) == null ? void 0 : f.call(u)) == null ? void 0 : c[0]) || u.target;
  }, !0), me(r, "mousedown", (u) => {
    var f, c;
    i.current = ((c = (f = u.composedPath) == null ? void 0 : f.call(u)) == null ? void 0 : c[0]) || u.target;
  }, !0), me(r, "click", (u) => {
    nn() || i.current && (l(u, () => i.current), i.current = null);
  }, !0);
  let s = A({ x: 0, y: 0 });
  me(r, "touchstart", (u) => {
    s.current.x = u.touches[0].clientX, s.current.y = u.touches[0].clientY;
  }, !0), me(r, "touchend", (u) => {
    let f = { x: u.changedTouches[0].clientX, y: u.changedTouches[0].clientY };
    if (!(Math.abs(f.x - s.current.x) >= Je || Math.abs(f.y - s.current.y) >= Je)) return l(u, () => u.target instanceof HTMLElement ? u.target : null);
  }, !0), rn(r, "blur", (u) => l(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function pt(...e) {
  return z(() => Ne(...e), [...e]);
}
function ze(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Tr(e, t) {
  let [n, r] = U(() => ze(e));
  return H(() => {
    r(ze(e));
  }, [e.type, e.as]), H(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
function on() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), l = Math.max(0, e - o);
    n.style(r, "paddingRight", `${l}px`);
  } };
}
function ln() {
  return gt() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((l) => l()).some((l) => l.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = ae();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let l = (o = window.scrollY) != null ? o : window.pageYOffset, i = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let u = s.target.closest("a");
          if (!u) return;
          let { hash: f } = new URL(u.href), c = e.querySelector(f);
          c && !r(c) && (i = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (s) => {
        if (s.target instanceof HTMLElement) if (r(s.target)) {
          let u = s.target;
          for (; u.parentElement && r(u.parentElement); ) u = u.parentElement;
          t.style(u, "overscrollBehavior", "contain");
        } else t.style(s.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (s) => {
        if (s.target instanceof HTMLElement) {
          if (s.target.tagName === "INPUT") return;
          if (r(s.target)) {
            let u = s.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); ) u = u.parentElement;
            u.dataset.headlessuiPortal === "" && s.preventDefault();
          } else s.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var s;
        let u = (s = window.scrollY) != null ? s : window.pageYOffset;
        l !== u && window.scrollTo(0, l), i && i.isConnected && (i.scrollIntoView({ block: "nearest" }), i = null);
      });
    });
  } } : {};
}
function sn() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function un(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let ne = dt(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ae(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: un(n) }, o = [ln(), on(), sn()];
  o.forEach(({ before: l }) => l == null ? void 0 : l(r)), o.forEach(({ after: l }) => l == null ? void 0 : l(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ne.subscribe(() => {
  let e = ne.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && ne.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ne.dispatch("TEARDOWN", n);
  }
});
function an(e, t, n = () => ({ containers: [] })) {
  let r = mt(ne), o = t ? r.get(t) : void 0, l = o ? o.count > 0 : !1;
  return H(() => {
    if (!(!t || !e)) return ne.dispatch("PUSH", t, n), () => ne.dispatch("POP", t, n);
  }, [e, t]), l;
}
function Mr(e, t, n = () => [document.body]) {
  let r = _e(e, "scroll-lock");
  an(r, t, (o) => {
    var l;
    return { containers: [...(l = o.containers) != null ? l : [], n] };
  });
}
function Qe(e) {
  return [e.screenX, e.screenY];
}
function $r() {
  let e = A([-1, -1]);
  return { wasMoved(t) {
    let n = Qe(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Qe(t);
  } };
}
function cn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return t.called = !0, e(...n);
  };
}
function fn(e = 0) {
  let [t, n] = U(e), r = ee((u) => n(u), [t]), o = ee((u) => n((f) => f | u), [t]), l = ee((u) => (t & u) === u, [t]), i = ee((u) => n((f) => f & ~u), [n]), s = ee((u) => n((f) => f ^ u), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: l, removeFlag: i, toggleFlag: s };
}
var dn = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(dn || {});
function mn(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function gn(e, t, n, r) {
  let [o, l] = U(n), { hasFlag: i, addFlag: s, removeFlag: u } = fn(e && o ? 3 : 0), f = A(!1), c = A(!1), v = Re();
  return H(function h() {
    var a;
    if (!e) return;
    n && l(!0);
    let d = t.current;
    return d ? ((a = r == null ? void 0 : r.start) == null || a.call(r, n), pn(d, { inFlight: f, prepare() {
      c.current ? c.current = !1 : c.current = f.current, f.current = !0, !c.current && (n ? (s(3), u(4)) : (s(4), u(2)));
    }, run() {
      c.current ? n ? (u(3), s(4)) : (u(4), s(3)) : n ? u(1) : s(1);
    }, done() {
      var m;
      c.current && typeof d.getAnimations == "function" && d.getAnimations().length > 0 || (f.current = !1, u(7), n || l(!1), (m = r == null ? void 0 : r.end) == null || m.call(r, n));
    } })) : n ? (s(3), v.nextFrame(() => h())) : void 0;
  }, [e, n, t, v]), e ? [o, { closed: i(1), enter: i(2), leave: i(4), transition: i(2) || i(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function pn(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let l = ae();
  return hn(e, { prepare: t, inFlight: o }), l.nextFrame(() => {
    l.add(vn(e, r)), n();
  }), l.dispose;
}
function vn(e, t) {
  let n = cn(t), r = ae();
  if (!e) return r.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [i, s] = [o, l].map((f) => {
    let [c = 0] = f.split(",").filter(Boolean).map((v) => v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3).sort((v, h) => h - v);
    return c;
  }), u = i + s;
  if (u !== 0) {
    let f = r.group((c) => {
      let v = c.setTimeout(() => {
        n(), c.dispose();
      }, u);
      c.addEventListener(e, "transitionrun", (h) => {
        h.target === h.currentTarget && (v(), c.addEventListener(e, "transitioncancel", (a) => {
          a.target === a.currentTarget && (n(), f());
        }));
      });
    });
    r.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (n(), r.dispose());
    });
  } else n();
  return r.dispose;
}
function hn(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function Ze(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function he(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && _t(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function vt() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function We() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function En(e) {
  return yn() ? !1 : !et() && e.width === 0 && e.height === 0 || et() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function bn() {
  return /apple/i.test(navigator.vendor);
}
function et() {
  const e = /android/i;
  return e.test(vt()) || e.test(We());
}
function wn() {
  return vt().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function yn() {
  return We().includes("jsdom/");
}
function He(e, t) {
  const n = ["mouse", "pen"];
  return n.push("", void 0), n.includes(e);
}
function Rn(e) {
  return "nativeEvent" in e;
}
function Cn(e) {
  return e.matches("html,body");
}
function re(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function $e(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function ie(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const xn = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Pn(e) {
  return ke(e) && e.matches(xn);
}
const ht = {
  ...g
}, Tn = ht.useInsertionEffect, Mn = Tn || ((e) => e());
function J(e) {
  const t = g.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return Mn(() => {
    t.current = e;
  }), g.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var ue = typeof document < "u" ? St : Q;
let tt = !1, $n = 0;
const nt = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + $n++
);
function Ln() {
  const [e, t] = g.useState(() => tt ? nt() : void 0);
  return ue(() => {
    e == null && t(nt());
  }, []), g.useEffect(() => {
    tt = !0;
  }, []), e;
}
const On = ht.useId, Et = On || Ln;
let Ee;
process.env.NODE_ENV !== "production" && (Ee = /* @__PURE__ */ new Set());
function Sn() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Ee) != null && e.has(o))) {
    var l;
    (l = Ee) == null || l.add(o), console.warn(o);
  }
}
function Fn() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Ee) != null && e.has(o))) {
    var l;
    (l = Ee) == null || l.add(o), console.error(o);
  }
}
function Dn() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const An = /* @__PURE__ */ g.createContext(null), Hn = /* @__PURE__ */ g.createContext(null), Be = () => {
  var e;
  return ((e = g.useContext(An)) == null ? void 0 : e.id) || null;
}, Ve = () => g.useContext(Hn);
function Ye(e) {
  return "data-floating-ui-" + e;
}
function Le(e) {
  const t = A(e);
  return ue(() => {
    t.current = e;
  }), t;
}
const rt = /* @__PURE__ */ Ye("safe-polygon");
function Oe(e, t, n) {
  return n && !He(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Lr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: l,
    elements: i
  } = e, {
    enabled: s = !0,
    delay: u = 0,
    handleClose: f = null,
    mouseOnly: c = !1,
    restMs: v = 0,
    move: h = !0
  } = t, a = Ve(), d = Be(), m = Le(f), p = Le(u), E = Le(n), C = g.useRef(), y = g.useRef(-1), $ = g.useRef(), L = g.useRef(-1), N = g.useRef(!0), V = g.useRef(!1), O = g.useRef(() => {
  }), Y = g.useCallback(() => {
    var w;
    const b = (w = o.current.openEvent) == null ? void 0 : w.type;
    return (b == null ? void 0 : b.includes("mouse")) && b !== "mousedown";
  }, [o]);
  g.useEffect(() => {
    if (!s) return;
    function w(b) {
      let {
        open: x
      } = b;
      x || (clearTimeout(y.current), clearTimeout(L.current), N.current = !0);
    }
    return l.on("openchange", w), () => {
      l.off("openchange", w);
    };
  }, [s, l]), g.useEffect(() => {
    if (!s || !m.current || !n) return;
    function w(x) {
      Y() && r(!1, x, "hover");
    }
    const b = re(i.floating).documentElement;
    return b.addEventListener("mouseleave", w), () => {
      b.removeEventListener("mouseleave", w);
    };
  }, [i.floating, n, r, s, m, Y]);
  const k = g.useCallback(function(w, b, x) {
    b === void 0 && (b = !0), x === void 0 && (x = "hover");
    const R = Oe(p.current, "close", C.current);
    R && !$.current ? (clearTimeout(y.current), y.current = window.setTimeout(() => r(!1, w, x), R)) : b && (clearTimeout(y.current), r(!1, w, x));
  }, [p, r]), S = J(() => {
    O.current(), $.current = void 0;
  }), D = J(() => {
    if (V.current) {
      const w = re(i.floating).body;
      w.style.pointerEvents = "", w.removeAttribute(rt), V.current = !1;
    }
  });
  g.useEffect(() => {
    if (!s) return;
    function w() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function b(P) {
      if (clearTimeout(y.current), N.current = !1, c && !He(C.current) || v > 0 && !Oe(p.current, "open"))
        return;
      const M = Oe(p.current, "open", C.current);
      M ? y.current = window.setTimeout(() => {
        E.current || r(!0, P, "hover");
      }, M) : r(!0, P, "hover");
    }
    function x(P) {
      if (w()) return;
      O.current();
      const M = re(i.floating);
      if (clearTimeout(L.current), m.current && o.current.floatingContext) {
        n || clearTimeout(y.current), $.current = m.current({
          ...o.current.floatingContext,
          tree: a,
          x: P.clientX,
          y: P.clientY,
          onClose() {
            D(), S(), k(P, !0, "safe-polygon");
          }
        });
        const j = $.current;
        M.addEventListener("mousemove", j), O.current = () => {
          M.removeEventListener("mousemove", j);
        };
        return;
      }
      (C.current === "touch" ? !he(i.floating, P.relatedTarget) : !0) && k(P);
    }
    function R(P) {
      w() || o.current.floatingContext && (m.current == null || m.current({
        ...o.current.floatingContext,
        tree: a,
        x: P.clientX,
        y: P.clientY,
        onClose() {
          D(), S(), k(P);
        }
      })(P));
    }
    if (W(i.domReference)) {
      var F;
      const P = i.domReference;
      return n && P.addEventListener("mouseleave", R), (F = i.floating) == null || F.addEventListener("mouseleave", R), h && P.addEventListener("mousemove", b, {
        once: !0
      }), P.addEventListener("mouseenter", b), P.addEventListener("mouseleave", x), () => {
        var M;
        n && P.removeEventListener("mouseleave", R), (M = i.floating) == null || M.removeEventListener("mouseleave", R), h && P.removeEventListener("mousemove", b), P.removeEventListener("mouseenter", b), P.removeEventListener("mouseleave", x);
      };
    }
  }, [i, s, e, c, v, h, k, S, D, r, n, E, a, p, m, o]), ue(() => {
    var w;
    if (s && n && (w = m.current) != null && w.__options.blockPointerEvents && Y()) {
      const x = re(i.floating).body;
      x.setAttribute(rt, ""), x.style.pointerEvents = "none", V.current = !0;
      const R = i.floating;
      if (W(i.domReference) && R) {
        var b;
        const F = i.domReference, P = a == null || (b = a.nodesRef.current.find((M) => M.id === d)) == null || (b = b.context) == null ? void 0 : b.elements.floating;
        return P && (P.style.pointerEvents = ""), F.style.pointerEvents = "auto", R.style.pointerEvents = "auto", () => {
          F.style.pointerEvents = "", R.style.pointerEvents = "";
        };
      }
    }
  }, [s, n, d, i, a, m, Y]), ue(() => {
    n || (C.current = void 0, S(), D());
  }, [n, S, D]), g.useEffect(() => () => {
    S(), clearTimeout(y.current), clearTimeout(L.current), D();
  }, [s, i.domReference, S, D]);
  const _ = g.useMemo(() => {
    function w(b) {
      C.current = b.pointerType;
    }
    return {
      onPointerDown: w,
      onPointerEnter: w,
      onMouseMove(b) {
        const {
          nativeEvent: x
        } = b;
        function R() {
          !N.current && !E.current && r(!0, x, "hover");
        }
        c && !He(C.current) || n || v === 0 || (clearTimeout(L.current), C.current === "touch" ? R() : L.current = window.setTimeout(R, v));
      }
    };
  }, [c, r, n, E, v]), T = g.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(y.current);
    },
    onMouseLeave(w) {
      k(w.nativeEvent, !1);
    }
  }), [k]);
  return g.useMemo(() => s ? {
    reference: _,
    floating: T
  } : {}, [s, _, T]);
}
function Se(e, t) {
  let n = e.filter((o) => {
    var l;
    return o.parentId === t && ((l = o.context) == null ? void 0 : l.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var l;
      return (l = r) == null ? void 0 : l.some((i) => {
        var s;
        return o.parentId === i.id && ((s = o.context) == null ? void 0 : s.open);
      });
    }), n = n.concat(r);
  return n;
}
const In = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Nn = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, ot = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Or(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: l
  } = e, {
    enabled: i = !0,
    escapeKey: s = !0,
    outsidePress: u = !0,
    outsidePressEvent: f = "pointerdown",
    referencePress: c = !1,
    referencePressEvent: v = "pointerdown",
    ancestorScroll: h = !1,
    bubbles: a,
    capture: d
  } = t, m = Ve(), p = J(typeof u == "function" ? u : () => !1), E = typeof u == "function" ? p : u, C = g.useRef(!1), y = g.useRef(!1), {
    escapeKey: $,
    outsidePress: L
  } = ot(a), {
    escapeKey: N,
    outsidePress: V
  } = ot(d), O = J((T) => {
    var w;
    if (!n || !i || !s || T.key !== "Escape")
      return;
    const b = (w = l.current.floatingContext) == null ? void 0 : w.nodeId, x = m ? Se(m.nodesRef.current, b) : [];
    if (!$ && (T.stopPropagation(), x.length > 0)) {
      let R = !0;
      if (x.forEach((F) => {
        var P;
        if ((P = F.context) != null && P.open && !F.context.dataRef.current.__escapeKeyBubbles) {
          R = !1;
          return;
        }
      }), !R)
        return;
    }
    r(!1, Rn(T) ? T.nativeEvent : T, "escape-key");
  }), Y = J((T) => {
    var w;
    const b = () => {
      var x;
      O(T), (x = ie(T)) == null || x.removeEventListener("keydown", b);
    };
    (w = ie(T)) == null || w.addEventListener("keydown", b);
  }), k = J((T) => {
    var w;
    const b = C.current;
    C.current = !1;
    const x = y.current;
    if (y.current = !1, f === "click" && x || b || typeof E == "function" && !E(T))
      return;
    const R = ie(T), F = "[" + Ye("inert") + "]", P = re(o.floating).querySelectorAll(F);
    let M = W(R) ? R : null;
    for (; M && !Xe(M); ) {
      const I = Vt(M);
      if (Xe(I) || !W(I))
        break;
      M = I;
    }
    if (P.length && W(R) && !Cn(R) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !he(R, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(P).every((I) => !he(M, I)))
      return;
    if (ke(R) && _) {
      const I = R.clientWidth > 0 && R.scrollWidth > R.clientWidth, K = R.clientHeight > 0 && R.scrollHeight > R.clientHeight;
      let de = K && T.offsetX > R.clientWidth;
      if (K && Yt(R).direction === "rtl" && (de = T.offsetX <= R.offsetWidth - R.clientWidth), de || I && T.offsetY > R.clientHeight)
        return;
    }
    const G = (w = l.current.floatingContext) == null ? void 0 : w.nodeId, j = m && Se(m.nodesRef.current, G).some((I) => {
      var K;
      return $e(T, (K = I.context) == null ? void 0 : K.elements.floating);
    });
    if ($e(T, o.floating) || $e(T, o.domReference) || j)
      return;
    const le = m ? Se(m.nodesRef.current, G) : [];
    if (le.length > 0) {
      let I = !0;
      if (le.forEach((K) => {
        var de;
        if ((de = K.context) != null && de.open && !K.context.dataRef.current.__outsidePressBubbles) {
          I = !1;
          return;
        }
      }), !I)
        return;
    }
    r(!1, T, "outside-press");
  }), S = J((T) => {
    var w;
    const b = () => {
      var x;
      k(T), (x = ie(T)) == null || x.removeEventListener(f, b);
    };
    (w = ie(T)) == null || w.addEventListener(f, b);
  });
  g.useEffect(() => {
    if (!n || !i)
      return;
    l.current.__escapeKeyBubbles = $, l.current.__outsidePressBubbles = L;
    function T(x) {
      r(!1, x, "ancestor-scroll");
    }
    const w = re(o.floating);
    s && w.addEventListener("keydown", N ? Y : O, N), E && w.addEventListener(f, V ? S : k, V);
    let b = [];
    return h && (W(o.domReference) && (b = Te(o.domReference)), W(o.floating) && (b = b.concat(Te(o.floating))), !W(o.reference) && o.reference && o.reference.contextElement && (b = b.concat(Te(o.reference.contextElement)))), b = b.filter((x) => {
      var R;
      return x !== ((R = w.defaultView) == null ? void 0 : R.visualViewport);
    }), b.forEach((x) => {
      x.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      s && w.removeEventListener("keydown", N ? Y : O, N), E && w.removeEventListener(f, V ? S : k, V), b.forEach((x) => {
        x.removeEventListener("scroll", T);
      });
    };
  }, [l, o, s, E, f, n, r, h, i, $, L, O, N, Y, k, V, S]), g.useEffect(() => {
    C.current = !1;
  }, [E, f]);
  const D = g.useMemo(() => ({
    onKeyDown: O,
    [In[v]]: (T) => {
      c && r(!1, T.nativeEvent, "reference-press");
    }
  }), [O, r, c, v]), _ = g.useMemo(() => ({
    onKeyDown: O,
    onMouseDown() {
      y.current = !0;
    },
    onMouseUp() {
      y.current = !0;
    },
    [Nn[f]]: () => {
      C.current = !0;
    }
  }), [O, f]);
  return g.useMemo(() => i ? {
    reference: D,
    floating: _
  } : {}, [i, D, _]);
}
function kn(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Et(), l = g.useRef({}), [i] = g.useState(() => Dn()), s = Be() != null;
  if (process.env.NODE_ENV !== "production") {
    const a = r.reference;
    a && !W(a) && Fn("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, f] = g.useState(r.reference), c = J((a, d, m) => {
    l.current.openEvent = a ? d : void 0, i.emit("openchange", {
      open: a,
      event: d,
      reason: m,
      nested: s
    }), n == null || n(a, d, m);
  }), v = g.useMemo(() => ({
    setPositionReference: f
  }), []), h = g.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return g.useMemo(() => ({
    dataRef: l,
    open: t,
    onOpenChange: c,
    elements: h,
    events: i,
    floatingId: o,
    refs: v
  }), [t, c, h, i, o, v]);
}
function _n(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = kn({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [l, i] = g.useState(null), [s, u] = g.useState(null), c = (o == null ? void 0 : o.reference) || l, v = g.useRef(null), h = Ve();
  ue(() => {
    c && (v.current = c);
  }, [c]);
  const a = Wt({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), d = g.useCallback((y) => {
    const $ = W(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    u($), a.refs.setReference($);
  }, [a.refs]), m = g.useCallback((y) => {
    (W(y) || y === null) && (v.current = y, i(y)), (W(a.refs.reference.current) || a.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !W(y)) && a.refs.setReference(y);
  }, [a.refs]), p = g.useMemo(() => ({
    ...a.refs,
    setReference: m,
    setPositionReference: d,
    domReference: v
  }), [a.refs, m, d]), E = g.useMemo(() => ({
    ...a.elements,
    domReference: c
  }), [a.elements, c]), C = g.useMemo(() => ({
    ...a,
    ...r,
    refs: p,
    elements: E,
    nodeId: t
  }), [a, p, E, t, r]);
  return ue(() => {
    r.dataRef.current.floatingContext = C;
    const y = h == null ? void 0 : h.nodesRef.current.find(($) => $.id === t);
    y && (y.context = C);
  }), g.useMemo(() => ({
    ...a,
    context: C,
    refs: p,
    elements: E
  }), [a, p, E, C]);
}
function Sr(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    dataRef: l,
    elements: i
  } = e, {
    enabled: s = !0,
    visibleOnly: u = !0
  } = t, f = g.useRef(!1), c = g.useRef(), v = g.useRef(!0);
  g.useEffect(() => {
    if (!s) return;
    const a = Bt(i.domReference);
    function d() {
      !n && ke(i.domReference) && i.domReference === Ze(re(i.domReference)) && (f.current = !0);
    }
    function m() {
      v.current = !0;
    }
    return a.addEventListener("blur", d), a.addEventListener("keydown", m, !0), () => {
      a.removeEventListener("blur", d), a.removeEventListener("keydown", m, !0);
    };
  }, [i.domReference, n, s]), g.useEffect(() => {
    if (!s) return;
    function a(d) {
      let {
        reason: m
      } = d;
      (m === "reference-press" || m === "escape-key") && (f.current = !0);
    }
    return o.on("openchange", a), () => {
      o.off("openchange", a);
    };
  }, [o, s]), g.useEffect(() => () => {
    clearTimeout(c.current);
  }, []);
  const h = g.useMemo(() => ({
    onPointerDown(a) {
      En(a.nativeEvent) || (v.current = !1);
    },
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(a) {
      if (f.current) return;
      const d = ie(a.nativeEvent);
      if (u && W(d))
        try {
          if (bn() && wn()) throw Error();
          if (!d.matches(":focus-visible")) return;
        } catch {
          if (!v.current && !Pn(d))
            return;
        }
      r(!0, a.nativeEvent, "focus");
    },
    onBlur(a) {
      f.current = !1;
      const d = a.relatedTarget, m = a.nativeEvent, p = W(d) && d.hasAttribute(Ye("focus-guard")) && d.getAttribute("data-type") === "outside";
      c.current = window.setTimeout(() => {
        var E;
        const C = Ze(i.domReference ? i.domReference.ownerDocument : document);
        !d && C === i.domReference || he((E = l.current.floatingContext) == null ? void 0 : E.refs.floating.current, C) || he(i.domReference, C) || p || r(!1, m, "focus");
      });
    }
  }), [l, i.domReference, r, u]);
  return g.useMemo(() => s ? {
    reference: h
  } : {}, [s, h]);
}
const lt = "active", it = "selected";
function Fe(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let l = e;
  if (o && e) {
    const {
      [lt]: i,
      [it]: s,
      ...u
    } = e;
    l = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...l,
    ...t.map((i) => {
      const s = i ? i[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((i, s) => (s && Object.entries(s).forEach((u) => {
      let [f, c] = u;
      if (!(o && [lt, it].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof c == "function") {
            var v;
            (v = r.get(f)) == null || v.push(c), i[f] = function() {
              for (var h, a = arguments.length, d = new Array(a), m = 0; m < a; m++)
                d[m] = arguments[m];
              return (h = r.get(f)) == null ? void 0 : h.map((p) => p(...d)).find((p) => p !== void 0);
            };
          }
        } else
          i[f] = c;
    }), i), {})
  };
}
function Wn(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = g.useCallback(
    (s) => Fe(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), l = g.useCallback(
    (s) => Fe(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = g.useCallback(
    (s) => Fe(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return g.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: l,
    getItemProps: i
  }), [o, l, i]);
}
const Bn = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Fr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: r,
    floatingId: o
  } = e, {
    enabled: l = !0,
    role: i = "dialog"
  } = t, s = (n = Bn.get(i)) != null ? n : i, u = Et(), c = Be() != null, v = g.useMemo(() => s === "tooltip" || i === "label" ? {
    ["aria-" + (i === "label" ? "labelledby" : "describedby")]: r ? o : void 0
  } : {
    "aria-expanded": r ? "true" : "false",
    "aria-haspopup": s === "alertdialog" ? "dialog" : s,
    "aria-controls": r ? o : void 0,
    ...s === "listbox" && {
      role: "combobox"
    },
    ...s === "menu" && {
      id: u
    },
    ...s === "menu" && c && {
      role: "menuitem"
    },
    ...i === "select" && {
      "aria-autocomplete": "none"
    },
    ...i === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [s, o, c, r, u, i]), h = g.useMemo(() => {
    const d = {
      id: o,
      ...s && {
        role: s
      }
    };
    return s === "tooltip" || i === "label" ? d : {
      ...d,
      ...s === "menu" && {
        "aria-labelledby": u
      }
    };
  }, [s, o, u, i]), a = g.useCallback((d) => {
    let {
      active: m,
      selected: p
    } = d;
    const E = {
      role: "option",
      ...m && {
        id: o + "-option"
      }
    };
    switch (i) {
      case "select":
        return {
          ...E,
          "aria-selected": m && p
        };
      case "combobox":
        return {
          ...E,
          ...m && {
            "aria-selected": !0
          }
        };
    }
    return {};
  }, [o, i]);
  return g.useMemo(() => l ? {
    reference: v,
    floating: h,
    item: a
  } : {}, [l, v, h, a]);
}
function st(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const Vn = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: l = 0,
      index: i = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: u = 0,
      scrollRef: f,
      ...c
    } = Kt(e, t), {
      rects: v,
      elements: {
        floating: h
      }
    } = t, a = n.current[i];
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || Sn('`placement` side must be "bottom" when using the `inner`', "middleware.")), !a)
      return {};
    const d = {
      ...t,
      ...await ft(-a.offsetTop - h.clientTop - v.reference.height / 2 - a.offsetHeight / 2 - l).fn(t)
    }, m = (f == null ? void 0 : f.current) || h, p = await Me(st(d, m.scrollHeight), c), E = await Me(d, {
      ...c,
      elementContext: "reference"
    }), C = Math.max(0, p.top), y = d.y + C, $ = Math.max(0, m.scrollHeight - C - Math.max(0, p.bottom));
    return m.style.maxHeight = $ + "px", m.scrollTop = C, o && (m.offsetHeight < a.offsetHeight * Math.min(s, n.current.length - 1) - 1 || E.top >= -u || E.bottom >= -u ? ve.flushSync(() => o(!0)) : ve.flushSync(() => o(!1))), r && (r.current = await Me(st({
      ...d,
      y
    }, m.offsetHeight), c)), {
      y
    };
  }
});
function Yn(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: l,
    scrollRef: i,
    onChange: s
  } = t, u = J(s), f = g.useRef(!1), c = g.useRef(null), v = g.useRef(null);
  g.useEffect(() => {
    if (!o) return;
    function a(m) {
      if (m.ctrlKey || !d || l.current == null)
        return;
      const p = m.deltaY, E = l.current.top >= -0.5, C = l.current.bottom >= -0.5, y = d.scrollHeight - d.clientHeight, $ = p < 0 ? -1 : 1, L = p < 0 ? "max" : "min";
      d.scrollHeight <= d.clientHeight || (!E && p > 0 || !C && p < 0 ? (m.preventDefault(), ve.flushSync(() => {
        u((N) => N + Math[L](p, y * $));
      })) : /firefox/i.test(We()) && (d.scrollTop += p));
    }
    const d = (i == null ? void 0 : i.current) || r.floating;
    if (n && d)
      return d.addEventListener("wheel", a), requestAnimationFrame(() => {
        c.current = d.scrollTop, l.current != null && (v.current = {
          ...l.current
        });
      }), () => {
        c.current = null, v.current = null, d.removeEventListener("wheel", a);
      };
  }, [o, n, r.floating, l, i, u]);
  const h = g.useMemo(() => ({
    onKeyDown() {
      f.current = !0;
    },
    onWheel() {
      f.current = !1;
    },
    onPointerMove() {
      f.current = !1;
    },
    onScroll() {
      const a = (i == null ? void 0 : i.current) || r.floating;
      if (!(!l.current || !a || !f.current)) {
        if (c.current !== null) {
          const d = a.scrollTop - c.current;
          (l.current.bottom < -0.5 && d < -1 || l.current.top < -0.5 && d > 1) && ve.flushSync(() => u((m) => m + d));
        }
        requestAnimationFrame(() => {
          c.current = a.scrollTop;
        });
      }
    }
  }), [r.floating, u, l, i]);
  return g.useMemo(() => o ? {
    floating: h
  } : {}, [o, h]);
}
let fe = Z({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
fe.displayName = "FloatingContext";
let Ke = Z(null);
Ke.displayName = "PlacementContext";
function Dr(e) {
  return z(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Ar() {
  return q(fe).setReference;
}
function Hr() {
  return q(fe).getReferenceProps;
}
function Ir() {
  let { getFloatingProps: e, slot: t } = q(fe);
  return ee((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Nr(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = q(Ke), n = z(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (o, l) => l instanceof HTMLElement ? l.outerHTML : l : void 0)]);
  H(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = q(fe);
  return z(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let ut = 4;
function kr({ children: e, enabled: t = !0 }) {
  let [n, r] = U(null), [o, l] = U(0), i = A(null), [s, u] = U(null);
  Kn(s);
  let f = t && n !== null && s !== null, { to: c = "bottom", gap: v = 0, offset: h = 0, padding: a = 0, inner: d } = Un(n, s), [m, p = "center"] = c.split(" ");
  H(() => {
    f && l(0);
  }, [f]);
  let { refs: E, floatingStyles: C, context: y } = _n({ open: f, placement: m === "selection" ? p === "center" ? "bottom" : `bottom-${p}` : p === "center" ? `${m}` : `${m}-${p}`, strategy: "absolute", transform: !1, middleware: [ft({ mainAxis: m === "selection" ? 0 : v, crossAxis: h }), Ut({ padding: a }), m !== "selection" && jt({ padding: a }), m === "selection" && d ? Vn({ ...d, padding: a, overflowRef: i, offset: o, minItemsVisible: ut, referenceOverflowThreshold: a, onFallbackChange(S) {
    var D, _;
    if (!S) return;
    let T = y.elements.floating;
    if (!T) return;
    let w = parseFloat(getComputedStyle(T).scrollPaddingBottom) || 0, b = Math.min(ut, T.childElementCount), x = 0, R = 0;
    for (let F of (_ = (D = y.elements.floating) == null ? void 0 : D.childNodes) != null ? _ : []) if (F instanceof HTMLElement) {
      let P = F.offsetTop, M = P + F.clientHeight + w, G = T.scrollTop, j = G + T.clientHeight;
      if (P >= G && M <= j) b--;
      else {
        R = Math.max(0, Math.min(M, j) - Math.max(P, G)), x = F.clientHeight;
        break;
      }
    }
    b >= 1 && l((F) => {
      let P = x * b - R + w;
      return F >= P ? F : P;
    });
  } }) : null, Xt({ padding: a, apply({ availableWidth: S, availableHeight: D, elements: _ }) {
    Object.assign(_.floating.style, { overflow: "auto", maxWidth: `${S}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${D}px)` });
  } })].filter(Boolean), whileElementsMounted: qt }), [$ = m, L = p] = y.placement.split("-");
  m === "selection" && ($ = "selection");
  let N = z(() => ({ anchor: [$, L].filter(Boolean).join(" ") }), [$, L]), V = Yn(y, { overflowRef: i, onChange: l }), { getReferenceProps: O, getFloatingProps: Y } = Wn([V]), k = X((S) => {
    u(S), E.setFloating(S);
  });
  return g.createElement(Ke.Provider, { value: r }, g.createElement(fe.Provider, { value: { setFloating: k, setReference: E.setReference, styles: C, getReferenceProps: O, getFloatingProps: Y, slot: N } }, e));
}
function Kn(e) {
  H(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let o = parseInt(n);
      isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function Un(e, t) {
  var n, r, o;
  let l = De((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), i = De((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = De((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: l, offset: i, padding: s };
}
function De(e, t, n = void 0) {
  let r = Re(), o = X((u, f) => {
    if (u == null) return [n, null];
    if (typeof u == "number") return [u, null];
    if (typeof u == "string") {
      if (!f) return [n, null];
      let c = at(u, f);
      return [c, (v) => {
        let h = bt(u);
        {
          let a = h.map((d) => window.getComputedStyle(f).getPropertyValue(d));
          r.requestAnimationFrame(function d() {
            r.nextFrame(d);
            let m = !1;
            for (let [E, C] of h.entries()) {
              let y = window.getComputedStyle(f).getPropertyValue(C);
              if (a[E] !== y) {
                a[E] = y, m = !0;
                break;
              }
            }
            if (!m) return;
            let p = at(u, f);
            c !== p && (v(p), c = p);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), l = z(() => o(e, t)[0], [e, t]), [i = l, s] = U();
  return H(() => {
    let [u, f] = o(e, t);
    if (s(u), !!f) return f(s);
  }, [e, t]), i;
}
function bt(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...bt(o)] : [r];
  }
  return [];
}
function at(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function _r({ children: e, freeze: t }) {
  let n = jn(t, e);
  return B.createElement(B.Fragment, null, n);
}
function jn(e, t) {
  let [n, r] = U(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Ue = Z(null);
Ue.displayName = "OpenClosedContext";
var oe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(oe || {});
function wt() {
  return q(Ue);
}
function Xn({ value: e, children: t }) {
  return B.createElement(Ue.Provider, { value: e }, t);
}
function qn(e) {
  throw new Error("Unexpected object: " + e);
}
var Gn = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Gn || {});
function Wr(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let l = 0; l < n.length; ++l) if (!t.resolveDisabled(n[l], l, n)) return l;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let l = o - 1; l >= 0; --l) if (!t.resolveDisabled(n[l], l, n)) return l;
      return r;
    }
    case 2: {
      for (let l = o + 1; l < n.length; ++l) if (!t.resolveDisabled(n[l], l, n)) return l;
      return r;
    }
    case 3: {
      for (let l = n.length - 1; l >= 0; --l) if (!t.resolveDisabled(n[l], l, n)) return l;
      return r;
    }
    case 4: {
      for (let l = 0; l < n.length; ++l) if (t.resolveId(n[l], l, n) === e.id) return l;
      return r;
    }
    case 5:
      return null;
    default:
      qn(e);
  }
}
function Jn(e) {
  let t = X(e), n = A(!1);
  Q(() => (n.current = !1, () => {
    n.current = !0, At(() => {
      n.current && t();
    });
  }), [t]);
}
function zn() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in g ? ((t) => t.useSyncExternalStore)(g)(() => () => {
  }, () => !1, () => !e) : !1;
}
function je() {
  let e = zn(), [t, n] = g.useState(ge.isHandoffComplete);
  return t && ge.isHandoffComplete === !1 && n(!1), g.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), g.useEffect(() => ge.handoff(), []), e ? !1 : t;
}
let Qn = Z(!1);
function Zn() {
  return q(Qn);
}
function er(e) {
  let t = Zn(), n = q(Rt), r = pt(e), [o, l] = U(() => {
    var i;
    if (!t && n !== null) return (i = n.current) != null ? i : null;
    if (ge.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let u = r.createElement("div");
    return u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u);
  });
  return Q(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), Q(() => {
    t || n !== null && l(n.current);
  }, [n, l, t]), o;
}
let yt = se, tr = ce(function(e, t) {
  let n = e, r = A(null), o = we(Ht((c) => {
    r.current = c;
  }), t), l = pt(r), i = er(r), [s] = U(() => {
    var c;
    return ge.isServer ? null : (c = l == null ? void 0 : l.createElement("div")) != null ? c : null;
  }), u = q(lr), f = je();
  return H(() => {
    !i || !s || i.contains(s) || (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
  }, [i, s]), H(() => {
    if (s && u) return u.register(s);
  }, [u, s]), Jn(() => {
    var c;
    !i || !s || (s instanceof Node && i.contains(s) && i.removeChild(s), i.childNodes.length <= 0 && ((c = i.parentElement) == null || c.removeChild(i)));
  }), f ? !i || !s ? null : ve.createPortal(ye({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: yt, name: "Portal" }), s) : null;
});
function nr(e, t) {
  let n = we(t), { enabled: r = !0, ...o } = e;
  return r ? B.createElement(tr, { ...o, ref: n }) : ye({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: yt, name: "Portal" });
}
let rr = se, Rt = Z(null);
function or(e, t) {
  let { target: n, ...r } = e, o = { ref: we(t) };
  return B.createElement(Rt.Provider, { value: n }, ye({ ourProps: o, theirProps: r, defaultTag: rr, name: "Popover.Group" }));
}
let lr = Z(null), ir = ce(nr), sr = ce(or), Br = Object.assign(ir, { Group: sr });
function ur() {
  let e = A(!1);
  return H(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Ct(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Pt) !== se || B.Children.count(e.children) === 1;
}
let Ce = Z(null);
Ce.displayName = "TransitionContext";
var ar = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(ar || {});
function cr() {
  let e = q(Ce);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function fr() {
  let e = q(xe);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let xe = Z(null);
xe.displayName = "NestingContext";
function Pe(e) {
  return "children" in e ? Pe(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function xt(e, t) {
  let n = be(e), r = A([]), o = ur(), l = Re(), i = X((a, d = te.Hidden) => {
    let m = r.current.findIndex(({ el: p }) => p === a);
    m !== -1 && (ct(d, { [te.Unmount]() {
      r.current.splice(m, 1);
    }, [te.Hidden]() {
      r.current[m].state = "hidden";
    } }), l.microTask(() => {
      var p;
      !Pe(r) && o.current && ((p = n.current) == null || p.call(n));
    }));
  }), s = X((a) => {
    let d = r.current.find(({ el: m }) => m === a);
    return d ? d.state !== "visible" && (d.state = "visible") : r.current.push({ el: a, state: "visible" }), () => i(a, te.Unmount);
  }), u = A([]), f = A(Promise.resolve()), c = A({ enter: [], leave: [] }), v = X((a, d, m) => {
    u.current.splice(0), t && (t.chains.current[d] = t.chains.current[d].filter(([p]) => p !== a)), t == null || t.chains.current[d].push([a, new Promise((p) => {
      u.current.push(p);
    })]), t == null || t.chains.current[d].push([a, new Promise((p) => {
      Promise.all(c.current[d].map(([E, C]) => C)).then(() => p());
    })]), d === "enter" ? f.current = f.current.then(() => t == null ? void 0 : t.wait.current).then(() => m(d)) : m(d);
  }), h = X((a, d, m) => {
    Promise.all(c.current[d].splice(0).map(([p, E]) => E)).then(() => {
      var p;
      (p = u.current.shift()) == null || p();
    }).then(() => m(d));
  });
  return z(() => ({ children: r, register: s, unregister: i, onStart: v, onStop: h, wait: f, chains: c }), [s, i, r, v, h, c, f]);
}
let Pt = se, Tt = It.RenderStrategy;
function dr(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: l, afterEnter: i, beforeLeave: s, afterLeave: u, enter: f, enterFrom: c, enterTo: v, entered: h, leave: a, leaveFrom: d, leaveTo: m, ...p } = e, E = A(null), C = Ct(e), y = we(...C ? [E, t] : t === null ? [] : [t]), $ = (n = p.unmount) == null || n ? te.Unmount : te.Hidden, { show: L, appear: N, initial: V } = cr(), [O, Y] = U(L ? "visible" : "hidden"), k = fr(), { register: S, unregister: D } = k;
  H(() => S(E), [S, E]), H(() => {
    if ($ === te.Hidden && E.current) {
      if (L && O !== "visible") {
        Y("visible");
        return;
      }
      return ct(O, { hidden: () => D(E), visible: () => S(E) });
    }
  }, [O, E, S, D, L, $]);
  let _ = je();
  H(() => {
    if (C && _ && O === "visible" && E.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [E, O, _, C]);
  let T = V && !N, w = N && L && V, b = A(!1), x = xt(() => {
    b.current || (Y("hidden"), D(E));
  }, k), R = X((le) => {
    b.current = !0;
    let I = le ? "enter" : "leave";
    x.onStart(E, I, (K) => {
      K === "enter" ? l == null || l() : K === "leave" && (s == null || s());
    });
  }), F = X((le) => {
    let I = le ? "enter" : "leave";
    b.current = !1, x.onStop(E, I, (K) => {
      K === "enter" ? i == null || i() : K === "leave" && (u == null || u());
    }), I === "leave" && !Pe(x) && (Y("hidden"), D(E));
  });
  Q(() => {
    C && o || (R(L), F(L));
  }, [L, C, o]);
  let P = !(!o || !C || !_ || T), [, M] = gn(P, E, L, { start: R, end: F }), G = Nt({ ref: y, className: ((r = kt(p.className, w && f, w && c, M.enter && f, M.enter && M.closed && c, M.enter && !M.closed && v, M.leave && a, M.leave && !M.closed && d, M.leave && M.closed && m, !M.transition && L && h)) == null ? void 0 : r.trim()) || void 0, ...mn(M) }), j = 0;
  return O === "visible" && (j |= oe.Open), O === "hidden" && (j |= oe.Closed), M.enter && (j |= oe.Opening), M.leave && (j |= oe.Closing), B.createElement(xe.Provider, { value: x }, B.createElement(Xn, { value: j }, ye({ ourProps: G, theirProps: p, defaultTag: Pt, features: Tt, visible: O === "visible", name: "Transition.Child" })));
}
function mr(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...l } = e, i = A(null), s = Ct(e), u = we(...s ? [i, t] : t === null ? [] : [t]);
  je();
  let f = wt();
  if (n === void 0 && f !== null && (n = (f & oe.Open) === oe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, v] = U(n ? "visible" : "hidden"), h = xt(() => {
    n || v("hidden");
  }), [a, d] = U(!0), m = A([n]);
  H(() => {
    a !== !1 && m.current[m.current.length - 1] !== n && (m.current.push(n), d(!1));
  }, [m, n]);
  let p = z(() => ({ show: n, appear: r, initial: a }), [n, r, a]);
  en(n, i, () => v("hidden")), H(() => {
    n ? v("visible") : !Pe(h) && i.current !== null && v("hidden");
  }, [n, h]);
  let E = { unmount: o }, C = X(() => {
    var $;
    a && d(!1), ($ = e.beforeEnter) == null || $.call(e);
  }), y = X(() => {
    var $;
    a && d(!1), ($ = e.beforeLeave) == null || $.call(e);
  });
  return B.createElement(xe.Provider, { value: h }, B.createElement(Ce.Provider, { value: p }, ye({ ourProps: { ...E, as: se, children: B.createElement(Mt, { ref: u, ...E, ...l, beforeEnter: C, beforeLeave: y }) }, theirProps: {}, defaultTag: se, features: Tt, visible: c === "visible", name: "Transition" })));
}
function gr(e, t) {
  let n = q(Ce) !== null, r = wt() !== null;
  return B.createElement(B.Fragment, null, !n && r ? B.createElement(Ie, { ref: t, ...e }) : B.createElement(Mt, { ref: t, ...e }));
}
let Ie = ce(mr), Mt = ce(dr), pr = ce(gr), Vr = Object.assign(Ie, { Child: pr, Root: Ie });
export {
  mn as A,
  nn as B,
  Pr as F,
  Nr as R,
  Tr as T,
  gn as V,
  Vr as X,
  Lr as a,
  Sr as b,
  Or as c,
  Fr as d,
  Wn as e,
  Xn as f,
  Hr as g,
  wt as h,
  oe as i,
  Mr as j,
  xr as k,
  jn as l,
  en as m,
  pt as n,
  Ir as o,
  Rr as p,
  $r as q,
  Gn as r,
  Wr as s,
  Br as t,
  _n as u,
  kr as v,
  yr as w,
  Dr as x,
  Ar as y,
  _r as z
};
