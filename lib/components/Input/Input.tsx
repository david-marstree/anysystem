import React from "react";
import InputBase from "./InputBase";
import type { InputBaseProps } from "./InputBase";

import InputTel from "./InputTel";
import type { InputTelProps } from "./InputTel";

export type InputProps = InputBaseProps | InputTelProps;

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, ...props },
  innerRef,
) => {
  if (type === "tel") {
    return <InputTel {...(props as InputTelProps)} ref={innerRef} />;
  }

  return <InputBase {...(props as InputBaseProps)} ref={innerRef} />;
};

export default React.forwardRef(Input);
