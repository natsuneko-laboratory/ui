import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from ".";

const meta = {
  title: "Forms/TextArea",
  component: TextArea,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "label", enabled: false }],
      },
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    initialValue: "default value 1\ndefault value 2",
  },
  argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OneLine: Story = {
  args: {
    rows: 1,
  },
};

export const Placeholder: Story = {
  args: {
    initialValue: "",
    placeholder: "placeholder value",
  },
};

export const Readonly: Story = {
  args: {
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
