"use client";

import { HStack, Box, Input, InputGroup, IconButton } from "@chakra-ui/react";
import { RowHorizontal, RowVertical, SearchNormal1 } from "iconsax-reactjs";
import { useTodoContext } from "./todo-provider";
import { ViewType } from "./@types";

export const SearchQueryAndViewType = () => {
  const { searchQuery, setSearchQuery, viewType, setViewType } =
    useTodoContext();

  return (
    <HStack
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={2}
      padding={2}
      bg={"highlight"}
      borderRadius={"6px"}
    >
      {/** Search bar */}
      <Box flexShrink={1}>
        <InputGroup
          startElement={
            <SearchNormal1 size={16} color="#999" style={{ marginLeft: 12 }} />
          }
        >
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for To-Do"
            type="search"
            borderRadius={"6px"}
            bg="white"
            css={{ "--focus-color": "#75C5C1" }}
          />
        </InputGroup>
      </Box>
      {/** View Type */}
      <HStack padding={1} gap={1} borderRadius={"6px"} bg={"white"}>
        {/** Kanban */}
        <IconButton
          size={"xs"}
          bg={viewType === ViewType.KANBAN ? "primary" : "secondary"}
          borderRadius={"6px"}
          color={viewType === ViewType.KANBAN ? "white" : "icon"}
          onClick={() => setViewType(ViewType.KANBAN)}
        >
          <RowHorizontal size={14} />
        </IconButton>
        {/** Table */}
        <IconButton
          size={"xs"}
          bg={viewType === ViewType.TABLE ? "primary" : "secondary"}
          borderRadius={"6px"}
          color={viewType === ViewType.TABLE ? "white" : "icon"}
          onClick={() => setViewType(ViewType.TABLE)}
        >
          <RowVertical size={14} />
        </IconButton>
      </HStack>
    </HStack>
  );
};
