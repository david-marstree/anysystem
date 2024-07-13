import React from "react";
import AutoCompleteBase from "./AutoCompleteBase";
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
export type AutoCompleteProps = (
  | AutoCompleteBaseProps
  | AutoCompleteMultipleProps
) & {
  multiple?: boolean;
};

const AutoComplete: React.ForwardRefRenderFunction<
  AutoCompleteHandler,
  AutoCompleteProps
> = ({ multiple, ...props }, innerRef) => {
  return (
    <>
      {multiple === true ? (
        <AutoCompleteMultiple
          ref={innerRef as React.Ref<AutoCompleteMultipleHandler>}
          {...(props as AutoCompleteMultipleProps)}
        />
      ) : (
        <AutoCompleteBase
          ref={innerRef as React.Ref<AutoCompleteBaseHandler>}
          {...(props as AutoCompleteBaseProps)}
        />
      )}
    </>
  );
};

export default React.forwardRef(AutoComplete);
