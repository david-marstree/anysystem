import { default as React } from '../../../node_modules/react';
import { LabelBaseProps } from '../Label';

export type DatePickerProps = {
    name: string;
    value: string;
    onChange: (value: string) => void;
    showTime?: boolean;
    readOnly?: boolean;
    labelProps?: LabelBaseProps;
};
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
