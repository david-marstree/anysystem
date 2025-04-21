import { default as React } from '../../../node_modules/react';
import { SideMenuHandler } from '../../layouts';

export type NavbarProps = {
    title?: string;
    menuRef?: React.RefObject<SideMenuHandler>;
    children?: React.ReactNode;
};
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
