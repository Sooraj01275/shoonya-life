import axios from "axios";

export const API = axios.create({
    baseURL: 'https://669f704cb132e2c136fdd9a0.mockapi.io/api'
})

export const fetchGet = (url, params) =>
    API.get(url, {
        headers: {
            "Content-Type": "application/json",
        },
    }, params)