import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  FormControl,
  SelectOption,
  FormControlProps,
  FormField,
} from "../../../components/";
import Controller from "./Controller";

export type DraggableFormControlProps<ListOption extends SelectOption> = {
  isBuilder?: boolean;
  formControlProps: FormControlProps<ListOption>;
  field: FormField;
};

const DraggableFormControl = <ListOption extends SelectOption>({
  isBuilder,
  formControlProps,
  field,
}: DraggableFormControlProps<ListOption>): React.ReactElement => {
  const { setNodeRef, transform } = useDraggable({
    id: field.id || "form-control",
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style}>
      <FormControl<ListOption> {...formControlProps} />
      {isBuilder && <Controller field={field} />}
    </div>
  );
};

export default DraggableFormControl;
