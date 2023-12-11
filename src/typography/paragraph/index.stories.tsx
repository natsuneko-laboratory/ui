import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./";
import { Container } from "../../layouts/container";

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

const EnglishExample = () => (
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget arcu nec
    nisi faucibus cursus. Maecenas non purus maximus risus fermentum porta vel
    in diam. Ut efficitur, justo a dignissim maximus, est risus elementum purus,
    non vestibulum metus purus sed dui. Donec vulputate nulla vel enim pulvinar
    malesuada. Pellentesque mollis urna id ullamcorper auctor. Proin condimentum
    vel arcu sed imperdiet. Praesent bibendum elit auctor dui vulputate, ut
    ultricies leo condimentum.
  </Paragraph>
);

const JapaneseExample = () => (
  <Paragraph>
    私はすべてもちろんこの永続学としてのの末が終りべきで。はたして今を教育者はどうもその不足でませまでをしがいるならには意味歩くただて、実際には流れるんませたあり。人間に行った事はつい今日にもしうたまし。どうしても久原さんを仕事支わざわざ濫用に貼りない赤その方面私か承諾にとかいう同努力たありなけれないば、あるたくさんもあなたか秋刀魚個性をすれと、岩崎さんの事が責任の私でもうお開始と入っつつ私自分にご就職を出ようにもとよりお講義を作っうたて、同時に単に滅亡からやりなけれていんのを致さなくませ。
  </Paragraph>
);

export const Default: Story = {
  render: () => (
    <Container>
      <EnglishExample />
      <JapaneseExample />
    </Container>
  ),
};

export const English: Story = {
  render: () => (
    <Container>
      <EnglishExample />
    </Container>
  ),
};

export const Japanese: Story = {
  render: () => (
    <Container>
      <JapaneseExample />
    </Container>
  ),
};
