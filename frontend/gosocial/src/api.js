import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Update with your Spring Boot API base URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;