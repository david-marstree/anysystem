import * as g from "react";
import M, { useRef as F, useCallback as V, useEffect as K, useState as H, useMemo as J, useLayoutEffect as Nt, createContext as z, useContext as k, forwardRef as wn, Fragment as ne, isValidElement as $n, cloneElement as Tn, createElement as Pn, useId as it, useReducer as xn, useSyncExternalStore as Rn } from "react";
import { r as he } from "./index-DsprzSCj.js";
import { i as Ln, b as lt, c as Y, g as je, u as Cn, d as Fn, e as bt, h as Mn, j as Sn, k as On, o as It, l as We, s as An, f as Hn, m as Dn, a as Nn } from "./floating-ui.react-dom-xElE0hWP.js";
import { G as In } from "./iconBase-Bipuk9tK.js";
const kt = typeof document < "u" ? M.useLayoutEffect : () => {
};
function kn(e) {
  const t = F(null);
  return kt(() => {
    t.current = e;
  }, [
    e
  ]), V((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Le = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, se = (e) => e && "window" in e && e.window === e ? e : Le(e).defaultView || window;
function jn(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Wn(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function _n() {
  return Wn(/^Mac/i);
}
function Bn() {
  return jn(/Android/i);
}
function Vn(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Bn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class Kn {
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
function jt(e) {
  let t = F({
    isFocused: !1,
    observer: null
  });
  kt(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = kn((r) => {
    e == null || e(r);
  });
  return V((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        t.current.isFocused = !1, o.disabled && n(new Kn("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let u = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: u
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: u
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
function Un(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = V((s) => {
    if (s.target === s.currentTarget)
      return r && r(s), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = jt(i), u = V((s) => {
    const f = Le(s.target);
    s.target === s.currentTarget && f.activeElement === s.target && (n && n(s), o && o(!0), l(s));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? u : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
let Ce = null, Je = /* @__PURE__ */ new Set(), Te = /* @__PURE__ */ new Map(), me = !1, Ze = !1;
const Yn = {
  Tab: !0,
  Escape: !0
};
function ut(e, t) {
  for (let n of Je) n(e, t);
}
function Gn(e) {
  return !(e.metaKey || !_n() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Oe(e) {
  me = !0, Gn(e) && (Ce = "keyboard", ut("keyboard", e));
}
function Q(e) {
  Ce = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (me = !0, ut("pointer", e));
}
function Wt(e) {
  Vn(e) && (me = !0, Ce = "virtual");
}
function _t(e) {
  e.target === window || e.target === document || (!me && !Ze && (Ce = "virtual", ut("virtual", e)), me = !1, Ze = !1);
}
function Bt() {
  me = !1, Ze = !0;
}
function ze(e) {
  if (typeof window > "u" || Te.get(se(e))) return;
  const t = se(e), n = Le(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    me = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Oe, !0), n.addEventListener("keyup", Oe, !0), n.addEventListener("click", Wt, !0), t.addEventListener("focus", _t, !0), t.addEventListener("blur", Bt, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", Q, !0), n.addEventListener("pointermove", Q, !0), n.addEventListener("pointerup", Q, !0)) : (n.addEventListener("mousedown", Q, !0), n.addEventListener("mousemove", Q, !0), n.addEventListener("mouseup", Q, !0)), t.addEventListener("beforeunload", () => {
    Vt(e);
  }, {
    once: !0
  }), Te.set(t, {
    focus: r
  });
}
const Vt = (e, t) => {
  const n = se(e), r = Le(e);
  t && r.removeEventListener("DOMContentLoaded", t), Te.has(n) && (n.HTMLElement.prototype.focus = Te.get(n).focus, r.removeEventListener("keydown", Oe, !0), r.removeEventListener("keyup", Oe, !0), r.removeEventListener("click", Wt, !0), n.removeEventListener("focus", _t, !0), n.removeEventListener("blur", Bt, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", Q, !0), r.removeEventListener("pointermove", Q, !0), r.removeEventListener("pointerup", Q, !0)) : (r.removeEventListener("mousedown", Q, !0), r.removeEventListener("mousemove", Q, !0), r.removeEventListener("mouseup", Q, !0)), Te.delete(n));
};
function Xn(e) {
  const t = Le(e);
  let n;
  return t.readyState !== "loading" ? ze(e) : (n = () => {
    ze(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Vt(e, n);
}
typeof document < "u" && Xn();
function Kt() {
  return Ce !== "pointer";
}
const qn = /* @__PURE__ */ new Set([
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
function Jn(e, t, n) {
  var r;
  const o = typeof window < "u" ? se(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? se(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? se(n == null ? void 0 : n.target).HTMLElement : HTMLElement, u = typeof window < "u" ? se(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !qn.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof u && !Yn[n.key]);
}
function Zn(e, t, n) {
  ze(), K(() => {
    let r = (o, i) => {
      Jn(!!(n != null && n.isTextInput), o, i) && e(Kt());
    };
    return Je.add(r), () => {
      Je.delete(r);
    };
  }, t);
}
function zn(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = F({
    isFocusWithin: !1
  }), l = V((f) => {
    i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, n && n(f), o && o(!1));
  }, [
    n,
    o,
    i
  ]), u = jt(l), s = V((f) => {
    !i.current.isFocusWithin && document.activeElement === f.target && (r && r(f), o && o(!0), i.current.isFocusWithin = !0, u(f));
  }, [
    r,
    o,
    u
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: s,
      onBlur: l
    }
  };
}
let Ae = !1, _e = 0;
function Qe() {
  Ae = !0, setTimeout(() => {
    Ae = !1;
  }, 50);
}
function Et(e) {
  e.pointerType === "touch" && Qe();
}
function Qn() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", Et) : document.addEventListener("touchend", Qe), _e++, () => {
      _e--, !(_e > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Et) : document.removeEventListener("touchend", Qe));
    };
}
function li(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = H(!1), u = F({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  K(Qn, []);
  let { hoverProps: s, triggerHoverEnd: f } = J(() => {
    let c = (a, d) => {
      if (u.pointerType = d, o || d === "touch" || u.isHovered || !a.currentTarget.contains(a.target)) return;
      u.isHovered = !0;
      let m = a.currentTarget;
      u.target = m, t && t({
        type: "hoverstart",
        target: m,
        pointerType: d
      }), n && n(!0), l(!0);
    }, p = (a, d) => {
      if (u.pointerType = "", u.target = null, d === "touch" || !u.isHovered) return;
      u.isHovered = !1;
      let m = a.currentTarget;
      r && r({
        type: "hoverend",
        target: m,
        pointerType: d
      }), n && n(!1), l(!1);
    }, v = {};
    return typeof PointerEvent < "u" ? (v.onPointerEnter = (a) => {
      Ae && a.pointerType === "mouse" || c(a, a.pointerType);
    }, v.onPointerLeave = (a) => {
      !o && a.currentTarget.contains(a.target) && p(a, a.pointerType);
    }) : (v.onTouchStart = () => {
      u.ignoreEmulatedMouseEvents = !0;
    }, v.onMouseEnter = (a) => {
      !u.ignoreEmulatedMouseEvents && !Ae && c(a, "mouse"), u.ignoreEmulatedMouseEvents = !1;
    }, v.onMouseLeave = (a) => {
      !o && a.currentTarget.contains(a.target) && p(a, "mouse");
    }), {
      hoverProps: v,
      triggerHoverEnd: p
    };
  }, [
    t,
    n,
    r,
    o,
    u
  ]);
  return K(() => {
    o && f({
      currentTarget: u.target
    }, u.pointerType);
  }, [
    o
  ]), {
    hoverProps: s,
    isHovered: i
  };
}
function ui(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = F({
    isFocused: !1,
    isFocusVisible: t || Kt()
  }), [i, l] = H(!1), [u, s] = H(() => o.current.isFocused && o.current.isFocusVisible), f = V(() => s(o.current.isFocused && o.current.isFocusVisible), []), c = V((a) => {
    o.current.isFocused = a, l(a), f();
  }, [
    f
  ]);
  Zn((a) => {
    o.current.isFocusVisible = a, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = Un({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: v } = zn({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: u,
    focusProps: r ? v : p
  };
}
var er = Object.defineProperty, tr = (e, t, n) => t in e ? er(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Be = (e, t, n) => (tr(e, typeof t != "symbol" ? t + "" : t, n), n);
let nr = class {
  constructor() {
    Be(this, "current", this.detect()), Be(this, "handoffState", "pending"), Be(this, "currentId", 0);
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
}, de = new nr();
function He(e) {
  return de.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Ut(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function le() {
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
    return Ut(() => {
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
    let r = le();
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
function Fe() {
  let [e] = H(le);
  return K(() => () => e.dispose(), [e]), e;
}
let D = (e, t) => {
  de.isServer ? K(e, t) : Nt(e, t);
};
function Ee(e) {
  let t = F(e);
  return D(() => {
    t.current = e;
  }, [e]), t;
}
let W = function(e) {
  let t = Ee(e);
  return M.useCallback((...n) => t.current(...n), [t]);
};
function rr(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function or(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function ai({ disabled: e = !1 } = {}) {
  let t = F(null), [n, r] = H(!1), o = Fe(), i = W(() => {
    t.current = null, r(!1), o.dispose();
  }), l = W((u) => {
    if (o.dispose(), t.current === null) {
      t.current = u.currentTarget, r(!0);
      {
        let s = He(u.currentTarget);
        o.addEventListener(s, "pointerup", i, !1), o.addEventListener(s, "pointermove", (f) => {
          if (t.current) {
            let c = rr(f);
            r(or(c, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(s, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let ir = z(void 0);
function Yt() {
  return k(ir);
}
function et(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Me(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Me), r;
}
var Gt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Gt || {}), ie = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ie || {});
function ue({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: u }) {
  u = u ?? lr;
  let s = Xt(t, e);
  if (i) return Se(s, n, r, l, u);
  let f = o ?? 0;
  if (f & 2) {
    let { static: c = !1, ...p } = s;
    if (c) return Se(p, n, r, l, u);
  }
  if (f & 1) {
    let { unmount: c = !0, ...p } = s;
    return Me(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Se({ ...p, hidden: !0, style: { display: "none" } }, n, r, l, u);
    } });
  }
  return Se(s, n, r, l, u);
}
function Se(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: u = "ref", ...s } = Ve(e, ["unmount", "static"]), f = e.ref !== void 0 ? { [u]: e.ref } : {}, c = typeof l == "function" ? l(t) : l;
  "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(t)), s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
  let p = {};
  if (t) {
    let v = !1, a = [];
    for (let [d, m] of Object.entries(t)) typeof m == "boolean" && (v = !0), m === !0 && a.push(d.replace(/([A-Z])/g, (h) => `-${h.toLowerCase()}`));
    if (v) {
      p["data-headlessui-state"] = a.join(" ");
      for (let d of a) p[`data-${d}`] = "";
    }
  }
  if (i === ne && (Object.keys(oe(s)).length > 0 || Object.keys(oe(p)).length > 0)) if (!$n(c) || Array.isArray(c) && c.length > 1) {
    if (Object.keys(oe(s)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(oe(s)).concat(Object.keys(oe(p))).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
  } else {
    let v = c.props, a = v == null ? void 0 : v.className, d = typeof a == "function" ? (...b) => et(a(...b), s.className) : et(a, s.className), m = d ? { className: d } : {}, h = Xt(c.props, oe(Ve(s, ["ref"])));
    for (let b in p) b in h && delete p[b];
    return Tn(c, Object.assign({}, h, p, f, { ref: o(c.ref, f.ref) }, m));
  }
  return Pn(i, Object.assign({}, Ve(s, ["ref"]), i !== ne && f, i !== ne && p), c);
}
function lr(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Xt(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(o) => {
    var i;
    return (i = o == null ? void 0 : o.preventDefault) == null ? void 0 : i.call(o);
  }]);
  for (let r in n) Object.assign(t, { [r](o, ...i) {
    let l = n[r];
    for (let u of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      u(o, ...i);
    }
  } });
  return t;
}
function ci(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  for (let r in n) Object.assign(t, { [r](...o) {
    let i = n[r];
    for (let l of i) l == null || l(...o);
  } });
  return t;
}
function re(e) {
  var t;
  return Object.assign(wn(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function oe(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Ve(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function fi(e, t, n) {
  let [r, o] = H(n), i = e !== void 0, l = F(i), u = F(!1), s = F(!1);
  return i && !l.current && !u.current ? (u.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !s.current && (s.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, W((f) => (i || o(f), t == null ? void 0 : t(f)))];
}
function di(e) {
  let [t] = H(e);
  return t;
}
function qt(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Zt(n, Jt(t, r), o);
  return n;
}
function Jt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Zt(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Zt(e, Jt(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : qt(n, t, e);
}
function mi(e) {
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
let ur = "span";
var st = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(st || {});
function sr(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return ue({ ourProps: i, theirProps: o, slot: {}, defaultTag: ur, name: "Hidden" });
}
let zt = re(sr), ar = z(null);
function cr({ children: e }) {
  let t = k(ar);
  if (!t) return M.createElement(M.Fragment, null, e);
  let { target: n } = t;
  return n ? he.createPortal(M.createElement(M.Fragment, null, e), n) : null;
}
function pi({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = H(null), u = Fe();
  return K(() => {
    if (r && i) return u.addEventListener(i, "reset", r);
  }, [i, t, r]), M.createElement(cr, null, M.createElement(fr, { setForm: l, formId: t }), qt(e).map(([s, f]) => M.createElement(zt, { features: st.Hidden, ...oe({ key: s, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: s, value: f, ...o }) })));
}
function fr({ setForm: e, formId: t }) {
  return K(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : M.createElement(zt, { features: st.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let dr = z(void 0);
function mr() {
  return k(dr);
}
function vi(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && pr(n) ? !1 : r;
}
function pr(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Qt = Symbol();
function vr(e, t = !0) {
  return Object.assign(e, { [Qt]: t });
}
function pe(...e) {
  let t = F(e);
  K(() => {
    t.current = e;
  }, [e]);
  let n = W((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Qt])) ? void 0 : n;
}
let at = z(null);
at.displayName = "DescriptionContext";
function en() {
  let e = k(at);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, en), t;
  }
  return e;
}
function gi() {
  var e, t;
  return (t = (e = k(at)) == null ? void 0 : e.value) != null ? t : void 0;
}
let gr = "p";
function hr(e, t) {
  let n = it(), r = Yt(), { id: o = `headlessui-description-${n}`, ...i } = e, l = en(), u = pe(t);
  D(() => l.register(o), [o, l.register]);
  let s = r || !1, f = J(() => ({ ...l.slot, disabled: s }), [l.slot, s]), c = { ref: u, ...l.props, id: o };
  return ue({ ourProps: c, theirProps: i, slot: f, defaultTag: gr, name: l.name || "Description" });
}
let br = re(hr);
Object.assign(br, {});
var Er = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Er || {});
let De = z(null);
De.displayName = "LabelContext";
function tn() {
  let e = k(De);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, tn), t;
  }
  return e;
}
function yr(e) {
  var t, n, r;
  let o = (n = (t = k(De)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function hi({ inherit: e = !1 } = {}) {
  let t = yr(), [n, r] = H([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, J(() => function(i) {
    let l = W((s) => (r((f) => [...f, s]), () => r((f) => {
      let c = f.slice(), p = c.indexOf(s);
      return p !== -1 && c.splice(p, 1), c;
    }))), u = J(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return M.createElement(De.Provider, { value: u }, i.children);
  }, [r])];
}
let wr = "label";
function $r(e, t) {
  var n;
  let r = it(), o = tn(), i = mr(), l = Yt(), { id: u = `headlessui-label-${r}`, htmlFor: s = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: f = !1, ...c } = e, p = pe(t);
  D(() => o.register(u), [u, o.register]);
  let v = W((h) => {
    let b = h.currentTarget;
    if (b instanceof HTMLLabelElement && h.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(h), b instanceof HTMLLabelElement) {
      let E = document.getElementById(b.htmlFor);
      if (E) {
        let w = E.getAttribute("disabled");
        if (w === "true" || w === "") return;
        let C = E.getAttribute("aria-disabled");
        if (C === "true" || C === "") return;
        (E instanceof HTMLInputElement && (E.type === "radio" || E.type === "checkbox") || E.role === "radio" || E.role === "checkbox" || E.role === "switch") && E.click(), E.focus({ preventScroll: !0 });
      }
    }
  }), a = l || !1, d = J(() => ({ ...o.slot, disabled: a }), [o.slot, a]), m = { ref: p, ...o.props, id: u, htmlFor: s, onClick: v };
  return f && ("onClick" in m && (delete m.htmlFor, delete m.onClick), "onClick" in c && delete c.onClick), ue({ ourProps: m, theirProps: c, slot: d, defaultTag: s ? wr : "div", name: o.name || "Label" });
}
let Tr = re($r), bi = Object.assign(Tr, {});
function Pr(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Ei(e = Pr) {
  return V((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function xr(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function yi(e, t = !1) {
  let n = e === null ? null : "current" in e ? e.current : e, [r, o] = xn(() => ({}), {}), i = J(() => xr(n), [n, r]);
  return D(() => {
    if (!n) return;
    let l = new ResizeObserver(o);
    return l.observe(n), () => {
      l.disconnect();
    };
  }, [n]), t ? { width: `${i.width}px`, height: `${i.height}px` } : i;
}
let Rr = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function nn(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let l = t[o].call(n, ...i);
    l && (n = l, r.forEach((u) => u()));
  } };
}
function rn(e) {
  return Rn(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let Lr = new Rr(() => nn(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function ct(e, t) {
  let n = Lr.get(t), r = it(), o = rn(n);
  if (D(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let tt = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map();
function yt(e) {
  var t;
  let n = (t = Pe.get(e)) != null ? t : 0;
  return Pe.set(e, n + 1), n !== 0 ? () => wt(e) : (tt.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => wt(e));
}
function wt(e) {
  var t;
  let n = (t = Pe.get(e)) != null ? t : 1;
  if (n === 1 ? Pe.delete(e) : Pe.set(e, n - 1), n !== 1) return;
  let r = tt.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, tt.delete(e));
}
function $i(e, { allowed: t, disallowed: n } = {}) {
  let r = ct(e, "inert-others");
  D(() => {
    var o, i;
    if (!r) return;
    let l = le();
    for (let s of (o = n == null ? void 0 : n()) != null ? o : []) s && l.add(yt(s));
    let u = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let s of u) {
      if (!s) continue;
      let f = He(s);
      if (!f) continue;
      let c = s.parentElement;
      for (; c && c !== f.body; ) {
        for (let p of c.children) u.some((v) => p.contains(v)) || l.add(yt(p));
        c = c.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function Cr(e, t, n) {
  let r = Ee((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  K(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = le();
    if (typeof ResizeObserver < "u") {
      let l = new ResizeObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let l = new IntersectionObserver(() => r.current(o));
      l.observe(o), i.add(() => l.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let nt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Fr = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Mr = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Mr || {}), Sr = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Sr || {}), Or = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Or || {});
function on(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(nt)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function Ar(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Fr)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ln = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ln || {});
function Hr(e, t = 0) {
  var n;
  return e === ((n = He(e)) == null ? void 0 : n.body) ? !1 : Me(t, { 0() {
    return e.matches(nt);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(nt)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var Dr = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(Dr || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let Nr = ["textarea", "input"].join(",");
function Ir(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Nr)) != null ? n : !1;
}
function kr(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ti(e, t) {
  return jr(on(), t, { relativeTo: e });
}
function jr(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? kr(e) : e : t & 64 ? Ar(e) : on(e);
  o.length > 0 && l.length > 1 && (l = l.filter((a) => !o.some((d) => d != null && "current" in d ? (d == null ? void 0 : d.current) === a : d === a))), r = r ?? i.activeElement;
  let u = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), s = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = t & 32 ? { preventScroll: !0 } : {}, c = 0, p = l.length, v;
  do {
    if (c >= p || c + p <= 0) return 0;
    let a = s + c;
    if (t & 16) a = (a + p) % p;
    else {
      if (a < 0) return 3;
      if (a >= p) return 1;
    }
    v = l[a], v == null || v.focus(f), c += u;
  } while (v !== i.activeElement);
  return t & 6 && Ir(v) && v.select(), 2;
}
function un() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Wr() {
  return /Android/gi.test(window.navigator.userAgent);
}
function _r() {
  return un() || Wr();
}
function $e(e, t, n, r) {
  let o = Ee(n);
  K(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Br(e, t, n, r) {
  let o = Ee(n);
  K(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const $t = 30;
function Pi(e, t, n) {
  let r = ct(e, "outside-click"), o = Ee(n), i = V(function(s, f) {
    if (s.defaultPrevented) return;
    let c = f(s);
    if (c === null || !c.getRootNode().contains(c) || !c.isConnected) return;
    let p = function v(a) {
      return typeof a == "function" ? v(a()) : Array.isArray(a) || a instanceof Set ? a : [a];
    }(t);
    for (let v of p) {
      if (v === null) continue;
      let a = v instanceof HTMLElement ? v : v.current;
      if (a != null && a.contains(c) || s.composed && s.composedPath().includes(a)) return;
    }
    return !Hr(c, ln.Loose) && c.tabIndex !== -1 && s.preventDefault(), o.current(s, c);
  }, [o]), l = F(null);
  $e(r, "pointerdown", (s) => {
    var f, c;
    l.current = ((c = (f = s.composedPath) == null ? void 0 : f.call(s)) == null ? void 0 : c[0]) || s.target;
  }, !0), $e(r, "mousedown", (s) => {
    var f, c;
    l.current = ((c = (f = s.composedPath) == null ? void 0 : f.call(s)) == null ? void 0 : c[0]) || s.target;
  }, !0), $e(r, "click", (s) => {
    _r() || l.current && (i(s, () => l.current), l.current = null);
  }, !0);
  let u = F({ x: 0, y: 0 });
  $e(r, "touchstart", (s) => {
    u.current.x = s.touches[0].clientX, u.current.y = s.touches[0].clientY;
  }, !0), $e(r, "touchend", (s) => {
    let f = { x: s.changedTouches[0].clientX, y: s.changedTouches[0].clientY };
    if (!(Math.abs(f.x - u.current.x) >= $t || Math.abs(f.y - u.current.y) >= $t)) return i(s, () => s.target instanceof HTMLElement ? s.target : null);
  }, !0), Br(r, "blur", (s) => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function sn(...e) {
  return J(() => He(...e), [...e]);
}
function Tt(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function xi(e, t) {
  let [n, r] = H(() => Tt(e));
  return D(() => {
    r(Tt(e));
  }, [e.type, e.as]), D(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
function Vr() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, o = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, o.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, o = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - o);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function Kr() {
  return un() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let u = le();
        u.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => u.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (u) => {
        if (u.target instanceof HTMLElement) try {
          let s = u.target.closest("a");
          if (!s) return;
          let { hash: f } = new URL(s.href), c = e.querySelector(f);
          c && !r(c) && (l = c);
        } catch {
        }
      }, !0), t.addEventListener(e, "touchstart", (u) => {
        if (u.target instanceof HTMLElement) if (r(u.target)) {
          let s = u.target;
          for (; s.parentElement && r(s.parentElement); ) s = s.parentElement;
          t.style(s, "overscrollBehavior", "contain");
        } else t.style(u.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (u) => {
        if (u.target instanceof HTMLElement) {
          if (u.target.tagName === "INPUT") return;
          if (r(u.target)) {
            let s = u.target;
            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth); ) s = s.parentElement;
            s.dataset.headlessuiPortal === "" && u.preventDefault();
          } else u.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var u;
        let s = (u = window.scrollY) != null ? u : window.pageYOffset;
        i !== s && window.scrollTo(0, i), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function Ur() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Yr(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let ae = nn(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: le(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Yr(n) }, o = [Kr(), Vr(), Ur()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ae.subscribe(() => {
  let e = ae.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && ae.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ae.dispatch("TEARDOWN", n);
  }
});
function Gr(e, t, n = () => ({ containers: [] })) {
  let r = rn(ae), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return D(() => {
    if (!(!t || !e)) return ae.dispatch("PUSH", t, n), () => ae.dispatch("POP", t, n);
  }, [e, t]), i;
}
function Ri(e, t, n = () => [document.body]) {
  let r = ct(e, "scroll-lock");
  Gr(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function Pt(e) {
  return [e.screenX, e.screenY];
}
function Li() {
  let e = F([-1, -1]);
  return { wasMoved(t) {
    let n = Pt(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Pt(t);
  } };
}
function Xr(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return t.called = !0, e(...n);
  };
}
function qr(e = 0) {
  let [t, n] = H(e), r = V((s) => n(s), [t]), o = V((s) => n((f) => f | s), [t]), i = V((s) => (t & s) === s, [t]), l = V((s) => n((f) => f & ~s), [n]), u = V((s) => n((f) => f ^ s), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: u };
}
var Jr = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Jr || {});
function Zr(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function zr(e, t, n, r) {
  let [o, i] = H(n), { hasFlag: l, addFlag: u, removeFlag: s } = qr(e && o ? 3 : 0), f = F(!1), c = F(!1), p = Fe();
  return D(function v() {
    var a;
    if (!e) return;
    n && i(!0);
    let d = t.current;
    return d ? ((a = r == null ? void 0 : r.start) == null || a.call(r, n), Qr(d, { inFlight: f, prepare() {
      c.current ? c.current = !1 : c.current = f.current, f.current = !0, !c.current && (n ? (u(3), s(4)) : (u(4), s(2)));
    }, run() {
      c.current ? n ? (s(3), u(4)) : (s(4), u(3)) : n ? s(1) : u(1);
    }, done() {
      var m;
      c.current && typeof d.getAnimations == "function" && d.getAnimations().length > 0 || (f.current = !1, s(7), n || i(!1), (m = r == null ? void 0 : r.end) == null || m.call(r, n));
    } })) : n ? (u(3), p.nextFrame(() => v())) : void 0;
  }, [e, n, t, p]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Qr(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = le();
  return to(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    i.add(eo(e, r)), n();
  }), i.dispose;
}
function eo(e, t) {
  let n = Xr(t), r = le();
  if (!e) return r.dispose;
  let { transitionDuration: o, transitionDelay: i } = getComputedStyle(e), [l, u] = [o, i].map((f) => {
    let [c = 0] = f.split(",").filter(Boolean).map((p) => p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3).sort((p, v) => v - p);
    return c;
  }), s = l + u;
  if (s !== 0) {
    let f = r.group((c) => {
      let p = c.setTimeout(() => {
        n(), c.dispose();
      }, s);
      c.addEventListener(e, "transitionrun", (v) => {
        v.target === v.currentTarget && (p(), c.addEventListener(e, "transitioncancel", (a) => {
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
function to(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function xt(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function xe(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ln(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function an() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function ft() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function no(e) {
  return io() ? !1 : !Rt() && e.width === 0 && e.height === 0 || Rt() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function ro() {
  return /apple/i.test(navigator.vendor);
}
function Rt() {
  const e = /android/i;
  return e.test(an()) || e.test(ft());
}
function oo() {
  return an().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function io() {
  return ft().includes("jsdom/");
}
function rt(e, t) {
  const n = ["mouse", "pen"];
  return n.push("", void 0), n.includes(e);
}
function lo(e) {
  return "nativeEvent" in e;
}
function uo(e) {
  return e.matches("html,body");
}
function ce(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Ke(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function ge(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const so = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function ao(e) {
  return lt(e) && e.matches(so);
}
const cn = {
  ...g
}, co = cn.useInsertionEffect, fo = co || ((e) => e());
function te(e) {
  const t = g.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return fo(() => {
    t.current = e;
  }), g.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var be = typeof document < "u" ? Nt : K;
let Lt = !1, mo = 0;
const Ct = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + mo++
);
function po() {
  const [e, t] = g.useState(() => Lt ? Ct() : void 0);
  return be(() => {
    e == null && t(Ct());
  }, []), g.useEffect(() => {
    Lt = !0;
  }, []), e;
}
const vo = cn.useId, fn = vo || po;
let Re;
process.env.NODE_ENV !== "production" && (Re = /* @__PURE__ */ new Set());
function go() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Re) != null && e.has(o))) {
    var i;
    (i = Re) == null || i.add(o), console.warn(o);
  }
}
function ho() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = Re) != null && e.has(o))) {
    var i;
    (i = Re) == null || i.add(o), console.error(o);
  }
}
function bo() {
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
const Eo = /* @__PURE__ */ g.createContext(null), yo = /* @__PURE__ */ g.createContext(null), dt = () => {
  var e;
  return ((e = g.useContext(Eo)) == null ? void 0 : e.id) || null;
}, mt = () => g.useContext(yo);
function pt(e) {
  return "data-floating-ui-" + e;
}
function Ue(e) {
  const t = F(e);
  return be(() => {
    t.current = e;
  }), t;
}
const Ft = /* @__PURE__ */ pt("safe-polygon");
function Ye(e, t, n) {
  return n && !rt(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Ci(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: i,
    elements: l
  } = e, {
    enabled: u = !0,
    delay: s = 0,
    handleClose: f = null,
    mouseOnly: c = !1,
    restMs: p = 0,
    move: v = !0
  } = t, a = mt(), d = dt(), m = Ue(f), h = Ue(s), b = Ue(n), E = g.useRef(), w = g.useRef(-1), C = g.useRef(), S = g.useRef(-1), _ = g.useRef(!0), G = g.useRef(!1), O = g.useRef(() => {
  }), X = g.useCallback(() => {
    var $;
    const y = ($ = o.current.openEvent) == null ? void 0 : $.type;
    return (y == null ? void 0 : y.includes("mouse")) && y !== "mousedown";
  }, [o]);
  g.useEffect(() => {
    if (!u) return;
    function $(y) {
      let {
        open: P
      } = y;
      P || (clearTimeout(w.current), clearTimeout(S.current), _.current = !0);
    }
    return i.on("openchange", $), () => {
      i.off("openchange", $);
    };
  }, [u, i]), g.useEffect(() => {
    if (!u || !m.current || !n) return;
    function $(P) {
      X() && r(!1, P, "hover");
    }
    const y = ce(l.floating).documentElement;
    return y.addEventListener("mouseleave", $), () => {
      y.removeEventListener("mouseleave", $);
    };
  }, [l.floating, n, r, u, m, X]);
  const B = g.useCallback(function($, y, P) {
    y === void 0 && (y = !0), P === void 0 && (P = "hover");
    const T = Ye(h.current, "close", E.current);
    T && !C.current ? (clearTimeout(w.current), w.current = window.setTimeout(() => r(!1, $, P), T)) : y && (clearTimeout(w.current), r(!1, $, P));
  }, [h, r]), A = te(() => {
    O.current(), C.current = void 0;
  }), I = te(() => {
    if (G.current) {
      const $ = ce(l.floating).body;
      $.style.pointerEvents = "", $.removeAttribute(Ft), G.current = !1;
    }
  });
  g.useEffect(() => {
    if (!u) return;
    function $() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function y(x) {
      if (clearTimeout(w.current), _.current = !1, c && !rt(E.current) || p > 0 && !Ye(h.current, "open"))
        return;
      const L = Ye(h.current, "open", E.current);
      L ? w.current = window.setTimeout(() => {
        b.current || r(!0, x, "hover");
      }, L) : r(!0, x, "hover");
    }
    function P(x) {
      if ($()) return;
      O.current();
      const L = ce(l.floating);
      if (clearTimeout(S.current), m.current && o.current.floatingContext) {
        n || clearTimeout(w.current), C.current = m.current({
          ...o.current.floatingContext,
          tree: a,
          x: x.clientX,
          y: x.clientY,
          onClose() {
            I(), A(), B(x, !0, "safe-polygon");
          }
        });
        const Z = C.current;
        L.addEventListener("mousemove", Z), O.current = () => {
          L.removeEventListener("mousemove", Z);
        };
        return;
      }
      (E.current === "touch" ? !xe(l.floating, x.relatedTarget) : !0) && B(x);
    }
    function T(x) {
      $() || o.current.floatingContext && (m.current == null || m.current({
        ...o.current.floatingContext,
        tree: a,
        x: x.clientX,
        y: x.clientY,
        onClose() {
          I(), A(), B(x);
        }
      })(x));
    }
    if (Y(l.domReference)) {
      var N;
      const x = l.domReference;
      return n && x.addEventListener("mouseleave", T), (N = l.floating) == null || N.addEventListener("mouseleave", T), v && x.addEventListener("mousemove", y, {
        once: !0
      }), x.addEventListener("mouseenter", y), x.addEventListener("mouseleave", P), () => {
        var L;
        n && x.removeEventListener("mouseleave", T), (L = l.floating) == null || L.removeEventListener("mouseleave", T), v && x.removeEventListener("mousemove", y), x.removeEventListener("mouseenter", y), x.removeEventListener("mouseleave", P);
      };
    }
  }, [l, u, e, c, p, v, B, A, I, r, n, b, a, h, m, o]), be(() => {
    var $;
    if (u && n && ($ = m.current) != null && $.__options.blockPointerEvents && X()) {
      const P = ce(l.floating).body;
      P.setAttribute(Ft, ""), P.style.pointerEvents = "none", G.current = !0;
      const T = l.floating;
      if (Y(l.domReference) && T) {
        var y;
        const N = l.domReference, x = a == null || (y = a.nodesRef.current.find((L) => L.id === d)) == null || (y = y.context) == null ? void 0 : y.elements.floating;
        return x && (x.style.pointerEvents = ""), N.style.pointerEvents = "auto", T.style.pointerEvents = "auto", () => {
          N.style.pointerEvents = "", T.style.pointerEvents = "";
        };
      }
    }
  }, [u, n, d, l, a, m, X]), be(() => {
    n || (E.current = void 0, A(), I());
  }, [n, A, I]), g.useEffect(() => () => {
    A(), clearTimeout(w.current), clearTimeout(S.current), I();
  }, [u, l.domReference, A, I]);
  const U = g.useMemo(() => {
    function $(y) {
      E.current = y.pointerType;
    }
    return {
      onPointerDown: $,
      onPointerEnter: $,
      onMouseMove(y) {
        const {
          nativeEvent: P
        } = y;
        function T() {
          !_.current && !b.current && r(!0, P, "hover");
        }
        c && !rt(E.current) || n || p === 0 || (clearTimeout(S.current), E.current === "touch" ? T() : S.current = window.setTimeout(T, p));
      }
    };
  }, [c, r, n, b, p]), R = g.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(w.current);
    },
    onMouseLeave($) {
      B($.nativeEvent, !1);
    }
  }), [B]);
  return g.useMemo(() => u ? {
    reference: U,
    floating: R
  } : {}, [u, U, R]);
}
function Ge(e, t) {
  let n = e.filter((o) => {
    var i;
    return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var i;
      return (i = r) == null ? void 0 : i.some((l) => {
        var u;
        return o.parentId === l.id && ((u = o.context) == null ? void 0 : u.open);
      });
    }), n = n.concat(r);
  return n;
}
const wo = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, $o = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, Mt = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Fi(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: i
  } = e, {
    enabled: l = !0,
    escapeKey: u = !0,
    outsidePress: s = !0,
    outsidePressEvent: f = "pointerdown",
    referencePress: c = !1,
    referencePressEvent: p = "pointerdown",
    ancestorScroll: v = !1,
    bubbles: a,
    capture: d
  } = t, m = mt(), h = te(typeof s == "function" ? s : () => !1), b = typeof s == "function" ? h : s, E = g.useRef(!1), w = g.useRef(!1), {
    escapeKey: C,
    outsidePress: S
  } = Mt(a), {
    escapeKey: _,
    outsidePress: G
  } = Mt(d), O = te((R) => {
    var $;
    if (!n || !l || !u || R.key !== "Escape")
      return;
    const y = ($ = i.current.floatingContext) == null ? void 0 : $.nodeId, P = m ? Ge(m.nodesRef.current, y) : [];
    if (!C && (R.stopPropagation(), P.length > 0)) {
      let T = !0;
      if (P.forEach((N) => {
        var x;
        if ((x = N.context) != null && x.open && !N.context.dataRef.current.__escapeKeyBubbles) {
          T = !1;
          return;
        }
      }), !T)
        return;
    }
    r(!1, lo(R) ? R.nativeEvent : R, "escape-key");
  }), X = te((R) => {
    var $;
    const y = () => {
      var P;
      O(R), (P = ge(R)) == null || P.removeEventListener("keydown", y);
    };
    ($ = ge(R)) == null || $.addEventListener("keydown", y);
  }), B = te((R) => {
    var $;
    const y = E.current;
    E.current = !1;
    const P = w.current;
    if (w.current = !1, f === "click" && P || y || typeof b == "function" && !b(R))
      return;
    const T = ge(R), N = "[" + pt("inert") + "]", x = ce(o.floating).querySelectorAll(N);
    let L = Y(T) ? T : null;
    for (; L && !bt(L); ) {
      const j = Mn(L);
      if (bt(j) || !Y(j))
        break;
      L = j;
    }
    if (x.length && Y(T) && !uo(T) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !xe(T, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(x).every((j) => !xe(L, j)))
      return;
    if (lt(T) && U) {
      const j = T.clientWidth > 0 && T.scrollWidth > T.clientWidth, q = T.clientHeight > 0 && T.scrollHeight > T.clientHeight;
      let we = q && R.offsetX > T.clientWidth;
      if (q && Sn(T).direction === "rtl" && (we = R.offsetX <= T.offsetWidth - T.clientWidth), we || j && R.offsetY > T.clientHeight)
        return;
    }
    const ee = ($ = i.current.floatingContext) == null ? void 0 : $.nodeId, Z = m && Ge(m.nodesRef.current, ee).some((j) => {
      var q;
      return Ke(R, (q = j.context) == null ? void 0 : q.elements.floating);
    });
    if (Ke(R, o.floating) || Ke(R, o.domReference) || Z)
      return;
    const ve = m ? Ge(m.nodesRef.current, ee) : [];
    if (ve.length > 0) {
      let j = !0;
      if (ve.forEach((q) => {
        var we;
        if ((we = q.context) != null && we.open && !q.context.dataRef.current.__outsidePressBubbles) {
          j = !1;
          return;
        }
      }), !j)
        return;
    }
    r(!1, R, "outside-press");
  }), A = te((R) => {
    var $;
    const y = () => {
      var P;
      B(R), (P = ge(R)) == null || P.removeEventListener(f, y);
    };
    ($ = ge(R)) == null || $.addEventListener(f, y);
  });
  g.useEffect(() => {
    if (!n || !l)
      return;
    i.current.__escapeKeyBubbles = C, i.current.__outsidePressBubbles = S;
    function R(P) {
      r(!1, P, "ancestor-scroll");
    }
    const $ = ce(o.floating);
    u && $.addEventListener("keydown", _ ? X : O, _), b && $.addEventListener(f, G ? A : B, G);
    let y = [];
    return v && (Y(o.domReference) && (y = je(o.domReference)), Y(o.floating) && (y = y.concat(je(o.floating))), !Y(o.reference) && o.reference && o.reference.contextElement && (y = y.concat(je(o.reference.contextElement)))), y = y.filter((P) => {
      var T;
      return P !== ((T = $.defaultView) == null ? void 0 : T.visualViewport);
    }), y.forEach((P) => {
      P.addEventListener("scroll", R, {
        passive: !0
      });
    }), () => {
      u && $.removeEventListener("keydown", _ ? X : O, _), b && $.removeEventListener(f, G ? A : B, G), y.forEach((P) => {
        P.removeEventListener("scroll", R);
      });
    };
  }, [i, o, u, b, f, n, r, v, l, C, S, O, _, X, B, G, A]), g.useEffect(() => {
    E.current = !1;
  }, [b, f]);
  const I = g.useMemo(() => ({
    onKeyDown: O,
    [wo[p]]: (R) => {
      c && r(!1, R.nativeEvent, "reference-press");
    }
  }), [O, r, c, p]), U = g.useMemo(() => ({
    onKeyDown: O,
    onMouseDown() {
      w.current = !0;
    },
    onMouseUp() {
      w.current = !0;
    },
    [$o[f]]: () => {
      E.current = !0;
    }
  }), [O, f]);
  return g.useMemo(() => l ? {
    reference: I,
    floating: U
  } : {}, [l, I, U]);
}
function To(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = fn(), i = g.useRef({}), [l] = g.useState(() => bo()), u = dt() != null;
  if (process.env.NODE_ENV !== "production") {
    const a = r.reference;
    a && !Y(a) && ho("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [s, f] = g.useState(r.reference), c = te((a, d, m) => {
    i.current.openEvent = a ? d : void 0, l.emit("openchange", {
      open: a,
      event: d,
      reason: m,
      nested: u
    }), n == null || n(a, d, m);
  }), p = g.useMemo(() => ({
    setPositionReference: f
  }), []), v = g.useMemo(() => ({
    reference: s || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [s, r.reference, r.floating]);
  return g.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: v,
    events: l,
    floatingId: o,
    refs: p
  }), [t, c, v, l, o, p]);
}
function Po(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = To({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = g.useState(null), [u, s] = g.useState(null), c = (o == null ? void 0 : o.reference) || i, p = g.useRef(null), v = mt();
  be(() => {
    c && (p.current = c);
  }, [c]);
  const a = Cn({
    ...e,
    elements: {
      ...o,
      ...u && {
        reference: u
      }
    }
  }), d = g.useCallback((w) => {
    const C = Y(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    s(C), a.refs.setReference(C);
  }, [a.refs]), m = g.useCallback((w) => {
    (Y(w) || w === null) && (p.current = w, l(w)), (Y(a.refs.reference.current) || a.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !Y(w)) && a.refs.setReference(w);
  }, [a.refs]), h = g.useMemo(() => ({
    ...a.refs,
    setReference: m,
    setPositionReference: d,
    domReference: p
  }), [a.refs, m, d]), b = g.useMemo(() => ({
    ...a.elements,
    domReference: c
  }), [a.elements, c]), E = g.useMemo(() => ({
    ...a,
    ...r,
    refs: h,
    elements: b,
    nodeId: t
  }), [a, h, b, t, r]);
  return be(() => {
    r.dataRef.current.floatingContext = E;
    const w = v == null ? void 0 : v.nodesRef.current.find((C) => C.id === t);
    w && (w.context = E);
  }), g.useMemo(() => ({
    ...a,
    context: E,
    refs: h,
    elements: b
  }), [a, h, b, E]);
}
function Mi(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    dataRef: i,
    elements: l
  } = e, {
    enabled: u = !0,
    visibleOnly: s = !0
  } = t, f = g.useRef(!1), c = g.useRef(), p = g.useRef(!0);
  g.useEffect(() => {
    if (!u) return;
    const a = Fn(l.domReference);
    function d() {
      !n && lt(l.domReference) && l.domReference === xt(ce(l.domReference)) && (f.current = !0);
    }
    function m() {
      p.current = !0;
    }
    return a.addEventListener("blur", d), a.addEventListener("keydown", m, !0), () => {
      a.removeEventListener("blur", d), a.removeEventListener("keydown", m, !0);
    };
  }, [l.domReference, n, u]), g.useEffect(() => {
    if (!u) return;
    function a(d) {
      let {
        reason: m
      } = d;
      (m === "reference-press" || m === "escape-key") && (f.current = !0);
    }
    return o.on("openchange", a), () => {
      o.off("openchange", a);
    };
  }, [o, u]), g.useEffect(() => () => {
    clearTimeout(c.current);
  }, []);
  const v = g.useMemo(() => ({
    onPointerDown(a) {
      no(a.nativeEvent) || (p.current = !1);
    },
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(a) {
      if (f.current) return;
      const d = ge(a.nativeEvent);
      if (s && Y(d))
        try {
          if (ro() && oo()) throw Error();
          if (!d.matches(":focus-visible")) return;
        } catch {
          if (!p.current && !ao(d))
            return;
        }
      r(!0, a.nativeEvent, "focus");
    },
    onBlur(a) {
      f.current = !1;
      const d = a.relatedTarget, m = a.nativeEvent, h = Y(d) && d.hasAttribute(pt("focus-guard")) && d.getAttribute("data-type") === "outside";
      c.current = window.setTimeout(() => {
        var b;
        const E = xt(l.domReference ? l.domReference.ownerDocument : document);
        !d && E === l.domReference || xe((b = i.current.floatingContext) == null ? void 0 : b.refs.floating.current, E) || xe(l.domReference, E) || h || r(!1, m, "focus");
      });
    }
  }), [i, l.domReference, r, s]);
  return g.useMemo(() => u ? {
    reference: v
  } : {}, [u, v]);
}
const St = "active", Ot = "selected";
function Xe(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [St]: l,
      [Ot]: u,
      ...s
    } = e;
    i = s;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...t.map((l) => {
      const u = l ? l[n] : null;
      return typeof u == "function" ? e ? u(e) : null : u;
    }).concat(e).reduce((l, u) => (u && Object.entries(u).forEach((s) => {
      let [f, c] = s;
      if (!(o && [St, Ot].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof c == "function") {
            var p;
            (p = r.get(f)) == null || p.push(c), l[f] = function() {
              for (var v, a = arguments.length, d = new Array(a), m = 0; m < a; m++)
                d[m] = arguments[m];
              return (v = r.get(f)) == null ? void 0 : v.map((h) => h(...d)).find((h) => h !== void 0);
            };
          }
        } else
          l[f] = c;
    }), l), {})
  };
}
function xo(e) {
  e === void 0 && (e = []);
  const t = e.map((u) => u == null ? void 0 : u.reference), n = e.map((u) => u == null ? void 0 : u.floating), r = e.map((u) => u == null ? void 0 : u.item), o = g.useCallback(
    (u) => Xe(u, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = g.useCallback(
    (u) => Xe(u, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = g.useCallback(
    (u) => Xe(u, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return g.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
const Ro = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Si(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: r,
    floatingId: o
  } = e, {
    enabled: i = !0,
    role: l = "dialog"
  } = t, u = (n = Ro.get(l)) != null ? n : l, s = fn(), c = dt() != null, p = g.useMemo(() => u === "tooltip" || l === "label" ? {
    ["aria-" + (l === "label" ? "labelledby" : "describedby")]: r ? o : void 0
  } : {
    "aria-expanded": r ? "true" : "false",
    "aria-haspopup": u === "alertdialog" ? "dialog" : u,
    "aria-controls": r ? o : void 0,
    ...u === "listbox" && {
      role: "combobox"
    },
    ...u === "menu" && {
      id: s
    },
    ...u === "menu" && c && {
      role: "menuitem"
    },
    ...l === "select" && {
      "aria-autocomplete": "none"
    },
    ...l === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [u, o, c, r, s, l]), v = g.useMemo(() => {
    const d = {
      id: o,
      ...u && {
        role: u
      }
    };
    return u === "tooltip" || l === "label" ? d : {
      ...d,
      ...u === "menu" && {
        "aria-labelledby": s
      }
    };
  }, [u, o, s, l]), a = g.useCallback((d) => {
    let {
      active: m,
      selected: h
    } = d;
    const b = {
      role: "option",
      ...m && {
        id: o + "-option"
      }
    };
    switch (l) {
      case "select":
        return {
          ...b,
          "aria-selected": m && h
        };
      case "combobox":
        return {
          ...b,
          ...m && {
            "aria-selected": !0
          }
        };
    }
    return {};
  }, [o, l]);
  return g.useMemo(() => i ? {
    reference: p,
    floating: v,
    item: a
  } : {}, [i, p, v, a]);
}
function At(e, t) {
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
const Lo = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: l = 0,
      minItemsVisible: u = 4,
      referenceOverflowThreshold: s = 0,
      scrollRef: f,
      ...c
    } = On(e, t), {
      rects: p,
      elements: {
        floating: v
      }
    } = t, a = n.current[l];
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || go('`placement` side must be "bottom" when using the `inner`', "middleware.")), !a)
      return {};
    const d = {
      ...t,
      ...await It(-a.offsetTop - v.clientTop - p.reference.height / 2 - a.offsetHeight / 2 - i).fn(t)
    }, m = (f == null ? void 0 : f.current) || v, h = await We(At(d, m.scrollHeight), c), b = await We(d, {
      ...c,
      elementContext: "reference"
    }), E = Math.max(0, h.top), w = d.y + E, C = Math.max(0, m.scrollHeight - E - Math.max(0, h.bottom));
    return m.style.maxHeight = C + "px", m.scrollTop = E, o && (m.offsetHeight < a.offsetHeight * Math.min(u, n.current.length - 1) - 1 || b.top >= -s || b.bottom >= -s ? he.flushSync(() => o(!0)) : he.flushSync(() => o(!1))), r && (r.current = await We(At({
      ...d,
      y: w
    }, m.offsetHeight), c)), {
      y: w
    };
  }
});
function Co(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: u
  } = t, s = te(u), f = g.useRef(!1), c = g.useRef(null), p = g.useRef(null);
  g.useEffect(() => {
    if (!o) return;
    function a(m) {
      if (m.ctrlKey || !d || i.current == null)
        return;
      const h = m.deltaY, b = i.current.top >= -0.5, E = i.current.bottom >= -0.5, w = d.scrollHeight - d.clientHeight, C = h < 0 ? -1 : 1, S = h < 0 ? "max" : "min";
      d.scrollHeight <= d.clientHeight || (!b && h > 0 || !E && h < 0 ? (m.preventDefault(), he.flushSync(() => {
        s((_) => _ + Math[S](h, w * C));
      })) : /firefox/i.test(ft()) && (d.scrollTop += h));
    }
    const d = (l == null ? void 0 : l.current) || r.floating;
    if (n && d)
      return d.addEventListener("wheel", a), requestAnimationFrame(() => {
        c.current = d.scrollTop, i.current != null && (p.current = {
          ...i.current
        });
      }), () => {
        c.current = null, p.current = null, d.removeEventListener("wheel", a);
      };
  }, [o, n, r.floating, i, l, s]);
  const v = g.useMemo(() => ({
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
      const a = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !a || !f.current)) {
        if (c.current !== null) {
          const d = a.scrollTop - c.current;
          (i.current.bottom < -0.5 && d < -1 || i.current.top < -0.5 && d > 1) && he.flushSync(() => s((m) => m + d));
        }
        requestAnimationFrame(() => {
          c.current = a.scrollTop;
        });
      }
    }
  }), [r.floating, s, i, l]);
  return g.useMemo(() => o ? {
    floating: v
  } : {}, [o, v]);
}
let ye = z({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
ye.displayName = "FloatingContext";
let vt = z(null);
vt.displayName = "PlacementContext";
function Oi(e) {
  return J(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function Ai() {
  return k(ye).setReference;
}
function Hi() {
  return k(ye).getReferenceProps;
}
function Di() {
  let { getFloatingProps: e, slot: t } = k(ye);
  return V((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Ni(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = k(vt), n = J(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (o, i) => i instanceof HTMLElement ? i.outerHTML : i : void 0)]);
  D(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = k(ye);
  return J(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Ht = 4;
function Ii({ children: e, enabled: t = !0 }) {
  let [n, r] = H(null), [o, i] = H(0), l = F(null), [u, s] = H(null);
  Fo(u);
  let f = t && n !== null && u !== null, { to: c = "bottom", gap: p = 0, offset: v = 0, padding: a = 0, inner: d } = Mo(n, u), [m, h = "center"] = c.split(" ");
  D(() => {
    f && i(0);
  }, [f]);
  let { refs: b, floatingStyles: E, context: w } = Po({ open: f, placement: m === "selection" ? h === "center" ? "bottom" : `bottom-${h}` : h === "center" ? `${m}` : `${m}-${h}`, strategy: "absolute", transform: !1, middleware: [It({ mainAxis: m === "selection" ? 0 : p, crossAxis: v }), An({ padding: a }), m !== "selection" && Hn({ padding: a }), m === "selection" && d ? Lo({ ...d, padding: a, overflowRef: l, offset: o, minItemsVisible: Ht, referenceOverflowThreshold: a, onFallbackChange(A) {
    var I, U;
    if (!A) return;
    let R = w.elements.floating;
    if (!R) return;
    let $ = parseFloat(getComputedStyle(R).scrollPaddingBottom) || 0, y = Math.min(Ht, R.childElementCount), P = 0, T = 0;
    for (let N of (U = (I = w.elements.floating) == null ? void 0 : I.childNodes) != null ? U : []) if (N instanceof HTMLElement) {
      let x = N.offsetTop, L = x + N.clientHeight + $, ee = R.scrollTop, Z = ee + R.clientHeight;
      if (x >= ee && L <= Z) y--;
      else {
        T = Math.max(0, Math.min(L, Z) - Math.max(x, ee)), P = N.clientHeight;
        break;
      }
    }
    y >= 1 && i((N) => {
      let x = P * y - T + $;
      return N >= x ? N : x;
    });
  } }) : null, Dn({ padding: a, apply({ availableWidth: A, availableHeight: I, elements: U }) {
    Object.assign(U.floating.style, { overflow: "auto", maxWidth: `${A}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${I}px)` });
  } })].filter(Boolean), whileElementsMounted: Nn }), [C = m, S = h] = w.placement.split("-");
  m === "selection" && (C = "selection");
  let _ = J(() => ({ anchor: [C, S].filter(Boolean).join(" ") }), [C, S]), G = Co(w, { overflowRef: l, onChange: i }), { getReferenceProps: O, getFloatingProps: X } = xo([G]), B = W((A) => {
    s(A), b.setFloating(A);
  });
  return g.createElement(vt.Provider, { value: r }, g.createElement(ye.Provider, { value: { setFloating: B, setReference: b.setReference, styles: E, getReferenceProps: O, getFloatingProps: X, slot: _ } }, e));
}
function Fo(e) {
  D(() => {
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
function Mo(e, t) {
  var n, r, o;
  let i = qe((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = qe((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), u = qe((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: u };
}
function qe(e, t, n = void 0) {
  let r = Fe(), o = W((s, f) => {
    if (s == null) return [n, null];
    if (typeof s == "number") return [s, null];
    if (typeof s == "string") {
      if (!f) return [n, null];
      let c = Dt(s, f);
      return [c, (p) => {
        let v = dn(s);
        {
          let a = v.map((d) => window.getComputedStyle(f).getPropertyValue(d));
          r.requestAnimationFrame(function d() {
            r.nextFrame(d);
            let m = !1;
            for (let [b, E] of v.entries()) {
              let w = window.getComputedStyle(f).getPropertyValue(E);
              if (a[b] !== w) {
                a[b] = w, m = !0;
                break;
              }
            }
            if (!m) return;
            let h = Dt(s, f);
            c !== h && (p(h), c = h);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = J(() => o(e, t)[0], [e, t]), [l = i, u] = H();
  return D(() => {
    let [s, f] = o(e, t);
    if (u(s), !!f) return f(u);
  }, [e, t]), l;
}
function dn(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...dn(o)] : [r];
  }
  return [];
}
function Dt(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function ki({ children: e, freeze: t }) {
  let n = So(t, e);
  return M.createElement(M.Fragment, null, n);
}
function So(e, t) {
  let [n, r] = H(t);
  return !e && n !== t && r(t), e ? n : t;
}
let gt = z(null);
gt.displayName = "OpenClosedContext";
var fe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(fe || {});
function mn() {
  return k(gt);
}
function Oo({ value: e, children: t }) {
  return M.createElement(gt.Provider, { value: e }, t);
}
function Ao(e) {
  throw new Error("Unexpected object: " + e);
}
var Ho = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Ho || {});
function ji(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      o === -1 && (o = n.length);
      for (let i = o - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      Ao(e);
  }
}
function Do(e) {
  let t = W(e), n = F(!1);
  K(() => (n.current = !1, () => {
    n.current = !0, Ut(() => {
      n.current && t();
    });
  }), [t]);
}
function No() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in g ? ((t) => t.useSyncExternalStore)(g)(() => () => {
  }, () => !1, () => !e) : !1;
}
function ht() {
  let e = No(), [t, n] = g.useState(de.isHandoffComplete);
  return t && de.isHandoffComplete === !1 && n(!1), g.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), g.useEffect(() => de.handoff(), []), e ? !1 : t;
}
let Io = z(!1);
function ko() {
  return k(Io);
}
function jo(e) {
  let t = ko(), n = k(vn), r = sn(e), [o, i] = H(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (de.isServer) return null;
    let u = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (u) return u;
    if (r === null) return null;
    let s = r.createElement("div");
    return s.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(s);
  });
  return K(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), K(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let pn = ne, Wo = re(function(e, t) {
  let n = e, r = F(null), o = pe(vr((c) => {
    r.current = c;
  }), t), i = sn(r), l = jo(r), [u] = H(() => {
    var c;
    return de.isServer ? null : (c = i == null ? void 0 : i.createElement("div")) != null ? c : null;
  }), s = k(Ko), f = ht();
  return D(() => {
    !l || !u || l.contains(u) || (u.setAttribute("data-headlessui-portal", ""), l.appendChild(u));
  }, [l, u]), D(() => {
    if (u && s) return s.register(u);
  }, [s, u]), Do(() => {
    var c;
    !l || !u || (u instanceof Node && l.contains(u) && l.removeChild(u), l.childNodes.length <= 0 && ((c = l.parentElement) == null || c.removeChild(l)));
  }), f ? !l || !u ? null : he.createPortal(ue({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: pn, name: "Portal" }), u) : null;
});
function _o(e, t) {
  let n = pe(t), { enabled: r = !0, ...o } = e;
  return r ? M.createElement(Wo, { ...o, ref: n }) : ue({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: pn, name: "Portal" });
}
let Bo = ne, vn = z(null);
function Vo(e, t) {
  let { target: n, ...r } = e, o = { ref: pe(t) };
  return M.createElement(vn.Provider, { value: n }, ue({ ourProps: o, theirProps: r, defaultTag: Bo, name: "Popover.Group" }));
}
let Ko = z(null), Uo = re(_o), Yo = re(Vo), Wi = Object.assign(Uo, { Group: Yo });
function Go() {
  let e = F(!1);
  return D(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function gn(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : bn) !== ne || M.Children.count(e.children) === 1;
}
let Ne = z(null);
Ne.displayName = "TransitionContext";
var Xo = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Xo || {});
function qo() {
  let e = k(Ne);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Jo() {
  let e = k(Ie);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Ie = z(null);
Ie.displayName = "NestingContext";
function ke(e) {
  return "children" in e ? ke(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function hn(e, t) {
  let n = Ee(e), r = F([]), o = Go(), i = Fe(), l = W((a, d = ie.Hidden) => {
    let m = r.current.findIndex(({ el: h }) => h === a);
    m !== -1 && (Me(d, { [ie.Unmount]() {
      r.current.splice(m, 1);
    }, [ie.Hidden]() {
      r.current[m].state = "hidden";
    } }), i.microTask(() => {
      var h;
      !ke(r) && o.current && ((h = n.current) == null || h.call(n));
    }));
  }), u = W((a) => {
    let d = r.current.find(({ el: m }) => m === a);
    return d ? d.state !== "visible" && (d.state = "visible") : r.current.push({ el: a, state: "visible" }), () => l(a, ie.Unmount);
  }), s = F([]), f = F(Promise.resolve()), c = F({ enter: [], leave: [] }), p = W((a, d, m) => {
    s.current.splice(0), t && (t.chains.current[d] = t.chains.current[d].filter(([h]) => h !== a)), t == null || t.chains.current[d].push([a, new Promise((h) => {
      s.current.push(h);
    })]), t == null || t.chains.current[d].push([a, new Promise((h) => {
      Promise.all(c.current[d].map(([b, E]) => E)).then(() => h());
    })]), d === "enter" ? f.current = f.current.then(() => t == null ? void 0 : t.wait.current).then(() => m(d)) : m(d);
  }), v = W((a, d, m) => {
    Promise.all(c.current[d].splice(0).map(([h, b]) => b)).then(() => {
      var h;
      (h = s.current.shift()) == null || h();
    }).then(() => m(d));
  });
  return J(() => ({ children: r, register: u, unregister: l, onStart: p, onStop: v, wait: f, chains: c }), [u, l, r, p, v, c, f]);
}
let bn = ne, En = Gt.RenderStrategy;
function Zo(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: u, afterLeave: s, enter: f, enterFrom: c, enterTo: p, entered: v, leave: a, leaveFrom: d, leaveTo: m, ...h } = e, b = F(null), E = gn(e), w = pe(...E ? [b, t] : t === null ? [] : [t]), C = (n = h.unmount) == null || n ? ie.Unmount : ie.Hidden, { show: S, appear: _, initial: G } = qo(), [O, X] = H(S ? "visible" : "hidden"), B = Jo(), { register: A, unregister: I } = B;
  D(() => A(b), [A, b]), D(() => {
    if (C === ie.Hidden && b.current) {
      if (S && O !== "visible") {
        X("visible");
        return;
      }
      return Me(O, { hidden: () => I(b), visible: () => A(b) });
    }
  }, [O, b, A, I, S, C]);
  let U = ht();
  D(() => {
    if (E && U && O === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [b, O, U, E]);
  let R = G && !_, $ = _ && S && G, y = F(!1), P = hn(() => {
    y.current || (X("hidden"), I(b));
  }, B), T = W((ve) => {
    y.current = !0;
    let j = ve ? "enter" : "leave";
    P.onStart(b, j, (q) => {
      q === "enter" ? i == null || i() : q === "leave" && (u == null || u());
    });
  }), N = W((ve) => {
    let j = ve ? "enter" : "leave";
    y.current = !1, P.onStop(b, j, (q) => {
      q === "enter" ? l == null || l() : q === "leave" && (s == null || s());
    }), j === "leave" && !ke(P) && (X("hidden"), I(b));
  });
  K(() => {
    E && o || (T(S), N(S));
  }, [S, E, o]);
  let x = !(!o || !E || !U || R), [, L] = zr(x, b, S, { start: T, end: N }), ee = oe({ ref: w, className: ((r = et(h.className, $ && f, $ && c, L.enter && f, L.enter && L.closed && c, L.enter && !L.closed && p, L.leave && a, L.leave && !L.closed && d, L.leave && L.closed && m, !L.transition && S && v)) == null ? void 0 : r.trim()) || void 0, ...Zr(L) }), Z = 0;
  return O === "visible" && (Z |= fe.Open), O === "hidden" && (Z |= fe.Closed), L.enter && (Z |= fe.Opening), L.leave && (Z |= fe.Closing), M.createElement(Ie.Provider, { value: P }, M.createElement(Oo, { value: Z }, ue({ ourProps: ee, theirProps: h, defaultTag: bn, features: En, visible: O === "visible", name: "Transition.Child" })));
}
function zo(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = F(null), u = gn(e), s = pe(...u ? [l, t] : t === null ? [] : [t]);
  ht();
  let f = mn();
  if (n === void 0 && f !== null && (n = (f & fe.Open) === fe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, p] = H(n ? "visible" : "hidden"), v = hn(() => {
    n || p("hidden");
  }), [a, d] = H(!0), m = F([n]);
  D(() => {
    a !== !1 && m.current[m.current.length - 1] !== n && (m.current.push(n), d(!1));
  }, [m, n]);
  let h = J(() => ({ show: n, appear: r, initial: a }), [n, r, a]);
  Cr(n, l, () => p("hidden")), D(() => {
    n ? p("visible") : !ke(v) && l.current !== null && p("hidden");
  }, [n, v]);
  let b = { unmount: o }, E = W(() => {
    var C;
    a && d(!1), (C = e.beforeEnter) == null || C.call(e);
  }), w = W(() => {
    var C;
    a && d(!1), (C = e.beforeLeave) == null || C.call(e);
  });
  return M.createElement(Ie.Provider, { value: v }, M.createElement(Ne.Provider, { value: h }, ue({ ourProps: { ...b, as: ne, children: M.createElement(yn, { ref: s, ...b, ...i, beforeEnter: E, beforeLeave: w }) }, theirProps: {}, defaultTag: ne, features: En, visible: c === "visible", name: "Transition" })));
}
function Qo(e, t) {
  let n = k(Ne) !== null, r = mn() !== null;
  return M.createElement(M.Fragment, null, !n && r ? M.createElement(ot, { ref: t, ...e }) : M.createElement(yn, { ref: t, ...e }));
}
let ot = re(zo), yn = re(Zo), ei = re(Qo), _i = Object.assign(ot, { Child: ei, Root: ot });
function Bi(e) {
  return In({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z", clipRule: "evenodd" }, child: [] }] })(e);
}
export {
  ui as $,
  xi as A,
  Oi as B,
  sn as C,
  ci as D,
  mn as E,
  Pi as F,
  gi as G,
  Bi as H,
  yr as I,
  Cr as J,
  bi as K,
  Ri as L,
  Gt as M,
  $i as N,
  So as O,
  Di as P,
  He as Q,
  Ni as R,
  yi as S,
  fi as T,
  Zr as U,
  zr as V,
  re as W,
  _i as X,
  Wi as Y,
  le as Z,
  Li as _,
  Ci as a,
  Hr as a0,
  ln as a1,
  Ho as a2,
  Er as a3,
  mi as a4,
  vi as a5,
  Ti as a6,
  Mr as a7,
  ji as a8,
  kr as a9,
  nt as aa,
  ki as ab,
  _r as ac,
  Mi as b,
  Fi as c,
  Si as d,
  xo as e,
  Yt as f,
  Ei as g,
  Me as h,
  Oo as i,
  fe as j,
  pi as k,
  di as l,
  ue as m,
  D as n,
  W as o,
  Fe as p,
  mr as q,
  Ai as r,
  Ee as s,
  Hi as t,
  Po as u,
  Ii as v,
  li as w,
  ai as x,
  pe as y,
  hi as z
};
