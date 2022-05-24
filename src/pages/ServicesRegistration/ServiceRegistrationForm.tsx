import React from "react";
import { Box, Button } from "@mui/material";
import { ControlledTextField } from "../../components/HookForm/TextField/TextField";
import useHookForm from "../../hooks/UseHookForm/useHookForm";
import { ServiceRegistration } from "./ServiceRegistration.types";
import { ServiceRegistrationSchema } from "./ServiceRegistration.schema";
import Form from "../../components/HookForm/Form/Form";
import { NewService } from "../../api/api";
import { toast } from "react-toastify";

const ServiceRegistrationForm: React.FC<any> = () => {
  const initialValues: ServiceRegistration = {
    description: "",
    estimatedTimeCost: "",
    estimatedMaterialCost: "",
  };

  const FORM_ID = "NewService";

  const { methods } = useHookForm(
    initialValues,
    ServiceRegistrationSchema(),
    "onSubmit"
  );

  const HandleSubmit = async (formValues: any) => {
    formValues.estimatedMaterialCost = Number(formValues.estimatedMaterialCost);
    formValues.estimatedTimeCost = Number(formValues.estimatedTimeCost);
    console.log(formValues);
    try {
      console.log(formValues);
      const response = await NewService(formValues);
      toast.success("Serviço cadastrado com sucesso");
      methods.reset();
    } catch {
      toast.error("Falha ao cadastrar serviço");
      methods.reset();
    }
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Form id={FORM_ID} methods={methods} onSubmit={HandleSubmit}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <ControlledTextField
            name="description"
            control={methods.control}
            label="Nome do Serviço"
            style={{ marginBottom: "10px" }}
          />
          <ControlledTextField
            name="estimatedTimeCost"
            control={methods.control}
            label="Tempo Estimado (em minutos)"
            style={{ marginBottom: "10px" }}
          />
          <ControlledTextField
            name="estimatedMaterialCost"
            control={methods.control}
            label="Preço (R$)"
            style={{ marginBottom: "10px" }}
          />
        </div>
      </Form>
      <Box textAlign="center">
        <Button
          variant="contained"
          type="submit"
          form={FORM_ID}
          color={"primary"}
          style={{ marginTop: "20px" }}
        >
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceRegistrationForm;
