import "./App.css";
import DataForm from "./components/DataForm/DataForm";
import CartItems from "./components/CartItems/CartItems";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <main className="App">
      <Box bg="#fff" p="2rem" borderRadius="10px" maxW="40%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <DataForm />
      </Box>
      <Box bg="#fff" p="2rem" borderRadius="10px" maxW="40%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <CartItems />
      </Box>
    </main>
  );
}

export default App;
