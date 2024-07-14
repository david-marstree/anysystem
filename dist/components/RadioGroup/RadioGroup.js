import { jsx as C, jsxs as ge } from "react/jsx-runtime";
import $, { createContext as re, useId as V, useReducer as $e, useRef as _, useMemo as P, useCallback as ye, useContext as te } from "react";
import { t as M } from "../../bundle-mjs-SHnj3fHy.js";
import { W, K as Ee, w as ke, a as ae, u as Oe, z as ie, U as oe, y as K, l as Te, T as Ce, o as U, j as Pe, b as q, s as le, n as ne, $ as se, c as ue, D as de, d as xe, I as De, G as we, e as Ge, f as Se, g as F, P as Z, F as H, h as ee, p as Fe, r as ce, _ as Ne, i as Ae, k as Le } from "../../index-DsW4uhBe.js";
import { getValue as z } from "../Selectbox/helper.js";
var Ie = ((e) => (e[e.RegisterOption = 0] = "RegisterOption", e[e.UnregisterOption = 1] = "UnregisterOption", e))(Ie || {});
let Ue = { 0(e, r) {
  let t = [...e.options, { id: r.id, element: r.element, propsRef: r.propsRef }];
  return { ...e, options: Ne(t, (a) => a.element.current) };
}, 1(e, r) {
  let t = e.options.slice(), a = e.options.findIndex((n) => n.id === r.id);
  return a === -1 ? e : (t.splice(a, 1), { ...e, options: t });
} }, B = re(null);
B.displayName = "RadioGroupDataContext";
function J(e) {
  let r = te(B);
  if (r === null) {
    let t = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, J), t;
  }
  return r;
}
let X = re(null);
X.displayName = "RadioGroupActionsContext";
function Q(e) {
  let r = te(X);
  if (r === null) {
    let t = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t, Q), t;
  }
  return r;
}
function je(e, r) {
  return Ge(r.type, Ue, e, r);
}
let He = "div";
function ze(e, r) {
  let t = V(), a = ae(), { id: n = `headlessui-radiogroup-${t}`, value: y, form: l, name: s, onChange: u, by: b, disabled: d = a || !1, defaultValue: m, ...N } = e, f = Oe(b), [E, x] = $e(je, { options: [] }), c = E.options, [k, A] = ie(), [D, O] = oe(), T = _(null), w = K(T, r), R = Te(m), [i, G] = Ce(y, u, R), S = P(() => c.find((o) => !o.propsRef.current.disabled), [c]), g = P(() => c.some((o) => f(o.propsRef.current.value, i)), [c, i]), p = U((o) => {
    var L;
    if (d || f(o, i)) return !1;
    let h = (L = c.find((j) => f(j.propsRef.current.value, o))) == null ? void 0 : L.propsRef.current;
    return h != null && h.disabled ? !1 : (G == null || G(o), !0);
  }), fe = U((o) => {
    let L = T.current;
    if (!L) return;
    let h = Se(L), j = c.filter((v) => v.propsRef.current.disabled === !1).map((v) => v.element.current);
    switch (o.key) {
      case F.Enter:
        Fe(o.currentTarget);
        break;
      case F.ArrowLeft:
      case F.ArrowUp:
        if (o.preventDefault(), o.stopPropagation(), Z(j, H.Previous | H.WrapAround) === ee.Success) {
          let v = c.find((I) => I.element.current === (h == null ? void 0 : h.activeElement));
          v && p(v.propsRef.current.value);
        }
        break;
      case F.ArrowRight:
      case F.ArrowDown:
        if (o.preventDefault(), o.stopPropagation(), Z(j, H.Next | H.WrapAround) === ee.Success) {
          let v = c.find((I) => I.element.current === (h == null ? void 0 : h.activeElement));
          v && p(v.propsRef.current.value);
        }
        break;
      case F.Space:
        {
          o.preventDefault(), o.stopPropagation();
          let v = c.find((I) => I.element.current === (h == null ? void 0 : h.activeElement));
          v && p(v.propsRef.current.value);
        }
        break;
    }
  }), Y = U((o) => (x({ type: 0, ...o }), () => x({ type: 1, id: o.id }))), ve = P(() => ({ value: i, firstOption: S, containsCheckedOption: g, disabled: d, compare: f, ...E }), [i, S, g, d, f, E]), me = P(() => ({ registerOption: Y, change: p }), [Y, p]), be = { ref: w, id: n, role: "radiogroup", "aria-labelledby": k, "aria-describedby": D, onKeyDown: fe }, he = P(() => ({ value: i }), [i]), Re = ye(() => {
    if (R !== void 0) return p(R);
  }, [p, R]);
  return $.createElement(O, { name: "RadioGroup.Description" }, $.createElement(A, { name: "RadioGroup.Label" }, $.createElement(X.Provider, { value: me }, $.createElement(B.Provider, { value: ve }, s != null && $.createElement(Pe, { disabled: d, data: { [s]: i || "on" }, overrides: { type: "radio", checked: i != null }, form: l, onReset: Re }), q({ ourProps: be, theirProps: N, slot: he, defaultTag: He, name: "RadioGroup" })))));
}
let Me = "div";
function Ve(e, r) {
  var t;
  let a = J("RadioGroup.Option"), n = Q("RadioGroup.Option"), y = V(), { id: l = `headlessui-radiogroup-option-${y}`, value: s, disabled: u = a.disabled || !1, autoFocus: b = !1, ...d } = e, m = _(null), N = K(m, r), [f, E] = ie(), [x, c] = oe(), k = le({ value: s, disabled: u });
  ne(() => n.registerOption({ id: l, element: m, propsRef: k }), [l, n, m, k]);
  let A = U((g) => {
    var p;
    if (ce(g.currentTarget)) return g.preventDefault();
    n.change(s) && ((p = m.current) == null || p.focus());
  }), D = ((t = a.firstOption) == null ? void 0 : t.id) === l, { isFocusVisible: O, focusProps: T } = se({ autoFocus: b }), { isHovered: w, hoverProps: R } = ue({ isDisabled: u }), i = a.compare(a.value, s), G = de({ ref: N, id: l, role: "radio", "aria-checked": i ? "true" : "false", "aria-labelledby": f, "aria-describedby": x, "aria-disabled": u ? !0 : void 0, tabIndex: u ? -1 : i || !a.containsCheckedOption && D ? 0 : -1, onClick: u ? void 0 : A, autoFocus: b }, T, R), S = P(() => ({ checked: i, disabled: u, active: O, hover: w, focus: O, autofocus: b }), [i, u, w, O, b]);
  return $.createElement(c, { name: "RadioGroup.Description" }, $.createElement(E, { name: "RadioGroup.Label" }, q({ ourProps: G, theirProps: d, slot: S, defaultTag: Me, name: "RadioGroup.Option" })));
}
let _e = "span";
function We(e, r) {
  var t;
  let a = J("Radio"), n = Q("Radio"), y = V(), l = xe(), s = ae(), { id: u = l || `headlessui-radio-${y}`, value: b, disabled: d = a.disabled || s || !1, autoFocus: m = !1, ...N } = e, f = _(null), E = K(f, r), x = De(), c = we(), k = le({ value: b, disabled: d });
  ne(() => n.registerOption({ id: u, element: f, propsRef: k }), [u, n, f, k]);
  let A = U((g) => {
    var p;
    if (ce(g.currentTarget)) return g.preventDefault();
    n.change(b) && ((p = f.current) == null || p.focus());
  }), { isFocusVisible: D, focusProps: O } = se({ autoFocus: m }), { isHovered: T, hoverProps: w } = ue({ isDisabled: d }), R = ((t = a.firstOption) == null ? void 0 : t.id) === u, i = a.compare(a.value, b), G = de({ ref: E, id: u, role: "radio", "aria-checked": i ? "true" : "false", "aria-labelledby": x, "aria-describedby": c, "aria-disabled": d ? !0 : void 0, tabIndex: d ? -1 : i || !a.containsCheckedOption && R ? 0 : -1, autoFocus: m, onClick: d ? void 0 : A }, O, w), S = P(() => ({ checked: i, disabled: d, hover: T, focus: D, autofocus: m }), [i, d, T, D, m]);
  return q({ ourProps: G, theirProps: N, slot: S, defaultTag: _e, name: "Radio" });
}
let Ke = W(ze), qe = W(Ve), pe = W(We), Be = Ee, Je = ke, Xe = Object.assign(Ke, { Option: qe, Radio: pe, Label: Be, Description: Je });
const Qe = (e, r) => r.type === "SETVALUE" ? {
  ...e,
  value: r.value,
  selected: e.list.find((t) => z(t, e.valueField) === r.value) || null
} : r.type === "SETSELECT" ? {
  ...e,
  selected: r.selected,
  value: z(r.selected, e.valueField) + ""
} : e, ar = ({
  options: e,
  value: r,
  valueField: t = "value",
  onChange: a
}) => {
  const [n, y] = $.useReducer(Qe, {
    list: e,
    value: r,
    valueField: t,
    selected: e.find((l) => z(l, t) === r || "") || null
  });
  return /* @__PURE__ */ C("div", { className: "radio-group w-full", children: /* @__PURE__ */ C(
    Xe,
    {
      value: n.selected,
      onChange: (l) => {
        y({
          type: "SETSELECT",
          selected: l
        }), a && a(z(l, n.valueField));
      },
      className: "space-y-2",
      children: n.list.map((l) => /* @__PURE__ */ C(
        pe,
        {
          value: l,
          className: ({ checked: s }) => M(
            "group relative flex cursor-pointer rounded py-4 px-5 border border-gray-400 transition focus:outline-none",
            s && "bg-blue-100 border-blue-600"
          ),
          children: ({ checked: s }) => /* @__PURE__ */ ge("div", { className: "flex w-full items-center justify-between", children: [
            /* @__PURE__ */ C("div", { className: "text-sm/6", children: /* @__PURE__ */ C("p", { className: "font-semibold", children: l.label }) }),
            s ? /* @__PURE__ */ C(
              Ae,
              {
                className: M(
                  "size-6 transition fill-blue-600 opacity-0 group-hover:opacity-80",
                  s && "size-6 opacity-100 transition fill-blue-600 "
                )
              }
            ) : /* @__PURE__ */ C(
              Le,
              {
                className: M(
                  "size-6 transition text-gray-200 group-hover:text-blue-600"
                )
              }
            )
          ] })
        },
        l.id
      ))
    }
  ) });
};
export {
  ar as default
};
