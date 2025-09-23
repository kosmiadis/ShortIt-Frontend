import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";
import type { AuthResponse } from "@types/api";

export async function getAuth (): Promise<AuthResponse> {
    const res = await API.get(endpoints.auth.me.getEndpoint());
    return res.data;
}