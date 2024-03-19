// components/BitcoinChart.js

import axios from 'axios';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const EthChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [] // Initialize with an empty array
  });

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = months[new Date().getMonth()];

  useEffect(() => {
    const fetchData = async () => {
      try {



        const ethData = {
          // create sample ETH price data for the chart

          "2021-09-01": 1000,
          "2021-09-02": 1700,
          "2021-09-03": 2200,
          "2021-09-04": 3300,
          "2021-09-05": 3400,
          "2021-09-06": 2500,
          "2021-09-07": 3600,
          "2021-09-08": 2700,
          "2021-09-09": 4200,
          "2021-09-10": 2900,
          "2021-09-11": 4000,
          "2021-09-12": 4900,

        }
        const labels = Object.keys(ethData);
        const prices = Object.values(ethData);

        setChartData({
          labels,
          showLine: true,
          datasets: [
            {
              label: null,
              data: prices,
              backgroundColor: "#0061ff",
              borderColor: "#0061ff",
              fill: false,
              tension: 0.3, // Curve tension
            },

          ],

        });
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchData();
  }, []);


  const options = {
    responsive: true,
    title: {
      display: false,
      text: "Sales Charts",
      fontColor: "black",
    },
    legend: {
      labels: {
        display: false,
      },
      align: "end",
      position: "bottom",
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    plugins: {
      legend: {
        display: false // Hides the legend
      }
    },
    scales: {
      x: {
        display: false // This completely hides the x-axis, including grid lines
      },
      y: {
        display: false // This completely hides the x-axis, including grid lines
      },
    },
  }

  return (<div className='w-full pt-0'>
    <Line data={chartData} options={options} />
    </div>
  );
};

export default EthChart;
