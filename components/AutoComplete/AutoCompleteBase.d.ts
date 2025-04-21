import { default as React } from '../../../node_modules/react';
import { SelectOption, ValueField } from '../Selectbox';

export type AutoCompleteBaseHandler = {
    search: (query: string) => void;
    setValue: (value: string) => void;
};
export type AutoCompleteBaseProps<ListOption extends SelectOption> = {
    id?: string;
    options: ListOption[];
    name: string;
    value?: string | number;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    closeButton?: boolean;
    onChange?: (value: string) => void;
    onSearch?: (query: string) => void;
    valueField?: ValueField<ListOption>;
};
declare const _default: <ListOption extends SelectOption>(props: AutoCompleteBaseProps<ListOption> & {
    ref?: React.Ref<AutoCompleteBaseHandler>;
}) => React.ReactElement;
export default _default;
