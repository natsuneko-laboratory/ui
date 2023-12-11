import type { Meta, StoryObj } from "@storybook/react";

import { Section } from "./";
import { Container } from "../container";

const meta = {
  title: "Layouts/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container>
      <Section className="bg-neutral-300 text-neutral-600 py-4">
        <div>Section A</div>
      </Section>
      <Section className="bg-neutral-600 text-neutral-300 py-4">
        <div>Section B</div>
      </Section>
      <Section className="bg-neutral-300 text-neutral-600 py-4">
        <div>Section C</div>
      </Section>
    </Container>
  ),
};
