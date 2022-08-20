import NextLink from "next/link";

import React from "react";
import GlichText from "./GlichText";
import { Link } from "@chakra-ui/react";
const BlogLink = (props: any) => {
  const { post } = props;
  return (
    <NextLink href={"/blog/" + post.slug} passHref>
      <Link>
        <GlichText text={post.frontMatter.title} />
      </Link>
    </NextLink>
  );
};

export default BlogLink;
