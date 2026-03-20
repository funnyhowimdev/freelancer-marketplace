import React, { useEffect, useState } from 'react';

const MilestoneTracker = () => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const updateStatus = () => {
            // Update this function to fetch project status
            const currentDate = new Date();
            setStatus(`Current status as of ${currentDate.toUTCString()}`);
        };

        updateStatus(); // Set initial status
        const interval = setInterval(updateStatus, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Milestone Tracker</h1>
            <p>{status}</p>
        </div>
    );
};

export default MilestoneTracker;