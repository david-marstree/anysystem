import { default as React } from 'react';

export type FormLabelProps = {
    label: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
};
export declare const FormLabel: React.FC<FormLabelProps>;
