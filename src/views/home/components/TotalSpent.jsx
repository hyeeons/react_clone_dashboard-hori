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
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Card>
    </>
  );
};
export default TotalSpent;
