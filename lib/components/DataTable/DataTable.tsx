import React from "react";
import _ from "lodash";
import type { State, Action, DataTableField } from "./libs/type";
//contexts
import {
  DataTableProvider,
  DataTableContextType,
} from "./contexts/DataTableContext";
//components
import DataTableHead from "./components/DataTableHead";
import DataTableBody from "./components/DataTableBody";
import FieldSelectbox from "./components/FieldSelectbox";
//hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
//styles
import "./DataTable.less";

const reducer = <DataType extends object>(
  state: State<DataType>,
  action: Action<DataType>
): State<DataType> => {
  if (action.type === "SELECT_ALL") {
    return {
      ...state,
      DTChecked: !state.DTChecked.every((r) => r === true)
        ? state.DTChecked.map(() => true)
        : state.DTChecked.map(() => false),
    };
  }
  if (action.type === "SELECT_ROW") {
    return {
      ...state,
      DTChecked: state.DTChecked.map((r, i) => (i === action.index ? !r : r)),
    };
  }

  if (action.type === "SELECT_FIELDKEY") {
    return {
      ...state,
      DTShowFields: state.DTShowFields.includes(action.fieldKey)
        ? state.DTShowFields.filter((field) => field !== action.fieldKey)
        : _.uniq([...state.DTShowFields, action.fieldKey]),
    };
  }
  if (action.type === "SET_FIELD") {
    return {
      ...state,
      DTShowFields: action.fields.map((field) => field.key),
    };
  }
  return state;
};

export type DataTableProps<DataType extends object> = {
  data: DataType[];
  fields: DataTableField<DataType>[];
  selectable?: boolean;
  chooseFieldable?: boolean;
  name?: string;
};
const DataTable = <DataType extends object>({
  name = "",
  data,
  fields,
  selectable = false,
  chooseFieldable = false,
}: DataTableProps<DataType>) => {
  const [showFields, setShowFields] = useLocalStorage(
    `tableName-path-${window.location.pathname.replace(/\//g, "-")}-name-${name}`,
    fields.every((field) => Boolean(field?.default) !== true)
      ? fields.map((field) => field.key)
      : fields
          .filter((field) => field.default === true)
          .map((field) => field.key)
  );

  const [state, dispatch] = React.useReducer(reducer, {
    DTData: data,
    DTChecked: new Array(data.length).fill(false),
    DTShowFields: showFields,
  });

  React.useEffect(() => {
    setShowFields(state.DTShowFields);
  }, [state.DTShowFields]);

  return (
    <DataTableProvider<DataType>
      value={
        {
          selectable,
          fields,
          chooseFieldable,
          state,
          dispatch,
        } as DataTableContextType<DataType>
      }
    >
      <div className="relative w-full">
        <FieldSelectbox<DataType> />
        <table className="table">
          <DataTableHead />
          <DataTableBody />
        </table>
      </div>
    </DataTableProvider>
  );
};

export default DataTable;
