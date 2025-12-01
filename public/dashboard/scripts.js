const API_BASE_URL = "https://innflow.vercel.app/api";

// Fetch and display guests
async function fetchGuests() {
    try {
        const response = await fetch(`${API_BASE_URL}/guests`);
        const guests = await response.json();

        const tableBody = document.getElementById("guests-table-body");
        tableBody.innerHTML = ""; // Clear existing rows

        guests.forEach(guest => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${guest.name}</td>
                <td>${guest.email}</td>
                <td>${guest.age || "N/A"}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching guests:", error);
    }
}

// Fetch and display rooms
async function fetchRooms() {
    try {
        const response = await fetch(`${API_BASE_URL}/rooms`);
        const rooms = await response.json();

        const tableBody = document.getElementById("rooms-table-body");
        tableBody.innerHTML = ""; // Clear existing rows

        rooms.forEach(room => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${room.number}</td>
                <td>${room.type}</td>
                <td>${room.price}</td>
                <td>${room.status}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching rooms:", error);
    }
}

// Fetch and display bookings
async function fetchBookings() {
    try {
        const response = await fetch(`${API_BASE_URL}/bookings`);
        const bookings = await response.json();

        const tableBody = document.getElementById("bookings-table-body");
        tableBody.innerHTML = ""; // Clear existing rows

        bookings.forEach(booking => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${booking.guest}</td>
                <td>${booking.room}</td>
                <td>${booking.checkIn}</td>
                <td>${booking.checkOut}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching bookings:", error);
    }
}