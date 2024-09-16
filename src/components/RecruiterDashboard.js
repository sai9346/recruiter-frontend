import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const RecruiterDashboard = () => {
    const [recruiterData, setRecruiterData] = useState(null);

    useEffect(() => {
        const fetchRecruiterData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/recruiter/dashboard`, {
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                    },
                });
                setRecruiterData(response.data);
            } catch (error) {
                alert('Error fetching recruiter data');
            }
        };
        fetchRecruiterData();
    }, []);

    return (
        <div>
            <h2>Recruiter Dashboard</h2>
            {recruiterData ? (
                <div>
                    <h3>Welcome, {recruiterData.fullName}</h3>
                    <p>Company: {recruiterData.companyName}</p>
                   
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RecruiterDashboard;
