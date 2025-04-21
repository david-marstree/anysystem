import { default as React } from '../../../node_modules/react';
import { SelectOption } from '../Selectbox';

export type TelephoneInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type: "tel";
    name: string;
    className?: {
        container?: string;
        input?: string;
    };
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    phonePrefixOptions: SelectOption[];
    phonePrefix?: string;
    onChange?: (value: string) => unknown;
};
declare const TelephoneInput: ({ className, value, phonePrefix, phonePrefixOptions, onChange, ...props }: TelephoneInputProps) => import("react/jsx-runtime").JSX.Element;
export default TelephoneInput;
