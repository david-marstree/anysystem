import { jsx as l } from "react/jsx-runtime";
import { u as n } from "../../formik.esm-CcTVNwxQ.js";
import p from "./Label.js";
const t = ({
  label: o,
  className: e,
  htmlFor: s = "",
  children: i
}) => {
  const [, r] = n(s);
  return /* @__PURE__ */ l(
    p,
    {
      label: o,
      className: e,
      isError: !!(r != null && r.touched && (r != null && r.error)),
      errorMessage: r == null ? void 0 : r.error,
      children: i
    }
  );
};
export {
  t as FormLabel
};
