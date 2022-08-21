import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

import GlichText from "./GlichText";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p={4} justifyContent="flex-end"  w="full">
      <HStack spacing={4}>
        <NextLink href={"/"} passHref>
          <Link>
            <GlichText text="Home" />
          </Link>
        </NextLink>
        <NextLink href={"/about"} passHref>
          <Link>
            <GlichText text="About Me" />
          </Link>
        </NextLink>
        <NextLink href={"/articles"} passHref>
          <Link>
            <GlichText text="Articles" />
          </Link>
        </NextLink>
      </HStack>
    </Flex>
  );
};

export default Navbar;
