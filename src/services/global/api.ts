import axios from "axios";
import { getTokenLocalStorage } from "./endPoints";

const api = axios.create({
  baseURL: "http://localhost:3020"
  // baseURL: "https://api-jogosdasorte.terabytetecnologia.com.br"
});

api.interceptors.request.use(async (config) => {
  const token = getTokenLocalStorage();

  if (token) {
    config.headers['x-access-token'] = token;
  }

  return config;
});

export default api;
