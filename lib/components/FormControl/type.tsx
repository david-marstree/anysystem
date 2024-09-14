import { Schema } from "yup";
import type { LabelBaseProps } from "../Label/";
import type { InputProps } from "../Input/";
import type { TelephoneInputProps } from "../TelephoneInput";
import type { DatePickerProps } from "../DatePicker/";
import type { SwitchProps } from "../Switch/";
import type { RadioGroupProps } from "../RadioGroup";
import type { CheckboxProps } from "../Checkbox";
import type { SelectOption } from "../Selectbox";

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
  componentProps:
    | FormFieldInputProps
    | FormFieldDateTimeProps
    | FormFieldRadioProps<SelectOption>
    | FormFieldSwitchProps
    | FormFieldConfirmProps
    | FormFieldTelephoneProps;
};

export type FormFieldWithStructure = (FormField | FormField[])[];

export type FormControlInputProps = {
  type: "password" | "text" | "number" | "email";
  labelProps: LabelBaseProps;
  onChange?: (value: string) => void;
} & InputProps;

export type FormFieldInputProps = Omit<FormControlInputProps, "name">;

export type FormControlDateTimeProps = DatePickerProps & {
  type: "date" | "datetime";
  labelProps: LabelBaseProps;
  onChange?: (value: string) => void;
};

export type FormFieldDateTimeProps = Omit<
  FormControlDateTimeProps,
  "name" | "value" | "onChange"
>;

export type FormControlRadioProps<ListOption extends SelectOption> = {
  type: "radio";
  labelProps: LabelBaseProps;
  onChange?: (value: string) => void;
} & RadioGroupProps<ListOption>;

export type FormFieldRadioProps<ListOption extends SelectOption> = Omit<
  FormControlRadioProps<ListOption>,
  "name" | "value" | "onChange"
>;

export type FormControlSwitchProps = {
  type: "switch";
  labelProps: LabelBaseProps;
  onChange?: (value: string) => void;
} & SwitchProps;

export type FormFieldSwitchProps = Omit<FormControlSwitchProps, "name">;

export type FormControlConfirmProps = {
  type: "confirm";
  labelProps: LabelBaseProps;
  onChange?: (value: string) => void;
} & CheckboxProps;

export type FormFieldConfirmProps = Omit<FormControlConfirmProps, "name">;

export type FormControlTelephoneProps = {
  type: "tel";
  labelProps: LabelBaseProps;
  onChange?: (value: string) => void;
} & TelephoneInputProps;

export type FormFieldTelephoneProps = Omit<FormControlTelephoneProps, "name">;
