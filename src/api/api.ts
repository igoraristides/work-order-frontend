import axios from 'axios'

export const api = axios.create({
    baseURL: '/',
    withCredentials: false
})