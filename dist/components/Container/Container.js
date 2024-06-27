import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { t as l } from "../../bundle-mjs-SHnj3fHy.js";
import d from "../Component.js";
const r = ({
  className: a,
  ...t
}) => /* @__PURE__ */ n("div", { className: l("mx-auto w-full max-w-lg", a), children: [
  (t == null ? void 0 : t.data) && t.data.map((m, e) => /* @__PURE__ */ i(d, { ...m }, e)),
  t == null ? void 0 : t.children
] });
export {
  r as Container
};
