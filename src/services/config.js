import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://api.github.com',
    withCredentials: false,
    headers:{
        Accept:"application/json",
        "Content-Type": "application/json"
    }
})