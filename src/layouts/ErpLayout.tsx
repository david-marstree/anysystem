import React from "react";
import { useLocation } from "react-router-dom";
import { SideMenuLayout, Navbar, NavList } from "../../lib/";
import type { SideMenuHandler } from "../../lib/";
//constants
import { MENU_LIST } from "../constants/menu";

export type ErpLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const ErpLayout: React.FC<ErpLayoutProps> = ({ title, children }) => {
  const menuRef = React.useRef<SideMenuHandler>(null);
  const location = useLocation();
  return (
    <SideMenuLayout
      ref={menuRef}
      header={<Navbar title={title} menuRef={menuRef} />}
      menu={<NavList list={MENU_LIST} location={location} />}
    >
      {children}
    </SideMenuLayout>
  );
};

export default ErpLayout;
