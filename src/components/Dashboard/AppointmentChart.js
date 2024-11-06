import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AppointmentChart = () => {
  const appointmentData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Other Appointment',
        data: [40, 50, 60, 45, 55, 50],
        backgroundColor: '#1E97E6',
        borderColor: '#1E97E6',
        borderWidth: 1,
        borderRadius: {
          topLeft: 10, 
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0
      },
      barThickness: 20,
      },
      {
        label: 'Online Consultation',
        data: [20, 30, 40, 35, 45, 40],
        backgroundColor: '#3FD9FF',
        borderColor: '#3FD9FF',
        borderWidth: 1,
        borderRadius: {
          topLeft: 10, 
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0
      },
      barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-4">Appointment</h3>
      <div className="flex justify-end mb-2">
            <button className="bg-blue-500 text-white px-4 py-1 rounded mr-2">Year</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded">Month</button>
          </div>
      <div style={{ height: '300px' }}>
        <Bar data={appointmentData} options={options} />
      </div>
    </div>
  );
};

export default AppointmentChart;
