import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { EquipamentRegistration } from "./EquipamentRegistrationForm.types";
import { ControlledTextField } from "../../components/HookForm/TextField/TextField";
import useHookForm from "../../hooks/UseHookForm/useHookForm";
import Form from "../../components/HookForm/Form/Form";
import { equipamentRegistrationSchema } from "./EquipamentRegistrationForm.schema";
import { toast } from "react-toastify";
import { NewEquipament } from "../../api/api";

const EquipamentsRegistration = () => {
    const FORM_ID = 'NewEquipament'

    const initialValues: EquipamentRegistration = {
        brand: "",
        model: "",
        sku: "",
        description: "",
        photoURL: "",
    }

    const { methods } = useHookForm(initialValues, equipamentRegistrationSchema(), 'onSubmit')

    const HandleSubmit = async (formValues: any) => {

        try {
            const response = await NewEquipament(formValues);
            toast.success("Equipamento cadastrado com sucesso");
            methods.reset()
        } catch {
            toast.error("Falha ao cadastrar equipamento");
            methods.reset()
        }

    }

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Form id={FORM_ID} methods={methods} onSubmit={HandleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <ControlledTextField
                        name='brand'
                        control={methods.control}
                        label='Marca'
                        style={{ marginBottom: '10px' }}
                    />
                    <ControlledTextField
                        name='model'
                        control={methods.control}
                        label='Modelo'
                        style={{ marginBottom: '10px' }}
                    />
                    <ControlledTextField
                        name='sku'
                        control={methods.control}
                        label='SKU'
                        style={{ marginBottom: '10px' }}
                    />
                    <ControlledTextField
                        name='description'
                        control={methods.control}
                        label='Descrição'
                        style={{ marginBottom: '10px' }}
                    />
                    <ControlledTextField
                        name='photoURL'
                        control={methods.control}
                        label='URL da imagem'
                        style={{ marginBottom: '10px' }}
                    />
                </div>
            </Form>
            <Box textAlign="center">
                <Button variant="contained" type="submit" form={FORM_ID} color={"primary"} style={{ margin: '20px' }} >
                    Cadastrar
                </Button>
            </Box>
        </Box>
    );
};

export default EquipamentsRegistration;
