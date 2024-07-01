import { jsxs as f, jsx as r } from "react/jsx-runtime";
import e from "react";
import { t as i } from "../../bundle-mjs-SHnj3fHy.js";
import { F as d, a as w } from "../../index-AJeoxW6G.js";
const p = ({ type: t = "password", ...o }, a) => {
  const [s, n] = e.useState(t !== "password");
  return /* @__PURE__ */ f("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ r(
      "input",
      {
        ref: a,
        type: s ? "text" : "password",
        ...o
      }
    ),
    /* @__PURE__ */ r(
      "a",
      {
        className: i(
          "mr-2 flex h-9 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600",
          "hover:bg-gray-100 hover:duration-200",
          "btn-show-password"
        ),
        onClick: () => n(!s),
        children: s ? /* @__PURE__ */ r(d, { fontSize: 14 }) : /* @__PURE__ */ r(w, { fontSize: 14 })
      }
    )
  ] });
}, h = e.forwardRef(p);
export {
  h as default
};
