import { jsxs as a, jsx as s } from "react/jsx-runtime";
import i from "react";
import { t as n } from "../../bundle-mjs-SHnj3fHy.js";
import { F as d, a as f } from "../../index-AJeoxW6G.js";
const l = ({
  type: r = "password",
  ...t
}) => {
  const [e, o] = i.useState(r !== "password");
  return /* @__PURE__ */ a("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ s("input", { type: e ? "text" : "password", ...t }),
    /* @__PURE__ */ s(
      "a",
      {
        className: n(
          "mr-2 flex h-9 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600",
          "hover:bg-gray-100 hover:duration-200",
          "btn-show-password"
        ),
        onClick: () => o(!e),
        children: e ? /* @__PURE__ */ s(d, { fontSize: 14 }) : /* @__PURE__ */ s(f, { fontSize: 14 })
      }
    )
  ] });
};
export {
  l as default
};
