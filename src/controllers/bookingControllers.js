const Book = require('../models/bookingModels');

// Get all Bookings
exports.getBookings = async (_req, res) => {
    try {
        const Bookings = await Book.find();
        res.json(Bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Booking by ID
exports.getBooking = async (req, res) => {
    try {
        const Booking = await Book.findById(req.params.id);
        if (!Booking) return res.status(404).json({ error: 'Booking not found' });
        res.json(Booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create Booking
exports.createBooking = async (req, res) => {
    try {
        const newBooking = await Book.create(req.body);
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Booking
exports.updateBooking = async (req, res) => {
    try {
        const updatedBooking = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true
        });
        res.json(updatedBooking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Booking
exports.deleteBooking = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.json({ message: 'Booking deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};