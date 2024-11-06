import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { LuSearch } from 'react-icons/lu';
import { MdEditSquare, MdRemoveRedEye } from 'react-icons/md';
import Navbar from './Navbar';
import { IoClose } from 'react-icons/io5';
import MonitorBill from '../images/monitor bill.png';
import avtar from '../images/Avatar.png';
import Sidebar from './Sidebar';

const InsuranceClaims = () => {

    const [isDetailDialogOpen, setDetailDialogOpen] = useState(false);

    const openDetailDialog = () => {
        setDetailDialogOpen(true);
    };

    const toggleNotification = () => {
        setDetailDialogOpen(prevState => !prevState);
    };

    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">
                    <div className="bg-white">
                        <div className='d-flex justify-between align-items-center p-3'>
                            <h5 className='text-semibold mt-1'>Insurance Claims</h5>
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
                            </div>
                        </div>
                        <div className="gap-2 h-50 ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-600">
                                <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Bill No
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Doctor Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Patient Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Disease Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Insurance Company
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Insurance Plan
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Bill Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white fw-semibold border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>5654</div>
                                        </td>
                                        <td className="px-6 py-2 flex items-center">
                                            <img src={avtar} />
                                            <span className='ps-2 fw-semibold'>Dr.Marcus Philips</span>
                                        </td>
                                        <td className="px-6 py-2">
                                            Internal Medicine
                                        </td>
                                        <td className="px-6 py-2">
                                            Kadin Saris
                                        </td>
                                        <td className="px-6 py-2">
                                            HDFC Life Insurance
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center py-2" style={{ fontWeight: "500" }}>Maternity</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            2 jun, 2024
                                        </td>

                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white fw-semibold border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>5654</div>
                                        </td>
                                        <td className="px-6 py-2 flex items-center">
                                            <img src={avtar} />
                                            <span className='ps-2 fw-semibold'>Dr.Marcus Philips</span>
                                        </td>
                                        <td className="px-6 py-2">
                                            Internal Medicine
                                        </td>
                                        <td className="px-6 py-2">
                                            Charliie Rosser
                                        </td>
                                        <td className="px-6 py-2">
                                            HDFC Life Insurance
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center py-2" style={{ fontWeight: "500" }}>Health</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            3 jun, 2024
                                        </td>

                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="d-flex align-items-center justify-content-center cursor-pointer" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    {isDetailDialogOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
                            <span className="text-gray-500 text-white d-flex align-items-center justify-content-center rounded-circle cursor-pointer" style={{ width: "14px", height: "14px", backgroundColor: "#E11D29", position: "absolute", top: "9%", right: "31%", zIndex: "900" }} onClick={toggleNotification}><IoClose /></span>
                            <img src={MonitorBill} width="40%" className='position-relative' />

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default InsuranceClaims;

