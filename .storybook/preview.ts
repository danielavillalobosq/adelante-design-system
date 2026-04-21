import type { Preview } from "@storybook/react-vite";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light",   value: "hsl(0 0% 95%)" },
        { name: "white",   value: "#ffffff" },
        { name: "dark",    value: "#111111" },
      ],
    },
    a11y: { test: "todo" },
  },
};

export default preview;
