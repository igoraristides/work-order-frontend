import React from "react";
import { Box, Typography } from "@mui/material";

import EquipamentsRegistrationForm from "../components/EquipmentsRegistrationForm";

const EquipamentsRegistration = () => {
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
          Cadastrar Equipamentos
        </Typography>
        <EquipamentsRegistrationForm />
      </Box>
    </>
  );
};

export default EquipamentsRegistration;
