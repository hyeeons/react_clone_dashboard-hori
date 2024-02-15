import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

import TotalChart from "../../../components/charts/TotalChart";
import LineChart from "../../../components/charts/LineChart";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../variables/charts";

const TotalSpent = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size={"md"}></Heading>
        </CardHeader>
        <CardBody>
          <StatGroup>
            <Stat>
              <StatLabel>Sent</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>
            <Box>
              <TotalChart />
            </Box>
          </StatGroup>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <StatGroup pt={"38px"}>
            <Stat>
              <StatLabel>Chart</StatLabel>
              <StatNumber>235,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                37.78%
              </StatHelpText>
            </Stat>
            <Box minH="300px" minW="80%" mt="auto">
              <LineChart
                chartData={lineChartDataTotalSpent}
                chartOptions={lineChartOptionsTotalSpent}
              />
            </Box>
          </StatGroup>
        </CardBody>
      </Card>
    </>
  );
};
export default TotalSpent;
