import { default as React } from 'react';

export type ResponsiveColumn = {
    lg?: number;
    md?: number;
    sm?: number;
};
export type RowProps = {
    column?: ResponsiveColumn;
    className?: string;
    children: React.ReactNode;
};
declare const Row: React.FC<RowProps>;
export default Row;
