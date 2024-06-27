import { jsx as p } from "react/jsx-runtime";
import { t as l } from "../../bundle-mjs-SHnj3fHy.js";
const o = (a) => {
  if (!a)
    return "";
  const s = [];
  switch (a.sm) {
    case 1:
      s.push("sm:col-span-1");
      break;
    case 2:
      s.push("sm:col-span-2");
      break;
    case 3:
      s.push("sm:col-span-3");
      break;
    case 4:
      s.push("sm:col-span-4");
      break;
    case 5:
      s.push("sm:col-span-5");
      break;
    case 6:
      s.push("sm:col-span-6");
      break;
    case 7:
      s.push("sm:col-span-7");
      break;
    case 8:
      s.push("sm:col-span-8");
      break;
    case 9:
      s.push("sm:col-span-9");
      break;
    case 10:
      s.push("sm:col-span-10");
      break;
    case 11:
      s.push("sm:col-span-11");
      break;
    case 12:
      s.push("sm:col-span-12");
      break;
  }
  switch (a.md) {
    case 1:
      s.push("md:col-span-1");
      break;
    case 2:
      s.push("md:col-span-2");
      break;
    case 3:
      s.push("md:col-span-3");
      break;
    case 4:
      s.push("md:col-span-4");
      break;
    case 5:
      s.push("md:col-span-5");
      break;
    case 6:
      s.push("md:col-span-6");
      break;
    case 7:
      s.push("md:col-span-7");
      break;
    case 8:
      s.push("md:col-span-8");
      break;
    case 9:
      s.push("md:col-span-9");
      break;
    case 10:
      s.push("md:col-span-10");
      break;
    case 11:
      s.push("md:col-span-11");
      break;
    case 12:
      s.push("md:col-span-12");
      break;
  }
  switch (a.lg) {
    case 1:
      s.push("lg:col-span-1");
      break;
    case 2:
      s.push("lg:col-span-2");
      break;
    case 3:
      s.push("lg:col-span-3");
      break;
    case 4:
      s.push("lg:col-span-4");
      break;
    case 5:
      s.push("lg:col-span-5");
      break;
    case 6:
      s.push("lg:col-span-6");
      break;
    case 7:
      s.push("lg:col-span-7");
      break;
    case 8:
      s.push("lg:col-span-8");
      break;
    case 9:
      s.push("lg:col-span-9");
      break;
    case 10:
      s.push("lg:col-span-10");
      break;
    case 11:
      s.push("lg:col-span-11");
      break;
    case 12:
      s.push("lg:col-span-12");
      break;
  }
  return s.join(" ");
}, u = ({
  span: a = { sm: 1, md: 1 },
  className: s,
  children: e
}) => {
  const c = o(a);
  return /* @__PURE__ */ p("div", { className: l("my-col", c, s), children: e });
};
export {
  u as default
};
