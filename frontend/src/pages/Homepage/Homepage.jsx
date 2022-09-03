import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import HomepageGallery from "../../components/HomepageGallery/HomepageGallery";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomepageGallery />
    </>
  );
};

export default Homepage;
