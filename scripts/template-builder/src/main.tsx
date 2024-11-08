import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/500.css"; // Specify weight
import "@fontsource/open-sans/600.css"; // Specify weight
import "@fontsource/open-sans/700.css"; // Specify weight
import "@fontsource/open-sans/800.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style
import "@fontsource/open-sans/500-italic.css"; // Specify weight and style
import "@fontsource/open-sans/600-italic.css"; // Specify weight and style
import "@fontsource/open-sans/700-italic.css"; // Specify weight and style
import "@fontsource/open-sans/800-italic.css"; // Specify weight and style

// import "@fontsource/eb-garamond"; // Defaults to weight 400
// import "@fontsource/eb-garamond/400.css"; // Specify weight
// import "@fontsource/eb-garamond/500.css"; // Specify weight
// import "@fontsource/eb-garamond/600.css"; // Specify weight
// import "@fontsource/eb-garamond/700.css"; // Specify weight
// import "@fontsource/eb-garamond/800.css"; // Specify weight
// import "@fontsource/eb-garamond/400-italic.css"; // Specify weight and style
// import "@fontsource/eb-garamond/500-italic.css"; // Specify weight and style
// import "@fontsource/eb-garamond/600-italic.css"; // Specify weight and style
// import "@fontsource/eb-garamond/700-italic.css"; // Specify weight and style
// import "@fontsource/eb-garamond/800-italic.css"; // Specify weight and style

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
