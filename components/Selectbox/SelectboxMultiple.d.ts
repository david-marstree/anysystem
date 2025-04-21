import { default as React } from '../../../node_modules/react';
import { SelectOption, ValueField } from './SelectboxBase';

export type SelectboxMultipleHandler = {
    setValue: (value: string[]) => void;
};
export interface SelectboxMultipleProps<ListOption extends SelectOption> {
    id?: string;
    options: ListOption[];
    name: string;
    value?: string[];
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange?: (value: string[]) => void;
    valueField?: ValueField<ListOption>;
}
declare const _default: <ListOption extends SelectOption>(props: SelectboxMultipleProps<ListOption> & {
    ref?: React.Ref<SelectboxMultipleHandler>;
}) => React.ReactElement;
export default _default;
