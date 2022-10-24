import { Flex, Img, Text } from "@chakra-ui/react";
import Logo from "@assets/logo.svg";

export const Header = (): JSX.Element => {
  return (
    <Flex
      sx={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        bgColor: "white",
        pt: 2,
        pb: 2,
        pl: 64,
        pr: 64,
        boxShadow: "0px 1px 13px 0px rgba(0,0,0,0.24)",
      }}
    >
      <Flex sx={{ alignContent: "center" }}>
        <Img src={Logo} sx={{ ml: 4 }} />
      </Flex>

      <Text
        as={"a"}
        sx={{
          color: "#888",
          fontWeight: 400,
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0px 0px",
          transition: "ease-in-out box-shadow 0.2s",
          _hover: {
            boxShadow: "0px 1px",
          },
        }}
      >
        My Portfolio
      </Text>
    </Flex>
  );
};
