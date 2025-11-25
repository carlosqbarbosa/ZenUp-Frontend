import api from "./api";

interface LoginResponse {
  mensagem: string;
  usuario: {
    id_user: number;
    nome_funcionario: string;
    email: string;
    tipo_usuario: string;
    id_empresa: number | null;
    empresas?: {
      id_empresa: number;
      dominio_email: string;
    } | null;
  };
}

interface RegisterData {
  nome_funcionario: string;
  email: string;
  password: string;
  dominio?: string;
}

// Adapta a resposta do backend para o formato esperado pelo frontend
function adaptUserResponse(usuario: any) {
  console.log(' Adaptando usuário:', usuario);

  // tenta pegar dominio de diferentes formas, MAS sem depender de nenhuma
  const dominio =
    usuario.dominio ||
    usuario.dominio_email ||
    usuario?.empresas?.dominio_email ||
    usuario?.empresa?.dominio_email ||
    "";

  return {
    id_usuario: usuario.id_usuario || usuario.id_user,
    nome_funcionario: usuario.nome_funcionario,
    email: usuario.email,
    tipo_usuario: usuario.tipo_usuario,
    id_empresa: usuario.id_empresa ?? null,
    dominio: dominio,
  };
}

export async function login(email: string, password: string) {
  try {
    const response = await api.post<LoginResponse>("/auth/login", {
      email,
      senha: password,
    });

    console.log(" Resposta completa do backend:", response.data);

    const usuario = response.data.usuario || response.data.user;

    console.log(" Usuário extraído:", usuario);

    if (!usuario) {
      throw new Error("Usuário não retornado pelo backend");
    }

    const adaptedUser = adaptUserResponse(usuario);

    localStorage.setItem("user", JSON.stringify(adaptedUser));

    if (!localStorage.getItem("profileData")) {
      const profileData = {
        nomeCompleto: usuario.nome_funcionario,
        email: usuario.email,
        dominio: usuario.empresas?.dominio_email || "",
      };
      localStorage.setItem("profileData", JSON.stringify(profileData));
    }

    return { user: adaptedUser };
  } catch (error: any) {
    console.error(
      "Erro ao tentar logar:",
      error.response?.data?.erro || error.message
    );
    throw error;
  }
}

export async function register(data: RegisterData) {
  try {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (!storedUser.id_empresa) {
      throw new Error(
        "Usuário logado não possui id_empresa. Não é possível cadastrar colaborador."
      );
    }

    const response = await api.post("/users/usuarios", {
      nome: data.nome_funcionario,
      email: data.email,
      senha: data.password,
      tipo_usuario: "colaborador",
      dominio: data.dominio,
      id_empresa: storedUser.id_empresa, 
      id_equipe: null,
    });

    const usuario = response.data;
    const adaptedUser = adaptUserResponse(usuario);

    localStorage.setItem("user", JSON.stringify(adaptedUser));

    return { user: adaptedUser };
  } catch (error: any) {
    console.error(
      "Erro no cadastro:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export function logout() {
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
