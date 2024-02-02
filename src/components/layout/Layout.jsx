import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import ContainerSt from "./Container";
import MainSlide from "../../views/home/components/MainSlide";

const Layout = (props) => {
  return (
    <>
      <Box display={"flex"} flexDir={"column"} minH={"100svh"}>
        <Header />
        <MainSlide />
        <Box as="main" id="main" flexGrow={1}>
          <ContainerSt>
            <h2>{props.title}</h2>
            {props.children}
          </ContainerSt>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
