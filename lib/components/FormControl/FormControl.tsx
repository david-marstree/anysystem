import React, { Suspense } from "react";
import type { InputProps } from "../Input";
import type { LabelBaseProps } from "../Label";
import type { PasswordInputProps } from "../PasswordInput";
import type { TelephoneInputProps } from "../TelephoneInput";
import type { DatePickerProps } from "../DatePicker";
import RadioGroup, { RadioGroupProps } from "../RadioGroup";
import type { SwitchProps } from "../Switch";
import type { CheckboxProps } from "../Checkbox";
import Selectbox, { SelectOption, SelectboxProps } from "../Selectbox";
import AutoComplete, { AutoCompleteProps } from "../AutoComplete/";
import type {
  FormControlInputProps,
  FormControlDateTimeProps,
  FormControlRadioProps,
  FormControlSwitchProps,
  FormControlConfirmProps,
  FormControlTelephoneProps,
  FormControlSelectboxProps,
  FormControlAutoCompleteProps,
} from "./type";

const Label = React.lazy(() => import("../Label"));
const Input = React.lazy(() => import("../Input"));
const PasswordInput = React.lazy(() => import("../PasswordInput"));
const TelephoneInput = React.lazy(() => import("../TelephoneInput"));
const DatePicker = React.lazy(() => import("../DatePicker"));
const Switch = React.lazy(() => import("../Switch"));
const Checkbox = React.lazy(() => import("../Checkbox"));

export type FormControlProps<ListOption extends SelectOption> =
  | FormControlInputProps
  | FormControlDateTimeProps
  | FormControlRadioProps<ListOption>
  | FormControlSwitchProps
  | FormControlConfirmProps
  | FormControlTelephoneProps
  | FormControlSelectboxProps<ListOption>
  | FormControlAutoCompleteProps<ListOption>;

const FormControl = <ListOption extends SelectOption>({
  type,
  onChange,
  ...props
}: FormControlProps<ListOption>): React.ReactElement => {
  const { labelProps, ...restProps } = props;

  return (
    <Suspense fallback={null}>
      {type !== "confirm" ? (
        <Label
          type={
            type === "radio"
              ? "normal"
              : type === "switch"
                ? "horizontal"
                : undefined
          }
          {...(labelProps ? (labelProps as LabelBaseProps) : { label: "" })}
        >
          {type === "password" ? (
            <PasswordInput
              {...(restProps as PasswordInputProps)}
              onChange={(e) => onChange && onChange(e.target.value as string)}
            />
          ) : type === "date" || type === "datetime" ? (
            <DatePicker
              {...(restProps as DatePickerProps)}
              onChange={(date) => onChange && onChange(date + "")}
              showTime={type === "datetime"}
            />
          ) : type === "radio" ? (
            <RadioGroup<ListOption>
              {...(restProps as RadioGroupProps<ListOption>)}
              onChange={onChange}
            />
          ) : type === "switch" ? (
            <Switch {...(restProps as SwitchProps)} onChange={onChange} />
          ) : type === "tel" ? (
            <TelephoneInput
              {...(restProps as TelephoneInputProps)}
              onChange={onChange}
            />
          ) : type === "select" ? (
            <Selectbox<ListOption>
              {...(restProps as SelectboxProps<ListOption>)}
              onChange={(e: string | string[]) => onChange && onChange(e)}
            />
          ) : type === "autocomplete" ? (
            <AutoComplete<ListOption>
              {...(restProps as AutoCompleteProps<ListOption>)}
              onChange={onChange}
            />
          ) : (
            <Input
              type={type}
              onChange={(e: React.ChangeEvent<HTMLInputElement> | string) =>
                onChange &&
                onChange(typeof e === "string" ? e : (e.target.value as string))
              }
              {...(restProps as InputProps)}
            />
          )}
        </Label>
      ) : (
        <Checkbox {...(restProps as CheckboxProps)} onChange={onChange} />
      )}
    </Suspense>
  );
};

export default FormControl;
