import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Travels from "../../components/Travels/Travels";
import Footer from "../../components/Footer/Footer";
import TravelBooking from "../../components/TravelBooking/TravelBooking";
// import styles from "./DestinationsStyles.module.css";

const Destinations = () => {
  const [paymentFormModal, setPaymentFormModal] = useState(false);

  const openModal = () => {
    setPaymentFormModal(true);
  };

  return (
    <>
      <Navbar notHomepage={true} />
      <div style={{ paddingTop: "10px" }}>
        <Travels title="Lista destinacija" openModal={openModal} />
      </div>
      <TravelBooking
        isVisible={paymentFormModal}
        hide={() => setPaymentFormModal((prev) => !prev)}
      />
      <Footer />
    </>
  );
};

export default Destinations;
