import axios, { type InternalAxiosRequestConfig } from "axios";
import { AppConfig } from "@config/AppConfig";

export const API = axios.create({
    baseURL: AppConfig.baseUrl,
    withCredentials: true,
})


function authRequestInterceptor (config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }

    config.withCredentials = true;
    return config
}

API.interceptors.request.use(authRequestInterceptor);
API.interceptors.response.use((response) => response.data, (error) => {
    const errorMsg = error.response?.data?.message || error.message;
    //display error notification with the errorMsg
})


