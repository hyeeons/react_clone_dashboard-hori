import { Box, Center, Container, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box as="header" borderBottom={"5px solid lightcoral"}>
      <Container display={["block", null, "flex"]} justifyContent={"Center"}>
        <Heading fontSize={"24px"} style={{ width: "1000px", height: "50px" }}>
          <Link to="/">Dashboard</Link>
        </Heading>
        <nav>
          <ul>
            <li>
              <Link to="/">Main Dashboard</Link>
            </li>
            <li>
              <Link to="/marketplace">NFT Marketplace</Link>
            </li>
            <li>
              <Link to="/datatables"> Data Tables</Link>
            </li>
            <li>
              <Link to="/profile"> Profile</Link>
            </li>
            <li>
              <Link to="/signin"> Sigh In</Link>
            </li>
            <li>
              <Link to="/rtladmin"> RTL Admin</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Box>
  );
};

export default Header;
