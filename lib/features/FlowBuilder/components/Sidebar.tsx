import React, { Fragment } from "react";
import { NODE_TYPES } from "../constants/nodeType";
import { Icon } from "../../../components";
import { DndContext } from "../contexts/DndContext";
import { NodeType } from "../types";

const Sidebar: React.FC = () => {
  const { setData } = React.useContext(DndContext);

  const handleDragStart = (e: React.DragEvent, data: NodeType) => {
    setData(data);
    console.log(data);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <ul className="p-2 grid gap-2 grid-cols-2">
      {NODE_TYPES.map((c, i) => (
        <Fragment key={i}>
          {c && c.data && c.id && (
            <li className="border border-gray-400 rounded bg-gray-50 dark:bg-gray-800 space-x-2">
              <button
                type="button"
                className="flex items-center justify-start w-full p-2 gap-2"
                draggable
                onDragStart={(e) =>
                  handleDragStart(e, { type: c.type, data: c.data })
                }
              >
                <Icon name={c.icon} />
                <span>{c.name}</span>
              </button>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};
export default Sidebar;
