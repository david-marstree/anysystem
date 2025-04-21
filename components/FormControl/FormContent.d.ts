import { default as React } from '../../../node_modules/react';
import { FormFieldWithStructure } from './type';

export type FormContentProps = {
    id?: string;
    fields: FormFieldWithStructure;
    values?: Record<string, any>;
    setFieldValue?: (name: string, value: any) => void;
    touched?: any;
    errors?: any;
};
declare const FormContent: React.FC<FormContentProps>;
export default FormContent;
