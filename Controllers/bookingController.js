const axios = require("axios");
const Booking = require("../Models/Booking");
const { getAmadeusToken } = require("../Config/auth");

exports.bookFlight = async (req, res) => {
  try {
    const token = await getAmadeusToken();
    const { flightDetails } = req.body;

    const response = await axios.post("https://test.api.amadeus.com/v1/booking/flight-orders", { data: flightDetails }, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const booking = await Booking.create({ user: req.user.userId, flightDetails: response.data });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Error booking flight" });
  }
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.userId });
  res.json(bookings);
};
