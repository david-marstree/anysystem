import { default as React } from '../../../node_modules/react';

export type SideMenuHandler = {
    toggleMenu: () => void;
    toggleSmMenu: () => void;
};
export type SideMenuProps = {
    header?: React.ReactNode;
    menu: React.ReactNode;
    menuType?: "static" | "fixed";
    children: React.ReactNode;
};
declare const _default: React.ForwardRefExoticComponent<SideMenuProps & React.RefAttributes<SideMenuHandler>>;
export default _default;
