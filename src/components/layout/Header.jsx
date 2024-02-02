import { ChatIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  IconButton,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import ContainerSt from "./Container";
import { lighten } from "polished";
import Gnb from "../comm/Gnb";

const Header = () => {
  return (
    <>
      <Box as="tnbheader">
        {/* tab */}
        <Box
          display={["none", null, null, null, "block"]}
          background={"rgba(0,0,0,0.6)"}
          height={"32px"}
        >
          <ContainerSt
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ButtonGroup>
              <Button colorScheme="teal" variant="tnb">
                공공기관용
              </Button>
              <Button colorScheme="teal" variant="tnb">
                금융 클라우드
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button colorScheme="teal" variant="tnb">
                로그인
              </Button>
              <Button colorScheme="teal" variant="tnb">
                회원가입
              </Button>
              <Button colorScheme="teal" variant="tnb">
                Languages
              </Button>
            </ButtonGroup>
          </ContainerSt>
        </Box>
      </Box>
      <Gnb />
    </>
  );
};

// const 변수이름 = styled(컴포넌트 이름)`속성:값`
const IconBtnGroup = styled(ButtonGroup)``;

export default Header;
