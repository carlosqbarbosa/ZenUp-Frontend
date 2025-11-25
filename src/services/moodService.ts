import api from "./api";

export interface MoodMetrics {
  sentimentos: { nome: string; valor: number }[];
  energia: { nome: string; valor: number }[];
  estresse: { nome: string; valor: number }[];
}

export async function getMoodMetrics(): Promise<MoodMetrics> {
  const response = await api.get("/metrics/mood");
  return response.data;
}
