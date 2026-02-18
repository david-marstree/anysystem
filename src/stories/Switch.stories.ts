import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "../../lib/";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: { type: "text" },
      description: "switch 的 name 屬性",
    },
    value: {
      control: { type: "text" },
      description: "switch 的值",
    },
    checked: {
      control: { type: "boolean" },
      description: "是否選中",
      table: {
        defaultValue: { summary: false },
      },
    },
    variant: {
      control: { type: "radio" },
      options: ["sm", "md"],
      description: "開關尺寸",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    onChange: {
      action: "changed",
      description: "值改變時的回調函數 (v: boolean) => void",
      table: { category: "Events" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = {
  args: {
    name: "notifications",
    value: "1",
    checked: false,
  },
};

export const On: Story = {
  args: {
    name: "notifications",
    value: "1",
    checked: true,
  },
};

export const Small: Story = {
  args: {
    name: "darkMode",
    value: "1",
    checked: true,
    variant: "sm",
  },
};

export const Medium: Story = {
  args: {
    name: "autoSave",
    value: "1",
    checked: false,
    variant: "md",
  },
};
