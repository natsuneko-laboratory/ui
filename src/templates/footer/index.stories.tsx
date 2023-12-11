import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./";

const meta = {
  title: "Templates/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    logo: {
      dark: "/natsuneko-laboratory-dark.png",
      light: "/natsuneko-laboratory-light.png",
      width: Math.floor(1216 / 6),
      height: Math.floor(358 / 6),
    },
  },
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContents: Story = {
  render: () => (
    <Footer logo={meta.args.logo}>
      <div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </Footer>
  ),
};
