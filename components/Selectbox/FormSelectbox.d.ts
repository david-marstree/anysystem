import { default as React } from '../../../node_modules/react';
import { SelectboxProps, SelectboxHandler } from './Selectbox';
import { SelectOption } from './SelectboxBase';

export type FormSelectboxProps<ListOption extends SelectOption> = SelectboxProps<ListOption> & {
    name: string;
};
declare const _default: <ListOption extends SelectOption>(props: FormSelectboxProps<ListOption> & {
    ref?: React.Ref<SelectboxHandler>;
}) => React.ReactElement;
export default _default;
