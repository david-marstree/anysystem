import React from "react";
import { Handle, Position } from "@xyflow/react";

export type BasicNodeProps = {
  data: Record<string, any>;
  isConnectable?: boolean;
};

const BasicNode: React.FC<BasicNodeProps> = ({
  data,
  isConnectable = true,
}) => {
  return (
    <div className="p-2 border border-gray-400 rounded bg-gray-50 dark:bg-gray-800">
      {data.label}
      <Handle
        type="target"
        position={Position.Top}
        className="bg-white border-2 border-blue-500 rounded-full size-2"
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default React.memo(BasicNode);
