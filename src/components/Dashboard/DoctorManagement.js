import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Navbar from './Navbar';


function DoctorManagement() {



  return (
    <div className="flex h-screen ">

      <Sidebar />
      <div className="flex-grow bg-gray-100 overflow-auto">
        <div className="sticky top-0 z-10">
          <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Navbar />
            <div className="p-6 bg-white shadow-md flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800">Doctor Management</h1>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search Patient"
                  className="border border-gray-300 rounded-md p-2 w-64 focus:outline-none"
                />
                <div >
                  <Link  to="/adddoctor">
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                  >
                    Add New Doctor
                  </Button>
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default DoctorManagement;
