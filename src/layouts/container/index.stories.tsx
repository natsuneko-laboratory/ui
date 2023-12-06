import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./";

const meta = {
  title: "Layouts/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container className="bg-neutral-300 text-neutral-600">
      <div>Container Area</div>
    </Container>
  ),
};
