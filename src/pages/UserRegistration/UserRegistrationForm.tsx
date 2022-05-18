import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { ControlledTextField } from "../../components/Form/TextField/TextField";
import useHookForm from "../../hooks/UseHookForm/useHookForm";
import { UserRegistration } from "./UserRegistration.types";
import { userRegistrationSchema } from "./UserRegistration.schema";
import Form from "../../components/Form/Form";
import { NewClient } from "../../api/api";
import { toast } from "react-toastify";

const UserRegistrationForm: React.FC<any> = () => {

  const initialValues: UserRegistration = {
    firstName: "",
    lastName: "",
    cpf: "",
    telephone: "",
    cellphone: "",
    email: "",
  };

  const FORM_ID = 'NewUser'

  const { methods } = useHookForm(initialValues, userRegistrationSchema(), 'onSubmit')

  const HandleSubmit = async (formValues: any) => {

    try {
      const response = await NewClient(formValues);
      toast.success("Usuário cadastrado com sucesso");
      methods.reset()
    } catch {
      toast.error("Falha ao cadastrar usuário");
      methods.reset()
    }

  }


  return (

    <Box style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Form id={FORM_ID} methods={methods} onSubmit={HandleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <ControlledTextField
            name='firstName'
            control={methods.control}
            label='Primeiro Nome'
            style={{ marginBottom: '10px' }}
          />
          <ControlledTextField
            name='lastName'
            control={methods.control}
            label='Último Nome'
            style={{ marginBottom: '10px' }}
          />
          <ControlledTextField
            name='cpf'
            control={methods.control}
            label='CPF'
            style={{ marginBottom: '10px' }}
          />
          <ControlledTextField
            name='telephone'
            control={methods.control}
            label='Telefone'
            style={{ marginBottom: '10px' }}
          />
          <ControlledTextField
            name='cellphone'
            control={methods.control}
            label='Celular'
            style={{ marginBottom: '10px' }}
          />
          <ControlledTextField
            name='email'
            control={methods.control}
            label='E-mail'
            style={{ marginBottom: '10px' }}
          />
        </div>
      </Form>
      <Box textAlign="center">
        <Button variant="contained" type="submit" form={FORM_ID} color={"primary"} style={{ marginTop: '20px' }}>
          Cadastrar
        </Button>
      </Box>
    </Box>

  );
};

export default UserRegistrationForm;
