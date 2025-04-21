import { DataTableField } from './libs/type';

export type DataTableProps<DataType extends object> = {
    data: DataType[];
    fields: DataTableField<DataType>[];
    selectable?: boolean;
    chooseFieldable?: boolean;
    name?: string;
};
declare const DataTable: <DataType extends object>({ name, data, fields, selectable, chooseFieldable, }: DataTableProps<DataType>) => import("react/jsx-runtime").JSX.Element;
export default DataTable;
