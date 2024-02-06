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
import { useEffect, useState } from "react";

// if : 100px 이상 스크롤 되면 헤더에 배경색을 입힌다.
// gsap.to(요소, {옵션})
// else : 100px 이하로 스크롤 되면 배경색을 없앤다.
const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navBeltHeight =
        document.querySelector(".nav-belt__wrapper")?.offsetHeight || 0;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const header = document.getElementById("header");
      const navBarWrapper = document.querySelector(".nav-bar__wrapper");

      if (scrollPosition > navBeltHeight) {
        header.style.top = "-32px";
        navBarWrapper.style.position = "fixed";
        navBarWrapper.style.width = "100%";
      } else {
        header.style.top = -scrollPosition + "px";
        setIsScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navBelt = document.querySelector(".nav-belt__wrapper");
    const navBar = document.querySelector(".nav-bar__wrapper");
    const navBarHeight = navBar.offsetHeight;
    const swiperHeight = document.querySelector(".top-cont")?.offsetHeight || 0;

    if (scrollY > swiperHeight - navBarHeight) {
      gsap.to(navBar, {
        backgroundColor: "#fff",
        duration: 0.5,
        boxShadow: "0 1px 4px 0 rgba(0,0,0,.07)",
      });
      gsap.to(navBelt, { backgroundColor: "#f6f7f8", duration: 0.5 });

      gsap.to(navBelt.querySelectorAll("button"), {
        color: "#000",
        duration: 0.5,
      });
      gsap.to(navBar.querySelectorAll("button, a"), {
        color: "#000",
        duration: 0.5,
      });
    } else {
      gsap.to(navBar, { backgroundColor: "", duration: 0.5 });
      gsap.to(navBelt, { backgroundColor: "", duration: 0.5 });
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <Box
        id="header"
        className="header"
        as="TnbHeader"
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={isScroll ? "rgba(0,0,0,.1)" : "transparent"}
        backdropFilter={isScroll ? "saturate(180%)} blur=(15px)" : "none"}
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
