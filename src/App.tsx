import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import EquipamentsRegistration from "./pages/EquipamentsRegistration";
import HeaderImg from "./components/HeaderImg";
import ButtonAppBar from "./components/Appbar";

function App() {
  return (
    <>
      <Router>
        <ButtonAppBar />
        <header>
          <HeaderImg></HeaderImg>
        </header>
        <Routes>
          <Route path="/" element={<UserRegistration />}></Route>
          <Route
            path="/equipamentos"
            element={<EquipamentsRegistration />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
