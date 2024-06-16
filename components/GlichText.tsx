// @ts-nocheck

import { Box, keyframes, Text } from "@chakra-ui/react";
import merge from "lodash/merge";

interface GlichTextProps extends Record<string, any> {
  text?: string;
  wrapperProps?: any;
  childProps?: any;
  duration?: string;
}

const GlichText = (props: GlichTextProps) => {
  const { text, wrapperProps, childProps, duration, ...rest } = props;

  return <p>{props.text}</p>
};

GlichText.defaultProps = {
  text: "",
  wrapperProps: {},
  childProps: {},
  duration: "2s",
};

export default GlichText;
