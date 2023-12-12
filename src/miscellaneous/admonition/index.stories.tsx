import type { Meta, StoryObj } from "@storybook/react";

import { Admonition } from "./";

const LoremIpsum = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget arcu nec
    nisi faucibus cursus. Maecenas non purus maximus risus fermentum porta vel
    in diam. Ut efficitur, justo a dignissim maximus, est risus elementum purus,
    non vestibulum metus purus sed dui. Donec vulputate nulla vel enim pulvinar
    malesuada. Pellentesque mollis urna id ullamcorper auctor. Proin condimentum
    vel arcu sed imperdiet. Praesent bibendum elit auctor dui vulputate, ut
    ultricies leo condimentum.
  </p>
);

const meta = {
  title: "Miscellaneous/Admonition",
  component: Admonition,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    type: "bug",
    children: <LoremIpsum />,
  },
  argTypes: {},
} satisfies Meta<typeof Admonition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-y-2">
      <Admonition type="bug" children={<LoremIpsum />} />
      <Admonition type="danger" children={<LoremIpsum />} />
      <Admonition type="important" children={<LoremIpsum />} />
      <Admonition type="info" children={<LoremIpsum />} />
      <Admonition type="note" children={<LoremIpsum />} />
      <Admonition type="success" children={<LoremIpsum />} />
      <Admonition type="tip" children={<LoremIpsum />} />
      <Admonition type="warning" children={<LoremIpsum />} />
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
