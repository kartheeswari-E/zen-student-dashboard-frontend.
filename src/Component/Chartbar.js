import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from 'chart.js';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
import "./Basic.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);
Chart.register(ChartDataLabels);

const options = {
  responsive: true,
  plugins:{
    datalabels:{
      anchor:'end',
      align:'top'
    }
  }
};
var chart = new Chart( {
  plugins: [ChartDataLabels],
})

const data = {
  labels:['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
  datasets: [
    {
      data: [10,20,10,30,10],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};
function Chartbar() {
  return<>
  <div className='chartbar-container'>
    <div className='add-data-chartbar'>Codekatta
  <div className='chartbar'>
<Bar options={options} data={data} />
</div>
</div>
</div>
 </>
}

export default Chartbar