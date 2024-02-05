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
import Gnb from "./Gnb";
import gsap from "gsap";

const Header = () => {
  // if : 100px 이상 스크롤 되면 헤더에 배경색을 입힌다.
  // gsap.to(요소, {옵션})
  // else : 100px 이하로 스크롤 되면 배경색을 없앤다.

  const HandleScroll = () => {
    const scrollY = window.scrollY; // 현재 스크롤 위치
    const hd = document.getElementById("header"); // 헤더
    const navBelt = document.querySelector(".nav-belt__wrapper");
    const navBar = document.querySelector(".nav-bar__wrapper");
    const hdHeight = hd.offsetHeight; // 헤더 높이
    const swiperHeight = document.querySelector(".top-cont")?.offsetHeight || 0;
    console.log(scrollY);
    console.log(swiperHeight - hdHeight);

    if (scrollY > swiperHeight - hdHeight) {
      gsap.to(hd, { backgroundColor: "#fff", duration: 0.5 });
    } else {
      gsap.to(hd, { backgroundColor: "rgba(0,0,0,.1)", duration: 0.5 });
    }
  };
  // 스크롤 이벤트 등록
  window.addEventListener("scroll", HandleScroll);

  return (
    <>
      <Box
        id="header"
        className="header"
        as="tnbheader"
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={"rgba(0,0,0,.1)"}
        backdropFilter={"saturate(180%)} blur=(15px)"}
      >
        {/* tnb tab */}
        <Box
          className="nav-belt__wrapper"
          display={["none", null, null, null, "block"]}
          background={"rgba(0,0,0,0.6)"}
          height={"32px"}
        >
          <ContainerSt
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <ButtonGroup gap={"10px"}>
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
        <Box className="nav-bar__wrapper" bg={"rgba(0,0,0,.05)"}>
          <Container
            display={"flex"}
            h={"60px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Gnb />
          </Container>
        </Box>
      </Box>
    </>
  );
};

// const 변수이름 = styled(컴포넌트 이름)`속성:값`
// const IconBtnGroup = styled(ButtonGroup)``;

export default Header;
