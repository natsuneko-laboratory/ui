import type { Meta, StoryObj } from "@storybook/react";

import { InferredIconLink } from "./";

const meta = {
  title: "Navigations/InferredIconLink",
  component: InferredIconLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof InferredIconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwitterX: Story = {
  name: "Twitter (X)",
  args: {
    href: "https://x.com",
  },
};

export const Twitter: Story = {
  args: {
    href: "https://twitter.com",
  },
};

export const GitHub: Story = {
  args: {
    href: "https://github.com/mika-f",
  },
};

export const Discord: Story = {
  args: {
    href: "https://discord.com",
  },
};

export const DiscordGG: Story = {
  args: {
    href: "https://discord.gg",
  },
};

export const MastodonCloud: Story = {
  args: {
    href: "https://mastodon.cloud",
  },
};

export const MastodonSocial: Story = {
  args: {
    href: "https://mastodon.social",
  },
};

export const YouTube: Story = {
  name: "YouTube",
  args: {
    href: "https://youtube.com",
  },
};

export const YouTubeShort: Story = {
  name: "YouTube (Short)",
  args: {
    href: "https://youtu.be",
  },
};

export const SoundCloud: Story = {
  args: {
    href: "https://soundcloud.com",
  },
};

export const Twitch: Story = {
  args: {
    href: "https://twitch.tv",
  },
};

export const Pixiv: Story = {
  args: {
    href: "https://pixiv.net",
  },
};

export const Instagram: Story = {
  args: {
    href: "https://instagram.com",
  },
};

export const Threads: Story = {
  args: {
    href: "https://threads.net",
  },
};

export const Others: Story = {
  args: {
    href: "https://natsuneko.com",
  },
};
