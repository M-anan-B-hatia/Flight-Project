const express = require("express");
const { bookFlight, getBookings } = require("../Controllers/bookingController");
const auth = require("../Middleware/authMiddleware");

const router = express.Router();
router.post("/book-flight", auth, bookFlight);
router.get("/bookings", auth, getBookings);

module.exports = router;
