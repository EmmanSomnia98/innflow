const express = require('express');
const router = express.Router();
const roomControllers = require('../controllers/roomControllers');

router.get('/rooms', roomControllers.getRooms);
router.get('/rooms/:id', roomControllers.getRoom);
router.post('/rooms', roomControllers.createRoom);
router.put('/rooms/:id', roomControllers.updateRoom);
router.delete('/rooms/:id', roomControllers.deleteRoom);

module.exports = router;