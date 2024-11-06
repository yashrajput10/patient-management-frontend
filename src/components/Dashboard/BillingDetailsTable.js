import React, { useState } from "react";
import {
    FaEdit,
    FaTrashAlt,
    FaEye,
    FaSearch,
    FaDollarSign,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// Sample data for billing details
const bills = [
    {
        id: 1,
        billNumber: "BILL-001",
        patientName: "John Doe",
        diseaseName: "Flu",
        phoneNumber: "123-456-7890",
        status: "Paid",
        date: "2024-10-10",
        time: "10:00 AM",
    },
    {
        id: 2,
        billNumber: "BILL-002",
        patientName: "Jane Smith",
        diseaseName: "Migraine",
        phoneNumber: "098-765-4321",
        status: "Unpaid",
        date: "2024-10-09",
        time: "11:00 AM",
    },
];

const BillingDetailsTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Filter bills based on the search term
    const filteredBills = bills.filter((bill) =>
        bill.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar />
                <div className="p-6">
                    {/* Table Header */}
                    <div className="flex items-center justify-between p-4 mb-6 bg-white rounded-lg shadow">
                        <h1 className="text-2xl font-bold text-gray-800">Billing Management</h1>
                        <div className="flex items-center px-4 py-2 rounded-full shadow-md bg-gray-50">
                            <FaSearch className="mr-2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by Patient Name..."
                                className="bg-transparent outline-none focus:outline-none focus:ring-0"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-lg">
                            {/* Table Head */}
                            <thead className="text-sm text-gray-600 uppercase bg-gray-200">
                                <tr>
                                    <th className="p-4">Bill Number</th>
                                    <th className="p-4">Patient Name</th>
                                    <th className="p-4">Disease Name</th>
                                    <th className="p-4">Phone Number</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Time</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-100">
                                {filteredBills.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" className="p-6 text-center text-gray-500">
                                            <img
                                                src="https://via.placeholder.com/100"
                                                alt="Not Found"
                                                className="mx-auto mb-4"
                                            />
                                            No data found. Please add a new bill.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredBills.map((bill) => (
                                        <tr key={bill.id} className="transition duration-200 hover:bg-gray-50">
                                            <td className="p-4">
                                                <span className="px-3 py-1 text-blue-600 bg-blue-100 rounded-full">
                                                    {bill.billNumber}
                                                </span>
                                            </td>
                                            <td className="p-4">{bill.patientName}</td>
                                            <td className="p-4">{bill.diseaseName}</td>
                                            <td className="p-4">{bill.phoneNumber}</td>
                                            <td className="p-4">
                                                <span
                                                    className={`py-1 px-3 rounded-full ${bill.status === "Paid"
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-red-100 text-red-600"
                                                        }`}
                                                >
                                                    {bill.status}
                                                </span>
                                            </td>
                                            <td className="p-4">{bill.date}</td>
                                            <td className="p-4">{bill.time}</td>
                                            <td className="flex justify-center p-4 space-x-2 text-center">
                                                <button className="text-blue-500 hover:text-blue-600">
                                                    <FaEye className="w-5 h-5" />
                                                </button>
                                                <button
                                                    className="text-green-500 hover:text-green-600"
                                                    onClick={() => navigate("/billingdashboard/editbillsform")}
                                                >
                                                    <FaEdit className="w-5 h-5" />
                                                </button>
                                                <button
                                                    className="text-green-500 hover:text-green-600"
                                                    onClick={() => navigate("/billingdashboard/invoicecomponent")}
                                                >
                                                    <FaDollarSign className="w-5 h-5" />
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
    );
};

export default BillingDetailsTable;
