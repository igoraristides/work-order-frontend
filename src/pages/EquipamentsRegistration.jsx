import React from "react";
import { Box, Typography } from "@mui/material";

import EquipamentsRegistrationForm from "../components/EquipmentsRegistrationForm";

const EquipamentsRegistration = () => {
  return (
    <>
      <Typography variant="h5" p={2} align="center">
        Equipamentos
      </Typography>
      <Box
        sx={{
          maxWidth: "55%",
          margin: "10px auto",
          border: "4px solid white",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <EquipamentsRegistrationForm />
      </Box>
    </>
  );
};

export default EquipamentsRegistration;
