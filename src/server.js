const app = require('./src/app'); // Import the app instance from src/app.js

const PORT = process.env.PORT || 3000; // Use the PORT from .env or default to 3000

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});