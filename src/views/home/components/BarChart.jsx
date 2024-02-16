import {
  Box,
  Card,
  CardBody,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../variables/charts";
import ColumnChart from "../../../components/charts/ColumnChart";

const BarChart = () => {
  return (
    <Card>
      <CardBody>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Box>
          <ColumnChart
            chartData={barChartDataDailyTraffic}
            chartOptions={barChartOptionsDailyTraffic}
          />
        </Box>
      </CardBody>
    </Card>
  );
};

export default BarChart;
