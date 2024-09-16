import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [recruiters, setRecruiters] = useState([]);

    useEffect(() => {
        const fetchRecruiters = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/recruiters`);
                setRecruiters(response.data);
            } catch (error) {
                alert('Error fetching recruiters');
            }
        };
        fetchRecruiters();
    }, []);

    const handleApproval = async (id, status) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/admin/recruiters`, { id, status });
            setRecruiters(recruiters.filter(r => r._id !== id));
        } catch (error) {
            alert('Error updating recruiter status');
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {recruiters.map(recruiter => (
                    <li key={recruiter._id}>
                        {recruiter.fullName} - {recruiter.email}
                        <button onClick={() => handleApproval(recruiter._id, 'approved')}>Approve</button>
                        <button onClick={() => handleApproval(recruiter._id, 'rejected')}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
