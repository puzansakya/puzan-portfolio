import { Container } from "@chakra-ui/react";
import React from "react";

const AppShell = (props: any) => {
  const { children } = props;
  return <Container h="100vh" py={4} maxW="container.md">{children}</Container>;
};

export default AppShell;
