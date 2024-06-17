import type { Meta, StoryObj } from "@storybook/react";

import { KeyValueGrid, KeyValueItem } from ".";
import { Paragraph } from "../../typography/paragraph";

const meta = {
  title: "Templates/KeyValueGrid",
  component: KeyValueGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof KeyValueGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithItem: Story = {
  args: {
    type: "items",
    items: [
      {
        title: "Title 1",
        onRenderItem: () => <Paragraph className="my-0">Content 1</Paragraph>,
      },
      {
        title: "Title 2",
        onRenderItem: () => <Paragraph className="my-0">Content 1</Paragraph>,
      },
      {
        title: "Title 3",
        onRenderItem: () => (
          <Paragraph className="my-0">
            Content <span className="text-red-600 dark:text-red-500">3</span>
          </Paragraph>
        ),
      },
    ],
  },
  render: (args) => <KeyValueGrid {...args} />,
};

export const WithChildren: Story = {
  args: {
    type: "children",
    children: null,
  },
  render: (args) => (
    <KeyValueGrid {...args}>
      <KeyValueItem title="Title 1">
        <Paragraph className="my-0">Content 1</Paragraph>
      </KeyValueItem>
      <KeyValueItem title="Title 2">
        <Paragraph className="my-0">Content 1</Paragraph>
      </KeyValueItem>
      <KeyValueItem title="Title 3">
        <Paragraph className="my-0">
          Content <span className="text-red-600 dark:text-red-500">3</span>
        </Paragraph>
      </KeyValueItem>
    </KeyValueGrid>
  ),
};
