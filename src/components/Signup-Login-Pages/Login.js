import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import MenuItem from '@mui/material/MenuItem';
import registerimg from '../images/Group 1116603022.png';
import vector1 from '../images/Vector 1.png';
import vector2 from '../images/Vector 2.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useState } from 'react'; 
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
// import vector1 from '../images/Vector 1.png'


const Login = () => {

    const [showPassword, setShowPassword] = useState(false); 
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validation logic
        if (!email) {
            toast.error("Email or Phone is required."); // Show error toast
            return;
        }
        if (!password) {
            toast.error("Password is required."); // Show error toast
            return;
        }

        // If all validations pass, proceed with login
        toast.success("Login successful!"); // Show success toast
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
                        maxWidth: '650px', 
                        boxShadow: 2,
                    }}
                >
                    <p className='fs-3 d-flex fw-medium mb-4'>Login</p>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Email"
                                label="Email or Phone"
                                placeholder="Enter Email or Phone Number"
                                fullWidth
                                size="small"
                                value={email} // Bind value to state
                                onChange={(e) => setEmail(e.target.value)} // Update state on change
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                        sx: { color: 'black', fontSize: "20px" }, 
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
                        </Grid>
                    </Grid>

                     <TextField
                        required
                        id="password"
                        label="Password"
                        type={showPassword ? "text" : "password"} // Toggle password visibility
                        placeholder="Enter your password"
                        fullWidth
                        size="small"
                        sx={{ mb: 3 }}
                        value={password} // Bind value to state
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                                sx: { color: 'black', fontSize: "20px", },
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
                    

                    <div variant="body2" className='d-flex alignItems-start justify-content-between'>
                        <span><input type="checkbox" required className='me-2'/> Remember me</span> 
                        <span className='text-primary' style={{cursor:'pointer'}}><a style={{textDecoration:'none'}} href="/forgotpassword">Forgot Password ?</a></span>
                    </div>

                    <Button fullWidth style={{fontFamily:'lato',backgroundColor:"#F6F8FB" , color:"black"}} className='my-3 fw-bold' type="submit" // Change to submit
                        onMouseDown={(e) => (e.currentTarget.style.backgroundColor = "#0EABEB")}
                        onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "#F6F8FB")}
                >
                    Login</Button>
                    <Typography variant="body2" className='fs-6'>
                        Don't have an account? <a href="/register">Registration</a>
                    </Typography>
                    <ToastContainer /> {/* Add ToastContainer to render toasts */}
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#F6F8FB", height: '100vh' }}>
            <img
            src={vector2}
            style={{
                position:'absolute',
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
                    position:'absolute',
                    bottom: '0',
                    right: '0',
                }}
            />
            </Grid>
        </Grid>
    );
}
 export default Login