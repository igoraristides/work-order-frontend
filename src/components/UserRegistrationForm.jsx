import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const UserRegistrationForm = () => {
  const [client, setClient] = useState({
    firstName: undefined,
    lastName: undefined,
    cpf: undefined,
    phone: undefined,
    cellphone: undefined,
    email: undefined,
  });

  const [firstNameClient, setFirstNameClient] = useState("");
  const [lastNameClient, setLastNameClient] = useState("");
  const [cpfClient, setCpfClient] = useState("");
  const [emailClient, setEmailClient] = useState("");
  const [cellphoneClient, setCellphoneClient] = useState("");
  const [phoneClient, setPhoneClient] = useState("");

  const handeSubmit = (e) => {
    e.preventDefault();
    setClient({
      firstName: firstNameClient,
      lastName: lastNameClient,
      cellphone: cellphoneClient,
      phone: phoneClient,
      email: emailClient,
      cpf: cpfClient,
    });

    console.log(client);

    setFirstNameClient("");
    setLastNameClient("");
    setCellphoneClient("");
    setEmailClient("");
    setPhoneClient("");
    setCpfClient("");
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        autoComplete="off"
        onSubmit={handeSubmit}
      >
        <TextField
          required
          id="firstName"
          label="Primeiro nome"
          value={firstNameClient}
          onChange={(e) => setFirstNameClient(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="lastName"
          label="Ultimo nome"
          value={lastNameClient}
          onChange={(e) => setLastNameClient(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="cpf"
          label="CPF"
          value={cpfClient}
          onChange={(e) => setCpfClient(e.target.value)}
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
          <Button variant="contained" type="submit" color="success">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UserRegistrationForm;
