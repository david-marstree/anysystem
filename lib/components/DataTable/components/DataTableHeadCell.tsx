import React from "react";
import type { DataTableField } from "../libs/type";

export type DataTableHeadCellProps<DataType extends object> = {
  field: DataTableField<DataType>;
};

const DataTableHeadCell = <DataType extends object>({
  field,
}: DataTableHeadCellProps<DataType>): React.ReactElement => {
  return <th>{field.label}</th>;
};

export default DataTableHeadCell;
