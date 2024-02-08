import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Gnb from "../comm/Gnb";

const Header = () => {
  return (
    <>
      <Box>
        <Heading
          as={"h1"}
          fontSize={25}
          fontWeight={400}
          pt={14}
          pb={9}
          h={100}
          padding={10}
          textAlign={"center"}
          borderBottom={"1px solid"}
          borderColor={"lineDefault"}
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
