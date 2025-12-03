import React from 'react';
import BookingList from './components/BookingList';
import CreateBooking from './components/CreateBooking';

const App = () => {
    return (
        <div>
            <header>
                <h1>Hotel Management System</h1>
            </header>
            <main>
                <CreateBooking />
                <BookingList />
            </main>
        </div>
    );
};

export default App;
