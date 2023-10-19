import axios from "axios";

export const axiosApi = axios.create({
    baseURL : "https://northwind.vercel.app/api"
})