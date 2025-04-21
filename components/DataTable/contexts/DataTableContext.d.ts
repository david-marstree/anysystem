import { default as React } from '../../../../node_modules/react';
import { DataTableField, State, Action } from '../libs/type';

export type DataTableContextType<DataType extends object> = {
    selectable: boolean;
    chooseFieldable: boolean;
    fields: DataTableField<DataType>[];
    state: State<DataType>;
    dispatch: React.Dispatch<Action<DataType>>;
};
export declare const DataTableContext: React.Context<DataTableContextType<any>>;
export type DataTableProviderProps<DataType extends object> = {
    value: DataTableContextType<DataType>;
    children: React.ReactNode;
};
export declare const DataTableProvider: <DataType extends object>({ children, value, }: DataTableProviderProps<DataType>) => import("react/jsx-runtime").JSX.Element;
