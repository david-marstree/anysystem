import React from "react";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import type { FormFieldWithStructure } from "./type";
import {
  Formik,
  Form,
  FormikHelpers,
  FormikProps,
  useFormikContext,
} from "formik";
//helpers
import { getFieldValue, getFieldValidation } from "./helpers";
//component
import FormContent from "./FormContent";

export type FormProps<FormValues extends Record<string, unknown>> =
  FormikProps<FormValues>;

export type FormComponentProps<FormValues extends Record<string, unknown>> =
  React.FormHTMLAttributes<HTMLFormElement> & {
    fields: FormFieldWithStructure;
    onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
    children: React.ReactNode;
  };

const FormComponent = <FormValues extends Record<string, unknown>>({
  className,
  children,
  fields,
  onSubmit,
}: FormComponentProps<FormValues>) => {
  const [formValues] = React.useState<FormValues>(
    getFieldValue<FormValues>(fields)
  );

  const validationSchema = React.useMemo(() => {
    return getFieldValidation(fields);
  }, [fields]);

  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={formValues}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched, setFieldValue }: FormProps<FormValues>) => (
        <Form autoComplete="off" className={twMerge(className)}>
          <FormContent
            fields={fields}
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
          />
          {children}
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;

export { useFormikContext as useFormContext };
