import { Schema } from "yup";
import { FormControlProps } from "./FormControl";
import { SelectOption } from "..";

export type YupSchema = {
  [key: string]: Schema;
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
export type ValidationMatch = {
  type: "match";
  pattern: string;
  message?: string;
};

export type Validation = ValidationBase | ValidationMaxMin | ValidationMatch;

export type FormField = {
  name: string;
  dataType: "string" | "number" | "boolean";
  value: string;
  validation?: Validation[];
  component?: React.FC<any>;
  componentProps: FormControlProps<SelectOption>;
};

export type FormFieldWithStructure = (FormField | FormField[])[];
