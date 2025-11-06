import axios from "axios";

export const API = axios.create({
  baseURL: "https://posthhub.onrender.com/", // change later when deployed
});

// Automatically attach token if logged in
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
