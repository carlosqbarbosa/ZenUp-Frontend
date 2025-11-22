import { api } from "./api";

interface RegisterData {
    nome_funcionario: string;
    email: string;
    password: string;
}

export async function register(data: RegisterData) {
 const response = await api.post("/users/usuarios", data); 
 return response.data;
}