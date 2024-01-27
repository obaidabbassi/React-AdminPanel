// LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data, legendTitle }) => {
  const chartOptions = {
    scales: {
      x: {
        
        type: 'linear',
        position: 'bottom', 
   
      },
    },
    plugins: {
      legend: {
        display: true,
        title: {
          display: true,
          text: legendTitle,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <>
    
      <Line data={data} options={chartOptions} style={{ marginLeft: '80px', height:'50vh' }} />
    </>
  );
};

export default LineChart;
