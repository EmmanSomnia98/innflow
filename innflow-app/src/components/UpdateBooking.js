import React, { useState } from 'react';
import { updateBooking } from '../services/bookingService';

const UpdateBooking = ({ bookingId }) => {
    const [formData, setFormData] = useState({
        name: '',
        roomType: '',
        checkInDate: '',
        checkOutDate: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateBooking(bookingId, formData);
            alert('Booking updated successfully!');
        } catch (error) {
            console.error('Error updating booking:', error);
            alert('Failed to update booking.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update Reservation</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Room Type:
                <input type="text" name="roomType" value={formData.roomType} onChange={handleChange} required />
            </label>
            <label>
                Check-In Date:
                <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
            </label>
            <label>
                Check-Out Date:
                <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
            </label>
            <button type="submit">Update Booking</button>
        </form>
    );
};

export default UpdateBooking;