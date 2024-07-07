import React from "react";
import type { SelectboxBaseProps, SelectboxBaseHandler } from "./SelectboxBase";
import SelectboxBase from "./SelectboxBase";
import type {
  SelectboxMultipleProps,
  SelectboxMultipleHandler,
} from "./SelectboxMultiple";
import SelectboxMultiple from "./SelectboxMultiple";

export type SelectboxProps = (SelectboxBaseProps | SelectboxMultipleProps) & {
  multiple?: boolean;
};

export type SelectboxHandler = SelectboxBaseHandler | SelectboxMultipleHandler;

const Selectbox: React.ForwardRefRenderFunction<
  SelectboxHandler,
  SelectboxProps
> = ({ multiple = false, ...props }, innerRef) => {
  if (multiple === true) {
    return (
      <SelectboxMultiple
        ref={innerRef as React.Ref<SelectboxMultipleHandler>}
        {...(props as SelectboxMultipleProps)}
      />
    );
  }
  return (
    <SelectboxBase
      ref={innerRef as React.Ref<SelectboxBaseHandler>}
      {...(props as SelectboxBaseProps)}
    />
  );
};

export default React.forwardRef(Selectbox);
