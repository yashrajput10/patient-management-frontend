import React, { useState } from "react";
import { FaSearch, FaPhone, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DoctureSidebar from "./DoctureSidebar";
import Navbar from "../Dashboard/Navbar";
import { LuCalendarX2 } from "react-icons/lu";

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

const DoctorTeleconsultation = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("today");
    const navigate = useNavigate();

    const filteredAppointments = appointments.filter((appointment) => {
        const isNameMatch = appointment.patientName
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        if (activeTab === "today") {
            return (
                isNameMatch && appointment.date.toDateString() === new Date().toDateString()
            );
        } else if (activeTab === "upcoming") {
            return isNameMatch && appointment.date > new Date() && !appointment.canceled;
        } else if (activeTab === "previous") {
            return isNameMatch && appointment.date < new Date() && !appointment.canceled;
        } else if (activeTab === "cancel") {
            return isNameMatch && appointment.canceled; 
        }
        return false;
    });

    return (
        <div className="flex h-screen bg-gray-100">
            <DoctureSidebar />
            <div className="flex-grow overflow-auto bg-gray-100">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="flex flex-col h-full">
                    <div className="min-h-screen p-6 bg-gray-100">
                       
                        <div className="flex mb-4 border-b border-gray-300">
                            {["today", "upcoming", "previous", "cancel"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-6 py-2 text-lg font-semibold transition duration-300 rounded-md ${activeTab === tab
                                        ? "text-gray-400"
                                        : "bg-white hover:bg-blue-100"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)} Appointments
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">
                                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Appointments
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

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments.map((appointment) => (
                                    <div
                                        key={appointment.id}
                                        className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md"
                                    >
                                        <h2 className="text-lg font-bold text-gray-800">
                                            {appointment.patientName}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            <strong>Patient Issue:</strong> {appointment.patientIssue}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <strong>Disease Name:</strong> {appointment.diseaseName}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <strong>Appointment Time:</strong>{" "}
                                            {appointment.appointmentTime}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <strong>Appointment Type:</strong>{" "}
                                            {appointment.appointmentType}
                                        </p>
                                        <div className="flex justify-between w-full mt-4">
                                        <button
                                                className="px-4 py-2 text-black border border-black rounded-lg"
                                                onClick={() => navigate("")}
                                            >
                                                <LuCalendarX2 className="inline mr-2" />
                                                Cancel
                                            </button>
                                            <button
                                                className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorTeleconsultation;
