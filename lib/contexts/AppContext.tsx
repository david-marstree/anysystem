import React from "react";
import { BrowserRouter } from "react-router-dom";

const AppContext = React.createContext({});

export type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <AppContext.Provider value={{}}>
    <BrowserRouter>{children}</BrowserRouter>
  </AppContext.Provider>
);
