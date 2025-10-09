import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";

export async function enableUrl ({ urlId }: {urlId: string}) {
    const res = await API.post(endpoints.urls.enable.getEndpoint(urlId));
    return res.data;
}