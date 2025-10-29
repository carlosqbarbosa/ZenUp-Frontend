import { api } from "./api";

interface LoginResponse {
  token: string;
  user: {
    id_usuario: number;
    nome: string;
    email: string;
    tipo_usuario: string;
  };
}

export async function login(email: string, senha: string): Promise<LoginResponse> {
  const response = await api.post("/login", { email, senha });
  const { token, user } = response.data;

  // Salva no localStorage
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  return { token, user };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
}

export function getStoredUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}