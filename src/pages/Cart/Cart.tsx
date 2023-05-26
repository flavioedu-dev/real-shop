import styles from "./Cart.module.css";
import DataForm from "../../components/DataForm/DataForm";
import CartItems from "../../components/CartItems/CartItems";
import { Box } from "@chakra-ui/react";

function Cart() {
  return (
    <Box minH="100vh" minW="100vw" className={styles.Cart}>
      <section>
        <Box bg="#fff" p="2rem" borderRadius="10px" maxW="40%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
          <DataForm />
        </Box>
        <Box bg="#fff" p="2rem" borderRadius="10px" maxW="40%" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
          <CartItems />
        </Box>
      </section>
    </Box>
  );
}

export default Cart;
