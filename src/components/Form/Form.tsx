import React from 'react';

import { FormProvider } from 'react-hook-form';

const Form: React.FC<any> = (props) => {

    const {
        children,
        methods,
        onSubmit,
        id
    } = props;


    return (
        <div >
            <FormProvider {...methods}>
                <form id={id} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                    {children}
                </form>
            </FormProvider>
        </div>
    )

}

export default Form;