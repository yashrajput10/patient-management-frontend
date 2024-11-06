import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu';
import { MdEditSquare, MdRemoveRedEye } from 'react-icons/md';
import { RiDeleteBin3Fill, RiMoneyRupeeCircleFill, RiWomenFill } from 'react-icons/ri';
import Navbar from './Navbar';
import { IoClose } from 'react-icons/io5';
import MonitorBill from '../images/monitor bill.png';
import { Modal } from 'react-bootstrap';
import { Grid2, MenuItem, TextField } from '@mui/material';
import Sidebar from './Sidebar';

const PaymentProcess = () => {

    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isDetailDialogOpen, setDetailDialogOpen] = useState(false);
    const [isCreateVisible, setCreateVisible] = useState(false);
    const [isEditInvoice, setisEditInvoice] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createprescription = () => {
        setCreateVisible(!isCreateVisible)
    }

    const openDetailDialog = (patient) => { 
        setSelectedPatient(patient);
        setDetailDialogOpen(true);
    };

    const toggleNotification = () => {
        setDetailDialogOpen(prevState => !prevState);
    };

    const toggleNotification2 = () => {
        setisEditInvoice(prevState => !prevState);
    };

    const toggleDetails = () => {
        setDetailsVisible(!isDetailsVisible); // Toggle the visibility of the details
    };

    const toggleDialog = () => {
        setDialogOpen(!isDialogOpen); // Toggle the dialog visibility
    };

    return (
        <div className="flex h-screen">
            <Sidebar/>
            <div className="flex-grow bg-gray-100 overflow-auto">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="gap-3 mt-6 px-6 mb-6 overflow-auto">

                    {isCreateVisible && (
                        <div className="bg-white mb-3 p-3">
                            <div className='d-flex justify-between align-items-center'>
                                <h5 className='text-semibold mt-1 mb-3'>Edit Bills</h5>
                            </div>
                            <div className=' my-3 items-center justify-between '>
                                <div className='flex gap-3 mb-4'>
                                    <TextField
                                        required
                                        id="patientname"
                                        label="Patient Name"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small',
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="PatientNumber"
                                        label="Patient Number"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="Gender"
                                        label="Gender"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="Age"
                                        label="Age"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <div className='flex gap-3 mb-3'>
                                    <TextField
                                        required
                                        id="DoctorName"
                                        label="Doctor Name"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small',
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="DiseaseName"
                                        label="Disease Name"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="Description"
                                        label="Description"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                    required
                                    id="country"
                                    label="Payment Type"
                                    placeholder="Select your country"
                                    fullWidth
                                    select
                                    size="small"slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                            sx: { color: 'black'},
                                        },
                                    }}
                                    InputProps={{
                                        sx: {
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'gray',
                                            },
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'gray',
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'gray',
                                            },
                                            '& input::placeholder': {
                                                fontSize: 'small', // Set placeholder font size to small
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value="country1">Cash</MenuItem>
                                    <MenuItem value="country2">Online</MenuItem>
                                    <MenuItem value="country3">Insurance</MenuItem>
                                </TextField>
                                </div>
                                <div className='flex gap-3 mb-3'>
                                    <TextField
                                        required
                                        id="BillDate"
                                        label="Bill Date"
                                        type='date'
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small',
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="BillTime"
                                        label="Bill Time"
                                        type='time'
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="BillNumber"
                                        label="Bill Number"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="Discount"
                                        label="Discount (%)"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <div className='flex gap-3 mb-3'>
                                    <TextField
                                        required
                                        id="Tax"
                                        label="Tax"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small',
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="Amount"
                                        label="Amount"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="TotalAmount"
                                        label="Total Amount"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                    <TextField
                                        required
                                        id="Address"
                                        label="Address"
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px", },
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small', // Set placeholder font size to small
                                                },
                                            },
                                        }}
                                    />
                                </div>
                                <div className="flex items-end justify-end">
                                    <button className='bg-[#0EABEB] p-2 text-white px-4 rounded mt-2'>Save</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="bg-white">
                        <div className='d-flex justify-between align-items-center p-3'>

                            <h5 className='text-semibold mt-1'>Billing Details</h5>
                            <div className='d-flex gap-3'>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Quick Search"
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
                                            Bill Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Patient Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Dieses Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Time
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b fw-semibold dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-3 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>5654</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            abcd 
                                        </td>
                                        <td className="px-6 py-2">
                                             Flu
                                        </td>
                                        <td className="px-6 py-2">
                                           1234567893
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#EBF5EC] text-[#39973D] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Paid</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            10 oct, 2024
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                        </td>
                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                            <div className="mt-2 d-flex align-items-center justify-content-center cursor-pointer" >
                                                <div className="d-flex align-items-center bg-[#F6F8FB] p-1 rounded justify-content-center" onClick={createprescription}>
                                                    <MdEditSquare className="text-[#39973D] fs-5 "/>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center mx-2 bg-[#F6F8FB] p-1 rounded" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                                    <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                                </div>
                                                <div onClick={handleShow} className="d-flex align-items-center justify-content-center bg-[#F6F8FB] p-1 rounded">
                                                    <RiMoneyRupeeCircleFill className="text-[#818194] fs-5" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-white fw-semibold border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-3 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>5654</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            abcd
                                        </td>
                                        <td className="px-6 py-2">
                                            Colds 
                                        </td>
                                        <td className="px-6 py-2">
                                           1234567890
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#FCE8EA] text-[#E11D29] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>Unpaid</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            11 oct, 2024
                                        </td>
                                        <td className="px-6 py-2 text-bold">
                                            <div className="bg-[#F6F8FB] text-[#718EBF] rounded-3xl d-flex align-items-center justify-content-center" style={{ width: "70px", height: "30px", fontWeight: "500" }}>4:30 PM</div>
                                        </td>
                                        <td className="px-6 py-2 text-bold d-flex gap-2">
                                        <div className="d-flex align-items-center justify-content-center cursor-pointer" >
                                        <div className="d-flex align-items-center bg-[#F6F8FB] p-1 rounded justify-content-center" onClick={createprescription}>
                                            <MdEditSquare className="text-[#39973D] fs-5 "/>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mx-2 bg-[#F6F8FB] p-1 rounded" onClick={() => openDetailDialog({ name: 'xyz', age: '22 Years', gender: 'Female', address: '123 Street', date: '2 Jan, 2022', hospital: 'City Hospital' })}>
                                            <MdRemoveRedEye className="text-[#0EABEB] fs-5" />
                                        </div>
                                        <div onClick={handleShow} className="d-flex align-items-center justify-content-center bg-[#F6F8FB] p-1 rounded">
                                            <RiMoneyRupeeCircleFill className="text-[#818194] fs-5" />
                                        </div>
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

                    <Modal show={show} onHide={handleClose} centered dialogClassName="modal-sm">
                        <Modal.Header closeButton>
                            <Modal.Title className='fs-5'>Cash Payment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='d-flex items-center justify-between gap-2'>
                                <Grid2 item xs={6} className="w-full">
                                    <TextField
                                        required
                                        id="amount"
                                        label="Enter Amount"
                                        type="number"
                                        placeholder='00000'
                                        fullWidth
                                        size="small"
                                        slotProps={{
                                            inputLabel: {
                                                shrink: true,
                                                sx: { color: 'black', fontSize: "18px" }, // Customize label
                                            },
                                        }}
                                        InputProps={{
                                            sx: {
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '& input::placeholder': {
                                                    fontSize: 'small',
                                                },
                                            },
                                        }}
                                    />
                                </Grid2>
                            </div>

                        </Modal.Body>
                        <Modal.Footer className='p-0 pb-2 px-2 border-0'>
                            <div className="flex justify-between">
                                <button
                                    className="border-2 rounded px-4 py-2 mr-2 w-50"

                                >
                                    Cancel
                                </button>
                                <button className="hover:bg-[#0EABEB] bg-gray-100 hover:text-white rounded px-4 py-2 w-50">
                                    Pay
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        </div>
    )
}

export default PaymentProcess;