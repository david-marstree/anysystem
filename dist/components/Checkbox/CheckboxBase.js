import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { A as d } from "../../index-TmOGnUkt.js";
import { t as c } from "../../bundle-mjs-SHnj3fHy.js";
const s = ({
  className: a,
  isError: o,
  inputProps: l,
  ...e
}) => /* @__PURE__ */ t("div", { className: "relative h-5 w-5 overflow-hidden rounded", children: [
  /* @__PURE__ */ r(
    "input",
    {
      type: "checkbox",
      className: c(
        "relative z-10",
        "peer block h-full w-full cursor-pointer appearance-none rounded border-2 border-gray-400 focus:outline-4 focus:outline-blue-500",
        "checked:border-blue-500",
        o && "border-red-500",
        a
      ),
      value: (l == null ? void 0 : l.value) || (e == null ? void 0 : e.value) || "",
      ...e
    }
  ),
  /* @__PURE__ */ r("span", { className: "absolute left-1/2 top-1/2 hidden h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center overflow-hidden rounded font-bold text-blue-500 peer-checked:flex", children: /* @__PURE__ */ r(d, { className: "h-full w-full rounded" }) })
] });
export {
  s as CheckboxBase
};
