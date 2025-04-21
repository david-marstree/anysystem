import React from "react";
import AutoCompleteBase from "./AutoCompleteBase";
import type { SelectOption } from "../Selectbox";
import type { LabelBaseProps } from "../Label";
import LabelBase from "../Label/Label";
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

/**
 * AutoComplete 元件的 Ref handler 型別，包含單選與多選的操作方法。
 */
export type AutoCompleteHandler =
  | AutoCompleteBaseHandler
  | AutoCompleteMultipleHandler;

/**
 * AutoComplete 元件的 Props 型別。
 *
 * @template ListOption 指定選項型別，需符合 SelectOption 結構
 * @property multiple 是否為多選模式
 * 其餘屬性請參考 AutoCompleteBaseProps / AutoCompleteMultipleProps
 */
export type AutoCompleteProps<ListOption extends SelectOption> = (
  | AutoCompleteBaseProps<ListOption>
  | AutoCompleteMultipleProps<ListOption>
) & {
  multiple?: boolean;
  labelProps?: LabelBaseProps;
};

/**
 * 自動完成輸入框元件（支援單選與多選）。
 *
 * - 若 multiple 為 true，則顯示多選自動完成；否則顯示單選自動完成。
 * - ListOption 泛型用於指定選項的型別，需符合 SelectOption 結構。
 *
 * @template ListOption 指定選項型別，需包含 label/value 屬性
 * @param props AutoCompleteProps，包含 multiple、options、value、onChange 等
 * @param innerRef React ref，取得元件方法
 */
const AutoComplete = <ListOption extends SelectOption>(
  { multiple, labelProps, ...props }: AutoCompleteProps<ListOption>,
  innerRef: React.Ref<AutoCompleteHandler>,
) => {
  const render = () => ( <>
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

  return labelProps ? (
    <LabelBase {...labelProps}>
      {render()}
    </LabelBase>
  ) : (
    render()
  );
};

export default React.forwardRef(AutoComplete) as <
  ListOption extends SelectOption,
>(
  props: AutoCompleteProps<ListOption> & {
    ref?: React.Ref<AutoCompleteHandler>;
  },
) => React.ReactElement;
