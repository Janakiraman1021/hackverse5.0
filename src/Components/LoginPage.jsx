import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (email) {
      toast.success(`OTP sent to: ${email}`);
      console.log(`OTP sent to: ${email}`);
      localStorage.setItem('userEmail', email);
      setOtpSent(true); 
    } else {
      toast.error('Please enter an email address');
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log(`OTP entered: ${otp}`);
    setEmail('');
    setOtp('');
    navigate('/'); 
    // toast.success('You Have Successfully LoggedIn');
    window.location.reload();
  };

  return (
    <div className='bg-white dark:bg-[#001938]'>
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Sign in to your account</h1>
        <p className="text-gray-500 mt-2">
          Clarity gives you the blocks and components you need to create a truly professional website.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={otpSent ? handleOtpSubmit : handleSendOtp}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          {otpSent && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700" htmlFor="otp">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            {otpSent ? 'Submit OTP' : 'Send OTP'}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
      />
    </div>
    </div>
  );
};

export default LoginPage;

