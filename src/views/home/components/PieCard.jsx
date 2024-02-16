import { Card } from "@chakra-ui/react";
import PieChart from "../../../components/charts/PieChart";
import { pieChartData, pieChartOptions } from "../../../variables/charts";

const PieCard = () => {
  return (
    <Card>
      <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
    </Card>
  );
};

export default PieCard;
