import React, { useState, useRef } from 'react';

const Otp = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [errors, setErrors] = useState({});
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false); // For API loading state

  // Refs for input fields
  const inputRefs = useRef([]);

  // Handle OTP change for each input
  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    // Allow only digits and restrict to one character per input
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input field if available
      if (index < otp.length - 1 && value) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === '') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  // Handle backspace to move to the previous input
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle OTP submission with API integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // OTP Validation: check if all fields are filled
    if (otp.some((digit) => digit === '')) {
      newErrors.otp = 'OTP must be 6 digits.';
    }
                        
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true); // Start loading state

      try {
        const userId = '6706d29f98b9b041c2c8ca56'; 
        const response = await fetch('http://localhost:5000/api/patient/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },                      
          body: JSON.stringify({ userId, otp: otp.join('') }),
        });

        const result = await response.json();

        if (response.ok) {
          setOtpVerified(true);
          console.log(`OTP verified: ${otp.join('')}`);
        } else {
          setErrors({ otp: result.message || 'OTP verification failed.' });
        }
      } catch (error) {
        console.error('Error verifying OTP:', error);
        setErrors({ otp: 'Failed to verify OTP. Please try again.' });
      } finally {
        setLoading(false); // End loading state
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen otp-container">
      <div className="flex flex-col items-center py-6">
        <img src="../logo.png" alt="Small Logo" className="block w-40 h-auto object-contain md:hidden" />
      </div>

      {/* Left side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-10">
        <form onSubmit={handleSubmit} className="form bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>

          {/* OTP Input Fields */}
          <div className="grid grid-cols-6 gap-2 justify-center mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-full h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                inputMode="numeric"
                pattern="\d*" // Allows numeric input only on mobile
                autoFocus={index === 0} // Automatically focus on the first input
              />
            ))}
          </div>
          {errors.otp && <span className="error-text text-red-500 text-center block mb-2">{errors.otp}</span>}

          {/* Verify OTP Button */}
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" disabled={loading}>
            {loading ? 'Verifying...' : otpVerified ? 'OTP Verified!' : 'Verify OTP'}
          </button>

          {/* Resend OTP Link */}
          <div className="mt-4 text-center">
            <p>
              Didn't receive the OTP? <a href="#" className="text-blue-500 underline">Resend OTP</a>
            </p>
          </div>
        </form>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 bg-gray-200 items-center justify-center p-4">
        <div className="max-w-sm md:max-w-md lg:max-w-lg w-full h-auto">
          <img
            src="../signup.png"
            alt="Admin Registration"
            className="w-[115%] h-[115%] rounded-lg object-cover transform scale-105" // Add scale here
          />
        </div>
      </div>
    </div>
  );
};

export default Otp;
