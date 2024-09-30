import React, { Fragment } from "react";
import { NODE_TYPES } from "../constants/nodeType";
import { DndContext } from "../contexts/DndContext";
import { NodeType } from "../types";

const Sidebar: React.FC = () => {
  const { setData } = React.useContext(DndContext);

  const handleDragStart = (e: React.DragEvent, data: NodeType) => {
    e.dataTransfer.effectAllowed = "move";
    setData(data);
  };

  return (
    <ul className="p-2 grid gap-2 grid-cols-1">
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
                {c.icon && <c.icon />}
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
