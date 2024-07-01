import { jsx as s } from "react/jsx-runtime";
import r from "react";
import { u as i } from "../../formik.esm-CcTVNwxQ.js";
import c from "./Input.js";
const l = ({ name: t, inputBefore: o, inputAfter: u, className: f, ...n }, p) => {
  const [m] = i(t), e = r.useRef(null);
  return r.useImperativeHandle(
    p,
    () => e.current
  ), /* @__PURE__ */ s(
    c,
    {
      ref: e,
      className: f,
      name: t,
      inputProps: m,
      inputBefore: o,
      inputAfter: u,
      ...n
    }
  );
}, F = r.forwardRef(l);
export {
  F as FormInput
};
