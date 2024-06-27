import { default as React } from 'react';
import { ResponsiveColumn } from '../Row';

export type ColumnProps = {
    className?: string;
    span?: ResponsiveColumn;
    children: React.ReactNode;
};
declare const Column: React.FC<ColumnProps>;
export default Column;
