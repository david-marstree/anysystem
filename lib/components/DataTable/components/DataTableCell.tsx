import React from "react";
import _ from "lodash";
import { getValueByKey } from "../libs/helper";
import { ValueKey, ValueNode } from "../libs/type";

export type DataTableCellProps = {
  children?: React.ReactNode;
  data?: object;
  field?: string | ValueNode | ValueKey;
};

const DataTableCell: React.FC<DataTableCellProps> = ({
  children,
  data,
  field,
}) => {
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
