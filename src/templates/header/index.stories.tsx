import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./";

const meta = {
  title: "Templates/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    brand: {
      alt: "logo",
      title: "Header Title",
      src: {
        dark: "logo.png",
        light: "logo.png",
      },
      width: 36,
      height: 36,
    },
    href: "#",
  },
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContents: Story = {
  render: () => (
    <Header brand={meta.args.brand} href={meta.args.href}>
      <div className="text-neutral-800 dark:text-neutral-200">Right Item</div>
    </Header>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div>
      <Header brand={meta.args.brand} href={meta.args.href}>
        <div className="text-neutral-800 dark:text-neutral-200">Right Item</div>
      </Header>
      <div className="text-neutral-800 dark:text-neutral-200">
        {Array.from({ length: 50 }, (_, i) => i + 1).map((w) => (
          <div>Line {w}</div>
        ))}
      </div>
    </div>
  ),
};
