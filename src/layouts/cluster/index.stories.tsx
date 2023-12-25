import type { Meta, StoryObj } from "@storybook/react";

import { Cluster } from "./";
import { Stack } from "../stack";

const meta = {
  title: "Layouts/Cluster",
  component: Cluster,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Cluster>;

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
    <Cluster>
      <Content />
    </Cluster>
  ),
};

export const WithGap1: Story = {
  render: () => (
    <Cluster gap={1}>
      <Content />
    </Cluster>
  ),
};

export const WithGap2: Story = {
  render: () => (
    <Cluster gap={2}>
      <Content />
    </Cluster>
  ),
};

export const WithGap4: Story = {
  render: () => (
    <Cluster gap={4}>
      <Content />
    </Cluster>
  ),
};

export const WithGap8: Story = {
  render: () => (
    <Cluster gap={8}>
      <Content />
    </Cluster>
  ),
};

export const WithGap16: Story = {
  render: () => (
    <Cluster gap={16}>
      <Content />
    </Cluster>
  ),
};

export const WithGap16Wrapped: Story = {
  render: () => (
    <Cluster gap={16} wrap>
      <Content />
    </Cluster>
  ),
};

export const ClusterSibling: Story = {
  render: () => (
    <Stack gap={2}>
      <Cluster gap={2} className="bg-neutral-300">
        <Content />
      </Cluster>
      <Cluster gap={2} className="bg-neutral-300">
        <Content />
      </Cluster>
    </Stack>
  ),
};

export const ClusterParent: Story = {
  render: () => (
    <Cluster gap={4} className="bg-neutral-400">
      <Cluster gap={2} className="bg-neutral-300">
        <Content />
      </Cluster>
      <Cluster gap={2} className="bg-neutral-300">
        <Content />
      </Cluster>
    </Cluster>
  ),
};
