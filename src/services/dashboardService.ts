import {api} from "./api";

export async function getIndicadoresEmpresa(id_empresa: number) {
  const response = await api.get(`/dashboard/empresas/${id_empresa}/indicadores`);
  return response.data;
}

export async function getUsuariosEmpresa(id_empresa: number) {
  const response = await api.get(`/dashboard/empresas/${id_empresa}/usuarios`);
  return response.data;
}
