import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  // modify header here
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle error here
    return Promise.reject(error);
  },
);

export default api;
