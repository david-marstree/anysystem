import React from "react";

import type { DataTableField, State, Action } from "../libs/type";

export type DataTableContextType = {
  selectable: boolean;
  chooseFieldable: boolean;
  fields: DataTableField[];
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const DataTableContext = React.createContext<DataTableContextType>({
  selectable: false,
  chooseFieldable: false,
  fields: [],
  state: { DTChecked: [], DTData: [], DTShowFields: [] },
  dispatch: () => {},
});

export const DataTableProvider = DataTableContext.Provider;
