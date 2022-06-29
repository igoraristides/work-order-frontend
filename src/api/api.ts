import { FromIntervalDto, ByDeviceDto } from './dtos/GraphsDTOs';
import axios, { AxiosPromise } from "axios";
import { ChangeStatus } from "./dtos/updateStatus";
import { ClientResponseDto } from './dtos/ClientDto';
import { EquipamentResponseDto } from './dtos/EquipamentDto';
import { ServiceResponseDto } from './dtos/ServiceDto';
import { IReport } from '../pages/Statistics/Statistic';

export const api = axios.create({
  baseURL: "https://workorder.jesuisjedi.com",
  withCredentials: false,
});

export function NewEquipament(newEquipamentDTO: any): AxiosPromise<any> {
  return api.post("device", newEquipamentDTO);
}

export function NewClient(newClientDTO: any): AxiosPromise<any> {
  return api.post("client", newClientDTO);
}

export function Equipaments(): AxiosPromise<EquipamentResponseDto[]> {
  return api.get("devices");
}

export function Clients(): AxiosPromise<ClientResponseDto[]> {
  return api.get("clients");
}

export function NewService(newServiceDTO: any): AxiosPromise<any> {
  return api.post("service", newServiceDTO);
}

export function Services(): AxiosPromise<ServiceResponseDto[]> {
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

export function GetGraphFromInterval(FromIntervalDto: any): AxiosPromise<any> {
  return api.post("work-orders/from-interval", FromIntervalDto);
}

export function GetGraphByDevice(ByDeviceDto: any): AxiosPromise<any> {
  return api.post("services/by-device", ByDeviceDto);
}

export function GetGraphByRevenue(ByRevenue: any): AxiosPromise<any> {
  return api.post("services/by-revenue", ByRevenue);
}

export function GetBrands(): AxiosPromise<string[]> {
  return api.get("/device/brands");
}

export function GetModels(brand: string): AxiosPromise<string[]> {
  return api.get("/device/models", {
    params: {
      brand: brand
    }
  });
}


export function GetReports(data: any): AxiosPromise<IReport> {
  return api.post("/work-orders/report", data);
}

export function GetForecast(data: any): AxiosPromise<string[]> {
  return api.post("/work-orders/forecast", data);
}