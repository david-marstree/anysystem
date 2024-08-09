import _ from "lodash";
import type { ValueKey, ValueNode } from "./type";

export const isValueKey = (key: string): key is ValueKey => {
  return key.startsWith("$");
};

type ReduceObject = {
  data: unknown;
  isArray: boolean;
  key: string;
};

export const getValueByKey = <DataType extends object>(
  data: DataType,
  key: ValueKey | ValueNode<DataType> | string,
): unknown => {
  if (!_.isPlainObject(data) && !_.isArray(data)) {
    return data;
  }
  if (typeof key === "function") {
    return key(data);
  }
  if (!isValueKey(key)) {
    return key;
  }
  const result = key
    .replace(/^\$\./, "")
    .split(".")
    .reduce(
      (acc: ReduceObject, cur: string) => {
        if (!_.isPlainObject(acc.data) && !_.isArray(acc.data)) {
          return { ...acc, key: "" };
        }
        if (_.isArray(acc.data)) {
          return {
            ...acc,
            isArray: true,
            key: acc.key + "." + cur,
          };
        }
        if (cur === "@") {
          return {
            ...acc,
            key: "$",
            isArray: false,
          };
        }
        return {
          ...acc,
          data: acc?.data?.[cur as keyof typeof acc.data],
        };
      },
      { data, isArray: false, key: "" },
    );

  if (result.isArray === true) {
    return _.map(result.data as object[], (d) => getValueByKey(d, result.key));
  }

  return result.data;
};
