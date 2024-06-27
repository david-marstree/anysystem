import { jsxs as a, jsx as e } from "react/jsx-runtime";
import i from "react";
import { t as n } from "../../bundle-mjs-SHnj3fHy.js";
import { F as d, a as f } from "../../index-AJeoxW6G.js";
const c = ({
  type: r = "password",
  ...t
}) => {
  const [s, o] = i.useState(r !== "password");
  return /* @__PURE__ */ a("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ e("input", { type: s ? "text" : "password", ...t }),
    /* @__PURE__ */ e(
      "a",
      {
        className: n(
          "mr-2 flex h-9 w-10 cursor-pointer items-center justify-center rounded-full text-gray-600",
          "hover:bg-gray-100 hover:duration-200",
          "btn-show-password"
        ),
        onClick: () => o(!s),
        children: s ? /* @__PURE__ */ e(d, { fontSize: 14 }) : /* @__PURE__ */ e(f, { fontSize: 14 })
      }
    )
  ] });
};
export {
  c as default
};
