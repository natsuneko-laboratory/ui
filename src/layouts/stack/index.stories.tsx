import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "./";

const meta = {
  title: "Layouts/Stack",
  component: Stack,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => (
  <>
    <div className="bg-neutral-200">Item 1</div>
    <div className="bg-neutral-200">Item 2</div>
    <div className="bg-neutral-200">Item 3</div>
    <div className="bg-neutral-200">Item 4</div>
    <div className="bg-neutral-200">Item 5</div>
  </>
);

export const Default: Story = {
  render: () => (
    <Stack>
      <Content />
    </Stack>
  ),
};

export const WithGap1: Story = {
  render: () => (
    <Stack gap={1}>
      <Content />
    </Stack>
  ),
};

export const WithGap2: Story = {
  render: () => (
    <Stack gap={2}>
      <Content />
    </Stack>
  ),
};

export const WithGap4: Story = {
  render: () => (
    <Stack gap={4}>
      <Content />
    </Stack>
  ),
};

export const WithGap8: Story = {
  render: () => (
    <Stack gap={8}>
      <Content />
    </Stack>
  ),
};

export const WithGap16: Story = {
  render: () => (
    <Stack gap={16}>
      <Content />
    </Stack>
  ),
};

export const StackSibling: Story = {
  render: () => (
    <>
      <Stack gap={2} className="bg-neutral-300">
        <Content />
      </Stack>
      <Stack gap={2} className="bg-neutral-300">
        <Content />
      </Stack>
    </>
  ),
};

export const StackParent: Story = {
  render: () => (
    <Stack gap={4} className="bg-neutral-400">
      <Stack gap={2} className="bg-neutral-300">
        <Content />
      </Stack>
      <Stack gap={2} className="bg-neutral-300">
        <Content />
      </Stack>
    </Stack>
  ),
};
