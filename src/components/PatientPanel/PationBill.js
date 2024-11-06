import React, { useState } from "react";
import { FaEye, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";
import PatientSidebar from "./PatientSidebar";

// Sample appointment data
const appointments = [
    {
        id: 1,
        patientName: "John Doe",
        patientIssue: "Fever",
        doctorName: "Dr. Marcus Philips",
        hospitalName: "General Hospital",
        billCreatedDate: new Date(),
        billCreatedTime: "10:00 AM",
        totalBillAmount: "₹ 500",
        appointmentType: "Onsite",
        billStatus: "unpaid",
        patientImage: "/path/to/image1.jpg",
    },
    {
        id: 2,
        patientName: "Jane Smith",
        patientIssue: "Toothache",
        doctorName: "Dr. Hayle Schleifer",
        hospitalName: "Dental Clinic",
        billCreatedDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        billCreatedTime: "2:30 PM",
        totalBillAmount: "₹ 300",
        appointmentType: "Online",
        billStatus: "paid",
        patientImage: "/path/to/image2.jpg",
    },
];

const PationBill = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("unpaid");
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false); // Track payment modal visibility
    const [selectedPaymentType, setSelectedPaymentType] = useState("online"); // Default payment type
    const navigate = useNavigate();

    const filteredAppointments = appointments.filter((appointment) => {
        const isNameMatch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase());
        return isNameMatch && appointment.billStatus === activeTab;
    });

    const handleViewImage = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    const handlePayNowClick = () => {
        setShowPaymentModal(true); // Show payment selection modal
    };

    const handlePaymentCancel = () => {
        setShowPaymentModal(false); // Hide payment selection modal
    };

    const handlePaymentConfirm = () => {
        setShowPaymentModal(false); // Process payment (additional logic can be added here)
        alert(`Payment selected: ${selectedPaymentType === "online" ? "Online" : "Cash"}`);
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
                        {["unpaid", "paid"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-6 py-2 text-lg font-semibold transition duration-300 rounded-md ${
                                    activeTab === tab ? "text-gray-400" : "bg-white hover:bg-blue-100"
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)} Bills
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Bills
                        </h1>
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
                                            onClick={() => handleViewImage(appointment.patientImage)}
                                        >
                                            <FaEye />
                                        </button>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between">
                                            <p className="font-medium">Hospital Name:</p>
                                            <p>{appointment.hospitalName}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium">Bill Created Date:</p>
                                            <p>{appointment.billCreatedDate.toDateString()}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium">Bill Created Time:</p>
                                            <p>{appointment.billCreatedTime}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-medium">Total Bill Amount:</p>
                                            <p className="text-red-600">{appointment.totalBillAmount}</p>
                                        </div>
                                        {activeTab === "unpaid" && (
                                            <div className="flex justify-center mt-2 space-x-4">
                                                <button
                                                    className="flex items-center py-2 text-white bg-blue-600 rounded-lg px-14 hover:bg-blue-700"
                                                    onClick={handlePayNowClick}
                                                >
                                                    Pay Now
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {showModal && selectedImage && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-70">
                            <div className="relative p-0 bg-white rounded-lg shadow-lg">
                                <button
                                    className="absolute text-red-600 top-2 right-2 hover:text-red-800"
                                    onClick={handleCloseModal}
                                >
                                    &times;
                                </button>
                                <img src="../them3.png" alt="Prescription" className="max-w-full max-h-[80vh] rounded-lg" />
                            </div>
                        </div>
                    )}

                    {showPaymentModal && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-70">
                            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                                <h2 className="mb-4 text-xl font-bold text-center">Select Payment Type</h2>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="radio"
                                        id="online"
                                        name="paymentType"
                                        value="online"
                                        checked={selectedPaymentType === "online"}
                                        onChange={() => setSelectedPaymentType("online")}
                                        className="mr-2"
                                    />
                                    <label htmlFor="online" className="flex items-center">
                                        <FaCreditCard className="mr-2" /> Online
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="radio"
                                        id="cash"
                                        name="paymentType"
                                        value="cash"
                                        checked={selectedPaymentType === "cash"}
                                        onChange={() => setSelectedPaymentType("cash")}
                                        className="mr-2"
                                    />
                                    <label htmlFor="cash" className="flex items-center">
                                        <FaMoneyBillWave className="mr-2" /> Cash
                                    </label>
                                </div>
                                <div className="flex justify-end mt-6 space-x-4">
                                    <button
                                        onClick={handlePaymentCancel}
                                        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handlePaymentConfirm}
                                        className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PationBill;
