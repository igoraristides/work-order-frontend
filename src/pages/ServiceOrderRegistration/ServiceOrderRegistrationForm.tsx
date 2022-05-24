import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import MultipleSelectCheckmarks from "../../components/MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import Select from "../../components/Select/Select";
import { ClientResponseDto } from "../../api/dtos/ClientDto";
import { EquipamentResponseDto } from "../../api/dtos/EquipamentDto";
import { Clients, Equipaments, NewServiceOrder, Services } from "../../api/api";
import { ServiceResponseDto } from "../../api/dtos/ServiceDto";
import { toast } from "react-toastify";

const ServiceOrderRegistrationForm: React.FC<any> = () => {
  const [equipaments, setEquipaments] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);
  const [client, setClient] = useState<string>("");
  const [observations, setObservations] = React.useState<string>("");
  const [clientsList, setClientsList] = React.useState<ClientResponseDto[]>([]);
  const [servicesList, setServicesList] = React.useState<ServiceResponseDto[]>(
    []
  );
  const [equipamentsList, setEquipamentsList] = React.useState<
    EquipamentResponseDto[]
  >([]);
  const [serviceOrder, setServiceOrder] = React.useState<object>({
    idClient: "",
    tasks: [
      {
        services: "",
        deviceID: "",
      },
    ],

    obs: "",
  });

  const init = async () => {
    try {
      var responseClient = await Clients();
      var responseEquipaments = await Equipaments();
      var responseServices = await Services();

      setClientsList(responseClient.data);

      setEquipamentsList(responseEquipaments.data);

      setServicesList(responseServices.data);
    } catch (error) {}
  };

  React.useEffect(() => {
    init();
  }, []);

  const handleNames = () => {
    return clientsList.map((client) => ({
      value: client.id,
      key: client.name,
    }));
  };

  const handleEquipments = () => {
    return equipamentsList.map((equipments) => ({
      key: equipments.brand + " " + equipments.model,
      value: String(equipments.id),
    }));
  };

  const handleServices = () => {
    return servicesList.map((service) => ({
      key: service.description,
      value: String(service.id),
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await setServiceOrder({
      idClient: client,
      tasks: [
        {
          services: services.map((s) => ({ id: +s })),
          deviceID: Number(equipaments),
        },
      ],
      obs: observations,
    });
    try {
      const response = await NewServiceOrder(serviceOrder);
      toast.success("Serviço cadastrado com sucesso");
    } catch {
      toast.error("Falha ao cadastrar serviço");
    }
    setEquipaments("");
    setClient("");
    setServices([]);
    setObservations("");
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Select
          items={handleNames()}
          setItemName={setClient}
          itemName={client}
          label="Cliente"
        />
        <Select
          items={handleEquipments()}
          setItemName={setEquipaments}
          itemName={equipaments}
          label="Equipamentos"
        />
        <MultipleSelectCheckmarks
          items={handleServices()}
          setItemsNames={setServices}
          itemsNames={services}
          label="Serviços"
          disable={!equipaments.length}
        />
        <TextField
          id="outlined-basic"
          label="Observação"
          variant="outlined"
          multiline
          rows={4}
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
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
      </Box>
    </Box>
  );
};

export default ServiceOrderRegistrationForm;
