import axios from 'axios';

const API_URL = 'https://innflow.vercel.app/api/bookings';

// Create a new reservation
export const createBooking = async (bookingData) => {
    const response = await axios.post(API_URL, bookingData);
    return response.data;
};

// Retrieve all reservations
export const getBookings = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Retrieve a specific reservation
export const getBookingById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

// Update a reservation
export const updateBooking = async (id, updatedData) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
};

// Delete a reservation
export const deleteBooking = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};