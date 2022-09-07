import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Travels from "../../components/Travels/Travels";
import Footer from "../../components/Footer/Footer";
// import styles from "./WishlistStyles.module.css";

const Wishlist = () => {
  return (
    <>
      <Navbar notHomepage={true} />
      <div style={{ paddingTop: "10px" }}>
        <Travels isWishlist={true} title="Spašena putovanja" />
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
