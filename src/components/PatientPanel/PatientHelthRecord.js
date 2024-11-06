import React from "react";
import Navbar from "../Dashboard/Navbar"; // Assuming you have a Navbar component
import PatientSidebar from "./PatientSidebar"; // Assuming you have a sidebar component

const PatientHealthRecord = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      <PatientSidebar />
      <div className="flex-grow overflow-auto">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        <div className="p-6 space-y-6 bg-gray-100">

          {/* Patient Details Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Patient"
                  className="object-cover w-24 h-24 border-2 border-blue-500 rounded-full"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Marcus Philips</h2>
                  <p className="text-gray-600 text-md">Phone: 99130 44537</p>
                </div>
              </div>
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Edit Profile
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Email", value: "john@gmail.com" },
                { label: "Gender", value: "Male" },
                { label: "DOB", value: "2 Jan, 2022" },
                { label: "Height", value: "160 cm" },
                { label: "Weight", value: "50 Kg" },
                { label: "Country", value: "India" },
                { label: "State", value: "Gujarat" },
                { label: "Address", value: "B-408 Swastik Society, Mota Varacha Rajkot" }
              ].map((detail, index) => (
                <div key={index}>
                  <p className="text-sm font-medium text-gray-600">{detail.label}</p>
                  <p className="text-lg text-gray-800">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Medical History Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Medical History</h3>
              <button className="text-blue-500 hover:text-blue-700">
                View All History
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-3">
              {[
                { title: "Diagnosis 1", date: "2 Jan, 2022", description: "A brief description of the medical condition goes here." },
                { title: "Diagnosis 2", date: "15 Feb, 2022", description: "Another medical condition description goes here." },
                { title: "Diagnosis 3", date: "5 Mar, 2022", description: "Further medical details and brief about the condition." }
              ].map((history, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md">
                  <h4 className="font-semibold text-gray-800">{history.title}</h4>
                  <p className="text-sm text-gray-600">{history.date}</p>
                  <p className="mt-2 text-gray-700">{history.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prescriptions Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Prescriptions</h3>
              <button className="text-blue-500 hover:text-blue-700">
                View All Prescriptions
              </button>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm text-left table-auto">
                <thead>
                  <tr className="border-b bg-gray-50">
                    {["Hospital Name", "Date", "Disease", "Action"].map((heading) => (
                      <th key={heading} className="px-4 py-2 text-gray-600">{heading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { hospital: "Apollo Hospital", date: "2 Jan, 2022", disease: "Fever" },
                    { hospital: "Medanta Hospital", date: "15 Feb, 2022", disease: "Allergy" },
                    { hospital: "Manipal Hospital", date: "5 Mar, 2022", disease: "Cold" }
                  ].map((prescription, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{prescription.hospital}</td>
                      <td className="px-4 py-2">{prescription.date}</td>
                      <td className="px-4 py-2">{prescription.disease}</td>
                      <td className="px-4 py-2">
                        <button className="text-blue-500 hover:text-blue-700">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Test Reports Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Test Reports</h3>
              <button className="text-blue-500 hover:text-blue-700">
                View All Reports
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
              {[
                { title: "Pathology Test", result: "Viral Infection", doctor: "Dr. Marcus Philips" },
                { title: "Blood Test", result: "Low Hemoglobin", doctor: "Dr. Sarah Johnson" }
              ].map((report, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md">
                  <p className="font-semibold text-gray-800">{report.title}</p>
                  <p className="text-sm text-gray-600">{report.result}</p>
                  <p className="text-sm text-gray-500">{report.doctor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Patient Status Section */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Patient Status</h3>
            <div className="mt-4">
              <p className="text-lg font-medium text-gray-700">Status: Stable</p>
              <p className="mt-2 text-sm text-gray-600">
                Your current health condition is stable. Please continue following the prescribed medications and maintain a healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHealthRecord;
