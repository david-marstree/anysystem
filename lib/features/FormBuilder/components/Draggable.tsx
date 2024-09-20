import React from "react";
import { twMerge } from "tailwind-merge";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export type DraggableProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  isAddListener?: boolean;
};

const Draggable: React.FC<DraggableProps> = ({
  id,
  children,
  className,
  isAddListener = true,
}) => {
  const { setNodeRef, transform, isDragging, listeners, attributes } =
    useSortable({
      id,
    });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={twMerge(className, isDragging && "relative")}
      {...(isAddListener === true && {
        ...listeners,
        ...attributes,
      })}
    >
      {children}
      {isDragging && <div className="absolute inset-0 bg-blue-500"></div>}
    </div>
  );
};

export default Draggable;
