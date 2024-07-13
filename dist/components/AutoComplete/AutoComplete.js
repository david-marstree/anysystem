import { jsx as t, Fragment as m } from "react/jsx-runtime";
import f from "react";
import l from "./AutoCompleteBase.js";
import u from "./AutoCompleteMultiple.js";
const p = ({ multiple: r, ...e }, o) => /* @__PURE__ */ t(m, { children: r === !0 ? /* @__PURE__ */ t(
  u,
  {
    ref: o,
    ...e
  }
) : /* @__PURE__ */ t(
  l,
  {
    ref: o,
    ...e
  }
) }), s = f.forwardRef(p);
export {
  l as AutoCompleteBase,
  u as AutoCompleteMultiple,
  s as default
};
