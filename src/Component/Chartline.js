import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "./Basic.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

export const options = {
  responsive: true,
};

const labels = ['January', 'February', 'March', 'April', 'May','jun','july','aug','sep','oct'
,'nov','dec'];

export const data = {
  labels,
  datasets: [
    {
      data: [11,13,12,30,50,25,0,28,40,32,11,45],
      lineTension:0.2,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      data:[39,26,31,20,0,15,22,34,11,0,5,3],
      lineTension:0.2,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Chartline() {
   return <>
  <div className='chartbar-container'>
    <div className='add-data-chartbar'>Task
  <div className='chartline'>
 <Line options={options} data={data} />
  </div>
  </div>
  </div>
  </>
}
