import {
  Box,
  Button,
  HStack,
  IconButton,
  Span,
  VStack,
} from "@chakra-ui/react";
import { Add, Status } from "iconsax-reactjs";
import { TaskCard } from "./task-card";
import { Task, TaskStatus } from "../todo/@types";
import { AddTaskButton } from "../todo/add-task-btn";

export const InProgressCards = ({ tasks }: { tasks: Task[] }) => {
  return (
    <VStack width="100%" gap={1}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      <AddTaskButton status={TaskStatus.ONGOING}>
        <Button
          size="xs"
          width="100%"
          bg="white"
          color="gray.800"
          borderRadius={"6px"}
          marginTop={1}
        >
          <Add size={16} />
          <Span>Add Task</Span>
        </Button>
      </AddTaskButton>
    </VStack>
  );
};

export const InProgressCardsHeading = ({ count }: { count: number }) => {
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
          <Status variant="Bold" size={20} color={"#F6BE38"} />
          <Span
            flex={1}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            textWrap={"nowrap"}
            fontSize={"xs"}
            fontWeight={"medium"}
          >
            In Progress
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
      <AddTaskButton status={TaskStatus.ONGOING}>
        <IconButton size="xs" bg="white" color="gray.800" borderRadius={"6px"}>
          <Add size={16} />
        </IconButton>
      </AddTaskButton>
    </HStack>
  );
};
