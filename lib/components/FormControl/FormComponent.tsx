import React from "react";
import { twMerge } from "tailwind-merge";
import { Formik, Form, FormikHelpers, FormikProps } from "formik";

export type FormProps<FormValues extends Record<string, unknown>> =
  FormikProps<FormValues>;

export type FormComponentProps<FormValues extends Record<string, unknown>> =
  React.FormHTMLAttributes<HTMLFormElement> & {
    initialValues: FormValues;
    onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
    children: React.ReactNode;
  };

const FormComponent = <FormValues extends Record<string, unknown>>({
  className,
  children,
  initialValues,
  onSubmit,
}: FormComponentProps<FormValues>) => {
  const [formValues] = React.useState<FormValues>(initialValues);

  return (
    <Formik enableReinitialize initialValues={formValues} onSubmit={onSubmit}>
      <Form autoComplete="off" className={twMerge(className)}>
        {children}
      </Form>
    </Formik>
  );
};

export default FormComponent;
