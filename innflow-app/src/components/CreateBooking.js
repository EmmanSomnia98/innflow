import React, { useState } from 'react';
import { createBooking } from '../services/bookingService';

const CreateBooking = () => {
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
            await createBooking(formData);
            alert('Booking created successfully!');
            setFormData({ name: '', roomType: '', checkInDate: '', checkOutDate: '' });
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('Failed to create booking.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Reservation</h2>
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
            <button type="submit">Create Booking</button>
        </form>
    );
};

export default CreateBooking;