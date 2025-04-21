import { default as React } from '../../../node_modules/react';

export type TextareaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    inputBefore?: React.ReactNode;
    inputAfter?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
    className?: {
        container?: string;
        input?: string;
    };
};
declare const _default: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
    inputBefore?: React.ReactNode;
    inputAfter?: React.ReactNode;
    inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
    className?: {
        container?: string;
        input?: string;
    };
} & React.RefAttributes<HTMLTextAreaElement>>;
export default _default;
