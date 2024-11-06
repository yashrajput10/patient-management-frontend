import React, { useState } from "react";
import { FaSearch, FaPhone, FaCalendarAlt, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";
import { LuCalendarX2 } from "react-icons/lu";
import PatientSidebar from "./PatientSidebar";
import { FaCalendarDays } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

const appointments = [
    {
        id: 1,
        patientName: "John Doe",
        patientIssue: "Fever",
        doctorName: "Dr. Marcus Philips",
        diseaseName: "Influenza",
        appointmentTime: "10:00 AM",
        appointmentType: "Onsite",
        date: new Date(),
        patientDetails: {
            age: 32,
            gender: "Male",
            phone: "123-456-7890",
            address: "123 Elm Street",
        },
    },
    {
        id: 2,
        patientName: "Jane Smith",
        patientIssue: "Toothache",
        doctorName: "Dr. Hayle Schleifer",
        diseaseName: "Dental Infection",
        appointmentTime: "2:30 PM",
        appointmentType: "Online",
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        patientDetails: {
            age: 28,
            gender: "Female",
            phone: "987-654-3210",
            address: "456 Maple Street",
        },
    },
    {
        id: 3,
        patientName: "Alice Johnson",
        patientIssue: "Back Pain",
        doctorName: "Dr. Emily Davis",
        diseaseName: "Muscle Strain",
        appointmentTime: "11:00 AM",
        appointmentType: "Online",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        patientDetails: {
            age: 45,
            gender: "Female",
            phone: "555-555-5555",
            address: "789 Oak Street",
        },
        canceled: true,
    },
];

const PationTeleconsultations = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("scheduled");
    const [showModal, setShowModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const navigate = useNavigate();

    const filteredAppointments = appointments.filter((appointment) => {
        const isNameMatch = appointment.patientName
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        if (activeTab === "scheduled") {
            return (
                isNameMatch && appointment.date.toDateString() === new Date().toDateString()
            );
        } else if (activeTab === "pending") {
            return isNameMatch && appointment.date > new Date() && !appointment.canceled;
        } else if (activeTab === "previous") {
            return isNameMatch && appointment.date < new Date() && !appointment.canceled;
        } else if (activeTab === "cancel") {
            return isNameMatch && appointment.canceled;
        }
        return false;
    });

    const handleViewDetails = (appointment) => {
        setSelectedAppointment(appointment);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedAppointment(null);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <PatientSidebar />
            <div className="flex-grow overflow-auto bg-gray-100">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="flex flex-col h-full">
                    <div className="min-h-screen p-6 bg-gray-100">
                        <div className="flex mb-4 border-b border-gray-300">
                            {["scheduled", "previous", "cancel", "pending"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-6 py-2 text-lg font-semibold transition duration-300 rounded-md ${activeTab === tab
                                        ? "text-gray-400"
                                        : "bg-white hover:bg-blue-100"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')} Appointments
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">
                                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace(/([A-Z])/g, ' ')} Appointments
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
                            <button
                                className="flex items-center px-4 py-2 ml-4 text-black transition duration-300 border rounded-lg hover:bg-gray-200 focus:outline-none"
                                onClick={() => navigate("/")}>
                                <FaCalendarDays className="mr-2" />
                                2 Jan, 2022 - 13 Jan, 2022
                                <IoCloseCircleOutline className="text-red-700 ms-2" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments.map((appointment) => (
                                    <div key={appointment.id} className="p-0 bg-white rounded-lg shadow-md">
                                        <div className="flex items-center justify-between p-2 mb-3 bg-gray-200 rounded-t-lg">
                                            <h2 className="text-lg font-bold">{appointment.doctorName}</h2>
                                            <button
                                                className="text-gray-600 hover:text-blue-600"
                                                onClick={() => handleViewDetails(appointment)}
                                            >
                                                <div className="flex gap-2">
                                                    <LuCalendarX2 className="inline mr-2" />
                                                    <FaEye />
                                                </div>
                                            </button>
                                        </div>
                                        <p className="flex justify-between mx-4">
                                            <strong>Patient Issue:</strong> {appointment.patientIssue}
                                        </p>
                                        <p className="flex justify-between mx-4">
                                            <strong>Disease Name:</strong> {appointment.diseaseName}
                                        </p>
                                        <p className="flex justify-between mx-4">
                                            <strong>Appointment Time:</strong>{" "}
                                            {appointment.appointmentTime}
                                        </p>
                                        <p className="flex justify-between mx-4">
                                            <strong>Appointment Type:</strong>{" "}
                                            {appointment.appointmentType}
                                        </p>
                                        <div className="flex justify-between w-full mt-4 mb-4">
                                            <button
                                                className="px-4 py-2 mx-4 text-black border border-black rounded-lg"
                                                onClick={() => navigate("")}
                                            >
                                                <LuCalendarX2 className="inline mr-2" />
                                                Cancel
                                            </button>
                                            <button
                                                className="px-4 py-2 mx-4 text-white bg-green-600 rounded-md hover:bg-green-700"
                                                onClick={() => navigate("")}
                                            >
                                                <FaPhone className="inline mr-2" />
                                                Join Call
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 col-span-full">
                                    No {activeTab} appointments found.
                                </p>
                            )}
                        </div>

                        {showModal && selectedAppointment && (
                            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                                    <button
                                        className="absolute text-2xl text-gray-600 top-4 right-4 hover:text-red-600"
                                        onClick={closeModal}
                                    >
                                        <IoCloseCircleOutline />
                                    </button>
                                    <h2 className="mb-4 text-2xl font-semibold">Appointment Details</h2>
                                    <p><strong>Patient Name:</strong> {selectedAppointment.patientName}</p>
                                    <p><strong>Patient Issue:</strong> {selectedAppointment.patientIssue}</p>
                                    <p><strong>Doctor:</strong> {selectedAppointment.doctorName}</p>
                                    <p><strong>Disease Name:</strong> {selectedAppointment.diseaseName}</p>
                                    <p><strong>Appointment Time:</strong> {selectedAppointment.appointmentTime}</p>
                                    <p><strong>Appointment Type:</strong> {selectedAppointment.appointmentType}</p>
                                    <p><strong>Patient Age:</strong> {selectedAppointment.patientDetails.age}</p>
                                    <p><strong>Patient Gender:</strong> {selectedAppointment.patientDetails.gender}</p>
                                    <p><strong>Patient Phone:</strong> {selectedAppointment.patientDetails.phone}</p>
                                    <p><strong>Patient Address:</strong> {selectedAppointment.patientDetails.address}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PationTeleconsultations;
