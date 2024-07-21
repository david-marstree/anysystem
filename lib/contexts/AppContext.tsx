import React from "react";
import { BrowserRouter } from "react-router-dom";

export type AppContextType = {
  appName: string;
};

export const AppContext = React.createContext<AppContextType>({
  appName: "",
});

export type AppProviderProps = {
  appName: string;
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({
  appName,
  children,
}) => (
  <AppContext.Provider value={{ appName }}>
    <BrowserRouter>{children}</BrowserRouter>
  </AppContext.Provider>
);
