import type { Meta, StoryObj } from "@storybook/react";
import { TelephoneInput } from "../../lib/";

const meta: Meta<typeof TelephoneInput> = {
  title: "Components/TelephoneInput",
  component: TelephoneInput,
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
      description: "電話號碼值",
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

type Story = StoryObj<typeof TelephoneInput>;

export const Basic: Story = {
  args: {
    name: "phone",
    value: "",
    placeholder: "請輸入電話號碼",
    labelProps: {
      label: "電話號碼",
      type: "border",
      variant: "md",
    },
  },
};

export const WithValue: Story = {
  args: {
    name: "phone",
    value: "0912345678",
    placeholder: "請輸入電話號碼",
    labelProps: {
      label: "聯絡電話",
      type: "border",
      variant: "md",
    },
  },
};

export const WithError: Story = {
  args: {
    name: "phone",
    value: "123",
    placeholder: "請輸入電話號碼",
    labelProps: {
      label: "電話號碼",
      type: "border",
      variant: "md",
      isError: true,
      errorMessage: "請輸入有效的電話號碼",
    },
  },
};

export const InternationalFormat: Story = {
  args: {
    name: "phone",
    value: "+886912345678",
    placeholder: "請輸入電話號碼",
    labelProps: {
      label: "國際電話",
      type: "border",
      variant: "md",
    },
  },
};
