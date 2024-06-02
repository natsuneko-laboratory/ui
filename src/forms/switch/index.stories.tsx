import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from ".";

const meta = {
  title: "Forms/Switch",
  component: Switch,
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
    initialChecked: false,
  },
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <label className="flex text-neutral-800 dark:text-neutral-200">
      <span className="mr-2">Select :</span>
      <Switch {...args} />
    </label>
  ),
};

export const WithInitialValue: Story = {
  args: {
    initialChecked: true,
  },
  render: (args) => (
    <label className="flex text-neutral-800 dark:text-neutral-200">
      <span className="mr-2">Select :</span>
      <Switch {...args} />
    </label>
  ),
};

/*
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <label className="flex text-neutral-800 dark:text-neutral-200">
      <span className="mr-2">Select :</span>
      <Switch {...args} />
    </label>
  ),
};
*/
