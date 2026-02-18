import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "../../lib/";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: { type: "text" },
      description: "radio group 的 name 屬性",
    },
    options: {
      control: { type: "object" },
      description: "選項列表",
      table: {
        type: { summary: "SelectOption[]" },
      },
    },
    value: {
      control: { type: "text" },
      description: "當前選中的值",
    },
    valueField: {
      control: { type: "text" },
      description: "用作值的欄位名稱",
      table: {
        defaultValue: { summary: "value" },
      },
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

type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  args: {
    name: "gender",
    options: [
      { id: "1", value: "male", label: "男性", enable: true },
      { id: "2", value: "female", label: "女性", enable: true },
      { id: "3", value: "other", label: "其他", enable: true },
    ],
    value: "male",
  },
};

export const WithError: Story = {
  args: {
    name: "plan",
    options: [
      { id: "1", value: "basic", label: "基本方案", enable: true },
      { id: "2", value: "pro", label: "專業方案", enable: true },
      { id: "3", value: "enterprise", label: "企業方案", enable: true },
    ],
    value: "",
  },
};

export const ManyOptions: Story = {
  args: {
    name: "country",
    options: [
      { id: "1", value: "tw", label: "台灣", enable: true },
      { id: "2", value: "cn", label: "中國", enable: true },
      { id: "3", value: "jp", label: "日本", enable: true },
      { id: "4", value: "kr", label: "韓國", enable: true },
      { id: "5", value: "us", label: "美國", enable: true },
    ],
    value: "tw",
  },
};
