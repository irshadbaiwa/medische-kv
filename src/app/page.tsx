import { Box, VStack } from "@chakra-ui/react";
import { PageHeading } from "@/components/ui/page-heading";
import { TodoProvider } from "@/components/todo/todo-provider";
import { SearchQueryAndViewType } from "@/components/todo/search-query";
import { FilterTasksByProgress } from "@/components/todo/filter-tasks";

export default function Home() {
  return (
    <Box bg={"white"} borderRadius={"10px"}>
      {/** Heading */}
      <PageHeading title="Afdeling Kwaliteit" />
      <TodoProvider>
        <VStack
          gap={1}
          paddingX={{ base: 4, lg: 6, "2xl": 8 }}
          paddingY={{ base: 3, lg: 3, "2xl": 4 }}
        >
          <SearchQueryAndViewType />
          <FilterTasksByProgress />
        </VStack>
      </TodoProvider>
    </Box>
  );
}
