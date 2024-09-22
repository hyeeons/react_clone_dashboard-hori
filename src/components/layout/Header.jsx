import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Gnb from "./Gnb";

const Header = () => {
  return (
    <>
      <Box
        as={"header"}
        id={"header"}
        padding={"0 30px"}
        position={"fixed"}
        top={0}
        bottom={0}
        zIndex={1000}
        left={{ base:"-100%", xl: 0 }}
        bg={"white"}
        w={292}
      >
        <Heading
          as={"h1"}
          w={239}
          fontSize={25}
          fontWeight={400}
          h={120}
          padding={"55px 0"}
          textAlign={"center"}
          borderBottom={"1px solid"}
          borderColor={"secondaryGray.500"}
        >
          <Link to="/">
            <strong>HORIZON </strong>FREE
          </Link>
        </Heading>
        <Gnb />
      </Box>
    </>
  );
};

export default Header;
