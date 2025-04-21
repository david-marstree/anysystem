export type ValueKey = `$${string}`;
export type ValueNode<DataType extends object> = (row: DataType) => React.ReactNode | string;
export type State<DataType extends object> = {
    DTData: DataType[];
    DTChecked: boolean[];
    DTShowFields: string[];
};
export type Action<DataType extends object> = {
    type: "SELECT_ALL";
} | {
    type: "SELECT_ROW";
    index: number;
} | {
    type: "SELECT_FIELDKEY";
    fieldKey: string;
} | {
    type: "SET_FIELD";
    fields: DataTableField<DataType>[];
};
export type DataTableField<DataType extends object> = {
    key: string;
    label: string;
    value: ValueKey | ValueNode<DataType> | string;
    default?: boolean;
};
