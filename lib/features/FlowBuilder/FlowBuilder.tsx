import React, { Fragment } from "react";
import {
  ReactFlowProvider,
  ReactFlow,
  Background,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  OnConnect,
  addEdge,
  Node,
  Edge,
} from "@xyflow/react";
import { Icon } from "../../components/";

import { NODE_TYPES } from "./constants/nodeType";

import "@xyflow/react/dist/style.css";

const initialNodes: Node[] = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const FlowBuilder: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = React.useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <div className="flex w-full h-full">
      <div className="w-[320px] shadow h-full">
        <ul className="p-2 grid gap-2 grid-cols-2">
          {NODE_TYPES.map((c, i) => (
            <Fragment key={i}>
              {c && c.data && c.id && (
                <li className="border border-gray-400 rounded bg-gray-50 dark:bg-gray-800 space-x-2">
                  <button
                    type="button"
                    className="flex items-center justify-start w-full p-2 gap-2"
                    onClick={() => {
                      setNodes((nds) => {
                        nds.push({
                          id: "3",
                          position: { x: 0, y: 0 },
                          data: { label: "3" },
                        });
                        return nds;
                      });
                    }}
                  >
                    <Icon name={c.icon} />
                    <span>{c.name}</span>
                  </button>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <ReactFlowProvider>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default FlowBuilder;
