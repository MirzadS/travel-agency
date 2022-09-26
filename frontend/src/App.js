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
import TravelDetails from "./pages/TravelDetails/TravelDetails";
import AgencyDashboard from "./pages/AgencyDashboard/AgencyDashboard";

import AccessTokenVerification from "./utils/AccessTokenVerification";
import UserPermission from "./utils/UserPermission";
import AgencyPermission from "./utils/AgencyPermission";
import AgencyUpdateTour from "./pages/AgencyUpdateTour/AgencyUpdateTour";

import TableUpdateTour from "./components/TableUpdateTour/TableUpdateTour";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registracija" element={<Register />} />

        <Route element={<AccessTokenVerification />}>
          {/* OBICNI KORISNIK */}
          <Route element={<UserPermission />}>
            <Route path="/pocetna" element={<Homepage />} />
            <Route path="/destinacije" element={<Destinations />} />
            <Route path="/lista-zelja" element={<Wishlist />} />
            <Route path="/o-nama" element={<AboutUs />} />

            <Route
              path="/detalji-putovanja/:tour_id"
              element={<TravelDetails />}
            />
          </Route>

          {/* AGENCIJA */}
          <Route element={<AgencyPermission />}>
            <Route path="/agencija/pocetna" element={<AgencyDashboard />} />
            <Route
              path="/agencija/azuriraj-putovanje/:tour_id"
              element={<TableUpdateTour />}
            />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
