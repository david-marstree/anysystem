import { default as React } from '../../../../node_modules/react';
import { DataTableField } from '../libs/type';

export type DataTableHeadCellProps<DataType extends object> = {
    field: DataTableField<DataType>;
};
declare const DataTableHeadCell: <DataType extends object>({ field, }: DataTableHeadCellProps<DataType>) => React.ReactElement;
export default DataTableHeadCell;
