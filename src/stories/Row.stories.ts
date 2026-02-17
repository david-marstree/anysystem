import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "../../lib/";

const meta: Meta<typeof Row> = {
  title: "Components/Layout/Row",
  component: Row,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    column: {
      control: { type: "object" },
      description: "響應式列數設定 { sm?, md?, lg? }",
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
      description: "行內容（通常包含 Column 組件）",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Row>;

export const TwoColumns: Story = {
  args: {
    column: { sm: 1, md: 2, lg: 2 },
    children: "兩列布局（在小螢幕上為一列）",
  },
};

export const ThreeColumns: Story = {
  args: {
    column: { sm: 1, md: 2, lg: 3 },
    children: "三列布局（小螢幕一列，中螢幕兩列，大螢幕三列）",
  },
};

export const FourColumns: Story = {
  args: {
    column: { sm: 2, md: 3, lg: 4 },
    children: "四列布局",
  },
};
