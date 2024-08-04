import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../lib/";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: "radio" },
      description: "Variant of the button",
      options: ["default", "primary"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Label of the button",
    },
    size: {
      type: "string",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
      description: "Size of the button",
      table: {
        defaultValue: { summary: "md" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};
