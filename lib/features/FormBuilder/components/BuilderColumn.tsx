import React from "react";
import { FormBuilderColumn } from "../type";
import Draggable from "./Draggable";
import DraggableFormControl from "./DraggableFormControl";
import { SelectOption } from "@/components";

export type BuilderColumnProps = {
  id: string;
  data: FormBuilderColumn;
};

const BuilderColumn: React.FC<BuilderColumnProps> = ({ id, data }) => {
  const { data: formField } = data;
  console.log("id", id);
  return (
    <Draggable id={id} isAddListener={false}>
      <DraggableFormControl<SelectOption> field={{ ...formField, id }} />
    </Draggable>
  );
};

export default BuilderColumn;
