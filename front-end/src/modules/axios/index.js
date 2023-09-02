import axios from "axios";

// Set up Axios instance
const baseURL = "http://localhost:8000";
const instance = axios.create({ baseURL });

// Add interceptor to automatically add authorization header
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    // Return the response data when the response is successful (status 2xx)
    return response.data;
  },
  (error) => {
    // Customize the error handling logic here
    if (error.response) {
      // The request was made, and the server responded with a status code other than 2xx
      // You can access error details like status code, response data, etc.
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made, but there was no response from the server
      console.error("No response received from the server.");
    } else {
      // Something else happened while setting up the request
      console.error("An error occurred before the request was sent.");
    }
    // Return a rejected Promise with the error object
    return Promise.reject(error);
  }
);

export { instance };
