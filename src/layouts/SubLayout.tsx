import React from "react";
import { useLocation } from "react-router-dom";
import { SideMenuLayout, Navbar, NavList } from "../../lib/";
import type { SideMenuHandler } from "../../lib/";
import { MENU_LIST } from "../constants/menu";

export type SubLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const SubLayout: React.FC<SubLayoutProps> = ({ title, children }) => {
  const menuRef = React.useRef<SideMenuHandler>(null);
  const location = useLocation();

  return (
    <SideMenuLayout
      ref={menuRef}
      header={<Navbar title={title} menuRef={menuRef} />}
      menuType="fixed"
      menu={<NavList list={MENU_LIST} location={location} />}
    >
      {children}
    </SideMenuLayout>
  );
};

export default SubLayout;
