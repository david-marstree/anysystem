import type { SelectOption, ValueField } from "./SelectboxBase";

export const getValue = <ListOption extends SelectOption>(
  option: ListOption,
  valueField: ValueField<ListOption>,
) => {
  if (valueField === "value" || valueField === "id" || valueField === "label") {
    return option?.[valueField] + "" + "";
  }
  if (typeof valueField === "function") {
    return valueField(option) + "";
  }
  return option.value + "";
};
