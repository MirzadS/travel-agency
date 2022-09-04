import React from "react";
import ChatModal from "../../components/ChatModal/ChatModal";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HomepageGallery from "../../components/HomepageGallery/HomepageGallery";
import Footer from "../../components/Footer/Footer";
import TravelCard from "../../components/TravelCard/TravelCard";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChatModal />
      <HomepageGallery />
      <TravelCard />
      <Footer />
    </div>
  );
};

export default Homepage;
