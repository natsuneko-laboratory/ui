import type { Meta, StoryObj } from "@storybook/react";

import { Portal } from "./";

const meta = {
  title: "Miscellaneous/Portal",
  component: Portal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: null,
  },
  argTypes: {},
} satisfies Meta<typeof Portal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-neutral-50">
      Portal content rendered to <code>#portal</code>.
      <div className="px-4 bg-neutral-100" id="portal">
        Portal Root
        <div className="px-4 bg-neutral-200">
          Outer Content
          <div className="px-4 bg-neutral-300">
            Inner Content
            <Portal>
              <div className="bg-neutral-400">Portal Content</div>
            </Portal>
          </div>
        </div>
      </div>
    </div>
  ),
};
