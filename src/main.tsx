import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Box minH="100vh" minW="100vw" className="body-container">
          <Routes>
            <Route path="/react-cart" element={<Home />} />
            <Route path="/react-cart/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
