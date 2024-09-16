import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        jobTitle: '',
        contactNumber: '',
        companyWebsite: '',
        password: '',
        confirmPassword: '',
    });
    const [termsChecked, setTermsChecked] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setTermsChecked(e.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            return alert("Passwords don't match");
        }
        if (!termsChecked) {
            return alert('You must agree to the terms and conditions');
        }
    
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, formData);
            alert('Registration successful. Please check your email for verification.');
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            alert('Error registering. Please try again.');
        }
    };
    

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Create Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your full name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            id="companyName"
                            placeholder="Enter your company name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Official Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            type="text"
                            name="jobTitle"
                            id="jobTitle"
                            placeholder="Enter your job title"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            type="text"
                            name="contactNumber"
                            id="contactNumber"
                            placeholder="Enter your contact number"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyWebsite">Company Website</label>
                        <input
                            type="text"
                            name="companyWebsite"
                            id="companyWebsite"
                            placeholder="Enter your company website"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Create a password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group terms-checkbox">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsChecked}
                            onChange={handleCheckboxChange}
                            required
                        />
                        <label htmlFor="terms">
                            I agree to the <a href="/terms">terms and conditions</a> and{' '}
                            <a href="/privacy">privacy policy</a>
                        </label>
                    </div>
                    <button type="submit" className="btn register-btn">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
