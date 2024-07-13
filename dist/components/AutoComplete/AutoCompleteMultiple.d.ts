import { default as React } from 'react';
import { SelectOption, ValueField } from '../Selectbox';

export type AutoCompleteMultipleHandler = {
    search: (query: string) => void;
    setValue: (value: string[]) => void;
};
export type AutoCompleteMultipleProps = {
    id?: string;
    options: SelectOption[];
    name: string;
    value?: string[] | number[];
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange?: (value: string[] | number[]) => void;
    valueField?: ValueField;
};
declare const _default: React.ForwardRefExoticComponent<AutoCompleteMultipleProps & React.RefAttributes<AutoCompleteMultipleHandler>>;
export default _default;
