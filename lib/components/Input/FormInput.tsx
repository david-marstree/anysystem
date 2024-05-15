import React from "react";
import { useField } from "formik";
import Input from "./Input";

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  inputBefore?: React.ReactNode;
  inputAfter?: React.ReactNode;
  className?: {
    container?: string;
    input?: string;
  };
  decimal?: number;
};

export const FormInput: React.FC<FormInputProps> = ({
  name,
  inputBefore,
  inputAfter,
  className,
  ...props
}) => {
  const [field] = useField(name);

  return (
    <Input
      name={name}
      inputProps={field}
      inputBefore={inputBefore}
      inputAfter={inputAfter}
      {...props}
    />
  );
};
