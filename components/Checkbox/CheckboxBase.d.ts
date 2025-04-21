import { default as React } from '../../../node_modules/react';

export type CheckboxBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    isError?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    intermediate?: boolean;
};
export declare const CheckboxBase: React.FC<CheckboxBaseProps>;
