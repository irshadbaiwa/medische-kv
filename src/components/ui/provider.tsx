"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import systemConfig from "@/theme";

import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const queryClient = new QueryClient();

export function Provider(props: ColorModeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={systemConfig}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
