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
  variant = "md",
  labelProps,
  ...props
}: FormControlProps<ListOption>): React.ReactElement => {

  return (
    <Suspense fallback={null}>
      {type !== "confirm" ? (
        <Label
          variant={variant}
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
              {...(props as PasswordInputProps)}
              onChange={(e) => onChange && onChange(e.target.value as string)}
            />
          ) : type === "date" || type === "datetime" ? (
            <DatePicker
              {...(props as DatePickerProps)}
              onChange={(date) => onChange && onChange(date + "")}
              showTime={type === "datetime"}
            />
          ) : type === "radio" ? (
            <RadioGroup<ListOption>
              {...(props as RadioGroupProps<ListOption>)}
              variant={variant}
              onChange={onChange}
            />
          ) : type === "switch" ? (
            <Switch
              {...(props as SwitchProps)}
              onChange={onChange}
              checked={Boolean(props.value)}
            />
          ) : type === "tel" ? (
            <TelephoneInput
              {...(props as TelephoneInputProps)}
              onChange={onChange}
            />
          ) : type === "select" ? (
            <Selectbox<ListOption>
              {...(props as SelectboxProps<ListOption>)}
              onChange={(e: string | string[]) => onChange && onChange(e)}
            />
          ) : type === "autocomplete" ? (
            <AutoComplete<ListOption>
              {...(props as AutoCompleteProps<ListOption>)}
              onChange={onChange}
            />
          ) : (
            <Input
              type={type}
              onChange={(e: React.ChangeEvent<HTMLInputElement> | string) =>
                onChange &&
                onChange(typeof e === "string" ? e : (e.target.value as string))
              }
              {...(props as InputProps)}
            />
          )}
        </Label>
      ) : (
        <Checkbox
          {...(props as CheckboxProps)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange && onChange(String(e.target.checked))
          }
          label={labelProps.label}
        />
      )}
    </Suspense>
  );
};

export default FormControl;
