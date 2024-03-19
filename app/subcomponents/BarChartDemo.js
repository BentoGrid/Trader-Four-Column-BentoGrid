import React from 'react';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChartDemo = () => {
    const generateMonthLabels = (count) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const currentMonth = new Date().getMonth();
        let labels = [];
        for (let i = 0; i < count; i++) {
            labels.unshift(monthNames[(currentMonth - i + 12) % 12]);
        }
        return labels;
    };

    const labels = generateMonthLabels(12);
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40 ],
            backgroundColor: [
                'rgba(75, 192, 192, 0.5)',
                'rgba(54, 162, 235, 0.5)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                '#0061ff',
            ],
            borderWidth: 1,
        }]
    };

    const options = {
        plugins: {
            BarChartDemo: {},
            legend: {
                display: false // Hides the legend
            }
        },
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                display: false // Hides the x-axis labels
            }
        }
    }

    return (
        <div className='h-full'>
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChartDemo;