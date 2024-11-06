import React, { useState } from "react";
import { FaSearch, FaPhone, FaEye, FaImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";
import { LuCalendarX2 } from "react-icons/lu";
import PatientSidebar from "./PatientSidebar";
import { FaCalendarDays } from "react-icons/fa6";
import { IoCloseCircleOutline, IoDownload } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

const appointments = [
    {
        id: 1,
        patientName: "John Doe",
        patientIssue: "Fever",
        doctorName: "Dr. Marcus Philips",
        diseaseName: "Pneumonia",
        appointmentTime: "10:00 AM",
        appointmentType: "Onsite",
        date: new Date(),
        hospitalName: "City Hospital",
        patientDetails: {
            age: 32,
            gender: "Male",
            phone: "123-456-7890",
            address: "123 Elm Street",
        },
        file: {
            name: "prescription1.pdf",
            size: "200 KB",
            imgSrc: "link-to-image-1.jpg"
        }
    },
    {
        id: 2,
        patientName: "Jane Smith",
        patientIssue: "Toothache",
        doctorName: "Dr. Hayle Schleifer",
        diseaseName: "Cavity",
        appointmentTime: "2:30 PM",
        appointmentType: "Online",
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        hospitalName: "Dental Clinic",
        patientDetails: {
            age: 28,
            gender: "Female",
            phone: "987-654-3210",
            address: "456 Maple Street",
        },
        file: {
            name: "prescription2.pdf",
            size: "150 KB",
            imgSrc: "link-to-image-2.jpg"
        }
    },
    {
        id: 3,
        patientName: "Alice Johnson",
        patientIssue: "Back Pain",
        doctorName: "Dr. Emily Davis",
        diseaseName: "Herniated Disc",
        appointmentTime: "11:00 AM",
        appointmentType: "Online",
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        hospitalName: "Wellness Center",
        patientDetails: {
            age: 45,
            gender: "Female",
            phone: "555-555-5555",
            address: "789 Oak Street",
        },
        canceled: true,
        file: {
            name: "prescription3.pdf",
            size: "300 KB",
            imgSrc: "link-to-image-3.jpg"
        }
    },
];

const PrescriptionAccess = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (imgSrc) => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
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
                            {/* Search input can be added here if needed */}
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">Prescription Access</h1>
                            <button
                                className="flex items-center px-4 py-2 ml-4 text-black transition duration-300 border rounded-lg hover:bg-gray-200 focus:outline-none"
                                onClick={() => navigate("/")}>
                                <FaCalendarDays className="mr-2" />
                                2 Jan, 2022 - 13 Jan, 2022
                                <IoCloseCircleOutline className="text-red-700 ms-2" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {appointments.length > 0 ? (
                                appointments.map((appointment) => (
                                    <div key={appointment.id} className="p-0 bg-white rounded-lg shadow-md">
                                        <div className="flex items-center justify-between p-2 mb-3 bg-gray-200 rounded-t-lg">
                                            <h2 className="text-lg font-bold">{appointment.doctorName}</h2>
                                            <div className="flex gap-2">
                                                <IoDownload className="inline mr-2" />
                                                <FaEye onClick={() => openModal(appointment.file.imgSrc)} className="cursor-pointer" />
                                            </div>
                                        </div>
                                        <p className="flex justify-between mx-4">
                                            <strong>Hospital Name:</strong> {appointment.hospitalName}
                                        </p>
                                        <p className="flex justify-between mx-4">
                                            <strong>Disease Name:</strong> {appointment.diseaseName}
                                        </p>
                                        <p className="flex justify-between mx-4">
                                            <strong>Date:</strong> {appointment.date.toDateString()}
                                        </p>
                                        <p className="flex justify-between mx-4">
                                            <strong>Time:</strong> {appointment.appointmentTime}
                                        </p>
                                        <div className="flex items-center justify-between p-2 mx-4 mb-4 border rounded-lg">
                                            <FaImage className="w-8 h-8 p-1 text-gray-600 border rounded-lg" />
                                            <div className="flex-1 ml-4">
                                                <div className="text-gray-800">{appointment.file.name}</div>
                                                <div className="text-gray-500">{appointment.file.size}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 col-span-full">
                                    No scheduled appointments found.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Image Popup */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative rounded-lg">
                        <button onClick={closeModal} className="absolute text-gray-600 top-2 right-2">
                            <IoCloseCircleOutline className="w-6 h-6" />
                        </button>
                        <img src="../them1.png" alt="Prescription" className="max-w-full max-h-[80vh] rounded-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrescriptionAccess;
