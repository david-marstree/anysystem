import { default as React } from '../../../../node_modules/react';
import { ValueKey, ValueNode } from '../libs/type';

export type DataTableCellProps<DataType extends object> = {
    children?: React.ReactNode;
    data?: DataType;
    field?: string | ValueNode<DataType> | ValueKey;
};
declare const DataTableCell: <DataType extends object>({ children, data, field, }: DataTableCellProps<DataType>) => React.ReactElement;
export default DataTableCell;
