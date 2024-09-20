import React from "react";
import { FormBuilderColumn } from "../type";
import Draggable from "./Draggable";

export type BuilderColumnProps = {
  id: string;
  data: FormBuilderColumn;
};

const BuilderColumn: React.FC<BuilderColumnProps> = ({ id, data }) => {
  return (
    <Draggable id={id} className="border border-gray-50">
      {data.name}
    </Draggable>
  );
};

export default BuilderColumn;
