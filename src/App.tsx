import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import { HeaderImg } from "./components/HeaderImg";
import { Typography } from "@mui/material";
import EquipamentsRegistration from "./pages/EquipamentsRegistration";

function App() {
  return (
    <>
      <Router>
        <HeaderImg></HeaderImg>
        <Typography variant="h4" p={4} align="center">
          Criar Ordem de Serviço
        </Typography>
        <Routes>
          <Route path="/" element={<UserRegistration />}></Route>
          <Route
            path="/equipaments"
            element={<EquipamentsRegistration />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
