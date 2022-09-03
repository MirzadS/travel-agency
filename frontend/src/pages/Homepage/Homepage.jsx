import React from "react";
import ChatModal from "../../components/ChatModal/ChatModal";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HomepageGallery from "../../components/HomepageGallery/HomepageGallery";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ChatModal />
      <HomepageGallery />
    </>
  );
};

export default Homepage;
