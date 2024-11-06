import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

// Sample data for bills with doctor avatars
const bills = [
    {
        id: 1,
        billNo: "BILL-001",
        doctorName: "Dr. Marcus Philips",
        doctorAvatar: "https://via.placeholder.com/40", // Placeholder for doctor's avatar
        patientName: "John Doe",
        diseaseName: "Hypertension",
        insuranceCompany: "HealthPlus",
        insurancePlan: "Premium Plan",
        billDate: "2024-10-10",
    },
    {
        id: 2,
        billNo: "BILL-002",
        doctorName: "Dr. Hayle Schleifer",
        doctorAvatar: "https://via.placeholder.com/40", // Placeholder for doctor's avatar
        patientName: "Jane Smith",
        diseaseName: "Diabetes",
        insuranceCompany: "Medicare",
        insurancePlan: "Basic Plan",
        billDate: "2024-10-09",
    },
];

const InsuranceClaimsTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Filter bills based on the search term
    const filteredBills = bills.filter((bill) =>
        bill.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar />
                <div className="p-6">
                    {/* Table Header */}
                    <div className="flex items-center justify-between p-4 mb-6 bg-white rounded-lg shadow">
                        <h1 className="text-2xl font-bold text-gray-800">Insurance Claims</h1>
                        <div className="flex items-center px-4 py-2 rounded-full shadow-md bg-gray-50">
                            <FaEye className="mr-2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by Doctor Name..."
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
                                    <th className="p-4">Bill No</th>
                                    <th className="p-4">Doctor Name</th>
                                    <th className="p-4">Patient Name</th>
                                    <th className="p-4">Disease Name</th>
                                    <th className="p-4">Insurance Company</th>
                                    <th className="p-4">Insurance Plan</th>
                                    <th className="p-4">Bill Date</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="bg-white divide-y divide-gray-100">
                                {filteredBills.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" className="p-6 text-center text-gray-500">
                                            <img
                                                src="https://via.placeholder.com/100"
                                                alt="No Data"
                                                className="mx-auto mb-4"
                                            />
                                            No data found. Please add a new bill.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredBills.map((bill) => (
                                        <tr
                                            key={bill.id}
                                            className="transition duration-200 hover:bg-gray-50"
                                        >
                                            <td className="p-4 font-medium text-gray-700">
                                                {bill.billNo}
                                            </td>
                                            <td className="flex items-center p-4 space-x-3">
                                                <img
                                                    src={bill.doctorAvatar}
                                                    alt={bill.doctorName}
                                                    className="object-cover w-10 h-10 rounded-full"
                                                />
                                                <span>{bill.doctorName}</span>
                                            </td>
                                            <td className="p-4">{bill.patientName}</td>
                                            <td className="p-4">{bill.diseaseName}</td>
                                            <td className="p-4">{bill.insuranceCompany}</td>
                                            <td className="p-4">{bill.insurancePlan}</td>
                                            <td
                                                className="p-4 text-blue-500 cursor-pointer hover:underline"
                                                onClick={() => navigate("/invoicecomponent")}
                                            >
                                                {bill.billDate}
                                            </td>
                                            <td className="p-4 text-center">
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
            </div>
        </div>
    );
};

export default InsuranceClaimsTable;
