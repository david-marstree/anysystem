import React from "react";
import {
  FormControl,
  SelectOption,
  FormControlProps,
  FormField,
} from "../../../components/";
import Controller from "./Controller";

export type DraggableFormControlProps = {
  field: FormField;
};

const DraggableFormControl = <ListOption extends SelectOption>({
  field,
}: DraggableFormControlProps): React.ReactElement => {
  return (
    <div className="relative">
      <FormControl<ListOption>
        {...(field.componentProps as FormControlProps<ListOption>)}
      />
      <Controller field={field} />
    </div>
  );
};

export default DraggableFormControl;
