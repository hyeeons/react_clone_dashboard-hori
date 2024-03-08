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
import Task from "./components/Task";

const MainDashboard = (props) => {
  return (
    <VStack spacing={5}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        spacing={"20px"}
        w={"100%"}
      >
        <MiniSt />
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
          <Task /> <MyCalendar />
        </SimpleGrid>
      </SimpleGrid>
    </VStack>
  );
};

export default MainDashboard;
