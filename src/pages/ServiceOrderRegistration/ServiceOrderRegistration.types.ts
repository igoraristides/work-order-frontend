export interface ServiceOrderRegistration {
    idClient: string,
    obs?: string
}

export interface Task {
    deviceID: number,
    ServiceOrders: Array<ServiceOrderId>
}

export interface ServiceOrderId {
    id: string
}
