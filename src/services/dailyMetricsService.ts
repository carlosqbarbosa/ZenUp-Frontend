import { api } from "./api";
import { dailyMetricsMock } from "../data/dailyMetrics";

export interface DailyMetric {
  nome: string;
  valor: number | string;
  descricao: string;
  cor: string;
  variacao: number; 
}

export async function getDailyMetrics(): Promise<DailyMetric[]> {
  try {
    const response = await api.get("/metrics/daily");
    return response.data;
  } catch (error) {
    console.warn("⚠️ API de métricas diárias indisponível. Usando mock local.");
    return dailyMetricsMock;
  }
}
