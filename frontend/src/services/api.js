'use strict';

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

// Example GET request
export const getItems = async () => {
    try {
        const response = await apiClient.get('/items');
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching items: ${error.message}`);
    }
};

// Example POST request
export const createItem = async (item) => {
    try {
        const response = await apiClient.post('/items', item);
        return response.data;
    } catch (error) {
        throw new Error(`Error creating item: ${error.message}`);
    }
};

// Add other HTTP request methods as needed...
