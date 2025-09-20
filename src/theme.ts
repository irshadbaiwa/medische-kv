import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: "#75C5C1",
        secondary: "#F7F7F7",
        accent: "#41245F",
        highlight: "#E9F5F7",
        border: "#CDD6E9",
      },
    },
  },
});

export default createSystem(defaultConfig, config);
