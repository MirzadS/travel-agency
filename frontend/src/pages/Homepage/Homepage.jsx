import React, { useState } from "react";
import ChatModal from "../../components/ChatModal/ChatModal";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HomepageGallery from "../../components/HomepageGallery/HomepageGallery";
import Footer from "../../components/Footer/Footer";
import TravelCard from "../../components/TravelCard/TravelCard";
import TravelBooking from "../../components/TravelBooking/TravelBooking";
import Travels from "../../components/Travels/Travels";

const Homepage = () => {
  // const [paymentFormModal, setPaymentFormModal] = useState(false);

  // const openModal = () => {
  //   setPaymentFormModal(true);
  // };

  return (
    <div>
      <Navbar />
      <Hero />
      <ChatModal />
      <HomepageGallery />
      {/* <Travels title="Lista destinacija" openModal={openModal} /> */}
      <Travels title="Lista destinacija" />
      <Footer />

      {/* <TravelBooking
        isVisible={paymentFormModal}
        hide={() => setPaymentFormModal((prev) => !prev)}
      /> */}
    </div>
  );
};

export default Homepage;
