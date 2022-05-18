import * as Yup from 'yup';
import { UserRegistration } from './UserRegistration.types';

export const userRegistrationSchema = (): Yup.SchemaOf<UserRegistration> => {
    return Yup.object({

        firstName: Yup
            .string()
            .required("Campo obrigatório"),
        lastName: Yup
            .string()
            .required("Campo obrigatório"),
        cpf: Yup
            .string()
            .required("Campo obrigatório"),
        telephone: Yup
            .string()
            .required("Campo obrigatório"),
        cellphone: Yup
            .string()
            .required("Campo obrigatório"),
        email: Yup
            .string()
            .required("Campo obrigatório"),
    })
}