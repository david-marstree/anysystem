import { default as React } from '../../../node_modules/react';

export type ValueCallback<ListOption extends SelectOption> = (option: ListOption) => string;
export type ValueField<ListOption extends SelectOption> = ValueCallback<ListOption> | "id" | "value" | "label" | string;
export type SelectOption = {
    id: string;
    label: string;
    value: string;
    enable: boolean;
};
export type Action<ListOption extends SelectOption> = {
    type: "SETVALUE";
    value: string;
} | {
    type: "SETSELECT";
    selected: ListOption;
};
export type SelectboxBaseProps<ListOption extends SelectOption> = {
    id?: string;
    name: string;
    options: ListOption[];
    value: string;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange: (value: string) => void;
    valueField?: ValueField<ListOption>;
};
export type SelectboxBaseHandler = {
    setValue: (value: string | number) => void;
};
declare const _default: <ListOption extends SelectOption>(props: SelectboxBaseProps<ListOption> & {
    ref?: React.Ref<SelectboxBaseHandler>;
}) => React.ReactElement;
export default _default;
