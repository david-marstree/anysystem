import { jsx as d } from "react/jsx-runtime";
import a from "react";
import { t as g } from "../../bundle-mjs-SHnj3fHy.js";
const i = (r, e) => {
  if (!r && !e) return "";
  r || (r = {
    sm: a.Children.count(e),
    md: a.Children.count(e),
    lg: a.Children.count(e)
  });
  const s = [];
  switch (r == null ? void 0 : r.sm) {
    case 1:
      s.push("sm:grid-cols-1");
      break;
    case 2:
      s.push("sm:grid-cols-2");
      break;
    case 3:
      s.push("sm:grid-cols-3");
      break;
    case 4:
      s.push("sm:grid-cols-4");
      break;
    case 5:
      s.push("sm:grid-cols-5");
      break;
    case 6:
      s.push("sm:grid-cols-6");
      break;
    case 7:
      s.push("sm:grid-cols-7");
      break;
    case 8:
      s.push("sm:grid-cols-8");
      break;
    case 9:
      s.push("sm:grid-cols-9");
      break;
    case 10:
      s.push("sm:grid-cols-10");
      break;
    case 11:
      s.push("sm:grid-cols-11");
      break;
    case 12:
      s.push("sm:grid-cols-12");
      break;
  }
  switch (r == null ? void 0 : r.md) {
    case 1:
      s.push("md:grid-cols-1");
      break;
    case 2:
      s.push("md:grid-cols-2");
      break;
    case 3:
      s.push("md:grid-cols-3");
      break;
    case 4:
      s.push("md:grid-cols-4");
      break;
    case 5:
      s.push("md:grid-cols-5");
      break;
    case 6:
      s.push("md:grid-cols-6");
      break;
    case 7:
      s.push("md:grid-cols-7");
      break;
    case 8:
      s.push("md:grid-cols-8");
      break;
    case 9:
      s.push("md:grid-cols-9");
      break;
    case 10:
      s.push("md:grid-cols-10");
      break;
    case 11:
      s.push("md:grid-cols-11");
      break;
    case 12:
      s.push("md:grid-cols-12");
      break;
  }
  switch (r == null ? void 0 : r.lg) {
    case 1:
      s.push("lg:grid-cols-1");
      break;
    case 2:
      s.push("lg:grid-cols-2");
      break;
    case 3:
      s.push("lg:grid-cols-3");
      break;
    case 4:
      s.push("lg:grid-cols-4");
      break;
    case 5:
      s.push("lg:grid-cols-5");
      break;
    case 6:
      s.push("lg:grid-cols-6");
      break;
    case 7:
      s.push("lg:grid-cols-7");
      break;
    case 8:
      s.push("lg:grid-cols-8");
      break;
    case 9:
      s.push("lg:grid-cols-9");
      break;
    case 10:
      s.push("lg:grid-cols-10");
      break;
    case 11:
      s.push("lg:grid-cols-11");
      break;
    case 12:
      s.push("lg:grid-cols-12");
      break;
  }
  return s.join(" ");
}, o = ({ column: r, className: e, children: s }) => {
  const c = i(r, s);
  return /* @__PURE__ */ d(
    "div",
    {
      className: g("my-row grid md:gap-2", c, e),
      children: s
    }
  );
};
export {
  o as default
};
