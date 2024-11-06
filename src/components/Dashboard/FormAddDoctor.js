import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { toast } from 'react-toastify';
import { FaUserCircle, FaSignature } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const FormAddDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    DoctorName: '',
    DoctorQualification: '',
    gender: '',
    specialtiyType: '',
    WorkOn: '',
    workingTime: '',
    CheckupTime: '',
    BreakTime: '',
    Experience: '',
    phoneNumber: '',
    age: '',
    DoctorEmail: '',
    country: '',
    state: '',
    city: '',
    ZipCode: '',
    DoctorAddress: '',
    Description: '',
    OnlineConsultationRate: '',
    DoctorCurrentHospital: '',
    HospitalName: '',
    HospitalAddress: '',
    HospitalWebsiteLink: '',
    EmergencyContactNumber: '',
    Password: '',
    DoctorImage: {},
    DoctorSignature: {},
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "photo") {
      setDoctorData((prevData) => ({ ...prevData, DoctorImage: file }));
      setPhotoPreview(URL.createObjectURL(file));
    } else if (name === "signature") {
      setDoctorData((prevData) => ({ ...prevData, DoctorSignature: file }));
      setSignaturePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(doctorData).forEach((key) => {
      formData.append(key, doctorData[key]);
    });

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post("http://localhost:8090/admin/adddoctor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Doctor added successfully!");
      navigate('/doctordashboard');
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Failed to add doctor. Please try again.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow bg-gray-100">
        <Navbar />
        <div className="flex flex-col h-full p-6 overflow-hidden">
          <h2 className="mb-6 text-3xl font-semibold text-center">Add New Doctor</h2>
          <div className="flex-grow overflow-y-auto">
            <form onSubmit={handleSubmit} className="p-8 space-y-6 bg-white rounded-lg shadow-lg">
              <div className="flex justify-around mb-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-24 h-24 mb-2 bg-gray-200 rounded-full">
                    {photoPreview ? (
                      <img src={photoPreview} alt="Profile" className="object-cover w-full h-full rounded-full" />
                    ) : (
                      <FaUserCircle size={50} className="text-gray-400" />
                    )}
                  </div>
                  <label className="text-sm font-medium">
                    Choose Photo
                    <input type="file" name="photo" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-24 h-24 mb-2 bg-gray-200 rounded-full">
                    {signaturePreview ? (
                      <img src={signaturePreview} alt="Signature" className="object-cover w-full h-full rounded-full" />
                    ) : (
                      <FaSignature size={50} className="text-gray-400" />
                    )}
                  </div>
                  <label className="text-sm font-medium">
                    Upload Signature
                    <input type="file" name="signature" accept="image/*" onChange={handleFileChange} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {Object.entries({
                  DoctorName: "Doctor Name",
                  DoctorQualification: "Doctor Qualification",
                  gender: "Gender",
                  specialtiyType: "Specialty Type",
                  WorkOn: "Work On",
                  workingTime: "Working Time (HH:MM)",
                  CheckupTime: "Checkup Time (HH:MM)",
                  BreakTime: "Break Time (HH:MM)",
                  Experience: "Experience",
                  phoneNumber: "Phone Number",
                  age: "Age",
                  DoctorEmail: "Doctor Email",
                  country: "Country",
                  state: "State",
                  city: "City",
                  ZipCode: "Zip Code",
                  DoctorAddress: "Doctor Address",
                  Description: "Description",
                  OnlineConsultationRate: "Online Consultation Rate",
                  DoctorCurrentHospital: "Current Hospital",
                  HospitalName: "Hospital Name",
                  HospitalAddress: "Hospital Address",
                  HospitalWebsiteLink: "Hospital Website Link",
                  EmergencyContactNumber: "Emergency Contact Number",
                  Password: "Password",
                }).map(([key, label]) => (
                  <div key={key}>
                    <label className="block mb-1 text-sm font-medium">{label}</label>
                    {key === "gender" ? (
                      <select
                        name={key}
                        value={doctorData[key]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <input
                        type={key === "Password" ? "password" : key === "age" || key === "ZipCode" ? "number" : "text"}
                        name={key}
                        value={doctorData[key]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder={`Enter ${label}`}
                        required
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button type="submit" className="px-6 py-2 text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
                  Add Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddDoctor;
