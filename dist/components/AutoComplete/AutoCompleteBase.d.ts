import { default as React } from 'react';
import { SelectOption, ValueField } from '../Selectbox';

export type AutoCompleteBaseHandler = {
    search: (query: string) => void;
    setValue: (value: string) => void;
};
export type AutoCompleteBaseProps = {
    id?: string;
    options: SelectOption[];
    name: string;
    value?: string | number;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange?: (value: string | number) => void;
    valueField?: ValueField;
};
declare const _default: React.ForwardRefExoticComponent<AutoCompleteBaseProps & React.RefAttributes<AutoCompleteBaseHandler>>;
export default _default;
