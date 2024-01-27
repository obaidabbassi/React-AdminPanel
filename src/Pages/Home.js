import React from "react";
import Header from "./Profile";
import './Home.css';
import CircleChart from '../components/CircleChart';
import BarChart from "../components/BarChart";

import LineChart from "../components/LineChart";
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; 
const Home = ()=> {

 
  const data1 = {
    labels: [
      'verified',
      'pending'
    ],
    datasets: [{
      data: [60,40],
      backgroundColor: [
        'rgb(0, 197, 0)',
        'rgb(204, 223, 243)'
      ],
      borderWidth: 2,
      radius: '100%'   
    }]
  };

 
  const data2 = {
    labels: [
      'Female',
      'Male',
     
    ],
    datasets: [{
      data: [50,50],
      backgroundColor: [
        'rgb(204,0,204)',
        'rgb(255, 51, 51)'
      ],
      borderWidth: 5,
      radius: '100%'   
    }]
  };
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: 'Visits',
        data: [10, 25, 12, 36, 20],
        fill: false,
        borderColor: 'rgb(0, 197, 0)',
        tension: 0.1,
      },
    ],
  };
  const legendTitle = 'Hourly Report';

  return <>

  <div className="container text-center HD" id="home">

<h1>Welcome to Admin panel</h1>

<div className="container wrapper1">

<div className="card c1 text-center">
<h5>Account Verified</h5>
<CircleChart data={data1}/>

</div>
<div className="card c2">
<BarChart />


</div>
<div className="card c3">
<h5>Genderwise Details</h5>
<CircleChart data={data2}/>


</div>
</div>

<div className="container wrapper2">

<div className="card c4 text-center">
<h5>Visitors</h5>
<LineChart data={data} legendTitle={legendTitle} />

</div>

</div>


  </div>



  </>;
};

export default Home;
