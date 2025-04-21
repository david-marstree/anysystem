import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import SideMenu, { SideMenuHandler } from "../../lib/layouts/SideMenu/SideMenu";
import NavList from "../../lib/components/NavList";
import Navbar from "../../lib/components/Navbar";
const MENU_LIST = [
  { label: "Home", path: "/", icon: AiOutlineHome },
  { label: "About", path: "/about", icon: AiOutlineUser },
];


const meta: Meta<typeof SideMenu> = {
  title: "Layouts/SideMenu",
  component: SideMenu,
  tags: ["autodocs"],
  argTypes: {
    header: { control: "text", description: "側邊欄 Header 區塊" },
    menu: { control: "object", description: "側邊欄選單內容（ReactNode）" },
    menuType: { control: { type: "radio" }, options: ["static", "fixed"], description: "側邊欄型態" },
    children: { control: "text", description: "主內容區塊" },
  },
};
export default meta;

type Story = StoryObj<typeof SideMenu>;

const menuRef = React.createRef<SideMenuHandler>();

export const Basic: Story = {
  args: {
    ref: menuRef,
    header:<Navbar title="LOGO" menuRef={menuRef} />,
    menu: <NavList list={MENU_LIST} location={{ pathname: "/" }} />,
    menuType: "static",
    children: <div style={{ padding: 24 }}>這是主內容區域</div>,
  },
};
