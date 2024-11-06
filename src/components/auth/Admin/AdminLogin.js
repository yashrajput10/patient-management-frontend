import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email.includes('@')) {
            newErrors.email = 'Incorrect email address.';
            toast.error('Please enter a valid email address.');
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
            toast.error('Password is required.');
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            try {
                const response = await fetch('http://localhost:5000/api/admins/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (!response.ok) {
                    setLoginError(data.message || 'Login failed');
                    toast.error(data.message || 'Login failed');
                } else {
                    toast.success('Login successful!');
                    localStorage.setItem('adminToken', data.token);
                    setFormData({ email: '', password: '' });
                    window.location.href = '/dashboard'; 
                }
            } catch (error) {
                setLoginError('Error connecting to the server. Please try again later.');
                toast.error('Error connecting to the server. Please try again later.');
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            {/* ToastContainer for toast notifications */}
            {/* <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable /> */}

            <div className="flex flex-col items-center py-6">
                <img src="../logo.png" alt="Small Logo" className="block object-contain w-40 h-auto md:hidden" />
            </div>

            {/* Left side: Form */}
            <div className="flex items-center justify-center w-full bg-white md:w-1/2">
                <form onSubmit={handleSubmit} className="w-3/4 p-8 bg-white rounded-lg shadow-lg form">
                    <h2 className="mb-6 text-2xl font-bold">Login</h2>

                    {/* Email Address */}
                    <div className="relative mb-6">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email Address"
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm font-medium text-gray-500 transform -translate-y-4 scale-75 top-2 z-10 left-4 origin-[0] bg-white px-2 transition-all duration-300"
                        >
                            Email Address*
                        </label>
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div className="relative mb-6">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            className={`block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border ${errors.password ? 'border-red-500' : 'border-gray-300'
                                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                            required
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm font-medium text-gray-500 transform -translate-y-4 scale-75 top-2 z-10 left-4 origin-[0] bg-white px-2 transition-all duration-300"
                        >
                            Password*
                        </label>
                        {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute text-gray-600 top-2 right-4"
                        >
                            {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Show login error */}
                    {loginError && <p className="text-red-500 error-text">{loginError}</p>}

                    {/* Forgot Password Link */}
                    <div className="mb-4 text-right">
                        <a href="/forgot-password" className="text-blue-500 ">Forgot Password?</a>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600">
                        Login
                    </button>

                    {/* Register Link */}
                    <div className="mt-4 text-center">
                        <p>
                            Don't have an account? <a href="/admin/signup" className="text-blue-500 underline">Register</a>
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

export default AdminLogin;
