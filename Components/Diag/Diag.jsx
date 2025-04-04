import React from 'react';

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';




const centerCirclePlugin = {
  id: 'centerCircle',
  afterDraw(chart) {
    const { ctx, chartArea: { left, right, top, bottom, width, height } } = chart;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;
    const radius = Math.min(width, height) * 0.12; 

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white'; 
    ctx.fill();
    ctx.restore();
  },
};

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  centerCirclePlugin,
  
);


export const data = {
    labels: ['PostgreSQL', ' Oracle', 'MariaDB', 'MySQL', 'Redis'],
    datasets: [
      {
        label: 'asda',
        data: [45, 48, 45, 34, 30],
        backgroundColor: [
          'rgba(153, 6, 38, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 255, 255, 0.8)', 
          'rgba(255, 255, 255, 0.8)', 
          'rgba(255, 255, 255, 0.8)', 
          'rgba(255, 255, 255, 0.8)', 
          'rgba(255, 255, 255, 0.8)', 
        ],
        hoverBorderColor: [
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
          'rgb(0, 0, 0)',
        ],
        borderWidth: 0.2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      r: {
        display: false, 
        grid: {
          display: false, 
        },
        angleLines: {
          display: false, 
        },
        ticks: {
          display: false, 
        },
      },
    },
    animation: {
      duration: 0 
    },
    
    interaction: {
      mode: 'nearest',
      intersect: true,
    },
    
    elements: {
      arc: {
        borderWidth: 2,       
        spacing: 5,         
        borderRadius: 10,      
      }
    }
  };
  

export default function Footer() {

    return (

        <div className='container'>
            <div className='containerForDiag'>
            <PolarArea data={data} options={options}/>;
            </div>
            

        </div>
    );
}