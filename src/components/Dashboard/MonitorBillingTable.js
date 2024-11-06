import React, { useState } from "react";
import { FaEye, FaEdit, FaFileInvoice, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const billingData = [
    {
        id: 1,
        billNumber: "B123",
        patientName: "John Doe",
        diseaseName: "Flu",
        phoneNumber: "123-456-7890",
        status: "Paid",
        date: "2024-10-01",
        time: "10:00 AM",
    },
    {
        id: 2,
        billNumber: "B124",
        patientName: "Jane Smith",
        diseaseName: "Headache",
        phoneNumber: "098-765-4321",
        status: "Unpaid",
        date: "2024-10-02",
        time: "11:00 AM",
    },
];

const MonitorBillingTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const filteredBillingData = billingData.filter((bill) =>
        bill.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            {/* Table Header */}
            <div className="flex flex-col items-center justify-between mb-6 md:flex-row">
                <h1 className="text-3xl font-bold text-gray-800">Monitor Billing</h1>
                <div className="flex mt-4 space-x-4 md:mt-0">
                    <input
                        type="text"
                        placeholder="Search patients..."
                        className="px-4 py-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
                        onClick={() => navigate("/")}
                    >
                        <FaEdit className="mr-2" />
                        Edit Invoice Design
                    </button>
                    <button
                        className="flex items-center px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700"
                        onClick={() => navigate("/changeinvoiceform")}
                    >
                        <FaPlusCircle className="mr-2" />
                        Create Bill
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-lg">
                    {/* Table Head */}
                    <thead className="text-sm text-gray-600 uppercase bg-gray-200">
                        <tr>
                            <th className="p-3">Bill Number</th>
                            <th className="p-3">Patient Name</th>
                            <th className="p-3">Disease Name</th>
                            <th className="p-3">Phone Number</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Time</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-sm text-gray-700">
                        {filteredBillingData.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="p-6 text-center">
                                    <img
                                        src="https://via.placeholder.com/100"
                                        alt="No data"
                                        className="mx-auto mb-4"
                                    />
                                    <span className="text-gray-500">No data found. Please add a new bill.</span>
                                </td>
                            </tr>
                        ) : (
                            filteredBillingData.map((bill) => (
                                <tr key={bill.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        <span className="px-3 py-1 text-blue-600 bg-gray-100 rounded-full">
                                            {bill.billNumber}
                                        </span>
                                    </td>
                                    <td className="p-3">{bill.patientName}</td>
                                    <td className="p-3">{bill.diseaseName}</td>
                                    <td className="p-3">{bill.phoneNumber}</td>
                                    <td className="p-3">
                                        <span
                                            className={`py-1 px-3 rounded-full ${bill.status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {bill.status}
                                        </span>
                                    </td>
                                    <td className="p-3">{bill.date}</td>
                                    <td className="p-3">{bill.time}</td>
                                    <td className="p-3 text-center">
                                        <button className="text-blue-500 hover:text-blue-600">
                                            <FaEye className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MonitorBillingTable;
