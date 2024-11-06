import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import registerimg from '../images/Group 1116603022.png';
import vector1 from '../images/Vector 1.png';
import vector2 from '../images/Vector 2.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Dialog from '@mui/material/Dialog'; // Import Dialog component
import DialogTitle from '@mui/material/DialogTitle'; // Import DialogTitle component
import DialogContent from '@mui/material/DialogContent'; // Import DialogContent component
import DialogActions from '@mui/material/DialogActions'; // Import DialogActions component
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications


const Registration = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility
    const [hospitalName, setHospitalName] = useState(''); // State to hold hospital name
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleOpenDialog = () => {
        setOpenDialog(true); // Open dialog
    };

    const handleCloseDialog = () => {
        setOpenDialog(false); // Close dialog
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Validation logic
       
        if (!firstName) {
            toast.error("First name is required."); // Show error toast
            return;
        }
        if (!lastName) {
            toast.error("Last name is required."); // Show error toast
            return;
        }
        if (!email) {
            toast.error("Email address is required."); // Show error toast
            return;
        }
        if (!phone) {
            toast.error("Phone number is required."); // Show error toast
            return;
        }
        if (!country) {
            toast.error("Country is required."); // Show error toast
            return;
        }
        if (!state) {
            toast.error("State is required."); // Show error toast
            return;
        }
        if (!city) {
            toast.error("City is required."); // Show error toast
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
        
        // If all validations pass, proceed with form submission
        toast.success("Registration successful!"); // Show success toast
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
                        width: '100%', // Changed to 100% to fill the Grid item
                        maxWidth: '650px', // Optional: Set a max width for better appearance
                        boxShadow: 2,
                    }}
                >
                    <p className='fs-3 d-flex fw-medium mb-4'>Registration</p>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="first-name"
                                label="First Name"
                                placeholder="Enter your first name"
                                fullWidth
                                size="small"
                                value={firstName} // Set the value to the state
                                onChange={(e) => setFirstName(e.target.value)} // Update state on change
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                        sx: { color: 'black', fontSize: "18px", }, // Bold black label
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
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="last-name"
                                label="Last Name"
                                placeholder="Enter your last name"
                                fullWidth
                                size="small"
                                value={lastName} // Set the value to the state
                                onChange={(e) => setLastName(e.target.value)} // Update state on change
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
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="email"
                                label="Email Address"
                                placeholder="Enter your email"
                                fullWidth
                                size="small"
                                value={email} // Set the value to the state
                                onChange={(e) => setEmail(e.target.value)} // Update state on change
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
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="phone"
                                label="Phone Number"
                                placeholder="Enter your phone number"
                                fullWidth
                                size="small"
                                value={phone} // Set the value to the state
                                onChange={(e) => setPhone(e.target.value)} // Update state on change
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
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="country"
                                label="Country"
                                placeholder="Select your country"
                                fullWidth
                                select
                                size="small"
                                value={country} // Set the value to the state
                                onChange={(e) => setCountry(e.target.value)} // Update state on change
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
                            >
                                <MenuItem value="country1">India</MenuItem>
                                <MenuItem value="country2">Austria</MenuItem>
                                <MenuItem value="country3">Bhutan</MenuItem>
                                <MenuItem value="country4">Malaysia</MenuItem>
                                <MenuItem value="country5">Serbia</MenuItem>
                                <MenuItem value="country6">Malavi</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="state"
                                label="State"
                                placeholder="Select your state"
                                fullWidth
                                select
                                size="small"
                                value={state} // Set the value to the state
                                onChange={(e) => setState(e.target.value)} // Update state on change
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
                            >
                                <MenuItem value="state1">Gujarat</MenuItem>
                                <MenuItem value="state2">Haryana</MenuItem>
                                <MenuItem value="state3">Kerala</MenuItem>
                                <MenuItem value="state4">Meghalaya</MenuItem>
                                <MenuItem value="state5">Punjab</MenuItem>
                                <MenuItem value="state6">Rajasthan</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="city"
                                label="City"
                                placeholder="Enter your city"
                                fullWidth
                                select
                                size="small"
                                value={city} // Set the value to the state
                                onChange={(e) => setCity(e.target.value)} // Update state on change
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
                            >
                                <MenuItem value="state1">Surat</MenuItem>
                                <MenuItem value="state2">Nadiyad</MenuItem>
                                <MenuItem value="state3">Bhavanagar</MenuItem>
                                <MenuItem value="state4">Rajkot</MenuItem>
                                <MenuItem value="state5">Patna</MenuItem>
                                <MenuItem value="state6">Gandhinagar</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    <TextField
                        required
                        id="hospital"
                        label="Select Hospital"
                        placeholder="Select your hospital"
                        fullWidth
                        select
                        size="small"
                        sx={{ mb: 3 }}
                        value={hospitalName} // Set the value to the state
                        onChange={(e) => setHospitalName(e.target.value)}
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
                    >
                        <MenuItem value="hospital1">Hummingbird Garden Samaritan Hospital Center</MenuItem>
                        <MenuItem value="hospital2">Fountain Grove Medical Clinic</MenuItem>
                        <MenuItem value="hospital3">Silver Peak Medical Center</MenuItem>
                        <MenuItem value="hospital4">Bliss Angel Hospital</MenuItem>
                        <MenuItem value="hospital5">Peace Feather Medical Clinic</MenuItem>
                        <MenuItem value="hospital6">Rose Point Clinic</MenuItem>
                        <MenuItem value="hospital7">Dream isle Medical Clinic</MenuItem>
                        <MenuItem value="hospital8">Mirror Eden General Hospital</MenuItem>
                        <MenuItem value="hospital9"> <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 1 }}
                            onClick={handleOpenDialog} // Open dialog on click
                        >
                            Create Hospital
                        </Button></MenuItem>
                    </TextField>

                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle className='pb-0 fw-bold'>Hospital Name</DialogTitle>
                        <DialogContent>
                            <TextField label="Hospital Name" value={hospitalName} fullWidth margin="normal"  onChange={(e) => setHospitalName(e.target.value)}/>
                            <TextField label="Hospital Address" fullWidth margin="normal" />

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Country"
                                        fullWidth
                                        select
                                        margin="normal"
                                    >
                                        <MenuItem value="country1">India</MenuItem>
                                        <MenuItem value="country2">Austria</MenuItem>
                                        <MenuItem value="country3">Bhutan</MenuItem>
                                        <MenuItem value="country4">Malaysia</MenuItem>
                                        <MenuItem value="country5">Serbia</MenuItem>
                                        <MenuItem value="country6">Malavi</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="State"
                                        fullWidth
                                        select
                                        margin="normal"
                                    >
                                        <MenuItem value="state1">Gujarat</MenuItem>
                                        <MenuItem value="state2">Haryana</MenuItem>
                                        <MenuItem value="state3">Kerala</MenuItem>
                                        <MenuItem value="state4">Meghalaya</MenuItem>
                                        <MenuItem value="state5">Punjab</MenuItem>
                                        <MenuItem value="state6">Rajasthan</MenuItem>
                                    </TextField>
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="City"
                                        fullWidth
                                        select
                                        margin="normal"
                                    >
                                        <MenuItem value="city1">Surat</MenuItem>
                                        <MenuItem value="city2">Nadiyad</MenuItem>
                                        <MenuItem value="city3">Bhavanagar</MenuItem>
                                        <MenuItem value="city4">Rajkot</MenuItem>
                                        <MenuItem value="city5">Patna</MenuItem>
                                        <MenuItem value="city6">Gandhinagar</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        label="Zip Code"
                                        fullWidth
                                        margin="normal"
                                        placeholder='Enter Zip Code'
                                    />
                                </Grid>
                            </Grid>

                        </DialogContent>
                        <DialogActions sx={{ justifyContent: 'space-between', paddingBottom: '25px' }}>
                            <Button
                                onClick={handleCloseDialog}
                                color="primary"
                                fullWidth
                                sx={{ flex: 1, marginRight: '8px', color: 'black', backgroundColor: '#F6F8FB', border: '1px solid black', marginLeft: '15px' }}
                            >
                                Cancel
                            </Button>
                            <Button
                            onClick={() => {
                                // Set the hospital name in the dropdown and close the dialog
                                setHospitalName(hospitalName);
                                handleCloseDialog();
                            }} 
                                color="primary"
                                fullWidth
                                sx={{ flex: 1, marginRight: '8px', color: 'black', backgroundColor: '#F6F8FB', border: '1px solid black', marginLeft: '15px' }}
                            >
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <TextField
                    required
                    id="password"
                    label="Password"
                    type={password ? "text" : "password"} // Toggle confirm password visibility
                    placeholder="Enter your password"
                    fullWidth
                    size="small"
                    sx={{ mb: 3 }}
                    value={password} // Set the value to the state
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                    slotProps={{
                        inputLabel: {
                            shrink: true,
                            sx: { color: 'black', fontSize: "18px", },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                                {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Eye icon for confirm password */}
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

                    <TextField
                        required
                        id="confirm-password"
                        label="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                        placeholder="Confirm your password"
                        fullWidth
                        size="small"
                        sx={{ mb: 3 }}
                        value={confirmPassword} // Set the value to the state
                        onChange={(e) => setConfirmPassword(e.target.value)} // Update state on change
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                                sx: { color: 'black', fontSize: "18px", },
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />} {/* Eye icon for confirm password */}
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

                    <div variant="body2" className='d-flex alignItems-start justifyContent-start'>
                        <input type="checkbox" required className='me-2' /> I agree to all the <span className='px-2 text-primary'>T&C</span> and <span className='px-2 text-primary'>Privacy Policies</span>
                    </div>

                    <Button type="submit" fullWidth style={{ fontFamily: 'lato', backgroundColor: "#F6F8FB", color: "black" }} className='my-3 fw-bold'>
                        Register
                    </Button>
                    <ToastContainer /> {/* Add ToastContainer to render toasts */}
                    <Typography variant="body2" className='fs-6'>
                        Already have an account? <a href="/">Login</a>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#F6F8FB", height: '100vh' }}>
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

export default Registration;