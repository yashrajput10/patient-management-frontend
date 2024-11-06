import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { toast } from 'react-toastify';
import { FaUserCircle, FaSignature } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const [doctorData, setDoctorData] = useState({
    name: '',
    qualification: '',
    gender: '',
    experience: '',
    checkUpTime: '',
    workOn: '',
    specialtyType: '',
    workingTime: '',
    breakTime: '',
    age: '',
    phoneNumber: '',
    email: '',
    city: '',
    state: '',
    country: '',
    doctorAddress: '',
    zipCode: '',
    description: '',
    hospital: '',
    currentHospital: '',
    hospitalWebsiteLink: '',
    emergencyPhoneNumber: '',
    hospitalAddress: '',
    onlineConsultationRate: '',
    password: '',
    confirmPassword: '', 
    profileImage: null,
    signatureImage: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (name === "profileImage") {
      setDoctorData((prevData) => ({ ...prevData, profileImage: file }));
      setPhotoPreview(URL.createObjectURL(file));
    } else if (name === "signatureImage") {
      setDoctorData((prevData) => ({ ...prevData, signatureImage: file }));
      setSignaturePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if password matches confirmPassword
    if (doctorData.password !== doctorData.confirmPassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    Object.keys(doctorData).forEach((key) => {
      formData.append(key, doctorData[key]);
    });

    const token = localStorage.getItem('adminToken');
    
    try {
      const response = await axios.post("http://localhost:5000/api/doctors/register/doctor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Doctor added successfully!");
      navigate('/dashboard');
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Failed to add doctor. Please try again.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="flex flex-col h-full">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-lg">
              <div className="flex">
                <div className="mr-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-200 rounded-full">
                      {photoPreview ? (
                        <img src={photoPreview} alt="Profile" className="object-cover w-full h-full" />
                      ) : (
                        <FaUserCircle size={50} className="text-gray-400" />
                      )}
                    </div>
                    <label className="block mt-2 font-medium">
                      Choose Photo
                      <input
                        type="file"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-200 rounded-full">
                      {signaturePreview ? (
                        <img src={signaturePreview} alt="Signature" className="object-cover w-full h-full" />
                      ) : (
                        <FaSignature size={50} className="text-gray-400" />
                      )}
                    </div>
                    <label className="block mt-2 font-medium">
                      Upload Signature
                      <input
                        type="file"
                        name="signatureImage"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div className="grid w-full grid-cols-3 gap-6 mb-6">
                  {/* Form fields for doctor details */}
                  {[
                    { label: 'Doctor Name', name: 'name' },
                    { label: 'Qualification', name: 'qualification' },
                    { label: 'Gender', name: 'gender' },
                    { label: 'Experience', name: 'experience' },
                    { label: 'Checkup Time', name: 'checkUpTime' },
                    { label: 'Work On', name: 'workOn' },
                    { label: 'Specialty Type', name: 'specialtyType' },
                    // { label: 'Working Time', name: 'workingTime' },
                    // { label: 'Break Time', name: 'breakTime' },
                    { label: 'Age', name: 'age' },
                    { label: 'Phone Number', name: 'phoneNumber' },
                    { label: 'Email', name: 'email' },
                    { label: 'City', name: 'city' },
                    { label: 'State', name: 'state' },
                    { label: 'Country', name: 'country' },
                    { label: 'Address', name: 'doctorAddress' },
                    { label: 'Zip Code', name: 'zipCode' },
                    { label: 'Description', name: 'description' },
                    { label: 'Hospital', name: 'hospital' },
                    { label: 'Current Hospital', name: 'currentHospital' },
                    { label: 'Hospital Website Link', name: 'hospitalWebsiteLink' },
                    { label: 'Emergency Phone Number', name: 'emergencyPhoneNumber' },
                    { label: 'Hospital Address', name: 'hospitalAddress' },
                    { label: 'Online Consultation Rate', name: 'onlineConsultationRate' },
                    { label: 'Password', name: 'password', type: 'password' },
                    { label: 'confirmPassword', name: 'confirmPassword', type: 'confirmPassword' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block mb-1 text-sm font-medium">{field.label}</label>
                      <input
                        type={field.type || 'text'}
                        name={field.name}
                        value={doctorData[field.name]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder={`Enter ${field.label}`}
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={`bg-blue-600 text-white px-6 py-2 rounded-lg ${loading ? "cursor-not-allowed" : "hover:bg-blue-700"}`}
                  disabled={loading}
                >
                  {loading ? "Adding Doctor..." : "Add Doctor"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
