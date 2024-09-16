import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <h1>Welcome to Recruiter Portal</h1>
                <p>Connecting talent with opportunities</p>
            </header>
            
            <div className="card-container">
                <div className="card">
                    <h2>Join Us</h2>
                    <p>Create an account to start managing your recruitment.</p>
                    <Link to="/register" className="btn register-btn">Register</Link>
                </div>
                <div className="card">
                    <h2>Already a member?</h2>
                    <p>Login to access your dashboard and start recruiting.</p>
                    <Link to="/login" className="btn login-btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
