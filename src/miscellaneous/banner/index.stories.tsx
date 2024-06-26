import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "./";

const LoremIpsum = () => <p>This is banner text</p>;

const meta = {
  title: "Miscellaneous/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    type: "bug",
    children: <LoremIpsum />,
  },
  argTypes: {},
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Banner type="bug">
        <LoremIpsum />
      </Banner>
      <Banner type="danger">
        <LoremIpsum />
      </Banner>
      <Banner type="important">
        <LoremIpsum />
      </Banner>
      <Banner type="info">
        <LoremIpsum />
      </Banner>
      <Banner type="note">
        <LoremIpsum />
      </Banner>
      <Banner type="success">
        <LoremIpsum />
      </Banner>
      <Banner type="tip">
        <LoremIpsum />
      </Banner>
      <Banner type="warning">
        <LoremIpsum />
      </Banner>
    </>
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
