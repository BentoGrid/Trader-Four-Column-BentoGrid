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


const BitcoinChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [] // Initialize with an empty array
  });

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = months[new Date().getMonth()];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json');
        const bitcoinData = response.data?.bpi;
        const labels = Object.keys(bitcoinData);
        const prices = Object.values(bitcoinData);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Bitcoin Price',
              data: prices,
              backgroundColor: "#0061ff",
              borderColor: "#0061ff",
              fill: true,
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
    scales: {
      x: {
        display: false // This completely hides the x-axis, including grid lines
      },
      y: {
        display: true
      },
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-white">Bitcoin Price Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BitcoinChart;
