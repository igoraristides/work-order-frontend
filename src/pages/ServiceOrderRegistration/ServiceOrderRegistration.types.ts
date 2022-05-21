export interface ServiceOrderRegistration {
    idClient: string,
    task: Array<Task>
    observations: string
}

export interface Task {
    deviceID: number,
    ServiceOrders: Array<ServiceOrderId>
}

export interface ServiceOrderId {
    id: string
}