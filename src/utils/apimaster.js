import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "http://192.168.0.109:5000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

// Add custom properties for image and PDF URL
api.imageURL = "http://192.168.0.109:5000/images";
api.PdfURL = "http://192.168.0.109:5000/pdf";

// Optional: Error logging interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
