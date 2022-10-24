import { Flex } from "@chakra-ui/react";
import { Header } from "@components/header";
import { Searchbar } from "@components/searchbar";

export const Home = (): JSX.Element => {
  return (
    <Flex bgColor={"bgColor"}>
      <Flex
        sx={{
          flexDir: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Header />
        <Searchbar />
      </Flex>
    </Flex>
  );
};
