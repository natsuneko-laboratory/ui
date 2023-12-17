import type { Meta, StoryObj } from "@storybook/react";

import { List, ListItem } from ".";

const meta = {
  title: "Miscellaneous/List",
  component: List,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
        <ListItem>Item 5</ListItem>
      </>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderedList: Story = {
  args: { t: "ordered" },
};

export const UnorderedList: Story = {
  args: { t: "unordered" },
};

export const NestedOrderedList: Story = {
  args: { t: "ordered" },
  render: () => (
    <List t="ordered">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>
        Item 3
        <List t="ordered">
          <ListItem>Nested Item 1</ListItem>
          <ListItem>Nested Item 2</ListItem>
          <List t="ordered">
            <ListItem>Nested Nested Item 1</ListItem>
            <ListItem>Nested Nested Item 2</ListItem>
            <ListItem>Nested Nested Item 3</ListItem>
          </List>
          <ListItem>Nested Item 4</ListItem>
          <ListItem>Nested Item 5</ListItem>
        </List>
      </ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  ),
};

export const NestedUnorderedList: Story = {
  args: { t: "unordered" },
  render: () => (
    <List t="unordered">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>
        Item 3
        <List t="unordered">
          <ListItem>Nested Item 1</ListItem>
          <ListItem>Nested Item 2</ListItem>
          <List t="unordered">
            <ListItem>Nested Nested Item 1</ListItem>
            <ListItem>Nested Nested Item 2</ListItem>
            <ListItem>Nested Nested Item 3</ListItem>
          </List>
          <ListItem>Nested Item 4</ListItem>
          <ListItem>Nested Item 5</ListItem>
        </List>
      </ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  ),
};

export const NestedMixedList: Story = {
  args: { t: "ordered" },
  render: () => (
    <List t="ordered">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>
        Item 3
        <List t="unordered">
          <ListItem>Nested Item 1</ListItem>
          <ListItem>Nested Item 2</ListItem>
          <List t="ordered">
            <ListItem>Nested Nested Item 1</ListItem>
            <ListItem>Nested Nested Item 2</ListItem>
            <ListItem>Nested Nested Item 3</ListItem>
          </List>
          <ListItem>Nested Item 4</ListItem>
          <ListItem>Nested Item 5</ListItem>
        </List>
      </ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  ),
};
