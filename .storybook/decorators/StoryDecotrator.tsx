import React, { useEffect } from "react";

import type { Decorator } from "@storybook/react";

import { themes } from "@storybook/theming";

import { useDarkMode } from "storybook-dark-mode";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const StoryDecorator: Decorator = (Story: any) => {
  const dark = useDarkMode();

  useEffect(() => {
    const bg = dark ? themes.dark.appBg : themes.light.appBg;
    document.body.style.backgroundColor = bg || "inherit";
  }, [dark]);

  return (
    <React.StrictMode>
      <Story />
    </React.StrictMode>
  );
};
