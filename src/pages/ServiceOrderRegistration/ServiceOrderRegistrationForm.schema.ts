import { off } from 'process';
import * as Yup from 'yup';
import { ServiceOrderRegistration, Task } from './ServiceOrderRegistration.types';

export const ServiceRegistrationFormSchema = (): Yup.SchemaOf<ServiceOrderRegistration> => {
    return Yup.object({
        idClient: Yup
            .string()
            .required("Campo obrigatório"),
        obs: Yup
            .string()
            .required("Campo obrigatório"),
    })
}