const guest = require('../models/guestModels');

// Get all Guests
exports.getGuests = async (_req, res) => {
    try {
        const guests = await guest.find();
        res.json(guests);
    } catch (err) {
        console.error('Error fetching guests:', err.message);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get Guest by ID
exports.getGuest = async (req, res) => {
    try {
        const guest = await guest.findById(req.params.id);
        if (!guest) return res.status(404).json({ error: 'Guest not found' });
        res.json(guest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create Guest
exports.createGuest = async (req, res) => {
    try {
        const newGuest = await guest.create(req.body);
        res.status(201).json(newGuest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Guest
exports.updateGuest = async (req, res) => {
    try {
        const updatedGuest = await guest.findByIdAndUpdate(req.params.id, req.body, { new: true
        });
        res.json(updatedGuest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Guest
exports.deleteGuest = async (req, res) => {
    try {
        await guest.findByIdAndDelete(req.params.id);
        res.json({ message: 'Guest deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};