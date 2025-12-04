const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the CORS middleware
const connectDB = require('./db');
const guestRoutes = require('./routes/guestRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();
connectDB();

const app = express();

// Enable CORS
app.use(cors()); // Allow all origins by default

app.use(bodyParser.json());
app.use('/api', guestRoutes);
app.use('/api', roomRoutes);
app.use('/api', bookingRoutes);

// Dynamic port for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export the app (optional, for testing or other uses)
module.exports = app;