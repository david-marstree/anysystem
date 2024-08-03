import React from "react";
import type { DataTableField } from "../libs/type";

export type DataTableHeadCellProps = {
  field: DataTableField;
};

const DataTableHeadCell: React.FC<DataTableHeadCellProps> = ({ field }) => {
  return <th>{field.label}</th>;
};

export default DataTableHeadCell;
