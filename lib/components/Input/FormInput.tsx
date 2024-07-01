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

const FormInputRef: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FormInputProps
> = ({ name, inputBefore, inputAfter, className, ...props }, innerRef) => {
  const [field] = useField(name);

  return (
    <Input
      ref={innerRef}
      className={className}
      name={name}
      inputProps={field}
      inputBefore={inputBefore}
      inputAfter={inputAfter}
      {...props}
    />
  );
};
export const FormInput = React.forwardRef(FormInputRef);
