import * as Yup from 'yup';
import { ByDeviceDto, FromIntervalDto, ByRevenue } from '../../api/dtos/GraphsDTOs';

export const byIntervalSchema = (): Yup.SchemaOf<FromIntervalDto> => {
    return Yup.object({
        startDate: Yup
            .string()
            .required("Campo obrigatório"),
        endDate: Yup
            .string()
            .required("Campo obrigatório"),
    })
}

export const ByDeviceSchema = (): Yup.SchemaOf<ByDeviceDto> => {
    return Yup.object({
        deviceModel: Yup
            .string()
            .required("Campo obrigatório"),
        deviceBrand: Yup
            .string()
            .required("Campo obrigatório"),
    })
}

export const ByRevenueSchema = (): Yup.SchemaOf<ByRevenue> => {
    return Yup.object({
        startDate: Yup
            .string()
            .required("Campo obrigatório"),
        endDate: Yup
            .string()
            .required("Campo obrigatório"),
    })
}