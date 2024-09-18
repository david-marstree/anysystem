import React from "react";
import _ from "lodash";
import { twMerge } from "tailwind-merge";
import { useSortable } from "@dnd-kit/sortable";
import { FormField, Icon } from "../../../components";
//contexts
import { FormBuilderContext } from "../contexts/FormBuilderContext";

export type ControllerProps = {
  field: FormField;
};

const Controller: React.FC<ControllerProps> = ({ field }) => {
  const { values, removeItem } = React.useContext(FormBuilderContext);

  const rowIndex = values.findIndex((r) =>
    _.some(r.data, (d) => d.id === field.id)
  );
  if (rowIndex < 0) return null;
  const id =
    values[rowIndex].data.length === 1 ? values[rowIndex].id : field.id;

  const { listeners, attributes } = useSortable({
    id: id || "form-control",
  });

  const handleRemove = () => {
    if (!field.id) return;
    removeItem(field.id);
  };

  return (
    <div
      className={twMerge(
        "absolute inset-0 group form-builder-holder",
        "hover:border-2 hover:border-blue-500"
      )}
    >
      <div className="relative inset-0">
        <div className="absolute top-0 right-0 hidden group-hover:block">
          <button
            type="button"
            className="p-1 bg-gray-300 hover:bg-gray-200"
            {...listeners}
            {...attributes}
          >
            <Icon name="AiOutlineDrag" />
          </button>
          <button
            type="button"
            className="p-1 bg-gray-300 hover:bg-gray-200"
            onClick={handleRemove}
          >
            <Icon name="AiOutlineDelete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controller;
