import { jsx as a, jsxs as f } from "react/jsx-runtime";
import d, { Fragment as p } from "react";
import { t as y } from "../../bundle-mjs-SHnj3fHy.js";
import { H as v, X as g } from "../../index-WJdgKpVa.js";
import { b } from "../../index-wvw0O1v3.js";
import { getValue as u } from "../Selectbox/helper.js";
import { N as x, G as C, H as E, z as w, K as N } from "../../combobox-CUB-N452.js";
const L = (l, r) => r.type === "SEARCH" ? {
  ...l,
  query: r.query,
  filterList: l.list.filter((t) => t.label.toLowerCase().includes(r.query.toLowerCase()))
} : r.type === "SETVALUE" ? {
  ...l,
  value: r.value,
  selected: l.list.find((t) => u(t, l.valueField) === r.value) || null
} : r.type === "SETSELECT" ? {
  ...l,
  selected: r.selected,
  value: u(r.selected, l.valueField) + ""
} : l, S = ({ id: l, name: r, options: t, value: i = "", valueField: o = "value", onChange: m }, h) => {
  const [c, s] = d.useReducer(L, {
    list: t,
    query: "",
    filterList: t,
    value: i,
    valueField: o,
    selected: t.find((e) => {
      const n = u(e, o);
      return i ? n === i : !1;
    }) || null
  });
  return d.useImperativeHandle(h, () => ({
    search: (e) => s({ type: "SEARCH", query: e }),
    setValue: (e) => s({ type: "SETVALUE", value: e })
  })), /* @__PURE__ */ a(
    x,
    {
      value: c.selected,
      onChange: (e) => {
        s({
          type: "SETSELECT",
          selected: e
        }), m && m(e ? u(e, o) : "");
      },
      children: /* @__PURE__ */ f("div", { className: "relative", children: [
        /* @__PURE__ */ a(
          C,
          {
            onChange: (e) => s({ type: "SEARCH", query: e.target.value }),
            autoComplete: "off",
            displayValue: (e) => (e == null ? void 0 : e.label) || ""
          }
        ),
        /* @__PURE__ */ a(E, { className: "absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ a(
          v,
          {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          }
        ) }),
        /* @__PURE__ */ a(
          "input",
          {
            className: "!hidden",
            type: "text",
            id: l,
            name: r,
            readOnly: !0,
            value: c.value + ""
          }
        ),
        /* @__PURE__ */ a(
          g,
          {
            as: p,
            enter: "transition duration-100 ease-out",
            enterFrom: "scale-95 transform opacity-0",
            enterTo: "scale-100 transform opacity-100",
            leave: "transition duration-75 ease-in",
            leaveFrom: "scale-100 transform opacity-100",
            leaveTo: "scale-95 transform opacity-0",
            afterLeave: () => s({ type: "SEARCH", query: "" }),
            children: /* @__PURE__ */ a(w, { className: "absolute z-50 mt-5 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm", children: c.filterList.map((e) => /* @__PURE__ */ a(N, { as: p, value: e, children: ({ selected: n }) => /* @__PURE__ */ f(
              "li",
              {
                className: y(
                  "relative flex cursor-pointer justify-between px-5 py-4 text-black hover:bg-indigo-100",
                  n && "bg-indigo-100",
                  e.enable === !1 && "cursor-not-allowed opacity-50"
                ),
                children: [
                  /* @__PURE__ */ a("span", { className: "pl-5", children: e.label }),
                  n ? /* @__PURE__ */ a(
                    "span",
                    {
                      className: y(
                        "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                      ),
                      children: /* @__PURE__ */ a(b, { className: "h-5 w-5", "aria-hidden": "true" })
                    }
                  ) : null
                ]
              }
            ) }, e.id)) })
          }
        )
      ] })
    }
  );
}, j = d.forwardRef(S);
export {
  j as default
};
