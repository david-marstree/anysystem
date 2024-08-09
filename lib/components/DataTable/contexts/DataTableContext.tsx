import React from "react";

import type { DataTableField, State, Action } from "../libs/type";

export type DataTableContextType<DataType extends object> = {
  selectable: boolean;
  chooseFieldable: boolean;
  fields: DataTableField<DataType>[];
  state: State<DataType>;
  dispatch: React.Dispatch<Action<DataType>>;
};

export const DataTableContext = React.createContext<DataTableContextType<any>>({
  selectable: false,
  chooseFieldable: false,
  fields: [],
  state: { DTChecked: [], DTData: [], DTShowFields: [] },
  dispatch: () => {},
});

export type DataTableProviderProps<DataType extends object> = {
  value: DataTableContextType<DataType>;
  children: React.ReactNode;
};

export const DataTableProvider = <DataType extends object>({
  children,
  value,
}: DataTableProviderProps<DataType>) => {
  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
};
