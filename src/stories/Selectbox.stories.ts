import type { Meta, StoryObj } from "@storybook/react";
import { Selectbox } from "../../lib/";

const meta: Meta<typeof Selectbox> = {
  title: "Components/Selectbox",
  component: Selectbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      control: { type: "text" },
      description: "select 的 name 屬性",
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
    placeholder: {
      control: { type: "text" },
      description: "佔位符文字",
    },
    multiple: {
      control: { type: "boolean" },
      description: "是否支援多選",
      table: {
        defaultValue: { summary: false },
      },
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

type Story = StoryObj<typeof Selectbox>;

export const Single: Story = {
  args: {
    name: "city",
    options: [
      { id: "1", value: "taipei", label: "台北", enable: true },
      { id: "2", value: "taichung", label: "台中", enable: true },
      { id: "3", value: "tainan", label: "台南", enable: true },
      { id: "4", value: "kaohsiung", label: "高雄", enable: true },
    ],
    value: "taipei",
    placeholder: "請選擇城市",
    multiple: false,
  },
};

export const Multiple: Story = {
  args: {
    name: "skills",
    options: [
      { id: "1", value: "js", label: "JavaScript", enable: true },
      { id: "2", value: "ts", label: "TypeScript", enable: true },
      { id: "3", value: "react", label: "React", enable: true },
      { id: "4", value: "vue", label: "Vue", enable: true },
      { id: "5", value: "angular", label: "Angular", enable: true },
    ],
    value: ["js", "react"] as any,
    placeholder: "請選擇技能",
    multiple: true,
  },
};

export const WithError: Story = {
  args: {
    name: "department",
    options: [
      { id: "1", value: "hr", label: "人力資源", enable: true },
      { id: "2", value: "it", label: "資訊科技", enable: true },
      { id: "3", value: "sales", label: "業務", enable: true },
      { id: "4", value: "finance", label: "財務", enable: true },
    ],
    value: "",
    placeholder: "請選擇部門",
    multiple: false,
  },
};

export const Disabled: Story = {
  args: {
    name: "status",
    options: [
      { id: "1", value: "active", label: "啟用", enable: true },
      { id: "2", value: "inactive", label: "停用", enable: false },
      { id: "3", value: "pending", label: "待處理", enable: true },
    ],
    value: "active",
    placeholder: "請選擇狀態",
    multiple: false,
  },
};
