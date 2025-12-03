const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the CORS middleware
const connectDB = require('./db');
const guestRoutes = require('./routes/guestRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const path = require('path');

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors()); // Allow all origins by default

app.use(bodyParser.json());
app.use('/api', guestRoutes);
app.use('/api', roomRoutes);
app.use('/api', bookingRoutes);

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../public')));

// Add a root route
app.get('/', (req, res) => {
    res.send('Welcome to the InnFlow API!');
});

// Export the app for Vercel
module.exports = app;