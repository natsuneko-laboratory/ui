import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumb } from "./";

const meta = {
  title: "Navigations/Breadcrumbs",
  component: Breadcrumb,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    items: [{ label: "Parent", href: "#" }, { label: "Current" }],
  },
  argTypes: {},
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoItems: Story = {
  args: { items: [] },
};

export const OneActiveItem: Story = {
  args: { items: [{ label: "Current" }] },
};

export const OneLinkItem: Story = {
  args: { items: [{ label: "Parent", href: "#" }] },
};

export const TwoItems: Story = {};
