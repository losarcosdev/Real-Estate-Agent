import axios from "axios";

// Development
// const API_URL = "http://localhost:3001/api/";

// Production
const API_URL = "https://realestate-api-udrw.onrender.com/api/";

export const realEstateApi = axios.create({ baseURL: API_URL });
