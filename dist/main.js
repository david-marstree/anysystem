import { jsx as e, Fragment as p, jsxs as d } from "react/jsx-runtime";
import a from "react";
import { Container as i } from "./components/Container/Container.js";
import u from "./components/Button/Button.js";
import t from "./components/Label/Label.js";
import h from "./components/Input/Input.js";
import f from "./components/PasswordInput/PasswordInput.js";
import { Checkbox as b } from "./components/Checkbox/Checkbox.js";
import './assets/main.css';function S() {
  const [o, n] = a.useState(""), [s, m] = a.useState(""), [l, c] = a.useState(!1);
  return /* @__PURE__ */ e(p, { children: /* @__PURE__ */ d(i, { children: [
    /* @__PURE__ */ e(t, { label: "Username", children: /* @__PURE__ */ e(
      h,
      {
        name: "username",
        value: o,
        placeholder: "Username",
        onChange: (r) => n(r.target.value)
      }
    ) }),
    /* @__PURE__ */ e(t, { label: "Password", children: /* @__PURE__ */ e(
      f,
      {
        name: "password",
        value: s,
        placeholder: "Password",
        onChange: (r) => m(r.target.value)
      }
    ) }),
    /* @__PURE__ */ e(
      b,
      {
        label: "Remember me",
        name: "rememberMe",
        checked: l,
        onChange: (r) => c(r.target.checked)
      }
    ),
    /* @__PURE__ */ e("br", {}),
    /* @__PURE__ */ e(u, { variant: "primary", children: "Button" })
  ] }) });
}
export {
  S as default
};
