import type { SelectOption, ValueField } from "./Selectbox";

export const getValue = (option: SelectOption, valueField: ValueField) => {
  if (valueField === "value" || valueField === "id" || valueField === "label") {
    return option[valueField] + "";
  }
  if (typeof valueField === "function") {
    return valueField(option) + "";
  }
  return option.value + "";
};
