import React from "react";
import { FormBuilderColumn } from "../type";
import Draggable from "./Draggable";
import DraggableFormControl from "./DraggableFormControl";
import { SelectOption } from "@/components";

export type BuilderColumnProps = {
  id: string;
  data: FormBuilderColumn;
  className?: string;
};

const BuilderColumn: React.FC<BuilderColumnProps> = ({
  id,
  data,
  className,
}) => {
  const { data: formField } = data;
  return (
    <Draggable id={id} isAddListener={false} className={className}>
      <DraggableFormControl<SelectOption> field={{ ...formField, id }} />
    </Draggable>
  );
};

export default BuilderColumn;
