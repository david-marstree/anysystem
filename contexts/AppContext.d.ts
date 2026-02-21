import { default as React } from '../../node_modules/react';

export type AppContextType = {
    appName: string;
};
export declare const AppContext: React.Context<AppContextType>;
export type AppProviderProps = {
    appName: string;
    children: React.ReactNode;
};
export declare const AppProvider: ({ appName, children, }: AppProviderProps) => import("react/jsx-runtime").JSX.Element;
