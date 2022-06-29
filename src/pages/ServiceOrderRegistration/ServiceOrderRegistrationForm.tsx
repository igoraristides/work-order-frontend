import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import { Clients, Equipaments, NewServiceOrder, Services } from "../../api/api";

import { toast } from "react-toastify";
import ControlledSelect, { keyValueSelect } from "../../components/HookForm/Select";
import { ServiceRegistrationFormSchema } from "./ServiceOrderRegistrationForm.schema";
import useHookForm from "../../hooks/UseHookForm/useHookForm";
import { ControlledTextField } from "../../components/HookForm/TextField/TextField";

import Modal from "../../components/Modal/Modal";
import { Task } from "./ServiceOrderRegistration.types";
import Form from "../../components/HookForm/Form/Form";

import { BsCheckCircleFill } from "react-icons/bs";

import { VscError } from "react-icons/vsc";

const ServiceOrderRegistrationForm: React.FC<any> = () => {

  const [clientsList, setClientsList] = React.useState<keyValueSelect[]>([]);
  const [isValid, setIsValid] = React.useState<boolean | undefined>(undefined);
  const [task, setTask] = useState<Task[]>([]);

  const FORM_ID = 'odio'

  const initialsValues = {
    idClient: "",
    tasks: [],
    obs: "",
  };

  const { methods } = useHookForm(initialsValues, ServiceRegistrationFormSchema(), 'onSubmit')

  const init = async () => {
    try {
      var responseClient = (await Clients()).data;

      setClientsList([]);
      responseClient.forEach(element => {
        setClientsList(prevState => [...prevState, { key: element.name, value: element.id }])
      });

    } catch (error) { }
  };

  React.useEffect(() => {
    init();
  }, []);


  React.useEffect(() => {
    methods.setValue('tasks', task);
  }, [task]);


  const handleSubmit = async (formValues: any) => {
    try {
      const response = await NewServiceOrder(formValues);
      toast.success("Serviço cadastrado com sucesso");
    } catch {
      toast.error("Falha ao cadastrar serviço");
    }

    setIsValid(undefined);
    setTask([]);

    methods.reset();
  };

  const RenderMessage = () => {
    switch (isValid) {
      case true:
        return (
          <div style={{ display: "flex", flexDirection: "row", width: "100%", padding: "10px", alignItems: 'center', justifyContent: 'center' }}>
            <BsCheckCircleFill
              style={{ width: "25px", height: "25px", color: "green", marginRight: "10px" }}
            />
            <span style={{ marginRight: '10px', color: "rgba(0, 0, 0, 0.6)" }}> Foram registrados o total de {task.length} dispositivos e seus serviços</span>
          </div>
        )
      case false:
        return (
          <div style={{ display: "flex", flexDirection: "row", width: "100%", padding: "10px", alignItems: 'center', justifyContent: 'center' }}>
            <VscError
              style={{ width: "25px", height: "25px", color: "red", marginRight: "10px" }}
            />
            <span style={{ marginRight: '10px', color: "rgba(0, 0, 0, 0.6)" }}>Há necessidade de registrar ao menos 1 aparelho e seus serviços</span>
          </div>
        )
      default:
        return <></>
    }
  }


  const RenderTask = () => {
    return (
      <div className="cell">
        <div style={{ display: "flex", flexDirection: "row", width: "100%", padding: "10px", alignItems: 'center', justifyContent: 'center' }}>
          {RenderMessage()}
        </div>
      </div>
    )

  }

  const VerifyIsValid = () => {
    if (isValid === undefined) {
      setIsValid(false);
    }
  }

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Form id={FORM_ID} methods={methods} onSubmit={handleSubmit}>

        <ControlledSelect
          name='idClient'
          control={methods.control}
          label='Cliente'
          style={{ marginBottom: '10px' }}
          items={clientsList}
        />

        <Modal buttonLabel="Escolha dispositivos e serviços" tasks={setTask} setIsValid={setIsValid} />

        {RenderTask()}

        <ControlledTextField
          name="obs"
          id="outlined-basic"
          label="Observação"
          variant="outlined"
          control={methods.control}
          multiline
          rows={4}
          sx={{ width: "100%" }}
        />

        <Box textAlign="center">
          <Button
            variant="contained"
            type="submit"
            color={"primary"}
            style={{ marginTop: "20px" }}
            onClick={() => VerifyIsValid()}
          >
            Cadastrar
          </Button>
        </Box>
      </Form>
    </Box>
  );
};

export default ServiceOrderRegistrationForm;
