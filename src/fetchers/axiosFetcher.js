const axios = require("axios");

const axiosFetcher = async (url, params) => {
  try {
    const response = await axios.get(url, { params });

    return response.data;
  } catch (err) {
    console.error(err.message);
    throw new Error("Oops");
  }
};

module.exports = axiosFetcher;
