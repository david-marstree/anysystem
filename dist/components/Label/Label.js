import { jsxs as e, jsx as r } from "react/jsx-runtime";
import { t as s } from "../../bundle-mjs-SHnj3fHy.js";
import { c } from "../../index-wvw0O1v3.js";
const b = ({
  label: l,
  className: o,
  htmlFor: m,
  isError: t = !1,
  errorMessage: a,
  type: d = "border",
  children: i
}) => /* @__PURE__ */ e("div", { className: "flex flex-col", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: s(
        "relative mb-2 mt-2 flex w-full flex-col ",
        d === "border" && "rounded border border-gray-400",
        "form-group",
        t && "error",
        o
      ),
      children: [
        l && /* @__PURE__ */ r(
          "label",
          {
            className: s(
              d === "border" && "hidden text-gray-600 opacity-0 dark:text-white",
              "text-sm font-semibold mb-1"
            ),
            htmlFor: m,
            children: l
          }
        ),
        i
      ]
    }
  ),
  t && a && /* @__PURE__ */ e("span", { className: "flex items-center gap-1 text-sm text-red-600", children: [
    /* @__PURE__ */ r("div", { className: "w-4", children: /* @__PURE__ */ r(c, {}) }),
    a
  ] })
] });
export {
  b as default
};
