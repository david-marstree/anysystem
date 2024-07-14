import h, { useRef as $, useCallback as E, useEffect as F, useState as y, useMemo as S, useLayoutEffect as Se, createContext as k, useContext as M, forwardRef as xe, Fragment as B, isValidElement as Me, cloneElement as He, createElement as ke, useId as ae } from "react";
import { r as Ae } from "./index-DsprzSCj.js";
import { G as X } from "./iconBase-Bipuk9tK.js";
const ue = typeof document < "u" ? h.useLayoutEffect : () => {
};
function Oe(e) {
  const t = $(null);
  return ue(() => {
    t.current = e;
  }, [
    e
  ]), E((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const A = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, P = (e) => e && "window" in e && e.window === e ? e : A(e).defaultView || window;
function Ne(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Ce(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function De() {
  return Ce(/^Mac/i);
}
function Ie() {
  return Ne(/Android/i);
}
function je(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Ie() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class We {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, n) {
    this.nativeEvent = n, this.target = n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget, this.bubbles = n.bubbles, this.cancelable = n.cancelable, this.defaultPrevented = n.defaultPrevented, this.eventPhase = n.eventPhase, this.isTrusted = n.isTrusted, this.timeStamp = n.timeStamp, this.type = t;
  }
}
function le(e) {
  let t = $({
    isFocused: !1,
    observer: null
  });
  ue(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Oe((r) => {
    e == null || e(r);
  });
  return E((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (a) => {
        t.current.isFocused = !1, o.disabled && n(new We("blur", a)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var a;
          (a = t.current.observer) === null || a === void 0 || a.disconnect();
          let l = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(o, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
function Be(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = E((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), o && o(!1), !0;
  }, [
    r,
    o
  ]), a = le(i), l = E((u) => {
    const c = A(u.target);
    u.target === u.currentTarget && c.activeElement === u.target && (n && n(u), o && o(!0), a(u));
  }, [
    o,
    n,
    a
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? l : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
let O = null, K = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Map(), x = !1, G = !1;
const _e = {
  Tab: !0,
  Escape: !0
};
function Y(e, t) {
  for (let n of K) n(e, t);
}
function Ue(e) {
  return !(e.metaKey || !De() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function D(e) {
  x = !0, Ue(e) && (O = "keyboard", Y("keyboard", e));
}
function b(e) {
  O = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (x = !0, Y("pointer", e));
}
function se(e) {
  je(e) && (x = !0, O = "virtual");
}
function ce(e) {
  e.target === window || e.target === document || (!x && !G && (O = "virtual", Y("virtual", e)), x = !1, G = !1);
}
function de() {
  x = !1, G = !0;
}
function V(e) {
  if (typeof window > "u" || H.get(P(e))) return;
  const t = P(e), n = A(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    x = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", D, !0), n.addEventListener("keyup", D, !0), n.addEventListener("click", se, !0), t.addEventListener("focus", ce, !0), t.addEventListener("blur", de, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", b, !0), n.addEventListener("pointermove", b, !0), n.addEventListener("pointerup", b, !0)) : (n.addEventListener("mousedown", b, !0), n.addEventListener("mousemove", b, !0), n.addEventListener("mouseup", b, !0)), t.addEventListener("beforeunload", () => {
    fe(e);
  }, {
    once: !0
  }), H.set(t, {
    focus: r
  });
}
const fe = (e, t) => {
  const n = P(e), r = A(e);
  t && r.removeEventListener("DOMContentLoaded", t), H.has(n) && (n.HTMLElement.prototype.focus = H.get(n).focus, r.removeEventListener("keydown", D, !0), r.removeEventListener("keyup", D, !0), r.removeEventListener("click", se, !0), n.removeEventListener("focus", ce, !0), n.removeEventListener("blur", de, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", b, !0), r.removeEventListener("pointermove", b, !0), r.removeEventListener("pointerup", b, !0)) : (r.removeEventListener("mousedown", b, !0), r.removeEventListener("mousemove", b, !0), r.removeEventListener("mouseup", b, !0)), H.delete(n));
};
function Re(e) {
  const t = A(e);
  let n;
  return t.readyState !== "loading" ? V(e) : (n = () => {
    V(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => fe(e, n);
}
typeof document < "u" && Re();
function pe() {
  return O !== "pointer";
}
const Ke = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ge(e, t, n) {
  var r;
  const o = typeof window < "u" ? P(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? P(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, a = typeof window < "u" ? P(n == null ? void 0 : n.target).HTMLElement : HTMLElement, l = typeof window < "u" ? P(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !Ke.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof a && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof l && !_e[n.key]);
}
function Ve(e, t, n) {
  V(), F(() => {
    let r = (o, i) => {
      Ge(!!(n != null && n.isTextInput), o, i) && e(pe());
    };
    return K.add(r), () => {
      K.delete(r);
    };
  }, t);
}
function qe(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = $({
    isFocusWithin: !1
  }), a = E((c) => {
    i.current.isFocusWithin && !c.currentTarget.contains(c.relatedTarget) && (i.current.isFocusWithin = !1, n && n(c), o && o(!1));
  }, [
    n,
    o,
    i
  ]), l = le(a), u = E((c) => {
    !i.current.isFocusWithin && document.activeElement === c.target && (r && r(c), o && o(!0), i.current.isFocusWithin = !0, l(c));
  }, [
    r,
    o,
    l
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: u,
      onBlur: a
    }
  };
}
let I = !1, _ = 0;
function q() {
  I = !0, setTimeout(() => {
    I = !1;
  }, 50);
}
function oe(e) {
  e.pointerType === "touch" && q();
}
function Ze() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", oe) : document.addEventListener("touchend", q), _++, () => {
      _--, !(_ > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", oe) : document.removeEventListener("touchend", q));
    };
}
function It(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, a] = y(!1), l = $({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  F(Ze, []);
  let { hoverProps: u, triggerHoverEnd: c } = S(() => {
    let d = (s, v) => {
      if (l.pointerType = v, o || v === "touch" || l.isHovered || !s.currentTarget.contains(s.target)) return;
      l.isHovered = !0;
      let m = s.currentTarget;
      l.target = m, t && t({
        type: "hoverstart",
        target: m,
        pointerType: v
      }), n && n(!0), a(!0);
    }, f = (s, v) => {
      if (l.pointerType = "", l.target = null, v === "touch" || !l.isHovered) return;
      l.isHovered = !1;
      let m = s.currentTarget;
      r && r({
        type: "hoverend",
        target: m,
        pointerType: v
      }), n && n(!1), a(!1);
    }, p = {};
    return typeof PointerEvent < "u" ? (p.onPointerEnter = (s) => {
      I && s.pointerType === "mouse" || d(s, s.pointerType);
    }, p.onPointerLeave = (s) => {
      !o && s.currentTarget.contains(s.target) && f(s, s.pointerType);
    }) : (p.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (s) => {
      !l.ignoreEmulatedMouseEvents && !I && d(s, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (s) => {
      !o && s.currentTarget.contains(s.target) && f(s, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: f
    };
  }, [
    t,
    n,
    r,
    o,
    l
  ]);
  return F(() => {
    o && c({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function jt(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = $({
    isFocused: !1,
    isFocusVisible: t || pe()
  }), [i, a] = y(!1), [l, u] = y(() => o.current.isFocused && o.current.isFocusVisible), c = E(() => u(o.current.isFocused && o.current.isFocusVisible), []), d = E((s) => {
    o.current.isFocused = s, a(s), c();
  }, [
    c
  ]);
  Ve((s) => {
    o.current.isFocusVisible = s, c();
  }, [], {
    isTextInput: n
  });
  let { focusProps: f } = Be({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: p } = qe({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: i,
    isFocusVisible: l,
    focusProps: r ? p : f
  };
}
var Xe = Object.defineProperty, Ye = (e, t, n) => t in e ? Xe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, U = (e, t, n) => (Ye(e, typeof t != "symbol" ? t + "" : t, n), n);
let ze = class {
  constructor() {
    U(this, "current", this.detect()), U(this, "handoffState", "pending"), U(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, ve = new ze();
function Je(e) {
  return ve.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Qe(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function me() {
  let e = [], t = { addEventListener(n, r, o, i) {
    return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Qe(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, o) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = me();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let o of e.splice(r, 1)) o();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function et() {
  let [e] = y(me);
  return F(() => () => e.dispose(), [e]), e;
}
let z = (e, t) => {
  ve.isServer ? F(e, t) : Se(e, t);
};
function tt(e) {
  let t = $(e);
  return z(() => {
    t.current = e;
  }, [e]), t;
}
let N = function(e) {
  let t = tt(e);
  return h.useCallback((...n) => t.current(...n), [t]);
}, nt = k(void 0);
function be() {
  return M(nt);
}
function ie(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function J(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, J), r;
}
var rt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(rt || {}), ot = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ot || {});
function Q({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: a, mergeRefs: l }) {
  l = l ?? it;
  let u = he(t, e);
  if (i) return C(u, n, r, a, l);
  let c = o ?? 0;
  if (c & 2) {
    let { static: d = !1, ...f } = u;
    if (d) return C(f, n, r, a, l);
  }
  if (c & 1) {
    let { unmount: d = !0, ...f } = u;
    return J(d ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return C({ ...f, hidden: !0, style: { display: "none" } }, n, r, a, l);
    } });
  }
  return C(u, n, r, a, l);
}
function C(e, t = {}, n, r, o) {
  let { as: i = n, children: a, refName: l = "ref", ...u } = R(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [l]: e.ref } : {}, d = typeof a == "function" ? a(t) : a;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t)), u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
  let f = {};
  if (t) {
    let p = !1, s = [];
    for (let [v, m] of Object.entries(t)) typeof m == "boolean" && (p = !0), m === !0 && s.push(v.replace(/([A-Z])/g, (w) => `-${w.toLowerCase()}`));
    if (p) {
      f["data-headlessui-state"] = s.join(" ");
      for (let v of s) f[`data-${v}`] = "";
    }
  }
  if (i === B && (Object.keys(L(u)).length > 0 || Object.keys(L(f)).length > 0)) if (!Me(d) || Array.isArray(d) && d.length > 1) {
    if (Object.keys(L(u)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(L(u)).concat(Object.keys(L(f))).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
  } else {
    let p = d.props, s = p == null ? void 0 : p.className, v = typeof s == "function" ? (...T) => ie(s(...T), u.className) : ie(s, u.className), m = v ? { className: v } : {}, w = he(d.props, L(R(u, ["ref"])));
    for (let T in f) T in w && delete f[T];
    return He(d, Object.assign({}, w, f, c, { ref: o(d.ref, c.ref) }, m));
  }
  return ke(i, Object.assign({}, R(u, ["ref"]), i !== B && c, i !== B && f), d);
}
function it(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function he(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let a = n[r];
    for (let l of a) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      l(o, ...i);
    }
  } });
  return t;
}
function Bt(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let a of i) a == null || a(...o);
  } });
  return t;
}
function ee(e) {
  var t;
  return Object.assign(xe(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function L(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function R(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function _t(e, t, n) {
  let [r, o] = y(n), i = e !== void 0, a = $(i), l = $(!1), u = $(!1);
  return i && !a.current && !l.current ? (l.current = !0, a.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && a.current && !u.current && (u.current = !0, a.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, N((c) => (i || o(c), t == null ? void 0 : t(c)))];
}
function Ut(e) {
  let [t] = y(e);
  return t;
}
function ge(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Ee(n, $e(t, r), o);
  return n;
}
function $e(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ee(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Ee(e, $e(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : ge(n, t, e);
}
function Rt(e) {
  var t, n;
  let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (r) {
    for (let o of r.elements) if (o !== e && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
      o.click();
      return;
    }
    (n = r.requestSubmit) == null || n.call(r);
  }
}
let at = "span";
var te = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(te || {});
function ut(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Q({ ourProps: i, theirProps: o, slot: {}, defaultTag: at, name: "Hidden" });
}
let ye = ee(ut), lt = k(null);
function st({ children: e }) {
  let t = M(lt);
  if (!t) return h.createElement(h.Fragment, null, e);
  let { target: n } = t;
  return n ? Ae.createPortal(h.createElement(h.Fragment, null, e), n) : null;
}
function Kt({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, a] = y(null), l = et();
  return F(() => {
    if (r && i) return l.addEventListener(i, "reset", r);
  }, [i, t, r]), h.createElement(st, null, h.createElement(ct, { setForm: a, formId: t }), ge(e).map(([u, c]) => h.createElement(ye, { features: te.Hidden, ...L({ key: u, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: u, value: c, ...o }) })));
}
function ct({ setForm: e, formId: t }) {
  return F(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : h.createElement(ye, { features: te.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let dt = k(void 0);
function ft() {
  return M(dt);
}
function Gt(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && pt(n) ? !1 : r;
}
function pt(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let we = Symbol();
function Vt(e, t = !0) {
  return Object.assign(e, { [we]: t });
}
function Te(...e) {
  let t = $(e);
  F(() => {
    t.current = e;
  }, [e]);
  let n = N((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[we])) ? void 0 : n;
}
let j = k(null);
j.displayName = "DescriptionContext";
function Fe() {
  let e = M(j);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Fe), t;
  }
  return e;
}
function qt() {
  var e, t;
  return (t = (e = M(j)) == null ? void 0 : e.value) != null ? t : void 0;
}
function Zt() {
  let [e, t] = y([]);
  return [e.length > 0 ? e.join(" ") : void 0, S(() => function(n) {
    let r = N((i) => (t((a) => [...a, i]), () => t((a) => {
      let l = a.slice(), u = l.indexOf(i);
      return u !== -1 && l.splice(u, 1), l;
    }))), o = S(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return h.createElement(j.Provider, { value: o }, n.children);
  }, [t])];
}
let vt = "p";
function mt(e, t) {
  let n = ae(), r = be(), { id: o = `headlessui-description-${n}`, ...i } = e, a = Fe(), l = Te(t);
  z(() => a.register(o), [o, a.register]);
  let u = r || !1, c = S(() => ({ ...a.slot, disabled: u }), [a.slot, u]), d = { ref: l, ...a.props, id: o };
  return Q({ ourProps: d, theirProps: i, slot: c, defaultTag: vt, name: a.name || "Description" });
}
let bt = ee(mt), Xt = Object.assign(bt, {});
var ht = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ht || {});
let W = k(null);
W.displayName = "LabelContext";
function Le() {
  let e = M(W);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Le), t;
  }
  return e;
}
function gt(e) {
  var t, n, r;
  let o = (n = (t = M(W)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Yt({ inherit: e = !1 } = {}) {
  let t = gt(), [n, r] = y([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, S(() => function(i) {
    let a = N((u) => (r((c) => [...c, u]), () => r((c) => {
      let d = c.slice(), f = d.indexOf(u);
      return f !== -1 && d.splice(f, 1), d;
    }))), l = S(() => ({ register: a, slot: i.slot, name: i.name, props: i.props, value: i.value }), [a, i.slot, i.name, i.props, i.value]);
    return h.createElement(W.Provider, { value: l }, i.children);
  }, [r])];
}
let $t = "label";
function Et(e, t) {
  var n;
  let r = ae(), o = Le(), i = ft(), a = be(), { id: l = `headlessui-label-${r}`, htmlFor: u = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c = !1, ...d } = e, f = Te(t);
  z(() => o.register(l), [l, o.register]);
  let p = N((w) => {
    let T = w.currentTarget;
    if (T instanceof HTMLLabelElement && w.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(w), T instanceof HTMLLabelElement) {
      let g = document.getElementById(T.htmlFor);
      if (g) {
        let ne = g.getAttribute("disabled");
        if (ne === "true" || ne === "") return;
        let re = g.getAttribute("aria-disabled");
        if (re === "true" || re === "") return;
        (g instanceof HTMLInputElement && (g.type === "radio" || g.type === "checkbox") || g.role === "radio" || g.role === "checkbox" || g.role === "switch") && g.click(), g.focus({ preventScroll: !0 });
      }
    }
  }), s = a || !1, v = S(() => ({ ...o.slot, disabled: s }), [o.slot, s]), m = { ref: f, ...o.props, id: l, htmlFor: u, onClick: p };
  return c && ("onClick" in m && (delete m.htmlFor, delete m.onClick), "onClick" in d && delete d.onClick), Q({ ourProps: m, theirProps: d, slot: v, defaultTag: u ? $t : "div", name: o.name || "Label" });
}
let yt = ee(Et), zt = Object.assign(yt, {});
function wt(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Jt(e = wt) {
  return E((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
let Z = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Tt = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Ft = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Ft || {}), Lt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Lt || {}), Pt = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Pt || {});
function Pe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Z)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function St(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Tt)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var xt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(xt || {});
function Qt(e, t = 0) {
  var n;
  return e === ((n = Je(e)) == null ? void 0 : n.body) ? !1 : J(t, { 0() {
    return e.matches(Z);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Z)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var Mt = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Mt || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let Ht = ["textarea", "input"].join(",");
function kt(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ht)) != null ? n : !1;
}
function At(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let a = o.compareDocumentPosition(i);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function en(e, t) {
  return Ot(Pe(), t, { relativeTo: e });
}
function Ot(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, a = Array.isArray(e) ? n ? At(e) : e : t & 64 ? St(e) : Pe(e);
  o.length > 0 && a.length > 1 && (a = a.filter((s) => !o.some((v) => v != null && "current" in v ? (v == null ? void 0 : v.current) === s : v === s))), r = r ?? i.activeElement;
  let l = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, a.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, a.indexOf(r)) + 1;
    if (t & 8) return a.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = a.length, p;
  do {
    if (d >= f || d + f <= 0) return 0;
    let s = u + d;
    if (t & 16) s = (s + f) % f;
    else {
      if (s < 0) return 3;
      if (s >= f) return 1;
    }
    p = a[s], p == null || p.focus(c), d += l;
  } while (p !== i.activeElement);
  return t & 6 && kt(p) && p.select(), 2;
}
function tn(e) {
  return X({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z", clipRule: "evenodd" }, child: [] }] })(e);
}
function nn(e) {
  return X({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z", clipRule: "evenodd" }, child: [] }] })(e);
}
function rn(e) {
  return X({ tag: "svg", attr: { fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }, child: [] }] })(e);
}
export {
  jt as $,
  Qt as A,
  Qe as B,
  ve as C,
  Bt as D,
  Vt as E,
  Ft as F,
  qt as G,
  nn as H,
  gt as I,
  L as J,
  zt as K,
  ie as L,
  rt as M,
  ot as O,
  Ot as P,
  _t as T,
  Zt as U,
  ee as W,
  At as _,
  be as a,
  Q as b,
  It as c,
  ft as d,
  J as e,
  Je as f,
  ht as g,
  Lt as h,
  tn as i,
  Kt as j,
  rn as k,
  Ut as l,
  et as m,
  z as n,
  N as o,
  Rt as p,
  me as q,
  Gt as r,
  tt as s,
  xt as t,
  Jt as u,
  en as v,
  Xt as w,
  Z as x,
  Te as y,
  Yt as z
};
