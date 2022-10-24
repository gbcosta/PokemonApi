import { Home } from "@components/home";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
