import React from "react";
import { Text, Icon } from "../../../../components/";
import { Handle, Position } from "@xyflow/react";

export type BasicNodeProps = {
  data: Record<string, any>;
  isConnectable?: boolean;
};

const BasicConfigureNode: React.FC<BasicNodeProps> = ({
  data,
  isConnectable = true,
}) => {
  return (
    <div className="px-3 py-2 border border-gray-400 rounded bg-gray-50 dark:bg-gray-800 min-w-40">
      <div className="flex items-center justify-start gap-2">
        <Icon name={data.icon} />
        <Text tag="h4" className="text-sm font-semibold">
          {data.label}
        </Text>
      </div>
      <Text tag="span" className="text-xs text-gray-500">
        {data.descritpion}
      </Text>

      <Handle
        type="source"
        position={Position.Right}
        className="bg-white border-2 border-blue-500 rounded-full size-2"
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default React.memo(BasicConfigureNode);

export const nodeTypes = {
  basicConfig: React.memo(BasicConfigureNode),
};
