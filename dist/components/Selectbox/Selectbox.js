import { jsx as r } from "react/jsx-runtime";
import f from "react";
import l from "./SelectboxBase.js";
import m from "./SelectboxMultiple.js";
const a = ({ multiple: o = !1, ...e }, t) => o === !0 ? /* @__PURE__ */ r(
  m,
  {
    ref: t,
    ...e
  }
) : /* @__PURE__ */ r(
  l,
  {
    ref: t,
    ...e
  }
), s = f.forwardRef(a);
export {
  s as default
};
