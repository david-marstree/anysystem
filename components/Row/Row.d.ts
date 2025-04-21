import { default as React } from '../../../node_modules/react';

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
export declare const getColumns: (column?: ResponsiveColumn, data?: React.ReactNode) => string;
declare const Row: React.FC<RowProps>;
export default Row;
