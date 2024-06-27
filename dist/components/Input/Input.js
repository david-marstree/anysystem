import { jsxs as u, jsx as r } from "react/jsx-runtime";
import { t as d } from "../../bundle-mjs-SHnj3fHy.js";
const y = ({
  name: l,
  inputProps: t,
  inputBefore: f,
  inputAfter: i,
  className: e,
  ...n
}) => /* @__PURE__ */ u(
  "div",
  {
    className: d(
      "flex w-full items-center",
      (e == null ? void 0 : e.container) && e.container
    ),
    children: [
      f && /* @__PURE__ */ r(
        "div",
        {
          className: d(
            "btn-before mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400"
          ),
          children: f
        }
      ),
      /* @__PURE__ */ r(
        "input",
        {
          ...t && t,
          ...n,
          value: (t == null ? void 0 : t.value) || (n == null ? void 0 : n.value) || "",
          className: d((e == null ? void 0 : e.input) && e.input),
          readOnly: n.readOnly,
          id: l
        }
      ),
      i && /* @__PURE__ */ r(
        "div",
        {
          className: d(
            "btn-after mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400"
          ),
          children: i
        }
      )
    ]
  }
);
export {
  y as default
};
