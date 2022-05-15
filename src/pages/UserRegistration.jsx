import React from "react";
import { Box, Typography } from "@mui/material";
import UserRegistrationForm from "../components/UserRegistrationForm";

const UserRegistration = () => {
  return (
    <>
      <Typography variant="h5" p={2} align="center">
        Cliente
      </Typography>
      <Box
        sx={{
          maxWidth: "50%",
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
        <UserRegistrationForm />
      </Box>
    </>
  );
};

export default UserRegistration;
