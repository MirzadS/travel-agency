import React from "react";
import ChatModal from "../../components/ChatModal/ChatModal";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HomepageGallery from "../../components/HomepageGallery/HomepageGallery";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChatModal />
      <HomepageGallery />
      <Footer />
    </div>
  );
};

export default Homepage;
