import React, { useState } from "react";
import { Box, Button } from "@mui/material";

import { Clients, Equipaments, NewServiceOrder, Services } from "../../api/api";
import { ServiceResponseDto } from "../../api/dtos/ServiceDto";
import { toast } from "react-toastify";
import ControlledSelect, { keyValueSelect } from "../../components/HookForm/Select";
import { ServiceRegistrationFormSchema } from "./ServiceOrderRegistrationForm.schema";
import useHookForm from "../../hooks/UseHookForm/useHookForm";
import { ControlledTextField } from "../../components/HookForm/TextField/TextField";

import Modal from "../../components/Modal/Modal";
import { Task } from "./ServiceOrderRegistration.types";
import Form from "../../components/HookForm/Form/Form";

const ServiceOrderRegistrationForm: React.FC<any> = () => {

  const [clientsList, setClientsList] = React.useState<keyValueSelect[]>([]);
  const [servicesList, setServicesList] = React.useState<keyValueSelect[]>([]);
  const [equipamentsList, setEquipamentsList] = React.useState<keyValueSelect[]>([]);
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
      var responseEquipaments = (await Equipaments()).data;
      var responseServices = (await Services()).data;

      setClientsList([]);
      responseClient.forEach(element => {
        setClientsList(prevState => [...prevState, { key: element.name, value: element.id }])
      });

      setEquipamentsList([]);
      responseEquipaments.forEach(element => {
        setEquipamentsList(prevState => [...prevState, { key: element.brand + " " + element.model, value: element.id.toString() }])
      });

      setServicesList([]);
      responseServices.forEach(element => {
        setServicesList(prevState => [...prevState, { key: element.description, value: element.id.toString() }])
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
    console.log(formValues);
  };


  const RenderTask = () => {
    return (
      <div className="cell">
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <span style={{ marginRight: '10px' }}>  {task.length}</span>
          <span> V </span>
        </div>

      </div>
    )

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

        <Modal buttonLabel="Escolha dispositivos e serviços" tasks={setTask} />

        {RenderTask()}

        <ControlledTextField
          name="obs"
          id="outlined-basic"
          label="Observação"
          variant="outlined"
          control={methods.control}
          multiline
          rows={4}
        />

        <Box textAlign="center">
          <Button
            variant="contained"
            type="submit"
            color={"primary"}
            style={{ marginTop: "20px" }}
          >
            Cadastrar
          </Button>
        </Box>
      </Form>
    </Box>
  );
};

export default ServiceOrderRegistrationForm;
