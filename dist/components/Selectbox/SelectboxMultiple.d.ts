import { default as React } from 'react';
import { SelectOption, ValueField } from './SelectboxBase';

export type SelectboxMultipleHandler = {
    setValue: (value: string[]) => void;
};
export interface SelectboxMultipleProps {
    id?: string;
    options: SelectOption[];
    name: string;
    value?: string[] | number[];
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange?: (value: string[] | number[]) => void;
    valueField?: ValueField;
}
declare const _default: React.ForwardRefExoticComponent<SelectboxMultipleProps & React.RefAttributes<SelectboxMultipleHandler>>;
export default _default;
