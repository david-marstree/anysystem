import { jsx as r, jsxs as m } from "react/jsx-runtime";
import f, { Fragment as h } from "react";
import { _ as x } from "../../lodash-XYp3qmxI.js";
import { t as v } from "../../bundle-mjs-SHnj3fHy.js";
import { H as C, X as b } from "../../index-vZEwQcSd.js";
import { b as w } from "../../index-wvw0O1v3.js";
import { a as N } from "../../index-C197ia6B.js";
import { getValue as o } from "../Selectbox/helper.js";
import { N as S, G as L, H as T, z as q, K as A } from "../../combobox-BFmS_epO.js";
const R = (l, t) => {
  if (t.type === "SEARCH")
    return {
      ...l,
      query: t.query,
      filterList: l.list.filter((a) => a.label.toLowerCase().includes(t.query.toLowerCase()))
    };
  if (t.type === "SETVALUE")
    return {
      ...l,
      value: t.value,
      selected: l.list.filter((a) => {
        const n = o(a, l.valueField);
        return t.value.includes(n);
      }) || [],
      query: ""
    };
  if (t.type === "SETSELECT")
    return {
      ...l,
      selected: t.selected,
      value: t.selected.map((a) => o(a, l.valueField)),
      query: ""
    };
  if (t.type === "REMOVESELECT") {
    const a = o(t.selected, l.valueField), n = l.value.filter((u) => u !== a);
    return {
      ...l,
      value: n,
      selected: l.selected ? l.selected.filter((u) => o(u, l.valueField) !== a) : []
    };
  }
  return l;
}, H = ({
  id: l,
  name: t,
  value: a = [],
  options: n,
  valueField: u = "value",
  onChange: p,
  placeholder: E
}, g) => {
  var y;
  const [s, c] = f.useReducer(R, {
    query: "",
    list: n,
    filterList: n,
    value: a || [],
    valueField: u,
    selected: n.filter((e) => {
      const i = o(e, u);
      return x.some(a, (d) => d + "" == i + "");
    }) || []
  });
  return f.useImperativeHandle(g, () => ({
    search: (e) => {
      c({ type: "SEARCH", query: e });
    },
    setValue: (e) => {
      c({ type: "SETVALUE", value: e });
    }
  })), /* @__PURE__ */ r(
    S,
    {
      value: s.selected,
      onChange: (e) => {
        c({
          type: "SETSELECT",
          selected: e
        });
        const i = (e == null ? void 0 : e.map((d) => o(d, u))) || [];
        p && p(i);
      },
      multiple: !0,
      children: /* @__PURE__ */ m("div", { className: "relative flex gap-1", children: [
        s.selected.length > 0 && /* @__PURE__ */ r("ul", { className: "form-control flex gap-1", children: (y = s.selected) == null ? void 0 : y.map((e, i) => /* @__PURE__ */ r("li", { children: /* @__PURE__ */ m("div", { className: "flex rounded bg-indigo-50 p-1", children: [
          /* @__PURE__ */ r("span", { className: "whitespace-nowrap text-xs", children: e.label }),
          /* @__PURE__ */ r(
            "button",
            {
              onClick: () => c({ type: "REMOVESELECT", selected: e }),
              children: /* @__PURE__ */ r(N, { fontSize: 12, className: "font-bold" })
            }
          )
        ] }) }, i)) }),
        /* @__PURE__ */ r(
          L,
          {
            placeholder: E,
            value: s.query,
            onChange: (e) => c({ type: "SEARCH", query: e.target.value }),
            onKeyDown: (e) => {
              e.key === "Backspace" && s.query === "" && s.selected.length > 0 && c({
                type: "REMOVESELECT",
                selected: s.selected[s.selected.length - 1]
              });
            },
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ r(T, { className: "absolute inset-y-0 right-0 flex items-center pr-2", children: /* @__PURE__ */ r(
          C,
          {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          }
        ) }),
        /* @__PURE__ */ r(
          "input",
          {
            className: "!hidden",
            type: "text",
            id: l,
            name: t,
            readOnly: !0,
            value: s.value + ""
          }
        ),
        /* @__PURE__ */ r(
          b,
          {
            as: h,
            enter: "transition duration-100 ease-out",
            enterFrom: "scale-95 transform opacity-0",
            enterTo: "scale-100 transform opacity-100",
            leave: "transition duration-75 ease-in",
            leaveFrom: "scale-100 transform opacity-100",
            leaveTo: "scale-95 transform opacity-0",
            afterLeave: () => c({ type: "SEARCH", query: "" }),
            children: /* @__PURE__ */ r(q, { className: "absolute mt-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm", children: s.filterList.map((e) => /* @__PURE__ */ r(A, { as: h, value: e, children: ({ selected: i }) => /* @__PURE__ */ m(
              "li",
              {
                className: v(
                  "relative flex cursor-pointer justify-between px-5 py-4 text-black hover:bg-indigo-100",
                  i && "bg-indigo-100",
                  e.enable === !1 && "cursor-not-allowed opacity-50"
                ),
                children: [
                  /* @__PURE__ */ r("span", { className: "pl-5", children: e.label }),
                  i ? /* @__PURE__ */ r(
                    "span",
                    {
                      className: v(
                        "absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                      ),
                      children: /* @__PURE__ */ r(w, { className: "h-5 w-5", "aria-hidden": "true" })
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
}, _ = f.forwardRef(H);
export {
  _ as default
};
