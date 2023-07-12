import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartProps } from './interface';

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChartComponent(props: PieChartProps) {

  const { labels, values, title } = props;

  const objBuilderGraphic = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Pie data={objBuilderGraphic} />
    </div>
  );
}
