import React from "react";
//import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import { HeaderImg } from "./components/HeaderImg";
import { Box, Typography } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
