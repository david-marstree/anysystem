import { jsx as m } from "react/jsx-runtime";
import { u as p } from "../../formik.esm-CcTVNwxQ.js";
import u from "./PasswordInput.js";
const d = ({
  type: r = "password",
  name: s,
  ...t
}) => {
  const [o] = p(s);
  return /* @__PURE__ */ m(
    u,
    {
      type: r,
      ...o,
      value: (o == null ? void 0 : o.value) || "",
      ...t
    }
  );
};
export {
  d as FormPasswordInput
};
