import React from "react";
import { AppContext } from "../contexts/AppContext";

export const useLocalStorage = (
  name: string,
  defaultValue?: boolean | string | number | object | null,
) => {
  const { appName } = React.useContext(AppContext);

  const key = React.useMemo(() => {
    return `${appName}-localStorage-persist`;
  }, [appName]);

  const totalValue = React.useMemo(() => {
    const value = window.localStorage.getItem(key);
    if (!value) {
      return {};
    }
    return JSON.parse(value);
  }, [key, localStorage]);

  const set = (value: object | null | string | number | boolean) => {
    if (value === null) {
      remove();
      return;
    }
    const json = JSON.stringify({ ...totalValue, [name]: value });
    window.localStorage.setItem(key, json);
  };

  const value = React.useMemo(() => {
    if (
      defaultValue !== undefined &&
      (totalValue[name] === undefined || totalValue[name] === null)
    ) {
      set(defaultValue);
      return defaultValue;
    }
    return totalValue[name];
  }, [totalValue, name, defaultValue]);

  const remove = React.useCallback(() => {
    window.localStorage.setItem(
      key,
      JSON.stringify(
        totalValue.reduce(
          (
            acc: object,
            v: string | object | number | boolean | null,
            k: string,
          ) => {
            if (k === name) {
              return acc;
            }
            return { ...acc, [k]: v };
          },
          {},
        ),
      ),
    );
  }, [key]);

  return [value, set, remove, totalValue];
};
