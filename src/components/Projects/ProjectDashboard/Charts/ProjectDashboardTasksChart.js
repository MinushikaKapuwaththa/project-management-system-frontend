import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ProjectDashboardTasksChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['Actual', 'Planed', 'Total Est',

        ],
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default ProjectDashboardTasksChart;
