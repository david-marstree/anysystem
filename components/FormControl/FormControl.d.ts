import { default as React } from '../../../node_modules/react';
import { SelectOption } from '../Selectbox';
import { FormControlInputProps, FormControlDateTimeProps, FormControlRadioProps, FormControlSwitchProps, FormControlConfirmProps, FormControlTelephoneProps, FormControlSelectboxProps, FormControlAutoCompleteProps } from './type';

export type FormControlProps<ListOption extends SelectOption> = FormControlInputProps | FormControlDateTimeProps | FormControlRadioProps<ListOption> | FormControlSwitchProps | FormControlConfirmProps | FormControlTelephoneProps | FormControlSelectboxProps<ListOption> | FormControlAutoCompleteProps<ListOption>;
declare const FormControl: <ListOption extends SelectOption>({ type, onChange, variant, labelProps, ...props }: FormControlProps<ListOption>) => React.ReactElement;
export default FormControl;
