import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

import GlichText from "./GlichText";
import { Link } from "@chakra-ui/react";
import { NewGlichText } from "./new-glich-text";

const Navbar = ({ isDark = true }: { isDark?: boolean }) => {

  return <div className={`${isDark ? "bg-stone-800 text-stone-50" : "bg-transparent text-gray-900"} absolute top-0 left-0 w-full`}>
    <div className="mx-auto flex justify-between items-center w-full py-3 2xl:max-w-screen-xl">
      <div className="flex gap-3 items-center">
        <div className="rounded-full h-6 w-6"></div>
        <p className="font-bold leading-6">
          {/* Логотип */}
          Puzan Sakya
        </p>
      </div>
      <div className="text-sm leading-5 p-4 flex gap-10">
        <NextLink href={"/"} passHref>
          <a>
            <NewGlichText label="Home" />
          </a>
        </NextLink>
        <NextLink href={"/about"} passHref>
          <a>
            <NewGlichText label="About Me" />
          </a>
        </NextLink>
        <NextLink href={"/articles"} passHref>
          <a>
            <NewGlichText label="Articles" />
          </a>
        </NextLink>
      </div>
    </div>
  </div>
};

export default Navbar;
