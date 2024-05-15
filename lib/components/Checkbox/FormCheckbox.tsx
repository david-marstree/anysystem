import React from "react";
import { useField } from "formik";
import { type CheckboxProps, Checkbox } from "./Checkbox";

export type FormCheckboxProps = CheckboxProps;

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  ...props
}) => {
  const [field] = useField(name);
  return <Checkbox inputProps={field} name={name} {...props} />;
};
