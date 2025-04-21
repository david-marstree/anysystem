import { default as React } from '../../../../node_modules/react';

export type DataRowProps<DataType extends object> = {
    children?: React.ReactNode;
    row?: DataType;
    index: number;
};
declare const DataTableRow: <DataType extends object>({ row, children, index, }: DataRowProps<DataType>) => React.ReactElement;
export default DataTableRow;
