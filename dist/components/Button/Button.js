import { jsx as o } from "react/jsx-runtime";
import e from "react";
import { t as d } from "../../bundle-mjs-SHnj3fHy.js";
const c = ({ children: f, className: s, variant: t = "default", size: r = "md", ...u }, n) => {
  const a = e.useRef(null), l = e.useMemo(() => {
    switch (t) {
      case "default":
        return "bg-gray-400 text-white after:bg-white";
      case "primary":
        return "bg-blue-600 text-white after:bg-white";
      default:
        return "bg-gray-400 text-white after:bg-white";
    }
  }, [t]), i = e.useMemo(() => {
    switch (r) {
      case "xs":
        return "px-4 py-2 text-xs";
      case "sm":
        return "px-4 py-2 text-sm";
      case "md":
        return "px-4 py-2";
      case "lg":
        return "px-6 py-3";
      default:
        return "px-4 py-2";
    }
  }, [r]);
  return e.useImperativeHandle(
    n,
    () => a.current
  ), /* @__PURE__ */ o(
    "button",
    {
      ref: a,
      className: d(
        "relative overflow-hidden rounded",
        "after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:rounded-l after:bg-gray-400 after:opacity-0",
        //after:
        "disabled:cursor-not-allowed disabled:opacity-50",
        //disabled
        "hover:after:w-full hover:after:transform hover:after:opacity-20 hover:after:transition-all hover:after:duration-300",
        //hover:
        l,
        i,
        s
      ),
      ...u,
      children: /* @__PURE__ */ o("span", { className: "relative z-10", children: f })
    }
  );
}, g = e.forwardRef(c);
export {
  g as default
};
