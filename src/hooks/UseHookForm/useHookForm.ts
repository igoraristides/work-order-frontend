import { Mode, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


const useHookForm = (initialValues: any, schema: any, mode?: Mode) => {

    const methods = useForm({
        defaultValues: initialValues,
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
        mode: mode || 'all'
    })
    return { methods }
}

export default useHookForm;