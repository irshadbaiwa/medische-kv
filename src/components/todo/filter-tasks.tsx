"use client";

import { Box, HStack, Span } from "@chakra-ui/react";
import { TaskSquare, Status, TickCircle } from "iconsax-reactjs";
import { useTodoContext, FilterOption } from "./todo-provider";
import { MouseEventHandler } from "react";

export const FilterTasksByProgress = () => {
  const todoCount = 20;
  const inProgressCount = 23;
  const completeCount = 18;

  const { filterOption, setFilterOption } = useTodoContext();
  const clearFilter = () => setFilterOption(FilterOption.ALL);
  const toggleTodo = () => {
    filterOption === FilterOption.TODO
      ? clearFilter()
      : setFilterOption(FilterOption.TODO);
  };
  const toggleOngoing = () => {
    filterOption === FilterOption.ONGOING
      ? clearFilter()
      : setFilterOption(FilterOption.ONGOING);
  };
  const toggleCompleted = () => {
    filterOption === FilterOption.COMPLETED
      ? clearFilter()
      : setFilterOption(FilterOption.COMPLETED);
  };

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
        isActive={filterOption === FilterOption.TODO}
        onClick={toggleTodo}
      />
      {/** In-Progress */}
      <InProgressFilterToggle
        inProgressCount={inProgressCount}
        isActive={filterOption === FilterOption.ONGOING}
        onClick={toggleOngoing}
      />
      {/** Completed */}
      <CompleteFilterToggle
        completeCount={completeCount}
        isActive={filterOption === FilterOption.COMPLETED}
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
