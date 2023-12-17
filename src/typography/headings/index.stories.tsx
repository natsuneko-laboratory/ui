import type { Meta, StoryObj } from "@storybook/react";

import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "./";
import { Container } from "../../layouts/container";
import { Paragraph } from "../../typography/paragraph";

const meta = {
  title: "Typography/Headings",
  component: Heading1,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Heading1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Container>
      <Heading1>Heading 1 - Page Heading</Heading1>
      <Heading2>Heading 2 - Section Title</Heading2>
      <Heading3>Heading 3 - Sub-Section Title</Heading3>
      <Heading4>Heading 4 - Block Title</Heading4>
      <Heading5>Heading 5 - Sub-Block Title</Heading5>
      <Heading6>Heading 6 - Sub-Sub-Block Title</Heading6>
    </Container>
  ),
};

export const _Heading1: Story = {
  render: () => (
    <Container>
      <Heading1>Heading 1</Heading1>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const BorderedHeading1: Story = {
  render: () => (
    <Container>
      <Heading1 bordered>Heading 1</Heading1>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const _Heading2: Story = {
  render: () => (
    <Container>
      <Heading2>Heading 2</Heading2>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const BorderedHeading2: Story = {
  render: () => (
    <Container>
      <Heading2 bordered>Heading 2</Heading2>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const _Heading3: Story = {
  render: () => (
    <Container>
      <Heading3>Heading 3</Heading3>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const BorderedHeading3: Story = {
  render: () => (
    <Container>
      <Heading3 bordered>Heading 3</Heading3>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const _Heading4: Story = {
  render: () => (
    <Container>
      <Heading4>Heading 4</Heading4>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const BorderedHeading4: Story = {
  render: () => (
    <Container>
      <Heading4 bordered>Heading 4</Heading4>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const _Heading5: Story = {
  render: () => (
    <Container>
      <Heading5>Heading 5</Heading5>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const BorderedHeading5: Story = {
  render: () => (
    <Container>
      <Heading5 bordered>Heading 5</Heading5>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const _Heading6: Story = {
  render: () => (
    <Container>
      <Heading6>Heading 6</Heading6>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};

export const BorderedHeading6: Story = {
  render: () => (
    <Container>
      <Heading6 bordered>Heading 6</Heading6>
      <Paragraph>Paragraph</Paragraph>
    </Container>
  ),
};
