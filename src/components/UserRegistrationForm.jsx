import React, { useState } from "react";
import { Box, Button, makeStyles, TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#fff",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
}));

const UserRegistrationForm = () => {
  const classes = useStyles();

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
          variant="outlined"
          id="firstName"
          label="Primeiro nome"
          value={firstNameClient}
          onChange={(e) => setFirstNameClient(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
            style: { color: "#fff" },
          }}
          InputProps={{
            className: classes.input,
            classes: {
              notchedOutline: classes.notchedOutline,
            },
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
            style: { color: "#fff" },
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
            style: { color: "#fff" },
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
            style: { color: "#fff" },
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
            style: { color: "#fff" },
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
            style: { color: "#fff" },
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
