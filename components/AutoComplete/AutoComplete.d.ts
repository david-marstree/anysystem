import { default as React } from '../../../node_modules/react';
import { SelectOption } from '../Selectbox';
import { LabelBaseProps } from '../Label';
import { AutoCompleteBaseHandler, AutoCompleteBaseProps } from './AutoCompleteBase';
import { AutoCompleteMultipleHandler, AutoCompleteMultipleProps } from './AutoCompleteMultiple';

export * from './AutoCompleteBase';
export { default as AutoCompleteBase } from './AutoCompleteBase';
export * from './AutoCompleteMultiple';
export { default as AutoCompleteMultiple } from './AutoCompleteMultiple';
/**
 * AutoComplete 元件的 Ref handler 型別，包含單選與多選的操作方法。
 */
export type AutoCompleteHandler = AutoCompleteBaseHandler | AutoCompleteMultipleHandler;
/**
 * AutoComplete 元件的 Props 型別。
 *
 * @template ListOption 指定選項型別，需符合 SelectOption 結構
 * @property multiple 是否為多選模式
 * 其餘屬性請參考 AutoCompleteBaseProps / AutoCompleteMultipleProps
 */
export type AutoCompleteProps<ListOption extends SelectOption> = (AutoCompleteBaseProps<ListOption> | AutoCompleteMultipleProps<ListOption>) & {
    multiple?: boolean;
    labelProps?: LabelBaseProps;
};
declare const _default: <ListOption extends SelectOption>(props: AutoCompleteProps<ListOption> & {
    ref?: React.Ref<AutoCompleteHandler>;
}) => React.ReactElement;
export default _default;
