import { Schema } from 'yup';
import { LabelBaseProps } from '../Label/';
import { InputProps } from '../Input/';
import { TelephoneInputProps } from '../TelephoneInput';
import { DatePickerProps } from '../DatePicker/';
import { SwitchProps } from '../Switch/';
import { RadioGroupProps } from '../RadioGroup';
import { CheckboxProps } from '../Checkbox';
import { SelectboxProps, SelectOption } from '../Selectbox';
import { AutoCompleteProps } from '../AutoComplete';

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
    id?: string;
    name: string;
    dataType: "string" | "number" | "boolean" | "string[]";
    value: string | number | boolean | string[];
    validation?: Validation[];
    component?: React.FC<any>;
    componentProps: FormFieldInputProps | FormFieldDateTimeProps | FormFieldRadioProps<SelectOption> | FormFieldSwitchProps | FormFieldConfirmProps | FormFieldTelephoneProps | FormFieldSelectboxProps<SelectOption> | FormFieldAutoCompleteProps<SelectOption>;
};
export type FormFieldWithStructure = (FormField | FormField[])[];
export type FormControlInputProps = InputProps & {
    type: "password" | "text" | "number" | "email";
    labelProps: LabelBaseProps;
    onChange?: (value: string) => void;
    variant?: "sm" | "md";
};
export type FormFieldInputProps = Omit<FormControlInputProps, "name" | "value" | "onChange">;
export type FormControlDateTimeProps = DatePickerProps & {
    type: "date" | "datetime";
    labelProps: LabelBaseProps;
    onChange?: (value: string) => void;
    variant?: "sm" | "md";
};
export type FormFieldDateTimeProps = Omit<FormControlDateTimeProps, "name" | "value" | "onChange">;
export type FormControlRadioProps<ListOption extends SelectOption> = {
    type: "radio";
    labelProps: LabelBaseProps;
    onChange?: (value: string) => void;
    variant?: "sm" | "md";
} & RadioGroupProps<ListOption>;
export type FormFieldRadioProps<ListOption extends SelectOption> = Omit<FormControlRadioProps<ListOption>, "name" | "value" | "onChange">;
export type FormControlSwitchProps = {
    type: "switch";
    labelProps: LabelBaseProps;
    onChange?: (value: string) => void;
    variant?: "sm" | "md";
} & SwitchProps;
export type FormFieldSwitchProps = Omit<FormControlSwitchProps, "name" | "value" | "onChange">;
export type FormControlConfirmProps = {
    type: "confirm";
    labelProps: LabelBaseProps;
    onChange?: (value: string) => void;
    variant?: "sm" | "md";
} & CheckboxProps;
export type FormFieldConfirmProps = Omit<FormControlConfirmProps, "name" | "label">;
export type FormControlTelephoneProps = {
    type: "tel";
    labelProps: LabelBaseProps;
    onChange?: (value: string) => void;
    variant?: "sm" | "md";
} & TelephoneInputProps;
export type FormFieldTelephoneProps = Omit<FormControlTelephoneProps, "name">;
export type FormControlSelectboxProps<ListOption extends SelectOption> = {
    type: "select";
    labelProps: LabelBaseProps;
    onChange?: (value: string | string[]) => void;
    variant?: "sm" | "md";
} & SelectboxProps<ListOption>;
export type FormFieldSelectboxProps<ListOption extends SelectOption> = Omit<FormControlSelectboxProps<ListOption>, "name" | "value" | "onChange">;
export type FormControlAutoCompleteProps<ListOption extends SelectOption> = {
    type: "autocomplete";
    labelProps: LabelBaseProps;
    onChange?: (value: string | string[]) => void;
    variant?: "sm" | "md";
} & AutoCompleteProps<ListOption>;
export type FormFieldAutoCompleteProps<ListOption extends SelectOption> = Omit<FormControlAutoCompleteProps<ListOption>, "name" | "value" | "onChange">;
