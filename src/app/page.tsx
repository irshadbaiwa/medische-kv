import { AddTaskButton } from "@/components/ui/add-task-btn";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Button,
  Switch,
} from "@chakra-ui/react";
import {
  Add,
  ArrowCircleLeft2,
  Export,
  Filter,
  Calendar,
} from "iconsax-reactjs";

export default function Home() {
  return (
    <Box bg={"white"} borderRadius={"10px"}>
      {/** Header */}
      <HStack
        alignItems={"center"}
        gap={2}
        borderBottomWidth={1}
        borderBottomColor={"border"}
        paddingX={{ base: 4, lg: 6, "2xl": 8 }}
        paddingY={{ base: 3, lg: 3, "2xl": 4 }}
      >
        <IconButton variant="outline" borderRadius={999} color={"icon"}>
          <ArrowCircleLeft2 size={24} />
        </IconButton>
        <Heading
          size={{ base: "xl", lg: "3xl" }}
          flex={1}
          fontWeight={"semibold"}
        >
          Afdeling Kwaliteit
        </Heading>
        <HStack alignItems={"center"} gap={2} hideBelow={"lg"}>
          <Switch.Root
            colorPalette={"teal"}
            bg={"secondary"}
            borderRadius={"10px"}
            padding={2}
          >
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
          <IconButton bg={"secondary"} borderRadius={"10px"} color={"icon"}>
            <Filter size={16} />
          </IconButton>
          <IconButton bg={"secondary"} borderRadius={"10px"} color={"icon"}>
            <Calendar size={16} />
          </IconButton>
          <Button
            bg="accent"
            borderRadius="10px"
            paddingX={3}
            size={{ base: "sm", lg: "md" }}
          >
            <Export size={16} />
            Export xlsx
          </Button>
        </HStack>
        {/** Add Task Btn */}
        <AddTaskButton />
      </HStack>
    </Box>
  );
}
