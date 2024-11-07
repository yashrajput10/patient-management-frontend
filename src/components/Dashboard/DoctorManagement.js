import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

function DoctorManagement() {
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors from API
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://patient-management-server.onrender.com/api/doctors/data');
        setFilteredDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Delete doctor handler
  const deleteDoctor = async (doctorId) => {
    try {
      await axios.delete(`https://patient-management-server.onrender.com/api/doctors/delete/${doctorId}`);
      // Use a callback to ensure the most up-to-date state
      setFilteredDoctors((prevDoctors) =>
        prevDoctors.filter((doctor) => doctor._id !== doctorId)
      );
      message.success("Doctor deleted successfully.");
    } catch (error) {
      console.error("Error deleting doctor:", error);
      message.error("Error deleting doctor.");
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto bg-gray-100">
        <div className="sticky top-0 z-10">
          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Navbar />
            <div className="flex items-center justify-between p-6 bg-white shadow-md">
              <h1 className="text-xl font-bold text-gray-800">Doctor Management</h1>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search Doctor"
                  className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <Link to="/adddoctor">
                  <Button type="primary" icon={<PlusOutlined />}>
                    Add New Doctor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                {/* Table Head */}
                <thead className="text-sm text-gray-600 uppercase bg-gray-200">
                  <tr>
                    <th className="p-4">Doctor Name</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">Qualification</th>
                    <th className="p-4">Specialty</th>
                    <th className="p-4">Working Time</th>
                    <th className="p-4">Patient Check-Up Time</th>
                    <th className="p-4">Break Time</th>
                    <th className="p-4 text-center">Action</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="bg-white divide-y divide-gray-100">
                  {filteredDoctors.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="p-6 text-center text-gray-500">
                        <img
                          src="https://via.placeholder.com/100"
                          alt="No Data"
                          className="mx-auto mb-4"
                        />
                        No data found. Please add a new doctor.
                      </td>
                    </tr>
                  ) : (
                    filteredDoctors.map((doctor) => (
                      <tr
                        key={doctor._id} // Ensure using _id
                        className="transition duration-200 hover:bg-gray-50"
                      >
                        <td className="flex items-center p-4 space-x-3">
                          <img
                            src={doctor.doctorAvatar || 'https://via.placeholder.com/100'}
                            alt={doctor.doctorName}
                            className="object-cover w-10 h-10 rounded-full"
                          />
                          <span>{doctor.name}</span>
                        </td>
                        <td className="p-4">{doctor.gender}</td>
                        <td className="p-4">{doctor.qualification}</td>
                        <td className="p-4">{doctor.specialtyType}</td>
                        <td className="p-4">{doctor.workingTime}</td>
                        <td className="p-4">{doctor.checkUpTime}</td>
                        <td className="p-4">{doctor.breakTime}</td>
                        <td className="flex justify-around p-4 text-center">
                          <button className="text-blue-500 hover:text-blue-600">
                            <FaEye className="w-5 h-5" />
                          </button>
                          <button className="text-yellow-500 hover:text-yellow-600">
                            <FaEdit className="w-5 h-5" />
                          </button>
                          <button
                            className="text-red-500 hover:text-red-600"
                            onClick={() => deleteDoctor(doctor._id)} // Use _id here for delete
                          >
                            <FaTrash className="w-5 h-5" />
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
  );
}

export default DoctorManagement;
