import { default as React } from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    inputBefore?: React.ReactNode;
    inputAfter?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    className?: {
        container?: string;
        input?: string;
    };
    decimal?: number;
};
declare const Input: React.FC<InputProps>;
export default Input;
