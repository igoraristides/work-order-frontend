import * as Yup from 'yup';
import { ServiceRegistration } from './ServiceRegistration.types';

export const ServiceRegistrationSchema = (): Yup.SchemaOf<ServiceRegistration> => {
    return Yup.object({
        description: Yup
            .string()
            .required("Campo obrigatório"),
        estimatedTimeCost: Yup
            .string()
            .required("Campo obrigatório"),
        estimatedMaterialCost: Yup
            .string()
            .required("Campo obrigatório"),
    })
}