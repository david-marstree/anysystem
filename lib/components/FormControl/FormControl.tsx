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

export type FormControlProps<ListOption extends SelectOption> =
  | ({
      type: "password" | "text" | "tel" | "number" | "email";
      labelProps: LabelBaseProps;
    } & InputProps<ListOption>)
  | ({
      type: "date";
      labelProps: LabelBaseProps;
    } & DatePickerProps)
  | ({
      type: "datetime";
      labelProps: LabelBaseProps;
    } & DatePickerProps)
  | ({
      type: "radio";
      labelProps: LabelBaseProps;
    } & RadioGroupProps<ListOption>)
  | ({
      type: "switch";
      labelProps: LabelBaseProps;
    } & SwitchProps)
  | ({
      type: "confirm";
      labelProps?: LabelBaseProps;
    } & CheckboxProps);

const FormControl = <ListOption extends SelectOption>(
  { type, ...props }: FormControlProps<ListOption>,
  innerRef: React.Ref<HTMLInputElement>
) => {
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
          {...(props?.labelProps
            ? (props.labelProps as LabelBaseProps)
            : { label: "" })}
        >
          {type === "password" ? (
            <PasswordInput {...(props as PasswordInputProps)} ref={innerRef} />
          ) : type === "date" || type === "datetime" ? (
            <DatePicker
              {...(props as DatePickerProps)}
              showTime={type === "datetime"}
            />
          ) : type === "radio" ? (
            <RadioGroup<ListOption>
              {...(props as RadioGroupProps<ListOption>)}
            />
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
      ) : (
        <Checkbox {...(props as CheckboxProps)} />
      )}
    </Suspense>
  );
};

export default React.forwardRef(FormControl) as <
  ListOption extends SelectOption,
>(
  props: FormControlProps<ListOption> & { ref?: React.Ref<HTMLInputElement> }
) => JSX.Element;
