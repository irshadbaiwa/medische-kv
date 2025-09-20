import { Box, Flex } from "@chakra-ui/react";
import { SideNav } from "./side-nav";

export const GlobalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Flex
      height={"100dvh"}
      direction={{ base: "column", lg: "row" }}
      overflow={"hidden"}
    >
      {/** Side Nav */}
      <Box
        as={"aside"}
        width={"250px"}
        height={"100%"}
        hideBelow={"lg"}
        background={"white"}
        borderRightWidth={1}
        borderRightColor={"border"}
        padding={{ lg: 6, "2xl": 8 }}
      >
        <SideNav />
      </Box>
      {/** Page */}
      <Box as={"main"} flex={1}>
        {/** Header */}
        <Box
          as={"header"}
          width="100%"
          height={{ base: "auto", lg: "auto" }}
          background={"white"}
          borderBottomWidth={1}
          borderBottomColor={"border"}
          padding={{ base: 4, lg: 6, "2xl": 8 }}
        >
          Header
        </Box>
        {/** Content */}
        <Box
          as={"section"}
          width={"100%"}
          padding={{ base: 4, lg: 6, "2xl": 8 }}
        >
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
