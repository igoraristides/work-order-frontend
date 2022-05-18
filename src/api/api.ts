import axios, { AxiosPromise } from 'axios'

export const api = axios.create({
    baseURL: 'http://workorder.jesuisjedi.com',
    withCredentials: false
})

export function NewEquipament(newEquipamentDTO: any): AxiosPromise<any> {
    return api.post('device', newEquipamentDTO)
}

export function NewClient(newClientDTO: any): AxiosPromise<any> {
    return api.post('client', newClientDTO)
}

export function Equipaments(): AxiosPromise<any> {
    return api.get('devices')
}

export function Clients(): AxiosPromise<any> {
    return api.get('clients')
}