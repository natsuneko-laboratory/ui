import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from ".";

const meta = {
  title: "Data/Accordion",
  component: Accordion,
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
    title: "Accordion Title",
    children: <p>Accordion Content</p>,
  },
  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="text-neutral-800 dark:text-neutral-200">
      <Accordion {...args} />
    </div>
  ),
};
