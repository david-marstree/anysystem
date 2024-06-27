import { default as React } from 'react';

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: "password" | "text";
};
declare const PasswordInput: React.FC<PasswordInputProps>;
export default PasswordInput;
