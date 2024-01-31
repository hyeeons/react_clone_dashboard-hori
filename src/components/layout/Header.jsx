import { ChatIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContainerSt from "./Container";

const Header = () => {
  return (
    <Box as="header">
      <ContainerSt background={"brand.300"}>
        <Box
          display={["block", null, "flex"]}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading as="h1" width="300px" fontSize={24}>
            <Link to="/">Dashboard</Link>
          </Heading>
          <Nav>
            <NavList>
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
                <Link to="/signin"> Sign In</Link>
              </li>
              <li>
                <Link to="/rtladmin"> RTL Admin</Link>
              </li>
            </NavList>
          </Nav>
          <IconBtnGroup>
            <IconButton aria-label="Search database" icon={<SearchIcon />} />
            <IconButton aria-label="chatting" icon={<ChatIcon />} />
          </IconBtnGroup>
        </Box>
      </ContainerSt>
    </Box>
  );
};

// const 변수이름 = styled(컴포넌트 이름)`속성:값`
const IconBtnGroup = styled(ButtonGroup)`
  button {
    background: yellowgreen;
  }
`;

// const 변수이름 = styled.태그이름`속성:값`
const Nav = styled.nav`
  height: 100px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 0 10px;
  margin: 0;
  gap: 20px;
  list-style: none;
  li {
    width: 100%;
    text-align: center;
  }
  a {
    display: block;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    li {
      width: auto;
    }
    a {
      display: inline-block;
    }
  }
`;
export default Header;
