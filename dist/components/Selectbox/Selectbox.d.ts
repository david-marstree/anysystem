import { default as React } from 'react';
import { SelectboxBaseProps, SelectboxBaseHandler } from './SelectboxBase';
import { SelectboxMultipleProps, SelectboxMultipleHandler } from './SelectboxMultiple';

export type SelectboxProps = (SelectboxBaseProps | SelectboxMultipleProps) & {
    multiple?: boolean;
};
export type SelectboxHandler = SelectboxBaseHandler | SelectboxMultipleHandler;
declare const _default: React.ForwardRefExoticComponent<SelectboxProps & React.RefAttributes<SelectboxHandler>>;
export default _default;
