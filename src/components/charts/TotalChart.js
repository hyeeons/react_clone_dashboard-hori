import React, { Component } from "react";
import Chart from "react-apexcharts";
import { globalStyles } from "../../theme/styles";

class TotalChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "9월",
            "10월",
            "11월",
            "12월",
            "1월",
            "2월",
            "3월",
            "4월",
          ],
        },
        stroke: {
          curve: "smooth",
          width: 4,
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TotalChart;
