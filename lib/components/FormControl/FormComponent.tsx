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

export type ValidationBase = {
  type: "required" | "email";
  message?: string;
};
export type ValidationMaxMin = {
  type: "min" | "max";
  value: number;
  message?: string;
};

export type Validation = ValidationBase | ValidationMaxMin;

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
        .reduce(
          (acc, field) => {
            if (field.dataType === "string") {
              acc.push({
                name: field.name,
                type: "string",
                schmea: Yup.string(),
              });
            }
            if (field.dataType === "number") {
              acc.push({
                name: field.name,
                type: "number",
                schmea: Yup.number(),
              });
            }
            if (field.dataType === "boolean") {
              acc.push({
                name: field.name,
                type: "boolean",
                schmea: Yup.number(),
              });
            }
            return acc;
          },
          [] as {
            name: string;
            type: "string" | "number" | "boolean";
            schmea: Yup.Schema;
          }[]
        )
        .reduce((acc, { name, type, schmea }) => {
          acc[name] = schmea;
          const validation = fields.find(
            (field) => field.name === name
          )?.validation;
          if (!validation) {
            return acc;
          }
          if (_.some(validation, (v) => v.type === "required")) {
            acc[name] = acc[name].required(
              _.find(validation, (v) => v.type === "required")?.message ||
                "Required"
            );
          }
          if (
            type === "string" &&
            _.some(validation, (v) => v.type === "email")
          ) {
            const v = _.find(
              validation,
              (v) => v.type === "email"
            ) as ValidationBase;
            acc[name] = (acc[name] as Yup.StringSchema).email(
              v?.message || "Invalid email"
            );
          }
          if (
            ["string", "number"].includes(type) &&
            _.some(validation, (v) => v.type === "max")
          ) {
            const v = _.find(
              validation,
              (v) => v.type === "max"
            ) as ValidationMaxMin;
            acc[name] = (acc[name] as Yup.StringSchema | Yup.NumberSchema).max(
              v.value,
              v?.message || `Max value is ${v.value}`
            );
          }
          if (
            ["string", "number"].includes(type) &&
            _.some(validation, (v) => v.type === "min")
          ) {
            const v = _.find(
              validation,
              (v) => v.type === "min"
            ) as ValidationMaxMin;
            acc[name] = (acc[name] as Yup.StringSchema | Yup.NumberSchema).min(
              v.value,
              v?.message || `Min value is ${v.value}`
            );
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
