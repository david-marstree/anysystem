import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "../../lib/components/DataTable/DataTable";

const meta: Meta<typeof DataTable> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
      description: "表格名稱（可選）",
    },
    data: {
      control: { type: "object" },
      description: "表格資料陣列，每一列為一個物件",
    },
    fields: {
      control: { type: "object" },
      description: "欄位定義陣列，描述每個欄位的 key、label 等",
    },
    selectable: {
      control: { type: "boolean" },
      description: "是否可勾選列（多選）",
    },
    chooseFieldable: {
      control: { type: "boolean" },
      description: "是否允許用戶自訂顯示哪些欄位",
    },
  },
};
export default meta;

type Story = StoryObj<typeof DataTable>;

export const Basic: Story = {
  args: {
    name: "user-table",
    data: [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 22 },
    ],
    fields: [
      { key: "id", label: "ID", value: "$.id" },
      { key: "name", label: "姓名", value: "$.name" },
      { key: "age", label: "年齡", value: "$.age" },
    ],
    selectable: true,
    chooseFieldable: true,
  },
};
