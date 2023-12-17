import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  title: "Forms/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const SecondaryDisabled: Story = {
  args: { variant: "secondary", disabled: true },
};

export const Danger: Story = {
  args: { variant: "danger" },
};

export const DangerDisabled: Story = {
  args: { variant: "danger", disabled: true },
};

export const Text: Story = {
  args: { variant: "text" },
};

export const TextDisabled: Story = {
  args: { variant: "text", disabled: true },
};
