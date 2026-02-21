import { default as React } from '../../../node_modules/react';

export type NavItemObject = {
    label: string;
    path?: string;
    icon?: React.ComponentType<{
        size?: number;
    }>;
    title?: boolean;
    list?: NavItemObject[];
    onClick?: () => void;
};
export type NavListProps = {
    list: NavItemObject[];
    location?: {
        pathname: string;
    };
};
declare const NavList: ({ list, location }: NavListProps) => import("react/jsx-runtime").JSX.Element;
export default NavList;
