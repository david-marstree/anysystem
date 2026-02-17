import React from "react";
import { useField } from "formik";
import Label from "./Label";

export type FormLabelProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

export const FormLabel = ({
  label,
  className,
  htmlFor = "",
  children,
}: FormLabelProps) => {
  const [, meta] = useField(htmlFor);
  return (
    <Label
      label={label}
      className={className}
      isError={Boolean(meta?.touched && meta?.error)}
      errorMessage={meta?.error}
    >
      {children}
    </Label>
  );
};
