import { default as React } from '../../../node_modules/react';
import { FormFieldWithStructure } from './type';
import { FormikHelpers, FormikProps, useFormikContext } from 'formik';

export type FormProps<FormValues extends Record<string, unknown>> = FormikProps<FormValues>;
export type FormComponentProps<FormValues extends Record<string, unknown>> = React.FormHTMLAttributes<HTMLFormElement> & {
    fields: FormFieldWithStructure;
    onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
    children: React.ReactNode;
};
declare const FormComponent: <FormValues extends Record<string, unknown>>({ className, children, fields, onSubmit, }: FormComponentProps<FormValues>) => import("react/jsx-runtime").JSX.Element;
export default FormComponent;
export { useFormikContext as useFormContext };
