import type { Meta, StoryObj } from "@storybook/react-vite";
import Text from "../../lib/components/Text/Text";
import type { TextProps } from "../../lib/components/Text/Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
      description: "HTML tag 種類",
    },
    className: { control: "text", description: "自訂樣式類別" },
    children: { control: "text", description: "內文/標題內容" },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Heading1: Story = {
  args: {
    tag: "h1",
    children: "這是 h1 標題"
  },
};

export const Paragraph: Story = {
  args: {
    tag: "p",
    children: "這是一段普通段落文字。"
  },
};
