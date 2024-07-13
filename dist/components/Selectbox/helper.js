const c = (f, r) => r === "value" || r === "id" || r === "label" ? (f == null ? void 0 : f[r]) + "" : typeof r == "function" ? r(f) + "" : f.value + "";
export {
  c as getValue
};
