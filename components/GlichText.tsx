// @ts-nocheck
import React from "react";
import styles from "../styles/Glich.module.css";

import { Box, Button, Center, VStack, keyframes } from "@chakra-ui/react";

interface GlichTextProps {
  text?: string;
}
const GlichText = (props: GlichTextProps) => {
    const {text} = props;
  const getIndexGlichStyle = (index: number) => {
    return `
    .child${index} {
        --stack-height${index}: calc(100% / 3 - 1px);
        --inverse-index${index}: calc(calc(3 - 1) - ${index});
        --clip-top${index}: calc(var(--stack-height${index}) * ${index});
        --clip-bottom${index}: calc(var(--stack-height${index}) * var(--inverse-index${index}));
        clip-path: inset(var(--clip-top${index}) 0 var(--clip-bottom${index}) 0);
        animation: stack 340ms cubic-bezier(.46,.29,0,1.24) 1 backwards calc(${index} * 120ms), glitch 2s ease infinite 2s alternate-reverse;
      }
    `;
  };

  return (
    <div className={styles.stack}>
      <span className={styles.child0}>{text}</span>
      <span className={styles.child1}>{text}</span>
      <span className={styles.child2}>{text}</span>
    </div>
  );
};

export default GlichText;
