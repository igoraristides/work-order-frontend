import React from "react";
import { Box, Typography } from "@mui/material";
import UserRegistrationForm from "../components/UserRegistrationForm";

const UserRegistration = () => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "10%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <Typography variant="h5" p={4} align="center">
          Cadastrar Cliente
        </Typography>
        <UserRegistrationForm />
      </Box>
    </>
  );
};

export default UserRegistration;
