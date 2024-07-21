import React from "react";
import InputBase from "./InputBase";
import type { InputBaseProps } from "./InputBase";

export type InputProps = InputBaseProps;

export const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, innerRef) => {
  return <InputBase {...props} ref={innerRef} />;
};

export default React.forwardRef(Input);
