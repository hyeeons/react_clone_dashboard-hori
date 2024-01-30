import { ChakraProvider } from "@chakra-ui/react";
import Routers from "./Routers";
import "./assets/scss/style.scss";

function App() {
  return (
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
