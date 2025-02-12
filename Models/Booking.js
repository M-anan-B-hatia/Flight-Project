const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  flightDetails: { type: Object, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
