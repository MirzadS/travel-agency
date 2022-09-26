import React from "react";
import TableNewTour from "../../components/TableNewTour/TableNewTour";
import TableTours from "../../components/TableTour/TableTours";
import TableUsers from "../../components/TableUsers/TableUsers";

const AgencyDashboard = () => {
  return (
    <div style={{ backgroundColor: "#cce", paddingBottom: "300px" }}>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        Kontrolna ploča
      </h1>
      <TableNewTour />
      <TableTours />
      <TableUsers />
    </div>
  );
};

export default AgencyDashboard;
