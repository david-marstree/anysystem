import React from "react";
import _ from "lodash";
import { getValueByKey } from "../libs/helper";
import { ValueKey, ValueNode } from "../libs/type";

export type DataTableCellProps<DataType extends object> = {
  children?: React.ReactNode;
  data?: DataType;
  field?: string | ValueNode<DataType> | ValueKey;
};

const DataTableCell = <DataType extends object>({
  children,
  data,
  field,
}: DataTableCellProps<DataType>): React.ReactElement => {
  if (children) {
    return <td>{children}</td>;
  }
  if (typeof data !== "object" || !field) {
    return <td></td>;
  }

  const cellData = getValueByKey(data, field);

  if (!cellData) {
    return <td></td>;
  }
  if (_.isArray(cellData)) {
    return <td>{cellData.join(",") as React.ReactNode}</td>;
  }

  return <td>{cellData as React.ReactNode}</td>;
};

export default DataTableCell;
