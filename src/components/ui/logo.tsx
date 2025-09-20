import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Box
        width={{ base: 24, lg: 28, "2xl": 32 }}
        aspectRatio={135 / 54}
        position="relative"
      >
        <Image
          fill
          src="/logo.png"
          alt="Medische Kliniek Velsen Logo"
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </Box>
    </Link>
  );
};
