import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuList from "../comm/MenuList";

const Header = () => {
  return (
    <>
      <Box>
        <Box h={100} padding={10} textAlign={"center"}>
          <Link to="/">HORIZON FREE</Link>
        </Box>
        <MenuList />
      </Box>
    </>
  );
};

export default Header;
