const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const connectDB = require('./config/db');
const adoptRoutes = require('./routes/adoptRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/dogcare')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'Public' directory
app.use(express.static(path.join(__dirname, 'Public')));

// Routes
app.use(adoptRoutes);
app.use(reviewRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
