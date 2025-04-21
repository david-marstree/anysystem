import { default as React } from '../../../node_modules/react';
import { PasswordInputProps } from './PasswordInput';

export type FormPasswordInputProps = PasswordInputProps & {
    name: string;
};
export declare const FormPasswordInput: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    type?: "password" | "text";
} & {
    name: string;
} & React.RefAttributes<HTMLInputElement>>;
