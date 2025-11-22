import { api } from "./api";

interface LoginResponse {
  token: string;
  user: {
    id_usuario: number;
    nome_funcionario: string;
    email: string;
    tipo_usuario: string;
  };
}

interface RegisterData {
  nome_funcionario: string;
  email: string;
  password: string;
  dominio?: string;
}


export async function login(email: string, password: string): Promise<LoginResponse> {
  const response = await api.post("/auth/login", { email, password });
  
  const { token, user } = response.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  const existingProfile = localStorage.getItem("profileData");
  if (!existingProfile) {
    const profileData = {
      nomeCompleto: user.nome_funcionario,
      email: user.email,
      dominio: user.dominio || "",
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));
  }

  return { token, user };
}

export async function register(data: RegisterData): Promise<LoginResponse> {
  const response = await api.post("/auth/register", data);
  
  const { token, user } = response.data;

  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));

  const profileData = {
    nomeCompleto: user.nome_funcionario,
    email: user.email,
    dominio: data.dominio || "",
  };
  localStorage.setItem("profileData", JSON.stringify(profileData));

  return { token, user };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("profileData");
  window.location.href = "/login";
}

export function getStoredUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function getStoredProfile() {
  const profile = localStorage.getItem("profileData");
  return profile ? JSON.parse(profile) : null;
}