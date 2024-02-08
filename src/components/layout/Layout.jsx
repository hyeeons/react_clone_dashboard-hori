import { Box } from "@chakra-ui/react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Box as="wrap" display={"flex"} justifyContent={"space-between"}>
        <Box
          as="header"
          //   bg={"lightblue"}
          w={299}
          h={"100vh"}
          padding={"25px 16px 0"}
        >
          <Header />
        </Box>
        <Box
          as="main"
          //   bg={"lightpink"}
          w={`calc(100% - 299px)`}
          padding={30}
        ></Box>
      </Box>
    </>
  );
};

export const LayoutNone = () => {
  return <></>;
};

export default Layout;
