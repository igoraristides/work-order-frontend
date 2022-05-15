import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistration from "./pages/UserRegistration";
import { HeaderImg } from "./components/HeaderImg";
import EquipamentsRegistration from "./pages/EquipamentsRegistration";

function App() {
  return (
    <>
      <Router>
        <HeaderImg></HeaderImg>
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
