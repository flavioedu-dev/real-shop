import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Box, ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box minH="100vh" minW="100vw" className="body-container">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
