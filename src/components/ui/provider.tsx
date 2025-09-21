"use client";

import { ChakraProvider } from "@chakra-ui/react";
import systemConfig from "@/theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

import { TodoProvider } from "@/components/todo/todo-provider";

export function Provider(props: ColorModeProviderProps) {
  return (
    <TodoProvider>
      <ChakraProvider value={systemConfig}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </TodoProvider>
  );
}
