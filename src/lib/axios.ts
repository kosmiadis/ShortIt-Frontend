import axios from "axios";
import { AppConfig } from "@config/AppConfig";

export const API = axios.create({
    baseURL: AppConfig.baseUrl,
    withCredentials: true,
})


