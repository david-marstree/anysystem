import { default as React } from '../../../node_modules/react';
import { ResponsiveColumn } from '../Row';

export type ColumnProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
    className?: string;
    span?: ResponsiveColumn;
    children: React.ReactNode;
};
declare const Column: ({ id, span, className, children, ...props }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export default Column;
