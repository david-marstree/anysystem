import { default as React } from 'react';
import { SelectboxProps, SelectboxHandler } from './Selectbox';

export type FormSelectboxProps = SelectboxProps & {
    name: string;
};
declare const _default: React.ForwardRefExoticComponent<FormSelectboxProps & React.RefAttributes<SelectboxHandler>>;
export default _default;
