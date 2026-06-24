import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type Props = {
  posts: {
    name: string;
  }[];
};

export default function LineChart({ posts }: Props) {
  const chartData = {
    labels: posts.map((uni) => uni.name),

    datasets: [
      {
        label: "University Name Length",

        data: posts.map((uni) => uni.name.length),

        borderColor: "#2563eb",

        backgroundColor: "rgba(37,99,235,0.15)",

        fill: true,

        tension: 0.4,

        pointRadius: 4,

        pointHoverRadius: 7,

        borderWidth: 3,
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
        text: "University Trend",
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
      <Line data={chartData} options={options} />
    </div>
  );
}