import React from 'react';
import './FreelancerProfile.css';

const FreelancerProfile = () => {
    const portfolioItems = [
        { title: 'Project A', description: 'Description of project A', link: '#' },
        { title: 'Project B', description: 'Description of project B', link: '#' },
        { title: 'Project C', description: 'Description of project C', link: '#' }
    ];

    const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

    const ratings = 4.5;
    const reviews = [
        { user: 'Client A', content: 'Great work!', date: '2026-03-19' },
        { user: 'Client B', content: 'Very satisfied!', date: '2026-03-18' }
    ];

    return (
        <div className="freelancer-profile">
            <h1>Freelancer Profile</h1>
            <section className="portfolio">
                <h2>Portfolio</h2>
                <ul>
                    {portfolioItems.map((item, index) => (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.link}>View Project</a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    {skills.map((skill, index) => <li key={index}>{skill}</li>)}
                </ul>
            </section>
            <section className="ratings-reviews">
                <h2>Ratings</h2>
                <p>{ratings} / 5</p>
                <h2>Reviews</h2>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.user}:</strong> {review.content} <em>({review.date})</em>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FreelancerProfile;