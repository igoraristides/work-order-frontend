export interface ServiceOrderRegistration {
    idClient: string,
    tasks?: Array<object>
    obs?: string
}

export interface Task {
    deviceID: number,
    ServiceOrders: Array<ServiceOrderId>
}

export interface ServiceOrderId {
    id: string
}
