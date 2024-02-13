import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Title from "./History";
import History from "./History";
import DynamicTitle from "./DynamicTitle";
import Search from "../comm/Search";

const Layout = (props) => {
  return (
    <>
      <Box display={"flex"} minH={"100vh"} bg={"bgmain"}>
        <Header />
        <Box
          as="main"
          id="main"
          flexGrow={1}
          pl={{ sm: 0, xl: 292 }}
          pt={30}
          transition={"all 0.3s"}
        >
          <History />
          <DynamicTitle />
          <Search />
          <Outlet />
        </Box>
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
