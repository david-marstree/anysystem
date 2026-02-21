import { default as React } from '../../../node_modules/react';

export type LabelBaseProps = {
    label: React.ReactNode;
    className?: string;
    htmlFor?: string;
    isError?: boolean;
    errorMessage?: string;
    type?: "border" | "normal" | "horizontal";
    variant?: "sm" | "md";
};
export type LabelProps = LabelBaseProps & {
    children: React.ReactNode;
};
declare const LabelBase: ({ label, className, htmlFor, isError, errorMessage, type, variant, children, }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default LabelBase;
