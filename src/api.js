import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL || 'https://api.instantwebtools.net/v1/',
});

export default api;