import type { Meta, StoryObj } from "@storybook/react";

import { LinkButton } from ".";

const meta = {
  title: "Navigations/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: "LinkButton",
    href: "#",
  },
  argTypes: {},
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Text: Story = {
  args: { variant: "text" },
};
