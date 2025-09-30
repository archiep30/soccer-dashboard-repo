import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GoalsChart({ players, goals }) {
  const data = {
    labels: players,
    datasets: [
      {
        label: "Goals",
        data: goals,
        backgroundColor: [
          "rgba(235, 181, 8, 1)",
          "rgba(145, 145, 145, 1)",
          "rgba(88, 42, 8, 1)",
          "rgba(45, 13, 170, 1)",
          "rgba(170, 12, 85, 1)",
          "rgba(13, 170, 43, 1)"
        ],
        borderColor: [
          "rgba(185, 150, 8, 1)",
          "rgba(120, 120, 120, 1)",
          "rgba(58, 42, 8, 1)",
          "rgba(45, 13, 140, 1)",
          "rgba(140, 12, 85, 1)",
          "rgba(13, 140, 43, 1)"
        ],
        borderWidth: 3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { color: "white" }, 
    grid: {
        display: true,
        color: 'rgba(230, 230, 230, 0.2)',
        lineWidth: 1, 
        drawOnChartArea: true,
        drawTicks: true,
      }, },
      x: { ticks: { color: "white" },
    grid: {
        display: false, 
        color: 'rgba(230, 230, 230, 0.2)', 
        lineWidth: 1, 
        drawOnChartArea: true, 
        drawTicks: true,
      }, }
      
    }
  };

  return <Bar className=" h-full" data={data} options={options} />;
}
