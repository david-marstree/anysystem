import React from "react";
import AutoCompleteBase from "./AutoCompleteBase";
import type { SelectOption } from "../Selectbox";
import type {
  AutoCompleteBaseHandler,
  AutoCompleteBaseProps,
} from "./AutoCompleteBase";
import AutoCompleteMultiple from "./AutoCompleteMultiple";
import type {
  AutoCompleteMultipleHandler,
  AutoCompleteMultipleProps,
} from "./AutoCompleteMultiple";
export * from "./AutoCompleteBase";
export { default as AutoCompleteBase } from "./AutoCompleteBase";
export * from "./AutoCompleteMultiple";
export { default as AutoCompleteMultiple } from "./AutoCompleteMultiple";

export type AutoCompleteHandler =
  | AutoCompleteBaseHandler
  | AutoCompleteMultipleHandler;
export type AutoCompleteProps<ListOption extends SelectOption> = (
  | AutoCompleteBaseProps<ListOption>
  | AutoCompleteMultipleProps<ListOption>
) & {
  multiple?: boolean;
};

const AutoComplete = <ListOption extends SelectOption>(
  { multiple, ...props }: AutoCompleteProps<ListOption>,
  innerRef: React.Ref<AutoCompleteHandler>,
) => {
  return (
    <>
      {multiple === true ? (
        <AutoCompleteMultiple<ListOption>
          ref={innerRef as React.Ref<AutoCompleteMultipleHandler>}
          {...(props as AutoCompleteMultipleProps<ListOption>)}
        />
      ) : (
        <AutoCompleteBase<ListOption>
          ref={innerRef as React.Ref<AutoCompleteBaseHandler>}
          {...(props as AutoCompleteBaseProps<ListOption>)}
        />
      )}
    </>
  );
};

export default React.forwardRef(AutoComplete) as <
  ListOption extends SelectOption,
>(
  props: AutoCompleteProps<ListOption> & {
    ref?: React.Ref<AutoCompleteHandler>;
  },
) => React.ReactElement;
