import type { Meta, StoryObj } from "@storybook/react";

import { Select } from ".";

const meta = {
  title: "Forms/Select",
  component: Select,
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
    items: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
    ],
  },
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <label className="text-neutral-800 dark:text-neutral-200">
      <span className="mr-2">Select :</span>
      <Select {...args} />
    </label>
  ),
};

export const WithInitialValue: Story = {
  args: {
    initialValue: "2",
  },
  render: (args) => (
    <label className="text-neutral-800 dark:text-neutral-200">
      <span className="mr-2">Select :</span>
      <Select {...args} />
    </label>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <label className="text-neutral-800 dark:text-neutral-200">
      <span className="mr-2">Select :</span>
      <Select {...args} />
    </label>
  ),
};

export const PartiallyDisabled: Story = {
  args: {
    items: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three (Disabled)", disabled: true },
    ],
  },
  render: (args) => (
    <label className="text-neutral-800 dark:text-neutral-200">
      <span className="mr-2">Select :</span>
      <Select {...args} />
    </label>
  ),
};
