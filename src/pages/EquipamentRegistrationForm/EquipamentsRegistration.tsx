import React from "react";
import { Box, Typography } from "@mui/material";
import EquipamentsRegistrationForm from "./EquipamentRegistrationForm";
import { CgSmartphoneChip } from 'react-icons/cg'


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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#bde0fe',
          borderRadius: "10px",
          padding: '30px',
          width: '540px',
          marginTop: '30px',
          alignItems: 'center',
        }}>
          <CgSmartphoneChip style={{ width: '50px', height: '50px', color: '#036ba2' }} />
          <Typography variant="h5" p={4} align="center" color='#036ba2'>
            Novos Equipamentos
          </Typography>
          <EquipamentsRegistrationForm />
        </div>
      </Box>
    </>
  );
};

export default EquipamentsRegistration;
