import { Box, Flex, VStack } from "@chakra-ui/react";
import { Task, TaskStatus } from "../todo/@types";
import { TodoCards, TodoCardsHeading } from "./todo-cards";
import { InProgressCards, InProgressCardsHeading } from "./inprogress-cards";
import { CompletedCards, CompletedCardsHeading } from "./completed-cards";
import { useTodoContext } from "../todo/todo-provider";

export const TodoKanbanBoard = ({ tasks }: { tasks: Task[] }) => {
  const { searchQuery } = useTodoContext();

  const todos = tasks.filter((t) => {
    const matchesSearch = t.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return t.status === TaskStatus.TODO && matchesSearch;
  });
  const inprogress = tasks.filter((t) => {
    const matchesSearch = t.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return t.status === TaskStatus.ONGOING && matchesSearch;
  });
  const completed = tasks.filter((t) => {
    const matchesSearch = t.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return t.status === TaskStatus.COMPLETED && matchesSearch;
  });

  return (
    <Box padding={1} width="100%" overflow="hidden">
      <Flex
        gap={4}
        flexWrap="nowrap"
        align="flex-start"
        width="100%"
        overflowX="auto"
      >
        {/** Todo */}
        <VStack
          flexShrink={0}
          width={{ base: "300px", md: "400px", lg: "100%" }}
          lg={{ flex: 1 }}
          padding={1}
          bg="#F9F3FF"
          align="flex-start"
          borderRadius={"6px"}
        >
          <TodoCardsHeading count={todos.length} />
          <TodoCards tasks={todos} />
        </VStack>

        {/** In Progress */}
        <VStack
          flexShrink={0}
          width={{ base: "300px", md: "400px", lg: "100%" }}
          lg={{ flex: 1 }}
          padding={1}
          bg="#FBF4E4"
          borderRadius={"6px"}
        >
          <InProgressCardsHeading count={inprogress.length} />
          <InProgressCards tasks={inprogress} />
        </VStack>

        {/** Completed */}
        <VStack
          flexShrink={0}
          width={{ base: "300px", md: "400px", lg: "100%" }}
          lg={{ flex: 1 }}
          padding={1}
          bg="#E9F5F7"
          borderRadius={"6px"}
        >
          <CompletedCardsHeading count={completed.length} />
          <CompletedCards tasks={completed} />
        </VStack>
      </Flex>
    </Box>
  );
};
