import React from 'react';

const FreelancerDashboard = () => {
    return (
        <div className="freelancer-dashboard">
            <h1>Freelancer Dashboard</h1>
            <section className="earnings-tracker">
                <h2>Earnings Tracker</h2>
                <div className="earnings-details">
                    <p>Total Earnings: $5000</p>
                    <p>This Month: $1200</p>
                    <p>Last Month: $800</p>
                </div>
            </section>
            <section className="portfolio-management">
                <h2>Portfolio Management</h2>
                <button>Add New Project</button>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </section>
        </div>
    );
};

export default FreelancerDashboard;