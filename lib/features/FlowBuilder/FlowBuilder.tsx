import React from "react";
import { ReactFlowProvider, Panel } from "@xyflow/react";
import { Button } from "../../components/";

import { DndProvider } from "./contexts/DndContext";
import Flow, { FlowHandlers } from "./components/Flow";
import Sidebar from "./components/Sidebar";

const FlowBuilder: React.FC = () => {
  const flowRef = React.useRef<FlowHandlers>(null);
  return (
    <ReactFlowProvider>
      <DndProvider>
        <div className="flex w-full h-full">
          <div className="w-[320px] shadow h-full">
            <Sidebar />
          </div>
          <div className="flex-1">
            <Flow ref={flowRef} values={{ nodes: [], edges: [] }}>
              <Panel position="top-right">
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => {
                    if (!flowRef.current) return;
                    console.log(flowRef.current.values());
                  }}
                >
                  Save
                </Button>
              </Panel>
            </Flow>
          </div>
        </div>
      </DndProvider>
    </ReactFlowProvider>
  );
};

export default FlowBuilder;
