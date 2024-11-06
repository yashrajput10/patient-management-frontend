import React, { useState } from 'react';
import DoctureSidebar from './DoctureSidebar';
import { EyeIcon } from '@heroicons/react/24/outline';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dnavbar from './Dnavbar';

const appointmentsData = [
  { name: 'Jaydon Philips', age: 36, gender: 'Male', type: 'Onsite', time: '10:10 AM', status: 'New', date: new Date('2024-10-19') },
  { name: 'Cooper Donin', age: 35, gender: 'Female', type: 'Onsite', time: '10:10 AM', status: 'New', date: new Date('2024-03-02') },
  { name: 'Charlie Herwitz', age: 25, gender: 'Female', type: 'Onsite', time: '10:10 AM', status: 'New', date: new Date('2024-03-02') },
  { name: 'Talan Lipshutz', age: 32, gender: 'Male', type: 'Onsite', time: '10:10 AM', status: 'Old', date: new Date('2024-03-02') },
  { name: 'Abram Septimus', age: 45, gender: 'Female', type: 'Onsite', time: '10:10 AM', status: 'New', date: new Date('2024-03-02') },
  { name: 'Lincoln Arcand', age: 25, gender: 'Male', type: 'Onsite', time: '10:10 AM', status: 'Old', date: new Date('2024-03-02') },
  { name: 'Jakob Carder', age: 23, gender: 'Male', type: 'Onsite', time: '10:10 AM', status: 'New', date: new Date('2024-03-02') },
  { name: 'Wilson Botosh', age: 18, gender: 'Male', type: 'Onsite', time: '10:10 AM', status: 'Old', date: new Date('2024-03-03') },
  { name: 'James Bothman', age: 15, gender: 'Male', type: 'Onsite', time: '10:10 AM', status: 'New', date: new Date('2024-03-03') },
  { name: 'Ryan Bator', age: 42, gender: 'Female', type: 'Onsite', time: '10:10 AM', status: 'Old', date: new Date('2024-03-03') },
  { name: 'Jakob Saris', age: 27, gender: 'Female', type: 'Onsite', time: '10:10 AM', status: 'New', date: new Date('2024-03-03') }
];

function Doctorprescriptiontools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [appointments, setAppointments] = useState(appointmentsData);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredAppointments = appointmentsData.filter((appointment) =>
      appointment.name.toLowerCase().includes(value) &&
      appointment.date.toDateString() === selectedDate.toDateString()
    );
    setAppointments(filteredAppointments);
  };

  // Filter appointments by selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const filteredAppointments = appointmentsData.filter(
      (appointment) => appointment.date.toDateString() === date.toDateString()
    );
    setAppointments(filteredAppointments);
  };

  return (
    <div className="flex h-screen">
      <DoctureSidebar />
      <div className="flex flex-col flex-grow">
        <Dnavbar />
        <div className="flex-grow p-4 overflow-auto bg-gray-100">
          <div className="p-6 bg-white rounded shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Today Appointment</h2>

              {/* Date Picker */}
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                className="p-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-2 border rounded shadow-sm focus:outline-none focus:border-blue-500"
                placeholder="Search Patient..."
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <div key={index} className="p-4 bg-white rounded shadow hover:shadow-md">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">{appointment.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-sm font-medium px-2 py-1 rounded ${appointment.status === 'New' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                            }`}
                        >
                          {appointment.status}
                        </span>
                        {/* Eye Icon */}
                        <button className="text-gray-500 hover:text-gray-700">
                          <EyeIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Appointment Type: {appointment.type}</p>
                    <p className="text-sm text-gray-500">Patient Age: {appointment.age} Years</p>
                    <p className="text-sm text-gray-500">Patient Gender: {appointment.gender}</p>
                    <p className="text-sm text-gray-500">Appointment Time: {appointment.time}</p>
                    <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                      Create Prescription
                    </button>
                  </div>
                ))
              ) : (
                <p className="col-span-4 text-center text-gray-500">No appointments found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctorprescriptiontools;
