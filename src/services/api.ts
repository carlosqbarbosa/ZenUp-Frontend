import axios from "axios";


export const api = axios.create({
  baseURL: "http://localhost:3001/api", 
  timeout: 8000, 
});

// Intercepta TODAS as requisições e adiciona o token se existir
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// Intercepta TODAS as respostas para tratar erros globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na requisição:", error);
    return Promise.reject(error);
  }
);
