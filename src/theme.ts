/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: "#75C5C1" as any,
        secondary: "#F7F7F7" as any,
        accent: "#41245F" as any,
        highlight: "#E9F5F7" as any,
        border: "#CDD6E9" as any,
        icon: "#292D32" as any,
      },
    },
  },
});

export default createSystem(defaultConfig, config);
