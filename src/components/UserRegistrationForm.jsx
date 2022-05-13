import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const UserRegistrationForm = () => {
  const [client, setClient] = useState({
    name: undefined,
    phone: undefined,
    cellphone: undefined,
    email: undefined,
    osNumber: undefined,
  });

  const [nameClient, setNameClient] = useState("");
  const [emailClient, setEmailClient] = useState("");
  const [cellphoneClient, setCellphoneClient] = useState("");
  const [phoneClient, setPhoneClient] = useState("");
  const [osClient, setOsClient] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    setClient({
      name: nameClient,
      cellphone: cellphoneClient,
      phone: phoneClient,
      email: emailClient,
      osNumber: osClient,
    });

    console.log(client);

    setNameClient("");
    setCellphoneClient("");
    setEmailClient("");
    setPhoneClient("");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handeSubmit}
      >
        <Typography variant="h6" align="center">
          Cliente
        </Typography>
        <TextField
          disabled
          label="Número OS"
          id="osNumber"
          margin="normal"
          value={osClient}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="name"
          label="Nome completo"
          placeholder="Joao da Silva"
          value={nameClient}
          onChange={(e) => setNameClient(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Telefone"
          id="phone"
          margin="normal"
          value={phoneClient}
          onChange={(e) => setPhoneClient(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          label="Celular"
          id="cellphone"
          margin="normal"
          value={cellphoneClient}
          onChange={(e) => setCellphoneClient(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="E-mail"
          id="email"
          margin="normal"
          value={emailClient}
          onChange={(e) => setEmailClient(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box textAlign="center">
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UserRegistrationForm;
