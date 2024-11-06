import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const appointmentsData = [
    { name: 'Jan', appointments: 30 },
    { name: 'Feb', appointments: 45 },
    { name: 'Mar', appointments: 60 },
    { name: 'Apr', appointments: 40 },
    { name: 'May', appointments: 80 },
    { name: 'Jun', appointments: 50 },
];

const patientsSummaryData = [
    { name: 'Week 1', total: 120, repeat: 30 },
    { name: 'Week 2', total: 150, repeat: 50 },
    { name: 'Week 3', total: 180, repeat: 70 },
    { name: 'Week 4', total: 140, repeat: 40 },
];

export const ReportingDashboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar />

                {/* Main Content Area */}
                <div className="flex-grow p-6 bg-gray-100">

                    {/* Cards Section */}
                    <div className="grid grid-cols-4 gap-6 mb-8">
                        {/* Total Patients Card */}
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Total Patients</h3>
                            <p className="mt-4 text-3xl font-bold">1200</p>
                        </div>

                        {/* Repeat Patients Card */}
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Repeat Patients</h3>
                            <p className="mt-4 text-3xl font-bold">400</p>
                        </div>

                        {/* Admitted Patients Card */}
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Admitted Patients</h3>
                            <p className="mt-4 text-3xl font-bold">150</p>
                        </div>

                        {/* Total Claims Card */}
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Total Claims</h3>
                            <p className="mt-4 text-3xl font-bold">75</p>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-2 gap-6">

                        {/* Appointments Analysis Chart */}
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="mb-4 text-lg font-semibold">Appointments Analysis</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={appointmentsData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="appointments" stroke="#8884d8" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Patients Summary Analysis Chart */}
                        <div className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="mb-4 text-lg font-semibold">Patients Summary Analysis</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={patientsSummaryData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="total" fill="#82ca9d" />
                                    <Bar dataKey="repeat" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
