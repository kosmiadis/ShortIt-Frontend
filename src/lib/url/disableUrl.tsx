import { endpoints } from "@config/endpoints";
import { API } from "@lib/axios";

export async function disableUrl ({ urlId }: {urlId: string}) {
    const res = await API.post(endpoints.urls.disable.getEndpoint(urlId));
    return res.data;
}