import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import "./index.css";
import Wishlist from "./pages/Wishlist/Wishlist";
import Destinations from "./pages/Destinations/Destinations";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registracija" element={<Register />} />
        <Route path="/pocetna" element={<Homepage />} />
        <Route path="/destinacije" element={<Destinations />} />
        <Route path="/lista-zelja" element={<Wishlist />} />
        <Route path="/o-nama" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
