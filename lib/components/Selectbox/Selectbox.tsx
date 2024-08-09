import React from "react";
import type {
  SelectboxBaseProps,
  SelectboxBaseHandler,
  SelectOption,
} from "./SelectboxBase";
import SelectboxBase from "./SelectboxBase";
import type {
  SelectboxMultipleProps,
  SelectboxMultipleHandler,
} from "./SelectboxMultiple";
import SelectboxMultiple from "./SelectboxMultiple";

export type SelectboxProps<ListOption extends SelectOption> = (
  | SelectboxBaseProps<ListOption>
  | SelectboxMultipleProps<ListOption>
) & {
  multiple?: boolean;
};

export type SelectboxHandler = SelectboxBaseHandler | SelectboxMultipleHandler;

const Selectbox = <ListOption extends SelectOption>(
  { multiple = false, ...props }: SelectboxProps<ListOption>,
  innerRef: React.Ref<SelectboxHandler>,
) => {
  if (multiple === true) {
    return (
      <SelectboxMultiple<ListOption>
        ref={innerRef as React.Ref<SelectboxMultipleHandler>}
        {...(props as SelectboxMultipleProps<ListOption>)}
      />
    );
  }
  return (
    <SelectboxBase<ListOption>
      ref={innerRef as React.Ref<SelectboxBaseHandler>}
      {...(props as SelectboxBaseProps<ListOption>)}
    />
  );
};

export default React.forwardRef(Selectbox) as <ListOption extends SelectOption>(
  props: SelectboxProps<ListOption> & { ref?: React.Ref<SelectboxHandler> },
) => React.ReactElement;
