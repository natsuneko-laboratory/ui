import React from "react";

import { DocsContainer } from "@storybook/blocks";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

import type { Decorator, Preview } from "@storybook/react";

import "./globals.css";
import { StoryDecorator } from "./decorators/StoryDecotrator";

const preview: Preview = {
  decorators: [
    (Story) => {
      const isDark = useDarkMode();
      return (
        <div data-theme={isDark ? "dark" : "light"}>
          <Story />
        </div>
      );
    },
    StoryDecorator,
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.light },
      stylePreview: true,
    },
    docs: {
      container: (context: any) => {
        const isDark = useDarkMode();
        const currentProps = { ...context };
        currentProps.theme = isDark ? themes.dark : themes.light;
        return React.createElement(DocsContainer, currentProps);
      },
    },
  },
};

export default preview;
