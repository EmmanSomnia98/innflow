const express = require('express');
const router = express.Router();
const bookingControllers = require('../controllers/bookingControllers');
const authMiddleware = require('../middlewares/authMiddleware');

// Apply authentication middleware to all booking routes
router.use(authMiddleware);

router.get('/bookings', bookingControllers.getBookings);
router.get('/bookings/:id', bookingControllers.getBooking);
router.post('/bookings', bookingControllers.createBooking);
router.put('/bookings/:id', bookingControllers.updateBooking);
router.delete('/bookings/:id', bookingControllers.deleteBooking);

module.exports = router;