import { jsx as e } from "react/jsx-runtime";
import m from "react";
import { u as p } from "../../formik.esm-CcTVNwxQ.js";
import u from "./PasswordInput.js";
const f = ({ type: o = "password", name: s, ...t }, a) => {
  const [r] = p(s);
  return /* @__PURE__ */ e(
    u,
    {
      ref: a,
      type: o,
      ...r,
      value: (r == null ? void 0 : r.value) || "",
      ...t
    }
  );
}, i = m.forwardRef(f);
export {
  i as FormPasswordInput
};
