import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <ToastContainer draggable={false} transition={Zoom} />
      </BrowserRouter>
    </div>
  );
}

export default App;
