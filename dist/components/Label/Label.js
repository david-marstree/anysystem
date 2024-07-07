import { jsxs as e, jsx as r } from "react/jsx-runtime";
import { t as i } from "../../bundle-mjs-SHnj3fHy.js";
import { c as m } from "../../index-wvw0O1v3.js";
const n = ({
  label: l,
  className: s,
  htmlFor: c,
  isError: t = !1,
  errorMessage: a,
  children: d
}) => /* @__PURE__ */ e("div", { className: "flex flex-col", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: i(
        "relative mb-2 mt-2 flex w-full flex-col rounded border border-gray-400",
        "form-group",
        t && "error",
        s
      ),
      children: [
        l && /* @__PURE__ */ r(
          "label",
          {
            className: "hidden text-gray-600 opacity-0 dark:text-white",
            htmlFor: c,
            children: l
          }
        ),
        d
      ]
    }
  ),
  t && a && /* @__PURE__ */ e("span", { className: "flex items-center gap-1 text-sm text-red-600", children: [
    /* @__PURE__ */ r("div", { className: "w-4", children: /* @__PURE__ */ r(m, {}) }),
    a
  ] })
] });
export {
  n as default
};
