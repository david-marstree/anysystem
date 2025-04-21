import { default as React } from '../../../node_modules/react';
import { LabelBaseProps } from '../Label';

export type InputBaseProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    inputBefore?: React.ReactNode;
    inputAfter?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    className?: {
        container?: string;
        input?: string;
    };
    labelProps?: LabelBaseProps;
};
declare const _default: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    inputBefore?: React.ReactNode;
    inputAfter?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    className?: {
        container?: string;
        input?: string;
    };
    labelProps?: LabelBaseProps;
} & React.RefAttributes<HTMLInputElement>>;
export default _default;
