import { jsx as a } from "react/jsx-runtime";
import e from "react";
import { t as i } from "../../bundle-mjs-SHnj3fHy.js";
const d = ({ children: o, className: f, variant: t = "default", size: r = "md", ...s }, u) => {
  const l = e.useMemo(() => {
    switch (t) {
      case "default":
        return "bg-gray-400 text-white after:bg-white";
      case "primary":
        return "bg-blue-600 text-white after:bg-white";
      default:
        return "bg-gray-400 text-white after:bg-white";
    }
  }, [t]), n = e.useMemo(() => {
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
  return /* @__PURE__ */ a(
    "button",
    {
      ref: u,
      className: i(
        "relative overflow-hidden rounded",
        "after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:rounded-l after:bg-gray-400 after:opacity-0",
        //after:
        "disabled:cursor-not-allowed disabled:opacity-50",
        //disabled
        "hover:after:w-full hover:after:transform hover:after:opacity-20 hover:after:transition-all hover:after:duration-300",
        //hover:
        l,
        n,
        f
      ),
      ...s,
      children: /* @__PURE__ */ a("span", { className: "relative z-10", children: o })
    }
  );
}, m = e.forwardRef(d);
export {
  m as default
};
