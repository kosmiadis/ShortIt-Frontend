import type { ApiResponse } from "@types/api";

export type UrlResponse = ApiResponse<{
    //the id of the resource that was created
    urlId: string
}>