import React from "react";
import { twMerge } from "tailwind-merge";
import { useDroppable } from "@dnd-kit/core";
import { FormBuilderData } from "../type";
import { FormContent, FormFieldWithStructure } from "../../../components";

export type DroppableProps = {
  id: string;
  data?: FormBuilderData[];
  className?: string;
  children?: React.ReactNode;
};
const Droppable: React.FC<DroppableProps> = ({
  id,
  data,
  className,
  children,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data,
  });

  const fields: FormFieldWithStructure = data
    ? [
        data.map((d) => ({
          ...d.data,
          id: d.id,
          name: /\-/.test(d.name)
            ? d.name
            : `${d.name}-${new Date().getTime()}`,
        })),
      ]
    : [];

  return (
    <div
      id={id}
      ref={setNodeRef}
      className={twMerge(
        className,
        isOver && "bg-blue-50 border-2 border-blue-500"
      )}
    >
      {data && data.length > 0 ? (
        <FormContent fields={fields} isBuilder={true} />
      ) : children ? (
        children
      ) : (
        <></>
      )}
    </div>
  );
};

export default Droppable;
