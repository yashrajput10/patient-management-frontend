import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import registerimg from '../images/forgot.png';
import vector1 from '../images/Vector 1.png';
import vector2 from '../images/Vector 2.png';
import logo from '../images/logo.png';
import { FaRegClock } from 'react-icons/fa';
import { useState } from 'react'; // Import useState
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const Otp = () => {
    const [otp, setOtp] = useState(Array(6).fill('')); // State to hold OTP values

    const handleChange = (index, value) => {
        if (/^[0-9]$/.test(value) || value === '') { // Allow only digits or empty
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (otp.join('').length < 6) {
            toast.error("Please enter a complete 6-digit OTP."); // Show error toast
            return;
        }

        // If validation passes, show success message
        toast.success("OTP verified successfully!"); // Show success toast
    };

    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit} // Add onSubmit handler
                    sx={{
                        backgroundColor: 'white',
                        padding: '50px',
                        borderRadius: '8px',
                        width: '100%',
                        maxWidth: '500px',
                        boxShadow: 2,
                    }}
                >
                    <p className='fs-3 d-flex fw-medium mb-2'>Enter OTP</p>
                    <p className='pb-1 text-left'>Please enter the 6 digit code that was sent to your phone number.</p>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12}>
                            <Grid container spacing={3} justifyContent="start">
                                {otp.map((value, index) => (
                                    <Grid item key={index}>
                                        <TextField
                                            required
                                            id={`otp-${index}`}
                                            placeholder="0"
                                            fullWidth
                                            size="small"
                                            value={value} // Bind value to state
                                            onChange={(e) => handleChange(index, e.target.value)} // Update state on change
                                            inputProps={{ maxLength: 1 }}
                                            sx={{
                                                width: '40px', // Set width for square shape
                                                height: '40px', // Set height for square shape
                                                textAlign: 'center', // Center the placeholder text
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'gray',
                                                },
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'red !important',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'red!important',
                                                },
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                    <div variant="body2" className='d-flex alignItems-start justify-content-between'>
                        <span className='d-flex align-items-center'><FaRegClock className='me-2' /> 00:30 sec</span>
                        <span className='text-primary' style={{ cursor: 'pointer' }}><a style={{ textDecoration: 'none' }} >Resend OTP</a></span>
                    </div>

                    <Button fullWidth style={{ fontFamily: 'lato', backgroundColor: "#F6F8FB", color: "black" }} className='my-3 fw-bold' type="submit" // Change to submit
                        onMouseDown={(e) => (e.currentTarget.style.backgroundColor = "#0EABEB")}
                        onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "#F6F8FB")}
                    >
                        Verify
                    </Button>
                    <ToastContainer /> {/* Add ToastContainer to render toasts */}
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#F6F8FB", height: '100vh' }}>
                <img
                    src={logo}
                    style={{
                        position: 'absolute',
                        width: '14%',
                        top: '13%'
                    }}
                />
                <img
                    src={vector2}
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                    }}
                />
                <img
                    src={registerimg}
                    alt="Dummy"
                    style={{
                        width: '70%',
                        top: '113px',
                        left: '1091px',
                        gap: '0px',
                        opacity: '0px'
                    }}
                />
                <img
                    src={vector1}
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default Otp;