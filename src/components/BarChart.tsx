import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  posts: {
    name: string;
  }[];
};

export default function BarChart({ posts }: Props) {
  const chartData = {
    labels: posts.map((uni) => uni.name),

    datasets: [
      {
        label: "University Name Length",

        data: posts.map((uni) => uni.name.length),

        backgroundColor: "rgba(59,130,246,0.8)",

        borderColor: "rgba(37,99,235,1)",

        borderWidth: 1,

        borderRadius: 8,

        maxBarThickness: 45,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "University Analysis",
        font: {
          size: 18,
          weight: "bold" as const,
        },
      },

      tooltip: {
        enabled: true,
      },
    },

    scales: {
      x: {
        ticks: {
          display: false,
        },

        grid: {
          display: false,
        },

        title: {
          display: true,
          text: "Universities",
          font: {
            size: 14,
          },
        },
      },

      y: {
        beginAtZero: true,

        title: {
          display: true,
          text: "Name Length",
          font: {
            size: 14,
          },
        },

        grid: {
          color: "rgba(0,0,0,0.08)",
        },
      },
    },
  };

  return (
    <div
      className="chart-card"
      style={{
        height: "400px",
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
}