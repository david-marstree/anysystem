import React from "react";
import { SideMenuLayout, Navbar, NavList } from "../../lib/";
import type { SideMenuHandler } from "../../lib/";

export type ErpLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const ErpLayout: React.FC<ErpLayoutProps> = ({ title, children }) => {
  const menuRef = React.useRef<SideMenuHandler>(null);
  return (
    <SideMenuLayout
      ref={menuRef}
      header={<Navbar title={title} menuRef={menuRef} />}
      menu={
        <NavList
          list={[
            { label: "Home", path: "/", icon: "AiOutlineHome" },
            { label: "About", path: "/about", icon: "AiOutlineUser" },
            { label: "Builder", path: "/builder", icon: "AiFillBuild" },
          ]}
        />
      }
    >
      {children}
    </SideMenuLayout>
  );
};

export default ErpLayout;
