import React from "react";
import _ from "lodash";
import * as Yup from "yup";
import { twMerge } from "tailwind-merge";
import {
  Formik,
  Form,
  FormikHelpers,
  FormikProps,
  useFormikContext,
} from "formik";

export type FormProps<FormValues extends Record<string, unknown>> =
  FormikProps<FormValues>;

type YupSchema = {
  [key: string]: Yup.Schema;
};

export type Validation = {
  type: "required" | "email" | "min" | "max";
  message: string;
};

export type FormField = {
  name: string;
  dataType: string;
  label: string;
  placeholder: string;
  value: unknown;
  validation?: Validation[];
};

export type FormComponentProps<FormValues extends Record<string, unknown>> =
  React.FormHTMLAttributes<HTMLFormElement> & {
    fields: FormField[];
    onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
    children: React.ReactNode;
  };

const FormComponent = <FormValues extends Record<string, unknown>>({
  className,
  children,
  fields,
  onSubmit,
}: FormComponentProps<FormValues>) => {
  const initialValues = React.useMemo(() => {
    return _.reduce(
      fields,
      (acc, field) => {
        acc[field.name as keyof FormValues] =
          field.value as FormValues[keyof FormValues];
        return acc;
      },
      {} as FormValues
    );
  }, [fields]);

  const [formValues] = React.useState<FormValues>(initialValues);

  const validationSchema = React.useMemo(() => {
    return Yup.object().shape(
      _.chain(fields)
        .reduce((acc, field) => {
          if (field.dataType === "string") {
            acc[field.name] = Yup.string();
          }
          if (field.dataType === "number") {
            acc[field.name] = Yup.number();
          }
          if (field.dataType === "boolean") {
            acc[field.name] = Yup.boolean();
          }
          return acc;
        }, {} as YupSchema)
        .value()
    );
  }, [fields]);

  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={formValues}
      onSubmit={onSubmit}
    >
      <Form autoComplete="off" className={twMerge(className)}>
        {children}
      </Form>
    </Formik>
  );
};

export default FormComponent;

export { useFormikContext as useFormContext };
