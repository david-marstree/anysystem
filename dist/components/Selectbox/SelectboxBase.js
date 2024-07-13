import { jsxs as i, jsx as l, Fragment as p } from "react/jsx-runtime";
import g, { Fragment as j } from "react";
import { u as H, a as M, b as A, c as C, d as z, e as B, M as D, U as G, H as I, X as P, G as X, V as _, o as $, f as O, s as q, g as J } from "../../index-BSptVng4.js";
import { b as K } from "../../index-wvw0O1v3.js";
import { t as v } from "../../bundle-mjs-SHnj3fHy.js";
import { getValue as n } from "./helper.js";
const Q = (s, a) => a.type === "SETVALUE" ? {
  ...s,
  value: a.value,
  selected: s.list.find((o) => n(o, s.valueField) === a.value) || null
} : a.type === "SETSELECT" ? {
  ...s,
  selected: a.selected,
  value: n(a.selected, s.valueField) + ""
} : s, W = ({
  id: s,
  name: a,
  value: o,
  options: f,
  onChange: c,
  placeholder: h = "Select a option",
  valueField: d = "value"
}, w) => {
  var b;
  const [t, m] = g.useReducer(Q, {
    list: f,
    value: o,
    valueField: d,
    selected: f.find((e) => n(e, d) === o || "") || null
  }), { refs: y, x: E, y: N, strategy: S, floatingStyles: F, context: u } = H({
    open: !0,
    middleware: [$(10), O(), q()],
    whileElementsMounted: J,
    placement: "bottom"
  }), T = M(u, { move: !1 }), U = A(u), V = C(u), R = z(u, { role: "tooltip" }), { getReferenceProps: k, getFloatingProps: L } = B([
    T,
    U,
    V,
    R
  ]);
  return g.useImperativeHandle(w, () => ({
    setValue: (e) => {
      m({
        type: "SETVALUE",
        value: e + ""
      });
    }
  })), /* @__PURE__ */ i(
    "div",
    {
      className: v(
        "form-control relative inline-block text-left",
        !t.value && "text-gray-300"
        //empty
      ),
      children: [
        /* @__PURE__ */ i(
          "select",
          {
            className: "w-full bg-transparent outline-0 md:hidden",
            onChange: (e) => {
              m({
                type: "SETVALUE",
                value: e.target.value
              }), c && c(e.target.value);
            },
            children: [
              /* @__PURE__ */ l("option", { value: "", children: h }),
              t.list.map((e) => /* @__PURE__ */ l(
                "option",
                {
                  value: n(e, d),
                  disabled: e.enable === !1,
                  children: e.label
                },
                e.id
              ))
            ]
          }
        ),
        /* @__PURE__ */ i(
          D,
          {
            className: "hidden md:flex",
            as: "div",
            value: t.selected,
            onChange: (e) => {
              const r = n(e, d);
              m({
                type: "SETSELECT",
                selected: e
              }), c && c(r);
            },
            ref: y.setReference,
            ...k(),
            children: [
              /* @__PURE__ */ i(G, { className: "relative z-10 inline-flex w-full justify-between !p-0 focus:outline-none", children: [
                /* @__PURE__ */ l("span", { children: t.value ? /* @__PURE__ */ l(p, { children: ((b = t.selected) == null ? void 0 : b.label) || "" }) : h }),
                /* @__PURE__ */ l(
                  I,
                  {
                    className: "h-5 w-5 text-gray-400",
                    "aria-hidden": "true"
                  }
                )
              ] }),
              /* @__PURE__ */ l(
                P,
                {
                  as: j,
                  enter: "transition duration-100 ease-out",
                  enterFrom: "scale-95 transform opacity-0",
                  enterTo: "scale-100 transform opacity-100",
                  leave: "transition duration-75 ease-in",
                  leaveFrom: "scale-100 transform opacity-100",
                  leaveTo: "scale-95 transform opacity-0",
                  children: /* @__PURE__ */ l(
                    X,
                    {
                      className: "absolute !z-[999] mt-2 inline-block w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                      ref: y.setFloating,
                      style: F,
                      ...L({
                        style: {
                          position: S,
                          top: N ?? "",
                          left: E ?? ""
                        }
                      }),
                      children: /* @__PURE__ */ l("div", { className: "flex flex-col px-1 py-1", children: t.list.map((e) => {
                        var r, x;
                        return /* @__PURE__ */ l(
                          _,
                          {
                            className: v(
                              "relative flex cursor-pointer select-none justify-between px-5 py-4 text-black hover:bg-indigo-100",
                              e.enable === !1 && "cursor-not-allowed opacity-50",
                              ((r = t.selected) == null ? void 0 : r.id) === e.id && "bg-indigo-100"
                            ),
                            value: e,
                            disabled: e.enable === !1,
                            children: /* @__PURE__ */ i(p, { children: [
                              /* @__PURE__ */ l("span", { className: "pl-5", children: e.label }),
                              ((x = t.selected) == null ? void 0 : x.id) === e.id ? /* @__PURE__ */ l(
                                "span",
                                {
                                  className: v(
                                    "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                                  ),
                                  children: /* @__PURE__ */ l(K, { className: "h-5 w-5", "aria-hidden": "true" })
                                }
                              ) : /* @__PURE__ */ l(p, {})
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
            id: s,
            name: a,
            style: { display: "none" },
            value: t.value + "",
            readOnly: !0
          }
        )
      ]
    }
  );
}, ae = g.forwardRef(W);
export {
  ae as default
};
