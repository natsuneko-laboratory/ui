import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./";

const LoremIpsum = () => <>Badge Text</>;

const meta = {
  title: "Data/Badge",
  component: Badge,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    type: "bug",
    children: <LoremIpsum />,
  },
  argTypes: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-x-2">
      <Badge type="bug">
        <LoremIpsum />
      </Badge>
      <Badge type="danger">
        <LoremIpsum />
      </Badge>
      <Badge type="important">
        <LoremIpsum />
      </Badge>
      <Badge type="info">
        <LoremIpsum />
      </Badge>
      <Badge type="note">
        <LoremIpsum />
      </Badge>
      <Badge type="success">
        <LoremIpsum />
      </Badge>
      <Badge type="tip">
        <LoremIpsum />
      </Badge>
      <Badge type="warning">
        <LoremIpsum />
      </Badge>
    </div>
  ),
};

export const Bug: Story = {
  args: { type: "bug" },
};

export const Danger: Story = {
  args: { type: "danger" },
};

export const Important: Story = {
  args: { type: "important" },
};

export const Info: Story = {
  args: { type: "info" },
};

export const Note: Story = {
  args: { type: "note" },
};

export const Success: Story = {
  args: { type: "success" },
};

export const Tip: Story = {
  args: { type: "tip" },
};

export const Warning: Story = {
  args: { type: "warning" },
};
