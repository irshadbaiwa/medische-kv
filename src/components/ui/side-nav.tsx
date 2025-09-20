"use client";

import Link from "next/link";
import {
  Box,
  Accordion,
  Flex,
  Text,
  Portal,
  Select,
  createListCollection,
} from "@chakra-ui/react";
import {
  type Icon,
  Menu,
  Stickynote,
  NoteText,
  Folder2,
  People,
  MenuBoard,
  Buliding,
  Call,
  CalendarTick,
  NotificationBing,
  MessageEdit,
  Edit,
  LanguageCircle,
} from "iconsax-reactjs";
import { Logo } from "./logo";

type NavLinkType = {
  name: string;
  href?: string;
  children?: NavLinkType[];
  Icon?: Icon;
  isActive?: boolean;
};

export const links: NavLinkType[] = [
  { name: "Home", href: "#", Icon: Menu },
  { name: "MKVanBinnen", href: "#", Icon: Stickynote },
  { name: "Document Management", href: "#", Icon: Folder2 },
  { name: "Patient Information", href: "#", Icon: People },
  { name: "Agenda", href: "#", Icon: NoteText },
  {
    name: "My Department",
    Icon: Buliding,
    isActive: false,
    children: [
      { name: "News", href: "#" },
      { name: "Members", href: "#" },
      { name: "To-Do", href: "#", isActive: true },
      { name: "Form Task", href: "#" },
      { name: "Agenda", href: "#" },
      { name: "Follow up system", href: "#" },
      { name: "Group Settings", href: "#" },
    ],
  },
  { name: "Phone numbers", href: "#", Icon: Call },
  { name: "My to do protocols", href: "#", Icon: CalendarTick },
  { name: "My Notifications", href: "#", Icon: NotificationBing },
  { name: "Knowledge Base", href: "#", Icon: MenuBoard },
  { name: "Super Admin", href: "#", Icon: MessageEdit },
  {
    name: "Admin",
    Icon: Edit,
    isActive: false,
    children: [
      { name: "Agenda", href: "#" },
      { name: "News", href: "#" },
      { name: "Poll", href: "#" },
      { name: "Department Rules", href: "#" },
      { name: "Follow up system", href: "#" },
    ],
  },
];

export const SideNav = () => {
  return (
    <Flex
      direction={"column"}
      gap={2}
      width={"100%"}
      height={"100%"}
      overflow={"hidden"}
    >
      <Flex direction="row" justifyContent="start" alignItems="center">
        {/** Logo */}
        <Logo />
      </Flex>

      {/** Links */}
      <Flex
        flex={1}
        direction={"column"}
        overflowY={"auto"}
        gap={2}
        marginTop={6}
      >
        {links.map((item) => {
          const isGroup = !!item.children;
          const isLink = !!item.href;

          return isLink ? (
            <NavLink
              key={item.name}
              href={item.href!}
              name={item.name}
              Icon={item.Icon}
              isActive={item.isActive}
            />
          ) : isGroup ? (
            <NavGroup
              key={item.name}
              children={item.children!}
              name={item.name}
              Icon={item.Icon}
              isActive={item.isActive}
            />
          ) : null;
        })}
      </Flex>

      {/** Lang/theme */}
      <LanguageToggler />
    </Flex>
  );
};

const NavLink = ({
  href,
  name,
  Icon,
  isActive,
}: {
  name: string;
  href: string;
  Icon?: Icon;
  isActive?: boolean;
}) => {
  return (
    <Link href={href} style={{ width: "100%" }}>
      <Flex
        width={"100%"}
        bg={isActive ? "highlight" : "transparent"}
        _hover={{ bg: isActive ? "highlight" : "secondary" }}
        direction="row"
        gap={2}
        paddingX={2}
        paddingY={2}
        borderRadius={"10px"}
        alignItems={"center"}
      >
        <Flex
          width={"22px"}
          height={"22px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {!!Icon && (
            <Icon size={18} color={isActive ? "#75C5C1" : "#7988A9"} />
          )}
        </Flex>
        <Text
          flex={1}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          textWrap={"nowrap"}
          color={isActive ? "primary" : "inherit"}
          fontWeight={isActive ? "medium" : "medium"}
          fontSize={"sm"}
        >
          {name}
        </Text>
      </Flex>
    </Link>
  );
};

const NavGroup = ({
  name,
  children,
  Icon,
  isActive,
}: {
  name: string;
  children: NavLinkType[];
  Icon?: Icon;
  isActive?: boolean;
}) => {
  return (
    <Accordion.Root collapsible variant={"plain"} defaultValue={[name]}>
      <Accordion.Item value={name}>
        <Accordion.ItemTrigger
          width={"100%"}
          display={"flex"}
          flexDirection={"row"}
          bg={isActive ? "highlight" : "transparent"}
          _hover={{ bg: isActive ? "highlight" : "secondary" }}
          gap={2}
          paddingX={2}
          paddingY={2}
          borderRadius={"10px"}
          alignItems={"center"}
        >
          <Flex
            width={"22px"}
            height={"22px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {!!Icon && (
              <Icon size={18} color={isActive ? "#75C5C1" : "#7988A9"} />
            )}
          </Flex>
          <Text
            flex={1}
            overflow={"hidden"}
            textOverflow={"ellipsis"}
            textWrap={"nowrap"}
            color={isActive ? "primary" : "inherit"}
            fontWeight={isActive ? "medium" : "medium"}
            fontSize={"sm"}
          >
            {name}
          </Text>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody display={"flex"} flexDirection={"column"} gap={2}>
            {children.map((item) => {
              const isGroup = !!item.children;
              const isLink = !!item.href;

              return isLink ? (
                <NavLink
                  key={item.name}
                  href={item.href!}
                  name={item.name}
                  Icon={item.Icon}
                  isActive={item.isActive}
                />
              ) : (
                <NavGroup
                  key={item.name}
                  children={item.children!}
                  name={item.name}
                  Icon={item.Icon}
                  isActive={item.isActive}
                />
              );
            })}
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const LanguageToggler = () => {
  "use client";

  return (
    <Box
      width="100%"
      borderRadius="10px"
      bg={"secondary"}
      borderWidth={1}
      borderColor={"border"}
      padding={3}
      marginTop={4}
    >
      <Select.Root
        collection={languages}
        bg={"white"}
        size="sm"
        width="100%"
        borderRadius={"10px"}
        borderWidth={1}
        borderColor={"border"}
        overflow={"hidden"}
        defaultValue={["english"]}
      >
        <Select.HiddenSelect />
        <Select.Control
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          paddingX={2}
          gap={2}
          defaultValue={"english"}
        >
          <LanguageCircle size={18} color={"#7988A9"} />
          <Select.Trigger outline={"none"} border={"none"}>
            <Select.ValueText />
          </Select.Trigger>
          <Select.IndicatorGroup paddingRight={2}>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content paddingY={2} paddingX={2}>
              {languages.items.map((language) => (
                <Select.Item item={language} key={language.value}>
                  {language.label}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </Box>
  );
};

const languages = createListCollection({
  items: [
    { label: "English", value: "english" },
    { label: "Dutch", value: "dutch" },
  ],
});
