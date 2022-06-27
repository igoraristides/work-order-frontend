import { Box, Button } from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import { GetGraphByRevenue } from '../../../api/api'
import { ByRevenue } from '../../../api/dtos/GraphsDTOs'
import Form from '../../../components/HookForm/Form/Form'
import { FormUtils } from '../../../components/HookForm/formUtils/FormUtils'
import { ControlledTextField } from '../../../components/HookForm/TextField/TextField'
import useHookForm from '../../../hooks/UseHookForm/useHookForm'
import { ByRevenueSchema } from '../Graphs.schema'
import { GetFormattedDate } from './Utils'

const ThirdGrapth = (props: any) => {

    const FORM_ID = 'Graph3'

    const initialValuesThirdGrapth: ByRevenue = {
        startDate: "",
        endDate: "",
    }


    const HandleSubmit = async (formValues: ByRevenue) => {

        const requestBody = {
            startDate: GetFormattedDate(formValues.startDate).getTime(),
            endDate: GetFormattedDate(formValues.endDate).getTime(),
        }

        try {

            const response = await GetGraphByRevenue(requestBody);
            console.log(response);
            toast.success("Sucesso");
            methods.reset();

        } catch {
            toast.error("Erro");
            methods.reset();
        }

    }

    const { methods } = useHookForm(initialValuesThirdGrapth, ByRevenueSchema(), 'onSubmit')
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Form id={FORM_ID} methods={methods} onSubmit={HandleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <ControlledTextField
                        name='startDate'
                        control={methods.control}
                        label='Data inicial'
                        style={{ marginBottom: '10px' }}
                        mask={FormUtils.dateMask.mask}
                        maskChar={FormUtils.dateMask.maskChar}
                    />
                    <ControlledTextField
                        name='endDate'
                        control={methods.control}
                        label='Data final'
                        style={{ marginBottom: '10px' }}
                        mask={FormUtils.dateMask.mask}
                        maskChar={FormUtils.dateMask.maskChar}
                    />
                </div>
            </Form>
            <Box textAlign="center">
                <Button variant="contained" type="submit" form={FORM_ID} color={"primary"} style={{ margin: '20px' }} >
                    Gerar Gráfico
                </Button>
            </Box>
        </div>
    )

}
export default ThirdGrapth