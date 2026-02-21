import { default as React } from '../../../node_modules/react';

export type FormLabelProps = {
    label: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
};
export declare const FormLabel: ({ label, className, htmlFor, children, }: FormLabelProps) => import("react/jsx-runtime").JSX.Element;
