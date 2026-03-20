import React from 'react';
import { useEffect, useState } from 'react';

const ClientDashboard = () => {
    const [activeProjects, setActiveProjects] = useState([]);
    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        // Fetch active projects (mocked)
        const fetchActiveProjects = async () => {
            const projects = await fetch('/api/active-projects'); // Replace with actual API call
            setActiveProjects(await projects.json());
        };

        // Fetch payment history (mocked)
        const fetchPaymentHistory = async () => {
            const payments = await fetch('/api/payment-history'); // Replace with actual API call
            setPaymentHistory(await payments.json());
        };

        fetchActiveProjects();
        fetchPaymentHistory();
    }, []);

    return (
        <div>
            <h1>Client Dashboard</h1>
            <h2>Active Projects</h2>
            <ul>
                {activeProjects.map(project => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
            <h2>Payment History</h2>
            <ul>
                {paymentHistory.map(payment => (
                    <li key={payment.id}>${payment.amount} on {new Date(payment.date).toLocaleDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClientDashboard;
