import { LabelBaseProps } from '../Label';

export type DatePickerProps = {
    name: string;
    value: string;
    onChange: (value: string) => void;
    showTime?: boolean;
    readOnly?: boolean;
    labelProps?: LabelBaseProps;
};
declare const DatePicker: ({ name, value, showTime, onChange, readOnly, labelProps, }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
