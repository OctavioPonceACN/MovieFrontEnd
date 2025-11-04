import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://localhost:44359/api/Movie/catalog",
  timeout: 10000,
});
