import React from "react";
import _ from "lodash";
import { FormBuilderRow } from "../type";

export type FormBuilderContext = {
  values: FormBuilderRow[];
  setValues: React.Dispatch<React.SetStateAction<FormBuilderRow[]>>;
  removeItem: (id: string) => void;
};

export const FormBuilderContext = React.createContext<FormBuilderContext>({
  values: [],
  setValues: () => {},
  removeItem: () => {},
});

export type FormBuilderProviderProps = {
  children: React.ReactNode;
  values: FormBuilderRow[];
  setValues: React.Dispatch<React.SetStateAction<FormBuilderRow[]>>;
};

export const FormBuilderProvider: React.FC<FormBuilderProviderProps> = ({
  children,
  values,
  setValues,
}) => {
  //removeItem
  const removeItem = (id: string) => {
    //find values row index which data has id
    let realValues = [...values];
    const rowIndex = realValues.findIndex((v) =>
      _.some(v.data, (d) => d.id === id)
    );
    if (rowIndex === -1) return;
    realValues[rowIndex].data = realValues[rowIndex].data.filter(
      (d) => d.id !== id
    );
    if (realValues[rowIndex].data.length === 0) {
      realValues.splice(rowIndex, 1);
    }

    setValues(realValues);
  };

  return (
    <FormBuilderContext.Provider value={{ values, setValues, removeItem }}>
      {children}
    </FormBuilderContext.Provider>
  );
};
