const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('Guest', guestSchema);