import { jsx as u } from "react/jsx-runtime";
import i from "react";
import { u as n } from "../../formik.esm-CcTVNwxQ.js";
import s from "./Input.js";
const c = ({ name: r, inputBefore: o, inputAfter: t, className: f, ...p }, e) => {
  const [m] = n(r);
  return /* @__PURE__ */ u(
    s,
    {
      ref: e,
      className: f,
      name: r,
      inputProps: m,
      inputBefore: o,
      inputAfter: t,
      ...p
    }
  );
}, I = i.forwardRef(c);
export {
  I as FormInput
};
