import React from "react";
import { CgArrowAlignV } from "react-icons/cg";
import { useSortable } from "@dnd-kit/sortable";
import { FormBuilderRow } from "../type";

export type RowControllerProps = {
  row: FormBuilderRow;
  className?: string;
};

const RowController: React.FC<RowControllerProps> = ({ row, className }) => {
  const { listeners, attributes } = useSortable({
    id: row.id || "form-control-row",
  });
  return (
    <div className={className}>
      <button
        type="button"
        className="p-1 bg-gray-300 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
        {...listeners}
        {...attributes}
      >
        <CgArrowAlignV />
      </button>
    </div>
  );
};

export default RowController;
