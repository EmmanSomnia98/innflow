const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    guestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Guest', required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    checkInTime: { type: Date, required: true },
    checkOutTime: { type: Date, required: true },
    status: { type: String, enum: ['booked', 'checked-in', 'checked-out', 'cancelled'], default: 'booked' }
}, { timestamps: true });

module.exports = mongoose.model('User', bookSchema);