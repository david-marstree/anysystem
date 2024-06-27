import { default as React } from 'react';

export type CheckboxBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    isError?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
export declare const CheckboxBase: React.FC<CheckboxBaseProps>;
