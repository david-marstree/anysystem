import React, { Suspense } from "react";
import type { InputProps } from "../Input";
import type { LabelBaseProps } from "../Label";
import type { PasswordInputProps } from "../PasswordInput";
import type { DatePickerProps } from "../DatePicker";
import RadioGroup, { RadioGroupProps } from "../RadioGroup";
import type { SwitchProps } from "../Switch";
import type { SelectOption } from "../Selectbox";

const Label = React.lazy(() => import("../Label"));
const Input = React.lazy(() => import("../Input"));
const PasswordInput = React.lazy(() => import("../PasswordInput"));
const DatePicker = React.lazy(() => import("../DatePicker"));
const Switch = React.lazy(() => import("../Switch"));

export type FormControlProps<ListOption extends SelectOption> =
  | (InputProps<ListOption> & {
      type: "password" | "text" | "tel" | "number" | "email";
      labelProps: LabelBaseProps;
    })
  | (DatePickerProps & {
      type: "date";
      labelProps: LabelBaseProps;
    })
  | (DatePickerProps & {
      type: "datetime";
      labelProps: LabelBaseProps;
    })
  | (RadioGroupProps<ListOption> & {
      type: "radio";
      labelProps: LabelBaseProps;
    })
  | (SwitchProps & {
      type: "switch";
      labelProps: LabelBaseProps;
    });

const FormControl = <ListOption extends SelectOption>(
  { type, labelProps, ...props }: FormControlProps<ListOption>,
  innerRef: React.Ref<HTMLInputElement>
) => {
  return (
    <Suspense fallback={null}>
      <Label
        type={
          type === "radio"
            ? "normal"
            : type === "switch"
              ? "horizontal"
              : undefined
        }
        {...(labelProps as LabelBaseProps)}
      >
        {type === "password" ? (
          <PasswordInput {...(props as PasswordInputProps)} ref={innerRef} />
        ) : type === "date" || type === "datetime" ? (
          <DatePicker
            {...(props as DatePickerProps)}
            showTime={type === "datetime"}
          />
        ) : type === "radio" ? (
          <RadioGroup<ListOption> {...(props as RadioGroupProps<ListOption>)} />
        ) : type === "switch" ? (
          <Switch {...(props as SwitchProps)} />
        ) : (
          <Input
            ref={innerRef}
            type={type}
            {...(props as InputProps<ListOption>)}
          />
        )}
      </Label>
    </Suspense>
  );
};

export default React.forwardRef(FormControl) as <
  ListOption extends SelectOption,
>(
  props: FormControlProps<ListOption> & { ref?: React.Ref<HTMLInputElement> }
) => JSX.Element;
