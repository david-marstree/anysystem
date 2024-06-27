import { default as React } from 'react';

export type LabelBaseProps = {
    label: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    htmlFor?: string;
    isError?: boolean;
    errorMessage?: string;
};
declare const LabelBase: React.FC<LabelBaseProps>;
export default LabelBase;
