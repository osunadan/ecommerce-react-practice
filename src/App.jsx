import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Nav/Navbar"

function App() {
  return (
      <>
      <Routes>
          <Route path="/" element={<Navbar/>} />
      </Routes>
      </>
);
}

export default App;
