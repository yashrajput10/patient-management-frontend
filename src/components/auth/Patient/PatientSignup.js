import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const PatientSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    image: null, // Add file upload functionality if needed
    bloodGroup: '',
    Dob: '',
    country: '',
    state: '',
    city: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();



  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

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

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
    if (errors.terms) {
      setErrors({
        ...errors,
        terms: '',
      });
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

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required.';
      toast.error('Phone number is required.');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

      const formDataToSend = { ...formData };

      try {
        const response = await fetch('http://localhost:5000/api/patients/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataToSend),
        });

        const result = await response.json();

        if (response.ok) {
          toast.success('Patient registered successfully.');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            age: '',
            height: '',
            weight: '',
            gender: '',
            image: null,
            bloodGroup: '',
            Dob: '',
            country: '',
            state: '',
            city: '',
            address: '',
            password: '',
            confirmPassword: '',
          });
          navigate('/patient/login');
        } else {
          toast.error(result.message || 'Error registering patient.');
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
          <h2 className="mb-4 text-2xl font-bold text-center">Patient Registration</h2>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative mb-4">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
              <label htmlFor="firstName" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                First Name*
              </label>
            </div>
            <div className="relative mb-4">
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
              <label htmlFor="lastName" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Last Name*
              </label>
            </div>
          </div>

          {/* Email Address and phoneNumber Number */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className={`relative mb-4 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email Address"
              />
              <label htmlFor="email" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Email Address*
              </label>
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="relative mb-4">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phoneNumber Number"
              />
              <label htmlFor="phoneNumber" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                phoneNumber Number*
              </label>
            </div>
          </div>

          {/* Age, Height, and Weight */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative mb-4">
              <input
                id="age"
                name="age"
                type="number"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter Age"
              />
              <label htmlFor="age" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Age*
              </label>
            </div>
            <div className="relative mb-4">
              <input
                id="height"
                name="height"
                type="text"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.height}
                onChange={handleChange}
                placeholder="Enter Height"
              />
              <label htmlFor="height" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Height*
              </label>
            </div>
            <div className="relative mb-4">
              <input
                id="weight"
                name="weight"
                type="text"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.weight}
                onChange={handleChange}
                placeholder="Enter Weight"
              />
              <label htmlFor="weight" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Weight*
              </label>
            </div>
          </div>

          {/* Gender, Blood Group, and Date of Birth */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative mb-4">
              <select
                id="gender"
                name="gender"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Gender*
              </label>
            </div>
            <div className="relative mb-4">
              <select
                id="bloodGroup"
                name="bloodGroup"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <label htmlFor="bloodGroup" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Blood Group*
              </label>
            </div>
            <div className="relative mb-4">
              <input
                id="Dob"
                name="Dob"
                type="date"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.Dob}
                onChange={handleChange}
              />
              <label htmlFor="Dob" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Date of Birth*
              </label>
            </div>
          </div>

          {/* Country, State, City, and Address */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative mb-4">
              <select
                id="country"
                name="country"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.country}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select Country</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
                <option value="australia">Australia</option>
              </select>
              <label htmlFor="country" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Country*
              </label>
            </div>
            <div className="relative mb-4">
              <select
                id="state"
                name="state"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.state}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select State</option>
                <option value="newYork">New York</option>
                <option value="california">California</option>
                <option value="texas">Texas</option>
                <option value="florida">Florida</option>
              </select>
              <label htmlFor="state" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                State*
              </label>
            </div>
            <div className="relative mb-4">
              <select
                id="city"
                name="city"
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.city}
                onChange={handleChange}
              >
                <option value="" disabled hidden>Select City</option>
                <option value="newYorkCity">New York City</option>
                <option value="losAngeles">Los Angeles</option>
                <option value="houston">Houston</option>
                <option value="miami">Miami</option>
              </select>
              <label htmlFor="city" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                City*
              </label>
            </div>
          </div>

          <div className="relative mb-4">
            <textarea
              id="address"
              name="address"
              rows="3"
              className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
            ></textarea>
            <label htmlFor="address" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
              Address*
            </label>
          </div>

          {/* Password and Confirm Password */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative mb-4">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              <label htmlFor="password" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Password*
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeIcon className="w-5 h-5 text-gray-500" /> : <EyeSlashIcon className="w-5 h-5 text-gray-500" />}
              </div>
            </div>
            <div className="relative mb-4">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                className="block w-full px-4 py-2 text-sm placeholder-gray-500 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <label htmlFor="confirmPassword" className="absolute px-1 text-sm text-gray-500 transition-all duration-300 transform scale-75 -translate-y-4 bg-white top-2 left-4">
                Confirm Password*
              </label>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <EyeIcon className="w-5 h-5 text-gray-500" /> : <EyeSlashIcon className="w-5 h-5 text-gray-500" />}
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center mb-4">
            <input
              id="terms"
              type="checkbox"
              className="mr-2 text-blue-600 rounded focus:ring-blue-500"
              checked={agreeToTerms}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a>
            </label>
          </div>
          {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

          {/* Submit Button */}
          <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Register
          </button>
          <div className="mt-4 text-center">
            <p>
              Don't have an account? <a href="/patient/login" className="text-blue-500 underline">Login</a>
            </p>
          </div>
        </form>
      </div>

      {/* Right side: Image */}
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

export default PatientSignup;
