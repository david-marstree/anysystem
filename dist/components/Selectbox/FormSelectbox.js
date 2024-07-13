import { jsx as f } from "react/jsx-runtime";
import m from "react";
import { u as a } from "../../formik.esm-CcTVNwxQ.js";
import c from "./Selectbox.js";
const l = ({ name: e, ...r }, t) => {
  const [o] = a(e);
  return /* @__PURE__ */ f(
    c,
    {
      ref: t,
      ...o,
      value: (o == null ? void 0 : o.value) || "",
      ...r,
      name: e
    }
  );
}, i = m.forwardRef(l);
export {
  i as default
};
