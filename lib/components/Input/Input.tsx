import React from "react";
import InputBase from "./InputBase";
import type { InputBaseProps } from "./InputBase";

export type InputProps = InputBaseProps;

const Input = (
  { type, ...props }: InputProps,
  innerRef: React.Ref<HTMLInputElement>,
) => {
  return <InputBase {...(props as InputBaseProps)} ref={innerRef} />;
};

export default React.forwardRef(Input) as (
  props: InputProps & { ref?: React.Ref<HTMLInputElement> },
) => React.ReactElement;
