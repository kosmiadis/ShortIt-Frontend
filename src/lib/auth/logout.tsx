import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";

export async function logout () {
    const res = await API.post(endpoints.auth.logout.getEndpoint())
    return res.data;
}