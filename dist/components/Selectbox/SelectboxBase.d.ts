import { default as React } from 'react';

export type ValueCallback = (option: SelectOption) => string;
export type ValueField = ValueCallback | "id" | "value" | "label" | string;
export type SelectOption = {
    id: string | number;
    label: string;
    value: string | number;
    enable: boolean;
};
export type Action = {
    type: "SETVALUE";
    value: string;
} | {
    type: "SETSELECT";
    selected: SelectOption;
};
export type SelectboxBaseProps = {
    id?: string;
    name: string;
    options: SelectOption[];
    value: string | number;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange: (value: string | number) => void;
    valueField?: ValueField;
    multiple?: boolean;
};
export type SelectboxBaseHandler = {
    setValue: (value: string | number) => void;
};
declare const _default: React.ForwardRefExoticComponent<SelectboxBaseProps & React.RefAttributes<SelectboxBaseHandler>>;
export default _default;
