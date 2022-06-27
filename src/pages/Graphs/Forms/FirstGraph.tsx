import { Box, Button } from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import { GetGraphFromInterval } from '../../../api/api'
import { FromIntervalDto } from '../../../api/dtos/GraphsDTOs'
import Form from '../../../components/HookForm/Form/Form'
import { FormUtils } from '../../../components/HookForm/formUtils/FormUtils'

import { ControlledTextField } from '../../../components/HookForm/TextField/TextField'
import useHookForm from '../../../hooks/UseHookForm/useHookForm'
import { byIntervalSchema } from '../Graphs.schema'
import { GetFormattedDate } from './Utils'

const FirstGrapth = (props: any) => {

    const { setData } = props

    const FORM_ID = 'Graph1'

    const initialValuesFirstGrapth: FromIntervalDto = {
        startDate: "",
        endDate: "",
    }

    const HandleSubmit = async (formValues: FromIntervalDto) => {

        const requestBody = {
            startDate: GetFormattedDate(formValues.startDate).getTime(),
            endDate: GetFormattedDate(formValues.endDate).getTime(),
        }

        try {

            const response = await GetGraphFromInterval(requestBody);
            setData(response.data);
            toast.success("Gráfico gerado com sucesso!");
            methods.reset();

        } catch {
            toast.error("Erro ao gerar gráfico!");
            methods.reset();
        }


    }

    const { methods } = useHookForm(initialValuesFirstGrapth, byIntervalSchema(), 'onSubmit')

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
export default FirstGrapth