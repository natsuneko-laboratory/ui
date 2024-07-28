import type { Meta, StoryObj } from "@storybook/react";

import { type ClickItem, Tab } from "./";

const ITEMS: ClickItem[] = [
  {
    type: "click",
    title: "Following",
    key: "following",
  },
  {
    type: "click",
    title: "For You",
    key: "for-you",
  },
];

const meta = {
  title: "Layouts/Tab",
  component: Tab,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: { items: [] },
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Tab items={ITEMS} />,
};
