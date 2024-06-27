import { jsx as m } from "react/jsx-runtime";
import { u as i } from "../../formik.esm-CcTVNwxQ.js";
import u from "./Input.js";
const l = ({
  name: o,
  inputBefore: r,
  inputAfter: t,
  className: e,
  ...p
}) => {
  const [s] = i(o);
  return /* @__PURE__ */ m(
    u,
    {
      name: o,
      inputProps: s,
      inputBefore: r,
      inputAfter: t,
      ...p
    }
  );
};
export {
  l as FormInput
};
