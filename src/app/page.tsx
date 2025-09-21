import { Box, VStack } from "@chakra-ui/react";
import { PageHeading } from "@/components/ui/page-heading";
import { SearchQueryAndViewType } from "@/components/todo/search-query";
import { FilterTasksByProgress } from "@/components/todo/filter-tasks";
import { Todos } from "@/components/todo/todos";

export default function Home() {
  return (
    <Box bg={"white"} borderRadius={"10px"} marginBottom={24}>
      {/** Heading */}
      <PageHeading title="Afdeling Kwaliteit" />
      <VStack
        gap={1}
        paddingX={{ base: 4, lg: 6, "2xl": 8 }}
        paddingY={{ base: 3, lg: 3, "2xl": 4 }}
        overflow={"hidden"}
      >
        {/** Search and filter */}
        <SearchQueryAndViewType />
        <FilterTasksByProgress />
        {/** Todos */}
        <Todos />
      </VStack>
    </Box>
  );
}
