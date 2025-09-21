import { Box, HStack, IconButton, Span, VStack } from "@chakra-ui/react";
import { Add, TickCircle } from "iconsax-reactjs";
import { TaskCard } from "./task-card";
import { Task } from "../todo/@types";

export const CompletedCards = ({ tasks }: { tasks: Task[] }) => {
  return (
    <VStack width="100%" gap={1}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </VStack>
  );
};

export const CompletedCardsHeading = ({ count }: { count: number }) => {
  return (
    <HStack w="100%" justify="space-between" align="center">
      <HStack gap={2}>
        <HStack
          align={"center"}
          padding={1}
          paddingX={2}
          bg={"white"}
          color={"inherit"}
          borderRadius={"6px"}
        >
          <TickCircle variant="Bold" size={20} color={"#75C5C1"} />
          <Span
            flex={1}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            textWrap={"nowrap"}
            fontSize={"xs"}
            fontWeight={"medium"}
          >
            Complete
          </Span>
        </HStack>
        <Box bg="white" borderRadius={"6px"} padding={1}>
          <Span
            fontSize={"xs"}
            fontWeight={"medium"}
            color={"#464B50"}
          >{`(${count})`}</Span>
        </Box>
      </HStack>
      <IconButton size="xs" bg="white" color="gray.800" borderRadius={"6px"}>
        <Add size={16} />
      </IconButton>
    </HStack>
  );
};
