import React from "react";
import InputBase from "./InputBase";
import type { InputBaseProps } from "./InputBase";

import InputTel from "./InputTel";
import type { InputTelProps } from "./InputTel";

import type { SelectOption } from "../Selectbox";

export type InputProps<ListOption extends SelectOption> =
  | InputBaseProps
  | InputTelProps<ListOption>;

const Input = <ListOption extends SelectOption>(
  { type, ...props }: InputProps<ListOption>,
  innerRef: React.Ref<HTMLInputElement>,
) => {
  if (type === "tel") {
    return (
      <InputTel {...(props as InputTelProps<ListOption>)} ref={innerRef} />
    );
  }

  return <InputBase {...(props as InputBaseProps)} ref={innerRef} />;
};

export default React.forwardRef(Input) as <ListOption extends SelectOption>(
  props: InputProps<ListOption> & { ref?: React.Ref<HTMLInputElement> },
) => JSX.Element;
