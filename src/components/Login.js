import React, { useState } from 'react';
import axios from 'axios';

import './Login.css'; // Adding a CSS file for styling

const Login = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOtp = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/send-otp`, { email });
            setIsOtpSent(true);
            alert('OTP sent to your email');
        } catch (error) {
            console.error('Error sending OTP:', error.response ? error.response.data : error.message);
            alert('Error sending OTP. Please try again.');
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, { email, otp });
            console.log('Login response:', response);
            alert('Login successful');
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            alert('Invalid OTP or email. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        className="btn send-otp-btn"
                        onClick={handleSendOtp}
                    >
                        {isOtpSent ? 'Resend OTP' : 'Send OTP'}
                    </button>
                    {isOtpSent && (
                        <div className="form-group">
                            <label htmlFor="otp">OTP</label>
                            <input
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP"
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="btn login-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
