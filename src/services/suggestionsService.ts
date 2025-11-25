import api from "./api";

export interface Suggestion {
  text: string;
  type: "warning" | "success" | "error";
}

export async function getSuggestions(): Promise<Suggestion[]> {
  const response = await api.get("/metrics/suggestions");
  return response.data;
}