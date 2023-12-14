import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta = {
  title: "Forms/Input",
  component: Input,
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
    initialValue: "default value",
  },
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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

export const Password: Story = {
  args: {
    type: "password",
  },
};

export const AvoidPasswordFilling: Story = {
  args: {
    type: "password",
    avoidAutoFillByPasswordManager: true,
  },
};
