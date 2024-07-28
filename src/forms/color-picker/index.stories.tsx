import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from ".";

const meta = {
  title: "Forms/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-72">
      <ColorPicker />,
    </div>
  ),
};
