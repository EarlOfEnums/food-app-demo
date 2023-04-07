import axios from "axios";
import process from "dotenv";

export default axios.create({
  baseURL: process.env.YELP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
});
