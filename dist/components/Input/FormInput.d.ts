import { default as React } from 'react';

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    inputBefore?: React.ReactNode;
    inputAfter?: React.ReactNode;
    className?: {
        container?: string;
        input?: string;
    };
    decimal?: number;
};
export declare const FormInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    inputBefore?: React.ReactNode;
    inputAfter?: React.ReactNode;
    className?: {
        container?: string;
        input?: string;
    };
    decimal?: number;
} & React.RefAttributes<HTMLInputElement>>;
