const express = require('express');
const router = express.Router();
const guestControllers = require('../controllers/guestControllers');

router.get('/guests', guestControllers.getGuests);
router.get('/guests/:id', guestControllers.getGuest);
router.post('/guests', guestControllers.createGuest);
router.put('/guests/:id', guestControllers.updateGuest);
router.delete('/guests/:id', guestControllers.deleteGuest);

module.exports = router;