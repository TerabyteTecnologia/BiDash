import axios from "axios";
import { getTokenLocalStorage } from "./endPoints";

const api = axios.create({
  baseURL: "https://api.apphacker.com.br/cliente/"
});

api.interceptors.request.use(async (config: any) => {
  const token = getTokenLocalStorage();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;