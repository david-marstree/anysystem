import { default as React } from 'react';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string | React.ReactNode;
    error?: boolean;
    name: string;
    hidden?: boolean;
    isError?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
export declare const Checkbox: React.FC<CheckboxProps>;
