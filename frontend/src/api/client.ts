const BASE = import.meta.env.VITE_API_BASE_URL?.toString() || "/api";

export const api = {
  async health(): Promise<string> {
    const res = await fetch(`${BASE}/health`);
    if (!res.ok) throw new Error("API error");
    const data = (await res.json()) as { status: string };
    return data.status;
  },
};