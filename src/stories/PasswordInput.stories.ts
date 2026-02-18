import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "../../lib/";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: { type: "text" },
      description: "input 的 name 屬性",
    },
    value: {
      control: { type: "text" },
      description: "密碼值",
    },
    placeholder: {
      control: { type: "text" },
      description: "佔位符文字",
    },
    labelProps: {
      control: { type: "object" },
      description: "傳遞給外層 Label 的 props",
      table: {
        type: { summary: "LabelBaseProps" },
      },
    },
    onChange: {
      action: "changed",
      description: "值改變時的回調函數",
      table: { category: "Events" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Basic: Story = {
  args: {
    name: "password",
    value: "",
    placeholder: "請輸入密碼",
    labelProps: {
      label: "密碼",
      type: "border",
      variant: "md",
    },
  },
};

export const WithValue: Story = {
  args: {
    name: "password",
    value: "mySecretPassword123",
    placeholder: "請輸入密碼",
    labelProps: {
      label: "密碼",
      type: "border",
      variant: "md",
    },
  },
};

export const WithError: Story = {
  args: {
    name: "password",
    value: "123",
    placeholder: "請輸入密碼",
    labelProps: {
      label: "密碼",
      type: "border",
      variant: "md",
      isError: true,
      errorMessage: "密碼長度至少需要 8 個字元",
    },
  },
};
