import React from "react";
import { twMerge } from "tailwind-merge";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { FormField } from "../../components";

export type DraggableProps = {
  id: string;
  data: FormField;
  children: React.ReactNode;
  className?: string;
};

const Draggable: React.FC<DraggableProps> = ({
  id,
  data,
  children,
  className,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data,
    });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      id={id}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={twMerge(className, isDragging && "z-50")}
    >
      {children}
    </div>
  );
};

export default Draggable;
