import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./";

const meta = {
  title: "Media/Logo",
  component: Logo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    alt: "logo",
    width: Math.floor(1216 / 6),
    height: Math.floor(358 / 6),
  },
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { theme: "light" },
};

export const Light: Story = {
  args: { theme: "light" },
};

export const Dark: Story = {
  args: { theme: "dark" },
};
