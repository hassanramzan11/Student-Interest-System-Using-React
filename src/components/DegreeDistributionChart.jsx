import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DegreeDistributionChart = ({ degrees, degreeDistributionData }) => {
  const pieChartRef = useRef({ chart: null });

  const createPieChart = () => {
    const pieChartCanvas = pieChartRef.current.getContext('2d');

    if (pieChartRef.current.chart) {
      pieChartRef.current.chart.destroy();
    }

    pieChartRef.current.chart = new Chart(pieChartCanvas, {
      type: 'pie',
      options: {
        responsive: true,
      },
      data: {
        labels: degrees,
        datasets: [
          {
            data: degreeDistributionData,
            backgroundColor: [
              'red',
              'blue',
              'green',
              'yellow',
              'purple',
              'orange',
              'pink',
              'brown',
              'cyan',
              'magenta',
            ],
          },
        ],
      },
    });
  };

  useEffect(() => {
    createPieChart();
  }, [degrees, degreeDistributionData]);

  return (
    <div>
      <h2>Degree Distribution Pie Chart</h2>
      <div style={{ width: '100%', height: '400px' }}>
        <canvas ref={pieChartRef}></canvas>
      </div>
    </div>
  );
};

export default DegreeDistributionChart;
