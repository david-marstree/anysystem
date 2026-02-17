import React from "react";

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

export const AppProvider = ({
  appName,
  children,
}: AppProviderProps) => <AppContext.Provider value={{ appName }}>{children}</AppContext.Provider>;
