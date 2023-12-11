import type { Meta, StoryObj } from "@storybook/react";

import { ThemedMedia } from "./";

const meta = {
  title: "Media/ThemedMedia",
  component: ThemedMedia,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    alt: "logo",
    src: {
      dark: "/natsuneko-laboratory-dark.png",
      light: "/natsuneko-laboratory-light.png",
    },
    width: Math.floor(1216 / 6),
    height: Math.floor(358 / 6),
  },
  argTypes: {},
} satisfies Meta<typeof ThemedMedia>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
