import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input } from "../../lib/";
import type { SelectOption } from "../../lib/";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Input",
  component: Input,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    labelProps: {
      control: { type: "object" },
      description: "傳遞給外層 LabelBase 的 props，包含 label、isError、errorMessage、type、variant 等。若設定，會自動包裹 Input。",
      table: {
        type: { summary: "LabelBaseProps" },
      },
    },
    name: {
      control: { type: "text" },
      description: "Name of the input",
    },
    type: {
      control: { type: "radio" },
      description: "Type of the input",
      options: ["text", "number", "email"],
      table: {
        defaultValue: { summary: "text" },
      },
    },
    value: {
      control: { type: "text" },
      description: "Value of the input",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder of the input",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const WithLabel: Story = {
  args: {
    type: "text",
    name: "username",
    value: "",
    labelProps: {
      label: "使用者名稱",
      isError: false,
      type: "border",
      variant: "md",
    },
    placeholder: "請輸入帳號",
  },
};
export const Email: Story = {
  args: {
    name: "email",
    type: "email",
    value: "test@gmail.com",
    labelProps: {
      label: "使用者名稱",
      isError: false,
      type: "border",
      variant: "md",
    },
  },
};

export const Default: Story = {
  args: {
    name: "text",
    type: "text",
    value: "test",
    labelProps: {
      label: "使用者名稱",
      isError: false,
      type: "border",
      variant: "md",
    },
  },
};
