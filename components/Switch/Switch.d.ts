import { default as React } from '../../../node_modules/react';

export type SwitchProps = {
    variant?: "sm" | "md";
    name: string;
    value: string;
    checked?: boolean;
    onChange: (v: boolean) => void;
};
declare const Switch: React.FC<SwitchProps>;
export default Switch;
