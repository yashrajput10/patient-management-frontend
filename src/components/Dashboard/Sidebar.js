import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const [isBillingOpen, setIsBillingOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Track sidebar visibility

  const toggleBillingMenu = () => {
    setIsBillingOpen(!isBillingOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
    <div className={`h-screen bg-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} style={{ width: '266px', height: '100vh', overflow: 'hidden' }}>
      <button
        className="md:hidden absolute top-4 left-4 text-gray-600"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <span className="material-icons">close</span>
        ) : (
          <span className="material-icons">menu</span>
        )}
      </button>

      {/* Logo and Tagline */}
      <div className="flex flex-col items-center py-6">
        <img src={require('../images/logo.png')} alt="Logo" className="auto" />
      </div>

      {/* Menu Items */}
      <nav className="mt-3">
        <ul className="p-0">
          <li className="flex items-center space-x-4 py-3 pl-8 text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 cursor-pointer ps-4">
            <span className="material-icons">grid_view</span>
            <Link to='/dashboard' className='text-decoration-none text-gray-500'>
            <span>Dashboard</span>
            </Link>
          </li>

          <li className="flex items-center space-x-4 py-3 pl-8 text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 cursor-pointer ps-4">
            <span className="material-icons">person</span>
            <Link  to='/doctormanagement' className='text-decoration-none text-gray-500'>
            <span>Doctor Management</span>
            </Link>
          </li>

          <li className="flex items-center space-x-4 py-3 pl-8 text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 cursor-pointer ps-4">
            <span className="material-icons">people</span>
          <Link to='/patientdashboard' className='text-decoration-none text-gray-500 hover:text-blue-500'>
          <span >Patient Management</span>
          </Link>
          </li>

          {/* Billing and Payments with dropdown */}
          <li>
            <div
              className="flex items-center justify-between py-3 pl-8 pr-4 text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 cursor-pointer ps-4"
              onClick={toggleBillingMenu}
            >
              <div className="flex items-center space-x-4">
                <span className="material-icons">account_balance_wallet</span>
                <span>Billing And Payments</span>
              </div>
              <span className="material-icons">
                {isBillingOpen ? "expand_less" : "expand_more"}
              </span>
            </div>

            {/* Dropdown Menu */}
            {isBillingOpen && (
              <ul className="ml-4 mt-1 space-y-1 text-sm text-gray-400">
                <li className="pl-4 flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <Link  to='/monitorbilling' className='text-decoration-none text-gray-500'>
                  <span>Monitor Billing</span>
                  </Link>
                </li>
                <li className="pl-4 flex items-center space-x-2 py-3 hover:text-blue-500 cursor-pointer">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <Link  to='/insuranceclaims' className='text-decoration-none text-gray-500'>
                  <span>Insurance Claims</span>
                  </Link>
                </li>
                <li className="pl-4 flex items-center space-x-2 text-gray-400 hover:text-blue-500 cursor-pointer">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  <Link  to='/paymentprocess' className='text-decoration-none text-gray-500'>
                  <span>Payment Process</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="flex items-center space-x-4 py-3 pl-8 text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-all duration-300 cursor-pointer ps-4">
          <span className="material-icons">bar_chart</span>            
            <Link  to='/reportingandanalytics' className='text-decoration-none text-gray-500'>
            <span>Reporting And Analytics</span>
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-100">
          <button className="w-full flex items-center justify-start space-x-2 py-3 text-red-500 bg-red-50 hover:bg-red-100 transition-all duration-300 ps-4 font-bold">
            <IoLogIn className="fs-4" />
            <Link to='/' className="text-decoration-none text-red-500 bg-red-50 hover:bg-red-100 transition-all duration-300 ps-4 font-bold" >
            <span>Logout</span>
            </Link>
          </button>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Sidebar;
