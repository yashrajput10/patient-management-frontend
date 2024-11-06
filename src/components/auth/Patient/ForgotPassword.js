import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state

  // Use the useNavigate hook to navigate programmatically
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for the current field
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
  
    // Basic email validation
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.';
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Send OTP requests to three different backends
      try {
        setLoading(true); // Set loading before fetch
  
        // Define all three API calls
        const api1 = fetch('http://localhost:5000/api/admin/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email }),
        });
  
        const api2 = fetch('http://localhost:5000/api/patient/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email }),
        });
  
        const api3 = fetch('http://localhost:5000/api/doctor/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email }),
        });
  
        // Execute all three API calls using Promise.all
        const [response1, response2, response3] = await Promise.all([api1, api2, api3]);
  
        // Check if any of the responses is successful
        if (response1.ok || response2.ok || response3.ok) {
          setOtpSent(true);
          console.log(`OTP sent to: ${formData.email}`);
  
          // Navigate to OTP verification page after a short delay
          setTimeout(() => {
            navigate('/otp-verification');
          }, 1000);
        } else {
          // Handle errors from all three backends
          const data1 = await response1.json();
          const data2 = await response2.json();
          const data3 = await response3.json();
          setErrors({ email: data1.message || data2.message || data3.message || 'Failed to send OTP from all servers' });
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        setErrors({ email: 'An error occurred. Please try again.' });
      } finally {
        setLoading(false); // Reset loading state after fetch
      }
    }
  };
  
  

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col items-center py-6">
        <img src="../logo.png" alt="Small Logo" className="block w-40 h-auto object-contain md:hidden" />
      </div>
      {/* Left side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <form onSubmit={handleSubmit} className="form bg-white p-8 shadow-lg rounded-lg w-3/4">
          <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>

          {/* Email Address */}
          <div className="relative mb-6">
            <input
              id="email"
              name="email"
              type="email"
              className={`block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600`}
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 transform -translate-y-4 scale-75 top-2 left-4 bg-white px-1 transition-all duration-300"
            >
              Email Address*
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Get OTP Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" disabled={loading}>
            {loading ? 'Sending OTP...' : otpSent ? 'OTP Sent!' : 'Get OTP'}
          </button>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p>
              Remembered your password? <a href="/login" className="text-blue-500 underline">Login</a>
            </p>
          </div>
        </form>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 bg-gray-200 items-center justify-center p-4">
        <div className="max-w-sm md:max-w-md lg:max-w-lg w-full h-auto">
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

export default ForgotPassword;
