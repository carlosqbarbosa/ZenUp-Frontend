
import api from "./api";

interface RegisterData {
  nome: string;
  email: string;
  senha: string;
  tipo_usuario: string;
  dominio?: string;
}

export async function register(data: RegisterData) {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    const response = await api.post("/users/usuarios", {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
      tipo_usuario: data.tipo_usuario,
      dominio: data.dominio,
      id_empresa: storedUser.id_empresa, 
      id_equipe: null,                  
    });

    return response.data;

  } catch (error: any) {
    console.error("Erro ao registrar usuário:", error.response?.data || error.message);
    throw error;
  }
}
