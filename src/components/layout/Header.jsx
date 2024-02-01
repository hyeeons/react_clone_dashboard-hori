import { ChatIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, ButtonGroup, Heading, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ContainerSt from "./Container";
import { lighten } from "polished";

const Header = () => {
  return (
    <Box as="header">
      <ContainerSt background={"orange.500"}>
        <Box
          display={["block", null, "flex"]}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Logo width="300px" fontSize={24}>
            <Link to="/">Dashboard</Link>
          </Logo>
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
            <IconButton
              variant="outline"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
            <IconButton
              variant="cancel"
              aria-label="chatting"
              icon={<ChatIcon />}
            />
          </IconBtnGroup>
        </Box>
      </ContainerSt>
    </Box>
  );
};

const Logo = styled(Heading)`
  color: ${(props) => props.theme.colors.yellow[100]};
  background-color: ${(props) => lighten(0.1, props.theme.colors.brand[400])};
  &:hover {
    color: ${({ theme }) => lighten(0.2, theme.colors.brand[500])};
    background-color: ${({ theme }) => lighten(0.1, theme.colors.green[500])};
  }
`;

// const 변수이름 = styled(컴포넌트 이름)`속성:값`
const IconBtnGroup = styled(ButtonGroup)``;

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
