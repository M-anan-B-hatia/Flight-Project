const express = require("express");
const { searchFlights } = require("../Controllers/flightController");
const auth = require("../Middleware/authMiddleware");

const router = express.Router();
router.post("/search-flights", auth, searchFlights);

module.exports = router;
