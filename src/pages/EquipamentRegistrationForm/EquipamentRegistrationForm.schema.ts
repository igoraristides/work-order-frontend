import * as Yup from 'yup';
import { EquipamentRegistration } from './EquipamentRegistrationForm.types';

export const equipamentRegistrationSchema = (): Yup.SchemaOf<EquipamentRegistration> => {
    return Yup.object({
        brand: Yup
            .string()
            .required("Campo obrigatório"),
        model: Yup
            .string()
            .required("Campo obrigatório"),
        sku: Yup
            .string()
            .required("Campo obrigatório"),
        description: Yup
            .string()
            .required("Campo obrigatório"),
        photoURL: Yup
            .string()
            .required("Campo obrigatório"),
    })
}