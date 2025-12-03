import React, { useEffect, useState } from 'react';
import { getBookings, deleteBooking } from '../services/bookingService';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await getBookings();
                setBookings(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteBooking(id);
            setBookings(bookings.filter((booking) => booking._id !== id));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    return (
        <div>
            <h2>All Reservations</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        <p>Name: {booking.name}</p>
                        <p>Room Type: {booking.roomType}</p>
                        <p>Check-In: {booking.checkInDate}</p>
                        <p>Check-Out: {booking.checkOutDate}</p>
                        <button onClick={() => handleDelete(booking._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;