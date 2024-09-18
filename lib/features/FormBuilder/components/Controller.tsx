import React from "react";
import { twMerge } from "tailwind-merge";
import { FormField, Icon } from "../../../components";
//contexts
import { FormBuilderContext } from "../contexts/FormBuilderContext";

export type ControllerProps = {
  field: FormField;
};

const Controller: React.FC<ControllerProps> = ({ field }) => {
  const { removeItem } = React.useContext(FormBuilderContext);

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
            className="p-1 bg-gray-300"
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
