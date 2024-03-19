// components/BitcoinChart.js

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
import {chart as chartjs} from 'chart.js/auto' 
import {Chart,ArcElement} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

Chart.register(ArcElement)

const DoughnutChart = () => {
  {/* #fde3aa, #eebadf, #aeb5e7, #bbe6e1, #90d1e1 and #f2e6e0.  */ }
  const data = {
    labels: [
      'BTC',
      'ETH',
      'SOL'
    ],
    legend: false,
    datasets: [{
      label: 'My Wallet',
      data: [300, 50, 100],
      backgroundColor: [
        '#0061ff',
        '#1446A0',
        '#A3CEF1'
      ],
      hoverOffset: 36,
      borderWidth: 0,
      // hide the legend
    }]
  };

  const options = {
    maintainAspectRatio: true,
    responsive: false,
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        xPadding: 48,
        yPadding: 24,
        caretPadding: 36
      }
    }
  };
  

  return (
    <Doughnut data={data} options={options}  />
  );
};

export default DoughnutChart;
