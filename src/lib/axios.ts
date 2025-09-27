import axios, { type InternalAxiosRequestConfig } from "axios";
import { AppConfig } from "@config/AppConfig";
import { paths } from "@config/paths";
import { toast } from "sonner";

export const API = axios.create({
    baseURL: AppConfig.baseUrl,
    withCredentials: true,
})

function authRequestInterceptor (config: InternalAxiosRequestConfig) {
    if (config.headers) {
        config.headers.Accept = 'application/json';
    }

    // config.withCredentials = true;
    return config
}

API.interceptors.request.use(authRequestInterceptor);
API.interceptors.response.use((response) => response.data, (error) => {
    
    //display error notification with the errorMsg
    const errorMsg = error.response?.data?.message || error.message;
    toast.error(errorMsg);

    //if auth error occurs
    if (error.response?.status === 401) {
        const searchParams = new URLSearchParams();
        const redirectTo = searchParams.get('redirectTo') || window.location.pathname;
        window.location.href = paths.auth.login.getHref(redirectTo);
    }

    return Promise.reject(error);
})


