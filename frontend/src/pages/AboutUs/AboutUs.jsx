import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";

const AboutUs = () => {
  return (
    <>
      <Navbar notHomepage={true} />
      <AboutUsSection />
      <Footer />
    </>
  );
};

export default AboutUs;
