import axios from "axios";

export const API_URL = "https://silk-abounding-airmail.glitch.me";
export const axiosInstance = axios.create({
  baseURL: API_URL,
});
