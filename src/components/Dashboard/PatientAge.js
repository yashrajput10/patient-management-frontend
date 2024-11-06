import React from 'react';
import { GoDotFill } from "react-icons/go";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Static data for the chart
const data = [
    { name: '0-2 Years', value: 40, color: '#B9459F' },
    { name: '3-12 Years', value: 50, color: '#3D429F' },
    { name: '13-19 Years', value: 120, color: '#4683A5' },
    { name: '20-39 Years', value: 70, color: '#E3B340' },
    { name: '40-59 Years', value: 80, color: '#389486' },
    { name: '60 And Above', value: 150, color: '#CA7C67' },
];

// Calculate total value
const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

export default function PatientAge() {
    return (
        <div className='bg-white p-2 rounded-lg' style={{ height: "343px" }}>
            <h3 className='text-xl font-bold p-2 d-flex'>Patients Age</h3>
            <div className="flex justify-center items-center rounded-lg bg-[#F6F8FB]">
                <div className="w-48 h-64">
                    <ResponsiveContainer>
                        <PieChart>
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
                                cornerRadius={10}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke={index === 1 ? '#FFFF' : 'none'}
                                        strokeWidth={index === 1 ? 3 : 0}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="items-start bg-white p-2 rounded-lg">
                    {data.map((entry, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                            <span className="text-gray-500 text-md text-dark fw-semibold flex pe-3">
                                <GoDotFill style={{ color: entry.color }} className="mt-1 me-1 fs-6"  />
                                {entry.name}
                            </span>
                            <span
                                className="font-bold"
                                style={{ color: entry.color }}
                            >
                                {((entry.value / totalValue) * 100).toFixed(1)}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
