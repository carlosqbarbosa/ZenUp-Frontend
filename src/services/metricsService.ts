import api from "./api";

export interface DailyMetrics {
  checkins: number;
  humor: string;
  participacao: number;
}

export async function getDailyMetrics(): Promise<DailyMetrics> {
  const response = await api.get("/metrics/daily");
  return response.data;
}