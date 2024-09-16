import React from "react";
import { twMerge } from "tailwind-merge";
import { useDroppable } from "@dnd-kit/core";
import { FormBuilderData } from "./type";
import {
  Row,
  FormField,
  FormContent,
  FormFieldWithStructure,
} from "../../components";

export type DroppableProps = {
  id: string;
  data: FormBuilderData[];
};
const Droppable: React.FC<DroppableProps> = ({ id, data }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data,
  });

  const fields: FormFieldWithStructure = [data.map((d) => d.data)];

  return (
    <div
      id={id}
      ref={setNodeRef}
      className={twMerge(
        "space-y-2 py-2",
        isOver && "bg-blue-50 border-2 border-blue-500"
      )}
    >
      {data.length > 0 ? (
        <FormContent fields={fields} />
      ) : (
        <Row>
          <div
            className={twMerge(
              "flex items-start justify-center w-full p-2 border border-gray-300 border-dashed"
            )}
          >
            Empty
          </div>
        </Row>
      )}
    </div>
  );
};

export default Droppable;
