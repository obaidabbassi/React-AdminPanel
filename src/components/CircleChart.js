import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';
const CircleChart = ({data,title}) => {
    Chart.register(ArcElement, Tooltip, Legend, Title);
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
    Chart.defaults.plugins.legend.position = 'right';
    Chart.defaults.plugins.legend.title.display = true;

    Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';
    
   




  return (
    <>



<Doughnut data={data}  style={{ marginLeft: '80px'}} />


     

     
    </>
  );
};

export default CircleChart;
