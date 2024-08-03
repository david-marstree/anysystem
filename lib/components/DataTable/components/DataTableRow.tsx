import React from "react";
import _ from "lodash";
import { DataTableContext } from "../contexts/DataTableContext";
import { CheckboxBase } from "../../Checkbox";
import DataTableCell from "./DataTableCell";

export type DataRowProps = {
  children?: React.ReactNode;
  row?: object;
  index: number;
};

const DataTableRow: React.FC<DataRowProps> = ({ row, children, index }) => {
  const { selectable, fields, state, dispatch } =
    React.useContext(DataTableContext);

  return (
    <tr>
      {selectable && (
        <td className="w-[50px]">
          <CheckboxBase
            checked={Boolean(state.DTChecked[index])}
            onChange={() => dispatch({ type: "SELECT_ROW", index })}
          />
        </td>
      )}
      {children ? (
        children
      ) : !_.isPlainObject(row) ? (
        <></>
      ) : (
        fields
          .filter((field) => state.DTShowFields.includes(field.key))
          .map((field, i) => (
            <DataTableCell key={i} data={row} field={field.value} />
          ))
      )}
    </tr>
  );
};

export default DataTableRow;
