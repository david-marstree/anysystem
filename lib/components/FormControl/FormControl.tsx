import React, { Suspense } from "react";
import type { InputProps } from "../Input";
import type { LabelBaseProps } from "../Label";
import type { PasswordInputProps } from "../PasswordInput";
import type { DatePickerProps } from "../DatePicker";
import RadioGroup, { RadioGroupProps } from "../RadioGroup";
import type { SwitchProps } from "../Switch";
import type { CheckboxProps } from "../Checkbox";
import type { SelectOption } from "../Selectbox";

const Label = React.lazy(() => import("../Label"));
const Input = React.lazy(() => import("../Input"));
const PasswordInput = React.lazy(() => import("../PasswordInput"));
const DatePicker = React.lazy(() => import("../DatePicker"));
const Switch = React.lazy(() => import("../Switch"));
const Checkbox = React.lazy(() => import("../Checkbox"));

export type FormControlType =
  | "password"
  | "text"
  | "number"
  | "email"
  | "tel"
  | "date"
  | "datetime"
  | "radio"
  | "switch"
  | "confirm";

export type FormControlProps<ListOption extends SelectOption> =
  | ({
      type: "password" | "text" | "number" | "email" | "tel";
      labelProps: LabelBaseProps;
      onChange: (value: string) => void;
    } & InputProps<ListOption>)
  | ({
      type: "date";
      labelProps: LabelBaseProps;
      onChange: (value: number) => void;
    } & DatePickerProps)
  | ({
      type: "datetime";
      labelProps: LabelBaseProps;
      onChange: (value: number) => void;
    } & DatePickerProps)
  | ({
      type: "radio";
      labelProps: LabelBaseProps;
      onChange: (value: string) => void;
    } & RadioGroupProps<ListOption>)
  | ({
      type: "switch";
      labelProps: LabelBaseProps;
      onChange: (value: string) => void;
    } & SwitchProps)
  | ({
      type: "confirm";
      labelProps?: LabelBaseProps;
      onChange: (value: string) => void;
    } & CheckboxProps);

const FormControl = <ListOption extends SelectOption>(
  { type, onChange, ...props }: FormControlProps<ListOption>,
  innerRef: React.Ref<HTMLInputElement>
) => {
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
              onChange={(e) => onChange(e.target.value as string)}
              ref={innerRef}
            />
          ) : type === "date" || type === "datetime" ? (
            <DatePicker
              {...(restProps as DatePickerProps)}
              onChange={(date) => onChange(date)}
              showTime={type === "datetime"}
            />
          ) : type === "radio" ? (
            <RadioGroup<ListOption>
              {...(restProps as RadioGroupProps<ListOption>)}
              onChange={onChange}
            />
          ) : type === "switch" ? (
            <Switch {...(restProps as SwitchProps)} onChange={onChange} />
          ) : (
            <Input
              ref={innerRef}
              type={type}
              onChange={(e: React.ChangeEvent<HTMLInputElement> | string) =>
                onChange(typeof e === "string" ? e : (e.target.value as string))
              }
              {...(restProps as InputProps<ListOption>)}
            />
          )}
        </Label>
      ) : (
        <Checkbox {...(restProps as CheckboxProps)} onChange={onChange} />
      )}
    </Suspense>
  );
};

export default React.forwardRef(FormControl) as <
  ListOption extends SelectOption,
>(
  props: FormControlProps<ListOption> & { ref?: React.Ref<HTMLInputElement> }
) => JSX.Element;
