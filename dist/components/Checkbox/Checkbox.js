import { jsxs as n, jsx as c } from "react/jsx-runtime";
import { t as s } from "../../bundle-mjs-SHnj3fHy.js";
import { CheckboxBase as i } from "./CheckboxBase.js";
const x = ({
  className: t,
  name: r,
  label: a,
  hidden: o,
  isError: f,
  inputProps: l,
  ...e
}) => /* @__PURE__ */ n(
  "label",
  {
    className: s(
      "relative my-4 flex cursor-pointer select-none items-center gap-2 py-2 pr-3",
      "after:absolute after:left-1/2 after:top-1/2 after:-z-20 after:h-[calc(100%+12px)] after:w-[calc(100%+20px)] after:-translate-x-1/2 after:-translate-y-1/2 after:transform after:rounded-md after:bg-blue-100 after:opacity-0 after:transition-all after:content-[''] dark:after:bg-gray-800",
      "hover:after:opacity-100 hover:after:duration-200",
      o === !0 && "hidden"
    ),
    htmlFor: e.id,
    children: [
      /* @__PURE__ */ c(
        i,
        {
          isError: f,
          name: r,
          inputProps: l,
          className: t,
          ...e
        }
      ),
      a
    ]
  }
);
export {
  x as Checkbox
};
