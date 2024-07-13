import { jsxs as f, jsx as l, Fragment as y } from "react/jsx-runtime";
import h, { Fragment as k } from "react";
import { _ as A } from "../../lodash-XYp3qmxI.js";
import { u as L, a as H, b as C, c as _, d as z, e as D, H as G, X as I, o as O, f as P, s as X, g as $ } from "../../index-WJdgKpVa.js";
import { b as q } from "../../index-wvw0O1v3.js";
import { t as g } from "../../bundle-mjs-SHnj3fHy.js";
import { getValue as n } from "./helper.js";
import { M as B, U as J, G as K, V as Q } from "../../listbox-BoGLpnJ5.js";
const W = (r, s) => s.type === "SETVALUE" ? {
  ...r,
  value: s.value,
  selected: r.list.filter((o) => {
    var d;
    const c = n(o, r.valueField);
    return (d = s == null ? void 0 : s.value) == null ? void 0 : d.includes(c);
  }) || []
} : s.type === "SETSELECT" ? {
  ...r,
  selected: s.selected,
  value: s.selected.map(
    (o) => n(o, r.valueField)
  )
} : r, Y = ({
  id: r,
  name: s,
  options: o,
  onChange: c,
  placeholder: d = "Select a option",
  valueField: u = "value",
  value: p = []
}, w) => {
  var x;
  const [t, v] = h.useReducer(W, {
    list: o,
    value: p || [],
    valueField: u,
    selected: p ? o.filter((e) => {
      const a = n(e, u);
      return A.some(p, (i) => i + "" == a + "");
    }) : []
  }), { refs: b, x: E, y: N, strategy: S, floatingStyles: T, context: m } = L({
    open: !0,
    middleware: [O(10), P(), X()],
    whileElementsMounted: $,
    placement: "bottom"
  }), F = H(m, { move: !1 }), U = C(m), V = _(m), j = z(m, { role: "tooltip" }), { getReferenceProps: M, getFloatingProps: R } = D([
    F,
    U,
    V,
    j
  ]);
  return h.useImperativeHandle(w, () => ({
    setValue: (e) => {
      v({ type: "SETVALUE", value: e });
    }
  })), /* @__PURE__ */ f(
    "div",
    {
      className: g(
        "form-control relative inline-block text-left",
        !t.value && "text-gray-300"
        //empty
      ),
      children: [
        /* @__PURE__ */ l(
          "select",
          {
            multiple: !0,
            className: "w-full bg-transparent outline-0 md:hidden",
            onChange: (e) => {
              const a = Array.from(
                e.target.selectedOptions,
                (i) => i.value
              );
              v({ type: "SETVALUE", value: a }), c && c(a);
            },
            children: t.list.map((e) => /* @__PURE__ */ l(
              "option",
              {
                value: n(e, u),
                disabled: e.enable === !1,
                children: e.label
              },
              e.id
            ))
          }
        ),
        /* @__PURE__ */ f(
          B,
          {
            as: "div",
            className: "hidden md:flex",
            value: t.selected,
            onChange: (e) => {
              const a = e.map((i) => n(i, u));
              v({ type: "SETSELECT", selected: e }), c && c(a);
            },
            multiple: !0,
            ref: b.setReference,
            ...M(),
            children: [
              /* @__PURE__ */ f(J, { className: "relative z-10 inline-flex w-full justify-between !p-0 focus:outline-none", children: [
                /* @__PURE__ */ l("span", { children: t.value && t.value.length > 0 ? /* @__PURE__ */ l(y, { children: ((x = t == null ? void 0 : t.selected) == null ? void 0 : x.map((e) => e.label).join(", ")) || "" }) : d }),
                /* @__PURE__ */ l(
                  G,
                  {
                    className: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  }
                )
              ] }),
              /* @__PURE__ */ l(
                I,
                {
                  as: k,
                  enter: "transition duration-100 ease-out",
                  enterFrom: "scale-95 transform opacity-0",
                  enterTo: "scale-100 transform opacity-100",
                  leave: "transition duration-75 ease-in",
                  leaveFrom: "scale-100 transform opacity-100",
                  leaveTo: "scale-95 transform opacity-0",
                  children: /* @__PURE__ */ l(
                    K,
                    {
                      className: "absolute !z-[999] mt-2 inline-block w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                      ref: b.setFloating,
                      style: T,
                      ...R({
                        style: {
                          position: S,
                          top: N ?? "",
                          left: E ?? ""
                        }
                      }),
                      children: /* @__PURE__ */ l("div", { className: "flex flex-col px-1 py-1", children: t.list.map((e) => {
                        var a, i;
                        return /* @__PURE__ */ l(
                          Q,
                          {
                            className: g(
                              "relative flex cursor-pointer select-none justify-between px-5 py-4 text-black hover:bg-indigo-100",
                              e.enable === !1 && "cursor-not-allowed opacity-50",
                              ((a = t.value) == null ? void 0 : a.includes(n(e, u))) && "bg-indigo-100"
                            ),
                            value: e,
                            disabled: e.enable === !1,
                            children: /* @__PURE__ */ f(y, { children: [
                              /* @__PURE__ */ l("span", { className: "pl-5", children: e.label }),
                              (i = t.value) != null && i.includes(n(e, u)) ? /* @__PURE__ */ l(
                                "span",
                                {
                                  className: g(
                                    "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                                  ),
                                  children: /* @__PURE__ */ l(q, { className: "h-5 w-5", "aria-hidden": "true" })
                                }
                              ) : /* @__PURE__ */ l(y, {})
                            ] })
                          },
                          e.id
                        );
                      }) })
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ l(
          "input",
          {
            type: "text",
            id: r,
            name: s,
            style: { display: "none" },
            readOnly: !0,
            value: t.value.join(",")
          }
        )
      ]
    }
  );
}, ne = h.forwardRef(Y);
export {
  ne as default
};
