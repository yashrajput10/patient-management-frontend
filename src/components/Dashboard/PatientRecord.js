import React, { useState, useEffect } from "react"
import { Eye, Search, Plus } from "lucide-react"

const initialAppointments = [
  {
    id: 1,
    patientName: "John Doe",
    patientIssue: "Fever",
    doctorName: "Dr. Marcus Philips",
    diseaseName: "Influenza",
    appointmentTime: "10:00 AM",
    appointmentType: "In-person",
    date: new Date().toISOString(),
    patientDetails: {
      age: 32,
      gender: "Male",
      phone: "123-456-7890",
      address: "123 Elm Street",
    },
  },
  {
    id: 2,
    patientName: "Jane Smith",
    patientIssue: "Toothache",
    doctorName: "Dr. Hayle Schleifer",
    diseaseName: "Dental Infection",
    appointmentTime: "2:30 PM",
    appointmentType: "Online",
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    patientDetails: {
      age: 28,
      gender: "Female",
      phone: "987-654-3210",
      address: "456 Maple Street",
    },
  },
]

export default function PatientRecord() {
  const [appointments, setAppointments] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("today")
  const [showModal, setShowModal] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false)
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    patientIssue: "",
    doctorName: "",
    diseaseName: "",
    appointmentTime: "",
    appointmentType: "In-person",
    date: new Date().toISOString().split('T')[0],
    patientDetails: {
      age: "",
      gender: "Male",
      phone: "",
      address: "",
    },
  })

  useEffect(() => {
    const storedAppointments = localStorage.getItem('appointments')
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments))
    } else {
      setAppointments(initialAppointments)
      localStorage.setItem('appointments', JSON.stringify(initialAppointments))
    }
  }, [])

  const filteredAppointments = appointments.filter((appointment) => {
    const isNameMatch = appointment.patientName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const appointmentDate = new Date(appointment.date)
    const today = new Date()

    if (activeTab === "today") {
      return isNameMatch && appointmentDate.toDateString() === today.toDateString()
    } else if (activeTab === "upcoming") {
      return isNameMatch && appointmentDate > today
    } else if (activeTab === "previous") {
      return isNameMatch && appointmentDate < today
    } else {
      return false
    }
  })

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient)
    setShowModal(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.includes('.')) {
      const [parent, child] = name.split('.')
      setNewAppointment(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      setNewAppointment(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSelectChange = (name, value) => {
    setNewAppointment(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newAppointmentWithId = {
      ...newAppointment,
      id: appointments.length + 1,
    }
    const updatedAppointments = [...appointments, newAppointmentWithId]
    setAppointments(updatedAppointments)
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments))
    setShowNewAppointmentModal(false)
    setNewAppointment({
      patientName: "",
      patientIssue: "",
      doctorName: "",
      diseaseName: "",
      appointmentTime: "",
      appointmentType: "In-person",
      date: new Date().toISOString().split('T')[0],
      patientDetails: {
        age: "",
        gender: "Male",
        phone: "",
        address: "",
      },
    })
  }

  return (
    <>
    <div className="gap-4 h-50" style={{ width: "200%" }}>
    <div className="p-4 bg-gray-50 text-gray-900">
      <div className="flex border-b border-gray-300 mb-4">
        {["today", "upcoming", "previous", "cancel"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Appointment
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-semibold">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Appointments
        </h1>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search patients..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <button
          className="w-full sm:w-auto flex items-center justify-center py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => setShowNewAppointmentModal(true)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Appointment
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient Issue</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doctor Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Disease Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Appointment Time</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Appointment Type</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center">
                    
                    <p>No appointments found. Please add a new appointment.</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4">{appointment.patientName}</td>
                  <td className="px-6 py-4">{appointment.patientIssue}</td>
                  <td className="px-6 py-4">{appointment.doctorName}</td>
                  <td className="px-6 py-4">{appointment.diseaseName}</td>
                  <td className="px-6 py-4">{appointment.appointmentTime}</td>
                  <td className="px-6 py-4">{appointment.appointmentType}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleViewDetails(appointment)}
                    >
                      <Eye className="inline-block mr-1" size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && selectedPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Patient Details</h2>
            <p><strong>Name:</strong> {selectedPatient.patientName}</p>
            <p><strong>Issue:</strong> {selectedPatient.patientIssue}</p>
            <p><strong>Doctor:</strong> {selectedPatient.doctorName}</p>
            <p><strong>Disease:</strong> {selectedPatient.diseaseName}</p>
            <p><strong>Time:</strong> {selectedPatient.appointmentTime}</p>
            <p><strong>Type:</strong> {selectedPatient.appointmentType}</p>
            <div className="mt-4">
              <button
                className="w-full py-2 bg-gray-500 text-white rounded-md"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showNewAppointmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-96"
          >
            <h2 className="text-xl font-semibold mb-4">Add New Appointment</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Patient Name</label>
              <input
                type="text"
                name="patientName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={newAppointment.patientName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Issue</label>
              <input
                type="text"
                name="patientIssue"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={newAppointment.patientIssue}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Doctor Name</label>
              <input
                type="text"
                name="doctorName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={newAppointment.doctorName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Disease Name</label>
              <input
                type="text"
                name="diseaseName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={newAppointment.diseaseName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Appointment Time</label>
              <input
                type="time"
                name="appointmentTime"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={newAppointment.appointmentTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
              <input
                type="date"
                name="date"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={newAppointment.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Appointment Type</label>
              <select
                name="appointmentType"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                value={newAppointment.appointmentType}
                onChange={(e) => handleSelectChange('appointmentType', e.target.value)}
                required
              >
                <option value="In-person">In-person</option>
                <option value="Online">Online</option>
              </select>
            </div>
            <div className="mt-4 flex gap-4">
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowNewAppointmentModal(false)}
                className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    </div>
    </>
  )
}
