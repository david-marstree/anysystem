import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../../lib/";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "標籤文字",
    },
    htmlFor: {
      control: { type: "text" },
      description: "對應的 input id",
    },
    isError: {
      control: { type: "boolean" },
      description: "是否顯示錯誤狀態",
    },
    errorMessage: {
      control: { type: "text" },
      description: "錯誤訊息",
    },
    type: {
      control: { type: "radio" },
      options: ["border", "normal", "horizontal"],
      description: "標籤樣式類型",
      table: {
        defaultValue: { summary: "border" },
      },
    },
    variant: {
      control: { type: "radio" },
      options: ["sm", "md"],
      description: "標籤尺寸",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    className: {
      control: { type: "text" },
      description: "自定義 CSS 類名",
    },
    children: {
      control: { type: "text" },
      description: "標籤包裹的內容",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Border: Story = {
  args: {
    label: "使用者名稱",
    type: "border",
    variant: "md",
    children: "表單欄位內容",
  },
};

export const Normal: Story = {
  args: {
    label: "電子郵件",
    type: "normal",
    variant: "md",
    children: "表單欄位內容",
  },
};

export const Horizontal: Story = {
  args: {
    label: "密碼",
    type: "horizontal",
    variant: "md",
    children: "表單欄位內容",
  },
};

export const WithError: Story = {
  args: {
    label: "必填欄位",
    type: "border",
    variant: "md",
    isError: true,
    errorMessage: "此欄位為必填",
    children: "表單欄位內容",
  },
};

export const Small: Story = {
  args: {
    label: "小尺寸標籤",
    type: "border",
    variant: "sm",
    children: "表單欄位內容",
  },
};
