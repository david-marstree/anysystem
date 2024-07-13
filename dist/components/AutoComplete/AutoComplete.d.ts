import { default as React } from 'react';
import { AutoCompleteBaseHandler, AutoCompleteBaseProps } from './AutoCompleteBase';
import { AutoCompleteMultipleHandler, AutoCompleteMultipleProps } from './AutoCompleteMultiple';

export * from './AutoCompleteBase';
export { default as AutoCompleteBase } from './AutoCompleteBase';
export * from './AutoCompleteMultiple';
export { default as AutoCompleteMultiple } from './AutoCompleteMultiple';
export type AutoCompleteHandler = AutoCompleteBaseHandler | AutoCompleteMultipleHandler;
export type AutoCompleteProps = (AutoCompleteBaseProps | AutoCompleteMultipleProps) & {
    multiple?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<AutoCompleteProps & React.RefAttributes<AutoCompleteHandler>>;
export default _default;
