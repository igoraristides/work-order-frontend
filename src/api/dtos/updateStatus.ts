export interface ChangeStatus {
    id: string,
    workOrderStatus: {
        id: number
    }
    finishedAt?: number
}