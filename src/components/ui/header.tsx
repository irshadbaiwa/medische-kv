import Image from "next/image";
import {
  Flex,
  Box,
  HStack,
  IconButton,
  Span,
  Button,
  CloseButton,
  Drawer,
  Portal,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import {
  ArrowDown2,
  HamburgerMenu,
  Notification,
  SearchNormal1,
} from "iconsax-reactjs";
import { Logo } from "./logo";
import { SideNav } from "./side-nav";

export const Header = () => {
  return (
    <HStack
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Box hideFrom={"lg"}>
          <Logo />
        </Box>
        <Box hideBelow={"lg"}>
          <InputGroup
            startElement={
              <SearchNormal1
                size={16}
                color="#999"
                style={{ marginLeft: 12 }}
              />
            }
          >
            <Input
              placeholder="Search"
              type="search"
              borderRadius={"10px"}
              bg="secondary"
            />
          </InputGroup>
        </Box>
      </Flex>
      <Flex alignItems={"center"} gap={2}>
        <IconButton bg={"secondary"} borderRadius={"10px"} color={"icon"}>
          <Notification size={16} />
        </IconButton>
        <Flex
          alignItems={"center"}
          gap={1}
          bg={"secondary"}
          borderRadius={999}
          padding={1}
          overflow={"hidden"}
        >
          <Image
            src={"/team/maria-vetrovs.jpg"}
            alt="Maria Vetrovs"
            height={36}
            width={36}
            style={{ borderRadius: 999 }}
          />
          <Span fontWeight={"semibold"} fontSize={"xs"}>
            Hi Maria
          </Span>
          <Box color={"icon"} marginX={1}>
            <ArrowDown2 size={14} variant="Bold" />
          </Box>
        </Flex>
        <Box hideFrom={"lg"}>
          <NavMenu />
        </Box>
      </Flex>
    </HStack>
  );
};

const NavMenu = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <IconButton bg={"secondary"} borderRadius={"10px"} color={"icon"}>
          <HamburgerMenu size={16} />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body>
              <Box padding={4} height={"100dvh"} overflow={"hidden"}>
                <SideNav />
              </Box>
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
