import React from "react";
import type { DataTableField } from "../libs/type";
import { DataTableContext } from "../contexts/DataTableContext";

export type DataTableHeadCellProps = {
  field: DataTableField;
};

const DataTableHeadCell: React.FC<DataTableHeadCellProps> = ({ field }) => {
  const { state } = React.useContext(DataTableContext);

  return <th>{field.label}</th>;
};

export default DataTableHeadCell;
