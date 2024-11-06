import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DoctureSidebar from "./DoctureSidebar";
import Dnavbar from "./Dnavbar";


const appointments = [
    {
        id: 1,
        patientName: "John Doe",
        patientNumber: "123-456-7890",
        appointmentType: "Onsite", // Onsite
        appointmentTime: "10:00 AM",
        date: new Date(),
        age: 32,
        gender: "Male",
    },
    {
        id: 2,
        patientName: "Kane Smith",
        patientNumber: "987-654-3210",
        appointmentType: "Online", // Online
        appointmentTime: "2:30 PM",
        date: new Date(),
        age: 28,
        gender: "Female",
    },
];

const PrescriptionToolsManage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("todayPrescription");
    const [showModal, setShowModal] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const navigate = useNavigate();

    const filteredAppointments = appointments.filter((appointment) => {
        const isNameMatch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeTab === "todayPrescription") {
            return isNameMatch && appointment.date.toDateString() === new Date().toDateString();
        } else if (activeTab === "olderPrescription") {
            return isNameMatch && appointment.date < new Date();
        } else {
            return false;
        }
    });

    const handleViewDetails = (patient) => {
        setSelectedPatient(patient);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPatient(null);
    };

    return (
        <div className="flex h-screen bg-gray-100 ">
            <DoctureSidebar />
            <div className="flex-grow overflow-auto bg-gray-100">
                <div className="sticky top-0 z-10">
                    <Dnavbar />
                </div>
                <div className="flex flex-col h-full">
                    <div className="min-h-screen p-6 bg-gray-100">
                        <div className="flex mb-4 border-b border-gray-300">
                            {["todayPrescription", "olderPrescription"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-6 py-2 text-lg font-semibold transition duration-300 rounded-md ${activeTab === tab
                                        ? " text-gray-400"
                                        : "bg-white  hover:bg-blue-100"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab === "todayPrescription" ? "Today Prescription" : "Older Prescription"}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">
                                {activeTab === "todayPrescription" ? "Today Prescription" : "Older Prescription"}
                            </h1>
                            <div className="relative flex items-center">
                                <FaSearch className="absolute text-gray-400 left-3" />
                                <input
                                    type="text"
                                    placeholder="Search patients..."
                                    className="py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>


                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="text-sm text-gray-600 uppercase bg-gray-200">
                                    <tr>
                                        <th className="p-4 text-left">Patient Name</th>
                                        <th className="p-4 text-left">Patient Number</th>
                                        <th className="p-4 text-left">Appointment Type</th>
                                        <th className="p-4 text-left">Appointment Time</th>
                                        <th className="p-4 text-left">Age</th>
                                        <th className="p-4 text-left">Gender</th>
                                        <th className="p-4 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-gray-700">
                                    {filteredAppointments.length === 0 ? (
                                        <tr>
                                            <td colSpan="7" className="p-4 text-center text-gray-500">
                                                No data found. Please add a new appointment.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredAppointments.map((appointment) => (
                                            <tr key={appointment.id} className="border-b hover:bg-gray-100">
                                                <td className="p-4">{appointment.patientName}</td>
                                                <td className="p-4">{appointment.patientNumber}</td>
                                                <td className="p-4">
                                                    <span className={`px-3 py-1 rounded-full ${appointment.appointmentType === "Online" ? "text-green-600 bg-green-100" : "text-blue-600 bg-blue-100"}`}>
                                                        {appointment.appointmentType}
                                                    </span>
                                                </td>
                                                <td className="p-4">{appointment.appointmentTime}</td>
                                                <td className="p-4">{appointment.age}</td>
                                                <td className="p-4">{appointment.gender}</td>
                                                <td className="flex justify-center p-4">
                                                    <button
                                                        className="text-blue-600 transition duration-300 hover:text-blue-800"
                                                        onClick={() => handleViewDetails(appointment)}
                                                    >
                                                        <FaEye className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {showModal && selectedPatient && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
                                <div className="relative p-8 bg-white rounded-lg shadow-lg w-96">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-bold">Patient Details</h2>
                                        <button
                                            className="text-red-600 hover:text-red-800"
                                            onClick={handleCloseModal}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                    <div className="space-y-2">
                                        <p><strong>Name:</strong> {selectedPatient.patientName}</p>
                                        <p><strong>Patient Number:</strong> {selectedPatient.patientNumber}</p>
                                        <p><strong>Appointment Type:</strong> {selectedPatient.appointmentType}</p>
                                        <p><strong>Time:</strong> {selectedPatient.appointmentTime}</p>
                                        <p><strong>Age:</strong> {selectedPatient.age}</p>
                                        <p><strong>Gender:</strong> {selectedPatient.gender}</p>
                                    </div>
                                    <button
                                        className="px-4 py-2 mt-4 text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-800"
                                        onClick={handleCloseModal}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrescriptionToolsManage;
