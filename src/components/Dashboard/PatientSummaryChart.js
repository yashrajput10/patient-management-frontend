import React from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required chart.js components
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const PatientSummaryChart = () => {
  const patientSummaryData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'New Patient',
        data: [15, 20, 40, 80, 90, 75, 65],
        borderColor: '#F7BC91',
        backgroundColor: '#F7BC91',
        fill: true,
      },
      {
        label: 'Old Patient',
        data: [80, 10, 90, 40, 20, 85, 45],
        borderColor: 'rgba(156, 171, 255, 1)',
        backgroundColor: '#9CABFF',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Patient Summary</h3>
      <div style={{ height: '300px' }}>
        <Line data={patientSummaryData} options={options} />
      </div>
    </div>
  );
};

export default PatientSummaryChart;
