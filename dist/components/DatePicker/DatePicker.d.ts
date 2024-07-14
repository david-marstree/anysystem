import { default as React } from 'react';

export type DatePickerProps = {
    name: string;
    value: number;
    onChange: (value: number) => void;
    showTime?: boolean;
    readOnly?: boolean;
};
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
