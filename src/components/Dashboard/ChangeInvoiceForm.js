import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaCalendarAlt, FaClock, FaPen } from "react-icons/fa";
import AddFieldModal from "./AddNewField";
import Navbar from "./Navbar";

const ChangeInvoiceForm = () => {
  const [formData, setFormData] = useState({
    hospitalDetails: {
      name: "",
      otherText: "",
      email: "",
      billDate: "",
      billTime: "",
      billNumber: "",
      phoneNumber: "",
      address: "",
    },
    patientDetails: {
      name: "",
      diseaseName: "",
      doctorName: "",
      description: "",
      discount: 0,
      tax: 0,
      amount: 0,
      totalAmount: 0,
      paymentType: "",
      age: "",
      gender: "",
      address: "",
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newField, setNewField] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      const simulateUpload = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(simulateUpload);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddNewField = () => {
    if (newField.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        hospitalDetails: {
          ...prevData.hospitalDetails,
          [newField]: "",
        },
      }));
      setNewField("");
      setIsModalOpen(false);
    }
  };

  const handleChange = (e, section, field) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="flex flex-col h-full p-6 bg-white rounded shadow-lg">
          {/* Hospital Details Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Hospital Details</h3>
              <button
                className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600"
                onClick={handleModalToggle}
              >
                + Add New Field
              </button>
            </div>
            <div className="flex justify-between gap-6 p-4 border border-gray-300 rounded bg-gray-50">
              {/* Upload Logo */}
              <div className="flex flex-col items-center">
                <label className="block mb-2 text-sm font-medium">Upload Logo</label>
                <div className="relative flex flex-col items-center justify-center h-32 p-4 transition duration-200 border border-gray-400 border-dashed rounded-lg cursor-pointer hover:border-blue-500">
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    className="hidden"
                    onChange={handleFileChange}
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center h-full"
                  >
                    {selectedFile ? (
                      <img
                        src={selectedFile}
                        alt="Uploaded Logo"
                        className="absolute inset-0 object-cover w-full h-full rounded-lg"
                      />
                    ) : (
                      <FaPen className="mb-2 text-gray-400" />
                    )}
                    <p className="text-sm font-medium text-blue-500">
                      <span className="font-medium">Upload a file </span>or drag and drop
                    </p>
                    <p className="text-sm text-gray-400">PNG, JPG, GIF up to 10MB</p>
                  </label>
                  {selectedFile && (
                    <FaPen
                      className="absolute text-blue-500 cursor-pointer top-2 right-2"
                      onClick={() => document.getElementById("file-upload").click()}
                    />
                  )}
                </div>
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="w-full mt-2">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-blue-500 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{uploadProgress}%</p>
                  </div>
                )}
              </div>
              {/* Other Hospital Fields */}
              <div className="flex-grow">
                <div className="grid gap-4 mb-4 md:grid-cols-3">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "name")}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Other Text"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "otherText")}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "email")}
                    />
                  </div>
                </div>
                <div className="grid gap-4 mb-4 md:grid-cols-3">
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "billDate")}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="time"
                      className="w-full py-2 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "billTime")}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Bill Number"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "billNumber")}
                    />
                  </div>
                </div>
                <div className="grid gap-4 mb-4 md:grid-cols-3">
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "phoneNumber")}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Address"
                      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => handleChange(e, "hospitalDetails", "address")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Details Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Patient Details</h3>
              <button
                className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600"
                onClick={handleModalToggle}
              >
                + Add New Field
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "name")}
              />
              <input
                type="text"
                placeholder="Enter Disease Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "diseaseName")}
              />
              <input
                type="text"
                placeholder="Enter Doctor Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "doctorName")}
              />
              <input
                type="text"
                placeholder="Enter Description"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "description")}
              />
              <input
                type="number"
                placeholder="Enter Discount"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "discount")}
              />
              <input
                type="number"
                placeholder="Enter Tax"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "tax")}
              />
              <input
                type="number"
                placeholder="Enter Amount"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "amount")}
              />
              <input
                type="number"
                placeholder="Enter Total Amount"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "totalAmount")}
              />
              <select
                onChange={(e) => handleChange(e, "patientDetails", "paymentType")}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Payment Type</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Insurance">Insurance</option>
              </select>
              <input
                type="text"
                placeholder="Enter Age"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "age")}
              />
              <select
                onChange={(e) => handleChange(e, "patientDetails", "gender")}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                placeholder="Enter Address"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleChange(e, "patientDetails", "address")}
              />
            </div>
          </div>
        </div>
      </div>
      <AddFieldModal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        onAddField={handleAddNewField}
        newField={newField}
        setNewField={setNewField}
      />
    </div>
  );
};

export default ChangeInvoiceForm;
