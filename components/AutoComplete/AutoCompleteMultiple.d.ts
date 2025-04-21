import { default as React } from '../../../node_modules/react';
import { SelectOption, ValueField } from '../Selectbox';

export type AutoCompleteMultipleHandler = {
    search: (query: string) => void;
    setValue: (value: string[]) => void;
};
export type AutoCompleteMultipleProps<ListOption extends SelectOption> = {
    id?: string;
    options: ListOption[];
    name: string;
    value?: string[] | number[];
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange?: (value: string[]) => void;
    onSearch?: (query: string) => void;
    valueField?: ValueField<ListOption>;
};
declare const _default: <ListOption extends SelectOption>(props: AutoCompleteMultipleProps<ListOption> & {
    ref?: React.Ref<AutoCompleteMultipleHandler>;
}) => React.ReactElement;
export default _default;
