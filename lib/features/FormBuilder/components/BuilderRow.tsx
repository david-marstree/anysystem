import React from "react";
import { twMerge } from "tailwind-merge";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { FormBuilderRow } from "../type";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import BuilderColumn from "./BuilderColumn";
import { getColumns } from "../../../components/";
import RowController from "./RowController";

export type BuilderRowProps = {
  id: string;
  data: FormBuilderRow;
  className?: string;
};

const BuilderRow: React.FC<BuilderRowProps> = ({ id, data, className }) => {
  const { data: columns } = data;
  const columnClassName = getColumns({ md: columns.length });
  return (
    <>
      <Draggable id={id} className="relative p-1 group" isAddListener={false}>
        <Droppable
          id={id}
          className={twMerge("grid gap-2", className, columnClassName)}
        >
          <SortableContext
            items={data.data.map((r) => r.id)}
            strategy={horizontalListSortingStrategy}
          >
            {columns.map((column) => (
              <BuilderColumn key={column.id} id={column.id} data={column} />
            ))}
          </SortableContext>
        </Droppable>
        <RowController
          row={data}
          className="absolute hidden top-1 left-1 group-hover:block transform"
        />
      </Draggable>
    </>
  );
};

export default BuilderRow;
