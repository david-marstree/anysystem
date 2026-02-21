import { default as React } from '../../../node_modules/react';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string | React.ReactNode;
    error?: boolean;
    name: string;
    hidden?: boolean;
    isError?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
export declare const Checkbox: ({ className, name, label, hidden, isError, inputProps, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
