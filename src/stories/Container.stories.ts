import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "../../lib/";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    className: {
      control: { type: "text" },
      description: "自定義 CSS 類名",
    },
    children: {
      control: { type: "text" },
      description: "容器內容",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Basic: Story = {
  args: {
    children: "這是一個居中的容器，最大寬度為 lg",
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "bg-gray-100 dark:bg-gray-800",
    children: "帶有自定義背景色的容器",
  },
};
