import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const AdminSignup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '', // Updated to match the required field name
        hospital: '',
        country: '',
        state: '',
        city: '',
        password: '',
        confirmPassword: '',
        image: null,
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleCheckboxChange = () => {
        setAgreeToTerms((prev) => !prev);
        if (errors.terms) {
            setErrors((prev) => ({ ...prev, terms: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Basic validation
        if (!formData.email.includes('@')) {
            newErrors.email = 'Incorrect email address.';
            toast.error('Incorrect email address.');
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.password = 'Passwords do not match.';
            newErrors.confirmPassword = 'Passwords do not match.';
            toast.error('Passwords do not match.');
        }

        if (!agreeToTerms) {
            newErrors.terms = 'You must agree to the Terms & Conditions.';
            toast.error('You must agree to the Terms & Conditions.');
        }

        // Check for required phone number
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required.';
            toast.error('Phone number is required.');
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});

            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });

            try {
                const response = await fetch('http://localhost:5000/api/admins/register', {
                    method: 'POST',
                    body: formDataToSend,
                });

                const result = await response.json();

                if (response.ok) {
                    toast.success('Admin registered successfully.');
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phoneNumber: '', // Reset phoneNumber on success
                        hospital: '',
                        country: '',
                        state: '',
                        city: '',
                        password: '',
                        confirmPassword: '',
                        image: null,
                    });
                    navigate('/admin/login')
                } else {
                    toast.error(result.message || 'Error registering admin.');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                toast.error('Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable /> */}
            <div className="flex flex-col items-center py-6">
                <img src="../logo.png" alt="Small Logo" className="block object-contain w-40 h-auto md:hidden" />
            </div>

            {/* Left side: Form */}
            <div className="flex items-center justify-center w-full p-3 md:w-1/2">
                <form onSubmit={handleSubmit} className="w-3/4 p-6 bg-white rounded-lg shadow-lg form">
                    <h2 className="mb-4 text-2xl font-bold">Admin Registration</h2>

                    {/* First Name and Last Name */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {['firstName', 'lastName'].map((field, index) => (
                            <div className="relative mb-4" key={index}>
                                <input
                                    id={field}
                                    name={field}
                                    type="text"
                                    className={`block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border ${errors[field] ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
                                    required
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={`Enter ${field === 'firstName' ? 'First Name' : 'Last Name'}`}
                                />
                                <label
                                    htmlFor={field}
                                    className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4"
                                >
                                    {field === 'firstName' ? 'First Name*' : 'Last Name*'}
                                </label>
                                {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Email Address and Phone Number */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="relative mb-4">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className={`block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Email Address"
                            />
                            <label
                                htmlFor="email"
                                className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4"
                            >
                                Email Address*
                            </label>
                            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div className="relative mb-4">
                            <input
                                id="phoneNumber" // Updated ID to match the required field name
                                name="phoneNumber" // Updated to match the required field name
                                type="tel"
                                className={`block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
                                required
                                value={formData.phoneNumber} // Updated to match the required field name
                                onChange={handleChange}
                                placeholder="Enter Phone Number"
                            />
                            <label
                                htmlFor="phoneNumber" // Updated for accessibility
                                className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4"
                            >
                                Phone Number*
                            </label>
                            {errors.phoneNumber && <p className="text-sm text-red-500">{errors.phoneNumber}</p>}
                        </div>
                    </div>

                    {/* Hospital Selection */}
                    <div className="relative mb-4">
                        <select
                            id="hospital"
                            name="hospital"
                            className={`block w-full px-4 py-2 text-sm bg-transparent border ${errors.hospital ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
                            required
                            value={formData.hospital}
                            onChange={handleChange}
                        >
                            <option value="" disabled hidden>Select Hospital</option>
                            <option value="hospital1">Green Apple Hospital</option>
                            <option value="hospital2">Leela Baa Hospital</option>
                            <option value="hospital3">Unity Hospital</option>
                            <option value="hospital4">Orange Hospital</option>
                            <option value="hospital5">Kiran Hospital</option>
                            <option value="hospital6">Tristar Hospital</option>
                            <option value="hospital7">Unique Hospital</option>
                            <option value="hospital8">Bombay Multi Speciality Hospital</option>


                        </select>
                        <label htmlFor="hospital" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                            Hospital*
                        </label>
                        {errors.hospital && <p className="text-sm text-red-500">{errors.hospital}</p>}
                    </div>

                    {/* Country, State, and City */}
                    <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
                        {['country', 'state'].map((field, index) => (
                            <div className="relative" key={index}>
                                <select
                                    id={field}
                                    name={field}
                                    className={`block w-full px-4 py-2 text-sm bg-transparent border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
                                    required
                                    value={formData[field]}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled hidden>Select {field.charAt(0).toUpperCase() + field.slice(1)}</option>
                                    {field === 'country' ? (
                                        <>
                                            <option value="USA">USA</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Australia">Australia</option>
                                            <option value="India">India</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="California">California</option>
                                            <option value="Ontario">Ontario</option>
                                            <option value="São Paulo">São Paulo</option>
                                            <option value="Bavaria">Bavaria</option>
                                            <option value="New South Wales">New South Wales</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                        </>
                                    )}
                                </select>
                                <label
                                    htmlFor={field}
                                    className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4"
                                >
                                    {field.charAt(0).toUpperCase() + field.slice(1)}*
                                </label>
                                {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                            </div>
                        ))}

                        {/* City Selection */}
                        <div className="relative mb-4">
                            <select
                                id="city"
                                name="city"
                                className={`block w-full px-4 py-2 text-sm bg-transparent border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
                                required
                                value={formData.city}
                                onChange={handleChange}
                            >
                                <option value="" disabled hidden>Select City</option>
                                <option value="city1">Surat</option>
                                <option value="city2">Gandhinagar</option>
                                <option value="city3">Nadiyad</option>
                                <option value="city4">Rajkot</option>
                                <option value="city5">Bhavanagar</option>
                                <option value="city6">Patna</option>
                                <option value="city7">Navsari</option>
                                <option value="city8">Valsad</option>
                                <option value="city9">Vapi</option>

                            </select>
                            <label htmlFor="city" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                                City*
                            </label>
                            {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                        </div>
                    </div>

                    {/* Password and Confirm Password */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {['password', 'confirmPassword'].map((field, index) => (
                            <div className="relative mb-4" key={index}>
                                <input
                                    id={field}
                                    name={field}
                                    type={field === 'password' ? (showPassword ? 'text' : 'password') : (showConfirmPassword ? 'text' : 'password')}
                                    className={`block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
                                    required
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={field === 'password' ? 'Enter Password' : 'Confirm Password'}
                                />
                                <label
                                    htmlFor={field}
                                    className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4"
                                >
                                    {field === 'password' ? 'Password*' : 'Confirm Password*'}
                                </label>
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                                    onClick={() => field === 'password' ? setShowPassword((prev) => !prev) : setShowConfirmPassword((prev) => !prev)}
                                >
                                    {field === 'password' ? (showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />) : (showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />)}
                                </button>
                                {errors[field] && <p className="text-sm text-red-500">{errors[field]}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center mb-4">
                        <input
                            id="terms"
                            name="terms"
                            type="checkbox"
                            className={`mr-2 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500`}
                            checked={agreeToTerms}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="terms" className="text-sm">
                            I agree to the <a href="#" className="text-blue-600 underline">Terms & Conditions</a>
                        </label>
                        {errors.terms && <p className="ml-2 text-sm text-red-500">{errors.terms}</p>}
                    </div>

                    <button type="submit" className="w-full py-2 mt-4 font-bold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
                        Register
                    </button>
                    {/* Register Link */}
                    <div className="mt-4 text-center">
                        <p>
                            Don't have an account? <a href="/admin/login" className="text-blue-500 underline">Login</a>
                        </p>
                    </div>
                </form>
            </div>
            <div className="items-center justify-center hidden w-full p-4 bg-gray-200 md:flex md:w-1/2">
                <div className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg">
                    <img
                        src="../signup.png"
                        alt="Admin Registration"
                        className="w-[115%] h-[115%] rounded-lg object-cover transform scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdminSignup;
