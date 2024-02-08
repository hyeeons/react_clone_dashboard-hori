import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Gnb from "../comm/Gnb";

const Header = () => {
  return (
    <>
      <Box padding={"0 30px"}>
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
