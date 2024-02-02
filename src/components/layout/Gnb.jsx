import { ChatIcon, SearchIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Heading,
  IconButton,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lighten } from "polished";
import ContainerSt from "./Container";
import { FaSearch } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";

const Gnb = () => {
  return (
    <>
      <ContainerSt
        as="header"
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        bg={"rgba(0,0,0,0.05)"}
        height={"60px"}
        display={["block", null, "flex"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Logo width="300px" fontSize={24}>
          <Link to="/">Dashboard</Link>
        </Logo>
        <UnorderedList display={{ sm: "none", lg: "flex" }} gap={"40px"}>
          <ListItem>
            <Link to="/">Main Dashboard</Link>
          </ListItem>
          <ListItem>
            <Link to="/marketplace">NFT Marketplace</Link>
          </ListItem>
          <ListItem>
            <Link to="/datatables"> Data Tables</Link>
          </ListItem>
          <ListItem>
            <Link to="/profile"> Profile</Link>
          </ListItem>
          <ListItem>
            <Link to="/signin"> Sign In</Link>
          </ListItem>
          <ListItem>
            <Link to="/rtladmin"> RTL Admin</Link>
          </ListItem>
        </UnorderedList>
        <ButtonGroup>
          <IconButton
            variant="gnbicon"
            aria-label="Search database"
            icon={<FaUserLarge />}
          />
          <IconButton
            variant="gnbicon"
            aria-label="chatting"
            icon={<FaSearch />}
          />
          <IconButton
            variant="gnbicon"
            aria-label="chatting"
            icon={<FaHamburger />}
          />
        </ButtonGroup>
      </ContainerSt>
    </>
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

export default Gnb;
