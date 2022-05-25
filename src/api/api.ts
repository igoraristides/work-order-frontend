import axios, { AxiosPromise } from "axios";
import { ChangeStatus } from "./dtos/updateStatus";

export const api = axios.create({
  baseURL: "http://workorder.jesuisjedi.com",
  withCredentials: false,
});

export function NewEquipament(newEquipamentDTO: any): AxiosPromise<any> {
  return api.post("device", newEquipamentDTO);
}

export function NewClient(newClientDTO: any): AxiosPromise<any> {
  return api.post("client", newClientDTO);
}

export function Equipaments(): AxiosPromise<any> {
  return api.get("devices");
}

export function Clients(): AxiosPromise<any> {
  return api.get("clients");
}

export function NewService(newServiceDTO: any): AxiosPromise<any> {
  return api.post("service", newServiceDTO);
}

export function Services(): AxiosPromise<any> {
  return api.get("services");
}

export function ServiceOrder(): AxiosPromise<any> {
  return api.get("work-orders");
}

export function NewServiceOrder(newServiceOrderDTO: any): AxiosPromise<any> {
  return api.post("work-order", newServiceOrderDTO);
}

export function UpdateStatus(ChangeStatus: ChangeStatus): AxiosPromise<any> {
  return api.patch("work-order", ChangeStatus);
}

