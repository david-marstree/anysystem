import React from "react";
import { twMerge } from "tailwind-merge";
import { useDroppable } from "@dnd-kit/core";

export type DroppableProps = {
  id: string;
  className?: string;
  children?: React.ReactNode;
};
const Droppable: React.FC<DroppableProps> = ({ id, className, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={twMerge(
        className,
        isOver && "bg-blue-50 border-2 border-blue-500"
      )}
    >
      {children}
    </div>
  );
};

export default Droppable;
