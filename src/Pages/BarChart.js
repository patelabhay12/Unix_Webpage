import React from 'react';
import { Bar } from 'recharts';
import { Chart as ChartJS } from 'chart.js/a uto'

const BarChart = () => {
    return (
        <>
            <Bar data={chartData}/>
        </>
    )
}

export default BarChart;