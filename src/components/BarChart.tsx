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
    market_cap: number;
  }[];
};

export default function BarChart({ posts }: Props) {
  const chartData = {
    labels: posts.map((coin) => coin.name),

    datasets: [
      {
        label: "Market Cap (USD)",

        data: posts.map((coin) => coin.market_cap),

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
      legend: { display: true },

      title: {
        display: true,
        text: "Crypto Market Cap Analysis",
        font: { size: 18, weight: "bold" as const },
      },
    },

    scales: {
      x: {
        ticks: { display: false },
        grid: { display: false },
        title: { display: true, text: "Cryptocurrencies" },
      },

      y: {
        beginAtZero: true,
        title: { display: true, text: "Market Cap (USD)" },
      },
    },
  };

  return (
    <div style={{ height: "400px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}