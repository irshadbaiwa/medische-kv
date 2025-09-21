"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  HStack,
  Table,
  Avatar,
  AvatarGroup,
  IconButton,
  Flex,
  Text,
  Span,
  NativeSelect,
  VStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  ArrowDown2,
  Flag,
  ArrowLeft2,
  ArrowRight2,
  Clipboard,
} from "iconsax-reactjs";
import { Task, TaskPriority } from "../todo/@types";
import { useTodoContext } from "../todo/todo-provider";
import { ActionMenu } from "./action-menu";

const TodosTable = ({ tasks }: { tasks: Task[] }) => {
  const {
    isLoading,
    filterOption: statusFilter,
    searchQuery: globalFilter,
  } = useTodoContext();

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: Task) => {
      const matchesSearch = task.name
        .toLowerCase()
        .includes(globalFilter.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter!;
      return matchesSearch && matchesStatus;
    });
  }, [globalFilter, statusFilter, tasks]);

  const columns = useMemo<ColumnDef<Task>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Date",
        accessorKey: "date",
      },
      {
        header: "Assignees",
        accessorKey: "assignees",
        cell: ({ row }) => (
          <AvatarGroup size="xs" stacking="last-on-top">
            {row.original.assignees.slice(0, 2).map((assignee, i) => (
              <Avatar.Root size="xs" key={i}>
                <Avatar.Fallback name={assignee.name} />
                <Avatar.Image src={assignee.avatar} />
              </Avatar.Root>
            ))}
            {row.original.assignees.length > 2 && (
              <Avatar.Root size="xs">
                <Avatar.Fallback>
                  +{row.original.assignees.length - 2}
                </Avatar.Fallback>
              </Avatar.Root>
            )}
          </AvatarGroup>
        ),
      },
      {
        header: "Priority",
        accessorKey: "priority",
        cell: ({ row }) => {
          const priority = row.original.priority;
          const colors: Record<TaskPriority, string> = {
            [TaskPriority.LOW]: "gray",
            [TaskPriority.NORMAL]: "teal",
            [TaskPriority.IMPORTANT]: "orange",
            [TaskPriority.URGENT]: "red",
          };
          return (
            <HStack alignItems="center" gap={{ base: 1, lg: 2 }}>
              <Box color={`${colors[priority]}.500`}>
                <Flag size={16} variant="Bold" />
              </Box>
              <Text fontSize={"xs"}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </Text>
            </HStack>
          );
        },
      },
      {
        header: "",
        id: "actions",
        cell: ({ row }) => {
          return <ActionMenu task={row.original} />;
        },
      },
    ],
    []
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data: filteredTasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  return (
    <Box width={"100%"} overflow={"auto"} p={1}>
      {/** Table */}
      <Table.Root variant={"outline"} borderRadius={"10px"}>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader
                  key={header.id}
                  padding={{ base: 3, lg: 5 }}
                  paddingY={{ base: 2, lg: 4 }}
                  fontWeight={"semibold"}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            [1, 2, 3].map((j) => (
              <Table.Row key={j}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Table.Cell
                    key={i}
                    paddingX={{ base: 3, lg: 5 }}
                    paddingY={{ base: 1, lg: 2 }}
                  >
                    {i === 3 ? (
                      <SkeletonCircle size="10" />
                    ) : i === 5 ? (
                      <SkeletonCircle size="7" />
                    ) : (
                      <Skeleton
                        height="5"
                        width={{ base: 20, md: 32, lg: 48 }}
                      />
                    )}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell
                    key={cell.id}
                    paddingX={{ base: 3, lg: 5 }}
                    paddingY={{ base: 1, lg: 2 }}
                    fontSize={"xs"}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={table.getAllColumns().length}>
                <VStack
                  width={"100%"}
                  paddingY={8}
                  paddingX={4}
                  align="center"
                  gap={6}
                  justify="center"
                >
                  <Box color={"gray.200"}>
                    <Clipboard size={64} variant="Bold" />
                  </Box>
                  <Text
                    fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                    fontWeight={"bold"}
                    color={"gray.300"}
                  >
                    No Task
                  </Text>
                </VStack>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>

      {/** Pagination */}
      <Flex justify="space-between" align="center" mt={4}>
        <Flex
          align="center"
          gap={2}
          padding={1}
          bg="secondary"
          borderRadius={999}
        >
          <IconButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            size="xs"
            variant="ghost"
            color="icon"
          >
            <ArrowLeft2 size={16} />
          </IconButton>
          <IconButton
            borderRadius={999}
            borderColor="primary"
            color="white"
            bg="primary"
            size="xs"
          >
            <Span fontSize={"xs"}>
              {!!table.getPageCount()
                ? table.getState().pagination.pageIndex + 1
                : 0}
            </Span>
          </IconButton>
          <IconButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            size="xs"
            variant="ghost"
            color="icon"
          >
            <ArrowRight2 size={16} />
          </IconButton>
        </Flex>
        <Flex align="center" gap={2} padding={1}>
          <Text fontSize={"xs"} fontWeight={"semibold"} textWrap={"nowrap"}>
            Rows per page:
          </Text>
          <NativeSelect.Root
            bg={"white"}
            position={"relative"}
            border={"none"}
            outline={"none"}
            size={"xs"}
          >
            <NativeSelect.Field
              value={pagination.pageSize}
              onChange={(e) =>
                setPagination((old) => ({
                  ...old,
                  pageSize: Number(e.target.value),
                }))
              }
              paddingRight={8}
              paddingLeft={2}
              outline={"none"}
              borderWidth={1}
              borderColor={"border"}
              borderRadius={999}
            >
              {[5, 10, 25, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodosTable;
