import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdRemoveRedEye } from 'react-icons/md';
import { FaMale, FaFemale } from 'react-icons/fa';
import DoctureSidebar from './DoctureSidebar';
import Dnavbar from './Dnavbar';

const defaultPatients = [
    {
        id: 1,
        patientName: "John Doe",
        diseaseName: "Hypertension",
        patientIssue: "High blood pressure",
        lastAppointmentDate: "2023-10-01",
        lastAppointmentTime: "10:00 AM",
        age: 45,
        gender: "Male",
        patientAvatar: "https://via.placeholder.com/40",
    },
    {
        id: 2,
        patientName: "Jane Smith",
        diseaseName: "Diabetes",
        patientIssue: "Unstable sugar levels",
        lastAppointmentDate: "2023-09-15",
        lastAppointmentTime: "11:30 AM",
        age: 50,
        gender: "Female",
        patientAvatar: "https://via.placeholder.com/40",
    },
];

function DoctorPatientRecord() {
    const [patients] = useState(defaultPatients);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term
    const [selectedFilter, setSelectedFilter] = useState('Year'); // State for selected filter
    const navigate = useNavigate();

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    // Filter patients based on search term
    const filteredPatients = patients.filter(patient =>
        patient.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen">
            <DoctureSidebar />
            <div className="flex flex-col flex-grow">
                <Dnavbar />
                <div className="flex-grow p-4 overflow-auto bg-gray-100">
                    <div className="sticky top-0 z-10">
                        <div className="min-h-screen bg-gray-50">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 bg-white shadow-md">
                                <h1 className="text-xl font-bold text-gray-800">Patient Record Access</h1>
                                <div className="flex items-center space-x-4">
                                    <input
                                        type="text"
                                        placeholder="Search Patient"
                                        className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                                    />

                                    {/* Dropdown for Year, Week, Month */}
                                    <select
                                        value={selectedFilter}
                                        onChange={handleFilterChange}
                                        className="p-2 border border-gray-300 rounded-md focus:outline-none"
                                    >
                                        <option value="Year">Year</option>
                                        <option value="Week">Week</option>
                                        <option value="Month">Month</option>
                                    </select>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="mt-4 overflow-x-auto">
                                <div className="max-w-full mx-auto">
                                    <table className="min-w-full bg-white rounded-lg shadow-lg">
                                        {/* Table Head */}
                                        <thead className="text-sm text-gray-600 uppercase bg-gray-200">
                                            <tr>
                                                <th className="p-4">Patient Name</th>
                                                <th className="p-4">Disease Name</th>
                                                <th className="p-4">Patient Issue</th>
                                                <th className="p-4">Last Appointment Date</th>
                                                <th className="p-4">Last Appointment Time</th>
                                                <th className="p-4">Age</th>
                                                <th className="p-4">Gender</th>
                                                <th className="p-4 text-center">Action</th>
                                            </tr>
                                        </thead>

                                        {/* Table Body */}
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredPatients.length === 0 ? (
                                                <tr>
                                                    <td colSpan="8" className="p-6 text-center text-gray-500">
                                                        <img
                                                            src="https://via.placeholder.com/100"
                                                            alt="No Data"
                                                            className="mx-auto mb-4"
                                                        />
                                                        No data found. Please add a new patient.
                                                    </td>
                                                </tr>
                                            ) : (
                                                filteredPatients.map((patient) => (
                                                    <tr
                                                        key={patient.id}
                                                        className="transition duration-200 hover:bg-gray-50"
                                                    >
                                                        <td className="flex items-center p-4 font-medium text-gray-700">
                                                            <img src={patient.patientAvatar} alt="Avatar" className="w-10 h-10 mr-2 rounded-full" />
                                                            {patient.patientName}
                                                        </td>
                                                        <td className="p-4">{patient.diseaseName}</td>
                                                        <td className="p-4">{patient.patientIssue}</td>
                                                        <td className="p-4">{patient.lastAppointmentDate}</td>
                                                        <td className="p-4">{patient.lastAppointmentTime}</td>
                                                        <td className="p-4">{patient.age}</td>
                                                        <td className="flex items-center p-4">
                                                            {patient.gender === "Male" ? (
                                                                <FaMale className="mr-2 text-blue-500" />
                                                            ) : (
                                                                <FaFemale className="mr-2 text-pink-500" />
                                                            )}
                                                            {patient.gender}
                                                        </td>
                                                        <td className="p-4 text-center">
                                                            <button
                                                                className="text-blue-500 hover:text-blue-600"
                                                                onClick={() => navigate("/invoicecomponent")}
                                                            >
                                                                <MdRemoveRedEye className="w-5 h-5" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoctorPatientRecord;
