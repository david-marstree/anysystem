import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
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
    name: {
      control: { type: "text" },
      description: "Name of the input",
    },
    type: {
      control: { type: "radio" },
      description: "Type of the input",
      options: ["text", "number", "email", "tel"],
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
    phonePrefixOptions: {
      if: { arg: "type", eq: "tel" },
      control: { type: "object" },
      description: "Phone prefix options",
      table: {
        type: { summary: "SelectOption[]" },
        defaultValue: {
          summary:
            '[{id: 1, value: "+84", label: "Vietnam (+84)", enable: true}]',
        },
      },
      defaultValue: [
        { id: 1, value: "+84", label: "Vietnam (+84)", enable: true },
      ] as SelectOption[],
    },
    phonePrefix: {
      if: { arg: "type", eq: "tel" },
      control: { type: "text" },
      description: "Phone prefix",
      table: {
        type: { summary: "string" },
      },
      defaultValue: "+86",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onChange: fn(),
    phonePrefixOptions: [
      { id: 1, value: "+84", label: "Vietnam (+84)", enable: true },
      { id: 2, value: "+86", label: "China (+86)", enable: true },
    ],
    phonePrefix: "+86",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Email: Story = {
  args: {
    name: "email",
    type: "email",
    value: "test@gmail.com",
  },
};

export const Tel: Story = {
  args: {
    name: "tel",
    type: "tel",
    value: "+86-6666666",
    phonePrefixOptions: [
      { id: 1, value: "+84", label: "Vietnam (+84)", enable: true },
      { id: 2, value: "+86", label: "China (+86)", enable: true },
    ],
  },
};

export const Default: Story = {
  args: {
    name: "text",
    type: "text",
    value: "test",
  },
};
