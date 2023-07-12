import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

import { AreaChartProps } from './interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export function AreaChartComponent(props: AreaChartProps) {

  const { labels, values, title } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 18
          },
        },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 18,
          weight: 'bold'
        }
      },
      tooltip: {
        bodyFont: {
          size: 18
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 18
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 18
          },
        },
      },
    },
  };

  const objBuilderGraphic = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Jogadores",
        data: values,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Line options={options} data={objBuilderGraphic} />
  );
}