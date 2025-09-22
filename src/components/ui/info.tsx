import { HStack, Text, Span } from "@chakra-ui/react";

export const Info = () => {
  return (
    <HStack
      alignSelf="center"
      align="center"
      justify="center"
      gap={4}
      flexWrap="wrap"
      marginTop={4}
    >
      <HStack flexWrap="nowrap" align="center" justify="center" gap={2}>
        <Text fontSize="xs" fontWeight="semibold" color="gray.600">
          Contact:
        </Text>
        <a href="mailto:irshaadbaiwa@gmail.com" target="_blank">
          <Span
            fontSize="xs"
            fontWeight="medium"
            textDecoration="underline"
            color="gray.600"
          >
            irshaadbaiwa@gmail.com
          </Span>
        </a>
      </HStack>
      <HStack flexWrap="nowrap" align="center" justify="center" gap={2}>
        <Text fontSize="xs" fontWeight="semibold" color="gray.600">
          Repo:
        </Text>
        <a href="https://github.com/irshadbaiwa/medische-kv" target="_blank">
          <Span
            fontSize="xs"
            fontWeight="medium"
            textDecoration="underline"
            color="gray.600"
          >
            github.com/irshadbaiwamedische-kv
          </Span>
        </a>
      </HStack>
    </HStack>
  );
};
