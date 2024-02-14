import {
  Box,
  Card,
  CardBody,
  Flex,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdBarChart } from "react-icons/md";

import { FcDoughnutChart } from "react-icons/fc";
import { FcAreaChart } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";

import MiniSt from "../../components/card/MiniSt";
import IconBox from "../../components/icons/IconBox";

const MainDashboard = (props) => {
  return (
    <VStack spacing={5}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        spacing={"20px"}
        w={"100%"}
      >
        <MiniSt
          name="Earnings"
          value="$350.4"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<MdBarChart />}
            />
          }
        />
        <MiniSt
          name="Spend this month"
          value="$642.39"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcDoughnutChart />}
            />
          }
        />
        <MiniSt name="Sales" value="$574.34" />
        <MiniSt
          name="Your balance"
          value="$1,000"
          endContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcAreaChart />}
            />
          }
        />
        <MiniSt
          name="New Tasks"
          value="154"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcComboChart />}
            />
          }
        />
        <MiniSt
          name="Total Projects"
          value="2935"
          startContent={
            <IconBox
              w={"56px"}
              h={"56px"}
              bg={"bgDefault"}
              icon={<FcFlowChart />}
            />
          }
        />
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
