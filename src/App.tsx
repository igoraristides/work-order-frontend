import React from "react";
//import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import { HeaderImg } from "./components/HeaderImg";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <HeaderImg title="Smartphone Fix" subTitle="cum on us"></HeaderImg>
      <Box>
        <Typography variant="h4" p={4} align="center">
          Criar Ordem de Serviço
        </Typography>
        <UserRegistration />
      </Box>
    </div>
  );
}

export default App;