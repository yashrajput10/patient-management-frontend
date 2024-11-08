import React, { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { Button, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

function DoctorManagement() {
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors from API
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/doctors/data');
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
      const response = await axios.delete(`http://localhost:5000/api/doctors/delete/${doctorId}`);

      if (response.status === 200) {
        setFilteredDoctors((prevDoctors) =>
          prevDoctors.filter((doctor) => doctor._id !== doctorId)
        );
        message.success(response.data.message || "Doctor deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
      message.error("Error deleting doctor. Please try again.");
    }
  };

  // Confirm delete with Modal
  const confirmDelete = (doctorId) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this doctor?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => deleteDoctor(doctorId),
    });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto bg-gray-100">
        <div className="sticky top-0 z-10">
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
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-4">Doctor Name</th>
                  <th className="p-4">Gender</th>
                  <th className="p-4">Qualification</th>
                  <th className="p-4">Specialty</th>
                  <th className="p-4">Working Time</th>
                  <th className="p-4">Check-Up Time</th>
                  <th className="p-4">Break Time</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDoctors.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="p-6 text-center">
                      No data found. Please add a new doctor.
                    </td>
                  </tr>
                ) : (
                  filteredDoctors.map((doctor) => (
                    <tr key={doctor._id} className="hover:bg-gray-50">
                      <td className="flex items-center p-4">
                        <img
                          src={doctor.doctorAvatar || 'https://via.placeholder.com/100'}
                          alt={doctor.doctorName}
                          className="w-10 h-10 rounded-full"
                        />
                        <span>{doctor.name}</span>
                      </td>
                      <td className="p-4">{doctor.gender}</td>
                      <td className="p-4">{doctor.qualification}</td>
                      <td className="p-4">{doctor.specialtyType}</td>
                      <td className="p-4">{doctor.workingTime}</td>
                      <td className="p-4">{doctor.checkUpTime}</td>
                      <td className="p-4">{doctor.breakTime}</td>
                      <td className="p-4 space-x-2 text-center">
                        <button className="text-blue-500 hover:text-blue-600">
                          <FaEye />
                        </button>
                        <button className="text-yellow-500 hover:text-yellow-600">
                          <FaEdit />
                        </button>
                        <button
                          className="text-red-500 hover:text-red-600"
                          onClick={() => confirmDelete(doctor._id)}
                        >
                          <FaTrash />
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
}

export default DoctorManagement;
