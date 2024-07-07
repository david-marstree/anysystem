import * as w from "react";
import W, { useRef as k, useCallback as Q, useEffect as Z, useState as U, useMemo as K, useLayoutEffect as Xt, createContext as ne, useContext as Y, forwardRef as jr, Fragment as me, isValidElement as Ur, cloneElement as Kr, createElement as Yr, useId as Ve, useReducer as Bn, useSyncExternalStore as Xr, createRef as Gr } from "react";
import { r as re } from "./index-DsprzSCj.js";
import { G as qr } from "./iconBase-Bipuk9tK.js";
const Wn = typeof document < "u" ? W.useLayoutEffect : () => {
};
function zr(e) {
  const t = k(null);
  return Wn(() => {
    t.current = e;
  }, [
    e
  ]), Q((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Qe = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, Fe = (e) => e && "window" in e && e.window === e ? e : Qe(e).defaultView || window;
function Qr(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function Zr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function Jr() {
  return Zr(/^Mac/i);
}
function eo() {
  return Qr(/Android/i);
}
function to(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : eo() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
class no {
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
function Vn(e) {
  let t = k({
    isFocused: !1,
    observer: null
  });
  Wn(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = zr((r) => {
    e == null || e(r);
  });
  return Q((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let o = r.target, i = (l) => {
        t.current.isFocused = !1, o.disabled && n(new no("blur", l)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
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
function ro(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = Q((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), o && o(!1), !0;
  }, [
    r,
    o
  ]), l = Vn(i), s = Q((u) => {
    const f = Qe(u.target);
    u.target === u.currentTarget && f.activeElement === u.target && (n && n(u), o && o(!0), l(u));
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
let Ze = null, It = /* @__PURE__ */ new Set(), Xe = /* @__PURE__ */ new Map(), Ie = !1, kt = !1;
const oo = {
  Tab: !0,
  Escape: !0
};
function Gt(e, t) {
  for (let n of It) n(e, t);
}
function io(e) {
  return !(e.metaKey || !Jr() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function lt(e) {
  Ie = !0, io(e) && (Ze = "keyboard", Gt("keyboard", e));
}
function ce(e) {
  Ze = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ie = !0, Gt("pointer", e));
}
function jn(e) {
  to(e) && (Ie = !0, Ze = "virtual");
}
function Un(e) {
  e.target === window || e.target === document || (!Ie && !kt && (Ze = "virtual", Gt("virtual", e)), Ie = !1, kt = !1);
}
function Kn() {
  Ie = !1, kt = !0;
}
function Ht(e) {
  if (typeof window > "u" || Xe.get(Fe(e))) return;
  const t = Fe(e), n = Qe(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ie = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", lt, !0), n.addEventListener("keyup", lt, !0), n.addEventListener("click", jn, !0), t.addEventListener("focus", Un, !0), t.addEventListener("blur", Kn, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ce, !0), n.addEventListener("pointermove", ce, !0), n.addEventListener("pointerup", ce, !0)) : (n.addEventListener("mousedown", ce, !0), n.addEventListener("mousemove", ce, !0), n.addEventListener("mouseup", ce, !0)), t.addEventListener("beforeunload", () => {
    Yn(e);
  }, {
    once: !0
  }), Xe.set(t, {
    focus: r
  });
}
const Yn = (e, t) => {
  const n = Fe(e), r = Qe(e);
  t && r.removeEventListener("DOMContentLoaded", t), Xe.has(n) && (n.HTMLElement.prototype.focus = Xe.get(n).focus, r.removeEventListener("keydown", lt, !0), r.removeEventListener("keyup", lt, !0), r.removeEventListener("click", jn, !0), n.removeEventListener("focus", Un, !0), n.removeEventListener("blur", Kn, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ce, !0), r.removeEventListener("pointermove", ce, !0), r.removeEventListener("pointerup", ce, !0)) : (r.removeEventListener("mousedown", ce, !0), r.removeEventListener("mousemove", ce, !0), r.removeEventListener("mouseup", ce, !0)), Xe.delete(n));
};
function lo(e) {
  const t = Qe(e);
  let n;
  return t.readyState !== "loading" ? Ht(e) : (n = () => {
    Ht(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Yn(e, n);
}
typeof document < "u" && lo();
function Xn() {
  return Ze !== "pointer";
}
const so = /* @__PURE__ */ new Set([
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
function uo(e, t, n) {
  var r;
  const o = typeof window < "u" ? Fe(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? Fe(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? Fe(n == null ? void 0 : n.target).HTMLElement : HTMLElement, s = typeof window < "u" ? Fe(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || (n == null ? void 0 : n.target) instanceof o && !so.has(n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type) || (n == null ? void 0 : n.target) instanceof i || (n == null ? void 0 : n.target) instanceof l && (n == null ? void 0 : n.target.isContentEditable), !(e && t === "keyboard" && n instanceof s && !oo[n.key]);
}
function ao(e, t, n) {
  Ht(), Z(() => {
    let r = (o, i) => {
      uo(!!(n != null && n.isTextInput), o, i) && e(Xn());
    };
    return It.add(r), () => {
      It.delete(r);
    };
  }, t);
}
function co(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, i = k({
    isFocusWithin: !1
  }), l = Q((f) => {
    i.current.isFocusWithin && !f.currentTarget.contains(f.relatedTarget) && (i.current.isFocusWithin = !1, n && n(f), o && o(!1));
  }, [
    n,
    o,
    i
  ]), s = Vn(l), u = Q((f) => {
    !i.current.isFocusWithin && document.activeElement === f.target && (r && r(f), o && o(!0), i.current.isFocusWithin = !0, s(f));
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
let st = !1, xt = 0;
function Nt() {
  st = !0, setTimeout(() => {
    st = !1;
  }, 50);
}
function vn(e) {
  e.pointerType === "touch" && Nt();
}
function fo() {
  if (!(typeof document > "u"))
    return typeof PointerEvent < "u" ? document.addEventListener("pointerup", vn) : document.addEventListener("touchend", Nt), xt++, () => {
      xt--, !(xt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", vn) : document.removeEventListener("touchend", Nt));
    };
}
function po(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [i, l] = U(!1), s = k({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Z(fo, []);
  let { hoverProps: u, triggerHoverEnd: f } = K(() => {
    let a = (c, p) => {
      if (s.pointerType = p, o || p === "touch" || s.isHovered || !c.currentTarget.contains(c.target)) return;
      s.isHovered = !0;
      let v = c.currentTarget;
      s.target = v, t && t({
        type: "hoverstart",
        target: v,
        pointerType: p
      }), n && n(!0), l(!0);
    }, d = (c, p) => {
      if (s.pointerType = "", s.target = null, p === "touch" || !s.isHovered) return;
      s.isHovered = !1;
      let v = c.currentTarget;
      r && r({
        type: "hoverend",
        target: v,
        pointerType: p
      }), n && n(!1), l(!1);
    }, m = {};
    return typeof PointerEvent < "u" ? (m.onPointerEnter = (c) => {
      st && c.pointerType === "mouse" || a(c, c.pointerType);
    }, m.onPointerLeave = (c) => {
      !o && c.currentTarget.contains(c.target) && d(c, c.pointerType);
    }) : (m.onTouchStart = () => {
      s.ignoreEmulatedMouseEvents = !0;
    }, m.onMouseEnter = (c) => {
      !s.ignoreEmulatedMouseEvents && !st && a(c, "mouse"), s.ignoreEmulatedMouseEvents = !1;
    }, m.onMouseLeave = (c) => {
      !o && c.currentTarget.contains(c.target) && d(c, "mouse");
    }), {
      hoverProps: m,
      triggerHoverEnd: d
    };
  }, [
    t,
    n,
    r,
    o,
    s
  ]);
  return Z(() => {
    o && f({
      currentTarget: s.target
    }, s.pointerType);
  }, [
    o
  ]), {
    hoverProps: u,
    isHovered: i
  };
}
function mo(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = k({
    isFocused: !1,
    isFocusVisible: t || Xn()
  }), [i, l] = U(!1), [s, u] = U(() => o.current.isFocused && o.current.isFocusVisible), f = Q(() => u(o.current.isFocused && o.current.isFocusVisible), []), a = Q((c) => {
    o.current.isFocused = c, l(c), f();
  }, [
    f
  ]);
  ao((c) => {
    o.current.isFocusVisible = c, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = ro({
    isDisabled: r,
    onFocusChange: a
  }), { focusWithinProps: m } = co({
    isDisabled: !r,
    onFocusWithinChange: a
  });
  return {
    isFocused: i,
    isFocusVisible: s,
    focusProps: r ? m : d
  };
}
var vo = Object.defineProperty, go = (e, t, n) => t in e ? vo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rt = (e, t, n) => (go(e, typeof t != "symbol" ? t + "" : t, n), n);
let ho = class {
  constructor() {
    Rt(this, "current", this.detect()), Rt(this, "handoffState", "pending"), Rt(this, "currentId", 0);
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
}, De = new ho();
function Je(e) {
  return De.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Gn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function ye() {
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
    return Gn(() => {
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
    let r = ye();
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
function Ne() {
  let [e] = U(ye);
  return Z(() => () => e.dispose(), [e]), e;
}
let V = (e, t) => {
  De.isServer ? Z(e, t) : Xt(e, t);
};
function Le(e) {
  let t = k(e);
  return V(() => {
    t.current = e;
  }, [e]), t;
}
let I = function(e) {
  let t = Le(e);
  return W.useCallback((...n) => t.current(...n), [t]);
};
function bo(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function yo(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function wo({ disabled: e = !1 } = {}) {
  let t = k(null), [n, r] = U(!1), o = Ne(), i = I(() => {
    t.current = null, r(!1), o.dispose();
  }), l = I((s) => {
    if (o.dispose(), t.current === null) {
      t.current = s.currentTarget, r(!0);
      {
        let u = Je(s.currentTarget);
        o.addEventListener(u, "pointerup", i, !1), o.addEventListener(u, "pointermove", (f) => {
          if (t.current) {
            let a = bo(f);
            r(yo(a, t.current.getBoundingClientRect()));
          }
        }, !1), o.addEventListener(u, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: l, onPointerUp: i, onClick: i } };
}
let Eo = ne(void 0);
function qt() {
  return Y(Eo);
}
function _t(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function ve(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ve), r;
}
var ut = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ut || {}), Re = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Re || {});
function ae({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: i = !0, name: l, mergeRefs: s }) {
  s = s ?? xo;
  let u = qn(t, e);
  if (i) return rt(u, n, r, l, s);
  let f = o ?? 0;
  if (f & 2) {
    let { static: a = !1, ...d } = u;
    if (a) return rt(d, n, r, l, s);
  }
  if (f & 1) {
    let { unmount: a = !0, ...d } = u;
    return ve(a ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return rt({ ...d, hidden: !0, style: { display: "none" } }, n, r, l, s);
    } });
  }
  return rt(u, n, r, l, s);
}
function rt(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: s = "ref", ...u } = $t(e, ["unmount", "static"]), f = e.ref !== void 0 ? { [s]: e.ref } : {}, a = typeof l == "function" ? l(t) : l;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t)), u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
  let d = {};
  if (t) {
    let m = !1, c = [];
    for (let [p, v] of Object.entries(t)) typeof v == "boolean" && (m = !0), v === !0 && c.push(p.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
    if (m) {
      d["data-headlessui-state"] = c.join(" ");
      for (let p of c) d[`data-${p}`] = "";
    }
  }
  if (i === me && (Object.keys(xe(u)).length > 0 || Object.keys(xe(d)).length > 0)) if (!Ur(a) || Array.isArray(a) && a.length > 1) {
    if (Object.keys(xe(u)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(xe(u)).concat(Object.keys(xe(d))).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
  } else {
    let m = a.props, c = m == null ? void 0 : m.className, p = typeof c == "function" ? (...h) => _t(c(...h), u.className) : _t(c, u.className), v = p ? { className: p } : {}, g = qn(a.props, xe($t(u, ["ref"])));
    for (let h in d) h in g && delete d[h];
    return Kr(a, Object.assign({}, g, d, f, { ref: o(a.ref, f.ref) }, v));
  }
  return Yr(i, Object.assign({}, $t(u, ["ref"]), i !== me && f, i !== me && d), a);
}
function xo(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function qn(...e) {
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
function zn(...e) {
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
function ie(e) {
  var t;
  return Object.assign(jr(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function xe(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function $t(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function Ro(e, t, n) {
  let [r, o] = U(n), i = e !== void 0, l = k(i), s = k(!1), u = k(!1);
  return i && !l.current && !s.current ? (s.current = !0, l.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && l.current && !u.current && (u.current = !0, l.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, I((f) => (i || o(f), t == null ? void 0 : t(f)))];
}
function $o(e) {
  let [t] = U(e);
  return t;
}
function Qn(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Jn(n, Zn(t, r), o);
  return n;
}
function Zn(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Jn(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Jn(e, Zn(t, r.toString()), o);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Qn(n, t, e);
}
function To(e) {
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
let So = "span";
var zt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(zt || {});
function Oo(e, t) {
  var n;
  let { features: r = 1, ...o } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return ae({ ourProps: i, theirProps: o, slot: {}, defaultTag: So, name: "Hidden" });
}
let er = ie(Oo), Po = ne(null);
function Lo({ children: e }) {
  let t = Y(Po);
  if (!t) return W.createElement(W.Fragment, null, e);
  let { target: n } = t;
  return n ? re.createPortal(W.createElement(W.Fragment, null, e), n) : null;
}
function Co({ data: e, form: t, disabled: n, onReset: r, overrides: o }) {
  let [i, l] = U(null), s = Ne();
  return Z(() => {
    if (r && i) return s.addEventListener(i, "reset", r);
  }, [i, t, r]), W.createElement(Lo, null, W.createElement(Fo, { setForm: l, formId: t }), Qn(e).map(([u, f]) => W.createElement(er, { features: zt.Hidden, ...xe({ key: u, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: u, value: f, ...o }) })));
}
function Fo({ setForm: e, formId: t }) {
  return Z(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : W.createElement(er, { features: zt.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let Mo = ne(void 0);
function tr() {
  return Y(Mo);
}
function Ao(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Do(n) ? !1 : r;
}
function Do(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let nr = Symbol();
function Io(e, t = !0) {
  return Object.assign(e, { [nr]: t });
}
function de(...e) {
  let t = k(e);
  Z(() => {
    t.current = e;
  }, [e]);
  let n = I((r) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[nr])) ? void 0 : n;
}
let Qt = ne(null);
Qt.displayName = "DescriptionContext";
function rr() {
  let e = Y(Qt);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, rr), t;
  }
  return e;
}
function ko() {
  var e, t;
  return (t = (e = Y(Qt)) == null ? void 0 : e.value) != null ? t : void 0;
}
let Ho = "p";
function No(e, t) {
  let n = Ve(), r = qt(), { id: o = `headlessui-description-${n}`, ...i } = e, l = rr(), s = de(t);
  V(() => l.register(o), [o, l.register]);
  let u = r || !1, f = K(() => ({ ...l.slot, disabled: u }), [l.slot, u]), a = { ref: s, ...l.props, id: o };
  return ae({ ourProps: a, theirProps: i, slot: f, defaultTag: Ho, name: l.name || "Description" });
}
let _o = ie(No);
Object.assign(_o, {});
var z = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(z || {});
let pt = ne(null);
pt.displayName = "LabelContext";
function or() {
  let e = Y(pt);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, or), t;
  }
  return e;
}
function ir(e) {
  var t, n, r;
  let o = (n = (t = Y(pt)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o;
}
function Bo({ inherit: e = !1 } = {}) {
  let t = ir(), [n, r] = U([]), o = e ? [t, ...n].filter(Boolean) : n;
  return [o.length > 0 ? o.join(" ") : void 0, K(() => function(i) {
    let l = I((u) => (r((f) => [...f, u]), () => r((f) => {
      let a = f.slice(), d = a.indexOf(u);
      return d !== -1 && a.splice(d, 1), a;
    }))), s = K(() => ({ register: l, slot: i.slot, name: i.name, props: i.props, value: i.value }), [l, i.slot, i.name, i.props, i.value]);
    return W.createElement(pt.Provider, { value: s }, i.children);
  }, [r])];
}
let Wo = "label";
function Vo(e, t) {
  var n;
  let r = Ve(), o = or(), i = tr(), l = qt(), { id: s = `headlessui-label-${r}`, htmlFor: u = i ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: f = !1, ...a } = e, d = de(t);
  V(() => o.register(s), [s, o.register]);
  let m = I((g) => {
    let h = g.currentTarget;
    if (h instanceof HTMLLabelElement && g.preventDefault(), o.props && "onClick" in o.props && typeof o.props.onClick == "function" && o.props.onClick(g), h instanceof HTMLLabelElement) {
      let b = document.getElementById(h.htmlFor);
      if (b) {
        let y = b.getAttribute("disabled");
        if (y === "true" || y === "") return;
        let E = b.getAttribute("aria-disabled");
        if (E === "true" || E === "") return;
        (b instanceof HTMLInputElement && (b.type === "radio" || b.type === "checkbox") || b.role === "radio" || b.role === "checkbox" || b.role === "switch") && b.click(), b.focus({ preventScroll: !0 });
      }
    }
  }), c = l || !1, p = K(() => ({ ...o.slot, disabled: c }), [o.slot, c]), v = { ref: d, ...o.props, id: s, htmlFor: u, onClick: m };
  return f && ("onClick" in v && (delete v.htmlFor, delete v.onClick), "onClick" in a && delete a.onClick), ae({ ourProps: v, theirProps: a, slot: p, defaultTag: u ? Wo : "div", name: o.name || "Label" });
}
let jo = ie(Vo), Uo = Object.assign(jo, {});
function Ko(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Yo(e = Ko) {
  return Q((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Xo(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Go(e, t = !1) {
  let n = e === null ? null : "current" in e ? e.current : e, [r, o] = Bn(() => ({}), {}), i = K(() => Xo(n), [n, r]);
  return V(() => {
    if (!n) return;
    let l = new ResizeObserver(o);
    return l.observe(n), () => {
      l.disconnect();
    };
  }, [n]), t ? { width: `${i.width}px`, height: `${i.height}px` } : i;
}
let qo = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
function lr(e, t) {
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
function sr(e) {
  return Xr(e.subscribe, e.getSnapshot, e.getSnapshot);
}
let zo = new qo(() => lr(() => [], { ADD(e) {
  return this.includes(e) ? this : [...this, e];
}, REMOVE(e) {
  let t = this.indexOf(e);
  if (t === -1) return this;
  let n = this.slice();
  return n.splice(t, 1), n;
} }));
function Zt(e, t) {
  let n = zo.get(t), r = Ve(), o = sr(n);
  if (V(() => {
    if (e) return n.dispatch("ADD", r), () => n.dispatch("REMOVE", r);
  }, [n, e]), !e) return !1;
  let i = o.indexOf(r), l = o.length;
  return i === -1 && (i = l, l += 1), i === l - 1;
}
let Bt = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Map();
function gn(e) {
  var t;
  let n = (t = Ge.get(e)) != null ? t : 0;
  return Ge.set(e, n + 1), n !== 0 ? () => hn(e) : (Bt.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => hn(e));
}
function hn(e) {
  var t;
  let n = (t = Ge.get(e)) != null ? t : 1;
  if (n === 1 ? Ge.delete(e) : Ge.set(e, n - 1), n !== 1) return;
  let r = Bt.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Bt.delete(e));
}
function Qo(e, { allowed: t, disallowed: n } = {}) {
  let r = Zt(e, "inert-others");
  V(() => {
    var o, i;
    if (!r) return;
    let l = ye();
    for (let u of (o = n == null ? void 0 : n()) != null ? o : []) u && l.add(gn(u));
    let s = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let u of s) {
      if (!u) continue;
      let f = Je(u);
      if (!f) continue;
      let a = u.parentElement;
      for (; a && a !== f.body; ) {
        for (let d of a.children) s.some((m) => d.contains(m)) || l.add(gn(d));
        a = a.parentElement;
      }
    }
    return l.dispose;
  }, [r, t, n]);
}
function ur(e, t, n) {
  let r = Le((o) => {
    let i = o.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  Z(() => {
    if (!e) return;
    let o = t === null ? null : t instanceof HTMLElement ? t : t.current;
    if (!o) return;
    let i = ye();
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
let Wt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), Zo = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Vt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(Vt || {}), Jo = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Jo || {}), ei = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ei || {});
function ar(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Wt)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function ti(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Zo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Jt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Jt || {});
function cr(e, t = 0) {
  var n;
  return e === ((n = Je(e)) == null ? void 0 : n.body) ? !1 : ve(t, { 0() {
    return e.matches(Wt);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Wt)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var ni = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(ni || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
let ri = ["textarea", "input"].join(",");
function oi(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ri)) != null ? n : !1;
}
function fr(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ii(e, t) {
  return li(ar(), t, { relativeTo: e });
}
function li(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? fr(e) : e : t & 64 ? ti(e) : ar(e);
  o.length > 0 && l.length > 1 && (l = l.filter((c) => !o.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === c : p === c))), r = r ?? i.activeElement;
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
  })(), f = t & 32 ? { preventScroll: !0 } : {}, a = 0, d = l.length, m;
  do {
    if (a >= d || a + d <= 0) return 0;
    let c = u + a;
    if (t & 16) c = (c + d) % d;
    else {
      if (c < 0) return 3;
      if (c >= d) return 1;
    }
    m = l[c], m == null || m.focus(f), a += s;
  } while (m !== i.activeElement);
  return t & 6 && oi(m) && m.select(), 2;
}
function dr() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function si() {
  return /Android/gi.test(window.navigator.userAgent);
}
function ui() {
  return dr() || si();
}
function Ye(e, t, n, r) {
  let o = Le(n);
  Z(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ai(e, t, n, r) {
  let o = Le(n);
  Z(() => {
    if (!e) return;
    function i(l) {
      o.current(l);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const bn = 30;
function ci(e, t, n) {
  let r = Zt(e, "outside-click"), o = Le(n), i = Q(function(u, f) {
    if (u.defaultPrevented) return;
    let a = f(u);
    if (a === null || !a.getRootNode().contains(a) || !a.isConnected) return;
    let d = function m(c) {
      return typeof c == "function" ? m(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(t);
    for (let m of d) {
      if (m === null) continue;
      let c = m instanceof HTMLElement ? m : m.current;
      if (c != null && c.contains(a) || u.composed && u.composedPath().includes(c)) return;
    }
    return !cr(a, Jt.Loose) && a.tabIndex !== -1 && u.preventDefault(), o.current(u, a);
  }, [o]), l = k(null);
  Ye(r, "pointerdown", (u) => {
    var f, a;
    l.current = ((a = (f = u.composedPath) == null ? void 0 : f.call(u)) == null ? void 0 : a[0]) || u.target;
  }, !0), Ye(r, "mousedown", (u) => {
    var f, a;
    l.current = ((a = (f = u.composedPath) == null ? void 0 : f.call(u)) == null ? void 0 : a[0]) || u.target;
  }, !0), Ye(r, "click", (u) => {
    ui() || l.current && (i(u, () => l.current), l.current = null);
  }, !0);
  let s = k({ x: 0, y: 0 });
  Ye(r, "touchstart", (u) => {
    s.current.x = u.touches[0].clientX, s.current.y = u.touches[0].clientY;
  }, !0), Ye(r, "touchend", (u) => {
    let f = { x: u.changedTouches[0].clientX, y: u.changedTouches[0].clientY };
    if (!(Math.abs(f.x - s.current.x) >= bn || Math.abs(f.y - s.current.y) >= bn)) return i(u, () => u.target instanceof HTMLElement ? u.target : null);
  }, !0), ai(r, "blur", (u) => i(u, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function en(...e) {
  return K(() => Je(...e), [...e]);
}
function yn(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function fi(e, t) {
  let [n, r] = U(() => yn(e));
  return V(() => {
    r(yn(e));
  }, [e.type, e.as]), V(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
function di() {
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
function pi() {
  return dr() ? { before({ doc: e, d: t, meta: n }) {
    function r(o) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(o));
    }
    t.microTask(() => {
      var o;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let s = ye();
        s.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => s.dispose()));
      }
      let i = (o = window.scrollY) != null ? o : window.pageYOffset, l = null;
      t.addEventListener(e, "click", (s) => {
        if (s.target instanceof HTMLElement) try {
          let u = s.target.closest("a");
          if (!u) return;
          let { hash: f } = new URL(u.href), a = e.querySelector(f);
          a && !r(a) && (l = a);
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
function mi() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function vi(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let Me = lr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ye(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: vi(n) }, o = [pi(), di(), mi()];
  o.forEach(({ before: i }) => i == null ? void 0 : i(r)), o.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Me.subscribe(() => {
  let e = Me.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", o = n.count !== 0;
    (o && !r || !o && r) && Me.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Me.dispatch("TEARDOWN", n);
  }
});
function gi(e, t, n = () => ({ containers: [] })) {
  let r = sr(Me), o = t ? r.get(t) : void 0, i = o ? o.count > 0 : !1;
  return V(() => {
    if (!(!t || !e)) return Me.dispatch("PUSH", t, n), () => Me.dispatch("POP", t, n);
  }, [e, t]), i;
}
function hi(e, t, n = () => [document.body]) {
  let r = Zt(e, "scroll-lock");
  gi(r, t, (o) => {
    var i;
    return { containers: [...(i = o.containers) != null ? i : [], n] };
  });
}
function wn(e) {
  return [e.screenX, e.screenY];
}
function bi() {
  let e = k([-1, -1]);
  return { wasMoved(t) {
    let n = wn(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = wn(t);
  } };
}
function yi(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return t.called = !0, e(...n);
  };
}
function wi(e = 0) {
  let [t, n] = U(e), r = Q((u) => n(u), [t]), o = Q((u) => n((f) => f | u), [t]), i = Q((u) => (t & u) === u, [t]), l = Q((u) => n((f) => f & ~u), [n]), s = Q((u) => n((f) => f ^ u), [n]);
  return { flags: t, setFlag: r, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: s };
}
var Ei = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(Ei || {});
function pr(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function mr(e, t, n, r) {
  let [o, i] = U(n), { hasFlag: l, addFlag: s, removeFlag: u } = wi(e && o ? 3 : 0), f = k(!1), a = k(!1), d = Ne();
  return V(function m() {
    var c;
    if (!e) return;
    n && i(!0);
    let p = t.current;
    return p ? ((c = r == null ? void 0 : r.start) == null || c.call(r, n), xi(p, { inFlight: f, prepare() {
      a.current ? a.current = !1 : a.current = f.current, f.current = !0, !a.current && (n ? (s(3), u(4)) : (s(4), u(2)));
    }, run() {
      a.current ? n ? (u(3), s(4)) : (u(4), s(3)) : n ? u(1) : s(1);
    }, done() {
      var v;
      a.current && typeof p.getAnimations == "function" && p.getAnimations().length > 0 || (f.current = !1, u(7), n || i(!1), (v = r == null ? void 0 : r.end) == null || v.call(r, n));
    } })) : n ? (s(3), d.nextFrame(() => m())) : void 0;
  }, [e, n, t, d]), e ? [o, { closed: l(1), enter: l(2), leave: l(4), transition: l(2) || l(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function xi(e, { prepare: t, run: n, done: r, inFlight: o }) {
  let i = ye();
  return $i(e, { prepare: t, inFlight: o }), i.nextFrame(() => {
    i.add(Ri(e, r)), n();
  }), i.dispose;
}
function Ri(e, t) {
  let n = yi(t), r = ye();
  if (!e) return r.dispose;
  let { transitionDuration: o, transitionDelay: i } = getComputedStyle(e), [l, s] = [o, i].map((f) => {
    let [a = 0] = f.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, m) => m - d);
    return a;
  }), u = l + s;
  if (u !== 0) {
    let f = r.group((a) => {
      let d = a.setTimeout(() => {
        n(), a.dispose();
      }, u);
      a.addEventListener(e, "transitionrun", (m) => {
        m.target === m.currentTarget && (d(), a.addEventListener(e, "transitioncancel", (c) => {
          c.target === c.currentTarget && (n(), f());
        }));
      });
    });
    r.addEventListener(e, "transitionend", (a) => {
      a.target === a.currentTarget && (n(), r.dispose());
    });
  } else n();
  return r.dispose;
}
function $i(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function je(e) {
  return vr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function oe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function we(e) {
  var t;
  return (t = (vr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vr(e) {
  return e instanceof Node || e instanceof oe(e).Node;
}
function j(e) {
  return e instanceof Element || e instanceof oe(e).Element;
}
function ue(e) {
  return e instanceof HTMLElement || e instanceof oe(e).HTMLElement;
}
function jt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof oe(e).ShadowRoot;
}
function et(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fe(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ti(e) {
  return ["table", "td", "th"].includes(je(e));
}
function mt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function tn(e) {
  const t = nn(), n = fe(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Si(e) {
  let t = be(e);
  for (; ue(t) && !Se(t); ) {
    if (mt(t))
      return null;
    if (tn(t))
      return t;
    t = be(t);
  }
  return null;
}
function nn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Se(e) {
  return ["html", "body", "#document"].includes(je(e));
}
function fe(e) {
  return oe(e).getComputedStyle(e);
}
function vt(e) {
  return j(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function be(e) {
  if (je(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    jt(e) && e.host || // Fallback.
    we(e)
  );
  return jt(t) ? t.host : t;
}
function gr(e) {
  const t = be(e);
  return Se(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && et(t) ? t : gr(t);
}
function Te(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = gr(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), l = oe(o);
  return i ? t.concat(l, l.visualViewport || [], et(o) ? o : [], l.frameElement && n ? Te(l.frameElement) : []) : t.concat(o, Te(o, [], n));
}
function En(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function qe(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && jt(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function hr() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function rn() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function Oi(e) {
  return Ci() ? !1 : !xn() && e.width === 0 && e.height === 0 || xn() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function Pi() {
  return /apple/i.test(navigator.vendor);
}
function xn() {
  const e = /android/i;
  return e.test(hr()) || e.test(rn());
}
function Li() {
  return hr().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Ci() {
  return rn().includes("jsdom/");
}
function Ut(e, t) {
  const n = ["mouse", "pen"];
  return n.push("", void 0), n.includes(e);
}
function Fi(e) {
  return "nativeEvent" in e;
}
function Mi(e) {
  return e.matches("html,body");
}
function Ae(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Tt(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function _e(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Ai = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function Di(e) {
  return ue(e) && e.matches(Ai);
}
const $e = Math.min, se = Math.max, at = Math.round, ot = Math.floor, Oe = (e) => ({
  x: e,
  y: e
}), Ii = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ki = {
  start: "end",
  end: "start"
};
function Rn(e, t, n) {
  return se(e, $e(t, n));
}
function Ue(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function br(e) {
  return e === "x" ? "y" : "x";
}
function yr(e) {
  return e === "y" ? "height" : "width";
}
function ke(e) {
  return ["top", "bottom"].includes(Pe(e)) ? "y" : "x";
}
function wr(e) {
  return br(ke(e));
}
function Hi(e, t, n) {
  n === void 0 && (n = !1);
  const r = tt(e), o = wr(e), i = yr(o);
  let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = ct(l)), [l, ct(l)];
}
function Ni(e) {
  const t = ct(e);
  return [Kt(e), t, Kt(t)];
}
function Kt(e) {
  return e.replace(/start|end/g, (t) => ki[t]);
}
function _i(e, t, n) {
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
function Bi(e, t, n, r) {
  const o = tt(e);
  let i = _i(Pe(e), n === "start", r);
  return o && (i = i.map((l) => l + "-" + o), t && (i = i.concat(i.map(Kt)))), i;
}
function ct(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ii[t]);
}
function Wi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vi(e) {
  return typeof e != "number" ? Wi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ft(e) {
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
function $n(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = ke(t), l = wr(t), s = yr(l), u = Pe(t), f = i === "y", a = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, m = r[s] / 2 - o[s] / 2;
  let c;
  switch (u) {
    case "top":
      c = {
        x: a,
        y: r.y - o.height
      };
      break;
    case "bottom":
      c = {
        x: a,
        y: r.y + r.height
      };
      break;
    case "right":
      c = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      c = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      c = {
        x: r.x,
        y: r.y
      };
  }
  switch (tt(t)) {
    case "start":
      c[l] -= m * (n && f ? -1 : 1);
      break;
    case "end":
      c[l] += m * (n && f ? -1 : 1);
      break;
  }
  return c;
}
const ji = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: l
  } = n, s = i.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let f = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: a,
    y: d
  } = $n(f, r, u), m = r, c = {}, p = 0;
  for (let v = 0; v < s.length; v++) {
    const {
      name: g,
      fn: h
    } = s[v], {
      x: b,
      y,
      data: E,
      reset: T
    } = await h({
      x: a,
      y: d,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: c,
      rects: f,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    a = b ?? a, d = y ?? d, c = {
      ...c,
      [g]: {
        ...c[g],
        ...E
      }
    }, T && p <= 50 && (p++, typeof T == "object" && (T.placement && (m = T.placement), T.rects && (f = T.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : T.rects), {
      x: a,
      y: d
    } = $n(f, m, u)), v = -1);
  }
  return {
    x: a,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: c
  };
};
async function gt(e, t) {
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
    boundary: f = "clippingAncestors",
    rootBoundary: a = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: c = 0
  } = Ue(t, e), p = Vi(c), g = s[m ? d === "floating" ? "reference" : "floating" : d], h = ft(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: f,
    rootBoundary: a,
    strategy: u
  })), b = d === "floating" ? {
    x: r,
    y: o,
    width: l.floating.width,
    height: l.floating.height
  } : l.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), E = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = ft(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: b,
    offsetParent: y,
    strategy: u
  }) : b);
  return {
    top: (h.top - T.top + p.top) / E.y,
    bottom: (T.bottom - h.bottom + p.bottom) / E.y,
    left: (h.left - T.left + p.left) / E.x,
    right: (T.right - h.right + p.right) / E.x
  };
}
const Ui = function(e) {
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
        elements: f
      } = t, {
        mainAxis: a = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: c = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: v = !0,
        ...g
      } = Ue(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const h = Pe(o), b = ke(s), y = Pe(s) === s, E = await (u.isRTL == null ? void 0 : u.isRTL(f.floating)), T = m || (y || !v ? [ct(s)] : Ni(s)), M = p !== "none";
      !m && M && T.push(...Bi(s, v, p, E));
      const B = [s, ...T], L = await gt(t, g), H = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (a && H.push(L[h]), d) {
        const C = Hi(o, l, E);
        H.push(L[C[0]], L[C[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: H
      }], !H.every((C) => C <= 0)) {
        var F, _;
        const C = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1, S = B[C];
        if (S)
          return {
            data: {
              index: C,
              overflows: N
            },
            reset: {
              placement: S
            }
          };
        let $ = (_ = N.filter((R) => R.overflows[0] <= 0).sort((R, O) => R.overflows[1] - O.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!$)
          switch (c) {
            case "bestFit": {
              var A;
              const R = (A = N.filter((O) => {
                if (M) {
                  const x = ke(O.placement);
                  return x === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  x === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((x) => x > 0).reduce((x, P) => x + P, 0)]).sort((O, x) => O[1] - x[1])[0]) == null ? void 0 : A[0];
              R && ($ = R);
              break;
            }
            case "initialPlacement":
              $ = s;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function Ki(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), l = Pe(n), s = tt(n), u = ke(n) === "y", f = ["left", "top"].includes(l) ? -1 : 1, a = i && u ? -1 : 1, d = Ue(t, e);
  let {
    mainAxis: m,
    crossAxis: c,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return s && typeof p == "number" && (c = s === "end" ? p * -1 : p), u ? {
    x: c * a,
    y: m * f
  } : {
    x: m * f,
    y: c * a
  };
}
const Yi = function(e) {
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
      } = t, u = await Ki(t, e);
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
}, Xi = function(e) {
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
          fn: (g) => {
            let {
              x: h,
              y: b
            } = g;
            return {
              x: h,
              y: b
            };
          }
        },
        ...u
      } = Ue(e, t), f = {
        x: n,
        y: r
      }, a = await gt(t, u), d = ke(Pe(o)), m = br(d);
      let c = f[m], p = f[d];
      if (i) {
        const g = m === "y" ? "top" : "left", h = m === "y" ? "bottom" : "right", b = c + a[g], y = c - a[h];
        c = Rn(b, c, y);
      }
      if (l) {
        const g = d === "y" ? "top" : "left", h = d === "y" ? "bottom" : "right", b = p + a[g], y = p - a[h];
        p = Rn(b, p, y);
      }
      const v = s.fn({
        ...t,
        [m]: c,
        [d]: p
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r
        }
      };
    }
  };
}, Gi = function(e) {
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
      } = Ue(e, t), u = await gt(t, s), f = Pe(n), a = tt(n), d = ke(n) === "y", {
        width: m,
        height: c
      } = r.floating;
      let p, v;
      f === "top" || f === "bottom" ? (p = f, v = a === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = f, p = a === "end" ? "top" : "bottom");
      const g = c - u.top - u.bottom, h = m - u.left - u.right, b = $e(c - u[p], g), y = $e(m - u[v], h), E = !t.middlewareData.shift;
      let T = b, M = y;
      if (d ? M = a || E ? $e(y, h) : h : T = a || E ? $e(b, g) : g, E && !a) {
        const L = se(u.left, 0), H = se(u.right, 0), N = se(u.top, 0), F = se(u.bottom, 0);
        d ? M = m - 2 * (L !== 0 || H !== 0 ? L + H : se(u.left, u.right)) : T = c - 2 * (N !== 0 || F !== 0 ? N + F : se(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: T
      });
      const B = await o.getDimensions(i.floating);
      return m !== B.width || c !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Er(e) {
  const t = fe(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ue(e), i = o ? e.offsetWidth : n, l = o ? e.offsetHeight : r, s = at(n) !== i || at(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function on(e) {
  return j(e) ? e : e.contextElement;
}
function Be(e) {
  const t = on(e);
  if (!ue(t))
    return Oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Er(t);
  let l = (i ? at(n.width) : n.width) / r, s = (i ? at(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const qi = /* @__PURE__ */ Oe(0);
function xr(e) {
  const t = oe(e);
  return !nn() || !t.visualViewport ? qi : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function zi(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== oe(e) ? !1 : t;
}
function He(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = on(e);
  let l = Oe(1);
  t && (r ? j(r) && (l = Be(r)) : l = Be(e));
  const s = zi(i, n, r) ? xr(i) : Oe(0);
  let u = (o.left + s.x) / l.x, f = (o.top + s.y) / l.y, a = o.width / l.x, d = o.height / l.y;
  if (i) {
    const m = oe(i), c = r && j(r) ? oe(r) : r;
    let p = m, v = p.frameElement;
    for (; v && r && c !== p; ) {
      const g = Be(v), h = v.getBoundingClientRect(), b = fe(v), y = h.left + (v.clientLeft + parseFloat(b.paddingLeft)) * g.x, E = h.top + (v.clientTop + parseFloat(b.paddingTop)) * g.y;
      u *= g.x, f *= g.y, a *= g.x, d *= g.y, u += y, f += E, p = oe(v), v = p.frameElement;
    }
  }
  return ft({
    width: a,
    height: d,
    x: u,
    y: f
  });
}
function Qi(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", l = we(r), s = t ? mt(t.floating) : !1;
  if (r === l || s && i)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Oe(1);
  const a = Oe(0), d = ue(r);
  if ((d || !d && !i) && ((je(r) !== "body" || et(l)) && (u = vt(r)), ue(r))) {
    const m = He(r);
    f = Be(r), a.x = m.x + r.clientLeft, a.y = m.y + r.clientTop;
  }
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - u.scrollLeft * f.x + a.x,
    y: n.y * f.y - u.scrollTop * f.y + a.y
  };
}
function Zi(e) {
  return Array.from(e.getClientRects());
}
function Rr(e) {
  return He(we(e)).left + vt(e).scrollLeft;
}
function Ji(e) {
  const t = we(e), n = vt(e), r = e.ownerDocument.body, o = se(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = se(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + Rr(e);
  const s = -n.scrollTop;
  return fe(r).direction === "rtl" && (l += se(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function el(e, t) {
  const n = oe(e), r = we(e), o = n.visualViewport;
  let i = r.clientWidth, l = r.clientHeight, s = 0, u = 0;
  if (o) {
    i = o.width, l = o.height;
    const f = nn();
    (!f || f && t === "fixed") && (s = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: u
  };
}
function tl(e, t) {
  const n = He(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ue(e) ? Be(e) : Oe(1), l = e.clientWidth * i.x, s = e.clientHeight * i.y, u = o * i.x, f = r * i.y;
  return {
    width: l,
    height: s,
    x: u,
    y: f
  };
}
function Tn(e, t, n) {
  let r;
  if (t === "viewport")
    r = el(e, n);
  else if (t === "document")
    r = Ji(we(e));
  else if (j(t))
    r = tl(t, n);
  else {
    const o = xr(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return ft(r);
}
function $r(e, t) {
  const n = be(e);
  return n === t || !j(n) || Se(n) ? !1 : fe(n).position === "fixed" || $r(n, t);
}
function nl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Te(e, [], !1).filter((s) => j(s) && je(s) !== "body"), o = null;
  const i = fe(e).position === "fixed";
  let l = i ? be(e) : e;
  for (; j(l) && !Se(l); ) {
    const s = fe(l), u = tn(l);
    !u && s.position === "fixed" && (o = null), (i ? !u && !o : !u && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || et(l) && !u && $r(e, l)) ? r = r.filter((a) => a !== l) : o = s, l = be(l);
  }
  return t.set(e, r), r;
}
function rl(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...n === "clippingAncestors" ? mt(t) ? [] : nl(t, this._c) : [].concat(n), r], s = l[0], u = l.reduce((f, a) => {
    const d = Tn(t, a, o);
    return f.top = se(d.top, f.top), f.right = $e(d.right, f.right), f.bottom = $e(d.bottom, f.bottom), f.left = se(d.left, f.left), f;
  }, Tn(t, s, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function ol(e) {
  const {
    width: t,
    height: n
  } = Er(e);
  return {
    width: t,
    height: n
  };
}
function il(e, t, n) {
  const r = ue(t), o = we(t), i = n === "fixed", l = He(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Oe(0);
  if (r || !r && !i)
    if ((je(t) !== "body" || et(o)) && (s = vt(t)), r) {
      const d = He(t, !0, i, t);
      u.x = d.x + t.clientLeft, u.y = d.y + t.clientTop;
    } else o && (u.x = Rr(o));
  const f = l.left + s.scrollLeft - u.x, a = l.top + s.scrollTop - u.y;
  return {
    x: f,
    y: a,
    width: l.width,
    height: l.height
  };
}
function St(e) {
  return fe(e).position === "static";
}
function Sn(e, t) {
  return !ue(e) || fe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Tr(e, t) {
  const n = oe(e);
  if (mt(e))
    return n;
  if (!ue(e)) {
    let o = be(e);
    for (; o && !Se(o); ) {
      if (j(o) && !St(o))
        return o;
      o = be(o);
    }
    return n;
  }
  let r = Sn(e, t);
  for (; r && Ti(r) && St(r); )
    r = Sn(r, t);
  return r && Se(r) && St(r) && !tn(r) ? n : r || Si(e) || n;
}
const ll = async function(e) {
  const t = this.getOffsetParent || Tr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: il(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function sl(e) {
  return fe(e).direction === "rtl";
}
const ul = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qi,
  getDocumentElement: we,
  getClippingRect: rl,
  getOffsetParent: Tr,
  getElementRects: ll,
  getClientRects: Zi,
  getDimensions: ol,
  getScale: Be,
  isElement: j,
  isRTL: sl
};
function al(e, t) {
  let n = null, r;
  const o = we(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function l(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), i();
    const {
      left: f,
      top: a,
      width: d,
      height: m
    } = e.getBoundingClientRect();
    if (s || t(), !d || !m)
      return;
    const c = ot(a), p = ot(o.clientWidth - (f + d)), v = ot(o.clientHeight - (a + m)), g = ot(f), b = {
      rootMargin: -c + "px " + -p + "px " + -v + "px " + -g + "px",
      threshold: se(0, $e(1, u)) || 1
    };
    let y = !0;
    function E(T) {
      const M = T[0].intersectionRatio;
      if (M !== u) {
        if (!y)
          return l();
        M ? l(!1, M) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, b);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function cl(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, f = on(e), a = o || i ? [...f ? Te(f) : [], ...Te(t)] : [];
  a.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const d = f && s ? al(f, n) : null;
  let m = -1, c = null;
  l && (c = new ResizeObserver((h) => {
    let [b] = h;
    b && b.target === f && c && (c.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var y;
      (y = c) == null || y.observe(t);
    })), n();
  }), f && !u && c.observe(f), c.observe(t));
  let p, v = u ? He(e) : null;
  u && g();
  function g() {
    const h = He(e);
    v && (h.x !== v.x || h.y !== v.y || h.width !== v.width || h.height !== v.height) && n(), v = h, p = requestAnimationFrame(g);
  }
  return n(), () => {
    var h;
    a.forEach((b) => {
      o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n);
    }), d == null || d(), (h = c) == null || h.disconnect(), c = null, u && cancelAnimationFrame(p);
  };
}
const Ot = gt, fl = Yi, dl = Xi, pl = Ui, ml = Gi, vl = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ul,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ji(e, t, {
    ...o,
    platform: i
  });
};
var it = typeof document < "u" ? Xt : Z;
function dt(e, t) {
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
        if (!dt(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !dt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Sr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function On(e, t) {
  const n = Sr(e);
  return Math.round(t * n) / n;
}
function Pn(e) {
  const t = w.useRef(e);
  return it(() => {
    t.current = e;
  }), t;
}
function gl(e) {
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
    open: f
  } = e, [a, d] = w.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, c] = w.useState(r);
  dt(m, r) || c(r);
  const [p, v] = w.useState(null), [g, h] = w.useState(null), b = w.useCallback((R) => {
    R !== M.current && (M.current = R, v(R));
  }, []), y = w.useCallback((R) => {
    R !== B.current && (B.current = R, h(R));
  }, []), E = i || p, T = l || g, M = w.useRef(null), B = w.useRef(null), L = w.useRef(a), H = u != null, N = Pn(u), F = Pn(o), _ = w.useCallback(() => {
    if (!M.current || !B.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: m
    };
    F.current && (R.platform = F.current), vl(M.current, B.current, R).then((O) => {
      const x = {
        ...O,
        isPositioned: !0
      };
      A.current && !dt(L.current, x) && (L.current = x, re.flushSync(() => {
        d(x);
      }));
    });
  }, [m, t, n, F]);
  it(() => {
    f === !1 && L.current.isPositioned && (L.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [f]);
  const A = w.useRef(!1);
  it(() => (A.current = !0, () => {
    A.current = !1;
  }), []), it(() => {
    if (E && (M.current = E), T && (B.current = T), E && T) {
      if (N.current)
        return N.current(E, T, _);
      _();
    }
  }, [E, T, _, N, H]);
  const C = w.useMemo(() => ({
    reference: M,
    floating: B,
    setReference: b,
    setFloating: y
  }), [b, y]), S = w.useMemo(() => ({
    reference: E,
    floating: T
  }), [E, T]), $ = w.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!S.floating)
      return R;
    const O = On(S.floating, a.x), x = On(S.floating, a.y);
    return s ? {
      ...R,
      transform: "translate(" + O + "px, " + x + "px)",
      ...Sr(S.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: O,
      top: x
    };
  }, [n, s, S.floating, a.x, a.y]);
  return w.useMemo(() => ({
    ...a,
    update: _,
    refs: C,
    elements: S,
    floatingStyles: $
  }), [a, _, C, S, $]);
}
const Or = (e, t) => ({
  ...fl(e),
  options: [e, t]
}), hl = (e, t) => ({
  ...dl(e),
  options: [e, t]
}), bl = (e, t) => ({
  ...pl(e),
  options: [e, t]
}), yl = (e, t) => ({
  ...ml(e),
  options: [e, t]
}), Pr = {
  ...w
}, wl = Pr.useInsertionEffect, El = wl || ((e) => e());
function he(e) {
  const t = w.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return El(() => {
    t.current = e;
  }), w.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var We = typeof document < "u" ? Xt : Z;
let Ln = !1, xl = 0;
const Cn = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + xl++
);
function Rl() {
  const [e, t] = w.useState(() => Ln ? Cn() : void 0);
  return We(() => {
    e == null && t(Cn());
  }, []), w.useEffect(() => {
    Ln = !0;
  }, []), e;
}
const $l = Pr.useId, Lr = $l || Rl;
let ze;
process.env.NODE_ENV !== "production" && (ze = /* @__PURE__ */ new Set());
function Tl() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = ze) != null && e.has(o))) {
    var i;
    (i = ze) == null || i.add(o), console.warn(o);
  }
}
function Sl() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const o = "Floating UI: " + n.join(" ");
  if (!((e = ze) != null && e.has(o))) {
    var i;
    (i = ze) == null || i.add(o), console.error(o);
  }
}
function Ol() {
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
const Pl = /* @__PURE__ */ w.createContext(null), Ll = /* @__PURE__ */ w.createContext(null), ln = () => {
  var e;
  return ((e = w.useContext(Pl)) == null ? void 0 : e.id) || null;
}, sn = () => w.useContext(Ll);
function un(e) {
  return "data-floating-ui-" + e;
}
function Pt(e) {
  const t = k(e);
  return We(() => {
    t.current = e;
  }), t;
}
const Fn = /* @__PURE__ */ un("safe-polygon");
function Lt(e, t, n) {
  return n && !Ut(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Xs(e, t) {
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
    handleClose: f = null,
    mouseOnly: a = !1,
    restMs: d = 0,
    move: m = !0
  } = t, c = sn(), p = ln(), v = Pt(f), g = Pt(u), h = Pt(n), b = w.useRef(), y = w.useRef(-1), E = w.useRef(), T = w.useRef(-1), M = w.useRef(!0), B = w.useRef(!1), L = w.useRef(() => {
  }), H = w.useCallback(() => {
    var S;
    const $ = (S = o.current.openEvent) == null ? void 0 : S.type;
    return ($ == null ? void 0 : $.includes("mouse")) && $ !== "mousedown";
  }, [o]);
  w.useEffect(() => {
    if (!s) return;
    function S($) {
      let {
        open: R
      } = $;
      R || (clearTimeout(y.current), clearTimeout(T.current), M.current = !0);
    }
    return i.on("openchange", S), () => {
      i.off("openchange", S);
    };
  }, [s, i]), w.useEffect(() => {
    if (!s || !v.current || !n) return;
    function S(R) {
      H() && r(!1, R, "hover");
    }
    const $ = Ae(l.floating).documentElement;
    return $.addEventListener("mouseleave", S), () => {
      $.removeEventListener("mouseleave", S);
    };
  }, [l.floating, n, r, s, v, H]);
  const N = w.useCallback(function(S, $, R) {
    $ === void 0 && ($ = !0), R === void 0 && (R = "hover");
    const O = Lt(g.current, "close", b.current);
    O && !E.current ? (clearTimeout(y.current), y.current = window.setTimeout(() => r(!1, S, R), O)) : $ && (clearTimeout(y.current), r(!1, S, R));
  }, [g, r]), F = he(() => {
    L.current(), E.current = void 0;
  }), _ = he(() => {
    if (B.current) {
      const S = Ae(l.floating).body;
      S.style.pointerEvents = "", S.removeAttribute(Fn), B.current = !1;
    }
  });
  w.useEffect(() => {
    if (!s) return;
    function S() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function $(P) {
      if (clearTimeout(y.current), M.current = !1, a && !Ut(b.current) || d > 0 && !Lt(g.current, "open"))
        return;
      const D = Lt(g.current, "open", b.current);
      D ? y.current = window.setTimeout(() => {
        h.current || r(!0, P, "hover");
      }, D) : r(!0, P, "hover");
    }
    function R(P) {
      if (S()) return;
      L.current();
      const D = Ae(l.floating);
      if (clearTimeout(T.current), v.current && o.current.floatingContext) {
        n || clearTimeout(y.current), E.current = v.current({
          ...o.current.floatingContext,
          tree: c,
          x: P.clientX,
          y: P.clientY,
          onClose() {
            _(), F(), N(P, !0, "safe-polygon");
          }
        });
        const J = E.current;
        D.addEventListener("mousemove", J), L.current = () => {
          D.removeEventListener("mousemove", J);
        };
        return;
      }
      (b.current === "touch" ? !qe(l.floating, P.relatedTarget) : !0) && N(P);
    }
    function O(P) {
      S() || o.current.floatingContext && (v.current == null || v.current({
        ...o.current.floatingContext,
        tree: c,
        x: P.clientX,
        y: P.clientY,
        onClose() {
          _(), F(), N(P);
        }
      })(P));
    }
    if (j(l.domReference)) {
      var x;
      const P = l.domReference;
      return n && P.addEventListener("mouseleave", O), (x = l.floating) == null || x.addEventListener("mouseleave", O), m && P.addEventListener("mousemove", $, {
        once: !0
      }), P.addEventListener("mouseenter", $), P.addEventListener("mouseleave", R), () => {
        var D;
        n && P.removeEventListener("mouseleave", O), (D = l.floating) == null || D.removeEventListener("mouseleave", O), m && P.removeEventListener("mousemove", $), P.removeEventListener("mouseenter", $), P.removeEventListener("mouseleave", R);
      };
    }
  }, [l, s, e, a, d, m, N, F, _, r, n, h, c, g, v, o]), We(() => {
    var S;
    if (s && n && (S = v.current) != null && S.__options.blockPointerEvents && H()) {
      const R = Ae(l.floating).body;
      R.setAttribute(Fn, ""), R.style.pointerEvents = "none", B.current = !0;
      const O = l.floating;
      if (j(l.domReference) && O) {
        var $;
        const x = l.domReference, P = c == null || ($ = c.nodesRef.current.find((D) => D.id === p)) == null || ($ = $.context) == null ? void 0 : $.elements.floating;
        return P && (P.style.pointerEvents = ""), x.style.pointerEvents = "auto", O.style.pointerEvents = "auto", () => {
          x.style.pointerEvents = "", O.style.pointerEvents = "";
        };
      }
    }
  }, [s, n, p, l, c, v, H]), We(() => {
    n || (b.current = void 0, F(), _());
  }, [n, F, _]), w.useEffect(() => () => {
    F(), clearTimeout(y.current), clearTimeout(T.current), _();
  }, [s, l.domReference, F, _]);
  const A = w.useMemo(() => {
    function S($) {
      b.current = $.pointerType;
    }
    return {
      onPointerDown: S,
      onPointerEnter: S,
      onMouseMove($) {
        const {
          nativeEvent: R
        } = $;
        function O() {
          !M.current && !h.current && r(!0, R, "hover");
        }
        a && !Ut(b.current) || n || d === 0 || (clearTimeout(T.current), b.current === "touch" ? O() : T.current = window.setTimeout(O, d));
      }
    };
  }, [a, r, n, h, d]), C = w.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(y.current);
    },
    onMouseLeave(S) {
      N(S.nativeEvent, !1);
    }
  }), [N]);
  return w.useMemo(() => s ? {
    reference: A,
    floating: C
  } : {}, [s, A, C]);
}
function Ct(e, t) {
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
const Cl = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Fl = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, Mn = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Gs(e, t) {
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
    outsidePressEvent: f = "pointerdown",
    referencePress: a = !1,
    referencePressEvent: d = "pointerdown",
    ancestorScroll: m = !1,
    bubbles: c,
    capture: p
  } = t, v = sn(), g = he(typeof u == "function" ? u : () => !1), h = typeof u == "function" ? g : u, b = w.useRef(!1), y = w.useRef(!1), {
    escapeKey: E,
    outsidePress: T
  } = Mn(c), {
    escapeKey: M,
    outsidePress: B
  } = Mn(p), L = he((C) => {
    var S;
    if (!n || !l || !s || C.key !== "Escape")
      return;
    const $ = (S = i.current.floatingContext) == null ? void 0 : S.nodeId, R = v ? Ct(v.nodesRef.current, $) : [];
    if (!E && (C.stopPropagation(), R.length > 0)) {
      let O = !0;
      if (R.forEach((x) => {
        var P;
        if ((P = x.context) != null && P.open && !x.context.dataRef.current.__escapeKeyBubbles) {
          O = !1;
          return;
        }
      }), !O)
        return;
    }
    r(!1, Fi(C) ? C.nativeEvent : C, "escape-key");
  }), H = he((C) => {
    var S;
    const $ = () => {
      var R;
      L(C), (R = _e(C)) == null || R.removeEventListener("keydown", $);
    };
    (S = _e(C)) == null || S.addEventListener("keydown", $);
  }), N = he((C) => {
    var S;
    const $ = b.current;
    b.current = !1;
    const R = y.current;
    if (y.current = !1, f === "click" && R || $ || typeof h == "function" && !h(C))
      return;
    const O = _e(C), x = "[" + un("inert") + "]", P = Ae(o.floating).querySelectorAll(x);
    let D = j(O) ? O : null;
    for (; D && !Se(D); ) {
      const G = be(D);
      if (Se(G) || !j(G))
        break;
      D = G;
    }
    if (P.length && j(O) && !Mi(O) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !qe(O, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(P).every((G) => !qe(D, G)))
      return;
    if (ue(O) && A) {
      const G = O.clientWidth > 0 && O.scrollWidth > O.clientWidth, te = O.clientHeight > 0 && O.scrollHeight > O.clientHeight;
      let Ce = te && C.offsetX > O.clientWidth;
      if (te && fe(O).direction === "rtl" && (Ce = C.offsetX <= O.offsetWidth - O.clientWidth), Ce || G && C.offsetY > O.clientHeight)
        return;
    }
    const le = (S = i.current.floatingContext) == null ? void 0 : S.nodeId, J = v && Ct(v.nodesRef.current, le).some((G) => {
      var te;
      return Tt(C, (te = G.context) == null ? void 0 : te.elements.floating);
    });
    if (Tt(C, o.floating) || Tt(C, o.domReference) || J)
      return;
    const Ee = v ? Ct(v.nodesRef.current, le) : [];
    if (Ee.length > 0) {
      let G = !0;
      if (Ee.forEach((te) => {
        var Ce;
        if ((Ce = te.context) != null && Ce.open && !te.context.dataRef.current.__outsidePressBubbles) {
          G = !1;
          return;
        }
      }), !G)
        return;
    }
    r(!1, C, "outside-press");
  }), F = he((C) => {
    var S;
    const $ = () => {
      var R;
      N(C), (R = _e(C)) == null || R.removeEventListener(f, $);
    };
    (S = _e(C)) == null || S.addEventListener(f, $);
  });
  w.useEffect(() => {
    if (!n || !l)
      return;
    i.current.__escapeKeyBubbles = E, i.current.__outsidePressBubbles = T;
    function C(R) {
      r(!1, R, "ancestor-scroll");
    }
    const S = Ae(o.floating);
    s && S.addEventListener("keydown", M ? H : L, M), h && S.addEventListener(f, B ? F : N, B);
    let $ = [];
    return m && (j(o.domReference) && ($ = Te(o.domReference)), j(o.floating) && ($ = $.concat(Te(o.floating))), !j(o.reference) && o.reference && o.reference.contextElement && ($ = $.concat(Te(o.reference.contextElement)))), $ = $.filter((R) => {
      var O;
      return R !== ((O = S.defaultView) == null ? void 0 : O.visualViewport);
    }), $.forEach((R) => {
      R.addEventListener("scroll", C, {
        passive: !0
      });
    }), () => {
      s && S.removeEventListener("keydown", M ? H : L, M), h && S.removeEventListener(f, B ? F : N, B), $.forEach((R) => {
        R.removeEventListener("scroll", C);
      });
    };
  }, [i, o, s, h, f, n, r, m, l, E, T, L, M, H, N, B, F]), w.useEffect(() => {
    b.current = !1;
  }, [h, f]);
  const _ = w.useMemo(() => ({
    onKeyDown: L,
    [Cl[d]]: (C) => {
      a && r(!1, C.nativeEvent, "reference-press");
    }
  }), [L, r, a, d]), A = w.useMemo(() => ({
    onKeyDown: L,
    onMouseDown() {
      y.current = !0;
    },
    onMouseUp() {
      y.current = !0;
    },
    [Fl[f]]: () => {
      b.current = !0;
    }
  }), [L, f]);
  return w.useMemo(() => l ? {
    reference: _,
    floating: A
  } : {}, [l, _, A]);
}
function Ml(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Lr(), i = w.useRef({}), [l] = w.useState(() => Ol()), s = ln() != null;
  if (process.env.NODE_ENV !== "production") {
    const c = r.reference;
    c && !j(c) && Sl("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [u, f] = w.useState(r.reference), a = he((c, p, v) => {
    i.current.openEvent = c ? p : void 0, l.emit("openchange", {
      open: c,
      event: p,
      reason: v,
      nested: s
    }), n == null || n(c, p, v);
  }), d = w.useMemo(() => ({
    setPositionReference: f
  }), []), m = w.useMemo(() => ({
    reference: u || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [u, r.reference, r.floating]);
  return w.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: a,
    elements: m,
    events: l,
    floatingId: o,
    refs: d
  }), [t, a, m, l, o, d]);
}
function Al(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Ml({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, l] = w.useState(null), [s, u] = w.useState(null), a = (o == null ? void 0 : o.reference) || i, d = w.useRef(null), m = sn();
  We(() => {
    a && (d.current = a);
  }, [a]);
  const c = gl({
    ...e,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), p = w.useCallback((y) => {
    const E = j(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    u(E), c.refs.setReference(E);
  }, [c.refs]), v = w.useCallback((y) => {
    (j(y) || y === null) && (d.current = y, l(y)), (j(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !j(y)) && c.refs.setReference(y);
  }, [c.refs]), g = w.useMemo(() => ({
    ...c.refs,
    setReference: v,
    setPositionReference: p,
    domReference: d
  }), [c.refs, v, p]), h = w.useMemo(() => ({
    ...c.elements,
    domReference: a
  }), [c.elements, a]), b = w.useMemo(() => ({
    ...c,
    ...r,
    refs: g,
    elements: h,
    nodeId: t
  }), [c, g, h, t, r]);
  return We(() => {
    r.dataRef.current.floatingContext = b;
    const y = m == null ? void 0 : m.nodesRef.current.find((E) => E.id === t);
    y && (y.context = b);
  }), w.useMemo(() => ({
    ...c,
    context: b,
    refs: g,
    elements: h
  }), [c, g, h, b]);
}
function qs(e, t) {
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
  } = t, f = w.useRef(!1), a = w.useRef(), d = w.useRef(!0);
  w.useEffect(() => {
    if (!s) return;
    const c = oe(l.domReference);
    function p() {
      !n && ue(l.domReference) && l.domReference === En(Ae(l.domReference)) && (f.current = !0);
    }
    function v() {
      d.current = !0;
    }
    return c.addEventListener("blur", p), c.addEventListener("keydown", v, !0), () => {
      c.removeEventListener("blur", p), c.removeEventListener("keydown", v, !0);
    };
  }, [l.domReference, n, s]), w.useEffect(() => {
    if (!s) return;
    function c(p) {
      let {
        reason: v
      } = p;
      (v === "reference-press" || v === "escape-key") && (f.current = !0);
    }
    return o.on("openchange", c), () => {
      o.off("openchange", c);
    };
  }, [o, s]), w.useEffect(() => () => {
    clearTimeout(a.current);
  }, []);
  const m = w.useMemo(() => ({
    onPointerDown(c) {
      Oi(c.nativeEvent) || (d.current = !1);
    },
    onMouseLeave() {
      f.current = !1;
    },
    onFocus(c) {
      if (f.current) return;
      const p = _e(c.nativeEvent);
      if (u && j(p))
        try {
          if (Pi() && Li()) throw Error();
          if (!p.matches(":focus-visible")) return;
        } catch {
          if (!d.current && !Di(p))
            return;
        }
      r(!0, c.nativeEvent, "focus");
    },
    onBlur(c) {
      f.current = !1;
      const p = c.relatedTarget, v = c.nativeEvent, g = j(p) && p.hasAttribute(un("focus-guard")) && p.getAttribute("data-type") === "outside";
      a.current = window.setTimeout(() => {
        var h;
        const b = En(l.domReference ? l.domReference.ownerDocument : document);
        !p && b === l.domReference || qe((h = i.current.floatingContext) == null ? void 0 : h.refs.floating.current, b) || qe(l.domReference, b) || g || r(!1, v, "focus");
      });
    }
  }), [i, l.domReference, r, u]);
  return w.useMemo(() => s ? {
    reference: m
  } : {}, [s, m]);
}
const An = "active", Dn = "selected";
function Ft(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [An]: l,
      [Dn]: s,
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
      let [f, a] = u;
      if (!(o && [An, Dn].includes(f)))
        if (f.indexOf("on") === 0) {
          if (r.has(f) || r.set(f, []), typeof a == "function") {
            var d;
            (d = r.get(f)) == null || d.push(a), l[f] = function() {
              for (var m, c = arguments.length, p = new Array(c), v = 0; v < c; v++)
                p[v] = arguments[v];
              return (m = r.get(f)) == null ? void 0 : m.map((g) => g(...p)).find((g) => g !== void 0);
            };
          }
        } else
          l[f] = a;
    }), l), {})
  };
}
function Dl(e) {
  e === void 0 && (e = []);
  const t = e.map((s) => s == null ? void 0 : s.reference), n = e.map((s) => s == null ? void 0 : s.floating), r = e.map((s) => s == null ? void 0 : s.item), o = w.useCallback(
    (s) => Ft(s, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = w.useCallback(
    (s) => Ft(s, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), l = w.useCallback(
    (s) => Ft(s, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return w.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: l
  }), [o, i, l]);
}
const Il = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function zs(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: r,
    floatingId: o
  } = e, {
    enabled: i = !0,
    role: l = "dialog"
  } = t, s = (n = Il.get(l)) != null ? n : l, u = Lr(), a = ln() != null, d = w.useMemo(() => s === "tooltip" || l === "label" ? {
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
    ...s === "menu" && a && {
      role: "menuitem"
    },
    ...l === "select" && {
      "aria-autocomplete": "none"
    },
    ...l === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [s, o, a, r, u, l]), m = w.useMemo(() => {
    const p = {
      id: o,
      ...s && {
        role: s
      }
    };
    return s === "tooltip" || l === "label" ? p : {
      ...p,
      ...s === "menu" && {
        "aria-labelledby": u
      }
    };
  }, [s, o, u, l]), c = w.useCallback((p) => {
    let {
      active: v,
      selected: g
    } = p;
    const h = {
      role: "option",
      ...v && {
        id: o + "-option"
      }
    };
    switch (l) {
      case "select":
        return {
          ...h,
          "aria-selected": v && g
        };
      case "combobox":
        return {
          ...h,
          ...v && {
            "aria-selected": !0
          }
        };
    }
    return {};
  }, [o, l]);
  return w.useMemo(() => i ? {
    reference: d,
    floating: m,
    item: c
  } : {}, [i, d, m, c]);
}
function In(e, t) {
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
const kl = (e) => ({
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
      scrollRef: f,
      ...a
    } = Ue(e, t), {
      rects: d,
      elements: {
        floating: m
      }
    } = t, c = n.current[l];
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || Tl('`placement` side must be "bottom" when using the `inner`', "middleware.")), !c)
      return {};
    const p = {
      ...t,
      ...await Or(-c.offsetTop - m.clientTop - d.reference.height / 2 - c.offsetHeight / 2 - i).fn(t)
    }, v = (f == null ? void 0 : f.current) || m, g = await Ot(In(p, v.scrollHeight), a), h = await Ot(p, {
      ...a,
      elementContext: "reference"
    }), b = Math.max(0, g.top), y = p.y + b, E = Math.max(0, v.scrollHeight - b - Math.max(0, g.bottom));
    return v.style.maxHeight = E + "px", v.scrollTop = b, o && (v.offsetHeight < c.offsetHeight * Math.min(s, n.current.length - 1) - 1 || h.top >= -u || h.bottom >= -u ? re.flushSync(() => o(!0)) : re.flushSync(() => o(!1))), r && (r.current = await Ot(In({
      ...p,
      y
    }, v.offsetHeight), a)), {
      y
    };
  }
});
function Hl(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: o = !0,
    overflowRef: i,
    scrollRef: l,
    onChange: s
  } = t, u = he(s), f = w.useRef(!1), a = w.useRef(null), d = w.useRef(null);
  w.useEffect(() => {
    if (!o) return;
    function c(v) {
      if (v.ctrlKey || !p || i.current == null)
        return;
      const g = v.deltaY, h = i.current.top >= -0.5, b = i.current.bottom >= -0.5, y = p.scrollHeight - p.clientHeight, E = g < 0 ? -1 : 1, T = g < 0 ? "max" : "min";
      p.scrollHeight <= p.clientHeight || (!h && g > 0 || !b && g < 0 ? (v.preventDefault(), re.flushSync(() => {
        u((M) => M + Math[T](g, y * E));
      })) : /firefox/i.test(rn()) && (p.scrollTop += g));
    }
    const p = (l == null ? void 0 : l.current) || r.floating;
    if (n && p)
      return p.addEventListener("wheel", c), requestAnimationFrame(() => {
        a.current = p.scrollTop, i.current != null && (d.current = {
          ...i.current
        });
      }), () => {
        a.current = null, d.current = null, p.removeEventListener("wheel", c);
      };
  }, [o, n, r.floating, i, l, u]);
  const m = w.useMemo(() => ({
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
      const c = (l == null ? void 0 : l.current) || r.floating;
      if (!(!i.current || !c || !f.current)) {
        if (a.current !== null) {
          const p = c.scrollTop - a.current;
          (i.current.bottom < -0.5 && p < -1 || i.current.top < -0.5 && p > 1) && re.flushSync(() => u((v) => v + p));
        }
        requestAnimationFrame(() => {
          a.current = c.scrollTop;
        });
      }
    }
  }), [r.floating, u, i, l]);
  return w.useMemo(() => o ? {
    floating: m
  } : {}, [o, m]);
}
let Ke = ne({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Ke.displayName = "FloatingContext";
let an = ne(null);
an.displayName = "PlacementContext";
function Nl(e) {
  return K(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function _l() {
  return Y(Ke).setReference;
}
function Bl() {
  return Y(Ke).getReferenceProps;
}
function Wl() {
  let { getFloatingProps: e, slot: t } = Y(Ke);
  return Q((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function Vl(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = Y(an), n = K(() => e, [JSON.stringify(e, typeof HTMLElement < "u" ? (o, i) => i instanceof HTMLElement ? i.outerHTML : i : void 0)]);
  V(() => {
    t == null || t(n ?? null);
  }, [t, n]);
  let r = Y(Ke);
  return K(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let kn = 4;
function jl({ children: e, enabled: t = !0 }) {
  let [n, r] = U(null), [o, i] = U(0), l = k(null), [s, u] = U(null);
  Ul(s);
  let f = t && n !== null && s !== null, { to: a = "bottom", gap: d = 0, offset: m = 0, padding: c = 0, inner: p } = Kl(n, s), [v, g = "center"] = a.split(" ");
  V(() => {
    f && i(0);
  }, [f]);
  let { refs: h, floatingStyles: b, context: y } = Al({ open: f, placement: v === "selection" ? g === "center" ? "bottom" : `bottom-${g}` : g === "center" ? `${v}` : `${v}-${g}`, strategy: "absolute", transform: !1, middleware: [Or({ mainAxis: v === "selection" ? 0 : d, crossAxis: m }), hl({ padding: c }), v !== "selection" && bl({ padding: c }), v === "selection" && p ? kl({ ...p, padding: c, overflowRef: l, offset: o, minItemsVisible: kn, referenceOverflowThreshold: c, onFallbackChange(F) {
    var _, A;
    if (!F) return;
    let C = y.elements.floating;
    if (!C) return;
    let S = parseFloat(getComputedStyle(C).scrollPaddingBottom) || 0, $ = Math.min(kn, C.childElementCount), R = 0, O = 0;
    for (let x of (A = (_ = y.elements.floating) == null ? void 0 : _.childNodes) != null ? A : []) if (x instanceof HTMLElement) {
      let P = x.offsetTop, D = P + x.clientHeight + S, le = C.scrollTop, J = le + C.clientHeight;
      if (P >= le && D <= J) $--;
      else {
        O = Math.max(0, Math.min(D, J) - Math.max(P, le)), R = x.clientHeight;
        break;
      }
    }
    $ >= 1 && i((x) => {
      let P = R * $ - O + S;
      return x >= P ? x : P;
    });
  } }) : null, yl({ padding: c, apply({ availableWidth: F, availableHeight: _, elements: A }) {
    Object.assign(A.floating.style, { overflow: "auto", maxWidth: `${F}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${_}px)` });
  } })].filter(Boolean), whileElementsMounted: cl }), [E = v, T = g] = y.placement.split("-");
  v === "selection" && (E = "selection");
  let M = K(() => ({ anchor: [E, T].filter(Boolean).join(" ") }), [E, T]), B = Hl(y, { overflowRef: l, onChange: i }), { getReferenceProps: L, getFloatingProps: H } = Dl([B]), N = I((F) => {
    u(F), h.setFloating(F);
  });
  return w.createElement(an.Provider, { value: r }, w.createElement(Ke.Provider, { value: { setFloating: N, setReference: h.setReference, styles: b, getReferenceProps: L, getFloatingProps: H, slot: M } }, e));
}
function Ul(e) {
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
function Kl(e, t) {
  var n, r, o;
  let i = Mt((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), l = Mt((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), s = Mt((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: l, padding: s };
}
function Mt(e, t, n = void 0) {
  let r = Ne(), o = I((u, f) => {
    if (u == null) return [n, null];
    if (typeof u == "number") return [u, null];
    if (typeof u == "string") {
      if (!f) return [n, null];
      let a = Hn(u, f);
      return [a, (d) => {
        let m = Cr(u);
        {
          let c = m.map((p) => window.getComputedStyle(f).getPropertyValue(p));
          r.requestAnimationFrame(function p() {
            r.nextFrame(p);
            let v = !1;
            for (let [h, b] of m.entries()) {
              let y = window.getComputedStyle(f).getPropertyValue(b);
              if (c[h] !== y) {
                c[h] = y, v = !0;
                break;
              }
            }
            if (!v) return;
            let g = Hn(u, f);
            a !== g && (d(g), a = g);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = K(() => o(e, t)[0], [e, t]), [l = i, s] = U();
  return V(() => {
    let [u, f] = o(e, t);
    if (s(u), !!f) return f(s);
  }, [e, t]), l;
}
function Cr(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), o = t[1].slice(n + 1).trim();
    return o ? [r, ...Cr(o)] : [r];
  }
  return [];
}
function Hn(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function Yl(e, t) {
  let [n, r] = U(t);
  return !e && n !== t && r(t), e ? n : t;
}
let cn = ne(null);
cn.displayName = "OpenClosedContext";
var pe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(pe || {});
function fn() {
  return Y(cn);
}
function Fr({ value: e, children: t }) {
  return W.createElement(cn.Provider, { value: e }, t);
}
function Xl(e) {
  throw new Error("Unexpected object: " + e);
}
var q = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(q || {});
function At(e, t) {
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
      Xl(e);
  }
}
function Gl(e) {
  let t = I(e), n = k(!1);
  Z(() => (n.current = !1, () => {
    n.current = !0, Gn(() => {
      n.current && t();
    });
  }), [t]);
}
function ql() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in w ? ((t) => t.useSyncExternalStore)(w)(() => () => {
  }, () => !1, () => !e) : !1;
}
function dn() {
  let e = ql(), [t, n] = w.useState(De.isHandoffComplete);
  return t && De.isHandoffComplete === !1 && n(!1), w.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), w.useEffect(() => De.handoff(), []), e ? !1 : t;
}
let zl = ne(!1);
function Ql() {
  return Y(zl);
}
function Zl(e) {
  let t = Ql(), n = Y(Ar), r = en(e), [o, i] = U(() => {
    var l;
    if (!t && n !== null) return (l = n.current) != null ? l : null;
    if (De.isServer) return null;
    let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (s) return s;
    if (r === null) return null;
    let u = r.createElement("div");
    return u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u);
  });
  return Z(() => {
    o !== null && (r != null && r.body.contains(o) || r == null || r.body.appendChild(o));
  }, [o, r]), Z(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), o;
}
let Mr = me, Jl = ie(function(e, t) {
  let n = e, r = k(null), o = de(Io((a) => {
    r.current = a;
  }), t), i = en(r), l = Zl(r), [s] = U(() => {
    var a;
    return De.isServer ? null : (a = i == null ? void 0 : i.createElement("div")) != null ? a : null;
  }), u = Y(rs), f = dn();
  return V(() => {
    !l || !s || l.contains(s) || (s.setAttribute("data-headlessui-portal", ""), l.appendChild(s));
  }, [l, s]), V(() => {
    if (s && u) return u.register(s);
  }, [u, s]), Gl(() => {
    var a;
    !l || !s || (s instanceof Node && l.contains(s) && l.removeChild(s), l.childNodes.length <= 0 && ((a = l.parentElement) == null || a.removeChild(l)));
  }), f ? !l || !s ? null : re.createPortal(ae({ ourProps: { ref: o }, theirProps: n, slot: {}, defaultTag: Mr, name: "Portal" }), s) : null;
});
function es(e, t) {
  let n = de(t), { enabled: r = !0, ...o } = e;
  return r ? W.createElement(Jl, { ...o, ref: n }) : ae({ ourProps: { ref: n }, theirProps: o, slot: {}, defaultTag: Mr, name: "Portal" });
}
let ts = me, Ar = ne(null);
function ns(e, t) {
  let { target: n, ...r } = e, o = { ref: de(t) };
  return W.createElement(Ar.Provider, { value: n }, ae({ ourProps: o, theirProps: r, defaultTag: ts, name: "Popover.Group" }));
}
let rs = ne(null), os = ie(es), is = ie(ns), ls = Object.assign(os, { Group: is });
function ss() {
  let e = k(!1);
  return V(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Dr(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : kr) !== me || W.Children.count(e.children) === 1;
}
let ht = ne(null);
ht.displayName = "TransitionContext";
var us = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(us || {});
function as() {
  let e = Y(ht);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function cs() {
  let e = Y(bt);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let bt = ne(null);
bt.displayName = "NestingContext";
function yt(e) {
  return "children" in e ? yt(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Ir(e, t) {
  let n = Le(e), r = k([]), o = ss(), i = Ne(), l = I((c, p = Re.Hidden) => {
    let v = r.current.findIndex(({ el: g }) => g === c);
    v !== -1 && (ve(p, { [Re.Unmount]() {
      r.current.splice(v, 1);
    }, [Re.Hidden]() {
      r.current[v].state = "hidden";
    } }), i.microTask(() => {
      var g;
      !yt(r) && o.current && ((g = n.current) == null || g.call(n));
    }));
  }), s = I((c) => {
    let p = r.current.find(({ el: v }) => v === c);
    return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({ el: c, state: "visible" }), () => l(c, Re.Unmount);
  }), u = k([]), f = k(Promise.resolve()), a = k({ enter: [], leave: [] }), d = I((c, p, v) => {
    u.current.splice(0), t && (t.chains.current[p] = t.chains.current[p].filter(([g]) => g !== c)), t == null || t.chains.current[p].push([c, new Promise((g) => {
      u.current.push(g);
    })]), t == null || t.chains.current[p].push([c, new Promise((g) => {
      Promise.all(a.current[p].map(([h, b]) => b)).then(() => g());
    })]), p === "enter" ? f.current = f.current.then(() => t == null ? void 0 : t.wait.current).then(() => v(p)) : v(p);
  }), m = I((c, p, v) => {
    Promise.all(a.current[p].splice(0).map(([g, h]) => h)).then(() => {
      var g;
      (g = u.current.shift()) == null || g();
    }).then(() => v(p));
  });
  return K(() => ({ children: r, register: s, unregister: l, onStart: d, onStop: m, wait: f, chains: a }), [s, l, r, d, m, a, f]);
}
let kr = me, Hr = ut.RenderStrategy;
function fs(e, t) {
  var n, r;
  let { transition: o = !0, beforeEnter: i, afterEnter: l, beforeLeave: s, afterLeave: u, enter: f, enterFrom: a, enterTo: d, entered: m, leave: c, leaveFrom: p, leaveTo: v, ...g } = e, h = k(null), b = Dr(e), y = de(...b ? [h, t] : t === null ? [] : [t]), E = (n = g.unmount) == null || n ? Re.Unmount : Re.Hidden, { show: T, appear: M, initial: B } = as(), [L, H] = U(T ? "visible" : "hidden"), N = cs(), { register: F, unregister: _ } = N;
  V(() => F(h), [F, h]), V(() => {
    if (E === Re.Hidden && h.current) {
      if (T && L !== "visible") {
        H("visible");
        return;
      }
      return ve(L, { hidden: () => _(h), visible: () => F(h) });
    }
  }, [L, h, F, _, T, E]);
  let A = dn();
  V(() => {
    if (b && A && L === "visible" && h.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [h, L, A, b]);
  let C = B && !M, S = M && T && B, $ = k(!1), R = Ir(() => {
    $.current || (H("hidden"), _(h));
  }, N), O = I((Ee) => {
    $.current = !0;
    let G = Ee ? "enter" : "leave";
    R.onStart(h, G, (te) => {
      te === "enter" ? i == null || i() : te === "leave" && (s == null || s());
    });
  }), x = I((Ee) => {
    let G = Ee ? "enter" : "leave";
    $.current = !1, R.onStop(h, G, (te) => {
      te === "enter" ? l == null || l() : te === "leave" && (u == null || u());
    }), G === "leave" && !yt(R) && (H("hidden"), _(h));
  });
  Z(() => {
    b && o || (O(T), x(T));
  }, [T, b, o]);
  let P = !(!o || !b || !A || C), [, D] = mr(P, h, T, { start: O, end: x }), le = xe({ ref: y, className: ((r = _t(g.className, S && f, S && a, D.enter && f, D.enter && D.closed && a, D.enter && !D.closed && d, D.leave && c, D.leave && !D.closed && p, D.leave && D.closed && v, !D.transition && T && m)) == null ? void 0 : r.trim()) || void 0, ...pr(D) }), J = 0;
  return L === "visible" && (J |= pe.Open), L === "hidden" && (J |= pe.Closed), D.enter && (J |= pe.Opening), D.leave && (J |= pe.Closing), W.createElement(bt.Provider, { value: R }, W.createElement(Fr, { value: J }, ae({ ourProps: le, theirProps: g, defaultTag: kr, features: Hr, visible: L === "visible", name: "Transition.Child" })));
}
function ds(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e, l = k(null), s = Dr(e), u = de(...s ? [l, t] : t === null ? [] : [t]);
  dn();
  let f = fn();
  if (n === void 0 && f !== null && (n = (f & pe.Open) === pe.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [a, d] = U(n ? "visible" : "hidden"), m = Ir(() => {
    n || d("hidden");
  }), [c, p] = U(!0), v = k([n]);
  V(() => {
    c !== !1 && v.current[v.current.length - 1] !== n && (v.current.push(n), p(!1));
  }, [v, n]);
  let g = K(() => ({ show: n, appear: r, initial: c }), [n, r, c]);
  ur(n, l, () => d("hidden")), V(() => {
    n ? d("visible") : !yt(m) && l.current !== null && d("hidden");
  }, [n, m]);
  let h = { unmount: o }, b = I(() => {
    var E;
    c && p(!1), (E = e.beforeEnter) == null || E.call(e);
  }), y = I(() => {
    var E;
    c && p(!1), (E = e.beforeLeave) == null || E.call(e);
  });
  return W.createElement(bt.Provider, { value: m }, W.createElement(ht.Provider, { value: g }, ae({ ourProps: { ...h, as: me, children: W.createElement(Nr, { ref: u, ...h, ...i, beforeEnter: b, beforeLeave: y }) }, theirProps: {}, defaultTag: me, features: Hr, visible: a === "visible", name: "Transition" })));
}
function ps(e, t) {
  let n = Y(ht) !== null, r = fn() !== null;
  return W.createElement(W.Fragment, null, !n && r ? W.createElement(Yt, { ref: t, ...e }) : W.createElement(Nr, { ref: t, ...e }));
}
let Yt = ie(ds), Nr = ie(fs), ms = ie(ps), Qs = Object.assign(Yt, { Child: ms, Root: Yt });
function vs(e, t) {
  let [n, r] = U(e), o = Le(e);
  return V(() => r(o.current), [o, r, ...t]), n;
}
function gs(e, t) {
  let n = k({ left: 0, top: 0 });
  if (V(() => {
    let o = t.current;
    if (!o) return;
    let i = o.getBoundingClientRect();
    i && (n.current = i);
  }, [e]), t.current == null || !e || t.current === document.activeElement) return !1;
  let r = t.current.getBoundingClientRect();
  return r.top !== n.current.top || r.left !== n.current.left;
}
let Nn = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function _n(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement)) return r;
  let i = !1;
  for (let s of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) s.remove(), i = !0;
  let l = i ? (n = o.innerText) != null ? n : "" : r;
  return Nn.test(l) && (l = l.replace(Nn, "")), l;
}
function hs(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((o) => {
      let i = document.getElementById(o);
      if (i) {
        let l = i.getAttribute("aria-label");
        return typeof l == "string" ? l.trim() : _n(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return _n(e).trim();
}
function bs(e) {
  let t = k(""), n = k("");
  return I(() => {
    let r = e.current;
    if (!r) return "";
    let o = r.innerText;
    if (t.current === o) return n.current;
    let i = hs(r).trim().toLowerCase();
    return t.current = o, n.current = i, i;
  });
}
var ys = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ys || {}), ws = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(ws || {}), Es = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Es || {}), xs = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e))(xs || {});
function Dt(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = fr(t(e.options.slice()), (i) => i.dataRef.current.domRef.current), o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { options: r, activeOptionIndex: o };
}
let Rs = { 1(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1, __demoMode: !1 };
}, 0(e) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let t = e.activeOptionIndex, { isSelected: n } = e.dataRef.current, r = e.options.findIndex((o) => n(o.dataRef.current.value));
  return r !== -1 && (t = r), { ...e, listboxState: 0, activeOptionIndex: t, __demoMode: !1 };
}, 2(e, t) {
  var n, r, o, i, l;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let s = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === q.Nothing) return { ...s, activeOptionIndex: null };
  if (t.focus === q.Specific) return { ...s, activeOptionIndex: e.options.findIndex((a) => a.id === t.id) };
  if (t.focus === q.Previous) {
    let a = e.activeOptionIndex;
    if (a !== null) {
      let d = e.options[a].dataRef.current.domRef, m = At(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
      if (m !== null) {
        let c = e.options[m].dataRef.current.domRef;
        if (((r = d.current) == null ? void 0 : r.previousElementSibling) === c.current || ((o = c.current) == null ? void 0 : o.previousElementSibling) === null) return { ...s, activeOptionIndex: m };
      }
    }
  } else if (t.focus === q.Next) {
    let a = e.activeOptionIndex;
    if (a !== null) {
      let d = e.options[a].dataRef.current.domRef, m = At(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
      if (m !== null) {
        let c = e.options[m].dataRef.current.domRef;
        if (((i = d.current) == null ? void 0 : i.nextElementSibling) === c.current || ((l = c.current) == null ? void 0 : l.nextElementSibling) === null) return { ...s, activeOptionIndex: m };
      }
    }
  }
  let u = Dt(e), f = At(t, { resolveItems: () => u.options, resolveActiveIndex: () => u.activeOptionIndex, resolveId: (a) => a.id, resolveDisabled: (a) => a.dataRef.current.disabled });
  return { ...s, ...u, activeOptionIndex: f };
}, 3: (e, t) => {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), o = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((l) => {
    var s;
    return !l.dataRef.current.disabled && ((s = l.dataRef.current.textValue) == null ? void 0 : s.startsWith(r));
  }), i = o ? e.options.indexOf(o) : -1;
  return i === -1 || i === e.activeOptionIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeOptionIndex: i, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5: (e, t) => {
  let n = { id: t.id, dataRef: t.dataRef }, r = Dt(e, (o) => [...o, n]);
  return e.activeOptionIndex === null && e.dataRef.current.isSelected(t.dataRef.current.value) && (r.activeOptionIndex = r.options.indexOf(n)), { ...e, ...r };
}, 6: (e, t) => {
  let n = Dt(e, (r) => {
    let o = r.findIndex((i) => i.id === t.id);
    return o !== -1 && r.splice(o, 1), r;
  });
  return { ...e, ...n, activationTrigger: 1 };
} }, pn = ne(null);
pn.displayName = "ListboxActionsContext";
function wt(e) {
  let t = Y(pn);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, wt), n;
  }
  return t;
}
let Et = ne(null);
Et.displayName = "ListboxDataContext";
function nt(e) {
  let t = Y(Et);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nt), n;
  }
  return t;
}
function $s(e, t) {
  return ve(t.type, Rs, e, t);
}
let Ts = me;
function Ss(e, t) {
  var n;
  let r = qt(), { value: o, defaultValue: i, form: l, name: s, onChange: u, by: f, invalid: a = !1, disabled: d = r || !1, horizontal: m = !1, multiple: c = !1, __demoMode: p = !1, ...v } = e;
  const g = m ? "horizontal" : "vertical";
  let h = de(t), b = $o(i), [y = c ? [] : void 0, E] = Ro(o, u, b), [T, M] = Bn($s, { dataRef: Gr(), listboxState: p ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: !1, __demoMode: p }), B = k({ static: !1, hold: !1 }), L = k(null), H = k(null), N = k(/* @__PURE__ */ new Map()), F = Yo(f), _ = Q((X) => ve(A.mode, { 1: () => y.some((ee) => F(ee, X)), 0: () => F(y, X) }), [y]), A = K(() => ({ ...T, value: y, disabled: d, invalid: a, mode: c ? 1 : 0, orientation: g, compare: F, isSelected: _, optionsPropsRef: B, buttonRef: L, optionsRef: H, listRef: N }), [y, d, a, c, T, N]);
  V(() => {
    T.dataRef.current = A;
  }, [A]);
  let C = A.listboxState === 0;
  ci(C, [A.buttonRef, A.optionsRef], (X, ee) => {
    var ge;
    M({ type: 1 }), cr(ee, Jt.Loose) || (X.preventDefault(), (ge = A.buttonRef.current) == null || ge.focus());
  });
  let S = K(() => ({ open: A.listboxState === 0, disabled: d, invalid: a, value: y }), [A, d, y, a]), $ = I((X) => {
    let ee = A.options.find((ge) => ge.id === X);
    ee && J(ee.dataRef.current.value);
  }), R = I(() => {
    if (A.activeOptionIndex !== null) {
      let { dataRef: X, id: ee } = A.options[A.activeOptionIndex];
      J(X.current.value), M({ type: 2, focus: q.Specific, id: ee });
    }
  }), O = I(() => M({ type: 0 })), x = I(() => M({ type: 1 })), P = Ne(), D = I((X, ee, ge) => {
    P.dispose(), P.microTask(() => X === q.Specific ? M({ type: 2, focus: q.Specific, id: ee, trigger: ge }) : M({ type: 2, focus: X, trigger: ge }));
  }), le = I((X, ee) => (M({ type: 5, id: X, dataRef: ee }), () => M({ type: 6, id: X }))), J = I((X) => ve(A.mode, { 0() {
    return E == null ? void 0 : E(X);
  }, 1() {
    let ee = A.value.slice(), ge = ee.findIndex((Vr) => F(Vr, X));
    return ge === -1 ? ee.push(X) : ee.splice(ge, 1), E == null ? void 0 : E(ee);
  } })), Ee = I((X) => M({ type: 3, value: X })), G = I(() => M({ type: 4 })), te = K(() => ({ onChange: J, registerOption: le, goToOption: D, closeListbox: x, openListbox: O, selectActiveOption: R, selectOption: $, search: Ee, clearSearch: G }), []), [Ce, mn] = Bo({ inherit: !0 }), Br = { ref: h }, Wr = Q(() => {
    if (b !== void 0) return E == null ? void 0 : E(b);
  }, [E, b]);
  return W.createElement(mn, { value: Ce, props: { htmlFor: (n = A.buttonRef.current) == null ? void 0 : n.id }, slot: { open: A.listboxState === 0, disabled: d } }, W.createElement(jl, null, W.createElement(pn.Provider, { value: te }, W.createElement(Et.Provider, { value: A }, W.createElement(Fr, { value: ve(A.listboxState, { 0: pe.Open, 1: pe.Closed }) }, s != null && y != null && W.createElement(Co, { disabled: d, data: { [s]: y }, form: l, onReset: Wr }), ae({ ourProps: Br, theirProps: v, slot: S, defaultTag: Ts, name: "Listbox" }))))));
}
let Os = "button";
function Ps(e, t) {
  var n;
  let r = nt("Listbox.Button"), o = wt("Listbox.Button"), i = Ve(), l = tr(), { id: s = l || `headlessui-listbox-button-${i}`, disabled: u = r.disabled || !1, autoFocus: f = !1, ...a } = e, d = de(r.buttonRef, t, _l()), m = Bl(), c = I((F) => {
    switch (F.key) {
      case z.Enter:
        To(F.currentTarget);
        break;
      case z.Space:
      case z.ArrowDown:
        F.preventDefault(), re.flushSync(() => o.openListbox()), r.value || o.goToOption(q.First);
        break;
      case z.ArrowUp:
        F.preventDefault(), re.flushSync(() => o.openListbox()), r.value || o.goToOption(q.Last);
        break;
    }
  }), p = I((F) => {
    switch (F.key) {
      case z.Space:
        F.preventDefault();
        break;
    }
  }), v = I((F) => {
    var _;
    if (Ao(F.currentTarget)) return F.preventDefault();
    r.listboxState === 0 ? (re.flushSync(() => o.closeListbox()), (_ = r.buttonRef.current) == null || _.focus({ preventScroll: !0 })) : (F.preventDefault(), o.openListbox());
  }), g = I((F) => F.preventDefault()), h = ir([s]), b = ko(), { isFocusVisible: y, focusProps: E } = mo({ autoFocus: f }), { isHovered: T, hoverProps: M } = po({ isDisabled: u }), { pressed: B, pressProps: L } = wo({ disabled: u }), H = K(() => ({ open: r.listboxState === 0, active: B || r.listboxState === 0, disabled: u, invalid: r.invalid, value: r.value, hover: T, focus: y, autofocus: f }), [r.listboxState, r.value, u, T, y, B, r.invalid, f]), N = zn(m(), { ref: d, id: s, type: fi(e, r.buttonRef), "aria-haspopup": "listbox", "aria-controls": (n = r.optionsRef.current) == null ? void 0 : n.id, "aria-expanded": r.listboxState === 0, "aria-labelledby": h, "aria-describedby": b, disabled: u || void 0, autoFocus: f, onKeyDown: c, onKeyUp: p, onKeyPress: g, onClick: v }, E, M, L);
  return ae({ ourProps: N, theirProps: a, slot: H, defaultTag: Os, name: "Listbox.Button" });
}
let _r = ne(!1), Ls = "div", Cs = ut.RenderStrategy | ut.Static;
function Fs(e, t) {
  var n;
  let r = Ve(), { id: o = `headlessui-listbox-options-${r}`, anchor: i, portal: l = !1, modal: s = !0, transition: u = !1, ...f } = e, a = Nl(i);
  a && (l = !0);
  let d = nt("Listbox.Options"), m = wt("Listbox.Options"), c = en(d.optionsRef), p = fn(), [v, g] = mr(u, d.optionsRef, p !== null ? (p & pe.Open) === pe.Open : d.listboxState === 0);
  ur(v, d.buttonRef, m.closeListbox);
  let h = d.__demoMode ? !1 : s && d.listboxState === 0;
  hi(h, c);
  let b = d.__demoMode ? !1 : s && d.listboxState === 0;
  Qo(b, { allowed: I(() => [d.buttonRef.current, d.optionsRef.current]) });
  let y = d.listboxState !== 0, E = gs(y, d.buttonRef) ? !1 : v, T = v && d.listboxState === 1, M = Yl(T, d.value), B = I((x) => d.compare(M, x)), L = K(() => {
    var x;
    if (a == null || !((x = a == null ? void 0 : a.to) != null && x.includes("selection"))) return null;
    let P = d.options.findIndex((D) => B(D.dataRef.current.value));
    return P === -1 && (P = 0), P;
  }, [a, d.options]), H = (() => {
    if (a == null) return;
    if (L === null) return { ...a, inner: void 0 };
    let x = Array.from(d.listRef.current.values());
    return { ...a, inner: { listRef: { current: x }, index: L } };
  })(), [N, F] = Vl(H), _ = Wl(), A = de(d.optionsRef, t, a ? N : null), C = Ne();
  Z(() => {
    var x;
    let P = d.optionsRef.current;
    P && d.listboxState === 0 && P !== ((x = Je(P)) == null ? void 0 : x.activeElement) && (P == null || P.focus({ preventScroll: !0 }));
  }, [d.listboxState, d.optionsRef, d.optionsRef.current]);
  let S = I((x) => {
    var P, D;
    switch (C.dispose(), x.key) {
      case z.Space:
        if (d.searchQuery !== "") return x.preventDefault(), x.stopPropagation(), m.search(x.key);
      case z.Enter:
        if (x.preventDefault(), x.stopPropagation(), d.activeOptionIndex !== null) {
          let { dataRef: le } = d.options[d.activeOptionIndex];
          m.onChange(le.current.value);
        }
        d.mode === 0 && (re.flushSync(() => m.closeListbox()), (P = d.buttonRef.current) == null || P.focus({ preventScroll: !0 }));
        break;
      case ve(d.orientation, { vertical: z.ArrowDown, horizontal: z.ArrowRight }):
        return x.preventDefault(), x.stopPropagation(), m.goToOption(q.Next);
      case ve(d.orientation, { vertical: z.ArrowUp, horizontal: z.ArrowLeft }):
        return x.preventDefault(), x.stopPropagation(), m.goToOption(q.Previous);
      case z.Home:
      case z.PageUp:
        return x.preventDefault(), x.stopPropagation(), m.goToOption(q.First);
      case z.End:
      case z.PageDown:
        return x.preventDefault(), x.stopPropagation(), m.goToOption(q.Last);
      case z.Escape:
        x.preventDefault(), x.stopPropagation(), re.flushSync(() => m.closeListbox()), (D = d.buttonRef.current) == null || D.focus({ preventScroll: !0 });
        return;
      case z.Tab:
        x.preventDefault(), x.stopPropagation(), re.flushSync(() => m.closeListbox()), ii(d.buttonRef.current, x.shiftKey ? Vt.Previous : Vt.Next);
        break;
      default:
        x.key.length === 1 && (m.search(x.key), C.setTimeout(() => m.clearSearch(), 350));
        break;
    }
  }), $ = vs(() => {
    var x;
    return (x = d.buttonRef.current) == null ? void 0 : x.id;
  }, [d.buttonRef.current]), R = K(() => ({ open: d.listboxState === 0 }), [d.listboxState]), O = zn(a ? _() : {}, { id: o, ref: A, "aria-activedescendant": d.activeOptionIndex === null || (n = d.options[d.activeOptionIndex]) == null ? void 0 : n.id, "aria-multiselectable": d.mode === 1 ? !0 : void 0, "aria-labelledby": $, "aria-orientation": d.orientation, onKeyDown: S, role: "listbox", tabIndex: d.listboxState === 0 ? 0 : void 0, style: { ...f.style, ...F, "--button-width": Go(d.buttonRef, !0).width }, ...pr(g) });
  return W.createElement(ls, { enabled: l ? e.static || v : !1 }, W.createElement(Et.Provider, { value: d.mode === 1 ? d : { ...d, isSelected: B } }, ae({ ourProps: O, theirProps: f, slot: R, defaultTag: Ls, features: Cs, visible: E, name: "Listbox.Options" })));
}
let Ms = "div";
function As(e, t) {
  let n = Ve(), { id: r = `headlessui-listbox-option-${n}`, disabled: o = !1, value: i, ...l } = e, s = Y(_r) === !0, u = nt("Listbox.Option"), f = wt("Listbox.Option"), a = u.activeOptionIndex !== null ? u.options[u.activeOptionIndex].id === r : !1, d = u.isSelected(i), m = k(null), c = bs(m), p = Le({ disabled: o, value: i, domRef: m, get textValue() {
    return c();
  } }), v = de(t, m, (L) => {
    L ? u.listRef.current.set(r, L) : u.listRef.current.delete(r);
  });
  V(() => {
    if (!u.__demoMode && u.listboxState === 0 && a && u.activationTrigger !== 0) return ye().requestAnimationFrame(() => {
      var L, H;
      (H = (L = m.current) == null ? void 0 : L.scrollIntoView) == null || H.call(L, { block: "nearest" });
    });
  }, [m, a, u.__demoMode, u.listboxState, u.activationTrigger, u.activeOptionIndex]), V(() => {
    if (!s) return f.registerOption(r, p);
  }, [p, r, s]);
  let g = I((L) => {
    var H;
    if (o) return L.preventDefault();
    f.onChange(i), u.mode === 0 && (re.flushSync(() => f.closeListbox()), (H = u.buttonRef.current) == null || H.focus({ preventScroll: !0 }));
  }), h = I(() => {
    if (o) return f.goToOption(q.Nothing);
    f.goToOption(q.Specific, r);
  }), b = bi(), y = I((L) => {
    b.update(L), !o && (a || f.goToOption(q.Specific, r, 0));
  }), E = I((L) => {
    b.wasMoved(L) && (o || a || f.goToOption(q.Specific, r, 0));
  }), T = I((L) => {
    b.wasMoved(L) && (o || a && f.goToOption(q.Nothing));
  }), M = K(() => ({ active: a, focus: a, selected: d, disabled: o, selectedOption: d && s }), [a, d, o, s]);
  return !d && s ? null : ae({ ourProps: s ? {} : { id: r, ref: v, role: "option", tabIndex: o === !0 ? void 0 : -1, "aria-disabled": o === !0 ? !0 : void 0, "aria-selected": d, disabled: void 0, onClick: g, onFocus: h, onPointerEnter: y, onMouseEnter: y, onPointerMove: E, onMouseMove: E, onPointerLeave: T, onMouseLeave: T }, theirProps: l, slot: M, defaultTag: Ms, name: "Listbox.Option" });
}
let Ds = me;
function Is(e, t) {
  let { options: n, placeholder: r, ...o } = e, i = { ref: de(t) }, l = nt("ListboxSelectedOption"), s = K(() => ({}), []), u = l.value === void 0 || l.value === null || l.mode === 1 && Array.isArray(l.value) && l.value.length === 0;
  return W.createElement(_r.Provider, { value: !0 }, ae({ ourProps: i, theirProps: { ...o, children: W.createElement(W.Fragment, null, r && u ? r : n) }, slot: s, defaultTag: Ds, name: "ListboxSelectedOption" }));
}
let ks = ie(Ss), Hs = ie(Ps), Ns = Uo, _s = ie(Fs), Bs = ie(As), Ws = ie(Is), Zs = Object.assign(ks, { Button: Hs, Label: Ns, Options: _s, Option: Bs, SelectedOption: Ws });
function Js(e) {
  return qr({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, child: [{ tag: "path", attr: { fillRule: "evenodd", d: "M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z", clipRule: "evenodd" }, child: [] }] })(e);
}
export {
  _s as G,
  Js as H,
  Zs as M,
  Hs as U,
  Bs as V,
  Qs as X,
  Xs as a,
  qs as b,
  Gs as c,
  zs as d,
  Dl as e,
  bl as f,
  cl as g,
  Or as o,
  hl as s,
  Al as u
};
