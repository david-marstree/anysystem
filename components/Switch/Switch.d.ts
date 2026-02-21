export type SwitchProps = {
    variant?: "sm" | "md";
    name: string;
    value: string;
    checked?: boolean;
    onChange: (v: boolean) => void;
};
declare const Switch: ({ checked, onChange, name, value, }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export default Switch;
