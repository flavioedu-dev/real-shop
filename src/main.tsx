import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { NumberCartItemsContextProvider } from "./contexts/NumberCartItems.tsx"

import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NumberCartItemsContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <Box minH="100vh" className="body-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
    </NumberCartItemsContextProvider>
  </React.StrictMode>
);
