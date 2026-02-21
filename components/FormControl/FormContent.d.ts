import { FormFieldWithStructure } from './type';

export type FormContentProps = {
    id?: string;
    fields: FormFieldWithStructure;
    values?: Record<string, any>;
    setFieldValue?: (name: string, value: any) => void;
    touched?: any;
    errors?: any;
};
declare const FormContent: ({ fields, values, setFieldValue, touched, errors, }: FormContentProps) => import("react/jsx-runtime").JSX.Element;
export default FormContent;
