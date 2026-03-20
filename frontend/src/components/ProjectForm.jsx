import React, { useState } from 'react';

const ProjectForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g. send data to API)
        console.log('Project submitted:', { title, description, budget });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Post a New Project</h2>
            <div>
                <label htmlFor="title">Project Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Project Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="budget">Budget:</label>
                <input
                    type="number"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Post Project</button>
        </form>
    );
};

export default ProjectForm;