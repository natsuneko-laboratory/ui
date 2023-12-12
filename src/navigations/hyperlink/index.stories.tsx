import type { Meta, StoryObj } from "@storybook/react";

import { Hyperlink } from "./";
import { Paragraph } from "../../typography/paragraph";

const meta = {
  title: "Navigations/Hyperlink",
  component: Hyperlink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Hyperlink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Internal: Story = {
  args: {
    href: "#",
    children: <>Hyperlink</>,
  },
};

export const External: Story = {
  args: {
    href: "https://natsuneko.com",
    children: <>Hyperlink</>,
  },
};

export const InParagraph: Story = {
  render: () => (
    <Paragraph>
      戌亥とこ（いぬい-）とは、<Hyperlink href="#">ANYCOLOR株式会社</Hyperlink>
      （旧：<Hyperlink href="#">いちから株式会社</Hyperlink>
      ）が運営する「<Hyperlink href="#">にじさんじ</Hyperlink>
      」プロジェクト所属の<Hyperlink href="#">バーチャルライバー</Hyperlink>
      である。
    </Paragraph>
  ),
};
