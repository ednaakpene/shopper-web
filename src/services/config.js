import axios from  "axios";

const baseUrl = "https://fakestoreapi.com"

export const apiClient = axios.create({
    baseURL: baseUrl,
})