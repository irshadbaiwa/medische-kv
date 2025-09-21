import { Calendar, Flag, ProfileCircle } from "iconsax-reactjs";
import { ActionMenu } from "../table/action-menu";
import { Task, TaskPriority } from "../todo/@types";
import {
  HStack,
  VStack,
  Text,
  Box,
  Span,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";

export const TaskCard = ({ task }: { task: Task }) => {
  const colors: Record<TaskPriority, string> = {
    [TaskPriority.LOW]: "gray",
    [TaskPriority.NORMAL]: "teal",
    [TaskPriority.IMPORTANT]: "orange",
    [TaskPriority.URGENT]: "red",
  };

  return (
    <VStack
      width="100%"
      paddingY={2}
      paddingX={3}
      bg="white"
      borderRadius="10px"
      gap={3}
    >
      <HStack width="100%" justify="space-between">
        <Text fontSize="sm" fontWeight="semibold">
          {task.name}
        </Text>
        <ActionMenu task={task} />
      </HStack>

      <HStack width="100%" align="center" gap={2}>
        <Box color="gray.400">
          <Calendar size={20} />
        </Box>
        <Span fontSize="xs" color="gray.600">
          {task.date}
        </Span>
      </HStack>

      <HStack width="100%" align="center" gap={2}>
        <Box color="gray.400">
          <ProfileCircle size={20} />
        </Box>
        <AvatarGroup size="xs" stacking="last-on-top">
          {task.assignees.slice(0, 2).map((assignee, i) => (
            <Avatar.Root size="xs" width={6} height={6} key={i}>
              <Avatar.Fallback name={assignee.name} />
              <Avatar.Image src={assignee.avatar} />
            </Avatar.Root>
          ))}
          {task.assignees.length > 2 && (
            <Avatar.Root size="xs" width={6} height={6}>
              <Avatar.Fallback>+{task.assignees.length - 2}</Avatar.Fallback>
            </Avatar.Root>
          )}
          {!task.assignees.length && <Text fontSize="xs">Unassigned</Text>}
        </AvatarGroup>
      </HStack>

      <HStack width="100%" align="center" gap={2}>
        <Box color={`${colors[task.priority]}.500`}>
          <Flag variant="Bold" size={20} />
        </Box>
        <Span fontSize="xs" color="gray.600">
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </Span>
      </HStack>
    </VStack>
  );
};
