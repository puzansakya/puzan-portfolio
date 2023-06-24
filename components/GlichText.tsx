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

  const stack = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-50%);
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    }
    60% {
      opacity: 0.5;
      transform: translateX(50%);
    }
    80% {
      transform: none;
      opacity: 1;
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    100% {
      text-shadow: none;
    }
`;

  const glitchEven = keyframes`
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(-8px);
    }
    2% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%,
    100% {
      text-shadow: none;
      transform: none;
    }
`;
  const glitchOdd = keyframes`
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(8px);
    }
    2% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%,
    100% {
      text-shadow: none;
      transform: none;
    }
`;

  const stackHeight = `calc(100% / 3 - 1px)`;

  const getInverseIndex = (index: number) => {
    return `calc(calc(3 - 1) - ${index})`;
  };

  const getClipTop = (index: any) => {
    `calc(${stackHeight} * ${index})`;
  };

  const getClipBottom = (index: number) => {
    return `calc(${stackHeight} * ${getInverseIndex(index)});`;
  };

  const getAnimation = (index, isEven) => `${stack} 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards calc(${index} * 120ms), ${isEven ? glitchEven : glitchOdd} 2s ease infinite 2s alternate-reverse`;

  const SpanCommon = {
    fontWeight: 400,
    fontFamily: "Lato",
    fontSize: "12px",
    letterSpacing: "5px",
    gridRowStart: "1",
    gridColumnStart: "1",
    textTransform: "uppercase",
  };

  const mergedCommonSpan = merge(SpanCommon, childProps);

  const SpanZero = {
    ...mergedCommonSpan,
    clipPath: `inset(${getClipTop(0)} 0 ${getClipBottom(0)} 0)`,
    animation: getAnimation(0, true),
  };
  const SpanOne = {
    ...mergedCommonSpan,
    clipPath: `inset(${getClipTop(1)} 0 ${getClipBottom(1)} 0)`,
    animation: getAnimation(1, false),
  };
  const SpanTwo = {
    ...mergedCommonSpan,
    clipPath: `inset(${getClipTop(2)} 0 ${getClipBottom(2)} 0)`,
    animation: getAnimation(2, true),
  };

  const commonWrapperProps = {
    display: "grid",
    gridTemplateColumns: "1fr",
    mb: 2,
  };

  const mergedWrapperProps = merge(commonWrapperProps, wrapperProps);

  return (
    <Box
      sx={mergedWrapperProps}
      {...rest}
    >
      <Text
        as="span"
        sx={SpanZero}
      >
        {text}
      </Text>
      <Text
        as="span"
        sx={SpanOne}
      >
        {text}
      </Text>
      <Text
        as="span"
        sx={SpanTwo}
      >
        {text}
      </Text>
    </Box>
  );
};

GlichText.defaultProps = {
  text: "",
  wrapperProps: {},
  childProps: {},
  duration: "2s",
};

export default GlichText;
