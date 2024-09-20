import React from "react";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import { FormBuilderRow } from "../type";
import BuilderColumn from "./BuilderColumn";
import { getColumns } from "../../../components/";
import { twMerge } from "tailwind-merge";
import { DragOverlay } from "@dnd-kit/core";

export type BuilderRowProps = {
  id: string;
  data: FormBuilderRow;
};

const BuilderRow: React.FC<BuilderRowProps> = ({ id, data }) => {
  const { data: columns } = data;
  const columnClassName = getColumns({ md: columns.length });
  return (
    <>
      <Draggable id={id} className="p-2">
        <Droppable id={id} className={twMerge("grid gap-2", columnClassName)}>
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
    </>
  );
};

export default BuilderRow;
