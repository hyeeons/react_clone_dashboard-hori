import {
  Box,
  Card,
  CardBody,
  Flex,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

import { MdBarChart } from "react-icons/md";

const MiniSt = () => {
  return (
    <Card>
      <CardBody>
        <Flex>
          <Box
            w={"56px"}
            h={"56px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            color={"primary"}
            fontSize={"24px"}
            bg={"bgDefault"}
          >
            <MdBarChart />
          </Box>
          <Stat ml={5}>
            <StatLabel>Earnings</StatLabel>
            <StatNumber>$350.4</StatNumber>
          </Stat>
          <Spacer />
          <Box
            w={"56px"}
            h={"56px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            color={"primary"}
            fontSize={"24px"}
            bg={"bgDefault"}
          >
            <MdBarChart />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MiniSt;
