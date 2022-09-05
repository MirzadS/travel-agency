import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Travels from "../../components/Travels/Travels";
import Footer from "../../components/Footer/Footer";
import styles from "./DestinationsStyles.module.css";

const Destinations = () => {
  return (
    <>
      <Navbar notHomepage={true} />
      <div style={{ paddingTop: "10px" }}>
        <Travels title="Lista destinacija" />
      </div>
      <Footer />
    </>
  );
};

export default Destinations;
