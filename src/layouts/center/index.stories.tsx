import type { Meta, StoryObj } from "@storybook/react";

import { Center } from "./";

const meta = {
  title: "Layouts/Center",
  component: Center,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Center className="bg-neutral-300 text-neutral-600 h-24 p-2">
      <div>Center Horizontal</div>
    </Center>
  ),
};

export const ExplicitlyHorizontal: Story = {
  render: () => (
    <Center horizontal className="bg-neutral-300 text-neutral-600 h-24 p-2">
      <div>Center Horizontal</div>
    </Center>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Center vertical className="bg-neutral-300 text-neutral-600 h-24 p-2">
      <div>Center Horizontal</div>
    </Center>
  ),
};

export const HorizontalAndVertical: Story = {
  render: () => (
    <Center
      horizontal
      vertical
      className="bg-neutral-300 text-neutral-600 h-24 p-2"
    >
      <div>Center Horizontal</div>
    </Center>
  ),
};
