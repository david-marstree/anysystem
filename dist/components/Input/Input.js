import { jsxs as x, jsx as d } from "react/jsx-runtime";
import c from "react";
import { t as n } from "../../bundle-mjs-SHnj3fHy.js";
const v = ({ name: l, inputProps: t, inputBefore: f, inputAfter: i, className: e, ...r }, u) => /* @__PURE__ */ x(
  "div",
  {
    className: n(
      "flex w-full items-center",
      (e == null ? void 0 : e.container) && e.container
    ),
    children: [
      f && /* @__PURE__ */ d(
        "div",
        {
          className: n(
            "btn-before mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400"
          ),
          children: f
        }
      ),
      /* @__PURE__ */ d(
        "input",
        {
          ref: u,
          ...t && t,
          ...r,
          value: (t == null ? void 0 : t.value) || (r == null ? void 0 : r.value) || "",
          className: n((e == null ? void 0 : e.input) && e.input),
          readOnly: r.readOnly,
          id: l
        }
      ),
      i && /* @__PURE__ */ d(
        "div",
        {
          className: n(
            "btn-after mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400"
          ),
          children: i
        }
      )
    ]
  }
), j = c.forwardRef(v);
export {
  j as default
};
