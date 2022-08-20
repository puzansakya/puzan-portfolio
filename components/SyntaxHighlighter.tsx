import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CustomSyntaxHighlighter = (props: any) => {
  const { language, children } = props;
  return (
    <SyntaxHighlighter language={language} styles={dracula}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CustomSyntaxHighlighter;
