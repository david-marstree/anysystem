import React from "react";
import { useField } from "formik";
import PasswordInput, { PasswordInputProps } from "./PasswordInput";

export type FormPasswordInputProps = PasswordInputProps & {
  name: string;
};

export const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  type = "password",
  name,
  ...props
}) => {
  const [field] = useField(name);

  return (
    <PasswordInput
      type={type}
      {...{ ...field, value: field?.value || "", ...props }}
    />
  );
};
