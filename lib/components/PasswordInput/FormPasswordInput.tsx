import React from "react";
import { useField } from "formik";
import PasswordInput, { PasswordInputProps } from "./PasswordInput";

export type FormPasswordInputProps = PasswordInputProps & {
  name: string;
};

const FormPasswordInputRef: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FormPasswordInputProps
> = ({ type = "password", name, ...props }, innerRef) => {
  const [field] = useField(name);

  return (
    <PasswordInput
      ref={innerRef}
      type={type}
      {...{ ...field, value: field?.value || "", ...props }}
    />
  );
};
export const FormPasswordInput = React.forwardRef(FormPasswordInputRef);
