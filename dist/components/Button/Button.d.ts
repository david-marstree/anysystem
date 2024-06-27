import { default as React } from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "primary";
    size?: "xs" | "sm" | "md" | "lg";
};
declare const _default: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "primary";
    size?: "xs" | "sm" | "md" | "lg";
} & React.RefAttributes<HTMLButtonElement>>;
export default _default;
