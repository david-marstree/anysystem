import { default as React } from 'react';

export type DatePickerProps = {
    name: string;
    value: number;
    onChange: (value: any) => void;
    showTime?: boolean;
    readOnly?: boolean;
};
declare const DatePicker: React.FC<DatePickerProps>;
export default DatePicker;
