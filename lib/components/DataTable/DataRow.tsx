import React from "react";
import _ from "lodash";
import { DataTableContext } from "./DataTable";
import { CheckboxBase } from "../Checkbox";
import DataCell from "./DataCell";

export type DataRowProps = {
  children?: React.ReactNode;
  row?: object;
  index: number;
};

const DataRow: React.FC<DataRowProps> = ({ row, children, index }) => {
  const { selectable, fields, state, dispatch } =
    React.useContext(DataTableContext);

  return (
    <tr>
      {selectable && (
        <td className="w-[50px]">
          <CheckboxBase
            checked={Boolean(state.checked[index])}
            onChange={() => dispatch({ type: "SELECT_ROW", index })}
          />
        </td>
      )}
      {children ? (
        children
      ) : !_.isPlainObject(row) ? (
        <></>
      ) : (
        fields.map((field, i) => (
          <DataCell key={i} data={row} field={field.value} />
        ))
      )}
    </tr>
  );
};

export default DataRow;
