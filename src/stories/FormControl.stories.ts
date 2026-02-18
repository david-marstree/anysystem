import type { Meta, StoryObj } from "@storybook/react-vite";
import moment from "moment";
import type { SelectOption } from "../../lib/";
import FormControl from "../../lib/components/FormControl/FormControl";

const meta: Meta<typeof FormControl> = {
  title: "Components/FormControl",
  component: FormControl,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "email", "number", "password", "tel", "date", "select", "autocomplete", "radio", "checkbox", "switch", "confirm"],
      description: "控制表單元件類型",
      table: { defaultValue: { summary: "text" } },
    },
    labelProps: {
      control: { type: "object" },
      description: "傳遞給外層 LabelBase 的 props，包含 label、isError、errorMessage、type、variant 等。若設定，會自動包裹 FormControl。",
      table: {
        type: { summary: "LabelBaseProps" },
      },
    },
    value: {
      control: { type: "text" },
      description: "元件的值（根據 type 變化）",
    },
    options: {
      control: { type: "object" },
      description: "選項資料（select、radio、autocomplete 等適用）",
    },
    placeholder: {
      control: { type: "text" },
      description: "placeholder 文字（部分元件適用）",
    },
    onChange: {
      action: "changed",
      description: "值變更時的 callback",
      table: { category: "Events" },
    },
    phonePrefixOptions: [
      { id: '1', value: "+86", label: "+86", enable: true },
      { id: '2', value: "+886", label: "+886", enable: true },
    ],
    phonePrefix: {
      control: { type: "text" },
      description: "電話前綴（tel 総機號碼輸入適用）",
    },
  },
};
export default meta;

type Story = StoryObj<typeof FormControl>;

export const Text: Story = {
  args: {
    type: "text",
    value: "測試文字",
    labelProps: { label: "文字輸入" },
    placeholder: "請輸入內容...",
  },
};

export const Select: Story = {
  args: {
    type: "select",
    value: "2",
    labelProps: { label: "下拉選單" },
    options: [
      { id: "1", value: "1", label: "選項一" },
      { id: "2", value: "2", label: "選項二" },
      { id: "3", value: "3", label: "選項三" },
    ] as SelectOption[],
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
    value: "2",
    labelProps: { label: "單選選單" },
    options: [
      { id: "1", value: "1", label: "選項一" },
      { id: "2", value: "2", label: "選項二" },
      { id: "3", value: "3", label: "選項三" },
    ] as SelectOption[],
  },
};

export const Confirm: Story = {
  args: {
    type: "confirm",
    value: "1",
    labelProps: { label: "我同意條款" },
  },
};

export const Date: Story = {
  args: {
    type: "date",
    value: moment().format("X"),
    labelProps: { label: "日期" },
  },
};

export const DateTime: Story = {
  args: {
    type: "datetime",
    value: moment().format("X"),
    labelProps: { label: "日期時間" },
  },
};
