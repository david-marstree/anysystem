import * as b from "react";
import I, { useRef as k, useCallback as G, useEffect as X, useState as j, useMemo as J, useLayoutEffect as Dt, createContext as te, useContext as K, forwardRef as pr, Fragment as le, isValidElement as gr, cloneElement as hr, createElement as vr, useId as Ht, useReducer as br, useSyncExternalStore as wr } from "react";
import { r as Te } from "./index-DsprzSCj.js";
import { G as yr } from "./iconBase-Bipuk9tK.js";
const yn = typeof document < "u" ? I.useLayoutEffect : () => {
};
function Er(e) {
  const t = k(null);
  return yn(() => {
    t.current = e;
  }, [
    e
  ]), G((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Ve = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, we = (e) => e && "window" in e && e.window === e ? e : Ve(e).defaultView || window;
function xr(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function $r(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Tr() {
  return $r(/^Mac/i);
}
function Rr() {
  return xr(/Android/i);
}
function Cr(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Rr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class Pr {
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
function En(e) {
  let t = k({
    isFocused: !1,
    observer: null
  });
  yn(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Er((r) => {
    e == null || e(r);
  });
  return G((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        t.current.isFocused = !1, o.disabled && n(new Pr("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let s = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: s
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: s
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
function Lr(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = G((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = En(i), s = G((u) => {
    const c = Ve(u.target);
    u.target === u.currentTarget && c.activeElement === u.target && (n && n(u), o && o(!0), l(u));
  }, [
    o,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? s : void 0,
      onBlur: !t && (r || o) ? i : void 0
    }
  };
}
let Ke = null, $t = /* @__PURE__ */ new Set(), We = /* @__PURE__ */ new Map(), Re = !1, Tt = !1;
const Fr = {
  Tab: !0,
  Escape: !0
};
function kt(e, t) {
  for (let n of $t) n(e, t);
}
function Mr(e) {
  return !(e.metaKey || !Tr() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ze(e) {
  Re = !0, Mr(e) && (Ke = "keyboard", kt("keyboard", e));
}
function ne(e) {
  Ke = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Re = !0, kt("pointer", e));
}
function xn(e) {
  Cr(e) && (Re = !0, Ke = "virtual");
}
function $n(e) {
  e.target === window || e.target === document || (!Re && !Tt && (Ke = "virtual", kt("virtual", e)), Re = !1, Tt = !1);
}
function Tn() {
  Re = !1, Tt = !0;
}
function Rt(e) {
  if (typeof window > "u" || We.get(we(e))) return;
  const t = we(e), n = Ve(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Re = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Ze, !0), n.addEventListener("keyup", Ze, !0), n.addEventListener("click", xn, !0), t.addEventListener("focus", $n, !0), t.addEventListener("blur", Tn, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ne, !0), n.addEventListener("pointermove", ne, !0), n.addEventListener("pointerup", ne, !0)) : (n.addEventListener("mousedown", ne, !0), n.addEventListener("mousemove", ne, !0), n.addEventListener("mouseup", ne, !0)), t.addEventListener("beforeunload", () => {
    Rn(e);
  }, {
    once: !0
  }), We.set(t, {
    focus: r
  });
}
const Rn = (e, t) => {
  const n = we(e), r = Ve(e);
  t && r.removeEventListener("DOMContentLoaded", t), We.has(n) && (n.HTMLElement.prototype.focus = We.get(n).focus, r.removeEventListener("keydown", Ze, !0), r.removeEventListener("keyup", Ze, !0), r.removeEventListener("click", xn, !0), n.removeEventListener("focus", $n, !0), n.removeEventListener("blur", Tn, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ne, !0), r.removeEventListener("pointermove", ne, !0), r.removeEventListener("pointerup", ne, !0)) : (r.removeEventListener("mousedown", ne, !0), r.removeEventListener("mousemove", ne, !0), r.removeEventListener("mouseup", ne, !0)), We.delete(n));
};
function Sr(e) {
  const t = Ve(e);
  let n;
  return t.readyState !== "loading" ? Rt(e) : (n = () => {
    Rt(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Rn(e, n);
}
typeof document < "u" && Sr();
function Cn() {
  return Ke !== "pointer";
}
const Or = /* @__PURE__ */ new Set([
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
function Ar(e, t, n) {
  var r;
  const o = typeof window < "u" ? we(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? we(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? we(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? we(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !Or.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof s && !Fr[n.key]);
}
function Dr(e, t, n) {
  Rt(), X(() => {
    let r = (o, i) => {
      Ar(!!(n != null && n.isTextInput), o, i) && e(Cn());
    };
    return $t.add(r), () => {
      $t.delete(r);
    };
  }, t);
}
function Hr(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = k({
    isFocusWithin: !1
  }), l = G((c) => {
    i.current.isFocusWithin && !c.currentTarget.contains(c.relatedTarget) && (i.current.isFocusWithin = !1, n && n(c), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = En(l), u = G((c) => {
    !i.current.isFocusWithin && document.activeElement === c.target && (r && r(c), o && o(!0), i.current.isFocusWithin = !0, s(c));
  }, [
    r,
    o,
    s
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
      onBlur: l
    }
  };
}
let Qe = !1, dt = 0;
function Ct() {
  Qe = !0, setTimeout(() => {
    Qe = !1;
  }, 50);
}
function zt(e) {
  e.pointerType === "touch" && Ct();
}
function kr() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", zt) : document.addEventListener("touchend", Ct), dt++, () => {
      dt--, !(dt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", zt) : document.removeEventListener("touchend", Ct));
    };
}
function Fl(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = j(!1), s = k({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  X(kr, []);
  let { hoverProps: u, triggerHoverEnd: c } = J(() => {
    let f = (a, d) => {
      if (s.pointerType = d, o || d === "touch" || s.isHovered || !a.currentTarget.contains(a.target)) return;
      s.isHovered = !0;
      let p = a.currentTarget;
      s.target = p, t && t({
        type: "hoverstart",
        target: p,
        pointerType: d
      }), n && n(!0), l(!0);
    }, m = (a, d) => {
      if (s.pointerType = "", s.target = null, d === "touch" || !s.isHovered) return;
      s.isHovered = !1;
      let p = a.currentTarget;
      r && r({
        type: "hoverend",
        target: p,
        pointerType: d
      }), n && n(!1), l(!1);
    }, g = {};
    return typeof PointerEvent < "u" ? (g.onPointerEnter = (a) => {
      Qe && a.pointerType === "mouse" || f(a, a.pointerType);
    }, g.onPointerLeave = (a) => {
      !o && a.currentTarget.contains(a.target) && m(a, a.pointerType);
    }) : (g.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, g.onMouseEnter = (a) => {
      !s.ignoreEmulatedMouseEvents && !Qe && f(a, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, g.onMouseLeave = (a) => {
      !o && a.currentTarget.contains(a.target) && m(a, "mouse");
    }), {
      hoverProps: g,
      triggerHoverEnd: m
    };
  }, [
    t,
    n,
    r,
    o,
    s
  ]);
  return X(() => {
    o && c({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function Ml(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = k({
    isFocused: !1,
    isFocusVisible: t || Cn()
  }), [i, l] = j(!1), [s, u] = j(() => o.current.isFocused && o.current.isFocusVisible), c = G(() => u(o.current.isFocused && o.current.isFocusVisible), []), f = G((a) => {
    o.current.isFocused = a, l(a), c();
  }, [
    c
  ]);
  Dr((a) => {
    o.current.isFocusVisible = a, c();
  }, [], {
    isTextInput: n
  });
  let { focusProps: m } = Lr({
    isDisabled: r,
    onFocusChange: f
  }), { focusWithinProps: g } = Hr({
    isDisabled: !r,
    onFocusWithinChange: f
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? g : m
  };
}
var Nr = Object.defineProperty, Ir = (e, t, n) => t in e ? Nr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mt = (e, t, n) => (Ir(e, typeof t != "symbol" ? t + "" : t, n), n);
let Wr = class {
  constructor() {
    mt(this, "current", this.detect()), mt(this, "handoffState", "pending"), mt(this, "currentId", 0);
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
}, $e = new Wr();
function ot(e) {
  return $e.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Pn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function ve() {
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
    return Pn(() => {
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
    let r = ve();
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
function Ue() {
  let [e] = j(ve);
  return X(() => () => e.dispose(), [e]), e;
}
let V = (e, t) => {
  $e.isServer ? X(e, t) : Dt(e, t);
};
function Ae(e) {
  let t = k(e);
  return V(() => {
    t.current = e;
  }, [e]), t;
}
let Y = function(e) {
  let t = Ae(e);
  return I.useCallback((...n) => t.current(...n), [t]);
};
function _r(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Br(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function Ol({ disabled: e = !1 } = {}) {
  let t = k(null), [n, r] = j(!1), o = Ue(), i = Y(() => {
    t.current = null, r(!1), o.dispose();
  }), l = Y((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let u = ot(s.currentTarget);
        o.addEventListener(u, "pointerup", i, !1), o.addEventListener(u, "pointermove", (c) => {
          if (t.current) {
            let f = _r(c);
            r(Br(f, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(u, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let jr = te(void 0);
function Ln() {
  return K(jr);
}
function Pt(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ye(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ye), r;
}
var Fn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Fn || {}), fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fe || {});
function be({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? Vr;
  let u = Mn(t, e);
  if (i) return qe(u, n, r, l, s);
  let c = o ?? 0;
  if (c & 2) {
    let { static: f = !1, ...m } = u;
    if (f) return qe(m, n, r, l, s);
  }
  if (c & 1) {
    let { unmount: f = !0, ...m } = u;
    return Ye(f ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return qe({ ...m, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return qe(u, n, r, l, s);
}
function qe(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...u } = pt(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [s]: e.ref } : {}, f = typeof l == "function" ? l(t) : l;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t)), u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
  let m = {};
  if (t) {
    let g = !1, a = [];
    for (let [d, p] of Object.entries(t)) typeof p == "boolean" && (g = !0), p === !0 && a.push(d.replace(/([A-Z])/g, (h) => `-${h.toLowerCase()}`));
    if (g) {
      m["data-headlessui-state"] = a.join(" ");
      for (let d of a) m[`data-${d}`] = "";
    }
  }
  if (i === le && (Object.keys(ce(u)).length > 0 || Object.keys(ce(m)).length > 0)) if (!gr(f) || Array.isArray(f) && f.length > 1) {
    if (Object.keys(ce(u)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ce(u)).concat(Object.keys(ce(m))).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
  } else {
    let g = f.props, a = g == null ? void 0 : g.className, d = typeof a == "function" ? (...v) => Pt(a(...v), u.className) : Pt(a, u.className), p = d ? { className: d } : {}, h = Mn(f.props, ce(pt(u, ["ref"])));
    for (let v in m) v in h && delete m[v];
    return hr(f, Object.assign({}, h, m, c, { ref: o(f.ref, c.ref) }, p));
  }
  return vr(i, Object.assign({}, pt(u, ["ref"]), i !== le && c, i !== le && m), f);
}
function Vr(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Mn(...e) {
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
    for (let s of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      s(o, ...i);
    }
  } });
  return t;
}
function Al(...e) {
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
function ue(e) {
  var t;
  return Object.assign(pr(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ce(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function pt(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Dl(e, t, n) {
  let [r, o] = j(n), i = e !== void 0, l = k(i), s = k(!1), u = k(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !u.current && (u.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, Y((c) => (i || o(c), t == null ? void 0 : t(c)))];
}
function Hl(e) {
  let [t] = j(e);
  return t;
}
function Sn(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) An(n, On(t, r), o);
  return n;
}
function On(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function An(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) An(e, On(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Sn(n, t, e);
}
function kl(e) {
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
let Kr = "span";
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
function Ur(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return be({ ourProps: i, theirProps: o, slot: {}, defaultTag: Kr, name: "Hidden" });
}
let Dn = ue(Ur), Yr = te(null);
function Xr({ children: e }) {
  let t = K(Yr);
  if (!t) return I.createElement(I.Fragment, null, e);
  let { target: n } = t;
  return n ? Te.createPortal(I.createElement(I.Fragment, null, e), n) : null;
}
function Nl({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = j(null), s = Ue();
  return X(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), I.createElement(Xr, null, I.createElement(Gr, { setForm: l, formId: t }), Sn(e).map(([u, c]) => I.createElement(Dn, { features: Nt.Hidden, ...ce({ key: u, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: u, value: c, ...o }) })));
}
function Gr({ setForm: e, formId: t }) {
  return X(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : I.createElement(Dn, { features: Nt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let qr = te(void 0);
function zr() {
  return K(qr);
}
function Il(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Jr(n) ? !1 : r;
}
function Jr(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Hn = Symbol();
function Zr(e, t = !0) {
  return Object.assign(e, { [Hn]: t });
}
function Le(...e) {
  let t = k(e);
  X(() => {
    t.current = e;
  }, [e]);
  let n = Y((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Hn])) ? void 0 : n;
}
let It = te(null);
It.displayName = "DescriptionContext";
function kn() {
  let e = K(It);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, kn), t;
  }
  return e;
}
function Wl() {
  var e, t;
  return (t = (e = K(It)) == null ? void 0 : e.value) != null ? t : void 0;
}
let Qr = "p";
function eo(e, t) {
  let n = Ht(), r = Ln(), { id: o = `headlessui-description-${n}`, ...i } = e, l = kn(), s = Le(t);
  V(() => l.register(o), [o, l.register]);
  let u = r || !1, c = J(() => ({ ...l.slot, disabled: u }), [l.slot, u]), f = { ref: s, ...l.props, id: o };
  return be({ ourProps: f, theirProps: i, slot: c, defaultTag: Qr, name: l.name || "Description" });
}
let to = ue(eo);
Object.assign(to, {});
var no = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(no || {});
let it = te(null);
it.displayName = "LabelContext";
function Nn() {
  let e = K(it);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Nn), t;
  }
  return e;
}
function ro(e) {
  var t, n, r;
  let o = (n = (t = K(it)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function _l({ inherit: e = !1 } = {}) {
  let t = ro(), [n, r] = j([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, J(() => function(i) {
    let l = Y((u) => (r((c) => [...c, u]), () => r((c) => {
      let f = c.slice(), m = f.indexOf(u);
      return m !== -1 && f.splice(m, 1), f;
    }))), s = J(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return I.createElement(it.Provider, { value: s }, i.children);
  }, [r])];
}
let oo = "label";
function io(e, t) {
  var n;
  let r = Ht(), o = Nn(), i = zr(), l = Ln(), { id: s = `headlessui-label-${r}`, htmlFor: u = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c = !1, ...f } = e, m = Le(t);
  V(() => o.register(s), [s, o.register]);
  let g = Y((h) => {
    let v = h.currentTarget;
    if (v instanceof HTMLLabelElement && h.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(h), v instanceof HTMLLabelElement) {
      let w = document.getElementById(v.htmlFor);
      if (w) {
        let y = w.getAttribute("disabled");
        if (y === "true" || y === "") return;
        let $ = w.getAttribute("aria-disabled");
        if ($ === "true" || $ === "") return;
        (w instanceof HTMLInputElement && (w.type === "radio" || w.type === "checkbox") || w.role === "radio" || w.role === "checkbox" || w.role === "switch") && w.click(), w.focus({ preventScroll: !0 });
      }
    }
  }), a = l || !1, d = J(() => ({ ...o.slot, disabled: a }), [o.slot, a]), p = { ref: m, ...o.props, id: s, htmlFor: u, onClick: g };
  return c && ("onClick" in p && (delete p.htmlFor, delete p.onClick), "onClick" in f && delete f.onClick), be({ ourProps: p, theirProps: f, slot: d, defaultTag: u ? oo : "div", name: o.name || "Label" });
}
let lo = ue(io), Bl = Object.assign(lo, {});
function so(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function jl(e = so) {
  return G((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function uo(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Vl(e, t = !1) {
  let n = e === null ? null : "current" in e ? e.current : e, [r, o] = br(() => ({}), {}), i = J(() => uo(n), [n, r]);
  return V(() => {
    if (!n) return;
    let l = new ResizeObserver(o);
    return l.observe(n), () => {
      l.disconnect();
    };
  }, [n]), t ? { width: `${i.width}px`, height: `${i.height}px` } : i;
}
let ao = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function In(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(o) {
    return r.add(o), () => r.delete(o);
  }, dispatch(o, ...i) {
    let l = t[o].call(n, ...i);
    l && (n = l, r.forEach((s) => s()));
  } };
}
function Wn(e) {
  return wr(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let co = new ao(() => In(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Wt(e, t) {
  let n = co.get(t), r = Ht(), o = Wn(n);
  if (V(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let Lt = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map();
function Jt(e) {
  var t;
  let n = (t = _e.get(e)) != null ? t : 0;
  return _e.set(e, n + 1), n !== 0 ? () => Zt(e) : (Lt.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Zt(e));
}
function Zt(e) {
  var t;
  let n = (t = _e.get(e)) != null ? t : 1;
  if (n === 1 ? _e.delete(e) : _e.set(e, n - 1), n !== 1) return;
  let r = Lt.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Lt.delete(e));
}
function Ul(e, { allowed: t, disallowed: n } = {}) {
  let r = Wt(e, "inert-others");
  V(() => {
    var o, i;
    if (!r) return;
    let l = ve();
    for (let u of (o = n == null ? void 0 : n()) != null ? o : []) u && l.add(Jt(u));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let u of s) {
      if (!u) continue;
      let c = ot(u);
      if (!c) continue;
      let f = u.parentElement;
      for (; f && f !== c.body; ) {
        for (let m of f.children) s.some((g) => m.contains(g)) || l.add(Jt(m));
        f = f.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function fo(e, t, n) {
  let r = Ae((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  X(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = ve();
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
let Ft = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), mo = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var po = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(po || {}), go = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(go || {}), ho = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ho || {});
function _n(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ft)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function vo(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(mo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Bn = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Bn || {});
function bo(e, t = 0) {
  var n;
  return e === ((n = ot(e)) == null ? void 0 : n.body) ? !1 : Ye(t, { 0() {
    return e.matches(Ft);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Ft)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var wo = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(wo || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let yo = ["textarea", "input"].join(",");
function Eo(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, yo)) != null ? n : !1;
}
function xo(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Yl(e, t) {
  return $o(_n(), t, { relativeTo: e });
}
function $o(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? xo(e) : e : t & 64 ? vo(e) : _n(e);
  o.length > 0 && l.length > 1 && (l = l.filter((a) => !o.some((d) => d != null && "current" in d ? (d == null ? void 0 : d.current) === a : d === a))), r = r ?? i.activeElement;
  let s = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8) return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, f = 0, m = l.length, g;
  do {
    if (f >= m || f + m <= 0) return 0;
    let a = u + f;
    if (t & 16) a = (a + m) % m;
    else {
      if (a < 0) return 3;
      if (a >= m) return 1;
    }
    g = l[a], g == null || g.focus(c), f += s;
  } while (g !== i.activeElement);
  return t & 6 && Eo(g) && g.select(), 2;
}
function jn() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function To() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ro() {
  return jn() || To();
}
function Ie(e, t, n, r) {
  let o = Ae(n);
  X(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Co(e, t, n, r) {
  let o = Ae(n);
  X(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const Qt = 30;
function Xl(e, t, n) {
  let r = Wt(e, "outside-click"), o = Ae(n), i = G(function(u, c) {
    if (u.defaultPrevented) return;
    let f = c(u);
    if (f === null || !f.getRootNode().contains(f) || !f.isConnected) return;
    let m = function g(a) {
      return typeof a == "function" ? g(a()) : Array.isArray(a) || a instanceof Set ? a : [a];
    }(t);
    for (let g of m) {
      if (g === null) continue;
      let a = g instanceof HTMLElement ? g : g.current;
      if (a != null && a.contains(f) || u.composed && u.composedPath().includes(a)) return;
    }
    return !bo(f, Bn.Loose) && f.tabIndex !== -1 && u.preventDefault(), o.current(u, f);
  }, [o]), l = k(null);
  Ie(r, "pointerdown", (u) => {
    var c, f;
    l.current = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target;
  }, !0), Ie(r, "mousedown", (u) => {
    var c, f;
    l.current = ((f = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : f[0]) || u.target;
  }, !0), Ie(r, "click", (u) => {
    Ro() || l.current && (i(u, () => l.current), l.current = null);
  }, !0);
  let s = k({ x: 0, y: 0 });
  Ie(r, "touchstart", (u) => {
    s.current.x = u.touches[0].clientX, s.current.y = u.touches[0].clientY;
  }, !0), Ie(r, "touchend", (u) => {
    let c = { x: u.changedTouches[0].clientX, y: u.changedTouches[0].clientY };
    if (!(Math.abs(c.x - s.current.x) >= Qt || Math.abs(c.y - s.current.y) >= Qt)) return i(u, () => u.target instanceof HTMLElement ? u.target : null);
  }, !0), Co(r, "blur", (u) => i(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Vn(...e) {
  return J(() => ot(...e), [...e]);
}
function en(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Gl(e, t) {
  let [n, r] = j(() => en(e));
  return V(() => {
    r(en(e));
  }, [e.type, e.as]), V(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
function Po() {
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
function Lo() {
  return jn() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = ve();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let u = s.target.closest("a");
          if (!u) return;
          let { hash: c } = new URL(u.href), f = e.querySelector(c);
          f && !r(f) && (l = f);
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
        i !== u && window.scrollTo(0, i), l && l.isConnected && (l.scrollIntoView({ block: "nearest" }), l = null);
      });
    });
  } } : {};
}
function Fo() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Mo(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let ye = In(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ve(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Mo(n) }, o = [Lo(), Po(), Fo()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
ye.subscribe(() => {
  let e = ye.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && ye.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && ye.dispatch("TEARDOWN", n);
  }
});
function So(e, t, n = () => ({ containers: [] })) {
  let r = Wn(ye), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return V(() => {
    if (!(!t || !e)) return ye.dispatch("PUSH", t, n), () => ye.dispatch("POP", t, n);
  }, [e, t]), i;
}
function ql(e, t, n = () => [document.body]) {
  let r = Wt(e, "scroll-lock");
  So(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function tn(e) {
  return [e.screenX, e.screenY];
}
function zl() {
  let e = k([-1, -1]);
  return { wasMoved(t) {
    let n = tn(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = tn(t);
  } };
}
function Oo(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return t.called = !0, e(...n);
  };
}
function Ao(e = 0) {
  let [t, n] = j(e), r = G((u) => n(u), [t]), o = G((u) => n((c) => c | u), [t]), i = G((u) => (t & u) === u, [t]), l = G((u) => n((c) => c & ~u), [n]), s = G((u) => n((c) => c ^ u), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var Do = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Do || {});
function Ho(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function ko(e, t, n, r) {
  let [o, i] = j(n), { hasFlag: l, addFlag: s, removeFlag: u } = Ao(e && o ? 3 : 0), c = k(!1), f = k(!1), m = Ue();
  return V(function g() {
    var a;
    if (!e) return;
    n && i(!0);
    let d = t.current;
    return d ? ((a = r == null ? void 0 : r.start) == null || a.call(r, n), No(d, { inFlight: c, prepare() {
      f.current ? f.current = !1 : f.current = c.current, c.current = !0, !f.current && (n ? (s(3), u(4)) : (s(4), u(2)));
    }, run() {
      f.current ? n ? (u(3), s(4)) : (u(4), s(3)) : n ? u(1) : s(1);
    }, done() {
      var p;
      f.current && typeof d.getAnimations == "function" && d.getAnimations().length > 0 || (c.current = !1, u(7), n || i(!1), (p = r == null ? void 0 : r.end) == null || p.call(r, n));
    } })) : n ? (s(3), m.nextFrame(() => g())) : void 0;
  }, [e, n, t, m]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function No(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = ve();
  return Wo(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    i.add(Io(e, r)), n();
  }), i.dispose;
}
function Io(e, t) {
  let n = Oo(t), r = ve();
  if (!e) return r.dispose;
  let { transitionDuration: o, transitionDelay: i } = getComputedStyle(e), [l, s] = [o, i].map((c) => {
    let [f = 0] = c.split(",").filter(Boolean).map((m) => m.includes("ms") ? parseFloat(m) : parseFloat(m) * 1e3).sort((m, g) => g - m);
    return f;
  }), u = l + s;
  if (u !== 0) {
    let c = r.group((f) => {
      let m = f.setTimeout(() => {
        n(), f.dispose();
      }, u);
      f.addEventListener(e, "transitionrun", (g) => {
        g.target === g.currentTarget && (m(), f.addEventListener(e, "transitioncancel", (a) => {
          a.target === a.currentTarget && (n(), c());
        }));
      });
    });
    r.addEventListener(e, "transitionend", (f) => {
      f.target === f.currentTarget && (n(), r.dispose());
    });
  } else n();
  return r.dispose;
}
function Wo(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function De(e) {
  return Kn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (Kn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Kn(e) {
  return e instanceof Node || e instanceof z(e).Node;
}
function W(e) {
  return e instanceof Element || e instanceof z(e).Element;
}
function ee(e) {
  return e instanceof HTMLElement || e instanceof z(e).HTMLElement;
}
function Mt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof z(e).ShadowRoot;
}
function Xe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = re(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function _o(e) {
  return ["table", "td", "th"].includes(De(e));
}
function lt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function _t(e) {
  const t = Bt(), n = re(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Bo(e) {
  let t = se(e);
  for (; ee(t) && !pe(t); ) {
    if (lt(t))
      return null;
    if (_t(t))
      return t;
    t = se(t);
  }
  return null;
}
function Bt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function pe(e) {
  return ["html", "body", "#document"].includes(De(e));
}
function re(e) {
  return z(e).getComputedStyle(e);
}
function st(e) {
  return W(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function se(e) {
  if (De(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Mt(e) && e.host || // Fallback.
    ae(e)
  );
  return Mt(t) ? t.host : t;
}
function Un(e) {
  const t = se(e);
  return pe(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ee(t) && Xe(t) ? t : Un(t);
}
function me(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Un(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = z(o);
  return i ? t.concat(l, l.visualViewport || [], Xe(o) ? o : [], l.frameElement && n ? me(l.frameElement) : []) : t.concat(o, me(o, [], n));
}
function nn(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Be(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Mt(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Yn() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function jt() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function jo(e) {
  return Uo() ? !1 : !rn() && e.width === 0 && e.height === 0 || rn() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function Vo() {
  return /apple/i.test(navigator.vendor);
}
function rn() {
  const e = /android/i;
  return e.test(Yn()) || e.test(jt());
}
function Ko() {
  return Yn().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Uo() {
  return jt().includes("jsdom/");
}
function St(e, t) {
  const n = ["mouse", "pen"];
  return n.push("", void 0), n.includes(e);
}
function Yo(e) {
  return "nativeEvent" in e;
}
function Xo(e) {
  return e.matches("html,body");
}
function Ee(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function gt(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Me(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Go = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function qo(e) {
  return ee(e) && e.matches(Go);
}
const de = Math.min, Q = Math.max, et = Math.round, ze = Math.floor, ge = (e) => ({
  x: e,
  y: e
}), zo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jo = {
  start: "end",
  end: "start"
};
function on(e, t, n) {
  return Q(e, de(t, n));
}
function He(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function he(e) {
  return e.split("-")[0];
}
function Ge(e) {
  return e.split("-")[1];
}
function Xn(e) {
  return e === "x" ? "y" : "x";
}
function Gn(e) {
  return e === "y" ? "height" : "width";
}
function Ce(e) {
  return ["top", "bottom"].includes(he(e)) ? "y" : "x";
}
function qn(e) {
  return Xn(Ce(e));
}
function Zo(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ge(e), o = qn(e), i = Gn(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = tt(l)), [l, tt(l)];
}
function Qo(e) {
  const t = tt(e);
  return [Ot(e), t, Ot(t)];
}
function Ot(e) {
  return e.replace(/start|end/g, (t) => Jo[t]);
}
function ei(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function ti(e, t, n, r) {
  const o = Ge(e);
  let i = ei(he(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Ot)))), i;
}
function tt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zo[t]);
}
function ni(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ri(e) {
  return typeof e != "number" ? ni(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function nt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function ln(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Ce(t), l = qn(t), s = Gn(l), u = he(t), c = i === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, g = r[s] / 2 - o[s] / 2;
  let a;
  switch (u) {
    case "top":
      a = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      a = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      a = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      a = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      a = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ge(t)) {
    case "start":
      a[l] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      a[l] += g * (n && c ? -1 : 1);
      break;
  }
  return a;
}
const oi = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let c = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = ln(c, r, u), g = r, a = {}, d = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: h,
      fn: v
    } = s[p], {
      x: w,
      y,
      data: $,
      reset: C
    } = await v({
      x: f,
      y: m,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: a,
      rects: c,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, m = y ?? m, a = {
      ...a,
      [h]: {
        ...a[h],
        ...$
      }
    }, C && d <= 50 && (d++, typeof C == "object" && (C.placement && (g = C.placement), C.rects && (c = C.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: f,
      y: m
    } = ln(c, g, u)), p = -1);
  }
  return {
    x: f,
    y: m,
    placement: g,
    strategy: o,
    middlewareData: a
  };
};
async function ut(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: l,
    elements: s,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: g = !1,
    padding: a = 0
  } = He(t, e), d = ri(a), h = s[g ? m === "floating" ? "reference" : "floating" : m], v = nt(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: f,
    strategy: u
  })), w = m === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), $ = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = nt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: y,
    strategy: u
  }) : w);
  return {
    top: (v.top - C.top + d.top) / $.y,
    bottom: (C.bottom - v.bottom + d.bottom) / $.y,
    left: (v.left - C.left + d.left) / $.x,
    right: (C.right - v.right + d.right) / $.x
  };
}
const ii = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: l,
        initialPlacement: s,
        platform: u,
        elements: c
      } = t, {
        mainAxis: f = !0,
        crossAxis: m = !0,
        fallbackPlacements: g,
        fallbackStrategy: a = "bestFit",
        fallbackAxisSideDirection: d = "none",
        flipAlignment: p = !0,
        ...h
      } = He(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = he(o), w = Ce(s), y = he(s) === s, $ = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), C = g || (y || !p ? [tt(s)] : Qo(s)), S = d !== "none";
      !g && S && C.push(...ti(s, p, d, $));
      const N = [s, ...C], M = await ut(t, h), _ = [];
      let D = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (f && _.push(M[v]), m) {
        const P = Zo(o, l, $);
        _.push(M[P[0]], M[P[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: _
      }], !_.every((P) => P <= 0)) {
        var A, H;
        const P = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, T = N[P];
        if (T)
          return {
            data: {
              index: P,
              overflows: D
            },
            reset: {
              placement: T
            }
          };
        let x = (H = D.filter((E) => E.overflows[0] <= 0).sort((E, R) => E.overflows[1] - R.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!x)
          switch (a) {
            case "bestFit": {
              var B;
              const E = (B = D.filter((R) => {
                if (S) {
                  const F = Ce(R.placement);
                  return F === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  F === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((F) => F > 0).reduce((F, L) => F + L, 0)]).sort((R, F) => R[1] - F[1])[0]) == null ? void 0 : B[0];
              E && (x = E);
              break;
            }
            case "initialPlacement":
              x = s;
              break;
          }
        if (o !== x)
          return {
            reset: {
              placement: x
            }
          };
      }
      return {};
    }
  };
};
async function li(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = he(n), s = Ge(n), u = Ce(n) === "y", c = ["left", "top"].includes(l) ? -1 : 1, f = i && u ? -1 : 1, m = He(t, e);
  let {
    mainAxis: g,
    crossAxis: a,
    alignmentAxis: d
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...m
  };
  return s && typeof d == "number" && (a = s === "end" ? d * -1 : d), u ? {
    x: a * f,
    y: g * c
  } : {
    x: g * c,
    y: a * f
  };
}
const si = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: l,
        middlewareData: s
      } = t, u = await li(t, e);
      return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: i + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, ui = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (h) => {
            let {
              x: v,
              y: w
            } = h;
            return {
              x: v,
              y: w
            };
          }
        },
        ...u
      } = He(e, t), c = {
        x: n,
        y: r
      }, f = await ut(t, u), m = Ce(he(o)), g = Xn(m);
      let a = c[g], d = c[m];
      if (i) {
        const h = g === "y" ? "top" : "left", v = g === "y" ? "bottom" : "right", w = a + f[h], y = a - f[v];
        a = on(w, a, y);
      }
      if (l) {
        const h = m === "y" ? "top" : "left", v = m === "y" ? "bottom" : "right", w = d + f[h], y = d - f[v];
        d = on(w, d, y);
      }
      const p = s.fn({
        ...t,
        [g]: a,
        [m]: d
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r
        }
      };
    }
  };
}, ai = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...s
      } = He(e, t), u = await ut(t, s), c = he(n), f = Ge(n), m = Ce(n) === "y", {
        width: g,
        height: a
      } = r.floating;
      let d, p;
      c === "top" || c === "bottom" ? (d = c, p = f === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (p = c, d = f === "end" ? "top" : "bottom");
      const h = a - u.top - u.bottom, v = g - u.left - u.right, w = de(a - u[d], h), y = de(g - u[p], v), $ = !t.middlewareData.shift;
      let C = w, S = y;
      if (m ? S = f || $ ? de(y, v) : v : C = f || $ ? de(w, h) : h, $ && !f) {
        const M = Q(u.left, 0), _ = Q(u.right, 0), D = Q(u.top, 0), A = Q(u.bottom, 0);
        m ? S = g - 2 * (M !== 0 || _ !== 0 ? M + _ : Q(u.left, u.right)) : C = a - 2 * (D !== 0 || A !== 0 ? D + A : Q(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: S,
        availableHeight: C
      });
      const N = await o.getDimensions(i.floating);
      return g !== N.width || a !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function zn(e) {
  const t = re(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ee(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = et(n) !== i || et(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function Vt(e) {
  return W(e) ? e : e.contextElement;
}
function Se(e) {
  const t = Vt(e);
  if (!ee(t))
    return ge(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = zn(t);
  let l = (i ? et(n.width) : n.width) / r, s = (i ? et(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const ci = /* @__PURE__ */ ge(0);
function Jn(e) {
  const t = z(e);
  return !Bt() || !t.visualViewport ? ci : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== z(e) ? !1 : t;
}
function Pe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Vt(e);
  let l = ge(1);
  t && (r ? W(r) && (l = Se(r)) : l = Se(e));
  const s = fi(i, n, r) ? Jn(i) : ge(0);
  let u = (o.left + s.x) / l.x, c = (o.top + s.y) / l.y, f = o.width / l.x, m = o.height / l.y;
  if (i) {
    const g = z(i), a = r && W(r) ? z(r) : r;
    let d = g, p = d.frameElement;
    for (; p && r && a !== d; ) {
      const h = Se(p), v = p.getBoundingClientRect(), w = re(p), y = v.left + (p.clientLeft + parseFloat(w.paddingLeft)) * h.x, $ = v.top + (p.clientTop + parseFloat(w.paddingTop)) * h.y;
      u *= h.x, c *= h.y, f *= h.x, m *= h.y, u += y, c += $, d = z(p), p = d.frameElement;
    }
  }
  return nt({
    width: f,
    height: m,
    x: u,
    y: c
  });
}
function di(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = ae(r), s = t ? lt(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ge(1);
  const f = ge(0), m = ee(r);
  if ((m || !m && !i) && ((De(r) !== "body" || Xe(l)) && (u = st(r)), ee(r))) {
    const g = Pe(r);
    c = Se(r), f.x = g.x + r.clientLeft, f.y = g.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + f.x,
    y: n.y * c.y - u.scrollTop * c.y + f.y
  };
}
function mi(e) {
  return Array.from(e.getClientRects());
}
function Zn(e) {
  return Pe(ae(e)).left + st(e).scrollLeft;
}
function pi(e) {
  const t = ae(e), n = st(e), r = e.ownerDocument.body, o = Q(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Q(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Zn(e);
  const s = -n.scrollTop;
  return re(r).direction === "rtl" && (l += Q(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function gi(e, t) {
  const n = z(e), r = ae(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, u = 0;
  if (o) {
    i = o.width, l = o.height;
    const c = Bt();
    (!c || c && t === "fixed") && (s = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: u
  };
}
function hi(e, t) {
  const n = Pe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ee(e) ? Se(e) : ge(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, u = o * i.x, c = r * i.y;
  return {
    width: l,
    height: s,
    x: u,
    y: c
  };
}
function sn(e, t, n) {
  let r;
  if (t === "viewport")
    r = gi(e, n);
  else if (t === "document")
    r = pi(ae(e));
  else if (W(t))
    r = hi(t, n);
  else {
    const o = Jn(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return nt(r);
}
function Qn(e, t) {
  const n = se(e);
  return n === t || !W(n) || pe(n) ? !1 : re(n).position === "fixed" || Qn(n, t);
}
function vi(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = me(e, [], !1).filter((s) => W(s) && De(s) !== "body"), o = null;
  const i = re(e).position === "fixed";
  let l = i ? se(e) : e;
  for (; W(l) && !pe(l); ) {
    const s = re(l), u = _t(l);
    !u && s.position === "fixed" && (o = null), (i ? !u && !o : !u && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Xe(l) && !u && Qn(e, l)) ? r = r.filter((f) => f !== l) : o = s, l = se(l);
  }
  return t.set(e, r), r;
}
function bi(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? lt(t) ? [] : vi(t, this._c) : [].concat(n), r], s = l[0], u = l.reduce((c, f) => {
    const m = sn(t, f, o);
    return c.top = Q(m.top, c.top), c.right = de(m.right, c.right), c.bottom = de(m.bottom, c.bottom), c.left = Q(m.left, c.left), c;
  }, sn(t, s, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function wi(e) {
  const {
    width: t,
    height: n
  } = zn(e);
  return {
    width: t,
    height: n
  };
}
function yi(e, t, n) {
  const r = ee(t), o = ae(t), i = n === "fixed", l = Pe(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = ge(0);
  if (r || !r && !i)
    if ((De(t) !== "body" || Xe(o)) && (s = st(t)), r) {
      const m = Pe(t, !0, i, t);
      u.x = m.x + t.clientLeft, u.y = m.y + t.clientTop;
    } else o && (u.x = Zn(o));
  const c = l.left + s.scrollLeft - u.x, f = l.top + s.scrollTop - u.y;
  return {
    x: c,
    y: f,
    width: l.width,
    height: l.height
  };
}
function ht(e) {
  return re(e).position === "static";
}
function un(e, t) {
  return !ee(e) || re(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function er(e, t) {
  const n = z(e);
  if (lt(e))
    return n;
  if (!ee(e)) {
    let o = se(e);
    for (; o && !pe(o); ) {
      if (W(o) && !ht(o))
        return o;
      o = se(o);
    }
    return n;
  }
  let r = un(e, t);
  for (; r && _o(r) && ht(r); )
    r = un(r, t);
  return r && pe(r) && ht(r) && !_t(r) ? n : r || Bo(e) || n;
}
const Ei = async function(e) {
  const t = this.getOffsetParent || er, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: yi(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function xi(e) {
  return re(e).direction === "rtl";
}
const $i = {
  convertOffsetParentRelativeRectToViewportRelativeRect: di,
  getDocumentElement: ae,
  getClippingRect: bi,
  getOffsetParent: er,
  getElementRects: Ei,
  getClientRects: mi,
  getDimensions: wi,
  getScale: Se,
  isElement: W,
  isRTL: xi
};
function Ti(e, t) {
  let n = null, r;
  const o = ae(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), i();
    const {
      left: c,
      top: f,
      width: m,
      height: g
    } = e.getBoundingClientRect();
    if (s || t(), !m || !g)
      return;
    const a = ze(f), d = ze(o.clientWidth - (c + m)), p = ze(o.clientHeight - (f + g)), h = ze(c), w = {
      rootMargin: -a + "px " + -d + "px " + -p + "px " + -h + "px",
      threshold: Q(0, de(1, u)) || 1
    };
    let y = !0;
    function $(C) {
      const S = C[0].intersectionRatio;
      if (S !== u) {
        if (!y)
          return l();
        S ? l(!1, S) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver($, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, w);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function Ri(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, c = Vt(e), f = o || i ? [...c ? me(c) : [], ...me(t)] : [];
  f.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const m = c && s ? Ti(c, n) : null;
  let g = -1, a = null;
  l && (a = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === c && a && (a.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var y;
      (y = a) == null || y.observe(t);
    })), n();
  }), c && !u && a.observe(c), a.observe(t));
  let d, p = u ? Pe(e) : null;
  u && h();
  function h() {
    const v = Pe(e);
    p && (v.x !== p.x || v.y !== p.y || v.width !== p.width || v.height !== p.height) && n(), p = v, d = requestAnimationFrame(h);
  }
  return n(), () => {
    var v;
    f.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), m == null || m(), (v = a) == null || v.disconnect(), a = null, u && cancelAnimationFrame(d);
  };
}
const vt = ut, Ci = si, Pi = ui, Li = ii, Fi = ai, Mi = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: $i,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return oi(e, t, {
    ...o,
    platform: i
  });
};
var Je = typeof document < "u" ? Dt : X;
function rt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!rt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !rt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function tr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function an(e, t) {
  const n = tr(e);
  return Math.round(t * n) / n;
}
function cn(e) {
  const t = b.useRef(e);
  return Je(() => {
    t.current = e;
  }), t;
}
function Si(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: l
    } = {},
    transform: s = !0,
    whileElementsMounted: u,
    open: c
  } = e, [f, m] = b.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, a] = b.useState(r);
  rt(g, r) || a(r);
  const [d, p] = b.useState(null), [h, v] = b.useState(null), w = b.useCallback((E) => {
    E !== S.current && (S.current = E, p(E));
  }, []), y = b.useCallback((E) => {
    E !== N.current && (N.current = E, v(E));
  }, []), $ = i || d, C = l || h, S = b.useRef(null), N = b.useRef(null), M = b.useRef(f), _ = u != null, D = cn(u), A = cn(o), H = b.useCallback(() => {
    if (!S.current || !N.current)
      return;
    const E = {
      placement: t,
      strategy: n,
      middleware: g
    };
    A.current && (E.platform = A.current), Mi(S.current, N.current, E).then((R) => {
      const F = {
        ...R,
        isPositioned: !0
      };
      B.current && !rt(M.current, F) && (M.current = F, Te.flushSync(() => {
        m(F);
      }));
    });
  }, [g, t, n, A]);
  Je(() => {
    c === !1 && M.current.isPositioned && (M.current.isPositioned = !1, m((E) => ({
      ...E,
      isPositioned: !1
    })));
  }, [c]);
  const B = b.useRef(!1);
  Je(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Je(() => {
    if ($ && (S.current = $), C && (N.current = C), $ && C) {
      if (D.current)
        return D.current($, C, H);
      H();
    }
  }, [$, C, H, D, _]);
  const P = b.useMemo(() => ({
    reference: S,
    floating: N,
    setReference: w,
    setFloating: y
  }), [w, y]), T = b.useMemo(() => ({
    reference: $,
    floating: C
  }), [$, C]), x = b.useMemo(() => {
    const E = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return E;
    const R = an(T.floating, f.x), F = an(T.floating, f.y);
    return s ? {
      ...E,
      transform: "translate(" + R + "px, " + F + "px)",
      ...tr(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: R,
      top: F
    };
  }, [n, s, T.floating, f.x, f.y]);
  return b.useMemo(() => ({
    ...f,
    update: H,
    refs: P,
    elements: T,
    floatingStyles: x
  }), [f, H, P, T, x]);
}
const nr = (e, t) => ({
  ...Ci(e),
  options: [e, t]
}), Oi = (e, t) => ({
  ...Pi(e),
  options: [e, t]
}), Ai = (e, t) => ({
  ...Li(e),
  options: [e, t]
}), Di = (e, t) => ({
  ...Fi(e),
  options: [e, t]
}), rr = {
  ...b
}, Hi = rr.useInsertionEffect, ki = Hi || ((e) => e());
function ie(e) {
  const t = b.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return ki(() => {
    t.current = e;
  }), b.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Oe = typeof document < "u" ? Dt : X;
let fn = !1, Ni = 0;
const dn = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Ni++
);
function Ii() {
  const [e, t] = b.useState(() => fn ? dn() : void 0);
  return Oe(() => {
    e == null && t(dn());
  }, []), b.useEffect(() => {
    fn = !0;
  }, []), e;
}
const Wi = rr.useId, or = Wi || Ii;
let je;
process.env.NODE_ENV !== "production" && (je = /* @__PURE__ */ new Set());
function _i() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = je) != null && e.has(o))) {
    var i;
    (i = je) == null || i.add(o), console.warn(o);
  }
}
function Bi() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = je) != null && e.has(o))) {
    var i;
    (i = je) == null || i.add(o), console.error(o);
  }
}
function ji() {
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
const Vi = /* @__PURE__ */ b.createContext(null), Ki = /* @__PURE__ */ b.createContext(null), Kt = () => {
  var e;
  return ((e = b.useContext(Vi)) == null ? void 0 : e.id) || null;
}, Ut = () => b.useContext(Ki);
function Yt(e) {
  return "data-floating-ui-" + e;
}
function bt(e) {
  const t = k(e);
  return Oe(() => {
    t.current = e;
  }), t;
}
const mn = /* @__PURE__ */ Yt("safe-polygon");
function wt(e, t, n) {
  return n && !St(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Jl(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: i,
    elements: l
  } = e, {
    enabled: s = !0,
    delay: u = 0,
    handleClose: c = null,
    mouseOnly: f = !1,
    restMs: m = 0,
    move: g = !0
  } = t, a = Ut(), d = Kt(), p = bt(c), h = bt(u), v = bt(n), w = b.useRef(), y = b.useRef(-1), $ = b.useRef(), C = b.useRef(-1), S = b.useRef(!0), N = b.useRef(!1), M = b.useRef(() => {
  }), _ = b.useCallback(() => {
    var T;
    const x = (T = o.current.openEvent) == null ? void 0 : T.type;
    return (x == null ? void 0 : x.includes("mouse")) && x !== "mousedown";
  }, [o]);
  b.useEffect(() => {
    if (!s) return;
    function T(x) {
      let {
        open: E
      } = x;
      E || (clearTimeout(y.current), clearTimeout(C.current), S.current = !0);
    }
    return i.on("openchange", T), () => {
      i.off("openchange", T);
    };
  }, [s, i]), b.useEffect(() => {
    if (!s || !p.current || !n) return;
    function T(E) {
      _() && r(!1, E, "hover");
    }
    const x = Ee(l.floating).documentElement;
    return x.addEventListener("mouseleave", T), () => {
      x.removeEventListener("mouseleave", T);
    };
  }, [l.floating, n, r, s, p, _]);
  const D = b.useCallback(function(T, x, E) {
    x === void 0 && (x = !0), E === void 0 && (E = "hover");
    const R = wt(h.current, "close", w.current);
    R && !$.current ? (clearTimeout(y.current), y.current = window.setTimeout(() => r(!1, T, E), R)) : x && (clearTimeout(y.current), r(!1, T, E));
  }, [h, r]), A = ie(() => {
    M.current(), $.current = void 0;
  }), H = ie(() => {
    if (N.current) {
      const T = Ee(l.floating).body;
      T.style.pointerEvents = "", T.removeAttribute(mn), N.current = !1;
    }
  });
  b.useEffect(() => {
    if (!s) return;
    function T() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function x(L) {
      if (clearTimeout(y.current), S.current = !1, f && !St(w.current) || m > 0 && !wt(h.current, "open"))
        return;
      const O = wt(h.current, "open", w.current);
      O ? y.current = window.setTimeout(() => {
        v.current || r(!0, L, "hover");
      }, O) : r(!0, L, "hover");
    }
    function E(L) {
      if (T()) return;
      M.current();
      const O = Ee(l.floating);
      if (clearTimeout(C.current), p.current && o.current.floatingContext) {
        n || clearTimeout(y.current), $.current = p.current({
          ...o.current.floatingContext,
          tree: a,
          x: L.clientX,
          y: L.clientY,
          onClose() {
            H(), A(), D(L, !0, "safe-polygon");
          }
        });
        const Z = $.current;
        O.addEventListener("mousemove", Z), M.current = () => {
          O.removeEventListener("mousemove", Z);
        };
        return;
      }
      (w.current === "touch" ? !Be(l.floating, L.relatedTarget) : !0) && D(L);
    }
    function R(L) {
      T() || o.current.floatingContext && (p.current == null || p.current({
        ...o.current.floatingContext,
        tree: a,
        x: L.clientX,
        y: L.clientY,
        onClose() {
          H(), A(), D(L);
        }
      })(L));
    }
    if (W(l.domReference)) {
      var F;
      const L = l.domReference;
      return n && L.addEventListener("mouseleave", R), (F = l.floating) == null || F.addEventListener("mouseleave", R), g && L.addEventListener("mousemove", x, {
        once: !0
      }), L.addEventListener("mouseenter", x), L.addEventListener("mouseleave", E), () => {
        var O;
        n && L.removeEventListener("mouseleave", R), (O = l.floating) == null || O.removeEventListener("mouseleave", R), g && L.removeEventListener("mousemove", x), L.removeEventListener("mouseenter", x), L.removeEventListener("mouseleave", E);
      };
    }
  }, [l, s, e, f, m, g, D, A, H, r, n, v, a, h, p, o]), Oe(() => {
    var T;
    if (s && n && (T = p.current) != null && T.__options.blockPointerEvents && _()) {
      const E = Ee(l.floating).body;
      E.setAttribute(mn, ""), E.style.pointerEvents = "none", N.current = !0;
      const R = l.floating;
      if (W(l.domReference) && R) {
        var x;
        const F = l.domReference, L = a == null || (x = a.nodesRef.current.find((O) => O.id === d)) == null || (x = x.context) == null ? void 0 : x.elements.floating;
        return L && (L.style.pointerEvents = ""), F.style.pointerEvents = "auto", R.style.pointerEvents = "auto", () => {
          F.style.pointerEvents = "", R.style.pointerEvents = "";
        };
      }
    }
  }, [s, n, d, l, a, p, _]), Oe(() => {
    n || (w.current = void 0, A(), H());
  }, [n, A, H]), b.useEffect(() => () => {
    A(), clearTimeout(y.current), clearTimeout(C.current), H();
  }, [s, l.domReference, A, H]);
  const B = b.useMemo(() => {
    function T(x) {
      w.current = x.pointerType;
    }
    return {
      onPointerDown: T,
      onPointerEnter: T,
      onMouseMove(x) {
        const {
          nativeEvent: E
        } = x;
        function R() {
          !S.current && !v.current && r(!0, E, "hover");
        }
        f && !St(w.current) || n || m === 0 || (clearTimeout(C.current), w.current === "touch" ? R() : C.current = window.setTimeout(R, m));
      }
    };
  }, [f, r, n, v, m]), P = b.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(y.current);
    },
    onMouseLeave(T) {
      D(T.nativeEvent, !1);
    }
  }), [D]);
  return b.useMemo(() => s ? {
    reference: B,
    floating: P
  } : {}, [s, B, P]);
}
function yt(e, t) {
  let n = e.filter((o) => {
    var i;
    return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var i;
      return (i = r) == null ? void 0 : i.some((l) => {
        var s;
        return o.parentId === l.id && ((s = o.context) == null ? void 0 : s.open);
      });
    }), n = n.concat(r);
  return n;
}
const Ui = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Yi = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, pn = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Zl(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: i
  } = e, {
    enabled: l = !0,
    escapeKey: s = !0,
    outsidePress: u = !0,
    outsidePressEvent: c = "pointerdown",
    referencePress: f = !1,
    referencePressEvent: m = "pointerdown",
    ancestorScroll: g = !1,
    bubbles: a,
    capture: d
  } = t, p = Ut(), h = ie(typeof u == "function" ? u : () => !1), v = typeof u == "function" ? h : u, w = b.useRef(!1), y = b.useRef(!1), {
    escapeKey: $,
    outsidePress: C
  } = pn(a), {
    escapeKey: S,
    outsidePress: N
  } = pn(d), M = ie((P) => {
    var T;
    if (!n || !l || !s || P.key !== "Escape")
      return;
    const x = (T = i.current.floatingContext) == null ? void 0 : T.nodeId, E = p ? yt(p.nodesRef.current, x) : [];
    if (!$ && (P.stopPropagation(), E.length > 0)) {
      let R = !0;
      if (E.forEach((F) => {
        var L;
        if ((L = F.context) != null && L.open && !F.context.dataRef.current.__escapeKeyBubbles) {
          R = !1;
          return;
        }
      }), !R)
        return;
    }
    r(!1, Yo(P) ? P.nativeEvent : P, "escape-key");
  }), _ = ie((P) => {
    var T;
    const x = () => {
      var E;
      M(P), (E = Me(P)) == null || E.removeEventListener("keydown", x);
    };
    (T = Me(P)) == null || T.addEventListener("keydown", x);
  }), D = ie((P) => {
    var T;
    const x = w.current;
    w.current = !1;
    const E = y.current;
    if (y.current = !1, c === "click" && E || x || typeof v == "function" && !v(P))
      return;
    const R = Me(P), F = "[" + Yt("inert") + "]", L = Ee(o.floating).querySelectorAll(F);
    let O = W(R) ? R : null;
    for (; O && !pe(O); ) {
      const U = se(O);
      if (pe(U) || !W(U))
        break;
      O = U;
    }
    if (L.length && W(R) && !Xo(R) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !Be(R, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(L).every((U) => !Be(O, U)))
      return;
    if (ee(R) && B) {
      const U = R.clientWidth > 0 && R.scrollWidth > R.clientWidth, q = R.clientHeight > 0 && R.scrollHeight > R.clientHeight;
      let Ne = q && P.offsetX > R.clientWidth;
      if (q && re(R).direction === "rtl" && (Ne = P.offsetX <= R.offsetWidth - R.clientWidth), Ne || U && P.offsetY > R.clientHeight)
        return;
    }
    const oe = (T = i.current.floatingContext) == null ? void 0 : T.nodeId, Z = p && yt(p.nodesRef.current, oe).some((U) => {
      var q;
      return gt(P, (q = U.context) == null ? void 0 : q.elements.floating);
    });
    if (gt(P, o.floating) || gt(P, o.domReference) || Z)
      return;
    const Fe = p ? yt(p.nodesRef.current, oe) : [];
    if (Fe.length > 0) {
      let U = !0;
      if (Fe.forEach((q) => {
        var Ne;
        if ((Ne = q.context) != null && Ne.open && !q.context.dataRef.current.__outsidePressBubbles) {
          U = !1;
          return;
        }
      }), !U)
        return;
    }
    r(!1, P, "outside-press");
  }), A = ie((P) => {
    var T;
    const x = () => {
      var E;
      D(P), (E = Me(P)) == null || E.removeEventListener(c, x);
    };
    (T = Me(P)) == null || T.addEventListener(c, x);
  });
  b.useEffect(() => {
    if (!n || !l)
      return;
    i.current.__escapeKeyBubbles = $, i.current.__outsidePressBubbles = C;
    function P(E) {
      r(!1, E, "ancestor-scroll");
    }
    const T = Ee(o.floating);
    s && T.addEventListener("keydown", S ? _ : M, S), v && T.addEventListener(c, N ? A : D, N);
    let x = [];
    return g && (W(o.domReference) && (x = me(o.domReference)), W(o.floating) && (x = x.concat(me(o.floating))), !W(o.reference) && o.reference && o.reference.contextElement && (x = x.concat(me(o.reference.contextElement)))), x = x.filter((E) => {
      var R;
      return E !== ((R = T.defaultView) == null ? void 0 : R.visualViewport);
    }), x.forEach((E) => {
      E.addEventListener("scroll", P, {
        passive: !0
      });
    }), () => {
      s && T.removeEventListener("keydown", S ? _ : M, S), v && T.removeEventListener(c, N ? A : D, N), x.forEach((E) => {
        E.removeEventListener("scroll", P);
      });
    };
  }, [i, o, s, v, c, n, r, g, l, $, C, M, S, _, D, N, A]), b.useEffect(() => {
    w.current = !1;
  }, [v, c]);
  const H = b.useMemo(() => ({
    onKeyDown: M,
    [Ui[m]]: (P) => {
      f && r(!1, P.nativeEvent, "reference-press");
    }
  }), [M, r, f, m]), B = b.useMemo(() => ({
    onKeyDown: M,
    onMouseDown() {
      y.current = !0;
    },
    onMouseUp() {
      y.current = !0;
    },
    [Yi[c]]: () => {
      w.current = !0;
    }
  }), [M, c]);
  return b.useMemo(() => l ? {
    reference: H,
    floating: B
  } : {}, [l, H, B]);
}
function Xi(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = or(), i = b.useRef({}), [l] = b.useState(() => ji()), s = Kt() != null;
  if (process.env.NODE_ENV !== "production") {
    const a = r.reference;
    a && !W(a) && Bi("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, c] = b.useState(r.reference), f = ie((a, d, p) => {
    i.current.openEvent = a ? d : void 0, l.emit("openchange", {
      open: a,
      event: d,
      reason: p,
      nested: s
    }), n == null || n(a, d, p);
  }), m = b.useMemo(() => ({
    setPositionReference: c
  }), []), g = b.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return b.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: f,
    elements: g,
    events: l,
    floatingId: o,
    refs: m
  }), [t, f, g, l, o, m]);
}
function Gi(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Xi({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = b.useState(null), [s, u] = b.useState(null), f = (o == null ? void 0 : o.reference) || i, m = b.useRef(null), g = Ut();
  Oe(() => {
    f && (m.current = f);
  }, [f]);
  const a = Si({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), d = b.useCallback((y) => {
    const $ = W(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    u($), a.refs.setReference($);
  }, [a.refs]), p = b.useCallback((y) => {
    (W(y) || y === null) && (m.current = y, l(y)), (W(a.refs.reference.current) || a.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !W(y)) && a.refs.setReference(y);
  }, [a.refs]), h = b.useMemo(() => ({
    ...a.refs,
    setReference: p,
    setPositionReference: d,
    domReference: m
  }), [a.refs, p, d]), v = b.useMemo(() => ({
    ...a.elements,
    domReference: f
  }), [a.elements, f]), w = b.useMemo(() => ({
    ...a,
    ...r,
    refs: h,
    elements: v,
    nodeId: t
  }), [a, h, v, t, r]);
  return Oe(() => {
    r.dataRef.current.floatingContext = w;
    const y = g == null ? void 0 : g.nodesRef.current.find(($) => $.id === t);
    y && (y.context = w);
  }), b.useMemo(() => ({
    ...a,
    context: w,
    refs: h,
    elements: v
  }), [a, h, v, w]);
}
function Ql(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    dataRef: i,
    elements: l
  } = e, {
    enabled: s = !0,
    visibleOnly: u = !0
  } = t, c = b.useRef(!1), f = b.useRef(), m = b.useRef(!0);
  b.useEffect(() => {
    if (!s) return;
    const a = z(l.domReference);
    function d() {
      !n && ee(l.domReference) && l.domReference === nn(Ee(l.domReference)) && (c.current = !0);
    }
    function p() {
      m.current = !0;
    }
    return a.addEventListener("blur", d), a.addEventListener("keydown", p, !0), () => {
      a.removeEventListener("blur", d), a.removeEventListener("keydown", p, !0);
    };
  }, [l.domReference, n, s]), b.useEffect(() => {
    if (!s) return;
    function a(d) {
      let {
        reason: p
      } = d;
      (p === "reference-press" || p === "escape-key") && (c.current = !0);
    }
    return o.on("openchange", a), () => {
      o.off("openchange", a);
    };
  }, [o, s]), b.useEffect(() => () => {
    clearTimeout(f.current);
  }, []);
  const g = b.useMemo(() => ({
    onPointerDown(a) {
      jo(a.nativeEvent) || (m.current = !1);
    },
    onMouseLeave() {
      c.current = !1;
    },
    onFocus(a) {
      if (c.current) return;
      const d = Me(a.nativeEvent);
      if (u && W(d))
        try {
          if (Vo() && Ko()) throw Error();
          if (!d.matches(":focus-visible")) return;
        } catch {
          if (!m.current && !qo(d))
            return;
        }
      r(!0, a.nativeEvent, "focus");
    },
    onBlur(a) {
      c.current = !1;
      const d = a.relatedTarget, p = a.nativeEvent, h = W(d) && d.hasAttribute(Yt("focus-guard")) && d.getAttribute("data-type") === "outside";
      f.current = window.setTimeout(() => {
        var v;
        const w = nn(l.domReference ? l.domReference.ownerDocument : document);
        !d && w === l.domReference || Be((v = i.current.floatingContext) == null ? void 0 : v.refs.floating.current, w) || Be(l.domReference, w) || h || r(!1, p, "focus");
      });
    }
  }), [i, l.domReference, r, u]);
  return b.useMemo(() => s ? {
    reference: g
  } : {}, [s, g]);
}
const gn = "active", hn = "selected";
function Et(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [gn]: l,
      [hn]: s,
      ...u
    } = e;
    i = u;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...t.map((l) => {
      const s = l ? l[n] : null;
      return typeof s == "function" ? e ? s(e) : null : s;
    }).concat(e).reduce((l, s) => (s && Object.entries(s).forEach((u) => {
      let [c, f] = u;
      if (!(o && [gn, hn].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof f == "function") {
            var m;
            (m = r.get(c)) == null || m.push(f), l[c] = function() {
              for (var g, a = arguments.length, d = new Array(a), p = 0; p < a; p++)
                d[p] = arguments[p];
              return (g = r.get(c)) == null ? void 0 : g.map((h) => h(...d)).find((h) => h !== void 0);
            };
          }
        } else
          l[c] = f;
    }), l), {})
  };
}
function qi(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = b.useCallback(
    (s) => Et(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = b.useCallback(
    (s) => Et(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = b.useCallback(
    (s) => Et(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return b.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
const zi = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function es(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: r,
    floatingId: o
  } = e, {
    enabled: i = !0,
    role: l = "dialog"
  } = t, s = (n = zi.get(l)) != null ? n : l, u = or(), f = Kt() != null, m = b.useMemo(() => s === "tooltip" || l === "label" ? {
    ["aria-" + (l === "label" ? "labelledby" : "describedby")]: r ? o : void 0
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
    ...s === "menu" && f && {
      role: "menuitem"
    },
    ...l === "select" && {
      "aria-autocomplete": "none"
    },
    ...l === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [s, o, f, r, u, l]), g = b.useMemo(() => {
    const d = {
      id: o,
      ...s && {
        role: s
      }
    };
    return s === "tooltip" || l === "label" ? d : {
      ...d,
      ...s === "menu" && {
        "aria-labelledby": u
      }
    };
  }, [s, o, u, l]), a = b.useCallback((d) => {
    let {
      active: p,
      selected: h
    } = d;
    const v = {
      role: "option",
      ...p && {
        id: o + "-option"
      }
    };
    switch (l) {
      case "select":
        return {
          ...v,
          "aria-selected": p && h
        };
      case "combobox":
        return {
          ...v,
          ...p && {
            "aria-selected": !0
          }
        };
    }
    return {};
  }, [o, l]);
  return b.useMemo(() => i ? {
    reference: m,
    floating: g,
    item: a
  } : {}, [i, m, g, a]);
}
function vn(e, t) {
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
const Ji = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: o,
      offset: i = 0,
      index: l = 0,
      minItemsVisible: s = 4,
      referenceOverflowThreshold: u = 0,
      scrollRef: c,
      ...f
    } = He(e, t), {
      rects: m,
      elements: {
        floating: g
      }
    } = t, a = n.current[l];
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || _i('`placement` side must be "bottom" when using the `inner`', "middleware.")), !a)
      return {};
    const d = {
      ...t,
      ...await nr(-a.offsetTop - g.clientTop - m.reference.height / 2 - a.offsetHeight / 2 - i).fn(t)
    }, p = (c == null ? void 0 : c.current) || g, h = await vt(vn(d, p.scrollHeight), f), v = await vt(d, {
      ...f,
      elementContext: "reference"
    }), w = Math.max(0, h.top), y = d.y + w, $ = Math.max(0, p.scrollHeight - w - Math.max(0, h.bottom));
    return p.style.maxHeight = $ + "px", p.scrollTop = w, o && (p.offsetHeight < a.offsetHeight * Math.min(s, n.current.length - 1) - 1 || v.top >= -u || v.bottom >= -u ? Te.flushSync(() => o(!0)) : Te.flushSync(() => o(!1))), r && (r.current = await vt(vn({
      ...d,
      y
    }, p.offsetHeight), f)), {
      y
    };
  }
});
function Zi(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, u = ie(s), c = b.useRef(!1), f = b.useRef(null), m = b.useRef(null);
  b.useEffect(() => {
    if (!o) return;
    function a(p) {
      if (p.ctrlKey || !d || i.current == null)
        return;
      const h = p.deltaY, v = i.current.top >= -0.5, w = i.current.bottom >= -0.5, y = d.scrollHeight - d.clientHeight, $ = h < 0 ? -1 : 1, C = h < 0 ? "max" : "min";
      d.scrollHeight <= d.clientHeight || (!v && h > 0 || !w && h < 0 ? (p.preventDefault(), Te.flushSync(() => {
        u((S) => S + Math[C](h, y * $));
      })) : /firefox/i.test(jt()) && (d.scrollTop += h));
    }
    const d = (l == null ? void 0 : l.current) || r.floating;
    if (n && d)
      return d.addEventListener("wheel", a), requestAnimationFrame(() => {
        f.current = d.scrollTop, i.current != null && (m.current = {
          ...i.current
        });
      }), () => {
        f.current = null, m.current = null, d.removeEventListener("wheel", a);
      };
  }, [o, n, r.floating, i, l, u]);
  const g = b.useMemo(() => ({
    onKeyDown() {
      c.current = !0;
    },
    onWheel() {
      c.current = !1;
    },
    onPointerMove() {
      c.current = !1;
    },
    onScroll() {
      const a = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !a || !c.current)) {
        if (f.current !== null) {
          const d = a.scrollTop - f.current;
          (i.current.bottom < -0.5 && d < -1 || i.current.top < -0.5 && d > 1) && Te.flushSync(() => u((p) => p + d));
        }
        requestAnimationFrame(() => {
          f.current = a.scrollTop;
        });
      }
    }
  }), [r.floating, u, i, l]);
  return b.useMemo(() => o ? {
    floating: g
  } : {}, [o, g]);
}
let ke = te({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
ke.displayName = "FloatingContext";
let Xt = te(null);
Xt.displayName = "PlacementContext";
function ts(e) {
  return J(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function ns() {
  return K(ke).setReference;
}
function rs() {
  return K(ke).getReferenceProps;
}
function os() {
  let { getFloatingProps: e, slot: t } = K(ke);
  return G((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function is(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = K(Xt), n = J(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (o, i) => i instanceof HTMLElement ? i.outerHTML : i : void 0)]);
  V(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = K(ke);
  return J(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let bn = 4;
function ls({ children: e, enabled: t = !0 }) {
  let [n, r] = j(null), [o, i] = j(0), l = k(null), [s, u] = j(null);
  Qi(s);
  let c = t && n !== null && s !== null, { to: f = "bottom", gap: m = 0, offset: g = 0, padding: a = 0, inner: d } = el(n, s), [p, h = "center"] = f.split(" ");
  V(() => {
    c && i(0);
  }, [c]);
  let { refs: v, floatingStyles: w, context: y } = Gi({ open: c, placement: p === "selection" ? h === "center" ? "bottom" : `bottom-${h}` : h === "center" ? `${p}` : `${p}-${h}`, strategy: "absolute", transform: !1, middleware: [nr({ mainAxis: p === "selection" ? 0 : m, crossAxis: g }), Oi({ padding: a }), p !== "selection" && Ai({ padding: a }), p === "selection" && d ? Ji({ ...d, padding: a, overflowRef: l, offset: o, minItemsVisible: bn, referenceOverflowThreshold: a, onFallbackChange(A) {
    var H, B;
    if (!A) return;
    let P = y.elements.floating;
    if (!P) return;
    let T = parseFloat(getComputedStyle(P).scrollPaddingBottom) || 0, x = Math.min(bn, P.childElementCount), E = 0, R = 0;
    for (let F of (B = (H = y.elements.floating) == null ? void 0 : H.childNodes) != null ? B : []) if (F instanceof HTMLElement) {
      let L = F.offsetTop, O = L + F.clientHeight + T, oe = P.scrollTop, Z = oe + P.clientHeight;
      if (L >= oe && O <= Z) x--;
      else {
        R = Math.max(0, Math.min(O, Z) - Math.max(L, oe)), E = F.clientHeight;
        break;
      }
    }
    x >= 1 && i((F) => {
      let L = E * x - R + T;
      return F >= L ? F : L;
    });
  } }) : null, Di({ padding: a, apply({ availableWidth: A, availableHeight: H, elements: B }) {
    Object.assign(B.floating.style, { overflow: "auto", maxWidth: `${A}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${H}px)` });
  } })].filter(Boolean), whileElementsMounted: Ri }), [$ = p, C = h] = y.placement.split("-");
  p === "selection" && ($ = "selection");
  let S = J(() => ({ anchor: [$, C].filter(Boolean).join(" ") }), [$, C]), N = Zi(y, { overflowRef: l, onChange: i }), { getReferenceProps: M, getFloatingProps: _ } = qi([N]), D = Y((A) => {
    u(A), v.setFloating(A);
  });
  return b.createElement(Xt.Provider, { value: r }, b.createElement(ke.Provider, { value: { setFloating: D, setReference: v.setReference, styles: w, getReferenceProps: M, getFloatingProps: _, slot: S } }, e));
}
function Qi(e) {
  V(() => {
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
function el(e, t) {
  var n, r, o;
  let i = xt((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = xt((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = xt((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function xt(e, t, n = void 0) {
  let r = Ue(), o = Y((u, c) => {
    if (u == null) return [n, null];
    if (typeof u == "number") return [u, null];
    if (typeof u == "string") {
      if (!c) return [n, null];
      let f = wn(u, c);
      return [f, (m) => {
        let g = ir(u);
        {
          let a = g.map((d) => window.getComputedStyle(c).getPropertyValue(d));
          r.requestAnimationFrame(function d() {
            r.nextFrame(d);
            let p = !1;
            for (let [v, w] of g.entries()) {
              let y = window.getComputedStyle(c).getPropertyValue(w);
              if (a[v] !== y) {
                a[v] = y, p = !0;
                break;
              }
            }
            if (!p) return;
            let h = wn(u, c);
            f !== h && (m(h), f = h);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = J(() => o(e, t)[0], [e, t]), [l = i, s] = j();
  return V(() => {
    let [u, c] = o(e, t);
    if (s(u), !!c) return c(s);
  }, [e, t]), l;
}
function ir(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...ir(o)] : [r];
  }
  return [];
}
function wn(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function ss({ children: e, freeze: t }) {
  let n = tl(t, e);
  return I.createElement(I.Fragment, null, n);
}
function tl(e, t) {
  let [n, r] = j(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Gt = te(null);
Gt.displayName = "OpenClosedContext";
var xe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(xe || {});
function lr() {
  return K(Gt);
}
function nl({ value: e, children: t }) {
  return I.createElement(Gt.Provider, { value: e }, t);
}
function rl(e) {
  throw new Error("Unexpected object: " + e);
}
var ol = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ol || {});
function us(e, t) {
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
      rl(e);
  }
}
function il(e) {
  let t = Y(e), n = k(!1);
  X(() => (n.current = !1, () => {
    n.current = !0, Pn(() => {
      n.current && t();
    });
  }), [t]);
}
function ll() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in b ? ((t) => t.useSyncExternalStore)(b)(() => () => {
  }, () => !1, () => !e) : !1;
}
function qt() {
  let e = ll(), [t, n] = b.useState($e.isHandoffComplete);
  return t && $e.isHandoffComplete === !1 && n(!1), b.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), b.useEffect(() => $e.handoff(), []), e ? !1 : t;
}
let sl = te(!1);
function ul() {
  return K(sl);
}
function al(e) {
  let t = ul(), n = K(ur), r = Vn(e), [o, i] = j(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if ($e.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let u = r.createElement("div");
    return u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u);
  });
  return X(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), X(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let sr = le, cl = ue(function(e, t) {
  let n = e, r = k(null), o = Le(Zr((f) => {
    r.current = f;
  }), t), i = Vn(r), l = al(r), [s] = j(() => {
    var f;
    return $e.isServer ? null : (f = i == null ? void 0 : i.createElement("div")) != null ? f : null;
  }), u = K(pl), c = qt();
  return V(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), V(() => {
    if (s && u) return u.register(s);
  }, [u, s]), il(() => {
    var f;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((f = l.parentElement) == null || f.removeChild(l)));
  }), c ? !l || !s ? null : Te.createPortal(be({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: sr, name: "Portal" }), s) : null;
});
function fl(e, t) {
  let n = Le(t), { enabled: r = !0, ...o } = e;
  return r ? I.createElement(cl, { ...o, ref: n }) : be({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: sr, name: "Portal" });
}
let dl = le, ur = te(null);
function ml(e, t) {
  let { target: n, ...r } = e, o = { ref: Le(t) };
  return I.createElement(ur.Provider, { value: n }, be({ ourProps: o, theirProps: r, defaultTag: dl, name: "Popover.Group" }));
}
let pl = te(null), gl = ue(fl), hl = ue(ml), as = Object.assign(gl, { Group: hl });
function vl() {
  let e = k(!1);
  return V(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ar(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : fr) !== le || I.Children.count(e.children) === 1;
}
let at = te(null);
at.displayName = "TransitionContext";
var bl = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(bl || {});
function wl() {
  let e = K(at);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function yl() {
  let e = K(ct);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let ct = te(null);
ct.displayName = "NestingContext";
function ft(e) {
  return "children" in e ? ft(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function cr(e, t) {
  let n = Ae(e), r = k([]), o = vl(), i = Ue(), l = Y((a, d = fe.Hidden) => {
    let p = r.current.findIndex(({ el: h }) => h === a);
    p !== -1 && (Ye(d, { [fe.Unmount]() {
      r.current.splice(p, 1);
    }, [fe.Hidden]() {
      r.current[p].state = "hidden";
    } }), i.microTask(() => {
      var h;
      !ft(r) && o.current && ((h = n.current) == null || h.call(n));
    }));
  }), s = Y((a) => {
    let d = r.current.find(({ el: p }) => p === a);
    return d ? d.state !== "visible" && (d.state = "visible") : r.current.push({ el: a, state: "visible" }), () => l(a, fe.Unmount);
  }), u = k([]), c = k(Promise.resolve()), f = k({ enter: [], leave: [] }), m = Y((a, d, p) => {
    u.current.splice(0), t && (t.chains.current[d] = t.chains.current[d].filter(([h]) => h !== a)), t == null || t.chains.current[d].push([a, new Promise((h) => {
      u.current.push(h);
    })]), t == null || t.chains.current[d].push([a, new Promise((h) => {
      Promise.all(f.current[d].map(([v, w]) => w)).then(() => h());
    })]), d === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => p(d)) : p(d);
  }), g = Y((a, d, p) => {
    Promise.all(f.current[d].splice(0).map(([h, v]) => v)).then(() => {
      var h;
      (h = u.current.shift()) == null || h();
    }).then(() => p(d));
  });
  return J(() => ({ children: r, register: s, unregister: l, onStart: m, onStop: g, wait: c, chains: f }), [s, l, r, m, g, f, c]);
}
let fr = le, dr = Fn.RenderStrategy;
function El(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: u, enter: c, enterFrom: f, enterTo: m, entered: g, leave: a, leaveFrom: d, leaveTo: p, ...h } = e, v = k(null), w = ar(e), y = Le(...w ? [v, t] : t === null ? [] : [t]), $ = (n = h.unmount) == null || n ? fe.Unmount : fe.Hidden, { show: C, appear: S, initial: N } = wl(), [M, _] = j(C ? "visible" : "hidden"), D = yl(), { register: A, unregister: H } = D;
  V(() => A(v), [A, v]), V(() => {
    if ($ === fe.Hidden && v.current) {
      if (C && M !== "visible") {
        _("visible");
        return;
      }
      return Ye(M, { hidden: () => H(v), visible: () => A(v) });
    }
  }, [M, v, A, H, C, $]);
  let B = qt();
  V(() => {
    if (w && B && M === "visible" && v.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [v, M, B, w]);
  let P = N && !S, T = S && C && N, x = k(!1), E = cr(() => {
    x.current || (_("hidden"), H(v));
  }, D), R = Y((Fe) => {
    x.current = !0;
    let U = Fe ? "enter" : "leave";
    E.onStart(v, U, (q) => {
      q === "enter" ? i == null || i() : q === "leave" && (s == null || s());
    });
  }), F = Y((Fe) => {
    let U = Fe ? "enter" : "leave";
    x.current = !1, E.onStop(v, U, (q) => {
      q === "enter" ? l == null || l() : q === "leave" && (u == null || u());
    }), U === "leave" && !ft(E) && (_("hidden"), H(v));
  });
  X(() => {
    w && o || (R(C), F(C));
  }, [C, w, o]);
  let L = !(!o || !w || !B || P), [, O] = ko(L, v, C, { start: R, end: F }), oe = ce({ ref: y, className: ((r = Pt(h.className, T && c, T && f, O.enter && c, O.enter && O.closed && f, O.enter && !O.closed && m, O.leave && a, O.leave && !O.closed && d, O.leave && O.closed && p, !O.transition && C && g)) == null ? void 0 : r.trim()) || void 0, ...Ho(O) }), Z = 0;
  return M === "visible" && (Z |= xe.Open), M === "hidden" && (Z |= xe.Closed), O.enter && (Z |= xe.Opening), O.leave && (Z |= xe.Closing), I.createElement(ct.Provider, { value: E }, I.createElement(nl, { value: Z }, be({ ourProps: oe, theirProps: h, defaultTag: fr, features: dr, visible: M === "visible", name: "Transition.Child" })));
}
function xl(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = k(null), s = ar(e), u = Le(...s ? [l, t] : t === null ? [] : [t]);
  qt();
  let c = lr();
  if (n === void 0 && c !== null && (n = (c & xe.Open) === xe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [f, m] = j(n ? "visible" : "hidden"), g = cr(() => {
    n || m("hidden");
  }), [a, d] = j(!0), p = k([n]);
  V(() => {
    a !== !1 && p.current[p.current.length - 1] !== n && (p.current.push(n), d(!1));
  }, [p, n]);
  let h = J(() => ({ show: n, appear: r, initial: a }), [n, r, a]);
  fo(n, l, () => m("hidden")), V(() => {
    n ? m("visible") : !ft(g) && l.current !== null && m("hidden");
  }, [n, g]);
  let v = { unmount: o }, w = Y(() => {
    var $;
    a && d(!1), ($ = e.beforeEnter) == null || $.call(e);
  }), y = Y(() => {
    var $;
    a && d(!1), ($ = e.beforeLeave) == null || $.call(e);
  });
  return I.createElement(ct.Provider, { value: g }, I.createElement(at.Provider, { value: h }, be({ ourProps: { ...v, as: le, children: I.createElement(mr, { ref: u, ...v, ...i, beforeEnter: w, beforeLeave: y }) }, theirProps: {}, defaultTag: le, features: dr, visible: f === "visible", name: "Transition" })));
}
function $l(e, t) {
  let n = K(at) !== null, r = lr() !== null;
  return I.createElement(I.Fragment, null, !n && r ? I.createElement(At, { ref: t, ...e }) : I.createElement(mr, { ref: t, ...e }));
}
let At = ue(xl), mr = ue(El), Tl = ue($l), cs = Object.assign(At, { Child: Tl, Root: At });
function fs(e) {
  return yr({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z", clipRule: "evenodd" }, child: [] }] })(e);
}
export {
  Ml as $,
  ns as A,
  rs as B,
  Fl as C,
  Ol as D,
  Al as E,
  Xl as F,
  Wl as G,
  fs as H,
  ro as I,
  Gl as J,
  Bl as K,
  ts as L,
  Fn as M,
  Vn as N,
  lr as O,
  fo as P,
  ql as Q,
  Ul as R,
  tl as S,
  Dl as T,
  is as U,
  ko as V,
  ue as W,
  cs as X,
  os as Y,
  ot as Z,
  Vl as _,
  Jl as a,
  Ho as a0,
  as as a1,
  ve as a2,
  zl as a3,
  bo as a4,
  Bn as a5,
  ol as a6,
  no as a7,
  kl as a8,
  Il as a9,
  Yl as aa,
  po as ab,
  us as ac,
  xo as ad,
  Ft as ae,
  ss as af,
  Ro as ag,
  Ql as b,
  Zl as c,
  es as d,
  qi as e,
  Ai as f,
  Ri as g,
  Ae as h,
  Y as i,
  Ln as j,
  jl as k,
  Hl as l,
  Ye as m,
  V as n,
  nr as o,
  Ue as p,
  nl as q,
  xe as r,
  Oi as s,
  Nl as t,
  Gi as u,
  ls as v,
  be as w,
  zr as x,
  Le as y,
  _l as z
};
