# innflow

Base URL: https://innflow.vercel.app/

## Endpoints ##
For guests:
| GET | '/api/guests' | Retrieves a list of all current guests.
| POST | '/api/guests' | Creates a new guest.
| PUT | '/api/guests/:id' | Updates data of an existing guest.
| DELETE | '/api/guests/:id | Deletes a guest from the database.

For rooms:
| GET | '/api/rooms' | Retrieves a list of all current rooms.
| POST | '/api/rooms' | Creates a new room.
| PUT | '/api/rooms/:id' | Updates data of an existing room.
| DELETE | '/api/rooms/:id | Deletes a room from the database.

For bookings:
| GET | '/api/bookings' | Retrieves a list of all current room reservations.
| POST | '/api/bookings' | Creates a new reservation.
| PUT | '/api/bookings/:id' | Updates data of an existing reservation.
| DELETE | '/api/bookings/:id | Deletes a reservation from the database.

## Sample Request ##
Guest:
{
 {
    "_id": "68f20cc23a0e5310b6187a35",
    "name": "Yuki",
    "email": "yuki98@example.com",
    "age": 12,
    "createdAt": "2025-10-17T09:30:42.389Z",
    "updatedAt": "2025-10-17T09:30:42.389Z",
    "__v": 0
  },
}

Room:
{
 {
    "_id": "68f20f4b3a0e5310b6187a4c",
    "number": "104",
    "type": "Standard Single-bed Suite",
    "price": 700,
    "status": "occupied",
    "createdAt": "2025-10-17T09:41:31.543Z",
    "updatedAt": "2025-10-17T09:46:22.270Z",
    "__v": 0
  },
}

Booking:
{
 {
    "_id": "68f214f53a0e5310b6187a5b",
    "guestId": "68f20d673a0e5310b6187a3d",
    "roomId": "68f20f4b3a0e5310b6187a4c",
    "checkInDate": "2025-10-25T00:00:00.000Z",
    "checkOutDate": "2025-11-03T00:00:00.000Z",
    "checkInTime": "2025-10-25T13:00:00.000Z",
    "checkOutTime": "2025-11-03T05:30:00.000Z",
    "status": "booked",
    "createdAt": "2025-10-17T10:05:41.387Z",
    "updatedAt": "2025-10-17T10:05:41.387Z",
    "__v": 0
  },
}

API URL: mongodb+srv://EmmanSomnia98:[REDACTED_BY_OWNER]@innflowdemo98.2exndjh.mongodb.net/?retryWrites=true&w=majority&appName=innflowdemo98

You can also access the Postman collection here: https://github.com/EmmanSomnia98/innflow/blob/main/postman/innflow-postman-collection.json
