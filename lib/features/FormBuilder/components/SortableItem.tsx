import React from "react";
import { twMerge } from "tailwind-merge";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FormBuilderData } from "../type";
import { FormContent, FormFieldWithStructure } from "../../../components";

export type SortableItemProps = {
  id: string;
  data?: FormBuilderData[];
  className?: string;
};
const SortableItem: React.FC<SortableItemProps> = ({ id, data, className }) => {
  const { setNodeRef, transition, transform, isDragging } = useSortable({
    id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

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
      className={twMerge(className, isDragging && "z-50, opacity-50")}
      style={style}
    >
      {data && data.length > 0 && <FormContent fields={fields} id={id} />}
    </div>
  );
};

export default SortableItem;
