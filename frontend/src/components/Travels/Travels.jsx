import React from "react";
import TravelCard from "../TravelCard/TravelCard";
import styles from "../TravelCard/TravelCardStyles.module.css";

const Travels = ({ title, openModal, isWishlist }) => {
  return (
    <div>
      <section className={styles.blogs} id={styles.blogs}>
        {/* <h1 className={styles.heading}> our daily posts </h1> */}
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={`${styles.swiper} ${styles.blogsSlider}`}>
          <div className={styles.cardsWrapper}>
            <TravelCard isWishlist={isWishlist} openModal={openModal} />
            <TravelCard isWishlist={isWishlist} openModal={openModal} />
            <TravelCard isWishlist={isWishlist} openModal={openModal} />
            <TravelCard isWishlist={isWishlist} openModal={openModal} />
            <TravelCard isWishlist={isWishlist} openModal={openModal} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travels;
