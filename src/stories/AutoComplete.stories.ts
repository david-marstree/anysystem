import type { Meta, StoryObj } from "@storybook/react-vite";
import { AutoComplete } from "../../lib/";

const meta: Meta<typeof AutoComplete> = {
  title: "Components/AutoComplete",
  component: AutoComplete,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AutoComplete>;

export const Basic: Story = {
  args: {
    name: "auto-complete-demo",
    labelProps: {
      label: "自動完成搜尋",
      isError: false,
      type: "border",
      variant: "md",
    },
    options: [
      { id: '1', value: "1", label: "Option 1", enable: true },
      { id: '2', value: "2", label: "Option 2", enable: true },
      { id: '3', value: "3", label: "Option 3", enable: true },
    ],
    placeholder: "請輸入關鍵字...",
    multiple: true,
    value: ["1", "2"],
  },
};

export const WithLabel: Story = {
  args: {
    name: "auto-complete-demo",
    options: [
      { id: '1', value: "1", label: "Option 1", enable: true },
      { id: '2', value: "2", label: "Option 2", enable: true },
      { id: '3', value: "3", label: "Option 3", enable: true },
    ],
    labelProps: {
      label: "自動完成搜尋",
      isError: false,
      type: "border",
      variant: "md",
    },
    placeholder: "請輸入關鍵字...",
  },
};
