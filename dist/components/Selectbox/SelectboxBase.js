import { jsx as t, jsxs as u, Fragment as f } from "react/jsx-runtime";
import p, { Fragment as C } from "react";
import { u as H, a as L, b as M, c as z, d as A, e as B, M as D, U as G, H as I, X as P, G as X, V as _, o as $, f as O, s as q, g as J } from "../../index-BSptVng4.js";
import { b as K } from "../../index-wvw0O1v3.js";
import { t as m } from "../../bundle-mjs-SHnj3fHy.js";
import { getValue as o } from "./helper.js";
const Q = (s, l) => l.type === "SETVALUE" ? {
  ...s,
  value: l.value,
  selected: s.list.find((n) => o(n, s.valueField) === l.value) || null
} : l.type === "SETSELECT" ? {
  ...s,
  selected: l.selected,
  value: o(l.selected, s.valueField) + ""
} : s, W = ({
  id: s,
  name: l,
  value: n,
  options: c,
  onChange: v,
  placeholder: x = "Select a option",
  valueField: d = "value"
}, w) => {
  var h;
  const [a, g] = p.useReducer(Q, {
    list: c,
    value: n,
    valueField: d,
    selected: c.find((e) => o(e, d) === n || "") || null
  }), { refs: y, x: E, y: F, strategy: S, floatingStyles: N, context: i } = H({
    open: !0,
    middleware: [$(10), O(), q()],
    whileElementsMounted: J,
    placement: "bottom"
  }), T = L(i, { move: !1 }), R = M(i), U = z(i), V = A(i, { role: "tooltip" }), { getReferenceProps: k, getFloatingProps: j } = B([
    T,
    R,
    U,
    V
  ]);
  return p.useImperativeHandle(w, () => ({
    setValue: (e) => {
      g({
        type: "SETVALUE",
        value: e + ""
      });
    }
  })), /* @__PURE__ */ t(
    "div",
    {
      className: m(
        "form-control relative inline-block text-left",
        !a.value && "text-gray-300"
        //empty
      ),
      children: /* @__PURE__ */ u(
        D,
        {
          as: "div",
          value: a.selected,
          onChange: (e) => {
            const r = o(e, d);
            g({
              type: "SETSELECT",
              selected: e
            }), v && v(r);
          },
          ref: y.setReference,
          ...k(),
          children: [
            /* @__PURE__ */ u(G, { className: "relative z-10 inline-flex w-full justify-between !p-0 focus:outline-none", children: [
              /* @__PURE__ */ t("span", { children: a.value ? /* @__PURE__ */ t(f, { children: ((h = a.selected) == null ? void 0 : h.label) || "" }) : x }),
              /* @__PURE__ */ t(
                I,
                {
                  className: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                }
              )
            ] }),
            /* @__PURE__ */ t(
              P,
              {
                as: C,
                enter: "transition duration-100 ease-out",
                enterFrom: "scale-95 transform opacity-0",
                enterTo: "scale-100 transform opacity-100",
                leave: "transition duration-75 ease-in",
                leaveFrom: "scale-100 transform opacity-100",
                leaveTo: "scale-95 transform opacity-0",
                children: /* @__PURE__ */ t(
                  X,
                  {
                    className: "absolute !z-[999] mt-2 inline-block w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    ref: y.setFloating,
                    style: N,
                    ...j({
                      style: {
                        position: S,
                        top: F ?? "",
                        left: E ?? ""
                      }
                    }),
                    children: /* @__PURE__ */ t("div", { className: "flex flex-col px-1 py-1", children: a.list.map((e) => {
                      var r, b;
                      return /* @__PURE__ */ t(
                        _,
                        {
                          className: m(
                            "relative flex cursor-pointer select-none justify-between px-5 py-4 text-black hover:bg-indigo-100",
                            e.enable === !1 && "cursor-not-allowed opacity-50",
                            ((r = a.selected) == null ? void 0 : r.id) === e.id && "bg-indigo-100"
                          ),
                          value: e,
                          disabled: e.enable === !1,
                          children: /* @__PURE__ */ u(f, { children: [
                            /* @__PURE__ */ t("span", { className: "pl-5", children: e.label }),
                            ((b = a.selected) == null ? void 0 : b.id) === e.id ? /* @__PURE__ */ t(
                              "span",
                              {
                                className: m(
                                  "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                                ),
                                children: /* @__PURE__ */ t(K, { className: "h-5 w-5", "aria-hidden": "true" })
                              }
                            ) : /* @__PURE__ */ t(f, {})
                          ] })
                        },
                        e.id
                      );
                    }) })
                  }
                )
              }
            ),
            /* @__PURE__ */ t(
              "input",
              {
                type: "text",
                id: s,
                name: l,
                style: { display: "none" },
                value: a.value + "",
                readOnly: !0
              }
            )
          ]
        }
      )
    }
  );
}, ae = p.forwardRef(W);
export {
  ae as default
};
