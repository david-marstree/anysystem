import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../../lib/components/Navbar/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "標題文字" },
    children: { control: "text", description: "插槽內容（預設置中）" },
  },
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Basic: Story = {
  args: {
    title: "我的後台",
    children: "這是置中的內容（可放搜尋列、Logo等）"
  },
};
