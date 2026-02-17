import React from "react";
import { DataTableContext } from "../contexts/DataTableContext";
import { CheckboxBase } from "../../Checkbox";
//components
import DataTableHeadCell from "./DataTableHeadCell";

const DataTableHead = () => {
  const { fields, selectable, state, dispatch } =
    React.useContext(DataTableContext);

  const showFields = React.useMemo(
    () => fields.filter((field) => state.DTShowFields.includes(field.key)),
    [fields, state.DTShowFields],
  );

  return (
    <thead>
      <tr>
        {selectable && (
          <th className="w-8 p-2">
            <CheckboxBase
              checked={state.DTChecked.every((r) => r === true)}
              intermediate={
                state.DTChecked.some((r) => r === true) &&
                !state.DTChecked.every((r) => r === true)
              }
              onChange={() => dispatch({ type: "SELECT_ALL" })}
            />
          </th>
        )}
        {showFields.map((fields, i) => (
          <DataTableHeadCell key={i} field={fields} />
        ))}
      </tr>
    </thead>
  );
};

export default DataTableHead;
