"use client";

import { MouseEventHandler } from "react";
import { Box, HStack, Span } from "@chakra-ui/react";
import { TaskSquare, Status, TickCircle } from "iconsax-reactjs";
import { useTodoContext } from "./todo-provider";
import { TaskStatus, ViewType } from "./@types";

export const FilterTasksByProgress = () => {
  const { filterOption, setFilterOption, viewType, todos } = useTodoContext();

  const todoCount = todos.filter((t) => t.status === TaskStatus.TODO).length;
  const inProgressCount = todos.filter(
    (t) => t.status === TaskStatus.ONGOING
  ).length;
  const completeCount = todos.filter(
    (t) => t.status === TaskStatus.COMPLETED
  ).length;

  const clearFilter = () => setFilterOption("all");
  const toggleTodo = () => {
    if (filterOption === TaskStatus.TODO) {
      clearFilter();
    } else {
      setFilterOption(TaskStatus.TODO);
    }
  };
  const toggleOngoing = () => {
    if (filterOption === TaskStatus.ONGOING) {
      clearFilter();
    } else {
      setFilterOption(TaskStatus.ONGOING);
    }
  };
  const toggleCompleted = () => {
    if (filterOption === TaskStatus.COMPLETED) {
      clearFilter();
    } else {
      setFilterOption(TaskStatus.COMPLETED);
    }
  };

  if (viewType === ViewType.KANBAN) return null;
  return (
    <HStack
      width={"100%"}
      alignItems={"center"}
      gap={2}
      padding={2}
      bg={"secondary"}
      borderRadius={"6px"}
      overflowX={"auto"}
    >
      {/** Todo */}
      <TodoFilterToggle
        todoCount={todoCount}
        isActive={filterOption === TaskStatus.TODO}
        onClick={toggleTodo}
      />
      {/** In-Progress */}
      <InProgressFilterToggle
        inProgressCount={inProgressCount}
        isActive={filterOption === TaskStatus.ONGOING}
        onClick={toggleOngoing}
      />
      {/** Completed */}
      <CompleteFilterToggle
        completeCount={completeCount}
        isActive={filterOption === TaskStatus.COMPLETED}
        onClick={toggleCompleted}
      />
    </HStack>
  );
};

const TodoFilterToggle = ({
  todoCount,
  isActive,
  onClick,
}: {
  todoCount: number;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <HStack
      as={"button"}
      cursor={"pointer"}
      alignItems={"center"}
      gap={2}
      padding={1}
      bg={isActive ? "#CFB7E8" : "white"}
      color={isActive ? "white" : "inherit"}
      borderRadius={"6px"}
      onClick={onClick}
    >
      <Box marginLeft={1}>
        <TaskSquare
          variant="Bold"
          size={20}
          color={isActive ? "white" : "#CFB7E8"}
        />
      </Box>
      <Span
        flex={1}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        textWrap={"nowrap"}
        fontSize={"xs"}
        fontWeight={"medium"}
        paddingRight={{ base: 1, md: 4 }}
        hideBelow={"md"}
      >
        To Do
      </Span>
      <Box bg="#F9F3FF" borderRadius={"6px"} padding={1}>
        <Span
          fontSize={"xs"}
          fontWeight={"medium"}
          color={"#464B50"}
        >{`(${todoCount})`}</Span>
      </Box>
    </HStack>
  );
};

const InProgressFilterToggle = ({
  inProgressCount,
  isActive,
  onClick,
}: {
  inProgressCount: number;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <HStack
      as={"button"}
      cursor={"pointer"}
      alignItems={"center"}
      gap={2}
      padding={1}
      bg={isActive ? "#F6BE38" : "white"}
      color={isActive ? "white" : "inherit"}
      borderRadius={"6px"}
      onClick={onClick}
    >
      <Box marginLeft={1}>
        <Status
          variant="Bold"
          size={20}
          color={isActive ? "white" : "#F6BE38"}
        />
      </Box>
      <Span
        flex={1}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        textWrap={"nowrap"}
        fontSize={"xs"}
        fontWeight={"medium"}
        paddingRight={{ base: 1, md: 4 }}
        hideBelow={"md"}
      >
        In Progress
      </Span>
      <Box bg="#FBF4E4" borderRadius={"6px"} padding={1}>
        <Span
          fontSize={"xs"}
          fontWeight={"medium"}
          color={"#464B50"}
        >{`(${inProgressCount})`}</Span>
      </Box>
    </HStack>
  );
};

const CompleteFilterToggle = ({
  completeCount,
  isActive,
  onClick,
}: {
  completeCount: number;
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <HStack
      as={"button"}
      cursor={"pointer"}
      alignItems={"center"}
      gap={2}
      padding={1}
      bg={isActive ? "#75C5C1" : "white"}
      color={isActive ? "white" : "inherit"}
      borderRadius={"6px"}
      onClick={onClick}
    >
      <Box marginLeft={1}>
        <TickCircle
          variant="Bold"
          size={20}
          color={isActive ? "white" : "#75C5C1"}
        />
      </Box>
      <Span
        flex={1}
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        textWrap={"nowrap"}
        fontSize={"xs"}
        fontWeight={"medium"}
        paddingRight={{ base: 1, md: 4 }}
        hideBelow={"md"}
      >
        Complete
      </Span>
      <Box bg="#E9F5F7" borderRadius={"6px"} padding={1}>
        <Span
          fontSize={"xs"}
          fontWeight={"medium"}
          color={"#464B50"}
        >{`(${completeCount})`}</Span>
      </Box>
    </HStack>
  );
};
