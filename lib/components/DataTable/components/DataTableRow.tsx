import React from "react";
import _ from "lodash";
import { DataTableContext } from "../contexts/DataTableContext";
import { CheckboxBase } from "../../Checkbox";
import DataTableCell from "./DataTableCell";

export type DataRowProps<DataType extends object> = {
  children?: React.ReactNode;
  row?: DataType;
  index: number;
};

const DataTableRow = <DataType extends object>({
  row,
  children,
  index,
}: DataRowProps<DataType>): React.ReactElement => {
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
            <DataTableCell<DataType> key={i} data={row} field={field.value} />
          ))
      )}
    </tr>
  );
};

export default DataTableRow;
