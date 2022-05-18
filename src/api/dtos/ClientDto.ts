export interface ClientResponseDto {
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    cpf: string,
    active: boolean,
    Email: Array<Email>,
    Phone: Array<Phone>
}

export interface Email {
    id: number,
    address: string,
    primary: boolean,
    id_Client: string
}

export interface Phone {
    id: number,
    DDD: string,
    DDI: string,
    number: string,
    primary: boolean,
    id_PhoneType: 2,
    id_Client: string
}
