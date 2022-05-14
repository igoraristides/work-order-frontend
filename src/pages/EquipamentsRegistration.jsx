import React from "react";
import { Box } from "@mui/material";

import EquipamentsRegistrationForm from "../components/EquipmentsRegistrationForm";

const EquipamentsRegistration = () => {
  return (
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
      <Box width="100%">
        <EquipamentsRegistrationForm />
      </Box>
    </Box>
  );
};

export default EquipamentsRegistration;
