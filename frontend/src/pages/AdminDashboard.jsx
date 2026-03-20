import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
    const [disputes, setDisputes] = useState([]);
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        // Fetch dispute data and analytics when the component mounts
        fetchDisputes();
        fetchAnalytics();
    }, []);

    const fetchDisputes = async () => {
        // Replace the URL with your API endpoint
        const response = await fetch('/api/disputes');
        const data = await response.json();
        setDisputes(data);
    };

    const fetchAnalytics = async () => {
        // Replace the URL with your API endpoint
        const response = await fetch('/api/analytics');
        const data = await response.json();
        setAnalytics(data);
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <section>
                <h2>Dispute Management</h2>
                <ul>
                    {disputes.map(dispute => (
                        <li key={dispute.id}>
                            {dispute.title} - Status: {dispute.status}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Analytics</h2>
                <p>Total Users: {analytics.totalUsers}</p>
                <p>Total Earnings: ${analytics.totalEarnings}</p>
            </section>
        </div>
    );
};

export default AdminDashboard;
