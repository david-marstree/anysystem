import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../../lib/components/DatePicker/DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
      description: "input 的 name 屬性，表單識別用",
    },
    value: {
      control: { type: "text" },
      description: "目前的日期值（Unix timestamp 字串，單位秒）",
    },
    showTime: {
      control: { type: "boolean" },
      description: "是否顯示時間選擇",
    },
    readOnly: {
      control: { type: "boolean" },
      description: "是否唯讀",
    },
    onChange: {
      action: "changed",
      description: "日期變更時的 callback (value: string) => void",
      table: { category: "Events" },
    },
  },
};
export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Basic: Story = {
  args: {
    name: "birthday",
    value: Math.round(new Date("2022-01-01").getTime() / 1000).toString(),
    showTime: false,
    readOnly: false,
    labelProps: {
      label: "生日",
      isError: false,
      type: "border",
      variant: "md",
    },
  },
};

export const WithTime: Story = {
  args: {
    name: "meetingTime",
    value: Math.round(new Date("2022-01-01T15:30:00").getTime() / 1000).toString(),
    showTime: true,
    readOnly: false,
  },
};
