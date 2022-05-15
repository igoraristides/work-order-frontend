import React from "react";
//import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import { HeaderImg } from "./components/HeaderImg";
import { Box } from "@mui/material";
import EquipamentsRegistration from "./pages/EquipamentsRegistration";

function App() {
  return (
    <div className="App">
      <HeaderImg></HeaderImg>
      <Box>
        <EquipamentsRegistration />
      </Box>
    </div>
  );
}

export default App;
