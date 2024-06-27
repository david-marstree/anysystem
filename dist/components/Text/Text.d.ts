import { default as React } from 'react';

export type TextProps = {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    className?: string;
    children: React.ReactNode;
};
declare const Text: React.FC<TextProps>;
export default Text;
