import { default as React } from '../../../node_modules/react';

export type NavItemObject = {
    label: string;
    path?: string;
    icon?: React.FC;
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
declare const NavList: React.FC<NavListProps>;
export default NavList;
