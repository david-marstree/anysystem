import { SelectOption, ValueField } from '../Selectbox/SelectboxBase';

export type RadioGroupProps<ListOption extends SelectOption> = {
    variant?: "sm" | "md";
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
declare const RadioGroup: <ListOption extends SelectOption>({ variant, options, value, valueField, onChange, }: RadioGroupProps<ListOption>) => import("react/jsx-runtime").JSX.Element;
export default RadioGroup;
