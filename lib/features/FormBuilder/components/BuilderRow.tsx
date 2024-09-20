import React from "react";
import { DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { FormBuilderRow } from "../type";
import BuilderColumn from "./BuilderColumn";

export type BuilderRowProps = {
  id: string;
  data: FormBuilderRow;
};

const BuilderRow: React.FC<BuilderRowProps> = ({ id, data }) => {
  const { data: columns } = data;
  return (
    <Draggable id={id} className="p-10 border border-gray-500">
      <Droppable id={id} className="flex flex-row">
        <SortableContext
          items={data.data.map((r) => r.id)}
          strategy={horizontalListSortingStrategy}
        >
          {columns.map((column) => (
            <BuilderColumn key={column.id} id={column.id} data={column} />
          ))}
        </SortableContext>
      </Droppable>
    </Draggable>
  );
};

export default BuilderRow;
