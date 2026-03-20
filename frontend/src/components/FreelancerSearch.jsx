import React, { useState } from 'react';

const FreelancerSearch = ({ onSearch }) => {
    const [skill, setSkill] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch({ skill, category, rating, price, location });
    };

    return (
        <div>
            <h2>Search Freelancers</h2>
            <input 
                type="text" 
                placeholder="Skill"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <input 
                type="number" 
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default FreelancerSearch;