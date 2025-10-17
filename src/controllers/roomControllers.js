const Room = require('../models/roomModels');

// Get all Rooms
exports.getRooms = async (_req, res) => {
    try {
        const Rooms = await Room.find();
        res.json(Rooms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Room by ID
exports.getRoom = async (req, res) => {
    try {
        const Room = await Room.findById(req.params.id);
        if (!Room) return res.status(404).json({ error: 'Room not found' });
        res.json(Room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create Room
exports.createRoom = async (req, res) => {
    try {
        const newRoom = await Room.create(req.body);
        res.status(201).json(newRoom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Room
exports.updateRoom = async (req, res) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true
        });
        res.json(updatedRoom);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Room
exports.deleteRoom = async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.json({ message: 'Room deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};