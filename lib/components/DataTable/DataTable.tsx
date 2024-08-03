import React from "react";
import _ from "lodash";
import { CheckboxBase } from "../Checkbox";
import type { ValueKey, ValueNode } from "./type";
//hooks
// import { useLocalStorage } from "../../hooks/useLocalStorage";
//components
import DataRow from "./DataRow";

type State = {
  checked: boolean[];
};

type Action =
  | {
      type: "SELECT_ALL";
    }
  | {
      type: "SELECT_ROW";
      index: number;
    };

const reducer = (state: State, action: Action): State => {
  if (action.type === "SELECT_ALL") {
    return {
      ...state,
      checked: !state.checked.every((r) => r === true)
        ? state.checked.map(() => true)
        : state.checked.map(() => false),
    };
  }
  if (action.type === "SELECT_ROW") {
    return {
      ...state,
      checked: state.checked.map((r, i) => (i === action.index ? !r : r)),
    };
  }
  return state;
};

export type DataTableField = {
  key: string;
  label: string;
  value: ValueKey | ValueNode | string;
};

export type DataTableContextType = {
  selectable: boolean;
  fields: DataTableField[];
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const DataTableContext = React.createContext<DataTableContextType>({
  selectable: false,
  fields: [],
  state: { checked: [] },
  dispatch: () => {},
});

export type DataTableProps = {
  data: object[];
  fields: DataTableField[];
  selectable?: boolean;
};
const DataTable: React.FC<DataTableProps> = ({
  data,
  fields,
  selectable = false,
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    checked: new Array(data.length).fill(false),
  });

  return (
    <DataTableContext.Provider value={{ selectable, fields, state, dispatch }}>
      <table className="table">
        <thead>
          <tr>
            {selectable && (
              <th className="w-[50px]">
                <CheckboxBase
                  checked={state.checked.every((r) => r === true)}
                  intermediate={
                    state.checked.some((r) => r === true) &&
                    !state.checked.every((r) => r === true)
                  }
                  onChange={() => dispatch({ type: "SELECT_ALL" })}
                />
              </th>
            )}
            {fields.map((fields, i) => (
              <th key={i}>{fields.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, i) => <DataRow key={i} row={row} index={i} />)}
        </tbody>
      </table>
    </DataTableContext.Provider>
  );
};

export default DataTable;
