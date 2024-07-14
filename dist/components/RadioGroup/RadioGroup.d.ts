import { default as React } from 'react';
import { SelectOption, ValueField } from '../Selectbox/SelectboxBase';

export type RadioGroupProps = {
    id?: string;
    name: string;
    options: SelectOption[];
    value: string;
    readOnly?: boolean;
    className?: string;
    placeholder?: string;
    onChange: (value: string) => void;
    valueField?: ValueField;
};
declare const RadioGroup: React.FC<RadioGroupProps>;
export default RadioGroup;
