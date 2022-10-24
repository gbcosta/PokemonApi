import { Flex, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Searchbar = (): JSX.Element => {
  const InputHoverAndFocusStyle = {
    boxShadow: "none",
    border: "none",
    outline: "#555 solid 2px",
  };

  return (
    <Flex width={"70%"} bgColor={"inherit"} sx={{ mt: 16, maxWidth: 600 }}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.600" />}
        />
        <Input
          placeholder="Bulbasaur"
          sx={{
            bgColor: "white",
            boxShadow: "none",
            border: "none",
            outline: "#bbb solid 2px",
            _focus: InputHoverAndFocusStyle,
            _hover: InputHoverAndFocusStyle,
          }}
        ></Input>
      </InputGroup>
    </Flex>
  );
};
