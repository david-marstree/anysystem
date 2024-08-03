import React from "react";
import { SideMenuLayout, Navbar, NavList } from "../../lib/";
import type { SideMenuHandler } from "../../lib/";

export type ErpLayoutProps = {
  children: React.ReactNode;
};

const ErpLayout: React.FC<ErpLayoutProps> = ({ children }) => {
  const menuRef = React.useRef<SideMenuHandler>(null);
  return (
    <SideMenuLayout
      ref={menuRef}
      header={<Navbar menuRef={menuRef} />}
      menu={
        <NavList
          list={[
            { label: "Home", path: "/", icon: "AiOutlineHome" },
            { label: "About", path: "/about", icon: "AiOutlineUser" },
          ]}
        />
      }
    >
      {children}
    </SideMenuLayout>
  );
};

export default ErpLayout;
