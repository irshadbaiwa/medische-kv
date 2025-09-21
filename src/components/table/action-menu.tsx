"use client";

import { Box, IconButton, Menu, Portal, Text } from "@chakra-ui/react";
import {
  ArrowDown2,
  Status,
  TaskSquare,
  TickCircle,
  Trash,
} from "iconsax-reactjs";
import { useTodoContext } from "../todo/todo-provider";
import { Task, TaskStatus } from "../todo/@types";

export const ActionMenu = ({ task }: { task: Task }) => {
  const { deleteTodo, updateTodoStatus } = useTodoContext();

  const taskStatus = task.status;
  const status: Record<TaskStatus, string> = {
    [TaskStatus.COMPLETED]: "Completed",
    [TaskStatus.ONGOING]: "In Progress",
    [TaskStatus.TODO]: "To Do",
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton size="xs" bg="secondary" color="icon" borderRadius={999}>
          <ArrowDown2 size={16} />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content padding={1} gapY={2}>
            <Box paddingX={1} paddingY={2} borderRadius={6} paddingLeft={4}>
              <Text fontWeight={"semibold"} fontSize={"sm"}>
                {status[taskStatus]}
              </Text>
            </Box>
            <Menu.Separator />
            {taskStatus !== TaskStatus.COMPLETED && (
              <Menu.Item
                value="complete-task"
                paddingX={1}
                paddingY={2}
                borderRadius={6}
                fontSize={"xs"}
                onClick={() => updateTodoStatus(task.id, TaskStatus.COMPLETED)}
              >
                <Box>
                  <TickCircle variant="Bold" size={16} color={"#75C5C1"} />
                </Box>
                Mark Completed
              </Menu.Item>
            )}
            {taskStatus !== TaskStatus.ONGOING && (
              <Menu.Item
                value="ongoing-task"
                paddingX={1}
                paddingY={2}
                borderRadius={6}
                fontSize={"xs"}
                onClick={() => updateTodoStatus(task.id, TaskStatus.ONGOING)}
              >
                <Box>
                  <Status variant="Bold" size={16} color={"#F6BE38"} />
                </Box>
                Set In Progress
              </Menu.Item>
            )}
            {taskStatus !== TaskStatus.TODO && (
              <Menu.Item
                value="todo-task"
                paddingX={1}
                paddingY={2}
                borderRadius={6}
                fontSize={"xs"}
                onClick={() => updateTodoStatus(task.id, TaskStatus.TODO)}
              >
                <Box>
                  <TaskSquare variant="Bold" size={16} color={"#CFB7E8"} />
                </Box>
                Set To-Do
              </Menu.Item>
            )}
            <Menu.Item
              value="delete-task"
              paddingX={1}
              paddingY={2}
              borderRadius={6}
              fontSize={"xs"}
              onClick={() => deleteTodo(task.id)}
            >
              <Box color={"red.600"}>
                <Trash size={16} />
              </Box>
              Delete Task
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
