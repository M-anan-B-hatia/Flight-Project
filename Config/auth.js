const axios = require("axios");
require("dotenv").config();

let amadeusToken = null;

const getAmadeusToken = async () => {
  if (amadeusToken) return amadeusToken;

  const response = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", {
    grant_type: "client_credentials",
    client_id: process.env.AMADEUS_API_KEY,
    client_secret: process.env.AMADEUS_API_SECRET,
  });

  amadeusToken = response.data.access_token;
  setTimeout(() => (amadeusToken = null), response.data.expires_in * 1000);
  return amadeusToken;
};

module.exports = { getAmadeusToken };
