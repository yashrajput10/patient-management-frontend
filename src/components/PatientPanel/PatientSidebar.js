import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineFileText,
  AiOutlineCalendar,
  AiOutlineEdit,
  AiOutlinePhone,
  AiOutlineMessage,
  AiOutlineDollarCircle,
} from "react-icons/ai";

const PatientSidebar = () => {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Sidebar initially closed on mobile

  const toggleBillingMenu = () => {
    setIsBillingOpen(!isBillingOpen);
  };

  const togglePrescriptionMenu = () => {
    setIsPrescriptionOpen(!isPrescriptionOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button for Mobile View */}
      <button
        className="absolute z-50 text-gray-600 top-4 left-4 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <span className="material-icons">close</span>
        ) : (
          <span className="material-icons">menu</span>
        )}
      </button>

      <div
        className={`fixed z-40 h-screen bg-white shadow-md transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static`}
        style={{ width: "266px" }}
      >
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center py-6">
          <img
            src={require("../images/logo.png")}
            alt="Logo"
            className="w-auto h-auto"
          />
        </div>

        {/* Menu Items */}
        <nav className="mt-3">
          <ul className="p-0">
            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlineFileText className="text-gray-600" />
              <Link
                to="/patient/helth/record/dashboard"
                className="text-gray-500 no-underline"
              >
                <span>Personal Health Record</span>
              </Link>
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlineCalendar className="text-gray-600" />
              <Link
                to="/patient/appointment/booking"
                className="text-gray-500 no-underline"
              >
                <span>Appointment Booking</span>
              </Link>
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlineEdit className="text-gray-600" />
              <Link
                to="/patient/access"
                className="text-gray-500 no-underline"
              >
                <span>Prescription Access</span>
              </Link>
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlinePhone className="text-gray-600" />
              <Link
                to="/patient/teleconsultation"
                className="text-gray-500 no-underline"
              >
                <span>Teleconsultation Access</span>
              </Link>
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlineMessage className="text-gray-600" />
              <Link to="/patient/chat" className="text-gray-500 no-underline">
                <span>Chat</span>
              </Link>
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlineDollarCircle className="text-gray-600" />
              <Link
                to="/patient/bills"
                className="text-gray-500 no-underline"
              >
                <span>Bills</span>
              </Link>
            </li>
          </ul>

          <div className="absolute flex justify-center w-full mb-5 bottom-5">
            <img
              src="/../patient.png"
              alt="Admin Registration"
            />
          </div>

          {/* Logout Button */}
          <div className="absolute bottom-0 w-full">
            <button className="flex items-center justify-start w-full py-3 space-x-2 font-bold text-red-500 transition-all duration-300 bg-red-50 hover:bg-red-100">
              <IoLogIn className="fs-4" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default PatientSidebar;
