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
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [field] = useField(name);

  React.useImperativeHandle(
    innerRef,
    () => inputRef.current as HTMLInputElement,
  );

  return (
    <PasswordInput
      ref={inputRef}
      type={type}
      {...{ ...field, value: field?.value || "", ...props }}
    />
  );
};
export const FormPasswordInput = React.forwardRef(FormPasswordInputRef);
