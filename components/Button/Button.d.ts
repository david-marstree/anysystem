import { default as React } from '../../../node_modules/react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "primary" | "danger";
    size?: "xs" | "sm" | "md" | "lg";
    rounded?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "primary" | "danger";
    size?: "xs" | "sm" | "md" | "lg";
    rounded?: boolean;
} & React.RefAttributes<HTMLButtonElement>>;
export default _default;
