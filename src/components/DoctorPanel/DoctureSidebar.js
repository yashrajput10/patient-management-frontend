import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineFileSearch,
  AiOutlineEdit,
  AiOutlinePhone,
  AiOutlineMessage,
} from "react-icons/ai";

const DoctureSidebar = () => {
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
              <AiOutlineCalendar className="text-gray-600" />
              <Link
                to="/doctor/dashboard/appointment/management"
                className="text-gray-500 no-underline"
              >
                <span>Appointment Management</span>
              </Link>
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlineFileSearch className="text-gray-600" />
              <Link
                to="/doctor/patient/record"
                className="text-gray-500 no-underline"
              >
                <span>Patient Record Access</span>
              </Link>
            </li>

            {/* Prescription Tools with dropdown */}
            <li>
              <div
                className="flex items-center justify-between py-3 pl-8 pr-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                onClick={togglePrescriptionMenu}
              >
                <div className="flex items-center space-x-4">
                  <AiOutlineEdit className="text-gray-600" />
                  <span>Prescription Tools</span>
                </div>
                <span className="material-icons">
                  {isPrescriptionOpen ? "expand_less" : "expand_more"}
                </span>
              </div>

              {/* Dropdown Menu */}
              {isPrescriptionOpen && (
                <ul className="mt-1 ml-4 space-y-1 text-sm text-gray-400">
                  <li className="flex items-center pl-4 space-x-2 cursor-pointer hover:text-blue-500">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    <NavLink
                      to="/doctor/prescription/tools"
                      className="text-gray-500 no-underline"
                    >
                      <span>Create Prescription</span>
                    </NavLink>
                  </li>
                  <li className="flex items-center pl-4 space-x-2 cursor-pointer hover:text-blue-500">
                    <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                    <NavLink
                      to="/doctor/prescription/tools/manage"
                      className="text-gray-500 no-underline"
                    >
                      <span>Manage Prescription</span>
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlinePhone className="text-gray-600" />
              <Link
                to="/doctor/teleconsultation"
                className="text-gray-500 no-underline"
              >
                <span>Teleconsultation Module</span>
              </Link>
            </li>

            <li className="flex items-center py-3 pl-8 space-x-4 text-gray-600 transition-all duration-300 cursor-pointer hover:bg-blue-100 hover:text-blue-500">
              <AiOutlineMessage className="text-gray-600" />
              <Link to="/doctor/chat" className="text-gray-500 no-underline">
                <span>Chat</span>
              </Link>
            </li>
          </ul>

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

export default DoctureSidebar;
