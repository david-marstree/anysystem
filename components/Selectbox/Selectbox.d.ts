import { default as React } from '../../../node_modules/react';
import { SelectboxBaseProps, SelectboxBaseHandler, SelectOption } from './SelectboxBase';
import { SelectboxMultipleProps, SelectboxMultipleHandler } from './SelectboxMultiple';

export type SelectboxProps<ListOption extends SelectOption> = (SelectboxBaseProps<ListOption> | SelectboxMultipleProps<ListOption>) & {
    multiple?: boolean;
};
export type SelectboxHandler = SelectboxBaseHandler | SelectboxMultipleHandler;
declare const _default: <ListOption extends SelectOption>(props: SelectboxProps<ListOption> & {
    ref?: React.Ref<SelectboxHandler>;
}) => React.ReactElement;
export default _default;
