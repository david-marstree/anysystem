import { h as xe, n as K, i as v, M as de, W as j, K as Le, j as Te, y as z, l as we, T as Fe, k as Me, m as H, F as Ae, p as me, z as Ce, v as _e, q as ke, r as Z, t as Ne, w as G, x as Be, A as Ue, B as Qe, I as Ve, G as He, $ as Ke, C as je, D as ze, E as ge, J as Ge, L as qe, N as Ye, O as Ze, V as We, P as Xe, Q as Je, R as et, S as tt, U as nt, Y as ot, Z as rt, _ as it, a0 as at, a1 as lt, a2 as st, a3 as ut, a4 as ct, a5 as dt, a6 as S, a7 as y, a8 as pt, a9 as ft, aa as vt, ab as pe, ac as ie, ad as bt } from "./index-WJdgKpVa.js";
import T, { useState as xt, useRef as C, createContext as le, useReducer as mt, createRef as gt, useCallback as fe, useMemo as _, useId as se, useEffect as Ot, useContext as ue, Fragment as Oe } from "react";
import { r as B } from "./index-DsprzSCj.js";
function St(e, o) {
  let [i, t] = xt(e), r = xe(e);
  return K(() => t(r.current), [r, t, ...o]), i;
}
function Rt(e, o) {
  let i = C({ left: 0, top: 0 });
  if (K(() => {
    let r = o.current;
    if (!r) return;
    let s = r.getBoundingClientRect();
    s && (i.current = s);
  }, [e]), o.current == null || !e || o.current === document.activeElement) return !1;
  let t = o.current.getBoundingClientRect();
  return t.top !== i.current.top || t.left !== i.current.left;
}
let ve = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function be(e) {
  var o, i;
  let t = (o = e.innerText) != null ? o : "", r = e.cloneNode(!0);
  if (!(r instanceof HTMLElement)) return t;
  let s = !1;
  for (let p of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) p.remove(), s = !0;
  let d = s ? (i = r.innerText) != null ? i : "" : t;
  return ve.test(d) && (d = d.replace(ve, "")), d;
}
function ht(e) {
  let o = e.getAttribute("aria-label");
  if (typeof o == "string") return o.trim();
  let i = e.getAttribute("aria-labelledby");
  if (i) {
    let t = i.split(" ").map((r) => {
      let s = document.getElementById(r);
      if (s) {
        let d = s.getAttribute("aria-label");
        return typeof d == "string" ? d.trim() : be(s).trim();
      }
      return null;
    }).filter(Boolean);
    if (t.length > 0) return t.join(", ");
  }
  return be(e).trim();
}
function yt(e) {
  let o = C(""), i = C("");
  return v(() => {
    let t = e.current;
    if (!t) return "";
    let r = t.innerText;
    if (o.current === r) return i.current;
    let s = ht(t).trim().toLowerCase();
    return o.current = r, i.current = s, s;
  });
}
var $t = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($t || {}), It = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(It || {}), Dt = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Dt || {}), Pt = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterOption = 5] = "RegisterOption", e[e.UnregisterOption = 6] = "UnregisterOption", e))(Pt || {});
function ae(e, o = (i) => i) {
  let i = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, t = bt(o(e.options.slice()), (s) => s.dataRef.current.domRef.current), r = i ? t.indexOf(i) : null;
  return r === -1 && (r = null), { options: t, activeOptionIndex: r };
}
let Et = { 1(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1, __demoMode: !1 };
}, 0(e) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let o = e.activeOptionIndex, { isSelected: i } = e.dataRef.current, t = e.options.findIndex((r) => i(r.dataRef.current.value));
  return t !== -1 && (o = t), { ...e, listboxState: 0, activeOptionIndex: o, __demoMode: !1 };
}, 2(e, o) {
  var i, t, r, s, d;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let p = { ...e, searchQuery: "", activationTrigger: (i = o.trigger) != null ? i : 1, __demoMode: !1 };
  if (o.focus === S.Nothing) return { ...p, activeOptionIndex: null };
  if (o.focus === S.Specific) return { ...p, activeOptionIndex: e.options.findIndex((a) => a.id === o.id) };
  if (o.focus === S.Previous) {
    let a = e.activeOptionIndex;
    if (a !== null) {
      let n = e.options[a].dataRef.current.domRef, c = ie(o, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (c !== null) {
        let f = e.options[c].dataRef.current.domRef;
        if (((t = n.current) == null ? void 0 : t.previousElementSibling) === f.current || ((r = f.current) == null ? void 0 : r.previousElementSibling) === null) return { ...p, activeOptionIndex: c };
      }
    }
  } else if (o.focus === S.Next) {
    let a = e.activeOptionIndex;
    if (a !== null) {
      let n = e.options[a].dataRef.current.domRef, c = ie(o, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (f) => f.id, resolveDisabled: (f) => f.dataRef.current.disabled });
      if (c !== null) {
        let f = e.options[c].dataRef.current.domRef;
        if (((s = n.current) == null ? void 0 : s.nextElementSibling) === f.current || ((d = f.current) == null ? void 0 : d.nextElementSibling) === null) return { ...p, activeOptionIndex: c };
      }
    }
  }
  let u = ae(e), m = ie(o, { resolveItems: () => u.options, resolveActiveIndex: () => u.activeOptionIndex, resolveId: (a) => a.id, resolveDisabled: (a) => a.dataRef.current.disabled });
  return { ...p, ...u, activeOptionIndex: m };
}, 3: (e, o) => {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let i = e.searchQuery !== "" ? 0 : 1, t = e.searchQuery + o.value.toLowerCase(), r = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + i).concat(e.options.slice(0, e.activeOptionIndex + i)) : e.options).find((d) => {
    var p;
    return !d.dataRef.current.disabled && ((p = d.dataRef.current.textValue) == null ? void 0 : p.startsWith(t));
  }), s = r ? e.options.indexOf(r) : -1;
  return s === -1 || s === e.activeOptionIndex ? { ...e, searchQuery: t } : { ...e, searchQuery: t, activeOptionIndex: s, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5: (e, o) => {
  let i = { id: o.id, dataRef: o.dataRef }, t = ae(e, (r) => [...r, i]);
  return e.activeOptionIndex === null && e.dataRef.current.isSelected(o.dataRef.current.value) && (t.activeOptionIndex = t.options.indexOf(i)), { ...e, ...t };
}, 6: (e, o) => {
  let i = ae(e, (t) => {
    let r = t.findIndex((s) => s.id === o.id);
    return r !== -1 && t.splice(r, 1), t;
  });
  return { ...e, ...i, activationTrigger: 1 };
} }, ce = le(null);
ce.displayName = "ListboxActionsContext";
function W(e) {
  let o = ue(ce);
  if (o === null) {
    let i = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, W), i;
  }
  return o;
}
let X = le(null);
X.displayName = "ListboxDataContext";
function q(e) {
  let o = ue(X);
  if (o === null) {
    let i = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, q), i;
  }
  return o;
}
function Lt(e, o) {
  return H(o.type, Et, e, o);
}
let Tt = Oe;
function wt(e, o) {
  var i;
  let t = Te(), { value: r, defaultValue: s, form: d, name: p, onChange: u, by: m, invalid: a = !1, disabled: n = t || !1, horizontal: c = !1, multiple: f = !1, __demoMode: w = !1, ...F } = e;
  const k = c ? "horizontal" : "vertical";
  let N = z(o), P = we(s), [R = f ? [] : void 0, D] = Fe(r, u, P), [E, $] = mt(Lt, { dataRef: gt(), listboxState: w ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: !1, __demoMode: w }), A = C({ static: !1, hold: !1 }), b = C(null), L = C(null), U = C(/* @__PURE__ */ new Map()), g = Me(m), Q = fe((O) => H(x.mode, { 1: () => R.some((h) => g(h, O)), 0: () => g(R, O) }), [R]), x = _(() => ({ ...E, value: R, disabled: n, invalid: a, mode: f ? 1 : 0, orientation: k, compare: g, isSelected: Q, optionsPropsRef: A, buttonRef: b, optionsRef: L, listRef: U }), [R, n, a, f, E, U]);
  K(() => {
    E.dataRef.current = x;
  }, [x]);
  let Y = x.listboxState === 0;
  Ae(Y, [x.buttonRef, x.optionsRef], (O, h) => {
    var M;
    $({ type: 1 }), ct(h, dt.Loose) || (O.preventDefault(), (M = x.buttonRef.current) == null || M.focus());
  });
  let J = _(() => ({ open: x.listboxState === 0, disabled: n, invalid: a, value: R }), [x, n, R, a]), ee = v((O) => {
    let h = x.options.find((M) => M.id === O);
    h && re(h.dataRef.current.value);
  }), te = v(() => {
    if (x.activeOptionIndex !== null) {
      let { dataRef: O, id: h } = x.options[x.activeOptionIndex];
      re(O.current.value), $({ type: 2, focus: S.Specific, id: h });
    }
  }), ne = v(() => $({ type: 0 })), l = v(() => $({ type: 1 })), I = me(), V = v((O, h, M) => {
    I.dispose(), I.microTask(() => O === S.Specific ? $({ type: 2, focus: S.Specific, id: h, trigger: M }) : $({ type: 2, focus: O, trigger: M }));
  }), oe = v((O, h) => ($({ type: 5, id: O, dataRef: h }), () => $({ type: 6, id: O }))), re = v((O) => H(x.mode, { 0() {
    return D == null ? void 0 : D(O);
  }, 1() {
    let h = x.value.slice(), M = h.findIndex((Ee) => g(Ee, O));
    return M === -1 ? h.push(O) : h.splice(M, 1), D == null ? void 0 : D(h);
  } })), Re = v((O) => $({ type: 3, value: O })), he = v(() => $({ type: 4 })), ye = _(() => ({ onChange: re, registerOption: oe, goToOption: V, closeListbox: l, openListbox: ne, selectActiveOption: te, selectOption: ee, search: Re, clearSearch: he }), []), [$e, Ie] = Ce({ inherit: !0 }), De = { ref: N }, Pe = fe(() => {
    if (P !== void 0) return D == null ? void 0 : D(P);
  }, [D, P]);
  return T.createElement(Ie, { value: $e, props: { htmlFor: (i = x.buttonRef.current) == null ? void 0 : i.id }, slot: { open: x.listboxState === 0, disabled: n } }, T.createElement(_e, null, T.createElement(ce.Provider, { value: ye }, T.createElement(X.Provider, { value: x }, T.createElement(ke, { value: H(x.listboxState, { 0: Z.Open, 1: Z.Closed }) }, p != null && R != null && T.createElement(Ne, { disabled: n, data: { [p]: R }, form: d, onReset: Pe }), G({ ourProps: De, theirProps: F, slot: J, defaultTag: Tt, name: "Listbox" }))))));
}
let Ft = "button";
function Mt(e, o) {
  var i;
  let t = q("Listbox.Button"), r = W("Listbox.Button"), s = se(), d = Be(), { id: p = d || `headlessui-listbox-button-${s}`, disabled: u = t.disabled || !1, autoFocus: m = !1, ...a } = e, n = z(t.buttonRef, o, Ue()), c = Qe(), f = v((g) => {
    switch (g.key) {
      case y.Enter:
        pt(g.currentTarget);
        break;
      case y.Space:
      case y.ArrowDown:
        g.preventDefault(), B.flushSync(() => r.openListbox()), t.value || r.goToOption(S.First);
        break;
      case y.ArrowUp:
        g.preventDefault(), B.flushSync(() => r.openListbox()), t.value || r.goToOption(S.Last);
        break;
    }
  }), w = v((g) => {
    switch (g.key) {
      case y.Space:
        g.preventDefault();
        break;
    }
  }), F = v((g) => {
    var Q;
    if (ft(g.currentTarget)) return g.preventDefault();
    t.listboxState === 0 ? (B.flushSync(() => r.closeListbox()), (Q = t.buttonRef.current) == null || Q.focus({ preventScroll: !0 })) : (g.preventDefault(), r.openListbox());
  }), k = v((g) => g.preventDefault()), N = Ve([p]), P = He(), { isFocusVisible: R, focusProps: D } = Ke({ autoFocus: m }), { isHovered: E, hoverProps: $ } = je({ isDisabled: u }), { pressed: A, pressProps: b } = ze({ disabled: u }), L = _(() => ({ open: t.listboxState === 0, active: A || t.listboxState === 0, disabled: u, invalid: t.invalid, value: t.value, hover: E, focus: R, autofocus: m }), [t.listboxState, t.value, u, E, R, A, t.invalid, m]), U = ge(c(), { ref: n, id: p, type: Ge(e, t.buttonRef), "aria-haspopup": "listbox", "aria-controls": (i = t.optionsRef.current) == null ? void 0 : i.id, "aria-expanded": t.listboxState === 0, "aria-labelledby": N, "aria-describedby": P, disabled: u || void 0, autoFocus: m, onKeyDown: f, onKeyUp: w, onKeyPress: k, onClick: F }, D, $, b);
  return G({ ourProps: U, theirProps: a, slot: L, defaultTag: Ft, name: "Listbox.Button" });
}
let Se = le(!1), At = "div", Ct = de.RenderStrategy | de.Static;
function _t(e, o) {
  var i;
  let t = se(), { id: r = `headlessui-listbox-options-${t}`, anchor: s, portal: d = !1, modal: p = !0, transition: u = !1, ...m } = e, a = qe(s);
  a && (d = !0);
  let n = q("Listbox.Options"), c = W("Listbox.Options"), f = Ye(n.optionsRef), w = Ze(), [F, k] = We(u, n.optionsRef, w !== null ? (w & Z.Open) === Z.Open : n.listboxState === 0);
  Xe(F, n.buttonRef, c.closeListbox);
  let N = n.__demoMode ? !1 : p && n.listboxState === 0;
  Je(N, f);
  let P = n.__demoMode ? !1 : p && n.listboxState === 0;
  et(P, { allowed: v(() => [n.buttonRef.current, n.optionsRef.current]) });
  let R = n.listboxState !== 0, D = Rt(R, n.buttonRef) ? !1 : F, E = F && n.listboxState === 1, $ = tt(E, n.value), A = v((l) => n.compare($, l)), b = _(() => {
    var l;
    if (a == null || !((l = a == null ? void 0 : a.to) != null && l.includes("selection"))) return null;
    let I = n.options.findIndex((V) => A(V.dataRef.current.value));
    return I === -1 && (I = 0), I;
  }, [a, n.options]), L = (() => {
    if (a == null) return;
    if (b === null) return { ...a, inner: void 0 };
    let l = Array.from(n.listRef.current.values());
    return { ...a, inner: { listRef: { current: l }, index: b } };
  })(), [U, g] = nt(L), Q = ot(), x = z(n.optionsRef, o, a ? U : null), Y = me();
  Ot(() => {
    var l;
    let I = n.optionsRef.current;
    I && n.listboxState === 0 && I !== ((l = rt(I)) == null ? void 0 : l.activeElement) && (I == null || I.focus({ preventScroll: !0 }));
  }, [n.listboxState, n.optionsRef, n.optionsRef.current]);
  let J = v((l) => {
    var I, V;
    switch (Y.dispose(), l.key) {
      case y.Space:
        if (n.searchQuery !== "") return l.preventDefault(), l.stopPropagation(), c.search(l.key);
      case y.Enter:
        if (l.preventDefault(), l.stopPropagation(), n.activeOptionIndex !== null) {
          let { dataRef: oe } = n.options[n.activeOptionIndex];
          c.onChange(oe.current.value);
        }
        n.mode === 0 && (B.flushSync(() => c.closeListbox()), (I = n.buttonRef.current) == null || I.focus({ preventScroll: !0 }));
        break;
      case H(n.orientation, { vertical: y.ArrowDown, horizontal: y.ArrowRight }):
        return l.preventDefault(), l.stopPropagation(), c.goToOption(S.Next);
      case H(n.orientation, { vertical: y.ArrowUp, horizontal: y.ArrowLeft }):
        return l.preventDefault(), l.stopPropagation(), c.goToOption(S.Previous);
      case y.Home:
      case y.PageUp:
        return l.preventDefault(), l.stopPropagation(), c.goToOption(S.First);
      case y.End:
      case y.PageDown:
        return l.preventDefault(), l.stopPropagation(), c.goToOption(S.Last);
      case y.Escape:
        l.preventDefault(), l.stopPropagation(), B.flushSync(() => c.closeListbox()), (V = n.buttonRef.current) == null || V.focus({ preventScroll: !0 });
        return;
      case y.Tab:
        l.preventDefault(), l.stopPropagation(), B.flushSync(() => c.closeListbox()), vt(n.buttonRef.current, l.shiftKey ? pe.Previous : pe.Next);
        break;
      default:
        l.key.length === 1 && (c.search(l.key), Y.setTimeout(() => c.clearSearch(), 350));
        break;
    }
  }), ee = St(() => {
    var l;
    return (l = n.buttonRef.current) == null ? void 0 : l.id;
  }, [n.buttonRef.current]), te = _(() => ({ open: n.listboxState === 0 }), [n.listboxState]), ne = ge(a ? Q() : {}, { id: r, ref: x, "aria-activedescendant": n.activeOptionIndex === null || (i = n.options[n.activeOptionIndex]) == null ? void 0 : i.id, "aria-multiselectable": n.mode === 1 ? !0 : void 0, "aria-labelledby": ee, "aria-orientation": n.orientation, onKeyDown: J, role: "listbox", tabIndex: n.listboxState === 0 ? 0 : void 0, style: { ...m.style, ...g, "--button-width": it(n.buttonRef, !0).width }, ...at(k) });
  return T.createElement(lt, { enabled: d ? e.static || F : !1 }, T.createElement(X.Provider, { value: n.mode === 1 ? n : { ...n, isSelected: A } }, G({ ourProps: ne, theirProps: m, slot: te, defaultTag: At, features: Ct, visible: D, name: "Listbox.Options" })));
}
let kt = "div";
function Nt(e, o) {
  let i = se(), { id: t = `headlessui-listbox-option-${i}`, disabled: r = !1, value: s, ...d } = e, p = ue(Se) === !0, u = q("Listbox.Option"), m = W("Listbox.Option"), a = u.activeOptionIndex !== null ? u.options[u.activeOptionIndex].id === t : !1, n = u.isSelected(s), c = C(null), f = yt(c), w = xe({ disabled: r, value: s, domRef: c, get textValue() {
    return f();
  } }), F = z(o, c, (b) => {
    b ? u.listRef.current.set(t, b) : u.listRef.current.delete(t);
  });
  K(() => {
    if (!u.__demoMode && u.listboxState === 0 && a && u.activationTrigger !== 0) return st().requestAnimationFrame(() => {
      var b, L;
      (L = (b = c.current) == null ? void 0 : b.scrollIntoView) == null || L.call(b, { block: "nearest" });
    });
  }, [c, a, u.__demoMode, u.listboxState, u.activationTrigger, u.activeOptionIndex]), K(() => {
    if (!p) return m.registerOption(t, w);
  }, [w, t, p]);
  let k = v((b) => {
    var L;
    if (r) return b.preventDefault();
    m.onChange(s), u.mode === 0 && (B.flushSync(() => m.closeListbox()), (L = u.buttonRef.current) == null || L.focus({ preventScroll: !0 }));
  }), N = v(() => {
    if (r) return m.goToOption(S.Nothing);
    m.goToOption(S.Specific, t);
  }), P = ut(), R = v((b) => {
    P.update(b), !r && (a || m.goToOption(S.Specific, t, 0));
  }), D = v((b) => {
    P.wasMoved(b) && (r || a || m.goToOption(S.Specific, t, 0));
  }), E = v((b) => {
    P.wasMoved(b) && (r || a && m.goToOption(S.Nothing));
  }), $ = _(() => ({ active: a, focus: a, selected: n, disabled: r, selectedOption: n && p }), [a, n, r, p]);
  return !n && p ? null : G({ ourProps: p ? {} : { id: t, ref: F, role: "option", tabIndex: r === !0 ? void 0 : -1, "aria-disabled": r === !0 ? !0 : void 0, "aria-selected": n, disabled: void 0, onClick: k, onFocus: N, onPointerEnter: R, onMouseEnter: R, onPointerMove: D, onMouseMove: D, onPointerLeave: E, onMouseLeave: E }, theirProps: d, slot: $, defaultTag: kt, name: "Listbox.Option" });
}
let Bt = Oe;
function Ut(e, o) {
  let { options: i, placeholder: t, ...r } = e, s = { ref: z(o) }, d = q("ListboxSelectedOption"), p = _(() => ({}), []), u = d.value === void 0 || d.value === null || d.mode === 1 && Array.isArray(d.value) && d.value.length === 0;
  return T.createElement(Se.Provider, { value: !0 }, G({ ourProps: s, theirProps: { ...r, children: T.createElement(T.Fragment, null, t && u ? t : i) }, slot: p, defaultTag: Bt, name: "ListboxSelectedOption" }));
}
let Qt = j(wt), Vt = j(Mt), Ht = Le, Kt = j(_t), jt = j(Nt), zt = j(Ut), Zt = Object.assign(Qt, { Button: Vt, Label: Ht, Options: Kt, Option: jt, SelectedOption: zt });
export {
  Kt as G,
  Zt as M,
  Vt as U,
  jt as V
};
