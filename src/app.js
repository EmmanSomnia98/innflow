const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./db');
const guestRoutes = require('./routes/guestRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use('/api', guestRoutes);
app.use('/api', roomRoutes);
app.use('/api', bookingRoutes);

// Add a root route
app.get('/', (req, res) => {
    res.send('Welcome to the InnFlow API!');
});

// Export the app for Vercel
module.exports = app;