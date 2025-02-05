const axios = require("axios");
const { getAmadeusToken } = require("../Config/auth");

exports.searchFlights = async (req, res) => {
  try {
    const { origin, destination, date, travelers } = req.body;
    const token = await getAmadeusToken();

    const response = await axios.get("https://test.api.amadeus.com/v2/shopping/flight-offers", {
      params: { originLocationCode: origin, destinationLocationCode: destination, departureDate: date, adults: travelers },
      headers: { Authorization: `Bearer ${token}` },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching flights" });
  }
};
