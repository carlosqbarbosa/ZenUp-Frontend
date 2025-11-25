import api from "./api";

export interface CheckinComparison {
  mes: string;
  fezCheckin: number;
  naoFezCheckin: number;
}

export async function getCheckinComparison(): Promise<CheckinComparison[]> {
  const response = await api.get("/metrics/checkins-comparison");
  return response.data;
}