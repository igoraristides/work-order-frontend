import React from "react";
import { Box } from "@mui/material";
import UserRegistrationForm from "../components/UserRegistrationForm";

const UserRegistration: React.FC<any> = () => {
  return (
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
      <Box width="100%">
        <UserRegistrationForm />
      </Box>
    </Box>
  );
};

export default UserRegistration;
