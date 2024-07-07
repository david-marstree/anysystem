const f = (t, r) => r === "value" || r === "id" || r === "label" ? t[r] + "" : typeof r == "function" ? r(t) + "" : t.value + "";
export {
  f as getValue
};
