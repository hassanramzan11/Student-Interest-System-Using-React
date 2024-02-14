// AgeDistributionChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AgeDistributionChart = ({ ageData }) => {
  const barChartRef = useRef({ chart: null });

  const createBarChart = () => {
    const barChartCanvas = barChartRef.current.getContext("2d");

    if (barChartRef.current.chart) {
      barChartRef.current.chart.destroy();
    }

    barChartRef.current.chart = new Chart(barChartCanvas, {
      type: "bar",
      data: {
        labels: ageData.map((age) => age.label),
        datasets: [
          {
            label: "Number of Students",
            data: ageData.map((age) => age.count),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    createBarChart();
  }, [ageData]);

  return (
    <div style={{ maxWidth: "300px", maxHeight: "200px" }}>
      <h2>Top 5 Interests</h2>
      <canvas ref={barChartRef} />
    </div>
  );
};

export default AgeDistributionChart;
