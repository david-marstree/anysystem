import { FormField, FormFieldWithStructure } from './type';
import * as Yup from "yup";
export declare const isFormField: (field: Record<string, unknown>) => field is FormField;
export declare const getFieldValue: <FormValues extends Record<string, unknown>>(fields: FormFieldWithStructure | FormField[]) => FormValues;
export declare const getFieldValidation: (fields: FormFieldWithStructure | FormField[]) => Yup.ObjectSchema<{
    [x: string]: any;
}, Yup.AnyObject, {
    [x: string]: any;
}, "">;
