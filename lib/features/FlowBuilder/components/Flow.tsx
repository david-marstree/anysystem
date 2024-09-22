import React from "react";
import {
  ReactFlow,
  Background,
  MiniMap,
  Controls,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  OnConnect,
  addEdge,
  Node,
  Edge,
  MarkerType,
  useReactFlow,
  OnNodesChange,
  NodeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
//contexts
import { DndContext } from "../contexts/DndContext";
//components
import { nodeTypes as BasicConfigureNodeType } from "./nodes/BasicConfigureNode";
import ConnectionLine from "./ConnectionLine";

const nodeTypes = {
  ...BasicConfigureNodeType,
};

export type FlowHandlers = {
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  values: () => {
    nodes: Node[];
    edges: Edge[];
  };
};

export type FlowProps = {
  values: {
    nodes: Node[];
    edges: Edge[];
  };
  children?: React.ReactNode;
};

const Flow: React.ForwardRefRenderFunction<FlowHandlers, FlowProps> = (
  { values, children },
  innerRef
) => {
  const { nodes: initialNodes, edges: initialEdges } = values;
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const { data } = React.useContext(DndContext);

  const handleNodesChange: OnNodesChange = React.useCallback(
    (changes) => {
      setNodes((nds) => {
        const parsedChanges = changes.reduce((res, change) => {
          if (!change) return res;
          const validChange =
            change.type !== "remove" ||
            (change.type === "remove" &&
              nodes.find((n) => n.id === change.id)?.data.deletable);
          if (validChange) {
            res.push(change);
          }
        }, [] as any);

        return applyNodeChanges(parsedChanges, nds);
      });
    },
    [setNodes]
  );

  const onConnect: OnConnect = React.useCallback(
    (connection) => {
      setEdges((eds) =>
        addEdge(
          { ...connection, markerEnd: { type: MarkerType.ArrowClosed } },
          eds
        )
      );
    },
    [setEdges]
  );

  const onDragOver = React.useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = React.useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        ...data,
        id: new Date().getTime().toString(),
        position,
      };

      setNodes((nds) => nds.concat(newNode as Node));
    },
    [screenToFlowPosition, data]
  );

  React.useImperativeHandle(innerRef, () => ({
    setNodes,
    values: () => ({ nodes, edges }),
  }));

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      connectionLineComponent={ConnectionLine}
      onConnect={onConnect}
      onDragOver={onDragOver}
      onDrop={onDrop}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
      {children}
    </ReactFlow>
  );
};

export default React.forwardRef(Flow);
