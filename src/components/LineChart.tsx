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
    current_price: number;
  }[];
};

export default function LineChart({ posts }: Props) {
  const chartData = {
    labels: posts.map((coin) => coin.name),

    datasets: [
      {
        label: "Current Price (USD)",

        data: posts.map((coin) => coin.current_price),

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
      legend: { display: true },

      title: {
        display: true,
        text: "Crypto Price Trend",
        font: { size: 18, weight: "bold" as const },
      },
    },

    scales: {
      x: {
        ticks: { display: false },
        grid: { display: false },
        title: { display: true, text: "Coins" },
      },

      y: {
        beginAtZero: true,
        title: { display: true, text: "Price (USD)" },
      },
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Line data={chartData} options={options} />
    </div>
  );
}