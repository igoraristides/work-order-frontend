import React from "react";
import UserRegistration from "./pages/UserRegistration";
import { HeaderImg } from "./components/HeaderImg";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <HeaderImg></HeaderImg>
      <Box>
        <UserRegistration />
      </Box>
    </div>
  );
}

export default App;
