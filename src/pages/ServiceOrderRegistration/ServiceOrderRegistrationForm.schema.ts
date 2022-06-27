import { off } from 'process';
import * as Yup from 'yup';
import { ServiceOrderRegistration, Task } from './ServiceOrderRegistration.types';

export const ServiceRegistrationFormSchema = (): Yup.SchemaOf<ServiceOrderRegistration> => {
    return Yup.object({
        idClient: Yup
            .string()
            .required("Campo obrigatório"),
        tasks: Yup
            .array().of(Yup.object().shape({
                deviceID: Yup.number(),
                services: Yup.array().of(Yup.number()),
            })),
        obs: Yup
            .string()
            .required("Campo obrigatório"),
    })
}