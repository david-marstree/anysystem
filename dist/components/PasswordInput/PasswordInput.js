import { jsxs as i, jsx as e } from "react/jsx-runtime";
import r from "react";
import { t as d } from "../../bundle-mjs-SHnj3fHy.js";
import { F as u, a as l } from "../../index-AJeoxW6G.js";
const p = ({ type: o = "password", ...a }, n) => {
  const t = r.useRef(null), [s, f] = r.useState(o !== "password");
  return r.useImperativeHandle(
    n,
    () => t.current
  ), /* @__PURE__ */ i("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ e(
      "input",
      {
        ref: t,
        type: s ? "text" : "password",
        ...a
      }
    ),
    /* @__PURE__ */ e(
      "a",
      {
        className: d(
          "mr-2 flex h-9 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600",
          "hover:bg-gray-100 hover:duration-200",
          "btn-show-password"
        ),
        onClick: () => f(!s),
        children: s ? /* @__PURE__ */ e(u, { fontSize: 14 }) : /* @__PURE__ */ e(l, { fontSize: 14 })
      }
    )
  ] });
}, x = r.forwardRef(p);
export {
  x as default
};
