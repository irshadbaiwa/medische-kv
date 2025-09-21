"use client";

import { useState } from "react";
import {
  Box,
  Button,
  CloseButton,
  Dialog,
  HStack,
  Input,
  Portal,
  Span,
  Textarea,
  VStack,
  Avatar,
  NativeSelect,
} from "@chakra-ui/react";
import {
  Add,
  ArrowDown2,
  Calendar,
  TickCircle,
  Flag,
  Status,
  ProfileCircle,
  Stickynote,
} from "iconsax-reactjs";
import { Task, TaskPriority, TaskStatus, Assignee } from "./@types";
import { useTodoContext } from "./todo-provider";
import { team } from "@/data/team";

export const AddTaskButton = () => {
  const [open, setOpen] = useState(false);

  const { addTodo } = useTodoContext();
  const [form, setForm] = useState({
    name: "",
    status: TaskStatus.TODO,
    date: "",
    priority: TaskPriority.NORMAL,
    description: "",
    assignees: [] as Assignee[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTodo: Task = {
      id: Date.now().toString(),
      name: form.name,
      status: form.status,
      date: form.date,
      priority: form.priority,
      description: form.description,
      assignees: form.assignees,
    };

    addTodo(newTodo);
    setOpen(false);
    setForm({
      name: "",
      status: TaskStatus.TODO,
      date: "",
      priority: TaskPriority.NORMAL,
      description: "",
      assignees: [],
    });
  };

  return (
    <Dialog.Root
      lazyMount
      placement={"top"}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      size={{ base: "xs", lg: "md" }}
    >
      <Dialog.Trigger asChild>
        <Button
          bg="primary"
          borderRadius="10px"
          paddingX={3}
          size={{ base: "xs", lg: "md" }}
        >
          <Add size={16} />
          Add Task
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner paddingY={{ base: 10, lg: 6, "2xl": 8 }}>
          <Dialog.Content
            overflow={"auto"}
            padding={{ base: 4, lg: 6, "2xl": 8 }}
          >
            <Dialog.Header>
              <Dialog.Title visibility={"hidden"}>Add Task</Dialog.Title>
            </Dialog.Header>
            <form onSubmit={handleSubmit}>
              <Dialog.Body>
                <VStack gap={6} align="start">
                  {/** Name */}
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Task Name"
                    _placeholder={{
                      fontSize: { base: "lg", lg: "2xl" },
                      fontWeight: "semibold",
                      color: "gray.300",
                    }}
                    fontSize={{ base: "lg", lg: "2xl" }}
                    fontWeight="semibold"
                    color="gray.800"
                    border="none"
                    outline="none"
                    required
                  />

                  {/** Status */}
                  <HStack align="center" gap={2}>
                    <HStack align="center" gap={2}>
                      <Box color="gray.300">
                        <Status size={20} />
                      </Box>
                      <Span color="gray.500" fontWeight="medium">
                        Status
                      </Span>
                    </HStack>
                    {/** Select */}
                    <StatusSelect
                      value={form.status}
                      onValueChange={(newVal) =>
                        setForm({ ...form, status: newVal })
                      }
                    />
                  </HStack>

                  {/** Date */}
                  <HStack align="center" gap={2}>
                    <HStack align="center" gap={2}>
                      <Box color="gray.300">
                        <Calendar size={20} />
                      </Box>
                      <Span color="gray.500" fontWeight="medium">
                        Date
                      </Span>
                    </HStack>
                    <Input
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      color="gray.800"
                      borderWidth={1}
                      borderColor={"border"}
                      borderRadius={"10px"}
                      outline="none"
                      type="date"
                      required
                    />
                  </HStack>

                  {/** Assignees */}
                  <VStack align="flex-start" gap={4}>
                    <HStack align="center" gap={2}>
                      <Box color="gray.300">
                        <ProfileCircle size={20} />
                      </Box>
                      <Span color="gray.500" fontWeight="medium">
                        Assignees
                      </Span>
                    </HStack>
                    <HStack flexWrap="wrap" gap={2} paddingLeft={4}>
                      {team.map((member) => {
                        const isSelected = !!form.assignees.find(
                          (a) => a.name === member.name
                        );
                        return (
                          <button
                            type="button"
                            key={member.name}
                            onClick={() => {
                              if (isSelected) {
                                setForm({
                                  ...form,
                                  assignees: form.assignees.filter(
                                    (a) => a.name !== member.name
                                  ),
                                });
                              } else {
                                setForm({
                                  ...form,
                                  assignees: [...form.assignees, member],
                                });
                              }
                            }}
                          >
                            <Avatar.Root cursor="pointer" position="relative">
                              <Avatar.Fallback name={member.name} />
                              <Avatar.Image src={member.avatar} />
                              {isSelected && (
                                <Box
                                  position="absolute"
                                  bottom={0}
                                  right={0}
                                  transform="translate(25%, 25%)"
                                  bg="primary"
                                  color="white"
                                  padding={1}
                                  borderRadius={99}
                                >
                                  <TickCircle size={14} />
                                </Box>
                              )}
                            </Avatar.Root>
                          </button>
                        );
                      })}
                    </HStack>
                  </VStack>

                  {/** Priority */}
                  <HStack align="center" gap={2}>
                    <HStack align="center" gap={2}>
                      <Box color="gray.300">
                        <Flag size={20} />
                      </Box>
                      <Span color="gray.500" fontWeight="medium">
                        Priority
                      </Span>
                    </HStack>
                    {/** Select */}
                    <PrioritySelect
                      value={form.priority}
                      onValueChange={(newVal) =>
                        setForm({ ...form, priority: newVal })
                      }
                    />
                  </HStack>

                  {/** Description */}
                  <VStack align="flex-start" width="100%" gap={4}>
                    <HStack align="center" gap={2}>
                      <Box color="gray.300">
                        <Stickynote size={20} />
                      </Box>
                      <Span color="gray.500" fontWeight="medium">
                        Description
                      </Span>
                    </HStack>
                    {/** Input */}
                    <Textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      placeholder="task description"
                      _placeholder={{ color: "gray.300" }}
                      color="gray.800"
                      width="100%"
                      rows={4}
                      padding={2}
                      border="none"
                      outline="none"
                      bg="secondary"
                      borderRadius="10px"
                      required
                    />
                  </VStack>
                </VStack>
              </Dialog.Body>

              <Dialog.Footer marginTop={6}>
                <Button
                  bg="primary"
                  borderRadius="10px"
                  paddingX={6}
                  size={{ base: "sm", lg: "md" }}
                  width={{ base: "100%", lg: "auto" }}
                  type="submit"
                >
                  Create Task
                </Button>
              </Dialog.Footer>
            </form>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

const statuses = [
  { label: "To Do", value: TaskStatus.TODO },
  { label: "In Progress", value: TaskStatus.ONGOING },
  { label: "Complete", value: TaskStatus.COMPLETED },
];
const StatusSelect = ({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (newVal: TaskStatus) => void;
}) => {
  return (
    <NativeSelect.Root
      maxWidth="100%"
      flexShrink={1}
      bg={"white"}
      position={"relative"}
      border={"none"}
      outline={"none"}
    >
      <NativeSelect.Field
        value={value}
        onChange={(e) => onValueChange(e.target.value as TaskStatus)}
        placeholder="Select option"
        paddingRight={8}
        paddingLeft={2}
        outline={"none"}
        borderWidth={1}
        borderColor={"border"}
        borderRadius={"10px"}
      >
        {statuses.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </NativeSelect.Field>
      <Box
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        right={2}
        color="icon"
      >
        <ArrowDown2 size={14} />
      </Box>
    </NativeSelect.Root>
  );
};

const priorities = [
  { label: "Low", value: TaskPriority.LOW },
  { label: "Medium", value: TaskPriority.NORMAL },
  { label: "Important", value: TaskPriority.IMPORTANT },
  { label: "Urgent", value: TaskPriority.URGENT },
];
const PrioritySelect = ({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (newVal: TaskPriority) => void;
}) => {
  return (
    <NativeSelect.Root
      maxWidth="100%"
      flexShrink={1}
      bg={"white"}
      position={"relative"}
      border={"none"}
      outline={"none"}
    >
      <NativeSelect.Field
        value={value}
        onChange={(e) => onValueChange(e.target.value as TaskPriority)}
        placeholder="Select option"
        paddingRight={8}
        paddingLeft={2}
        outline={"none"}
        borderWidth={1}
        borderColor={"border"}
        borderRadius={"10px"}
      >
        {priorities.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </NativeSelect.Field>
      <Box
        position={"absolute"}
        top={"50%"}
        transform={"translateY(-50%)"}
        right={2}
        color="icon"
      >
        <ArrowDown2 size={14} />
      </Box>
    </NativeSelect.Root>
  );
};
