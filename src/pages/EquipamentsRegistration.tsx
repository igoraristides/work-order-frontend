import React from "react";
import { Box, Typography } from "@mui/material";
import EquipamentsRegistrationForm from "../components/EquipmentsRegistrationForm";
import { AiOutlineUserAdd } from 'react-icons/ai'


const EquipamentsRegistration: React.FC<any> = () => {
  return (
    <>
      <Box
        sx={{
          marginLeft: "30px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          position: "relative",
          width: '100%',
          alignItems: 'center',
        }}
      >
        <AiOutlineUserAdd style={{ width: '50px', height: '50px', color: '#036ba2' }} />
        <Typography variant="h5" p={4} align="center" color='#036ba2'>
          Novos Equipamentos
        </Typography>
        <EquipamentsRegistrationForm />
      </Box>
    </>
  );
};

export default EquipamentsRegistration;
