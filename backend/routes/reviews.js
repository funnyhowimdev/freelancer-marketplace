const express = require('express');
const router = express.Router();

// Mock database for ratings and reviews
let reviews = [];

// Endpoint to submit a rating and review
router.post('/submit', (req, res) => {
    const { userId, rating, comment } = req.body;
    if (!userId || !rating) {
        return res.status(400).send('User ID and rating are required.');
    }
    const newReview = { userId, rating, comment, createdAt: new Date() };
    reviews.push(newReview);
    res.status(201).send('Review submitted successfully.');
});

// Endpoint to retrieve all ratings and reviews
router.get('/all', (req, res) => {
    res.status(200).json(reviews);
});

module.exports = router;