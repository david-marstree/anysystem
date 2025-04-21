import type { Meta, StoryObj } from "@storybook/react";
import NavList from "../../lib/components/NavList/NavList";
import type { NavItemObject } from "../../lib/components/NavList/NavList";
import { FaHome, FaUser } from "react-icons/fa";

const meta: Meta<typeof NavList> = {
  title: "Components/NavList",
  component: NavList,
  tags: ["autodocs"],
  argTypes: {
    list: { control: "object", description: "導航選單資料" },
    location: { control: "object", description: "目前路徑（高亮用）" },
  },
};
export default meta;

type Story = StoryObj<typeof NavList>;

const navListData: NavItemObject[] = [
  { label: "首頁", path: "/", icon: FaHome },
  { label: "個人資料", path: "/profile", icon: FaUser },
  {
    label: "管理", title: true
  },
  {
    label: "設定", path: "/settings"
  },
  {
    label: "更多", list: [
      { label: "子選單一", path: "/more/one" },
      { label: "子選單二", path: "/more/two" }
    ]
  }
];

export const Basic: Story = {
  args: {
    list: navListData,
    location: { pathname: "/profile" },
  },
};
