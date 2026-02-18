import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "../../lib/";

const meta: Meta<typeof Column> = {
  title: "Components/Layout/Column",
  component: Column,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    span: {
      control: { type: "object" },
      description: "響應式欄位寬度 { sm?, md?, lg? }，基於 12 欄格系統",
      table: {
        type: { summary: "ResponsiveColumn" },
      },
    },
    className: {
      control: { type: "text" },
      description: "自定義 CSS 類名",
    },
    children: {
      control: { type: "text" },
      description: "列內容",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Column>;

export const FullWidth: Story = {
  args: {
    span: { sm: 12, md: 12, lg: 12 },
    children: "全寬列（12/12）",
  },
};

export const HalfWidth: Story = {
  args: {
    span: { sm: 12, md: 6, lg: 6 },
    children: "半寬列（6/12）- 在小螢幕上為全寬",
  },
};

export const ThirdWidth: Story = {
  args: {
    span: { sm: 12, md: 4, lg: 4 },
    children: "三分之一寬列（4/12）",
  },
};

export const QuarterWidth: Story = {
  args: {
    span: { sm: 12, md: 6, lg: 3 },
    children: "四分之一寬列（3/12）",
  },
};
