import { jsx as n } from "react/jsx-runtime";
import o from "react";
import { u as m } from "../../formik.esm-CcTVNwxQ.js";
import p from "./PasswordInput.js";
const f = ({ type: t = "password", name: s, ...u }, a) => {
  const e = o.useRef(null), [r] = m(s);
  return o.useImperativeHandle(
    a,
    () => e.current
  ), /* @__PURE__ */ n(
    p,
    {
      ref: e,
      type: t,
      ...r,
      value: (r == null ? void 0 : r.value) || "",
      ...u
    }
  );
}, w = o.forwardRef(f);
export {
  w as FormPasswordInput
};
