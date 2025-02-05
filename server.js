const express = require("express");
const connectDB = require("./Config/db");
require("dotenv").config();

connectDB();
const app = express();
app.use(express.json());

app.use("/api/auth", require("./Routes/Auth"));
app.use("/api/flights", require("./Routes/Flight"));
app.use("/api/bookings", require("./Routes/bookingRoutes"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log("Server running on port 5000"));
