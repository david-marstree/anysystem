import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../lib/";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
      description: "input 的 name 屬性，表單識別用",
    },
    label: {
      control: { type: "text" },
      description: "顯示在 checkbox 旁的文字或元件",
    },
    hidden: {
      control: { type: "boolean" },
      description: "是否隱藏元件",
    },
    isError: {
      control: { type: "boolean" },
      description: "是否顯示錯誤樣式",
    },
    error: {
      control: { type: "boolean" },
      description: "（已廢棄）請用 isError 取代",
    },
    inputProps: {
      control: { type: "object" },
      description: "傳給 input 元素的額外 props",
    },
    onChange: {
      action: "changed",
      description: "值改變時的 callback (e: React.ChangeEvent<HTMLInputElement>) => void",
      table: { category: "Events" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    name: "agree",
    label: "我同意條款",
  },
};
