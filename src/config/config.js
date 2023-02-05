import axios from "axios";

// https://silk-abounding-airmail.glitch.me
export const API_URL = "http://localhost:2600";
export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});
