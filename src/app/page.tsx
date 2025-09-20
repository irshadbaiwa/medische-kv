import { Box } from "@chakra-ui/react";
import { PageHeading } from "@/components/ui/page-heading";

export default function Home() {
  return (
    <Box bg={"white"} borderRadius={"10px"}>
      {/** Heading */}
      <PageHeading title="Afdeling Kwaliteit" />
    </Box>
  );
}
