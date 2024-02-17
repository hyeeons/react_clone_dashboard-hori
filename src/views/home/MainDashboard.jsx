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
import TotalSpent from "./components/TotalSpent";
import CheckTable from "./components/CheckTable";
import MyCalendar from "./components/MyCalendar";
import BarChart from "./components/BarChart";
import PieCard from "./components/PieCard";
import ComplexTable from "./components/ComplexTable";

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
          impleGrid
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
        <TotalSpent />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"20px"} w={"100%"}>
        <CheckTable />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"} w={"100%"}>
          <BarChart />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"20px"} w={"100%"}>
        <ComplexTable />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"} w={"100%"}>
          <Box bg={"lightgreen"} h={98}></Box>
          <MyCalendar />
        </SimpleGrid>
      </SimpleGrid>
    </VStack>
  );
};

export default MainDashboard;
