import { Box } from "@chakra-ui/react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <Box display={"flex"} minH={"100vh"} bg={"bgDefault"}>
        <Header />
        <Box as="main" id="main" flexGrow={1}></Box>
        <Outlet />
      </Box>
    </>
  );
};

export const LayoutNone = () => {
  return <></>;
};

export default Layout;
