import { Box, Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";
import ContainerSt from "./Container";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Box display={"flex"} flexDir={"column"} minH={"100svh"}>
        <Header />
        <Box
          as="main"
          id="main"
          flexGrow={1}
          //   pt={["60px", null, null, null, "92px"]}
        >
          {/* {props.showTitle && <h2>{props.title}</h2>}
          {props.children} */}
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export const LayoutNone = () => {
  return (
    <Box display={"flex"} flexDir={"column"} minH={"100vh"}>
      <Box as="main" id="main" flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
