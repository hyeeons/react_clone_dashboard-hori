import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import History from "../../components/layout/History";
import MiniSt from "./components/MiniSt";

const MainDashboard = (props) => {
  return (
    <VStack spacing={5} pt={"80px"}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        spacing={"20px"}
        w={"100%"}
      >
        <MiniSt />
        <MiniSt />
        <MiniSt />
        <MiniSt />
        <MiniSt />
        <MiniSt />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"} w={"100%"}>
        <Box bg={"lightblue"} h={98}>
          토마토
        </Box>
        <Box bg={"lightblue"} h={98}></Box>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"20px"} w={"100%"}>
        <Box bg={"lightpink"} h={98}>
          dd
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"} w={"100%"}>
          <Box bg={"lightpink"} h={98}>
            dd
          </Box>
          <Box bg={"lightpink"} h={98}>
            dd
          </Box>
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"20px"} w={"100%"}>
        <Box bg={"lightgreen"} h={98}></Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"} w={"100%"}>
          <Box bg={"lightgreen"} h={98}></Box>
          <Box bg={"lightgreen"} h={98}></Box>
        </SimpleGrid>
      </SimpleGrid>
    </VStack>
  );
};

export default MainDashboard;
