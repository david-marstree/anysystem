import { jsxs as v, jsx as f } from "react/jsx-runtime";
import d from "react";
import { t as r } from "../../bundle-mjs-SHnj3fHy.js";
const y = ({ name: c, inputProps: t, inputBefore: l, inputAfter: u, className: e, ...n }, x) => {
  const i = d.useRef(null);
  return d.useImperativeHandle(
    x,
    () => i.current
  ), /* @__PURE__ */ v(
    "div",
    {
      className: r(
        "flex w-full items-center",
        (e == null ? void 0 : e.container) && e.container
      ),
      children: [
        l && /* @__PURE__ */ f(
          "div",
          {
            className: r(
              "btn-before mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400"
            ),
            children: l
          }
        ),
        /* @__PURE__ */ f(
          "input",
          {
            ref: i,
            ...t && t,
            ...n,
            value: (t == null ? void 0 : t.value) || (n == null ? void 0 : n.value) || "",
            className: r((e == null ? void 0 : e.input) && e.input),
            readOnly: n.readOnly,
            id: c
          }
        ),
        u && /* @__PURE__ */ f(
          "div",
          {
            className: r(
              "btn-after mr-2 flex h-9 w-10 items-center justify-center rounded-full text-gray-400"
            ),
            children: u
          }
        )
      ]
    }
  );
}, a = d.forwardRef(y);
export {
  a as default
};
