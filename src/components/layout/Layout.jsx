import { Box, Stack } from "@chakra-ui/react";
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
          pl={{ base: "12px", xl: 312 }}
          pr={{ base: "12px", xl: "12px" }}
          pt={{ base: 200, md: 140 }}
          transition={"all 0.3s"}
        >
          <Stack
            direction={{ sm: "column", md: "row" }}
            justifyContent={"space-between"}
            spacing={0}
            pos={"fixed"}
            zIndex={1100}
            top={"27px"}
            left={{ sm: "12px", xl: "310px" }}
            right={"12px"}
            py={2}
            px={{ sm: 2, xl: 4 }}
            // bg={"rgba(255, 0, 0, 0.1)"}
            backdropFilter={"blur(10px)"}
            borderRadius={"0.75rem"}
            transition={"all 0.2s"}
          >
            <Box>
              <History />
              <DynamicTitle />
            </Box>
            <Search />
          </Stack>

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
