import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import noaptoday from '../images/no appointment today.png'
import { MdRemoveRedEye } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';


const TodayAppointment = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [appointments, setAppointments] = useState([]);

  return (
    <div className="flex h-screen">
      <div className="flex-grow bg-gray-100">
     
        <div className='bg-white p-3 overflow'>
          <div>
            <ul className='mb-1 d-flex gap-4 cursor-pointer p-0 pb-3'>
              <li
                className={`first-item ${activeTab === 'today' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                style={{ borderBottom: activeTab === 'today' ? "3px solid #0EABEB" : "none" }}
                onClick={() => setActiveTab('today')}
              >
                Today Appointment
              </li>
              <li
                className={`${activeTab === 'upcoming' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                style={{ borderBottom: activeTab === 'upcoming' ? "3px solid #0EABEB" : "none" }}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Appointment
              </li>
              <li
                className={`${activeTab === 'previous' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                style={{ borderBottom: activeTab === 'previous' ? "3px solid #0EABEB" : "none" }}
                onClick={() => setActiveTab('previous')}
              >
                Previous Appointment
              </li>
              <li
                className={`${activeTab === 'cancel' ? 'text-[#0EABEB] pb-2 border-b-3' : ''}`}
                style={{ borderBottom: activeTab === 'cancel' ? "3px solid #0EABEB" : "none" }}
                onClick={() => setActiveTab('cancel')}
              >
                Cancel Appointment
              </li>
            </ul>
          </div>
          <div className='d-flex justify-between'>
            <h5 className='text-semibold mt-1'>Today Appointment</h5>
            <div className='d-flex gap-3'>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Patient"
                  className="rounded-3xl py-2"
                  style={{
                    outline: "none",
                    border: "none",
                    backgroundColor: "#F6F8F8",
                    paddingLeft: "40px",
                    width: "250px",
                  }}
                />
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-lg p-1">
                  <LuSearch className='fw-bold' />
                </button>
              </div>

              <button className="rounded-lg p-1 px-2 d-flex justify-content-center align-items-center bg-[#0EABEB] text-white">
                <FaCalendarAlt className='me-2' />Appointment Time Slot
              </button>
            </div>

          </div>
          <div className="gap-4 h-50 mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Patient Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dieses Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Patient issue
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Appointment Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Appointment Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Appointment Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.length === 0 ? (
                  <tr>
                    <td colSpan="7" className='text-center'>
                      <img src={noaptoday} width={350} className='p-5 mx-auto d-block' />
                    </td>
                  </tr>
                ) : (
                  appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <th scope="row" className="px-6 py-2">{appointment.patientName}</th>
                      <td className="px-6 py-2">{appointment.diseaseName}</td>
                      <td className="px-6 py-2">{appointment.issue}</td>
                      <td className="px-6 py-2">{appointment.date}</td>
                      <td class="px-6 py-2 text-bold">
                        <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>$2999</div>
                      </td>
                      <td class="px-6 py-2 text-bold">
                        <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>$2999</div>
                      </td>
                      <td className="px-6 py-2">
                        <div className="d-flex align-items-center justify-content-center">
                          <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                        </div>
                      </td>
                    </tr>
                  ))
                )
                }
              </tbody>
            </table>

          </div>
        </div>
                
      </div>
    </div>
  )
}

export default TodayAppointment;