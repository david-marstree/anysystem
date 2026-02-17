import React from "react";
import DataTableRow from "./DataTableRow";
import { DataTableContext } from "../contexts/DataTableContext";

const DataTableBody = () => {
  const { state } = React.useContext(DataTableContext);

  return (
    <tbody>
      {state.DTData &&
        state.DTData.map((row, i) => (
          <DataTableRow key={i} row={row} index={i} />
        ))}
    </tbody>
  );
};

export default DataTableBody;
