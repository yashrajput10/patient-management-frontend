import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Static data for the chart
const data = [

  { name: 'Old Patients', value: 65, color: '#6CD68C' },  // Green
  { name: 'New Patients', value: 35, color: '#F5A623' },  // Orange
];

// Total patients
const totalPatients = 100;

export default function PatientsBreakdown() {
  return (
    <div className="bg-white flex justify-center items-center" style={{width:"70%", height:"343px"}}>
      {/* Chart Container */}
      <div className="w-64 h-64 bg-gray">
        <ResponsiveContainer>
          <PieChart>
            {/* Pie Component */}
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              startAngle={90}
              endAngle={-270}
              paddingAngle={5}
              cornerRadius={10}  // Rounded edges
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={index === 1 ? '#FFFF' : 'none'}  // Add the black border to old patients
                  strokeWidth={index === 1 ? 3 : 0}  // Increase border width
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend and Patient Info */}
      <div className="me-4">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 mr-2 rounded-full bg-orange-500"></div>
            <span className="text-gray-500">New Patients</span>
            <span className="ml-auto text-orange-500 font-bold">35</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 mr-2 rounded-full bg-green-500"></div>
            <span className="text-gray-500">Old Patients</span>
            <span className="ml-auto text-green-500 font-bold">65</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-500">Total Patients</span>
            <span className="ml-auto text-blue-500 font-bold">{totalPatients}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
