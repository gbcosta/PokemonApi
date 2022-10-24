import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bgColor: "rgb(230, 230, 230)",
  },
  fonts: {
    heading: `'Poppins', 'Open Sans', sans-serif`,
    body: `'Poppins', 'Raleway', sans-serif`,
  },
});

export default theme;
