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
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useState } from 'react'; 
import logo from '../images/logo.png';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const ResetPassword = () => {

    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
    const [password, setPassword] = useState(''); // State for password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validation logic
        if (!password) {
            toast.error("Password is required."); // Show error toast
            return;
        }
        if (!confirmPassword) {
            toast.error("Please confirm your password."); // Show error toast
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match."); // Show error toast
            return;
        }

        // If validation passes, show success message
        toast.success("Password reset successfully!"); // Show success toast
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
                        maxWidth: '550px', 
                        boxShadow: 2,
                    }}
                >
                    <p className='fs-3 d-flex fw-medium mb-4'>Reset Password</p>
                   

                    <TextField
                    required
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"} // Toggle password visibility
                    placeholder="Enter New password"
                    fullWidth
                    size="small"
                    value={password} // Bind value to state
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                    sx={{ mb: 3 }}
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                            sx: { color: 'black', fontSize: "18px",},
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                                {showPassword ? <FaEye /> :  <FaEyeSlash />} {/* Eye icon */}
                            </span>
                        ),
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
                id="confirm-password"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                placeholder="Enter Confirm password"
                fullWidth
                size="small"
                value={confirmPassword} // Bind value to state
                onChange={(e) => setConfirmPassword(e.target.value)} // Update state on change
                sx={{ mb: 3 }}
                slotProps={{
                    inputLabel: {
                        shrink: true,
                        sx: { color: 'black', fontSize: "18px",},
                    },
                }}
                InputProps={{
                    endAdornment: (
                        <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                            {showConfirmPassword ? <FaEye /> :  <FaEyeSlash />} {/* Eye icon for confirm password */}
                        </span>
                    ),
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
                    

                    

                    <Button fullWidth style={{backgroundColor:"#F6F8FB" , color:"black"}} className='my-2 fw-bold' type="submit" // Change to submit
                    onMouseDown={(e) => (e.currentTarget.style.backgroundColor = "#0EABEB")}  down
                    onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "#F6F8FB")} 
                >
                    Reset Password</Button>
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
 export default ResetPassword;