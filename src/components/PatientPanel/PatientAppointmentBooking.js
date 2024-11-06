import React, { useState } from "react";
import { FaEye, FaPlus, FaRedo, FaRegTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";
import { FaCalendarDays } from "react-icons/fa6";
import PatientSidebar from "./PatientSidebar";
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
        patientImage: "https://via.placeholder.com/150", // Placeholder image URL
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
        patientImage: "https://via.placeholder.com/150", // Placeholder image URL
    },
];

const PatientAppointmentBooking = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("scheduled");
    const [showModal, setShowModal] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const navigate = useNavigate();

    const filteredAppointments = appointments.filter((appointment) => {
        const isNameMatch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeTab === "scheduled") {
            return isNameMatch && appointment.date.toDateString() === new Date().toDateString();
        } else if (activeTab === "pending") {
            return isNameMatch && appointment.date > new Date();
        } else if (activeTab === "previous") {
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
        <div className="flex h-screen bg-gray-100">
            <PatientSidebar />
            <div className="flex-grow overflow-auto bg-gray-100">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="flex flex-col h-full p-6 bg-gray-100">
                    <div className="flex mb-4 border-b border-gray-300">
                        {["scheduled", "pending", "previous"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 text-lg font-semibold transition duration-300 rounded-md ${activeTab === tab
                                    ? " text-gray-400"
                                    : "bg-white  hover:bg-blue-100"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)} Appointments
                            </button>
                        ))}
                        <button
                            className={`px-6 py-2 text-lg font-semibold transition duration-300 rounded-md ${activeTab === "cancel"
                                ? "text-gray-400"
                                : "bg-white hover:bg-blue-100"
                                }`}
                            onClick={() => setActiveTab("cancel")}
                        >
                            Cancel Appointments
                        </button>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Appointments
                        </h1>
                        <button
                            className="flex items-center px-4 py-2 ml-4 text-black transition duration-300 border rounded-lg hover:bg-gray-200 focus:outline-none"
                            onClick={() => navigate("/")}>
                            <FaCalendarDays className="mr-2" />
                            2 Jan, 2022 - 13 Jan, 2022
                            <IoCloseCircleOutline className="text-red-700 ms-2" />
                        </button>

                        <button
                            className="flex items-center px-4 py-2 ml-4 text-white transition duration-300 bg-blue-700 border rounded-lg hover:bg-blue-800 focus:outline-none"
                            onClick={() => navigate("/")}>
                            <FaPlus className="mr-2" />
                            Book Appointment
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredAppointments.length === 0 ? (
                            <div className="p-4 text-center text-gray-500 col-span-full">
                                No data found. Please add a new appointment.
                            </div>
                        ) : (
                            filteredAppointments.map((appointment) => (
                                <div key={appointment.id} className="p-0 bg-white rounded-lg shadow-md">
                                    <div className="flex items-center justify-between p-2 bg-gray-200 rounded-t-lg">
                                        <h2 className="text-lg font-bold">{appointment.doctorName}</h2>
                                        <button
                                            className="text-gray-600 hover:text-blue-600"
                                            onClick={() => handleViewDetails(appointment)}
                                        >
                                            <FaEye />
                                        </button>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between">
                                            <p className="font-medium">Appointment Type:</p>
                                            <p>{appointment.appointmentType}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium">Hospital Name:</p>
                                            <p>{appointment.diseaseName}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium">Appointment Date:</p>
                                            <p>{appointment.date.toDateString()}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium">Appointment Time:</p>
                                            <p>{appointment.appointmentTime}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium">Patient Issue:</p>
                                            <p>{appointment.patientIssue}</p>
                                        </div>
                                        {(activeTab === "scheduled" || activeTab === "cancel") && (
                                            <div className="flex justify-center mt-2 space-x-4">
                                                <button
                                                    className="flex items-center px-4 py-2 text-black border border-black rounded-lg hover:text-white"
                                                    onClick={() => {/* Logic to cancel appointment */ }}
                                                >
                                                    <FaRegTimesCircle className="mr-2" />
                                                    Cancel
                                                </button>
                                                <button
                                                    className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                                >
                                                    <FaRedo className="mr-2" />
                                                    Reschedule
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {showModal && selectedPatient && (
                        <>
                            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                            <div className="fixed inset-y-0 right-0 z-20 flex items-center w-96">
                                <div className="flex justify-center w-full h-full ">
                                    <img
                                        src="/../them2.png"
                                        alt="Them"
                                        className="rounded-lg shadow-lg"
                                    />
                                    <button onClick={handleCloseModal} className="absolute text-gray-600 top-2 right-2">
                                        <IoCloseCircleOutline className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientAppointmentBooking;
