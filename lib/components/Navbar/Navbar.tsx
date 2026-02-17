import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SideMenuHandler } from "@/layouts";

export type NavbarProps = {
  title?: string;
  menuRef?: React.RefObject<SideMenuHandler>;
  children?: React.ReactNode;
};

const Navbar = ({ title, menuRef, children }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-10 flex h-[56px] w-full bg-white shadow dark:bg-gray-900 dark:text-white">
      <div className="relative flex items-center justify-between flex-auto w-full h-full">
        <div className="absolute hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform lg:block">
          {children}
        </div>

        {/*desktop sidemenu toggle*/}
        <button
          className="hidden w-[320px] items-center h-full justify-start gap-4 px-7 py-2 hover:bg-primary-100 dark:hover:bg-gray-700 lg:flex"
          onClick={() => menuRef?.current?.toggleMenu()}
        >
          <AiOutlineMenu />
          <span className="font-bold">{title || "Home"}</span>
        </button>

        {/*desktop sidemenu toggle*/}
        {/*mobile sidemenu toggle*/}
        <button
          className="flex items-center justify-start px-4 py-2 gap-4 hover:bg-primary-100 dark:hover:bg-gray-700 lg:hidden"
          onClick={() => menuRef?.current?.toggleSmMenu()}
        >
          <AiOutlineMenu />
          <span className="font-bold">{title || "Home"}</span>
        </button>
        {/*mobile sidemenu toggle*/}
      </div>
    </header>
  );
};

export default Navbar;
