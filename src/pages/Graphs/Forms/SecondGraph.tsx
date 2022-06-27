import { Box, Button } from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import { Equipaments, GetBrands, GetGraphByDevice, GetModels } from '../../../api/api'
import { ByDeviceDto } from '../../../api/dtos/GraphsDTOs'
import Form from '../../../components/HookForm/Form/Form'
import ControlledSelect, { keyValueSelect } from '../../../components/HookForm/Select'
import useHookForm from '../../../hooks/UseHookForm/useHookForm'
import { ByDeviceSchema } from '../Graphs.schema'

const SecondGrapth = (props: any) => {

    const FORM_ID = 'Graph2'


    const initialValuesSecondGrapth: ByDeviceDto = {
        deviceModel: "",
        deviceBrand: ""
    }

    const [brands, setBrands] = React.useState<keyValueSelect[]>([]);

    const [models, setModels] = React.useState<keyValueSelect[]>([]);

    const { methods } = useHookForm(initialValuesSecondGrapth, ByDeviceSchema(), 'onSubmit')

    const init = async () => {
        try {

            const data = (await GetBrands()).data;
            setBrands([]);
            data.forEach(element => {
                setBrands(prevState => [...prevState, { key: element, value: element }])
            });
        } catch (error) { }
    };

    const GetModelsFromApi = async () => {
        try {

            const data = (await GetModels(methods.watch().deviceBrand)).data;
            setModels([]);
            data.forEach(element => {
                setModels(prevState => [...prevState, { key: element, value: element }])
            });
        } catch (error) { }
    };

    React.useEffect(() => {
        init();
    }, []);

    React.useEffect(() => {
        GetModelsFromApi();
    }, [methods.watch().deviceBrand]);


    const checkIsChecked = (): boolean | undefined => {
        if (methods.watch().deviceBrand == "") {
            return true;
        } else {
            return false;
        }
    }

    const HandleSubmit = async (formValues: ByDeviceDto) => {
        try {

            const response = await GetGraphByDevice(formValues);
            console.log(response);
            toast.success("Sucesso");
            methods.reset();

        } catch {
            toast.error("Erro");
            methods.reset();
        }
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Form id={FORM_ID} methods={methods} onSubmit={HandleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <ControlledSelect
                        name='deviceBrand'
                        control={methods.control}
                        label='Marca'
                        style={{ marginBottom: '10px' }}
                        items={brands}
                    />
                    <ControlledSelect
                        name='deviceModel'
                        control={methods.control}
                        label='Modelo'
                        style={{ marginBottom: '10px' }}
                        disabled={checkIsChecked()}
                        items={models}

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
export default SecondGrapth