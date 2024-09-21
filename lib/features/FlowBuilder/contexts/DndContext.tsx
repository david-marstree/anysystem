import React from "react";
import type { NodeType } from "../types";

export type DndContextType = {
  data: NodeType;
  setData: React.Dispatch<React.SetStateAction<NodeType>>;
};

export const DndContext = React.createContext({
  data: {},
  setData: (v: NodeType) => console.log(v),
});

export type DndProviderProps = {
  children: React.ReactNode;
};
export const DndProvider: React.FC<DndProviderProps> = ({ children }) => {
  const [data, setData] = React.useState({});

  return (
    <DndContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DndContext.Provider>
  );
};
