import React from "react";
import { Routes, Route } from "react-router-dom";
import FormRegister from ".";
import Perfil from "./pages/Profile/Perfil";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FormRegister />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default AppRoutes;
